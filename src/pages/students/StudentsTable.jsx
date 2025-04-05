import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStudents } from '../../Features/studentSlice';
import axios from 'axios';
import ImageModal from './ImageModal';
import Table from './Table';
import StudentDetailsModal from './StudentDetailsModal';

const classOrder = {
  '6': 1,
  '7': 2,
  '8': 3,
  '9': 4,
  '10': 5,
  'SSC candidate': 6
};

const StudentTable = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState('all');
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/students');
        if (Array.isArray(response.data)) {
          dispatch(setStudents(response.data));
        }
      } catch (error) {
        console.error('Failed to fetch students:', error);
      }
    };
    fetchStudents();
  }, [dispatch]);

  useEffect(() => {
    if (students.length > 0) {
      setDataLoaded(true);
    }
  }, [students]);

  const sortedStudents = students
    .filter(student => selectedClass === 'all' || student.class === selectedClass)
    .sort((a, b) => {
      const orderA = classOrder[a.class] || 7;
      const orderB = classOrder[b.class] || 7;
      if (orderA !== orderB) return orderA - orderB;
      if (a.gender === 'male' && b.gender !== 'male') return -1;
      if (b.gender === 'male' && a.gender !== 'male') return 1;
      return 0;
    });

  return (
    <div className="container mx-auto px-5 mt-5">
      <ImageModal 
        isOpen={isImageModalOpen}
        imageUrl={selectedImage}
        onClose={() => {
          setIsImageModalOpen(false);
          setTimeout(() => setSelectedImage(null), 300);
        }}
      />

      <StudentDetailsModal
        student={selectedStudent}
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
      />

      <div className="mb-4 flex flex-col md:flex-row md:items-center">
        <label htmlFor="classFilter" className="mr-2 mb-2 md:mb-0 text-gray-700">
          Filter by class:
        </label>
        <select 
          id="classFilter"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all w-full md:w-auto"
        >
          <option value="all">All Classes</option>
          <option value="6">Class 6</option>
          <option value="7">Class 7</option>
          <option value="8">Class 8</option>
          <option value="9">Class 9</option>
          <option value="10">Class 10</option>
          <option value="SSC candidate">SSC Candidate</option>
        </select>
      </div>

      <Table
        students={sortedStudents}
        onImageClick={(imageUrl) => {
          setSelectedImage(imageUrl);
          setIsImageModalOpen(true);
        }}
        onRowDoubleClick={(student) => {
          setSelectedStudent(student);
          setIsDetailsModalOpen(true);
        }}
        className={`transition-opacity duration-500 ease-in-out ${
          dataLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default StudentTable;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStudents } from '../../Features/studentSlice';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import ImageModal from './ImageModal';
import Table from './Table';
import StudentDetailsModal from './StudentDetailsModal';

const classOrder = {
  '6': 1,
  '7': 2,
  '8': 3,
  '9': 4,
  '10': 5,
  'SSC': 6
};

const StudentTable = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');
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
    .filter(student => 
      (selectedClass === 'all' || student.class === selectedClass) &&
      (selectedGender === 'all' || student.gender === selectedGender)
    )
    .sort((a, b) => {
      const classA = a.class.toString();
      const classB = b.class.toString();
      const orderA = classOrder[classA] || 7;
      const orderB = classOrder[classB] || 7;
      
      if (orderA !== orderB) return orderA - orderB;
      if (a.gender === 'Male' && b.gender !== 'Male') return -1;
      if (b.gender === 'Male' && a.gender !== 'Male') return 1;
      return 0;
    });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-2 md:px-4 lg:px-6 mt-4"
    >
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-4 flex flex-col space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-4"
      >
        {/* Class Filter */}
        <motion.div
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          className="flex-1 md:flex-none"
        >
          <label htmlFor="classFilter" className="text-sm font-medium text-gray-700">
            Filter by class:
          </label>
          <select 
            id="classFilter"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Classes</option>
            <option value="6">Class 6</option>
            <option value="7">Class 7</option>
            <option value="8">Class 8</option>
            <option value="9">Class 9</option>
            <option value="10">Class 10</option>
            <option value="SSC">SSC Candidates</option>
          </select>
        </motion.div>

        {/* Gender Filter */}
        <motion.div
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          className="flex-1 md:flex-none"
        >
          <label htmlFor="genderFilter" className="text-sm font-medium text-gray-700">
            Filter by gender:
          </label>
          <select 
            id="genderFilter"
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </motion.div>
      </motion.div>

      <div className={`transition-opacity duration-500 ease-in-out ${dataLoaded ? 'opacity-100' : 'opacity-0'}`}>
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
        />
      </div>
    </motion.div>
  );
};

export default StudentTable;
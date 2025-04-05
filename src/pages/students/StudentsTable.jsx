import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStudents } from '../../Features/studentSlice';
import axios from 'axios';
import ImageModal from './ImageModal';
import Table from './Table';
import StudentDetailsModal from './StudentDetailsModal';

const StudentTable = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

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

      <Table
        students={students}
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
  );
};

export default StudentTable;
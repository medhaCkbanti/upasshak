import React, { useEffect, useState } from 'react';
import { FaTrash, FaEdit, FaPlus, FaUser, FaMale, FaFemale, FaTransgender } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { 
  fetchStudents, 
  deleteStudent, 
  selectAllStudents,
  selectStudentStatus 
} from '../../Features/studentSlice';

const AllStudents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const students = useSelector(selectAllStudents);
  const status = useSelector(selectStudentStatus);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch, status]);

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      dispatch(deleteStudent(id));
    }
  };

  const handleEdit = (student) => {
    navigate(`/admin/updateStudent/${student._id}`, { 
      state: { student }
    });
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  const renderGenderIcon = (gender) => {
    switch(gender) {
      case 'Male': return <FaMale className="text-blue-500" />;
      case 'Female': return <FaFemale className="text-pink-500" />;
      default: return <FaTransgender className="text-purple-500" />;
    }
  };

  return (
    <div className="container mx-auto px-2 md:px-4 lg:px-6 mt-4">
      {/* Image Modal */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-in-out ${
          isModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeImageModal}
      >
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isModalOpen ? 'opacity-90' : 'opacity-0'
          }`}
        ></div>
        <div 
          className={`relative max-w-4xl max-h-screen transform transition-all duration-300 ${
            isModalOpen ? 'scale-100' : 'scale-90'
          }`}
          onClick={e => e.stopPropagation()}
        >
          <img 
            src={selectedImage} 
            alt="Full screen" 
            className={`max-w-full max-h-screen object-contain transition-opacity duration-300 ${
              isModalOpen ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <button
            onClick={closeImageModal}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors duration-200"
            aria-label="Close image"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-800" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Rest of your component remains the same */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="px-4 md:px-6 py-4 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">Student Records</h2>
          <button
            onClick={() => navigate('/admin/addStudent')}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors w-full md:w-auto justify-center"
          >
            <FaPlus className="text-sm md:text-base" /> 
            <span className="text-sm md:text-base">Add Student</span>
          </button>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          {students.length > 0 ? (
            students.map((student) => (
              <div key={student._id} className="border-b border-gray-200 p-4 hover:bg-gray-50">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex-shrink-0 h-12 w-12">
                      {student.image ? (
                        <img 
                          className="h-12 w-12 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity" 
                          src={student.image} 
                          alt={student.name}
                          onClick={() => handleImageClick(student.image)}
                        />
                      ) : (
                        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                          <FaUser className="text-gray-500 text-lg" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{student.name}</div>
                      <div className="text-sm text-gray-500">Class {student.class}</div>
                      <div className="text-sm text-gray-500">Age {student.age}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(student)}  
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <FaEdit className="text-lg" />
                    </button>
                    <button
                      onClick={() => handleDelete(student._id, student.name)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FaTrash className="text-lg" />
                    </button>
                  </div>
                </div>
                
                <div className="mt-4 pl-16 space-y-2">
                  <div className="text-sm">
                    <span className="font-medium">Father:</span> {student.fatherName}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Mother:</span> {student.motherName}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">School:</span> {student.schoolName}
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <span className="font-medium">Gender:</span>
                    {renderGenderIcon(student.gender)}
                    <span>{student.gender}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-sm text-gray-500">
              {status === 'loading' ? 'Loading students...' : 'No students found'}
            </div>
          )}
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student Info</th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Parents</th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">School</th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Gender</th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.length > 0 ? (
                students.map((student) => (
                  <tr key={student._id} className="hover:bg-gray-50">
                    {/* Student Info */}
                    <td className="px-4 md:px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          {student.image ? (
                            <img 
                              className="h-10 w-10 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity" 
                              src={student.image} 
                              alt={student.name}
                              onClick={() => handleImageClick(student.image)}
                            />
                          ) : (
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                              <FaUser className="text-gray-500" />
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{student.name}</div>
                          <div className="text-sm text-gray-500">Age {student.age} | Class {student.class}</div>
                        </div>
                      </div>
                    </td>
                    
                    {/* Parents Info */}
                    <td className="px-4 md:px-6 py-4">
                      <div className="text-sm text-gray-900 space-y-1">
                        <div className="line-clamp-1">{student.fatherName}</div>
                        <div className="line-clamp-1">{student.motherName}</div>
                      </div>
                    </td>
                    
                    {/* School Info */}
                    <td className="px-4 md:px-6 py-4">
                      <div className="text-sm text-gray-500 line-clamp-2">
                        {student.schoolName}
                        <div className="text-xs mt-1 text-gray-400">
                          {student.address}
                        </div>
                      </div>
                    </td>
                    
                    {/* Gender */}
                    <td className="px-4 md:px-6 py-4">
                      <div className="flex items-center gap-2">
                        {renderGenderIcon(student.gender)}
                        <span className="text-sm text-gray-700">{student.gender}</span>
                      </div>
                    </td>
                    
                    {/* Actions */}
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleEdit(student)}  
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <FaEdit className="text-lg" />
                        </button>
                        <button
                          onClick={() => handleDelete(student._id, student.name)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <FaTrash className="text-lg" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                    {status === 'loading' ? 'Loading students...' : 'No students found'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllStudents;
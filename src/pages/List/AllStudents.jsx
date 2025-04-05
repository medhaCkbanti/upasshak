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
    setTimeout(() => setSelectedImage(null), 300); // Wait for animation to complete
  };

  const renderGenderIcon = (gender) => {
    switch(gender) {
      case 'Male': return <FaMale className="text-blue-500" />;
      case 'Female': return <FaFemale className="text-pink-500" />;
      default: return <FaTransgender className="text-purple-500" />;
    }
  };

  return (
    <div className="container mx-auto pl-5 pr-80 mt-5">
      {/* Full-screen Image Modal with Transitions */}
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
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Student Records</h2>
          <button
            onClick={() => navigate('/admin/addStudent')}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            <FaPlus /> Add Student
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Info</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parents</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">School</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.length > 0 ? (
                students.map((student) => (
                  <tr key={student._id} className="hover:bg-gray-50">
                    {/* Student Info */}
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          {student.image ? (
                            <img 
                              className="h-10 w-10 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity duration-200" 
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
                          <div className="text-sm text-gray-500">Age: {student.age} | Class: {student.class}</div>
                        </div>
                      </div>
                    </td>
                    
                    {/* Parents Info */}
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        <div className="flex items-center gap-1">
                          <span className="font-medium">Father:</span> 
                          {student.fatherName}
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="font-medium">Mother:</span> 
                          {student.motherName}
                        </div>
                      </div>
                    </td>
                    
                    {/* School Info */}
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">
                        {student.schoolName}
                        <div className="text-xs mt-1 text-gray-400">
                          {student.address}
                        </div>
                      </div>
                    </td>
                    
                    {/* Gender */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {renderGenderIcon(student.gender)}
                        <span className="text-sm text-gray-700">{student.gender}</span>
                      </div>
                    </td>
                    
                    {/* Actions */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleEdit(student)}  
                          className="text-blue-600 hover:text-blue-900 transition-colors duration-200"
                          title="Edit"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(student._id, student.name)}
                          className="text-red-600 hover:text-red-900 transition-colors duration-200"
                          title="Delete"
                        >
                          <FaTrash />
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
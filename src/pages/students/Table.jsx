// Table.jsx
import React from 'react';
import { FaUser, FaMale, FaFemale, FaTransgender } from 'react-icons/fa';

const Table = ({ students, onImageClick, onRowDoubleClick }) => {
  const renderGenderIcon = (gender) => {
    switch(gender) {
      case 'Male': return <FaMale className="text-blue-500" />;
      case 'Female': return <FaFemale className="text-pink-500" />;
      default: return <FaTransgender className="text-purple-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Student Records</h2>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-full">
          <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200">
            <div className="col-span-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Info</div>
            <div className="col-span-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parents</div>
            <div className="col-span-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">School</div>
            <div className="col-span-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</div>
            <div className="col-span-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</div>
          </div>
          
          {students.length > 0 ? students.map((student) => (
            <div 
              key={student._id} 
              className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 border-b border-gray-200 cursor-pointer transition-colors duration-200"
              onDoubleClick={() => onRowDoubleClick(student)}
            >
              <div className="col-span-3 flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  {student.image ? (
                    <img 
                      className="h-10 w-10 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity duration-200" 
                      src={student.image} 
                      alt={student.name}
                      onClick={(e) => {
                        e.stopPropagation();
                        onImageClick(student.image);
                      }}
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
              
              <div className="col-span-2">
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
              </div>
              
              <div className="col-span-3 text-sm text-gray-500">{student.schoolName}</div>
              <div className="col-span-3 text-sm text-gray-500">{student.address}</div>
              
              <div className="col-span-1 flex items-center gap-2">
                {renderGenderIcon(student.gender)}
                <span className="text-sm text-gray-700">{student.gender}</span>
              </div>
            </div>
          )) : (
            <div className="col-span-12 px-6 py-4 text-center text-sm text-gray-500">
              No students found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
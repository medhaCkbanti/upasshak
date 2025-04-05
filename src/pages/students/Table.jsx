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
      <div className="px-4 md:px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">Student Records</h2>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-full">
          {/* Desktop Headers */}
          <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200">
            <div className="col-span-3 text-sm font-medium text-gray-500">Student Info</div>
            <div className="col-span-2 text-sm font-medium text-gray-500">Parents</div>
            <div className="col-span-3 text-sm font-medium text-gray-500">School</div>
            <div className="col-span-3 text-sm font-medium text-gray-500">Address</div>
            <div className="col-span-1 text-sm font-medium text-gray-500">Gender</div>
          </div>
          
          {students.length > 0 ? students.map((student) => (
            <div 
              key={student._id}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 px-4 md:px-6 py-4 hover:bg-gray-50 border-b border-gray-200 cursor-pointer transition-colors duration-200"
              onDoubleClick={() => onRowDoubleClick(student)}
            >
              {/* Mobile Layout */}
              <div className="md:hidden flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
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
                    <div>
                      <div className="text-sm font-medium text-gray-900">{student.name}</div>
                      <div className="text-xs text-gray-500">Class {student.class}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {renderGenderIcon(student.gender)}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-500">Father</div>
                    <div className="text-sm text-gray-900">{student.fatherName}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Mother</div>
                    <div className="text-sm text-gray-900">{student.motherName}</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-xs text-gray-500">School</div>
                    <div className="text-sm text-gray-900 line-clamp-1">{student.schoolName}</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-xs text-gray-500">Address</div>
                    <div className="text-sm text-gray-900 line-clamp-1">{student.address}</div>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex col-span-3 items-center">
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
                  <div className="text-sm text-gray-500">Age {student.age}</div>
                </div>
              </div>
              
              <div className="hidden md:block col-span-2">
                <div className="text-sm text-gray-900 space-y-1">
                  <div className="line-clamp-1">{student.fatherName}</div>
                  <div className="line-clamp-1">{student.motherName}</div>
                </div>
              </div>
              
              <div className="hidden md:block col-span-3 text-sm text-gray-900 line-clamp-2">
                {student.schoolName}
              </div>
              <div className="hidden md:block col-span-3 text-sm text-gray-900 line-clamp-2">
                {student.address}
              </div>
              
              <div className="hidden md:flex col-span-1 items-center gap-2">
                {renderGenderIcon(student.gender)}
                <span className="text-sm text-gray-700">{student.gender}</span>
              </div>
            </div>
          )) : (
            <div className="px-6 py-4 text-center text-sm text-gray-500">
              No students found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
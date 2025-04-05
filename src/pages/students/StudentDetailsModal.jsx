// StudentDetailsModal.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaUser, FaMale, FaFemale, FaTransgender } from 'react-icons/fa';

const StudentDetailsModal = ({ student, isOpen, onClose, onImageClick }) => {
    const renderGenderIcon = (gender) => {
      switch(gender) {
        case 'Male': return <FaMale className="text-blue-500 text-xl"/>;
        case 'Female': return <FaFemale className="text-pink-500 text-xl"/>;
        default: return <FaTransgender className="text-purple-500 text-xl"/>;
      }
    };

  if (!student) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xs backdrop-filter"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative bg-white/95 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl backdrop-blur"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-50"
            >
              <FaTimes className="text-2xl text-gray-600" />
            </button>

            <div className="p-8">
            <div className="text-center mb-8">
              <div className="inline-block relative">
                {student.image ? (
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-white shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      onImageClick(student.image);
                    }}
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mx-auto">
                    <FaUser className="text-4xl text-gray-500" />
                  </div>
                  )}
                  <div className="absolute bottom-0 right-2 bg-white p-1 rounded-full">
                    {renderGenderIcon(student.gender)}
                  </div>
                </div>
                <h2 className="text-3xl font-bold mt-4">{student.name}</h2>
                <p className="text-gray-600 mt-2">
                  Age: {student.age} | Class: {student.class}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/80 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-2">Parents Information</h3>
                  <p className="mb-1"><span className="font-medium">Father:</span> {student.fatherName}</p>
                  <p><span className="font-medium">Mother:</span> {student.motherName}</p>
                </div>

                <div className="bg-white/80 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-2">School Information</h3>
                  <p>{student.schoolName}</p>
                </div>

                <div className="md:col-span-2 bg-white/80 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-2">Address</h3>
                  <p>{student.address}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StudentDetailsModal;
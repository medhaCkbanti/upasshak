import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  createStudent, 
  selectStudentError, 
  selectStudentStatus, 
  updateStudent, 

} from '../../Features/studentSlice';

const AddStudent = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Get student data from navigation state if editing
  const studentToEdit = location.state?.student;
  const isEditMode = Boolean(studentToEdit);
  
  const status = useSelector(selectStudentStatus);
  const error = useSelector(selectStudentError);
  
  const { 
    register, 
    handleSubmit, 
    setValue, 
    watch, 
    reset,
    formState: { errors } 
  } = useForm();
  
  const selectedFile = watch('photo');
  const [preview, setPreview] = useState(studentToEdit?.image || null);

  // Set form values when in edit mode
  useEffect(() => {
    if (isEditMode && studentToEdit) {
      setValue('name', studentToEdit.name);
      setValue('age', studentToEdit.age);
      setValue('class', studentToEdit.class);
      setValue('fatherName', studentToEdit.fatherName);
      setValue('motherName', studentToEdit.motherName);
      setValue('schoolName', studentToEdit.schoolName);
      setValue('address', studentToEdit.address);
      setValue('gender', studentToEdit.gender);
      
      // Set image preview if exists
      if (studentToEdit.image) {
        setPreview(studentToEdit.image);
      }
    }
  }, [isEditMode, studentToEdit, setValue]);

  // Handle file preview for new images
  useEffect(() => {
    if (selectedFile?.[0]) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(selectedFile[0]);
    }
  }, [selectedFile]);

  const onSubmit = async (data) => {
    try {
      const payload = {
        ...data,
        class: data.class, // Ensure class field is properly named
        _id: isEditMode ? studentToEdit._id : undefined
      };
  
      if (isEditMode) {
        await dispatch(updateStudent(payload))
        alert('Student updated successfully!');
      } else {
        await dispatch(createStudent(payload))
        alert('Student created successfully!');
      }
      reset();
      navigate('/admin/allStudents');
    } catch (err) {
      console.error('Operation failed:', err);
      alert(`Operation failed: ${err.message}`);
    }
  }
  
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        {isEditMode ? `Edit Student: ${studentToEdit?.name}` : 'Add New Student'}
      </h2>

      {status === 'failed' && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Student Name*</label>
          <input
            {...register('name', { required: 'Name is required' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        {/* Age Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Age*</label>
          <input
            type="number"
            {...register('age', { 
              required: 'Age is required',
              min: { value: 3, message: 'Minimum age is 3' },
              max: { value: 25, message: 'Maximum age is 25' }
            })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>}
        </div>

        {/* Class Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Class*</label>
          <input
            {...register('class', { required: 'Class is required' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.class && <p className="mt-1 text-sm text-red-600">{errors.class.message}</p>}
        </div>

        {/* Father's Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Father's Name*</label>
          <input
            {...register('fatherName', { required: "Father's name is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.fatherName && <p className="mt-1 text-sm text-red-600">{errors.fatherName.message}</p>}
        </div>

        {/* Mother's Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Mother's Name*</label>
          <input
            {...register('motherName', { required: "Mother's name is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.motherName && <p className="mt-1 text-sm text-red-600">{errors.motherName.message}</p>}
        </div>

        {/* School Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">School Name*</label>
          <input
            {...register('schoolName', { required: 'School name is required' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.schoolName && <p className="mt-1 text-sm text-red-600">{errors.schoolName.message}</p>}
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Address*</label>
          <input
            {...register('address', { required: 'Address is required' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Gender*</label>
          <select
            {...register('gender', { required: 'Gender is required' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>}
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Student Photo {!isEditMode && '*'}
            {isEditMode && (
              <span className="text-gray-500 text-xs ml-1">(Leave empty to keep current photo)</span>
            )}
          </label>
          <input
            type="file"
            accept="image/*"
            {...register('photo', { required: !isEditMode && 'Photo is required' })}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {preview && (
            <div className="mt-2">
              <img 
                src={preview} 
                alt="Preview" 
                className="h-20 w-20 rounded-full object-cover"
              />
            </div>
          )}
          {errors.photo && <p className="mt-1 text-sm text-red-600">{errors.photo.message}</p>}
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 ${
            status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {status === 'loading' 
            ? (isEditMode ? 'Updating...' : 'Adding...') 
            : (isEditMode ? 'Update Student' : 'Add Student')
          }
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
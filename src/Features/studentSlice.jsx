import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    // Synchronous reducers
    setStudents: (state, action) => {
      state.students = Array.isArray(action.payload) ? action.payload : [];
    },
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    removeStudent: (state, action) => {
      state.students = state.students.filter(student => student._id !== action.payload);
    },

    updateStudentInState: (state, action) => {
      const index = state.students.findIndex(
        student => student._id === action.payload._id
      );
      if (index !== -1) {
        state.students[index] = action.payload;
      }
    },
 
   

    
    setLoading: (state) => {
      state.status = 'loading';
    },
    setSuccess: (state) => {
      state.status = 'succeeded';
      state.error = null;
    },
    setError: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    resetStudentState: (state) => {
      state.status = 'idle';
      state.error = null;
    }
  }
});

// Async Thunks
export const fetchStudents = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await fetch('http://localhost:5000/api/students');
    if (!response.ok) throw new Error('Failed to fetch students');
    const data = await response.json();
    dispatch(setStudents(data));
    dispatch(setSuccess());
  } catch (err) {
    dispatch(setError(err.message));
  }
};

export const createStudent = (studentData) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const formData = new FormData();
    Object.keys(studentData).forEach(key => {
      if (key === 'photo' && studentData[key][0]) {
        formData.append('image', studentData[key][0]);
      } else if (key !== 'photo') {
        formData.append(key, studentData[key]);
      }
    });

    const response = await fetch('http://localhost:5000/api/students', {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) throw new Error('Failed to create student');
    
    const newStudent = await response.json();
    dispatch(addStudent(newStudent));
    dispatch(setSuccess());
    return newStudent;
  } catch (err) {
    dispatch(setError(err.message));
    throw err;
  }
};

export const updateStudent = (studentData) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const formData = new FormData();

    // Append all fields except _id and photo
    Object.keys(studentData).forEach(key => {
      if (key !== '_id' && key !== 'photo') {
        formData.append(key, studentData[key]);
      }
    });

    // Append the image if it exists
    if (studentData.photo && studentData.photo[0]) {
      formData.append('image', studentData.photo[0]);
    }

    const response = await fetch(`http://localhost:5000/api/students/${studentData._id}`, {
      method: 'PUT',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to update student');
    }

    const updatedStudent = await response.json();

    // Update the state with the returned student data
    dispatch(updateStudentInState(updatedStudent));
    dispatch(setSuccess());

    return updatedStudent;
  } catch (err) {
    dispatch(setError(err.message));
    throw err;
  }
};

export const deleteStudent = (studentId) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await fetch(`http://localhost:5000/api/students/${studentId}`, {
      method: 'DELETE'
    });

    if (!response.ok) throw new Error('Failed to delete student');
    
    dispatch(removeStudent(studentId));
    dispatch(setSuccess());
    return studentId;
  } catch (err) {
    dispatch(setError(err.message));
    throw err;
  }
};

// Export actions
export const { 
  setStudents, 
  addStudent, 
  removeStudent, 
  updateStudentInState,
  setLoading,
  setSuccess,
  setError,
  resetStudentState
} = studentSlice.actions;

// Selectors
export const selectAllStudents = (state) => state.students.students;
export const selectStudentById = (state, studentId) => 
  state.students.students.find(student => student._id === studentId);
export const selectStudentStatus = (state) => state.students.status;
export const selectStudentError = (state) => state.students.error;

export default studentSlice.reducer;
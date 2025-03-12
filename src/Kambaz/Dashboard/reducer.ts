import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Course {
  _id: string;
  name: string;
  description: string;
  enrolled: boolean;
}

interface EnrollmentState {
  courses: Course[];
}

const initialState: EnrollmentState = {
  courses: [],
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    loadCourses(state, action: PayloadAction<Course[]>) {
      state.courses = action.payload;
    },

    toggleEnrollment(state, action: PayloadAction<string>) {
      const course = state.courses.find(
        (course) => course._id === action.payload
      );
      if (course) {
        course.enrolled = !course.enrolled;
      }
    },
  },
});

export const { loadCourses, toggleEnrollment } = enrollmentSlice.actions;

export default enrollmentSlice.reducer;
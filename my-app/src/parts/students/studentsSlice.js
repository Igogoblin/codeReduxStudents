import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "name1",
    surname: "surname1",
    age: 25,
    job: "noname",
  },
];

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
});

export default studentsSlice.reducer;

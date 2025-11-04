import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedDoc: null,
  activeId: null,
};

export const docSlice = createSlice({
  name: "doc",
  initialState,
  reducers: {
    setSelectedDoc: (state, action) => {
      state.selectedDoc = action.payload;
      state.activeId = null;
    },
    clearSelectedDoc: (state) => {
      state.selectedDoc = null;
      state.activeId = null;
    },
    setActiveId: (state, action) => {
      state.activeId = action.payload;
    },
  },
});

export const { setSelectedDoc, clearSelectedDoc, setActiveId } =
  docSlice.actions;

export const docReducer = docSlice.reducer;

import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  searchValue: '',
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating'
  }
}

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.currentPage = action.payload.currentPage;
      state.categoryId = action.payload.categoryId;
      state.sortProperty = action.payload.sortProperty;
    }
  }
})

export const {setCategoryId, setSort, setCurrentPage, setFilters} = filterSlice.actions
export default filterSlice.reducer
import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice(
    {
        name: "filters",
        initialState: {
            name:""
        },
        reducers: {
            selectNameFilter (state, action) {
                state.filters.name = state.filters.name.filter((contacts)=>contacts.name.toLowerCase().includes(action.payload.name.toLowerCase()))
}
        }
    }
)
export const { selectNameFilter } = slice.actions;
export default slice.reducer;
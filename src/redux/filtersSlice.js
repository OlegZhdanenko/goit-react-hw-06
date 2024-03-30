import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice(
    {
        name: "filters",
        initialState: {
            name:""
        },
        reducers: {
            selectNameFilter(state, action) {
                state.name = action.payload;
}
        }
    }
)
export const { selectNameFilter } = slice.actions;
export default slice.reducer;
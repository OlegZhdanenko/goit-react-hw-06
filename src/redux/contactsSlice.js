import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const slice = createSlice(
    {
        name: "contacts",
        initialState: {
            items: []
        },
        reducers: {
            addContact: {
                reducer(state, action) {
                    state.items.push(action.payload);
                },
                prepare(contactInfo) {
                    return {
                        payload: {
                            id: nanoid(),
                            ...contactInfo,
                        },
                    };
                },
            },
            deleteContact(state, action) { state.contacts = state.contacts.filter((user) => user.id !== action.payload.id) }
        }
    };
)
export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
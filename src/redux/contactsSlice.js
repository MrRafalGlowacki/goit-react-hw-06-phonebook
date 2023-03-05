import { createSlice, nanoid } from '@reduxjs/toolkit';

// const initState = {
//   inputs: {
//     name: '',
//     number: '',
//     filter: '',
//   },
//   contacts : []
// }

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    // 1.
    // inputHandler: (state, action) => {
    //   switch
    // }

    // 2.
    // onChangeName
    // onChangeNumber
    // onChangeFilter
    addContactAction: {
      reducer(state, action) {
        console.log(action.payload);
        state.unshift(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            name: contact.name,
            number: contact.number,
          },
        };
      },
    },
    setContactsAction: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
    deleteContactAction: (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContactAction, setContactsAction, deleteContactAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

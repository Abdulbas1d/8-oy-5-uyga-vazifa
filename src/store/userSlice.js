import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload)
    },
    deleteUser: (state, action) => {
      return state.filter(user => user.id !== action.payload)
    },
    editUser: (state, action) => {
        const index = state.findIndex(user => user.id !== action.payload)
        if (index !== -1) {
            state[index] = {...state[index], ...action.payload}
        }
    }
  }
})

export const { addUser, deleteUser, editUser } = usersSlice.actions
export default usersSlice.reducer
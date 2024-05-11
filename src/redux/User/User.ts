import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstName:'',
    lastName:'',
    Email:'',
    LoginIn: false
}

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    updateFirstname: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload
    },
    updateLastname: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.Email = action.payload
    },
    updateLoginStatus: (state, action: PayloadAction<boolean>) => {
      state.LoginIn = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateFirstname , updateLastname, updateEmail, updateLoginStatus } = userSlice.actions

export default userSlice.reducer
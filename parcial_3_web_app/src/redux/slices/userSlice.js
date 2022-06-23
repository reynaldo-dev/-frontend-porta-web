import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: true,
  user : {},

}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user
    },

  },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer




import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit";

const messageAPI = '';
const initialState = [];

export const fetchMessage = createAsyncThunk('greetings/getGreetingd', async () => {
    const response = await fetch(messageAPI);
    const data = await response.json();
    return data;
});

const messagesSlice = createSlice({
   name: 'messages',
   initialState,
   extraReducers: {
    [fetchMessage.fulfilled]: (state, action) => action.payload,
   },
});

export default messagesSlice.reducer;
 
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState { 
}

// Define the initial state using that type
const initialState: IInitialState = {
 
};

export const demoSlice = createSlice({
  name: "demo",
  // createSlice will infer the state type from the initialState argument
  initialState,
  reducers: {
    setDemo: (state, action: PayloadAction<any>) => { 

    },
   
  },
});

export const { setDemo } = demoSlice.actions;

export default demoSlice.reducer;

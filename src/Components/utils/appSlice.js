
import {createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : "app",
    initialState : {
        items : [],
    },
    reducers : {
        addItem : (state, action)=>{
            // console.log(current(state.items));
            state.items = [...state.items, action.payload];
        },
        clearItems : (state) =>{
            state.items = [];
        },
        removeItem : (state, action)=>{

            for(let idx=0; idx<state.items.length-1; idx++)
            {
                if(idx >= action.payload)
                {
                    state.items[idx] = state.items[idx+1];
                }                
            }
            state.items.pop();
        }
    }
})

export const {addItem, clearItems, removeItem} = appSlice.actions;
export default appSlice.reducer;
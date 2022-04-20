import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity: 0,
        total:0,
    },
    reducers:{
        addProduct:(state, action)=>{
            state.quantity += 1;
            state.products.push(action.payload)
            state.total += action.payload.price *action.payload.quantity;
        },
        clearProduct:(state)=>{
            state.products = [];
            state.total = 0;
            state.quantity = 0;
        },
    }
})

export const {addProduct,clearProduct,deleteProduct} = cartSlice.actions;
export default cartSlice.reducer;
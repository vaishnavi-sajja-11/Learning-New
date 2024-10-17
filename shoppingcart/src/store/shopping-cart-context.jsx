import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from '../dummy-products.js';
import { useState } from 'react';

export const CartContext = createContext({
    items:[],
    addItemtoCart : ()=>{},
    updateItemQuantity : () =>{}
});
function cartReducer(state,action){
    if(action.type === 'ADD_ITEM')
    {
                const updatedItems = [...state.items];
          
                const existingCartItemIndex = updatedItems.findIndex(
                  (cartItem) => cartItem.id === action.payload
                );
                const existingCartItem = updatedItems[existingCartItemIndex];
          
                if (existingCartItem) {
                  const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + 1,
                  };
                  updatedItems[existingCartItemIndex] = updatedItem;
                } else {
                  const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
                  updatedItems.push({
                    id: action.payload,
                    name: product.title,
                    price: product.price,
                    quantity: 1,
                  });
                
          
                return {
                    ...state, //not needed here bcz we have only one value here 
                  items: updatedItems,
                };
              };
        
    }
    if(action.type === 'UPDATE_ITEM')
    {
        const updatedItems = [...state.items];
          const updatedItemIndex = updatedItems.findIndex(
            (item) => item.id === action.payload.productId
          );
    
          const updatedItem = {
            ...updatedItems[updatedItemIndex],
          };
    
          updatedItem.quantity += action.payload.amount;
    
          if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
          } else {
            updatedItems[updatedItemIndex] = updatedItem;
          }
    
          return {
            ...state,
            items: updatedItems,
          };
    }

}
export default function CartContextProvider({children}){
    const [ cartState, cartDispatch ] = useReducer(cartReducer,{
        items: [],
      });
    const [shoppingCart, setShoppingCart] = useState({
        items: [],
      });    
    function handleAddItemToCart(id) {
        cartDispatch({
            type : 'ADD_ITEM',
            payload : id
        });
        
      }
    
      function handleUpdateCartItemQuantity(productId, amount) {
        cartDispatch({
            type: 'UPDATE_ITEM',
            payload : {
                productId,
                amount,
            }
        })
      }
    const cntxValue = {
      items: cartState.items, //using reducer state insteda of usestate's state bcz we are initilializing with same empty array of items in both cases
      addItemtoCart: handleAddItemToCart,
      updateItemQuantity : handleUpdateCartItemQuantity
    }
    return (
        <CartContext.Provider value={cntxValue}>
            {children}
            </CartContext.Provider>
    );
}
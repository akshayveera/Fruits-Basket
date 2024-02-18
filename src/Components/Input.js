
import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem, clearItems } from './utils/appSlice';
import { getRandomFruit } from './utils/random';

const Input = () => {

    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(addItem(getRandomFruit()));
    }

    const clearBasket = ()=>{
        dispatch(clearItems());
    }

  return (
    <div>
        <button onClick={()=>{
            handleClick();
        }}>add</button>

        <button onClick={()=>{
            clearBasket();
        }}>clear</button>

        
    </div>
  )
}

export default Input
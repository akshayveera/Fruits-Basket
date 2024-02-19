
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { removeItem } from './utils/appSlice';

const Output = () => {

    const itemsList = useSelector(store=>store.app.items);
    const dispatch = useDispatch();

    const removeFruit = (idx)=>{
        dispatch(removeItem(idx));
    }
    
  return (
    <div className=' h-full w-full flex flex-col items-center pt-5'>
        <div className='text-3xl '>Basket</div>
        <div className='bg-blue-100 h-[90%] w-[90%] text-5xl rounded p-7'>
            {itemsList.map((val, i)=>{
                return <button className='m-2 mt-2' key={i} onClick={()=>{
                    removeFruit(i);
                }}>{val}</button>
            })}

        </div>
    </div>
  )
}

export default Output

import React from 'react';
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
        <div className='md:text-3xl mb-3 font-bold text-purple-800'>Basket</div>
        <div className=' h-[85%] w-[550px] text-5xl rounded py-4 px-7 bg-gradient-to-t from-blue-400'>
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
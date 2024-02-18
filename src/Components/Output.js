
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
    <>
        <div>Output</div>
        <div>
            {itemsList.map((val, i)=>{
                return <button key={i} onClick={()=>{
                    removeFruit(i);
                }}>{val}</button>
            })}

        </div>
    </>
  )
}

export default Output
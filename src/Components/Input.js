
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, clearItems } from './utils/appSlice';
import { getRandomFruit } from './utils/random';

const Input = () => {

    const dispatch = useDispatch();
    const itemsList = useSelector(store=>store.app.items)
    console.log(itemsList.length);

    const handleClick = (fruit)=>{
        if(itemsList.length < 36)
        {
            dispatch(addItem(fruit));            
        }
        else{
            alert("basket is full");
        }
    }

    const clearBasket = ()=>{
        dispatch(clearItems());
    }

    const fruits = ["🍇","🍈","🍊","🍑","🍉","🍐","🍏","🍎","🥭","🍍"];

  return (
    <div className='bg-gradient-to-t from-purple-300 w-full flex flex-col  p-3 '>


        <div className='flex justify-between'>

            <button className='text-xl bg-purple-700 text-white px-5 py-1 rounded m-2 outline-none' onClick={()=>{
                handleClick(getRandomFruit());
            }}>add random fruit </button>

            <button className='text-xl bg-purple-700 text-white px-5 py-1 rounded m-2' onClick={()=>{
                clearBasket();
            }}>clear basket</button>

        </div>

        <div className='flex justify-evenly flex-wrap my-3'>
            {
                fruits.map((item, idx)=>{
                    return <button key={idx} onClick={()=>{
                        handleClick(fruits[idx])
                    }} className='text-4xl'>{item}</button>
                })
            }
        </div>





    </div>
  )
}

export default Input
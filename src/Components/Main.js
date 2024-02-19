
import React from 'react'
import Input from './Input'
import Output from './Output'

const Main = () => {
  return (
    <div className='bg-slate-100 h-[100vh] w-[100vw] flex items-center justify-center'>
      <div className='bg-white h-[90vh] w-[40vw] flex flex-col items-center'>        
          <Input/>
          <Output/>
      </div>        
    </div>
  )
}

export default Main
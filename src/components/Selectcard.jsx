import React from 'react'

const Selectcard = (props) => {
  return (
    <div className='relative'>
          <img className='object-cover w-full h-full' src={props.image} alt="/" />
          <div className='absolute top-0 left-0 w-full h-full bg-gray-900/30'>
            <p className='absolute text-xl font-bold text-white left-4 bottom-4'>{props.text}</p>
          </div> 
        </div>
  )
}

export default Selectcard
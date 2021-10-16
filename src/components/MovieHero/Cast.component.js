import React from 'react';

const Cast = (props) => {
  return (
    <div className='flex flex-col justify-center'>
      <img
        className=' px-3 rounded-full h-20 w-25'
        src={props.src}
        alt='cast'
      />
      <h3 className='mx-auto mt-2'>{props.name}</h3>
      <h3 className=' mx-auto text-gray-500'>{props.castName}</h3>
    </div>
  );
};

export default  Cast;
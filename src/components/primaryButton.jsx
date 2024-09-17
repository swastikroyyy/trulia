import { Loader } from '@mantine/core';
import React from 'react';

export default function PrimaryButton({ children, isLoading }) {
  if (isLoading) {
    return (
      <div className='bg-[#007882] text-white rounded-md  font-700 border bottom-2 w-auto border-[#007882] font-bold text-base h-10 flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#007882] m-auto'>
        <Loader color={'richblack'} size={'sm'} />
      </div>
    );
  }
  return (
    <div className='bg-[#007882] text-white w-[175px] rounded-md  font-700 border bottom-2 border-[#007882]  py-2 px-4 font-bold text-base flex items-center justify-center hover:bg-white hover:text-[#007882] m-auto'>
      {children}
    </div>
  );
}

import React from 'react'

function Screen() {
  return (
    <div className="flex items-center text-[#ffffff] pt-[20vh] flex-col bg-[url('/assets/bg.png')] w-full bg-no-repeat bg-cover h-[80vh]">
        <div className=' border-b-2'>
            <h1 className='text-[20px]'>Intract</h1>
            <h1 className='text-[50px]'>Academy</h1>
        </div>
        <div className='my-[40px] '>
            <h1 className='text-[20px] text-center w-[600px]'>Intract users have together made more than $100 million in web3.
            Join them and learn how to earn crypto!</h1>
        </div>
        <div className='flex rounded-[12px] py-[5px] w-[180px] px-[10px] bg-[#6C3EE9] items-center justify-around'>
            <button>Get Started</button>
            <img className='w-[30px] h-[30px]' src='/assets/right.svg' alt='no' />
        </div>
    </div>
  )
}

export default Screen
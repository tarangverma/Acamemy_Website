import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-row fixed z-[100] items-center justify-center ml-[] text-[#ffffff] h-[60px] w-full bg-[#060606]'>
        <div>
            <h1 className='text-[28px] font-[600] pr-[15px]'>intract.</h1>
        </div>
        <div className='flex flex-row px-[20px] text-[#a8a8a8] text-[18px] justify-around w-[500px]'>
            <div className='cursor-pointer'>Compass</div>
            <div className='cursor-pointer'>Explore</div>
            <div className='cursor-pointer'>Academy <sapan className=' bg-[#6C3EE9] text-[12px] text-[#ffffff] rounded-[8px] px-[5px] font-[600]' >New</sapan></div>
            <div className='cursor-pointer'>NFTs</div>
            <div className='cursor-pointer'>For Projects</div>
        </div>
        <div>
            <div className='flex flex-row px-[5px] py-[3px] bg-[#181818] items-center border border-[#737373] rounded-[18px] w-[400px]'>
                <img className='w-[30px] h-[30px] mr-[10px]' src='/assets/search.svg' alt='no' />
                <input className='w-full text-[#737373] bg-[#181818] text-decoration-none border-0 outline-none' type='text' placeholder='Search for ecosystems, trending quests etc.' />
            </div>
        </div>
        <div className='mx-[15px]'>
            <div className='rounded-[50%] border-2 border-[#A95D1D] p-[10px]'>
                <img className='w-[20px] h-[20px]' src='/assets/tv.svg' alt='no' /> 
            </div>
        </div>
        <div>
            <button className='bg-[#ffffff] text-[#000000] rounded-[8px] px-[8px] py-[5px]'>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar
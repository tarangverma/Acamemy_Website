import React from 'react'

function Projects() {
  return (
    <div className='flex flex-col bg-[#080808] border-b border-[#1c1c1c] pb-[10vh] items-center  justify-center'>
        <div className='flex flex-col pt-[10vh] text-[#ffffff] '>
            <h1 className='text-[30px]'>Top Crypto Creators and Projects to Follow</h1>
            <p className='text-[#7c7c7c]'>Answers to your crypto doubts, straight from the experts</p>
        </div>
        <div className='flex flex-row mt-[40px]'>
            <div className="border-2 border-[#232323] relative rounded-[12px] overflow-hidden">
                <img className='' src='/assets/richCat.webp' alt='no' />        
                <div className='absolute bottom-0 backdrop-blur-sm text-[25px] font-[600] p-[10px] text-[#ffffff]'>How to plan your retirement with crypto?</div>
                <div className='absolute rounded-[50%] p-[10px] bg-[#666666] border-[0.5px] border-[#] bg-opacity-[80%] right-[10px] top-[10px]'>
                    <img className='w-[20px] h-[20px]' src='/assets/video.svg' alt='no' />
                </div>
            </div>
            <div className="border-2 border-[#232323] relative mx-[20px] rounded-[12px] overflow-hidden">
                <img className='' src='/assets/frog.webp' alt='no' />        
                <div className='absolute bottom-0 backdrop-blur-sm text-[25px] font-[600] p-[10px] text-[#ffffff]'>How to plan your retirement with crypto?</div>
                <div className='absolute rounded-[50%] p-[10px] bg-[#666666] border-[0.5px] border-[#] bg-opacity-[80%] right-[10px] top-[10px]'>
                    <img className='w-[20px] h-[20px]' src='/assets/video.svg' alt='no' />
                </div>
            </div>
            <div className="border-2 border-[#232323] relative mr-[20px] rounded-[12px] overflow-hidden">
                <img className='' src='/assets/unicorn.webp' alt='no' />        
                <div className='absolute bottom-0 backdrop-blur-sm text-[25px] font-[600] p-[10px] text-[#ffffff]'>How to plan your retirement with crypto?</div>
                <div className='absolute rounded-[50%] p-[10px] bg-[#666666] border-[0.5px] border-[#] bg-opacity-[80%] right-[10px] top-[10px]'>
                    <img className='w-[20px] h-[20px]' src='/assets/video.svg' alt='no' />
                </div>
            </div>
            <div className="border-2 border-[#232323] relative rounded-[12px] overflow-hidden">
                <img className='' src='/assets/monkey.webp' alt='no' />        
                <div className='absolute bottom-0 backdrop-blur-sm text-[25px] font-[600] p-[10px] text-[#ffffff]'>How to plan your retirement with crypto?</div>
                <div className='absolute rounded-[50%] p-[10px] bg-[#666666] border-[0.5px] border-[#] bg-opacity-[80%] right-[10px] top-[10px]'>
                    <img className='w-[20px] h-[20px]' src='/assets/video.svg' alt='no' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
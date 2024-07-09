import React from 'react'

function CryptoDict() {
  return (
    <div className='flex flex-col bg-[#080808] border-b border-[#232323] pb-[10vh] items-center  justify-center'>
        <div className='flex flex-col pt-[10vh] text-[#ffffff] '>
            <h1 className='text-[30px] text-center'>Crypto Dictionary</h1>
            <p className='text-[#7c7c7c]'>Your one-stop to catch up on all crypto terms</p>
        </div>
        <div className='border border-[#232323] rounded-[12px] mt-[40px] relative overflow-hidden'>
            <img src='/assets/machine.svg'></img>
            <div className='absolute bottom-0 w-full p-[20px]'>
                <p className=' text-[#a7a3a3] text-[25px] font-[600]'>Web3 + Degen Glossary</p>
                <p className='font-[600] text-[#a7a3a3]'>Your own crypto dictionary</p>
                <div className='absolute bottom-[20px] bg-[#5d594d] bg-opacity-[40%] right-[20px] p-[20px] border rounded-[50%]'>
                    <img className=' w-[20px] h-[20px]  ' src='/assets/book.svg'  alt='no'/>
                </div>
            </div>
        </div>

        <div className='flex flex-row bg-[#141414] border-[#232323] border mt-[10vh] rounded-[24px] text-[#ffffff]'>
            <div className='rounded-[24px] cursor-pointer bg-[#393939] px-[30px] py-[6px] '>Essentials</div>
            <div className='px-[30px] cursor-pointer py-[6px]'>Alpha Hub</div>
        </div>
    </div>
  )
}

export default CryptoDict
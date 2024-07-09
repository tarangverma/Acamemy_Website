import React from 'react'

function Footer() {
  return (
    <div className='text-[#ffffff]  bg-[#080808]'>
        <div className='mx-[20vh] pt-[10vh] border-b border-[#232323]'>
            <div className='flex flex-row border-b border-[#232323] pb-[5vh] justify-between'>
                <div>
                    <div><p className='text-[30px]'>intract.</p></div>
                    <div><p className='text-[#727272] w-[300px]'>We are your personal guide for exploring web3 projects & earning 100x rewards</p></div>
                </div>
                <div >
                    <p className='text-[20px]'>INTRACT</p>
                    <p className='text-[#727272]'>Explore Quests</p>
                    <p className='text-[#727272]'>Comunities</p>
                    <p className='text-[#727272]'>Alpha Hub</p>
                </div>
                <div>
                <p className='text-[20px]'>EARN</p>
                    <p className='text-[#727272]'>Refer & Earn</p>
                    <p className='text-[#727272]'>Leaderboard</p>
                    <p className='text-[#727272]'>Achievements</p>
                </div>
                <div>
                <p className='text-[20px]'>ABOUT</p>
                    <p className='text-[#727272]'>Product Roadmap</p>
                    <p className='text-[#727272]'>Affiliate Program</p>
                    <p className='text-[#727272]'>Sign up Program</p>
                    <p className='text-[#727272]'>Growth Community</p>
                    <p className='text-[#727272]'>Blogs</p>
                </div>
                <div>
                <p className='text-[20px]'>SUPPORT</p>
                    <p className='text-[#727272]'>Help Center</p>
                    <p className='text-[#727272]'>Create your quest</p>
                    <p className='text-[#727272]'>Terms of Service</p>
                    <p className='text-[#727272]'>Privacy Policy</p>
                    <p className='text-[#727272]'>Community Guidelines</p>
                </div>
            </div>
            <div className='py-[5vh] border-b border-[#232323] '>
                <p className='text-[#727272]'><span className=' text-[#ffffff] font-[600]'>Disclaimer:</span> Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky. 
                There may be no regulatory recourse for any loss from such transactions. We advise the viewer to proceed with caution. 
                Nothing in this website or any communication published by us amounts to, is intended to be, or should be construed as investment 
                or purchase advice of any kind or financial advice or promotion under any applicable laws. 
                Any decision made based on the content provided on this website or any communication published by us shall not be attributable to us.</p>
            </div>
            <div className='flex flex-row justify-between py-[5vh]'>
                <div>CREATED BY <span className='underline underline-offset-1'>INTRACT</span></div>
                <div className='flex flex-row '>
                    <div className='p-[10px] bg-[#1a1a1a] rounded-[12px]'><img className='h-[20px] w-[20px]' src='/assets/twitter.png' alt='no' /></div>
                    <div className='p-[10px] bg-[#1a1a1a] mx-[10px] rounded-[12px]'><img className='h-[20px] w-[20px]' src='/assets/telegram.png' alt='no' /></div>
                    <div className='p-[10px] bg-[#1a1a1a] rounded-[12px]'><img className='h-[20px] w-[20px]' src='/assets/discord.png' alt='no' /></div>
                    <div className='p-[10px] bg-[#1a1a1a] ml-[10px] rounded-[12px]'><img className='h-[20px] w-[20px] 'src='/assets/sportify.png' alt='no' /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
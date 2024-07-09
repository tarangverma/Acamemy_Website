import React from "react";

function Rewards() {
  return (
    <div className="flex bg-[#080808] pb-[10vh] border-b-2  border-[#1c1c1c] flex-row">
    <div className="flex flex-row mt-[10vh] ml-[80vh]">
    <div className=" items-center pt-[10vh]  justify-center text-[#ffffff]">
      <div className="w-fit bg-[#151515] p-[10px] mx-auto rounded-[12px]">
        <div className="flex items-center flex-row border-b border-[#363636]  pb-[20px] mb-[20px] border-dashed">
          <div className="mr-[10px]">
            <img className="w-[15px] h-[15px]" src="/assets/clock.svg" />
          </div>
          <p>Reward unlocks in</p>
        </div>
        <div className="flex flex-row justify-between bg-[#111111] border border-[#1c1c1c] rounded-[12px] py-[10px] px-[20px] w-[280px]">
          <div>
            <div className="text-[30px] text-[#9c9c9c] font-[600]">00</div>
            <div className="text-[#666666]">Days</div>
          </div>
          <div>
            <div className="text-[30px] text-[#9c9c9c] font-[600]">05</div>
            <div className="text-[#666666]">Hours</div>
          </div>
          <div>
            <div className="text-[30px] text-[#9c9c9c] font-[600]">54</div>
            <div className="text-[#666666]">Mins</div>
          </div>
          <div>
            <div className="text-[30px] text-[#9c9c9c] font-[600]">34</div>
            <div className="text-[#666666]">Sec</div>
          </div>
        </div>
      </div>
      <div className="p-[10px] mx-auto bg-[#151515] mt-[20px] border-[#1c1c1c] border rounded-[12px]  w-fit">
        <div className="relative">
            <img className=" rounded-[12px] w-[280px]" src="/assets/reward.gif" alt="no" />
            <p className=" absolute top-[10px] right-[5px] text-[16px] rounded-[12px] py-[6px] px-[10px] bg-[#151515]">Lucky Draw</p>
        </div>
      
      <div className="flex flex-col">
      <div className="flex flex-row items-center pb-[10px] mt-[5px] border-b border-dashed justify-around w-[280px] ">
        <p>Exclusive Community</p>
        <div className="flex flex-row ml-[10px]  items-center">
            <img className="w-[15px] h-[15px] " src="/assets/discord.svg" alt="no" />
            <p className="ml-[5px]">Earndrop</p>
        </div>
      </div>
      <div className="w-[280px] p-[10px] ">
        <div className="">
            <div className="flex flex-row justify-between items-center my-[10px]">
                <p className="text-[12px]">Complete all Essential quests</p>
                <div className=" rounded-[50%] p-[3px] bg-[#262626]"><img className="h-[15px] w-[15px] " src="/assets/tick.svg" alt="no" /></div>
            </div>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[12px]">Complete at least 1 Alpha Hub quest today</p>
                <div className="  rounded-[50%] p-[3px] bg-[#262626]"><img className="h-[15px] w-[15px] " src="/assets/tick.svg" alt="no" /></div>
            </div>
            <div className="flex flex-row p-[10px] border border-[#242424] mt-[10px] rounded-[12px] bg-[#262626] mx-auto justify-center items-center">
              <p className="mr-[10px]">Claim Now</p>
              <img className="w-[30px] h-[30px]" src="/assets/right.svg" />
            </div>
        </div>
      </div>
    </div>
    </div>
    </div>

    <div className="text-[#ffffff] w-[350px] rounded-[8px] justify-center flex flex-col border border-[#3a3a3a] h-fit mt-[20vh] ml-[10vh]">
        <div className="flex flex-row border-b border-[#3a3a3a] p-[20px] items-center  pb-[10px]">
          <p className="text-[#7c7c7c]">Reward info</p>
          <img className="w-[25px] h-[25px] ml-[5px]" src="/assets/info.svg" alt="no" />
        </div>
        <div className="mt-[10px] px-[20px]">
          <h1>Free access to paid KOL (crypto earning) communities!</h1>
        </div>
        <div className="p-[20px]">
          <p className="text-[#7c7c7c]">Win access to exclusive earning communities of some of the the greatest earners in crypto for a month, 
            every 24 hours. 
            Get access to unmatched insights, a close-knit community of the best airdrop earners, and more.</p>
          <p className="mt-[20px] text-[#7c7c7c]">To win: make sure you've connected your Twitter and Discord accounts - and follow our criteria!</p>  
        </div>
      </div> 
      </div>
    </div>
  );
}

export default Rewards;

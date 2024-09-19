import settingsIcon from '../../assets/icons/settingsIcon.svg'

import notficationIcon from '../../assets/icons/notificationIcon.svg'
import { CircleUserRound } from 'lucide-react'

const Navbar = () => {
  return (
    <div className="  px-[24px] py-[12px] h-[80px] bg-white flex">
      <div className="w-[50%] h-full flex  items-center  ">
        <span className="font-mono font-semibold text-orange-700">brodcast</span>
      </div>
      <div className="w-[50%] h-full flex gap-[24px] items-center justify-end">
        <img src={notficationIcon}/>
        <img src={settingsIcon}/>
        <CircleUserRound className='text-slate-400'/>

      </div>
    </div>
  )
}

export default Navbar

import NCSlogo from '../../assets/images/ncs.png'
const Logo = () => {
  return (
    <div className='flex gap-[6px] '>
        <img src={NCSlogo} className='size-6'/>
      <span className="font-mono font-semibold text-lg text-orange-700">brodcast</span>
    </div>
  )
}

export default Logo

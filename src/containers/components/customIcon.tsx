import React from 'react';

interface CustomIconProps {
  Icon: React.ElementType; 
  text: string; 
  classname?:string; 
}

const CustomIcon: React.FC<CustomIconProps> = ({ Icon, text, classname }) => {
  return (
    <div className={`w-fit px-[6px] flex items-center justify-center gap-[8px] bg-orange-100 text-orange-600 rounded-full ${classname}`}>
      <Icon className="w-[15px] h-[15px]" /> 
      <span>{text}</span>
    </div>
  );
}

export default CustomIcon;

type ProgressBarProps = {
    percentage: number;
    lowColor?: string;
    mediumColor?: string;
    highColor?: string;
    backgroundColor?: string;
    height?: string;
    transitionDuration?: string;
    transitionEasing?: string;
    label?: string | number;
    labelPosition?: 'inside' | 'outside';
    className?: string;
  };
  
  const ProgressBar = ({
    percentage,
    lowColor = "bg-red-600",
    mediumColor = "bg-blue-500",
    highColor = "bg-green-500",
    backgroundColor = "bg-gray-100",
    height = "18px",
    transitionDuration = "1s",
    transitionEasing = "ease-out",
    label,
    labelPosition = 'outside',
    className = '',
  }: ProgressBarProps) => {
    const color =
      percentage <= 20
        ? lowColor
        : percentage < 80
        ? mediumColor
        : highColor;
  
        return (
            <div className={`relative w-full p-[12px] flex items-center gap-[10px] ${className}`}>
              <div
                className={`relative  w-full overflow-hidden rounded-full ${backgroundColor} `}
                style={{ height }}
              >
                <div
                  className={`absolute h-full ${color} rounded-full border-[1.375px]`}
                  style={{ width: `${percentage}%`,  transition: `width ${transitionDuration} ${transitionEasing}` }}
                ></div>
                {label && labelPosition === 'inside' && (
                  <span className="absolute inset-0 flex justify-center items-center text-black">
                    {label}
                  </span>
                )}
              </div>
              {label && labelPosition === 'outside' && (
                <span>{label}</span>
              )}
              
            </div>
          );
        };
        
        export default ProgressBar;
          
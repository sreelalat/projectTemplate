import * as React from 'react'
import { cn } from '@/lib/utils'
// import { Label } from "@/components/ui/label"
import { TextboxProps } from '../atom/formBuilder/nodeCmp.types'
import { useState } from 'react'
import { Constants } from '@/configs/constants'

// export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  node: TextboxProps
  handleChange: (key: string, value: string) => void
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ node, handleChange, className, type, ...props }, ref) => {

  const [inputValue, setInputValue] = useState(node?.value);

  const handleInputChange = (field: string, value: string) => {
    handleChange(field, value)
    setInputValue(value)
  }

  React.useEffect(() => {
    setInputValue(node?.value)
  }, [node?.value])

  return (
    <div className="relative grid w-full items-center gap-1.5">
      {/* <Label htmlFor="email">{node?.label}</Label>
      <input
        id={node?.id}
        name={node?.fieldName}
        type={node?.typeInput}
        value={inputValue}
        onChange={(e) => handleInputChange(node?.fieldName, e.target.value)}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      /> */}

      <input
        id={node?.id + 500}
        aria-label={node.label}
        type={node.typeInput}
        value={inputValue}
        placeholder=""
        disabled={node.disabled}
        maxLength={node.maxTextLength || Constants.maxTextLength}
        minLength={node.minTextLength || Constants.minTextLength}
        onChange={(e) => handleInputChange(node?.fieldName, e.target.value)}
        // onKeyDown={(e) => validate(e, node?.typeInput || "text")}
        className={cn(
          "input-class  block w-full px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer disabled:cursor-not-allowed disabled:opacity-50",
          // { 'border-red-500 focus:border-red-500 focus:ring-red-500': valid },
          node.childClass
        )}
        ref={ref}
        {...props}
      />
      <label
        htmlFor={node?.id + 500}
        className="absolute max-w-fit overflow-hidden text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 left-2.5
   whitespace-nowrap  text-ellipsis"
        style={{ width: "calc(100% - 1rem)" }} // Ensure it stays within input field
      >
        {node?.placeholder ?? ""}
      </label>


    </div>
  )
},
)
Input.displayName = 'Input'

export { Input }



import React, { useState } from "react"
import { cn } from "../../../lib/utils"
import { TextboxProps } from "../accessableCmp.types"
import regEx from "../../atom/helpers/regex";
import { Constants } from "../../../lib/constants";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  node: TextboxProps
  handleResult: (key: string, value: string) => void
}

const isSpecialKey = (key: string): boolean => {
  const specialKeys = new Set(['e', 'E', '.']);
  return specialKeys.has(key);
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ node, handleResult, ...props }, ref) => {

    


    const [inputValue, setInputValue] = useState(node?.value);
    const [valid, setValid] = useState(false);
    console.log(inputValue)
    const validateNumber = (event: React.KeyboardEvent<HTMLInputElement>): void => {
      if (isSpecialKey(event.key)) {
        event.preventDefault();
      }
    }

    const isValidEmail = (email: string): boolean => {
      const emailRegex = regEx.email;
      return emailRegex.test(email);
    };

    const validate = (
      event: React.KeyboardEvent<HTMLInputElement>,
      inputType: "number" | "email" | "password" | "text"
    ) => {
      const inputElement = event.target as HTMLInputElement;
      switch (inputType) {
        case "number":
          validateNumber(event);
          break;
        case "email":
          setValid(!isValidEmail(inputElement.value));
          break;
        case "password":
          // No additional validation needed for password input
          break;
        default:
          break;
      }
    };
    const handleOnChange = (field: string, value: string) => {
      handleResult(field, value)
      setInputValue(value)
    }

    return (
        <div className="relative w-full ">
      <input
        id={node?.id + 500}
        aria-label={node.label}
        type={node.typeInput}
        // value={inputValue}
        placeholder=""
        disabled={node.disabled}
        maxLength={node.maxTextLength || Constants.maxTextLength}
        minLength={node.minTextLength || Constants.minTextLength}
        // onKeyDown={(e) => validate(e, node?.typeInput || "text")}
        // onChange={(e) => handleOnChange(node?.fieldName, e.target.value)}
        className={cn(
          "input-class  block w-full px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer disabled:cursor-not-allowed disabled:opacity-50",
          { 'border-red-500 focus:border-red-500 focus:ring-red-500': valid },
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
  }
)
Input.displayName = "Input"

export { Input }

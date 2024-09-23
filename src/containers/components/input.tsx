import React, { InputHTMLAttributes } from 'react';
import {cn} from '../lib/utils'; // Ensure you're using classnames or a similar utility

// Constants for input length
const Constants = {
  maxTextLength: 100,
  minTextLength: 5,
};

// Defining the type for the `node` object
interface Node {
  id: string;
  label: string;
  typeInput: string;
  disabled: boolean;
  maxTextLength?: number;
  minTextLength?: number;
  childClass?: string;
  fieldName?: string;
  placeholder?: string;
}

// Example node object
const node: Node = {
  id: "123",
  label: "Username",
  typeInput: "text",
  disabled: false,
  maxTextLength: 50,
  minTextLength: 5,
  childClass: "custom-input-class",
  placeholder: "Enter your username",
};

// Extending InputHTMLAttributes to inherit native input attributes
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  valid?: boolean;
}

// Input component
const Input: React.FC<InputProps> = (props) => {
  const { valid = false, ...rest } = props; // Destructure valid from props with a default value

  return (
    <div className="relative w-full">
      <input
        id={node.id + 500}
        aria-label={node.label}
        type={node.typeInput}
        placeholder=""
        disabled={node.disabled}
        maxLength={node.maxTextLength || Constants.maxTextLength}
        minLength={node.minTextLength || Constants.minTextLength}
        // Uncomment and define if needed
        // onKeyDown={(e) => validate(e, node?.typeInput || "text")}
        // onChange={(e) => handleOnChange(node?.fieldName, e.target.value)}
        className={cn(
          "input-class block w-full px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer disabled:cursor-not-allowed disabled:opacity-50",
          { 'border-red-500 focus:border-red-500 focus:ring-red-500': valid },
          node.childClass
        )}
        {...rest} // Spread other props passed to Input component
      />
      <label
        htmlFor={node.id + 500}
        className="absolute max-w-fit overflow-hidden text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 left-2.5 whitespace-nowrap text-ellipsis"
        style={{ width: "calc(100% - 1rem)" }} // Ensure it stays within input field
      >
        {node.placeholder ?? ""}
      </label>
    </div>
  );
};

export default Input;

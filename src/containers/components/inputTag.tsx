import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "../../components/ui/button/button";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { type InputProps } from "../../components/ui/input";
import { useState } from "react"


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
  label: "Tags",
  typeInput: "text",
  disabled: false,
  maxTextLength: 50,
  minTextLength: 5,
  childClass: "custom-input-class",
  placeholder: "Enter tags ",
};

type InputTagsProps = Omit<InputProps, "value" | "onChange"> & {
  
};

const InputTags = React.forwardRef<HTMLInputElement, InputTagsProps>(
  ({ className, ...props }, ref) => {
    const [values, setValues] = useState<string[]>([]);  

    const [pendingDataPoint, setPendingDataPoint] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    React.useEffect(() => {
      if (pendingDataPoint.includes(",")) {
        const newDataPoints = new Set([
          ...values,
          ...pendingDataPoint.split(",").map((chunk) => chunk.trim()),
        ]);
        setValues(Array.from(newDataPoints));
        setPendingDataPoint("");
      }
    }, [pendingDataPoint, setValues, values]);

    const addPendingDataPoint = () => {
      if (pendingDataPoint) {
        const newDataPoints = new Set([...values, pendingDataPoint]);
        setValues(Array.from(newDataPoints));
        setPendingDataPoint("");
      }
    };

    const shouldFloatLabel = values.length > 0 || pendingDataPoint.length > 0 || isFocused;

    return (
      <div className="relative  w-full">
        <div
          className={cn(
            "flex flex-wrap items-center    gap-2 rounded-md border border-neutral-200 px-3 py-2 text-sm ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950",
            className
          )}
        >
          {values.map((item) => (
            <Badge key={item} variant="secondary">
              {item}
              <Button
                variant="outline"
                size="icon"
                className="ml-2 h-3 w-3"
                onClick={() => {
                  setValues(values.filter((i) => i !== item));
                }}
              >
                <XIcon className="w-3 h-3 text-black" />
              </Button>
            </Badge>
          ))}
          <input
            id={node.id}
            aria-label={node.label}
            type={node.typeInput}
            placeholder=""
            disabled={node.disabled}
            maxLength={node.maxTextLength || Constants.maxTextLength}
            minLength={node.minTextLength || Constants.minTextLength}
            className={cn(
              "flex-1 block px-2.5 pb-2.5 pt-4  text-sm text-gray-900 bg-transparent  rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer",
              node.childClass
            )}
            value={pendingDataPoint}
            onChange={(e) => setPendingDataPoint(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === ",") {
                e.preventDefault();
                addPendingDataPoint();
              } else if (
                e.key === "Backspace" &&
                pendingDataPoint.length === 0 &&
                values.length > 0
              ) {
                e.preventDefault();
                setValues(values.slice(0, -1));
              }
            }}
            {...props}
            ref={ref}
          />
          <label
            htmlFor={node.id}
            className={cn(
              "absolute left-2.5  z-10 origin-[0] transform duration-300 bg-white px-1",
              shouldFloatLabel ? "top-3 -translate-y-6 scale-75 text-sm text-gray-500" : "translate-y-0 scale-100 text-gray-700"
            )}
          >
            {node.placeholder ?? ""}
          </label>
        </div>
      </div>
    );
  }
);

InputTags.displayName = "InputTags";

export { InputTags };

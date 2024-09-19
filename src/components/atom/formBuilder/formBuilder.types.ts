import {
    ButtonsProps,
    CheckboxGroupProps,
    CheckboxProps,
    DatePickerProps,
    DatePickerWithPresetProps,
    DropDownProps,
    DropWithCategoryProps,
    RadioGroupProps,
    SwitchProps,
    TextboxProps,
    DateTimePickerProps,
    TimePickerProps,
  } from "../../ui/accessableCmp.types";
  
  export interface actionProps {
    (actionKey: string, child: unknown): void;
  }
  export interface buttonsChildrensProps {
    theme: "primary" | "secondary" | "ternary";
    displayName: string;
    classNames?: React.ComponentProps<"div">["className"];
    icon?: "save" | "update" | "cancel" | "new" | "remove";
    // | "download" | "upload" | JSX.Element
    loading?: boolean;
    disabled?: boolean;
    hidden?: boolean;
    action?: {
      mouseEvent?: "onClick";
      // | 'onMouseEnter' | 'onMouseLeave' | 'onMouseOver' | 'onMouseOut'
      actionKey: string;
      preventDefault?: boolean;
      expected: "formValidate" | "actionKey";
    };
  }
  
  export interface ResultData {
    [key: string]: string | number | boolean | object | null;
  }
  export interface FormOptions {
    // color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | string
    // error?: boolean
    // focused?: boolean
    // hiddenLabel?: boolean
    controlParentAndChild: boolean;
    type?: "default" | "modal";
    size?: "small" | "medium";
    variant?: "filled" | "outlined";
  }
  export type FormDataTypes =
    | TextboxProps
    | CheckboxProps
    | DropDownProps
    | CheckboxGroupProps
    | DatePickerProps
    | TimePickerProps
    | DropWithCategoryProps
    | ButtonsProps
    | SwitchProps
    | RadioGroupProps
    | DatePickerWithPresetProps
    | DateTimePickerProps;
  
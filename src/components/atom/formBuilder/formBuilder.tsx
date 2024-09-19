import { useEffect, useRef, useCallback } from 'react';
import { ResultData, FormDataTypes, FormOptions, actionProps } from './formBuilder.types';
import { InputCmp } from '../../ui/textbox/inputCmp';
// import { CategoryDropDown } from '../ui/dropdown/categoriseddropdown';
// import { CheckboxCmp } from '../ui/checkbox/checkboxCmp';
// import { DropDown } from '../ui/dropdown/dropdown';
// import { SwitchCmp } from '../ui/switch/switchCmp';
// import { ButtonCmp } from '../ui/button/buttonCmp';
// import { RadioGroupCmp } from '../ui/radiogroup/radioGroupCmp';
// import { DateTimePicker } from "../ui/datetimepickers/date-time-picker"
// import { TimePickerWrapper } from "../ui/datetimepickers/timepickerwrapper"
import {
    TextboxProps, DropDownProps, DropWithCategoryProps,
    ButtonsProps, CheckboxProps, SwitchProps,
    RadioGroupProps,
    DatePickerProps,
    DatePickerWithPresetProps,
} from '../../ui/accessableCmp.types';
// import CheckBoxGroupCmp from '../ui/checkboxgroup/checkboxGroupCmp';
// import { DatePickerCmp } from '../ui/datetimepickers/date-picker';
// import { DatePickerWithPresetsCmp } from '../ui/datetimepickers/date-pickerWithPreset';

interface FormBuilderProps {
    formData: FormDataTypes[],
    options?: FormOptions,
    formActions?: actionProps,
    parentClass?: string,
    handleFormResult: (result: ResultData) => void
}


const FormBuilder = ({ formData, handleFormResult, options = { size: "medium", variant: "outlined", type: "default", controlParentAndChild: false }, ...props }: FormBuilderProps): JSX.Element => {

    const result = useRef<ResultData>({});
    const handleResult = (key: string, value: string | boolean): void => {
        const updatedResult = { ...result.current, [key]: value };
        result.current = updatedResult;
    };

    const FormSubmit = () => {
        handleFormResult(result.current);
    }
    const IntialFunctions = useCallback(() => {
        const data: ResultData = {};
        formData.forEach((node: FormDataTypes) => {
            if (node.formControl === 'button') {
                return null;
            } else {
                data[node.fieldName] = node.value || '';
            }
        });
        result.current = data;
        handleFormResult(data);
    }, [formData, result, handleFormResult]);

    useEffect(() => {
        IntialFunctions();
    }, [IntialFunctions]);

    return (
        <>
        
            {options.type === 'modal' && <div className="fixed inset-0 bg-ba backdrop-blur-sm bg-opacity-40 transition-opacity"></div>}
            <div className={`${options.type === 'modal' ? '  fixed inset-0 z-10 w-screen overflow-y-auto' : ''}`}>
                <div className={`${options.type === 'modal' ? 'flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0' : ''}`}>
                    <div className={`${options.type === 'modal' ? 'bg-[white] p-4' : `w-full ${options.controlParentAndChild ? `${props.parentClass}` : ''}`}`}>
                        {formData.map((node: FormDataTypes, index: number) => {
                            const layoutClasses = node.layout
                                ? `${node.layout.lg} ${node.layout.md} ${node.layout.sm}`
                                : 'w-[100%] ';
                            const formControl = (() => {
                                switch (node.formControl) {
                                    case 'textbox':
                                        return <InputCmp node={node as TextboxProps} handleResult={handleResult} />
                                    // case 'checkbox':
                                    //     return <CheckboxCmp node={node as CheckboxProps} handleResult={handleResult} />
                                    // case 'checkboxGroup':
                                    //     return <CheckBoxGroupCmp node={node as CheckboxProps} handleResult={handleResult} />
                                    // case 'dropdown':
                                    //     return <DropDown node={node as DropDownProps} handleChange={handleResult} />
                                    // case 'categorydropdown':
                                    //     return <CategoryDropDown node={node as DropWithCategoryProps} handleChange={handleResult} />
                                    // case 'button':
                                    //     return <ButtonCmp node={node as ButtonsProps} formResult={FormSubmit} />
                                    // case 'switch':
                                    //     return <SwitchCmp node={node as SwitchProps} handleChange={handleResult} />
                                    // case 'radiogroup':
                                    //     return <RadioGroupCmp node={node as RadioGroupProps} />
                                    // case 'datepicker':
                                    //     return <DatePickerCmp node={node as DatePickerProps} />
                                    // case 'datepickerwithpreset':
                                    //     return <DatePickerWithPresetsCmp node={node as DatePickerWithPresetProps} handleChange={handleResult} />
                                    // case 'datetimepicker':
                                    //     return <DateTimePicker />
                                    // case 'timepicker':
                                    //     return <TimePickerWrapper />
                                    default:
                                        return null;
                                }
                            })();
                            return (
                                <div
                                    key={index}
                                    className={`${node.childClass} ${layoutClasses} inline-block  p-2`}
                                >
                                    {formControl}
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
        </>
    );
};

export default FormBuilder;

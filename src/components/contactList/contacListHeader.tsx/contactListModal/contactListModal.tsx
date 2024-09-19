import FormBuilder from "@/components/atom/formBuilder/formBuilder";
import { actionProps, FormDataTypes } from "@/components/atom/formBuilder/formBuilder.types";
import { useState } from "react";
const ContactListModal = () => {

  const formStructure: FormDataTypes[] = [{
    id: '1',
    formControl: "textbox",
    typeInput: 'text',
    fieldName: "contactlistname",
    label: "Contact List Name",
    value: "",
    placeholder: "Contact List Name",
    required: true,
    disabled: false,
    layout: {
    lg: "lg:w-full",
    md: "md:w-full",
    sm: "sm:w-full"
    },
    childClass: "" // @dev classes for styling the input field wrapper
    }, {
    id: '2',
    formControl: "textbox",
    typeInput: 'text',
    fieldName: "typelistfield",
    label: "Type List Field",
    value: "",
    placeholder: "Type List Field",
    required: true,
    disabled: false,
    layout: {
    lg: "lg:w-full",
    md: "md:w-full",
    sm: "sm:w-full"
    },
    childClass: "" // @dev classes for styling the input field wrapper
    }, {
    id: '10',
    formControl: "checkbox",
    label: 'Hello',
    fieldName: "check",
    value: false,
    required: true,
    layout: {
    lg: "lg:w-1/2",
    md: "md:w-1/3",
    sm: "sm:w-1/4"
    },
    childClass: "" // @dev classes for styling the input field wrapper
    }, {
    id: '4',
    formControl: "button",
    label: 'Submit',
    variant: 'outlined',
    size: 'sm',
    fieldName: "Submit",
    disabled: false,
    layout: {
    lg: "lg:w-1/2",
    md: "md:w-1/3",
    sm: "sm:w-1/4"
    },
    childClass: ""
    }]

  const [formData, setFormData] = useState<FormDataTypes[]>(formStructure)

  const handleFormResult = (result: unknown) => {
    console.log(`form Result : `, result);
  };
  const formActions: actionProps = (action: string, data: unknown): void => {
    console.log("formActions", action, data)
  }

  

  return (
    <div className="flex flex-col gap-[12px] ">
      
      <div>
      <FormBuilder
        formActions={formActions}
        options={{
          type: 'default',
          size: "medium",
          controlParentAndChild: false
        }}
        handleFormResult={handleFormResult}
        formData={formData}
        parentClass='w-full h-full flex flex-wrap'

      />
    </div>
      

    </div>
  )
}

export default ContactListModal

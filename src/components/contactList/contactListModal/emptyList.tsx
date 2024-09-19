import FormBuilder from "@/components/atom/formBuilder/formBuilder";
import { actionProps, FormDataTypes } from "@/components/atom/formBuilder/formBuilder.types";

const EmptyList = () => {
    const formData: FormDataTypes[] = [
        {
          id: "contactlist_textbox",
          formControl: "textbox",
          typeInput: "text",
          label: "Contact List Name",
          fieldName: "contactlist",
          placeholder: "Contact List Name",
          value: "",
          required: true,
          layout: {
            lg: "lg:w-full",
            md: "md:w-full",
            sm: "sm:w-full",
          },
          // onChange: (value) => console.log(value),
          childClass: "font-sans ", // @dev classes for styling the input field wrapper
        },
        
       
        {
          id: "typelist_textbox",
          formControl: "textbox",
          label: "Type List Field",
          typeInput: "text",
          fieldName: "typelist",
          placeholder: "Type List Field",
          required: true,
          value: "",
          layout: {
            lg: "lg:w-full",
            md: "md:w-full",
            sm: "sm:w-full",
          },
          childClass: "font-sans", // @dev classes for styling the input field wrapper
        },
        
      ];

      
     
      const handleFormResult = (result: unknown) => {
        console.log(`form Result : `, result);
      };
      const formActions: actionProps = (action: string, data: unknown): void => {
        console.log("formActions", action, data);
      };
  return (
    <div>
      <FormBuilder
                formActions={formActions}
                options={{
                  type: "default",
                  size: "medium",
                  variant: "outlined",
                  controlParentAndChild: true,
                }}
                handleFormResult={handleFormResult}
                formData={formData}
                parentClass="w-full h-auto flex flex-wrap "
              />
    </div>
  )
}

export default EmptyList

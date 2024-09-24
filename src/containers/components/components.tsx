import { CheckCheck } from "lucide-react"
import CustomIcon from "./customIcon"
import FileUpload from "./fileUpload"
import { InputTags } from "./inputTag"
import ProgressBar from "./progressBar"
import CheckboxDropdown from "@/components/atom/checkbox-dropdown/checkboxDropdown"
import { useState } from "react"



function Components() {

  const [dropdownItems, setDropdownItems] = useState([
    { name: "Field 1", status: false },
    { name: "Field 2", status: true },
    { name: "Field 3", status: false }
  ]);

  const percentage = 90
  return (
    <div className="flex items-center  justify-center min-h-screen ">
      <div className="w-[80%] flex gap-6 flex-col">
        <ProgressBar percentage={percentage} label={`${percentage}%`} labelPosition="outside" />
        <CustomIcon text="Sent" Icon={CheckCheck} />
        <InputTags

        />
        <FileUpload />
        <CheckboxDropdown
          placeholder="Type List Field"
          items={dropdownItems}
          setItems={setDropdownItems}
        />      </div>
    </div>
  )
}

export default Components

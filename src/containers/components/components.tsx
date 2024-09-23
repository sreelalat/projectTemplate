import { CheckCheck } from "lucide-react"
import CustomIcon from "./customIcon"
import FileUpload from "./fileUpload"
import { InputTags } from "./inputTag"
import ProgressBar from "./progressBar"



function Components() {
 
  const percentage =90
  return (
    <div className="flex items-center  justify-center min-h-screen ">
      <div className="w-[80%] flex gap-6 flex-col">
      <ProgressBar percentage={percentage} label={`${percentage}%`} labelPosition="outside"/>
      <CustomIcon text="Sent" Icon={CheckCheck}/>
      <InputTags

        />
      <FileUpload/>
      </div>
    </div>
  )
}

export default Components

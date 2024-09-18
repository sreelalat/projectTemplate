import { Button } from "@/components/ui/button"
import { useState } from "react"
import EmptyList from "./emptyList"

const ContactListModal = () => {

  const [selected, setSelected] = useState("empty")

  

  return (
    <div className="flex flex-col gap-[12px] ">
      

      <div className="flex flex-col gap-[12px]">
        <div className="flex gap-[12px]">
          <Button className={`bg-transparent font-light shadow-none border-0 ${selected==="empty" && "font-bold"}`} onClick={()=>setSelected("empty")}>Empty List</Button>
          <Button className={`bg-transparent font-light shadow-none border-0 ${selected==="fromFile" && "font-bold"}`} onClick={()=>setSelected("fromFile")}>Create List from File</Button>
        </div>
      {
        selected === "empty" ?
        <div>
          <EmptyList/>
          </div>
          :
          <div>
          </div>

      }
      </div>
      <div>
      
        Todo:scrub for wireless numbers
      </div>

    </div>
  )
}

export default ContactListModal

import { Button } from "@/components/ui/button"
import { useState } from "react"

const ContactListModal = () => {

  const [selected, setSelected] = useState("empty")

  return (
    <div className="flex flex-col gap-[12px] ">
      

      <div>
        <div>
          <Button className={`bg-transparent font-light shadow-none border-0 ${selected==="empty" && "font-semibold"}`} onClick={()=>setSelected("empty")}>Empty List</Button>
          <Button className={`bg-transparent font-light shadow-none border-0 ${selected==="fromFile" && "font-semibold"}`} onClick={()=>setSelected("fromFile")}>Create List from File</Button>
        </div>
      {
        selected === "empty" ?
        <div>
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

import ContactsModalTab from "./contactsModalTab"

const ContactsModal = () => {
    const contactdetails = [
        {
            title: "Name",
            value : "Guy Hawkins"

        },
        {
            title: "Phone Number",
            value : 12345678

        },
        {
            title: "Date Added",
            value : "Mar 6, 2022 10:41:35 AM"

        },
        {
            title: "Custom Field",
            value : "No"

        },
        {
            title: "Status",
            value : "Subscribed"

        },
        
    ]
  return (
    <div className="flex flex-col gap-[8px]">
      {
        contactdetails.map((item)=>(
            <div>
            <ContactsModalTab title={item.title} value={item.value}/>
            <div className="w-full h-[1px] bg-[#0000001f]"></div>
            </div>

        ))
      }
      

      
    </div>
  )
}

export default ContactsModal

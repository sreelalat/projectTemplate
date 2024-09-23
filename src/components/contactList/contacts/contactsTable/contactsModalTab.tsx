type ContactsModalTabProps= {
    title: string,
    value? : string | number
}
const ContactsModalTab = ({title,value}:ContactsModalTabProps) => {
  return (
    <div className="flex flex-col gap-[12px]">
        <span className="text-[#888] text-sm">{title}</span>
        <span>{value}</span>
    </div>
  )
}

export default ContactsModalTab

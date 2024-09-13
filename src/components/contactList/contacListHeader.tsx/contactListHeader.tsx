import Card from "@/components/atom/card/card"
import SearchBar from "@/components/atom/searchBar/searchBar"

const ContactListHeader = () => {

    return (
        <Card className="bg-white h-[68px] p-[12px] flex items-center">
            <div className="w-1/3">
            <p className="font-bold ">Contact List</p>
            </div>
            <div className="flex justify-end gap-[12px] self-stretch">
                <SearchBar/>

            </div>

                

        </Card>

    )
}

export default ContactListHeader

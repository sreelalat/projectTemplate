import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import ButtonIcon from '../../../../assets/icons/buttonIcon.svg'
import { ImportIcon, MessageSquareOff } from "lucide-react";

const MoreOptions = () => {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild  className="cursor-pointer">
                    <div className="flex justify-center items-center w-[32px] h-[32px] rounded-sm  border-[0.5px]">
                        <img src={ButtonIcon} />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">

                    <DropdownMenuGroup>

                        <DropdownMenuItem className="flex">
                            <ImportIcon className="mr-2 h-4 w-4" />
                            <span>Export</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                            <ImportIcon className="mr-2 h-4 w-4" />
                            <span>Import</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuItem className="cursor-pointer">
                        <MessageSquareOff className="mr-2 h-4 w-4" />
                        <span>Opt Out Contacts</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default MoreOptions

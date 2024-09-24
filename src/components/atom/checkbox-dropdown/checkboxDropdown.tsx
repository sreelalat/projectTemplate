import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

type CheckboxDropdownProps = {
  placeholder?: string;
  items: { name: string; status: boolean }[];
  setItems: (updatedItems: { name: string; status: boolean }[]) => void;
};

const CheckboxDropdown = ({ placeholder = "Select", items, setItems }: CheckboxDropdownProps) => {
  const handleCheckedChange = (index: number, checked: boolean) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, status: checked } : item
    );
    setItems(updatedItems);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="h-[44px] border rounded-sm p-[12px] flex w-full">
          <div className="flex-1 text-[#B3B3B3]">{placeholder}</div>
          <ChevronDown className="text-sm"/>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {items.map((item, index) => (
          <DropdownMenuCheckboxItem
            key={item.name}
            checked={item.status}
            onCheckedChange={(checked) => handleCheckedChange(index, checked)}
          >
            {item.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CheckboxDropdown;

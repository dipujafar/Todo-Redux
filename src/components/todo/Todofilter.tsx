
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { useState } from "react";
import { CloudCog } from "lucide-react";


type TFilterProps = {
  priority: string,
  setPriority:  (value: string | ((prev: string) => string)) => void
}

const Todofilter = ({priority, setPriority}: TFilterProps) => {

  console.log(priority)
 
    return (
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button className="bg-praimary-gradient text-lg font-semibold">Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Fiter by priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={priority} onValueChange={setPriority}>
          <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    );
};

export default Todofilter;
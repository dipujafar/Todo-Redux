
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { useState } from "react";


const Todofilter = () => {
  const [position, setPosition] = useState("bottom")
    return (
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button className="bg-praimary-gradient text-lg font-semibold">Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Fiter by priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    );
};

export default Todofilter;
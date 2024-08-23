import { Avatar } from "@/components/ui/avatar";
import {
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/ui/dropdown";

import { Cog8ToothIcon, PlusIcon } from "@heroicons/react/16/solid";

export default function SavedPagesDropdown() {
  return (
    <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
      <DropdownItem href="/preview">
        <Cog8ToothIcon />
        <DropdownLabel>Page 1</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem href="/preview">
        <Avatar slot="icon" initials="P1" className="bg-zinc-950 text-white" />
        <DropdownLabel>Page 2</DropdownLabel>
      </DropdownItem>
      <DropdownItem href="/preview">
        <Avatar slot="icon" initials="WC" className="bg-zinc-950 text-white" />
        <DropdownLabel>Page 3</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem href="/preview">
        <PlusIcon />
        <DropdownLabel>New Page&hellip;</DropdownLabel>
      </DropdownItem>
    </DropdownMenu>
  );
}

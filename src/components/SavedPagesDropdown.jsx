import { Avatar } from "@/components/ui/avatar";
import {
  DropdownDivider,
  DropdownHeading,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
  DropdownSection,
} from "@/components/ui/dropdown";

import {
  PlusIcon,
  ArrowDownTrayIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { useSavedPagesContext } from "@/contexts/SavedPagesContext";

export default function SavedPagesDropdown() {
  const { savedPages, deletePage } = useSavedPagesContext();

  return (
    <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
      <DropdownSection>
        <DropdownHeading>Manage your pages</DropdownHeading>

        {savedPages.map((page, index) => (
          <DropdownItem href={`/preview/${page}`} target="_blank" key={index}>
            <Avatar
              slot="icon"
              initials={`P${index + 1}`}
              className="bg-zinc-950 text-white"
            />
            <DropdownLabel>Page {index + 1}</DropdownLabel>

            <button
              className=" w-5 h-5 sm:h-4 sm:w-4 text-zinc-400 hover:cursor-pointer z-50 hover:text-zinc-100"
              onClick={(e) => {
                e.preventDefault(); // Prevent DropDownItem click from triggering
                console.log("download button");
              }}
            >
              <ArrowDownTrayIcon className="" />
            </button>
            <button
              className=" w-5 h-5 sm:h-4 sm:w-4 text-zinc-400 hover:cursor-pointer z-50 hover:text-zinc-100"
              onClick={(e) => {
                e.preventDefault(); // Prevent DropDownItem click from triggering
                deletePage(index);
              }}
            >
              <TrashIcon className="" />
            </button>
          </DropdownItem>
        ))}
      </DropdownSection>
      <DropdownDivider />
      <DropdownItem href="/#create-page">
        <PlusIcon />
        <DropdownLabel>New Page&hellip;</DropdownLabel>
      </DropdownItem>
    </DropdownMenu>
  );
}

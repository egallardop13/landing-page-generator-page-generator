import { Avatar } from "@/components/ui/avatar";
import { BookmarkIcon } from "@heroicons/react/16/solid";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/ui/dropdown";
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "@/components/ui/sidebar";
import {
  ChevronDownIcon,
  Cog8ToothIcon,
  PlusIcon,
} from "@heroicons/react/16/solid";

const navItems = [
  { label: "Home", url: "/" },
  {
    label: "Sample 1",
    url: "/preview/hero-3-logocloud-2-feature-13-stats-0-cta-9-footer-5",
  },
  {
    label: "Sample 2",
    url: "/preview/hero-11-logocloud-8-feature-12-stats-4-cta-10-footer-5",
  },
  {
    label: "Sample 3",
    url: "/preview/hero-1-logocloud-11-feature-14-stats-9-cta-10-footer-1",
  },
];

function TeamDropdownMenu() {
  return (
    <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
      <DropdownItem href="/teams/1">
        {/* <Avatar slot="icon" src={BookmarkIcon} /> */}
        <Avatar slot="icon" initials="P1" className="bg-zinc-950 text-white" />
        <DropdownLabel>Saved Pages</DropdownLabel>
      </DropdownItem>
      <DropdownItem href="/teams/2">
        <Avatar slot="icon" initials="WC" className="bg-zinc-950 text-white" />
        <DropdownLabel>Workcation</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem href="/teams/create">
        <PlusIcon />
        <DropdownLabel>New Page&hellip;</DropdownLabel>
      </DropdownItem>
    </DropdownMenu>
  );
}

const RootSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <Dropdown>
          <DropdownButton as={SidebarItem} className="lg:mb-2.5">
            {/* <Avatar src="/tailwind-logo.svg" /> */}
            <BookmarkIcon />
            <SidebarLabel>Saved Pages</SidebarLabel>
            <ChevronDownIcon />
          </DropdownButton>
          <TeamDropdownMenu />
        </Dropdown>
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          {navItems.map(({ label, url }) => (
            <SidebarItem key={label} href={url} target="_blank">
              {label}
            </SidebarItem>
          ))}
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  );
};

export default RootSidebar;

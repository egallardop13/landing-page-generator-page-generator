import { BookmarkIcon } from "@heroicons/react/16/solid";
import { Dropdown, DropdownButton } from "@/components/ui/dropdown";
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "@/components/ui/sidebar";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import SavedPagesDropdown from "./SavedPagesDropdown";

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

const RootSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <Dropdown>
          <DropdownButton as={SidebarItem} disabled className="lg:mb-2.5">
            <BookmarkIcon />
            <SidebarLabel>Saved Pages</SidebarLabel>
            <ChevronDownIcon />
          </DropdownButton>
          <SavedPagesDropdown />
        </Dropdown>
        <SidebarHeading>COMING SOON!</SidebarHeading>
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

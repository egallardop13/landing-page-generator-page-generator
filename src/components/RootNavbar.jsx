import { BookmarkIcon } from "@heroicons/react/16/solid";
import { Dropdown, DropdownButton } from "@/components/ui/dropdown";
import {
  Navbar,
  NavbarDivider,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
  NavbarSpacer,
} from "@/components/ui/navbar";
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

const RootNavbar = () => {
  return (
    <Navbar>
      <Dropdown>
        <DropdownButton as={NavbarItem} disabled className="max-lg:hidden">
          <BookmarkIcon />
          <NavbarLabel>Saved Pages</NavbarLabel>
          <ChevronDownIcon />
        </DropdownButton>

        <SavedPagesDropdown />
      </Dropdown>
      <NavbarDivider className="max-lg:hidden" />
      <NavbarSection className="max-lg:hidden">
        {navItems.map(({ label, url }) => (
          <NavbarItem key={label} href={url} target="_blank">
            {label}
          </NavbarItem>
        ))}
      </NavbarSection>
      <NavbarSpacer />
    </Navbar>
  );
};

export default RootNavbar;

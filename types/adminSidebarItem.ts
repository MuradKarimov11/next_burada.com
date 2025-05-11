import { IconType } from "react-icons";
export interface AdminSidebarItem {
  selected?: boolean;
  name: string;
  icon: IconType;
  url: string;
}

import type { AdminSidebarItem } from "@/types/adminSidebarItem";
import Link from "next/link";

const AdminSidebarItem: React.FC<AdminSidebarItem> = ({
  selected,
  name,
  icon: Icon,
  url,
}) => {
  return (
    <Link
      className={`cursor-pointer flex items-center gap-2  ${
        selected ? "text-slate-600 font-bold" : " text-white font-medium"
      }`}
      href={url}
    >
      <Icon size={"25"} />
      <div>{name}</div>
    </Link>
  );
};

export default AdminSidebarItem;

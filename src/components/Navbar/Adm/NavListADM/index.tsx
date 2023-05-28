import React from "react";
import {
  Typography,
  MenuItem,
} from "../../../ClientSide";

const navListItems = [
    {
      label: "Eventos",
      href:"/admin/eventos"
    },
    {
      label: "Administradores",
      href:"/admin/admin-list"
    },
    {
      label: "Promoters",
      href:"#"
    },
  ];
  
export default function NavList() {
    return (
      <ul className="mb-4 mt-2 flex flex-row  md:gap-4 lg:gap-5 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        {navListItems.map(({ label,href}, key) => (
          <Typography
            key={label}
            as="a"
            href={href}
            variant="h6"
            color="blue-gray"
            className="font-semibold"
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              {label}
            </MenuItem>
          </Typography>
          
        ))}
      </ul>
    );
  }
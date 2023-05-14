'use client';
import React from "react";

import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "../../ClientSide";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  PowerIcon,
  HomeIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";


const profileMenuItems = [
  {
    label: "R$ 10.50",
    icon: BanknotesIcon,
    href: '/profile/costumer'
  },
  {
    label: "Pagina inicial",
    icon: HomeIcon,
    href: '/'
  },
  {
    label: "Meu Perfil",
    icon: UserCircleIcon,
    href: '/profile/costumer',
  },
  {
    label: "Histórico",
    icon: InboxArrowDownIcon,
    href: '#',
  },
  {
    label: "Mudar Senha",
    icon: Cog6ToothIcon,
    href: '/profile/changepassword',
  },
  {
    label: "Sair",
    icon: PowerIcon,
    href: '#',
  },
];

export default function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="lg"
            alt="Profile"
            className="border border-blue-500 p-0.5"
            src="/img/profile/placeholder.jpg" />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
              }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, href }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${isLastItem
                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                : ""
                }`}
            >
              <Link href={href} className='flex flex-row gap-2'>
                {React.createElement(icon, {
                  className: `h-6 w-6 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="h5"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </Link>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

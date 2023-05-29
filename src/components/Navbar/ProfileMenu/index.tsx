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
  TicketIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";



const profileMenuItems = [

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
    label: "Meus Ingressos",
    icon: TicketIcon,
    href: '/profile/costumer/ticket-list',
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

];



export function ProfileMenu() {
  const {data: session } = useSession();


  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);



  if (session && session.user && session.user.email){
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
        <div className="border-transparent p-2.5 cursor-pointer w-full bg-[#404C76] flex justify-center gap-2 rounded"> 
        
          <Typography
            as="span"
            variant="h5"
            className="font-normal"
            color="black"
          >
            {session.user.name}
          </Typography>
        </div>
        {profileMenuItems.map(({ label, icon, href }, key) => {
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded`}
            >
              <Link href={href} className='flex flex-row gap-2'>
                {React.createElement(icon, {
                  className: `h-6 w-6`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="h5"
                  className="font-normal"
                  color={"inherit"}
                >
                  {label}
                </Typography>
              </Link>
            </MenuItem>
          );
        })}
        
        <MenuItem onClick={() => { signOut({callbackUrl:'/'}); }} className='border-transparent p-2.5 cursor-pointer w-full bg-white flex gap-2 rounded hover:bg-red-500'>
          {React.createElement(PowerIcon, {
            className: `h-6 w-6 text-red-500`,
          })}
          <Typography
            as="span"
            variant="h5"
            className="font-normal"
            color="red"
          >
            Sair
          </Typography>
        </MenuItem>

      </MenuList>
    </Menu>
  );
  }
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
        <MenuItem> 
        {React.createElement(BanknotesIcon, {
            className: `h-6 w-6 `,
          })}
          <Typography
            as="span"
            variant="h5"
            className="font-normal"
            color="red"
          >
            {session && session.user ? "Name" : 'Carregando...'}
          </Typography>
        </MenuItem>
        {profileMenuItems.map(({ label, icon, href }, key) => {
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded`}
            >
              <Link href={href} className='flex flex-row gap-2'>
                {React.createElement(icon, {
                  className: `h-6 w-6`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="h5"
                  className="font-normal"
                  color={"inherit"}
                >
                  {label}
                </Typography>
              </Link>
            </MenuItem>
          );
        })}
        
        <MenuItem onClick={() => {signOut({callbackUrl:'/'});}} className='border-transparent p-2.5 cursor-pointer w-full bg-white flex gap-2 rounded hover:bg-red-500'>
          {React.createElement(PowerIcon, {
            className: `h-6 w-6 text-red-500`,
          })}
          <Typography
            as="span"
            variant="h5"
            className="font-normal"
            color="red"
          >
            Sair
          </Typography>
        </MenuItem>

      </MenuList>
    </Menu>
  );
}

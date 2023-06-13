import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
  } from "../../ClientSide";
  import Link from 'next/link';
   
  export default function NoLoginMenu() {
    return (
        <div className="md:hidden">
            <Menu>
                <MenuHandler>
                <div className="flex justify-center mt-auto">
                    <img src="/icons/menu.svg" />
                </div>
                </MenuHandler>
                <MenuList>
                    <Link href={'/sighin'}><MenuItem>Entrar</MenuItem></Link>
                    <Link href={'/customer-registration'}><MenuItem>Cadastrar Cliente</MenuItem></Link>
                    <Link href={'/promoter-registration'}><MenuItem>Cadastrar Promoter</MenuItem></Link>
                </MenuList>
            </Menu>
        </div>
    );
  }
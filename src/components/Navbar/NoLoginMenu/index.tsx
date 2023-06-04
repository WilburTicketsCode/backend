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
                    <img src="/icons/menu.svg" className="cursor-pointer"/>
                </div>
                </MenuHandler>
                <MenuList>
                    <Link href={'/sighin'}><MenuItem>Entrar</MenuItem></Link>
                    <Link href={'/auth/customer-registration'}><MenuItem>Cadastre-se</MenuItem></Link>
                    <Link href={'/auth/promoter-registration'}><MenuItem>Seja um Promoter</MenuItem></Link>
                </MenuList>
            </Menu>
        </div>
    );
  }
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
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
                <Menu placement="right-start" offset={15}>
                    <MenuHandler>
                    <MenuItem>Cliente</MenuItem>
                    </MenuHandler>
                    <MenuList>
                    <Link href={'/logincostumer'}><MenuItem>Entrar</MenuItem></Link>
                    <Link href={'/customer-registration'}><MenuItem>Cadastrar</MenuItem></Link>
                    </MenuList>
                </Menu>

                <Menu placement="right-start" offset={15}>
                    <MenuHandler>
                    <MenuItem>Promoter</MenuItem>
                    </MenuHandler>
                    <MenuList>
                    <Link href={'/loginpromoter'}><MenuItem>Entrar</MenuItem></Link>
                    <Link href={'/promoter-registration'}><MenuItem>Cadastrar</MenuItem></Link>
                    </MenuList>
                </Menu>
                </MenuList>
            </Menu>
        </div>
    );
  }
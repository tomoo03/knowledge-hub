'use client';

import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Input } from '@nextui-org/react';
import styles from '@/styles/components/shared/header.module.css';
import Link from 'next/link';
import SearchIcon from '@/app/components/icons/searchIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ];

  const pcNavBarClassName = 'navbar-pc-container';
  const spNavBarClassName = 'navbar-sp-container';
  const navBarMenuId = 'navbar-menu-portal-container';

  return (
    <header className={styles.header}>

      {/* PC用 */}
      <div
        className={`${styles[pcNavBarClassName]}`}
      >
        <Navbar>
          <NavbarBrand>
            <Link className="font-bold text-inherit" color="foreground" href="/">
            KnowledgeHub
            </Link>
          </NavbarBrand>
          <NavbarContent className="gap-4" justify="end">
            <NavbarItem>
              <Link color="foreground" href="#">
            Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
            Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Input
                classNames={{
                  base: 'max-w-full sm:max-w-[10rem] h-10',
                  mainWrapper: 'h-full',
                  input: 'text-small',
                  inputWrapper: 'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
                }}
                placeholder="Type to search..."
                size="sm"
                startContent={<SearchIcon size={18} />}
                type="search"
              />
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>

      {/* スマホ用 */}
      <div
        className={`${styles[spNavBarClassName]}`}
      >
        <Navbar
          isBordered
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent justify="start" id={navBarMenuId}>
            <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
          </NavbarContent>

          <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
              <Link className="font-bold text-inherit" color="foreground" href="/">
            KnowledgeHub
              </Link>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent justify="end">
            <NavbarItem>
              <Input
                classNames={{
                  base: 'max-w-full sm:max-w-[10rem] h-10',
                  mainWrapper: 'h-full',
                  input: 'text-small',
                  inputWrapper: 'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
                }}
                placeholder="Type to search..."
                size="sm"
                startContent={<SearchIcon size={18} />}
                type="search"
              />
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full"
                  color={
                    index === 2 ? 'warning' : index === menuItems.length - 1 ? 'danger' : 'foreground'
                  }
                  href="#"
                  // size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </div>
    </header>
  );
}

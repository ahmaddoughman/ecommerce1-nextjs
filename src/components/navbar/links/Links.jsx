'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import styles from './links.module.css'
import NavLink from './navLink/NavLink';
import Image from 'next/image';
import { handleLogout } from '@/lib/action';

const links = [
  {
      title: "Home",
      path: "/"
  },
  {
      title: "About",
      path: "/about"
  },
  {
      title: "Contact",
      path: "/contact"
  },
  {
      title: "Blog",
      path: "/blog"
  },
];

export default function Links({session}) {

  const [open, setOpen] = useState();

   
    const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}

        {
          session?.user ? (
            <>
              {
                session.user?.isAdmin && (<NavLink item={{title: "Admin", path: "/admin"}} />)
              }
              <form action={handleLogout}>
                <button className={styles.logout}>Logout</button>
              </form>
            </>) : 
            (<NavLink item={{title: "Login", path: "/login"}} />)
        }
      </div>
      <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}><Image src="/menu.png" alt="" width={30} height={30} /></button>
      {
        open && <div className={styles.mobileLinks}>
          {
            links.map((link) => (
              <NavLink item={link} key={link.title} />
            ))
          }
        </div>
      }
    </div>
  )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Sidebar.module.css'

const navItems = [
  { label: 'Dashboard', href: '/auth' },
  { label: 'Ministérios', href: '/ministries' },
  { label: 'Membros', href: '/members' },
  { label: 'Igrejas', href: '/churches' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Ekklesia</h2>
      <nav>
        <ul className={styles.navList}>
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.link} ${
                  pathname === href ? styles.active : ''
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

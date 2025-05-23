"use client";

import styles from "./Sidebar.module.css";

type SideBarProps = {
  header: React.ReactNode;
  body: React.ReactNode;
  footer?: React.ReactNode;
};

export default function Sidebar({ header, body, footer }: SideBarProps) {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Ekklesia</h2>
      <div className="header">{header}</div>
      <div className="body">{body}</div>
    <div className="footer">{footer}</div>
    </aside>
  );
}

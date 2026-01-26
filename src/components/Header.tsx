'use client';

import React from 'react';
import { Bell, Search } from 'lucide-react'; // Using Search as logo placeholder if needed
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.titleContainer}>
                {/* Simple logo placeholder for CampusMate */}
                <div className={styles.brandLogo}>
                    <Search size={24} />
                </div>
                <h1 className={styles.title}>CampusMate AI</h1>
            </div>

            <div className={styles.actions}>
                <button className={styles.iconButton}>
                    <Bell size={20} />
                </button>
                <div className={styles.profile}>
                    <img src="https://i.pravatar.cc/150?img=12" alt="Profile" className={styles.profileImage} />
                </div>
            </div>
        </header>
    );
}

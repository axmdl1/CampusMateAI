'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, BookOpen, Layers, Award, LogOut } from 'lucide-react';
import styles from './page.module.css';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
    const router = useRouter();

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            router.push('/');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>My Profile</h2>
                <p className={styles.subtitle}>Manage your personal information and settings.</p>
            </div>

            <div className={styles.grid}>
                {/* Left Column: Personal Info */}
                <div className={styles.leftColumn}>
                    <Card className={styles.profileCard}>
                        <div className={styles.avatarSection}>
                            <div className={styles.avatarWrapper}>
                                <Image
                                    src="https://i.pravatar.cc/300?img=12"
                                    alt="Profile Picture"
                                    width={120}
                                    height={120}
                                    className={styles.avatar}
                                />
                                <div className={styles.onlineStatus}></div>
                            </div>
                            <h3 className={styles.userName}>Alex Johnson</h3>
                            <p className={styles.userRole}>Software Engineering, Year 3</p>
                            <p className={styles.userId}>ID: 210987</p>
                        </div>

                        <div className={styles.infoList}>
                            <div className={styles.infoItem}>
                                <Mail size={18} className={styles.icon} />
                                <span>alex.johnson@example.com</span>
                            </div>
                            <div className={styles.infoItem}>
                                <Phone size={18} className={styles.icon} />
                                <span>+7 (777) 123-45-67</span>
                            </div>
                            <div className={styles.infoItem}>
                                <MapPin size={18} className={styles.icon} />
                                <span>Astana, Kazakhstan</span>
                            </div>
                        </div>

                        <div className={styles.logoutSection}>
                            <Button
                                variant="secondary"
                                className={styles.logoutBtn}
                                onClick={handleLogout}
                            >
                                <LogOut size={18} />
                                Log Out
                            </Button>
                        </div>
                    </Card>
                </div>

                {/* Right Column: Academic Info */}
                <div className={styles.rightColumn}>
                    <Card className={styles.detailsCard}>
                        <h3 className={styles.cardTitle}>Academic Information</h3>

                        <div className={styles.detailsGrid}>
                            <div className={styles.detailItem}>
                                <div className={styles.detailIcon} style={{ background: '#E6F7FF', color: '#0095FF' }}>
                                    <BookOpen size={24} />
                                </div>
                                <div className={styles.detailContent}>
                                    <span className={styles.detailLabel}>Major</span>
                                    <span className={styles.detailValue}>Software Engineering</span>
                                </div>
                            </div>

                            <div className={styles.detailItem}>
                                <div className={styles.detailIcon} style={{ background: '#FFF7E6', color: '#FFB547' }}>
                                    <Layers size={24} />
                                </div>
                                <div className={styles.detailContent}>
                                    <span className={styles.detailLabel}>Group</span>
                                    <span className={styles.detailValue}>SE-2309</span>
                                </div>
                            </div>

                            <div className={styles.detailItem}>
                                <div className={styles.detailIcon} style={{ background: '#E6FFFA', color: '#05CD99' }}>
                                    <Award size={24} />
                                </div>
                                <div className={styles.detailContent}>
                                    <span className={styles.detailLabel}>GPA</span>
                                    <span className={styles.detailValue}>3.85 / 4.0</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.divider}></div>

                        <h3 className={styles.cardTitle}>Current Courses</h3>
                        <div className={styles.coursesList}>
                            {['Data Structures & Algorithms', 'Database Management Systems', 'Software Architecture', 'Web Development'].map((course, index) => (
                                <div key={index} className={styles.courseItem}>
                                    <div className={styles.courseBullet}></div>
                                    <span>{course}</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className={styles.activityCard}>
                        <h3 className={styles.cardTitle}>Recent Activity</h3>
                        <div className={styles.emptyState}>
                            No recent activity to show.
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Upload, Sparkles, FileQuestion, ChevronRight, Cloud } from 'lucide-react'; // Added icons
import styles from './page.module.css';
import { Button } from '@/components/ui/Button';

export default function QuizzesPage() {
    const quizzes = [
        { id: 1, title: 'Data Structures Basics', course: 'Data Structures', status: 'Completed', score: '95%' },
        { id: 2, title: 'Linked Lists & Arrays', course: 'Data Structures', status: 'Pending', score: '-' },
        { id: 3, title: 'Database Normalization', course: 'Databases', status: 'Pending', score: '-' },
        { id: 4, title: 'React Fundamentals', course: 'Web Development', status: 'Completed', score: '88%' },
        { id: 5, title: 'Algorithm Complexity', course: 'Algorithms', status: 'Pending', score: '-' },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>Quizzes & Assignments</h2>
                <p className={styles.subtitle}>Manage your assessments and get AI help.</p>
            </div>

            <div className={styles.quizList}>
                {quizzes.map((quiz) => (
                    <div key={quiz.id} className={styles.quizItem}>
                        <div className={styles.quizInfo}>
                            <div
                                className={styles.quizIcon}
                                style={{ background: quiz.status === 'Completed' ? '#05CD99' : '#FFB547' }}
                            >
                                <FileQuestion size={20} />
                            </div>
                            <div className={styles.quizDetails}>
                                <h4>{quiz.title}</h4>
                                <p>{quiz.course}</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                            <span className={`${styles.statusChip} ${quiz.status === 'Completed' ? styles.completed : styles.pending}`}>
                                {quiz.status}
                            </span>
                            <ChevronRight size={20} color="#A3AED0" />
                        </div>
                    </div>
                ))}
            </div>

            {/* AI Explanation Cloud Section */}
            <div className={styles.aiCloudSection}>
                <div className={styles.cloudCircle1}></div>
                <div className={styles.cloudCircle2}></div>

                <div className={styles.aiHeader}>
                    <div style={{ background: '#E9E3FF', padding: 12, borderRadius: '50%', color: '#4318FF' }}>
                        <Cloud size={32} />
                    </div>
                    <h3 className={styles.aiTitle}>AI Explanation</h3>
                    <p className={styles.aiDescription}>
                        Stuck on a problem? Upload your quiz file or screenshot and let AI explain it to you.
                    </p>
                </div>

                <div className={styles.aiActions}>
                    <Button variant="secondary" className={styles.uploadBtn}>
                        <Upload size={18} />
                        Add File
                    </Button>

                    <Button variant="primary" className={styles.uploadBtn}>
                        <Sparkles size={18} />
                        Explain
                    </Button>

                    <Button variant="primary" className={styles.uploadBtn} style={{ background: '#FFB547', color: '#1B2559' }}>
                        <Image
                            src="/assets/quiz-icon.png"
                            alt="Icon"
                            width={20}
                            height={20}
                        />
                        Make Quiz
                    </Button>
                </div>
            </div>
        </div>
    );
}

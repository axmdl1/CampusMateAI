'use client';

import React from 'react';
import { ArrowLeft, Mail, BookOpen, Crown, Edit2, Shield, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
    const router = useRouter();

    const user = {
        name: 'Alex Johnson',
        email: 'alex.j@example.com',
        role: 'Student',
        group: 'CS-2024-A',
        avatar: 'https://i.pravatar.cc/150?img=12',
        joined: 'September 2023',
        stats: {
            quizzesTaken: 12,
            documentsAnalyzed: 45,
            avgScore: '88%'
        }
    };

    return (
        <div style={{ minHeight: '100vh', background: '#F4F7FE', padding: '40px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <Button variant="ghost" onClick={() => router.back()} style={{ marginBottom: '20px' }}>
                    <ArrowLeft size={20} style={{ marginRight: '8px' }} />
                    Back to Dashboard
                </Button>

                {/* Profile Header Card */}
                <div style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '3px', // gradient border trick
                    backgroundClip: 'content-box',
                    marginBottom: '24px',
                    boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.05)'
                }}>
                    <div style={{
                        background: 'white',
                        borderRadius: '18px',
                        overflow: 'hidden'
                    }}>
                        {/* Banner */}
                        <div style={{
                            height: '140px',
                            background: 'linear-gradient(90deg, #4318FF 0%, #868CFF 100%)',
                            position: 'relative'
                        }}></div>

                        {/* Avatar & Info */}
                        <div style={{ padding: '0 32px 32px', marginTop: '-60px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                <div style={{
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: '50%',
                                    border: '4px solid white',
                                    overflow: 'hidden',
                                    background: 'white'
                                }}>
                                    <img src={user.avatar} alt={user.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <Button variant="secondary">
                                    <Edit2 size={16} style={{ marginRight: '8px' }} />
                                    Edit Profile
                                </Button>
                            </div>

                            <div style={{ marginTop: '16px' }}>
                                <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#1B2559', marginBottom: '4px' }}>{user.name}</h1>
                                <p style={{ color: '#A3AED0', fontSize: '16px' }}>{user.role} • {user.group}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Details Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                    {/* General Info */}
                    <div style={{ background: 'white', borderRadius: '20px', padding: '24px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1B2559', marginBottom: '24px' }}>General Information</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                <div style={{ padding: '12px', background: 'rgba(67, 24, 255, 0.05)', borderRadius: '12px', color: '#4318FF' }}>
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '12px', color: '#A3AED0' }}>Email</p>
                                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#1B2559' }}>{user.email}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                <div style={{ padding: '12px', background: 'rgba(5, 205, 153, 0.1)', borderRadius: '12px', color: '#05CD99' }}>
                                    <Shield size={20} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '12px', color: '#A3AED0' }}>Student Group</p>
                                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#1B2559' }}>{user.group}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                <div style={{ padding: '12px', background: 'rgba(255, 181, 71, 0.1)', borderRadius: '12px', color: '#FFB547' }}>
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '12px', color: '#A3AED0' }}>Joined</p>
                                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#1B2559' }}>{user.joined}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div style={{ background: 'white', borderRadius: '20px', padding: '24px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1B2559', marginBottom: '24px' }}>Activity Overview</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', border: '1px solid #F4F7FE', borderRadius: '16px' }}>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                    <BookOpen size={20} color="#4318FF" />
                                    <span style={{ color: '#A3AED0', fontSize: '14px' }}>Analyze Usage</span>
                                </div>
                                <span style={{ fontWeight: 700, color: '#1B2559' }}>{user.stats.documentsAnalyzed} Docs</span>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', border: '1px solid #F4F7FE', borderRadius: '16px' }}>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                    <Crown size={20} color="#FFB547" />
                                    <span style={{ color: '#A3AED0', fontSize: '14px' }}>Quizzes Taken</span>
                                </div>
                                <span style={{ fontWeight: 700, color: '#1B2559' }}>{user.stats.quizzesTaken}</span>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', border: '1px solid #F4F7FE', borderRadius: '16px' }}>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                    <span style={{ color: '#A3AED0', fontSize: '14px' }}>Average Score</span>
                                </div>
                                <span style={{ fontWeight: 700, color: '#05CD99' }}>{user.stats.avgScore}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

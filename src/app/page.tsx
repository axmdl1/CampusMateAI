'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Search, ChevronRight } from 'lucide-react';
import styles from './page.module.css';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <main className={styles.container}>
      <div className={styles.loginCard}>
        <div style={{ marginBottom: 32, display: 'flex', justifyContent: 'center' }}>
          <Image
            src="/assets/aitu-logo.png"
            alt="Astana IT University"
            width={200}
            height={200}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
        {/* Brand Header */}
        <div className={styles.brandHeader}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <Search size={22} />
            </div>
            <span className={styles.brandName}>CampusMate AI</span>
          </div>
          <p className={styles.tagline}>Your academic assistant powered by AI</p>
        </div>

        {/* Welcome Section */}
        <div className={styles.welcomeSection}>
          <h2 className={styles.welcomeTitle}>Welcome Back!</h2>
          <p className={styles.welcomeSubtitle}>Log in to continue to CampusMate AI.</p>
        </div>

        {/* Login Form */}
        <form className={styles.form} onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            icon={<Mail size={18} />}
          />
          <Input
            type="password"
            placeholder="Enter your password"
            icon={<Lock size={18} />}
          />
          <div className={styles.forgotPassword}>Forgot password?</div>

          <Button type="submit" variant="primary">Continue</Button>
        </form>

        <div className={styles.orDivider}>OR</div>

        {/* Social Login */}
        <Button variant="secondary" onClick={() => router.push('/dashboard')}>
          <div className={styles.openidContent}>
            <img src="https://lms.astanait.edu.kz/theme/image.php/classic/auth_oidc/1759344969/o365" alt="Office 365" width={20} height={20} />
            <span>Sign in with OpenID Connect</span>
          </div>
        </Button>

        {/* Footer */}
        <div className={styles.footer}>
          <div className={styles.footerLinks}>
            <Link href="#">About</Link>
            <span>|</span>
            <Link href="#">Privacy</Link>
            <span>|</span>
            <Link href="#">Terms</Link>
            <span>|</span>
            <Link href="#">Support</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

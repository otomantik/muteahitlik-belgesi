"use client";

import React from "react";
import Link from "next/link";
import { CONTACT, HOURS, NAVIGATION } from "@/lib/constants";
import Icon from "@/components/shared/Icon";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border h-[var(--header-height-mobile)] md:h-[var(--header-height-desktop)]">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-1 min-w-0">
          <Link href="/" className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 bg-accent-dark rounded-sm flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">MB</span>
            </div>
            <span className="text-foreground font-semibold text-base md:text-lg truncate">
              Müteahhitlik Belgesi
            </span>
          </Link>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAVIGATION.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground hover:text-accent-gold transition-colors text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Section - Phone CTA & Hours */}
        <div className="flex items-center gap-4">
          {/* Working Hours - Desktop */}
          <div className="hidden md:flex flex-col items-end">
            <span className="text-sm font-medium text-foreground">Çalışma Saatleri</span>
            <span className="text-xs text-muted-foreground">{HOURS.description}</span>
          </div>

          {/* Phone CTA Button */}
          <a
            href={`tel:${CONTACT.phone.primary}`}
            className="flex items-center gap-2 px-4 py-2 bg-accent-dark text-white rounded-sm hover:bg-accent-dark/90 transition-colors text-sm font-medium"
            onClick={() => {
              // Analytics: click_call
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click_call', {
                  event_category: 'engagement',
                  event_label: 'header_phone'
                });
              }
            }}
          >
            <Icon name="phone" size={16} />
            <span className="hidden sm:inline">Ara</span>
          </a>
        </div>
      </div>
    </header>
  );
};


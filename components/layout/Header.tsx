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
      <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full">
        <div className="h-full flex items-center justify-between gap-6 lg:gap-8">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-accent-dark rounded-sm flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105">
                <span className="text-white font-bold text-base">MB</span>
              </div>
              <span className="text-foreground font-semibold text-lg lg:text-xl truncate max-w-[200px] lg:max-w-none">
                Müteahhitlik Belgesi
              </span>
            </Link>
          </div>

          {/* Navigation Section - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-auto">
            <div className="flex items-center gap-0.5">
              {NAVIGATION.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 xl:px-5 py-2.5 text-foreground hover:text-accent-gold hover:bg-accent-gold/5 rounded-md transition-all text-sm font-medium relative group"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-3/4"></span>
                </a>
              ))}
            </div>
          </nav>

          {/* Right Section */}
          <div className="flex items-center justify-end gap-3 xl:gap-4 flex-shrink-0">
            {/* Working Hours - Desktop */}
            <div className="hidden xl:flex flex-col items-end pr-4 border-r border-border/60">
              <span className="text-xs font-semibold text-foreground leading-tight mb-0.5 whitespace-nowrap">Çalışma Saatleri</span>
              <span className="text-xs text-muted-foreground leading-tight whitespace-nowrap">{HOURS.description}</span>
            </div>

            {/* Phone CTA Button */}
            <a
              href={`tel:${CONTACT.phone.primary}`}
              aria-label={`${CONTACT.phone.formatted} numarasını ara`}
              className="flex items-center gap-2 px-5 py-2.5 bg-accent-dark text-white rounded-md hover:bg-accent-dark/90 transition-all text-sm font-semibold shadow-sm hover:shadow-md hover:scale-105 active:scale-95 whitespace-nowrap"
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
              <Icon name="phone" size={16} aria-hidden="true" />
              <span>Ara</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};


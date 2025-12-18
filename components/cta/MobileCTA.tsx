"use client";

import React from "react";
import { CONTACT, GOOGLE_ADS } from "@/lib/constants";
import Icon from "@/components/shared/Icon";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const MobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border h-[var(--mobile-cta-height)] md:hidden">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full gap-4">
          {/* WhatsApp CTA */}
          <a
            href={CONTACT.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white rounded-sm flex-1 py-3 hover:bg-[#25D366]/90 transition-colors"
            onClick={() => {
              // Analytics: click_whatsapp
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click_whatsapp', {
                  event_category: 'engagement',
                  event_label: 'mobile_cta'
                });
                // Google Ads conversion tracking
                if (GOOGLE_ADS.conversionId && GOOGLE_ADS.conversionLabel) {
                  window.gtag('event', 'conversion', {
                    send_to: `${GOOGLE_ADS.conversionId}/${GOOGLE_ADS.conversionLabel}`,
                    event_category: 'engagement',
                    event_label: 'mobile_cta_whatsapp'
                  });
                }
              }
            }}
          >
            <Icon name="whatsapp" size={20} />
            <span className="font-medium">WhatsApp</span>
          </a>

          {/* Phone CTA */}
          <a
            href={`tel:${CONTACT.phone.primary}`}
            className="flex items-center justify-center gap-2 bg-accent-dark text-white rounded-sm flex-1 py-3 hover:bg-accent-dark/90 transition-colors"
            onClick={() => {
              // Analytics: click_call
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click_call', {
                  event_category: 'engagement',
                  event_label: 'mobile_cta'
                });
                // Google Ads conversion tracking
                if (GOOGLE_ADS.conversionId && GOOGLE_ADS.conversionLabel) {
                  window.gtag('event', 'conversion', {
                    send_to: `${GOOGLE_ADS.conversionId}/${GOOGLE_ADS.conversionLabel}`,
                    event_category: 'engagement',
                    event_label: 'mobile_cta_phone'
                  });
                }
              }
            }}
          >
            <Icon name="phone" size={20} />
            <span className="font-medium">Ara</span>
          </a>
        </div>
      </div>
    </div>
  );
};


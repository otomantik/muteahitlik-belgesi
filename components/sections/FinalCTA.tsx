"use client";

import React from "react";
import { CONTACT, GOOGLE_ADS } from "@/lib/constants";
import Icon from "@/components/shared/Icon";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const FinalCTA = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Müteahhitlik Belgesi Başvurusunu Ertelemeye Gerek Yok
          </h2>
          <p className="text-lg text-foreground/85 mb-8 font-medium">
            Her geçen gün potansiyel ihaleleri ve projeleri kaçırıyorsunuz. 
            Müteahhitlik belgesi başvurunuz için ilk adım sadece bir iletişim kadar uzakta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CONTACT.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp ile hemen iletişime geç"
              className="inline-flex items-center justify-center gap-3 bg-accent-dark text-white px-8 py-4 rounded-sm hover:bg-accent-dark/90 transition-colors font-medium text-lg shadow-lg"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'click_whatsapp', {
                    event_category: 'engagement',
                    event_label: 'final_cta_whatsapp'
                  });
                  // Google Ads conversion tracking
                  if (GOOGLE_ADS.conversionId && GOOGLE_ADS.conversionLabel) {
                    window.gtag('event', 'conversion', {
                      send_to: `${GOOGLE_ADS.conversionId}/${GOOGLE_ADS.conversionLabel}`,
                      event_category: 'engagement',
                      event_label: 'final_cta_whatsapp'
                    });
                  }
                }
              }}
            >
              <Icon name="whatsapp" size={24} aria-hidden="true" />
              WhatsApp'tan Hemen İletişim
            </a>
            
            <a
              href={`tel:${CONTACT.phone.primary}`}
              aria-label={`${CONTACT.phone.formatted} numarasını ara - direkt görüşme`}
              className="inline-flex items-center justify-center gap-3 bg-card text-foreground border-2 border-border px-8 py-4 rounded-sm hover:bg-muted transition-colors font-medium text-lg"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'click_call', {
                    event_category: 'engagement',
                    event_label: 'final_cta_phone'
                  });
                  // Google Ads conversion tracking
                  if (GOOGLE_ADS.conversionId && GOOGLE_ADS.conversionLabel) {
                    window.gtag('event', 'conversion', {
                      send_to: `${GOOGLE_ADS.conversionId}/${GOOGLE_ADS.conversionLabel}`,
                      event_category: 'engagement',
                      event_label: 'final_cta_phone'
                    });
                  }
                }
              }}
            >
              <Icon name="phone" size={24} />
              Direkt Görüşme
            </a>
          </div>
          
          <p className="text-sm text-foreground/80 mt-8">
            Ücretsiz ön değerlendirme için iletişime geçin. Herhangi bir taahhüt içermez.
          </p>
        </div>
      </div>
    </section>
  );
};


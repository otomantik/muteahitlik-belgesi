"use client";

import React from "react";
import Image from "next/image";
import { CONTACT, GOOGLE_ADS } from "@/lib/constants";
import Icon from "@/components/shared/Icon";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const Hero = () => {
  return (
    <section className="relative bg-background">
      {/* Mobile: Full-width background image with overlay */}
      <div className="md:hidden relative w-screen min-h-[600px] flex items-center" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
        {/* Background Image - Mobile (Full Width, Edge to Edge) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/muteahitlik-belgesi-hero.jpg"
            alt="Müteahhitlik belgesi evrak dosyası hazırlama - profesyonel danışmanlık"
            fill
            priority={true}
            fetchPriority="high"
            sizes="100vw"
            className="object-cover"
            style={{ opacity: 0.5 }}
          />
        </div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/80" />
        
        {/* Content Overlay - Mobile */}
        <div className="relative z-10 container mx-auto px-4 py-12 w-full">
          <div className="space-y-6">
            {/* Promise Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gold/15 border-2 border-accent-gold/40 rounded-sm">
              <Icon name="clock" size={16} className="text-accent-gold" />
              <span className="text-accent-gold font-bold text-sm">
                3 İş Günü - EVRAK HAZIRLAMA
              </span>
            </div>

            {/* H1 (Module 12 - Verbatim) */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Müteahhitlik Belgesi:{" "}
              <span className="text-accent-dark">Evrak Dosyanız 3 İş Gününde Hazır</span>
            </h1>

            {/* Subtext (Module 12 - Verbatim) - Mobilde daha koyu */}
            <p className="text-lg text-foreground/95 leading-relaxed font-semibold">
              Eksik evrak, yanlış yetki grubu, hatalı dosya. Bunlar süreci uzatır. 
              Biz başvuruya hazır evrak dosyasını 3 iş gününde teslim ederiz.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-foreground/90">
              <div className="flex items-center gap-2">
                <Icon name="checklist" size={16} className="text-accent-gold" />
                <span className="font-semibold">Ücretsiz Ön Değerlendirme</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="shield" size={16} className="text-accent-gold" />
                <span className="font-semibold">KVKK Uyumlu</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="shield" size={16} className="text-accent-gold" />
                <span className="font-semibold">Gizlilik Taahhüdü</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="clock" size={16} className="text-accent-gold" />
                <span className="font-semibold">3 İş Gününde Hazır</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* WhatsApp CTA */}
              <a
                href={CONTACT.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-accent-dark text-white px-6 py-4 rounded-sm hover:bg-accent-dark/90 transition-colors font-medium text-lg shadow-lg"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'click_whatsapp', {
                      event_category: 'engagement',
                      event_label: 'hero_whatsapp'
                    });
                    // Google Ads conversion tracking
                    if (GOOGLE_ADS.conversionId && GOOGLE_ADS.conversionLabel) {
                      window.gtag('event', 'conversion', {
                        send_to: `${GOOGLE_ADS.conversionId}/${GOOGLE_ADS.conversionLabel}`,
                        event_category: 'engagement',
                        event_label: 'hero_whatsapp'
                      });
                    }
                  }
                }}
              >
                <Icon name="whatsapp" size={20} />
                WhatsApp'tan Hızlı Kontrol
              </a>

              {/* Phone CTA */}
              <a
                href={`tel:${CONTACT.phone.primary}`}
                className="inline-flex items-center justify-center gap-3 bg-card text-foreground border-2 border-border px-6 py-4 rounded-sm hover:bg-muted transition-colors font-medium text-lg"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'click_call', {
                      event_category: 'engagement',
                      event_label: 'hero_phone'
                    });
                    // Google Ads conversion tracking
                    if (GOOGLE_ADS.conversionId && GOOGLE_ADS.conversionLabel) {
                      window.gtag('event', 'conversion', {
                        send_to: `${GOOGLE_ADS.conversionId}/${GOOGLE_ADS.conversionLabel}`,
                        event_category: 'engagement',
                        event_label: 'hero_phone'
                      });
                    }
                  }
                }}
              >
                <Icon name="phone" size={20} />
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Grid layout with side-by-side content */}
      <div className="hidden md:block container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Copy */}
          <div className="space-y-6">
            {/* Promise Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gold/15 border-2 border-accent-gold/40 rounded-sm">
              <Icon name="clock" size={16} className="text-accent-gold" />
              <span className="text-accent-gold font-bold text-sm">
                3 İş Günü - EVRAK HAZIRLAMA
              </span>
            </div>

            {/* H1 (Module 12 - Verbatim) */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Müteahhitlik Belgesi:{" "}
              <span className="text-accent-dark">Evrak Dosyanız 3 İş Gününde Hazır</span>
            </h1>

            {/* Subtext (Module 12 - Verbatim) */}
            <p className="text-lg text-foreground/85 leading-relaxed font-medium">
              Eksik evrak, yanlış yetki grubu, hatalı dosya. Bunlar süreci uzatır. 
              Biz başvuruya hazır evrak dosyasını 3 iş gününde teslim ederiz.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-foreground/80">
              <div className="flex items-center gap-2">
                <Icon name="checklist" size={16} className="text-accent-gold" />
                <span className="font-medium">Ücretsiz Ön Değerlendirme</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="shield" size={16} className="text-accent-gold" />
                <span className="font-medium">KVKK Uyumlu</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="shield" size={16} className="text-accent-gold" />
                <span className="font-medium">Gizlilik Taahhüdü</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="clock" size={16} className="text-accent-gold" />
                <span className="font-medium">3 İş Gününde Hazır</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* WhatsApp CTA */}
              <a
                href={CONTACT.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-accent-dark text-white px-6 py-4 rounded-sm hover:bg-accent-dark/90 transition-colors font-medium text-lg shadow-lg"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'click_whatsapp', {
                      event_category: 'engagement',
                      event_label: 'hero_whatsapp'
                    });
                    // Google Ads conversion tracking
                    if (GOOGLE_ADS.conversionId && GOOGLE_ADS.conversionLabel) {
                      window.gtag('event', 'conversion', {
                        send_to: `${GOOGLE_ADS.conversionId}/${GOOGLE_ADS.conversionLabel}`,
                        event_category: 'engagement',
                        event_label: 'hero_whatsapp'
                      });
                    }
                  }
                }}
              >
                <Icon name="whatsapp" size={20} />
                WhatsApp'tan Hızlı Kontrol
              </a>

              {/* Phone CTA */}
              <a
                href={`tel:${CONTACT.phone.primary}`}
                className="inline-flex items-center justify-center gap-3 bg-card text-foreground border-2 border-border px-6 py-4 rounded-sm hover:bg-muted transition-colors font-medium text-lg"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'click_call', {
                      event_category: 'engagement',
                      event_label: 'hero_phone'
                    });
                    // Google Ads conversion tracking
                    if (GOOGLE_ADS.conversionId && GOOGLE_ADS.conversionLabel) {
                      window.gtag('event', 'conversion', {
                        send_to: `${GOOGLE_ADS.conversionId}/${GOOGLE_ADS.conversionLabel}`,
                        event_category: 'engagement',
                        event_label: 'hero_phone'
                      });
                    }
                  }
                }}
              >
                <Icon name="phone" size={20} />
                Hemen Ara
              </a>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/muteahitlik-belgesi-hero.jpg"
                alt="Müteahhitlik belgesi evrak dosyası hazırlama - profesyonel danışmanlık"
                fill
                priority={true}
                fetchPriority="high"
                sizes="50vw"
                className="object-cover"
              />
              {/* Blueprint overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-dark/5 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                  <p className="text-sm text-foreground">
                    Profesyonel evrak hazırlama süreci
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


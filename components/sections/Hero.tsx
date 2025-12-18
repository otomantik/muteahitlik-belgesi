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
      {/* Mobile: Card-based Hero with Gradient Background */}
      <div className="md:hidden relative w-full py-16 px-4">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-dark/10 via-background to-accent-gold/5" />
        
        {/* Subtle Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(45deg, #1E293B 25%, transparent 25%), 
                             linear-gradient(-45deg, #1E293B 25%, transparent 25%), 
                             linear-gradient(45deg, transparent 75%, #1E293B 75%), 
                             linear-gradient(-45deg, transparent 75%, #1E293B 75%)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
          }}
        />
        
        {/* Content Card */}
        <div className="relative z-10 max-w-lg mx-auto bg-card border-2 border-accent-gold/20 rounded-lg shadow-xl p-6 sm:p-8">
          {/* Promise Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gold/15 border-2 border-accent-gold/40 rounded-sm mb-6">
            <Icon name="clock" size={16} className="text-accent-gold" />
            <span className="text-accent-gold font-bold text-sm">
              3 İş Günü - EVRAK HAZIRLAMA
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
            Müteahhitlik Belgesi:{" "}
            <span className="text-accent-dark">Evrak Dosyanız 3 İş Gününde Hazır</span>
          </h1>

          {/* Subtext */}
          <p className="text-base text-foreground/90 leading-relaxed mb-6 font-medium">
            Eksik evrak, yanlış yetki grubu, hatalı dosya. Bunlar süreci uzatır. 
            Biz başvuruya hazır evrak dosyasını 3 iş gününde teslim ederiz.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6 text-xs sm:text-sm text-foreground/85">
            <div className="flex items-center gap-2">
              <Icon name="checklist" size={14} className="text-accent-gold flex-shrink-0" />
              <span className="font-semibold">Ücretsiz Ön Değerlendirme</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="shield" size={14} className="text-accent-gold flex-shrink-0" />
              <span className="font-semibold">KVKK Uyumlu</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="shield" size={14} className="text-accent-gold flex-shrink-0" />
              <span className="font-semibold">Gizlilik Taahhüdü</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="clock" size={14} className="text-accent-gold flex-shrink-0" />
              <span className="font-semibold">3 İş Gününde Hazır</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3">
            {/* WhatsApp CTA */}
            <a
              href={CONTACT.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp ile hızlı kontrol için iletişime geç"
              className="inline-flex items-center justify-center gap-3 bg-accent-dark text-white px-6 py-4 rounded-sm hover:bg-accent-dark/90 transition-colors font-medium text-base sm:text-lg shadow-lg"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'click_whatsapp', {
                    event_category: 'engagement',
                    event_label: 'hero_whatsapp_mobile'
                  });
                  // Google Ads conversion tracking
                  if (GOOGLE_ADS.conversionId && GOOGLE_ADS.conversionLabel) {
                    window.gtag('event', 'conversion', {
                      send_to: `${GOOGLE_ADS.conversionId}/${GOOGLE_ADS.conversionLabel}`,
                      event_category: 'engagement',
                      event_label: 'hero_whatsapp_mobile'
                    });
                  }
                }
              }}
            >
              <Icon name="whatsapp" size={20} aria-hidden="true" />
              WhatsApp'tan Hızlı Kontrol
            </a>

            {/* Phone CTA */}
            <a
              href={`tel:${CONTACT.phone.primary}`}
              aria-label={`${CONTACT.phone.formatted} numarasını ara`}
              className="inline-flex items-center justify-center gap-3 bg-card text-foreground border-2 border-border px-6 py-4 rounded-sm hover:bg-muted transition-colors font-medium text-base sm:text-lg"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'click_call', {
                    event_category: 'engagement',
                    event_label: 'hero_phone_mobile'
                  });
                  // Google Ads conversion tracking
                  if (GOOGLE_ADS.conversionId && GOOGLE_ADS.conversionLabel) {
                    window.gtag('event', 'conversion', {
                      send_to: `${GOOGLE_ADS.conversionId}/${GOOGLE_ADS.conversionLabel}`,
                      event_category: 'engagement',
                      event_label: 'hero_phone_mobile'
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
                aria-label="WhatsApp ile hızlı kontrol için iletişime geç"
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
                <Icon name="whatsapp" size={20} aria-hidden="true" />
                WhatsApp'tan Hızlı Kontrol
              </a>

              {/* Phone CTA */}
              <a
                href={`tel:${CONTACT.phone.primary}`}
                aria-label={`${CONTACT.phone.formatted} numarasını ara`}
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
                <Icon name="phone" size={20} aria-hidden="true" />
                Hemen Ara
              </a>
            </div>
          </div>

          {/* Right Column - Hero Image (Seamless, No Borders) */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/muteahitlik-belgesi-hero.jpg"
                alt="Müteahhitlik belgesi evrak dosyası hazırlama - profesyonel danışmanlık"
                fill
                priority={true}
                fetchPriority="high"
                sizes="50vw"
                className="object-cover"
              />
              {/* Subtle overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-dark/5 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


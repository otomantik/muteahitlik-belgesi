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
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Copy */}
          <div className="space-y-6">
            {/* Promise Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gold/10 border border-accent-gold/20 rounded-sm">
              <Icon name="clock" size={16} className="text-accent-gold" />
              <span className="text-accent-gold font-semibold text-sm">
                3 İş Günü - EVRAK HAZIRLAMA
              </span>
            </div>

            {/* H1 (Module 12 - Verbatim) */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Müteahhitlik Belgesi:{" "}
              <span className="text-accent-dark">Evrak Dosyanız 3 İş Gününde Hazır</span>
            </h1>

            {/* Subtext (Module 12 - Verbatim) */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              Eksik evrak, yanlış yetki grubu, hatalı dosya. Bunlar süreci uzatır. 
              Biz başvuruya hazır evrak dosyasını 3 iş gününde teslim ederiz.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="checklist" size={16} className="text-accent-gold" />
                <span>Ücretsiz Ön Değerlendirme</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="shield" size={16} className="text-accent-gold" />
                <span>KVKK Uyumlu</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="shield" size={16} className="text-accent-gold" />
                <span>Gizlilik Taahhüdü</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="clock" size={16} className="text-accent-gold" />
                <span>3 İş Gününde Hazır</span>
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

          {/* Right Column - Hero Image (Module 11) */}
          <div className="relative">
            <div className="relative aspect-square md:aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/muteahitlik-belgesi-hero.jpg"
                alt="Müteahhitlik belgesi evrak dosyası hazırlama - profesyonel danışmanlık"
                fill
                priority={true}
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                style={{ 
                  backgroundColor: '#F7F7F5',
                  backgroundImage: 'linear-gradient(45deg, #E7E5E4 25%, transparent 25%), linear-gradient(-45deg, #E7E5E4 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #E7E5E4 75%), linear-gradient(-45deg, transparent 75%, #E7E5E4 75%)',
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                }}
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


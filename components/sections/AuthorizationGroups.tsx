"use client";

import React from "react";
import { CONTACT } from "@/lib/constants";
import Icon from "@/components/shared/Icon";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const AuthorizationGroups = () => {
  return (
    <section id="yetki" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Müteahhitlik Belgesi <span className="text-accent-dark">Yetki Grupları</span>
          </h2>
          
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <p className="text-lg text-foreground/85 mb-6 font-medium">
              Müteahhitlik belgesi için A'dan H'ye tüm yetki grupları için danışmanlık sağlıyoruz. Müteahhitlik belgesi başvuru süreci genel tablolar üzerinden değil, her bir özel durum üzerinden değerlendirilir.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((group) => (
                <div
                  key={group}
                  className="w-12 h-12 border-2 border-accent-gold/30 rounded-sm flex items-center justify-center text-accent-dark font-bold text-lg"
                >
                  {group}
                </div>
              ))}
            </div>

            <div className="bg-accent-dark/5 border border-accent-dark/20 rounded-sm p-6">
              <p className="text-foreground font-medium mb-4">
                Müteahhitlik belgesi yetki grubu belirlenmesi, mevcut deneyim, finansal durum ve gelecek hedeflerinize göre yapılır.
              </p>
              <a
                href={CONTACT.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-accent-dark text-white px-6 py-3 rounded-sm hover:bg-accent-dark/90 transition-colors font-medium"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'click_whatsapp', {
                      event_category: 'engagement',
                      event_label: 'auth_groups_whatsapp'
                    });
                  }
                }}
              >
                <Icon name="whatsapp" size={20} />
                WhatsApp'a "BELGE" Yazın
              </a>
            </div>
          </div>

          <p className="text-sm text-foreground/80">
            Tablo göstermiyoruz çünkü her durum özeldir. Size özel değerlendirme için iletişime geçin.
          </p>
        </div>
      </div>
    </section>
  );
};


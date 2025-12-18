import React from "react";
import Link from "next/link";
import { SITE, CONTACT, ADDRESS, HOURS, LEGAL } from "@/lib/constants";
import Icon from "@/components/shared/Icon";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              İletişim
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:${CONTACT.phone.primary}`}
                aria-label={`${CONTACT.phone.formatted} numarasını ara`}
                className="flex items-center gap-3 text-foreground hover:text-accent-dark transition-colors"
              >
                <Icon name="phone" size={18} aria-hidden="true" />
                <span>{CONTACT.phone.formatted}</span>
              </a>
              <a
                href={CONTACT.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp ile iletişime geç"
                className="flex items-center gap-3 text-foreground hover:text-accent-dark transition-colors"
              >
                <Icon name="whatsapp" size={18} aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
              <div className="flex items-start gap-3">
                <Icon name="map-pin" size={18} className="mt-1 flex-shrink-0" />
                <span className="text-foreground">{ADDRESS.full}</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Çalışma Saatleri
            </h3>
            <div className="space-y-2">
              <p className="text-foreground font-medium">{HOURS.formatted}</p>
              <p className="text-sm text-muted-foreground">{HOURS.description}</p>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Legal
            </h3>
            <div className="space-y-2">
              <Link
                href="/privacy-policy"
                className="block text-foreground hover:text-accent-dark transition-colors"
              >
                Gizlilik Politikası
              </Link>
              <Link
                href="/terms-of-use"
                className="block text-foreground hover:text-accent-dark transition-colors"
              >
                Kullanım Şartları
              </Link>
              <Link
                href="/disclaimer"
                className="block text-foreground hover:text-accent-dark transition-colors"
              >
                Yasal Uyarı
              </Link>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-border pt-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-muted-foreground text-center">
              {LEGAL.disclaimer}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE.name}. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};


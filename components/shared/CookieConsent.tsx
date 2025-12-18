"use client";

import React, { useState, useEffect } from "react";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    } else if (consent === "accepted") {
      loadAnalytics();
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
    loadAnalytics();
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setIsVisible(false);
  };

  const loadAnalytics = () => {
    // Load Google Analytics
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", "G-XXXXXXXXXX");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 left-4 md:left-auto md:max-w-md bg-card border border-border rounded-lg shadow-lg z-50 p-4">
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">Çerez Kullanımı</h3>
        <p className="text-sm text-muted-foreground">
          Bu web sitesi, kullanıcı deneyimini geliştirmek ve trafik analizi yapmak için çerezleri kullanır. 
          Çerezleri kabul ederek bu uygulamaya onay vermiş olursunuz.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-accent-dark text-white rounded-sm hover:bg-accent-dark/90 transition-colors text-sm font-medium"
          >
            Çerezleri Kabul Et
          </button>
          <button
            onClick={rejectCookies}
            className="px-4 py-2 bg-card text-foreground border border-border rounded-sm hover:bg-muted transition-colors text-sm font-medium"
          >
            Sadece Gerekli Olanları Kabul Et
          </button>
        </div>
      </div>
    </div>
  );
};


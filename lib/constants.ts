// lib/constants.ts - SINGLE SOURCE OF TRUTH
// All business data must be defined here only

export const SITE = {
  name: "Müteahhitlik Belgesi Danışmanlığı",
  url: "https://muteahhitlikbelgesi.com",
} as const;

export const CONTACT = {
  phone: {
    primary: "+905444930119",
    formatted: "+90 (544) 493 01 19",
  },
  whatsapp: {
    phone: "+905444930119",
    message: "Merhaba, müteahhitlik belgesi dosya hazırlama hakkında bilgi almak istiyorum.",
    link: "https://wa.me/905444930119?text=Merhaba%2C%20m%C3%BCteahhitlik%20belgesi%20dosya%20haz%C4%B1rlama%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
    // Dinamik mesaj için template (yetki grubu eklenebilir)
    messageTemplate: (yetkiGrubu?: string) => {
      const baseMessage = "Merhaba, müteahhitlik belgesi dosya hazırlığı hakkında bilgi almak istiyorum.";
      return yetkiGrubu 
        ? `${baseMessage} Yetki grubu: ${yetkiGrubu}`
        : baseMessage;
    },
  },
} as const;

export const ADDRESS = {
  street: "Mor Sümbül Sokağı No:5",
  district: "Barbaros",
  city: "Ataşehir/İstanbul",
  postalCode: "34758",
  full: "Barbaros, Mor Sümbül Sokağı No:5, 34758 Ataşehir/İstanbul",
  mapsUrl: "https://maps.google.com/?q=Barbaros+Mor+Sümbül+Sokağı+No5+Ataşehir+İstanbul",
} as const;

export const HOURS = {
  weekdays: "7/24 Hizmet",
  saturday: "7/24 Hizmet",
  sunday: "7/24 Hizmet",
  formatted: "7/24 Hizmet - Tüm gün kesintisiz destek",
  description: "Tüm gün kesintisiz destek",
} as const;

export const SEO = {
  title: "Müteahhitlik Belgesi: Evrak Dosyanız 3 İş Gününde Hazır | Profesyonel Danışmanlık",
  description: "Eksik evrak, yanlış yetki grubu süreci uzatır. Müteahhitlik belgesi başvuru dosyanız profesyonel danışmanlık ile 3 iş gününde hazır. Yetki grupları A'dan H'ye.",
  
  // Genişletilmiş anahtar kelime listesi
  keywords: [
    // Ana kelime
    "müteahhitlik belgesi",
    
    // Long-tail keywords
    "müteahhitlik belgesi danışmanlığı",
    "müteahhitlik belgesi evrakları",
    "müteahhitlik belgesi başvurusu",
    "müteahhitlik belgesi nasıl alınır",
    "müteahhitlik belgesi gerekli evraklar",
    "müteahhitlik belgesi yetki grubu",
    "müteahhitlik belgesi başvuru süreci",
    "müteahhitlik belgesi danışmanlık hizmeti",
    "müteahhitlik belgesi evrak hazırlama",
    
    // Semantic keywords
    "müteahhit yetki belgesi",
    "müteahhitlik ruhsatı",
    "müteahhitlik sertifikası",
    "inşaat müteahhitlik belgesi",
    "yetki grubu belgesi",
    
    // İşlem bazlı
    "müteahhitlik belgesi alma",
    "müteahhitlik belgesi çıkarma",
    "müteahhitlik belgesi başvuru",
  ],
  
  // İçerik için semantic keywords (sayfa içinde kullanılacak)
  semanticKeywords: [
    "müteahhitlik belgesi A grubu",
    "müteahhitlik belgesi B grubu",
    "müteahhitlik belgesi C grubu",
    "müteahhitlik belgesi D grubu",
    "müteahhitlik belgesi E grubu",
    "müteahhitlik belgesi F grubu",
    "müteahhitlik belgesi G grubu",
    "müteahhitlik belgesi H grubu",
    "müteahhitlik belgesi başvuru dosyası",
    "müteahhitlik belgesi ret",
    "müteahhitlik belgesi onay",
    "müteahhitlik belgesi süresi",
    "müteahhitlik belgesi fiyat",
    "müteahhitlik belgesi ücreti",
  ],
} as const;

export const LEGAL = {
  disclaimer: "Bu hizmet müteahhitlik belgesi başvurusu için evrak hazırlama danışmanlığıdır. Resmi belge onay süreci ilgili kamu kurumunun inisiyatifindedir. Süreç danışmanlık hizmetinin tamamlanma süresini ifade eder.",
  promise: "3 iş günü - EVRAK HAZIRLAMA",
} as const;

// Google Ads Conversion Tracking
// AW-CONVERSION_ID ve CONVERSION_LABEL değerlerini Google Ads hesabınızdan alıp buraya ekleyin
export const GOOGLE_ADS = {
  conversionId: "AW-CONVERSION_ID",
  conversionLabel: "CONVERSION_LABEL",
  // Örnek: conversionId: "AW-123456789",
  // Örnek: conversionLabel: "AbC-D_efG-h12AbC-D_efG",
} as const;

export const NAVIGATION = [
  { label: "Neden Biz", href: "#neden" },
  { label: "Hatalar", href: "#hatalar" },
  { label: "Süreç", href: "#surec" },
  { label: "Yetki Grupları", href: "#yetki" },
  { label: "SSS", href: "#sss" },
] as const;


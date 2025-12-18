"use client";

import React, { useState } from "react";
import Icon from "@/components/shared/Icon";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Müteahhitlik belgesi için 3 iş günü süresi neyi kapsıyor?",
      answer: "Müteahhitlik belgesi başvurusu için bu süre, tüm gerekli belgeleriniz eksiksiz olarak bize ulaştığı andan itibaren, başvuruya hazır evrak dosyasının teslim süresidir. Resmi onay süreci Çevre ve Şehircilik Bakanlığı İl Müdürlüğü'nün inisiyatifindedir ve bu süreyi kapsamaz.",
    },
    {
      question: "Müteahhitlik belgesi başvurusunda ret durumunda ne oluyor?",
      answer: "Müteahhitlik belgesi başvurusu Çevre ve Şehircilik Bakanlığı İl Müdürlüğü tarafından ret durumunda dosyanız ücretsiz revize edilir ve gerekçelere göre yeniden başvuru yapılır. Ancak ret olasılığını minimuma indirmek için kapsamlı kontrol yaparız.",
    },
    {
      question: "Müteahhitlik belgesi için hangi belgelere ihtiyacım var?",
      answer: "Müteahhitlik belgesi başvurusu için Çevre ve Şehircilik Bakanlığı İl Müdürlüğü'ne sunulacak belgeler yetki grubunuza ve mevcut durumunuza göre değişir. Genellikle kimlik belgeleri, diplomalar, deneyim belgeleri, finansal belgeler ve sertifikalar gereklidir. Detaylı liste için iletişime geçin.",
    },
    {
      question: "Müteahhitlik belgesi yetki grubumu nasıl belirleyeceğim?",
      answer: "Müteahhitlik belgesi için yetki grubu Çevre ve Şehircilik Bakanlığı mevzuatına göre deneyim, eğitim ve finansal durumunuza göre belirlenir. Size uygun grubu belirlemek için ön değerlendirme yaparız.",
    },
    {
      question: "Müteahhitlik belgesi başvurusu online yönetilebilir mi?",
      answer: "Evet, müteahhitlik belgesi başvuru süreci tamamen online yönetilebilir. Belgelerin dijital kopyaları yeterlidir. Çevre ve Şehircilik Bakanlığı İl Müdürlüğü'ne başvuru için yüz yüze görüşme gerektirmez.",
    },
    {
      question: "Müteahhitlik belgesi danışmanlığı ödeme şartları nasıl?",
      answer: "Müteahhitlik belgesi evrak hazırlama çalışmasına başlamadan önce belirli bir kapora alınır, kalan kısım evrak dosyası teslim edildiğinde ödenir.",
    },
    {
      question: "Müteahhitlik belgesi başvurusunda resmi kurumlarla iletişimi siz mi yönetiyorsunuz?",
      answer: "Müteahhitlik belgesi başvuru dosyasını hazırlıyor ve Çevre ve Şehircilik Bakanlığı İl Müdürlüğü'ne başvuru sürecini yönetiyoruz. Resmi yazışmalar ve takipler danışmanlık hizmetimiz kapsamındadır.",
    },
    {
      question: "Müteahhitlik belgesi mevzuat değişikliklerini nasıl takip ediyorsunuz?",
      answer: "Müteahhitlik belgesi mevzuat değişiklikleri Çevre ve Şehircilik Bakanlığı tarafından yayınlanan güncel mevzuat sürekli takip edilir ve başvuru dosyaları güncel mevzuata uygun hazırlanır.",
    },
  ];

  return (
    <section id="sss" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Müteahhitlik Belgesi Hakkında Sık Sorulan <span className="text-accent-dark">Sorular</span>
          </h2>
          <p className="text-lg text-foreground/85 max-w-2xl mx-auto font-medium">
            Müteahhitlik belgesi başvuru süreci hakkında en çok sorulan sorular ve cevapları. Tüm sorularınızın yanıtlarını burada bulabilirsiniz.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border last:border-b-0">
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <Icon
                    name="chevron-right"
                    size={20}
                    className={`text-accent-dark transition-transform ${
                      openIndex === index ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-foreground/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


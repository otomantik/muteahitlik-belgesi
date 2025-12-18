import React from "react";
import Icon from "@/components/shared/Icon";

export const CoreFacts = () => {
  const facts = [
    {
      icon: "document" as const,
      title: "Eksik Evrak Müteahhitlik Belgesi Başvurusunu Bloke Eder",
      description: "Müteahhitlik belgesi başvurusunda eksik bir belge tüm süreci durdurur. Kurumlar eksik dosyaları işleme almaz, geri gönderir.",
    },
    {
      icon: "shield" as const,
      title: "Yanlış Yetki Grubu Gelecek Problemdir",
      description: "Müteahhitlik belgesi için yanlış yetki grubu seçimi, gelecekteki ihalelerde ve projelerde ciddi kısıtlamalara yol açar.",
    },
    {
      icon: "clock" as const,
      title: "Geciken Evrak Müteahhitlik Belgesi Sürecini Geciktirir",
      description: "Müteahhitlik belgesi başvuru sürecinde her geciken gün, proje başlangıcını, ihalelere katılımı ve gelir akışını etkiler.",
    },
  ];

  return (
    <section id="neden" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Müteahhitlik Belgesi Başvurusunda Neden <span className="text-accent-dark">Profesyonel Danışmanlık</span> Gerekiyor?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Müteahhitlik belgesi sürecinde bu 3 temel gerçek, başvurunun neden uzadığını ve nasıl hızlandırılabileceğini açıklar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent-gold/10 rounded-sm">
                  <Icon name={fact.icon} size={24} className="text-accent-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{fact.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {fact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


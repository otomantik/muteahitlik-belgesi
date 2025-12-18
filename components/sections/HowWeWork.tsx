import React from "react";
import Icon from "@/components/shared/Icon";

export const HowWeWork = () => {
  const steps = [
    {
      step: "01",
      title: "İlk Değerlendirme",
      description: "Mevcut durumunuz, hedef yetki grubunuz ve gereksinimleriniz analiz edilir.",
      icon: "document" as const,
    },
    {
      step: "02",
      title: "Evrak Planı",
      description: "Eksiksiz bir belge listesi ve toplama planı oluşturulur.",
      icon: "checklist" as const,
    },
    {
      step: "03",
      title: "Müteahhitlik Belgesi Dosya Hazırlığı",
      description: "Müteahhitlik belgesi başvurusu için tüm belgeler kontrol edilir, düzenlenir ve başvuru formatına getirilir.",
      icon: "shield" as const,
    },
    {
      step: "04",
      title: "Başvuru ve Takip",
      description: "Müteahhitlik belgesi başvuru dosyası ilgili kuruma sunulur ve resmi süreç takip edilir.",
      icon: "clock" as const,
    },
  ];

  return (
    <section id="surec" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Müteahhitlik Belgesi Başvurusunda Nasıl <span className="text-accent-dark">Çalışıyoruz?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Müteahhitlik belgesi evrak hazırlama sürecinde 4 adımlık sistematik yaklaşımımız, başvuru sürecinin sorunsuz ilerlemesini sağlar.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-dark/10 border border-accent-dark/20 rounded-sm">
            <Icon name="checklist" size={16} className="text-accent-dark" />
            <span className="text-accent-dark font-medium">
              Check-listlerle ilerliyoruz, vaatlerle değil.
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.step}
              className="bg-card border border-border rounded-lg p-6 relative"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-accent-gold text-white rounded-sm flex items-center justify-center font-bold">
                {step.step}
              </div>
              <div className="mb-4 pt-4">
                <div className="p-3 bg-accent-dark/10 rounded-sm inline-flex">
                  <Icon name={step.icon} size={24} className="text-accent-dark" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


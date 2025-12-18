import React from "react";
import Icon from "@/components/shared/Icon";

export const CommonMistakes = () => {
  const mistakes = [
    "Belgeleri parça parça toplamak ve süreci uzatmak",
    "Sonradan yetki grubu değiştirmek zorunda kalmak",
    "Format ve imza hataları nedeniyle ret almak",
    "Başvuru sonrası takip eksikliği",
    "Güncel mevzuat değişikliklerini takip edememek",
    "Kurumlar arası farklılıkları göz ardı etmek",
  ];

  return (
    <section id="hatalar" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Müteahhitlik Belgesi Başvurusunda En Sık Yapılan <span className="text-accent-dark">Hatalar</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Müteahhitlik belgesi başvuru sürecinde bu hatalar süreci ortalama 2-3 ay uzatır. Profesyonel danışmanlık ile bu hatalardan kaçınılır.
            </p>
            
            <ul className="space-y-4">
              {mistakes.map((mistake, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon name="chevron-right" size={20} className="text-accent-gold mt-1 flex-shrink-0" />
                  <span className="text-foreground">{mistake}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-50 rounded-sm">
                <Icon name="stamp" size={24} className="text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Ret Riski</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Müteahhitlik belgesi başvurusunda bu hataların her biri ret edilme riskini artırır. Her ret, en az 1 ay ek süre ve yeniden başvuru masrafı demektir.
            </p>
            <div className="bg-accent-dark/5 border-l-4 border-accent-dark p-4">
              <p className="text-foreground font-medium">
                Müteahhitlik belgesi danışmanlığı, bu hataları önceden tespit eder ve başvuru dosyanızı düzeltir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


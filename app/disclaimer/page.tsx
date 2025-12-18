import { Metadata } from "next";
import { SITE, LEGAL, CONTACT, ADDRESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Yasal Uyarı ve Sorumluluk Reddi | ${SITE.name}`,
  description: "Yasal uyarı, sorumluluk reddi beyanı ve önemli bilgilendirmeler.",
  robots: "noindex, follow",
};

export default function Disclaimer() {
  const lastUpdate = "2024";

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Yasal Uyarı ve Sorumluluk Reddi
        </h1>
        <p className="text-muted-foreground mb-8">
          Son güncelleme: {lastUpdate}
        </p>
        
        <div className="prose prose-slate max-w-none space-y-8">
          <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-6 mb-8">
            <p className="text-foreground font-semibold text-lg mb-2">
              ⚠️ ÖNEMLİ UYARI
            </p>
            <p className="text-foreground font-medium">
              {LEGAL.disclaimer}
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              1. Hizmet Kapsamı ve Sınırları
            </h2>
            <p className="text-muted-foreground mb-4">
              {SITE.name} olarak sunduğumuz hizmet, müteahhitlik belgesi başvurusu için evrak hazırlama danışmanlığıdır. Bu hizmet kapsamında:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Başvuru için gerekli evrakların belirlenmesi ve kontrolü yapılır</li>
              <li>Evrak dosyasının eksiksiz ve doğru şekilde hazırlanması sağlanır</li>
              <li>Başvuru süreci hakkında bilgilendirme ve rehberlik sunulur</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">ÖNEMLİ:</strong> Bu hizmet, resmi belge onay sürecini garanti etmez. Evrak dosyasının hazırlanmasından sonraki tüm süreçler (başvuru, değerlendirme, onay, ret) tamamen ilgili kamu kurumunun yetkisindedir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              2. Süre Bilgisi ve Taahhütler
            </h2>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">Evrak Hazırlama Süresi:</strong> Belirtilen "{LEGAL.promise}" süresi, tüm gerekli belgeleriniz eksiksiz olarak bize ulaştığı andan itibaren, başvuruya hazır evrak dosyasının hazırlanma süresini ifade eder.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">Resmi Onay Süreci:</strong> Evrak dosyasının hazırlanmasından sonraki resmi başvuru, değerlendirme ve onay süreçleri tamamen Çevre ve Şehircilik Bakanlığı İl Müdürlüğü'nün yetkisindedir. Bu süreçler:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Başvurunun kurum tarafından kabul edilmesi</li>
              <li>Değerlendirme süresi</li>
              <li>Eksik belge talepleri</li>
              <li>Onay veya ret kararları</li>
              <li>Belge teslim süreleri</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Bu süreçler hakkında herhangi bir taahhüt veya garanti veremeyiz. Süreç, kurumun iş yükü, başvuru sayısı ve diğer faktörlere bağlı olarak değişiklik gösterebilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              3. Sorumluluk Reddi
            </h2>
            <p className="text-muted-foreground mb-4">
              Aşağıdaki konularda herhangi bir sorumluluk kabul etmemekteyiz:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong className="text-foreground">Resmi Onay Süreci:</strong> Evrak dosyasının hazırlanmasından sonraki resmi başvuru, değerlendirme ve onay süreçleri tamamen ilgili kamu kurumunun yetkisindedir.</li>
              <li><strong className="text-foreground">Ret Kararları:</strong> Kurumun başvuruyu ret etmesi durumunda, ret nedenleri ve sonuçları konusunda sorumluluk kabul etmemekteyiz.</li>
              <li><strong className="text-foreground">Süre Taahhütleri:</strong> Resmi kurumların değerlendirme ve onay süreleri konusunda taahhüt veremeyiz.</li>
              <li><strong className="text-foreground">Mevzuat Değişiklikleri:</strong> Yasal mevzuattaki değişikliklerden kaynaklanan durumlar için sorumluluk kabul etmemekteyiz.</li>
              <li><strong className="text-foreground">Müşteri Bilgileri:</strong> Müşteri tarafından sağlanan yanlış, eksik veya güncel olmayan bilgilerden kaynaklanan durumlar için sorumluluk kabul etmemekteyiz.</li>
              <li><strong className="text-foreground">Üçüncü Taraf Hizmetleri:</strong> Resmi kurumların sistemleri, web siteleri veya hizmetlerindeki sorunlardan kaynaklanan durumlar için sorumluluk kabul etmemekteyiz.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              4. Bilgilendirme ve Genel Bilgiler
            </h2>
            <p className="text-muted-foreground mb-4">
              Web sitesinde yer alan bilgiler genel bilgilendirme amaçlıdır. Her durum özeldir ve değerlendirme gerektirir. Web sitesindeki bilgiler:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Genel bilgilendirme amaçlıdır</li>
              <li>Yasal mevzuattaki değişiklikler nedeniyle güncel olmayabilir</li>
              <li>Her duruma özel değerlendirme gerektirir</li>
              <li>Profesyonel danışmanlık hizmeti yerine geçmez</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Detaylı bilgi ve kişisel durumunuza özel değerlendirme için mutlaka bizimle iletişime geçiniz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              5. Yetki Grupları ve Başvuru Kriterleri
            </h2>
            <p className="text-muted-foreground mb-4">
              Yetki grupları (A, B, C, D, E, F, G, H) ve başvuru kriterleri, Çevre ve Şehircilik Bakanlığı mevzuatına göre belirlenmektedir. Bu kriterler:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Yasal mevzuattaki değişikliklere bağlı olarak güncellenebilir</li>
              <li>Her başvuru için özel değerlendirme gerektirir</li>
              <li>Kurum tarafından son değerlendirmeye tabidir</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Web sitesinde yer alan yetki grubu bilgileri genel bilgilendirme amaçlıdır. Kesin değerlendirme için resmi başvuru yapılması ve kurumun değerlendirmesi gerekmektedir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              6. İletişim ve Bilgi Alma
            </h2>
            <p className="text-muted-foreground mb-4">
              Bu yasal uyarı hakkında sorularınız veya detaylı bilgi almak için:
            </p>
            <div className="bg-muted/50 p-4 rounded-lg mb-4">
              <p className="text-foreground font-medium mb-2">{SITE.name}</p>
              <p className="text-muted-foreground">Adres: {ADDRESS.full}</p>
              <p className="text-muted-foreground">Telefon: {CONTACT.phone.formatted}</p>
              <p className="text-muted-foreground">WhatsApp: {CONTACT.whatsapp.phone}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              7. Kabul ve Onay
            </h2>
            <p className="text-muted-foreground mb-4">
              Hizmetlerimizden yararlanarak, bu yasal uyarı ve sorumluluk reddi beyanını okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan etmiş sayılırsınız.
            </p>
          </section>

          <div className="border-t pt-8 mt-8">
            <p className="text-sm text-muted-foreground">
              Bu Yasal Uyarı ve Sorumluluk Reddi {lastUpdate} yılında güncellenmiştir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


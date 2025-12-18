import { Metadata } from "next";
import { SITE, CONTACT, ADDRESS, LEGAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Kullanım Şartları | ${SITE.name}`,
  description: "Web sitesi kullanım şartları, koşulları ve hizmet sözleşmesi.",
  robots: "noindex, follow",
};

export default function TermsOfUse() {
  const lastUpdate = "2024";

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Kullanım Şartları
        </h1>
        <p className="text-muted-foreground mb-8">
          Son güncelleme: {lastUpdate}
        </p>
        
        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              1. Genel Hükümler
            </h2>
            <p className="text-muted-foreground mb-4">
              Bu Kullanım Şartları, {SITE.name} web sitesini ("Site") kullanırken uymanız gereken kuralları ve koşulları belirler. Siteyi kullanarak, bu şartları kabul etmiş sayılırsınız. Şartları kabul etmiyorsanız, lütfen Siteyi kullanmayınız.
            </p>
            <p className="text-muted-foreground mb-4">
              Site sahibi, bu şartları herhangi bir zamanda değiştirme hakkını saklı tutar. Değişiklikler Site'de yayınlandığında yürürlüğe girer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              2. Hizmet Tanımı
            </h2>
            <p className="text-muted-foreground mb-4">
              {SITE.name} olarak sunduğumuz hizmet, müteahhitlik belgesi başvurusu için evrak hazırlama danışmanlığıdır. Bu hizmet kapsamında:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Başvuru için gerekli evrakların belirlenmesi ve kontrolü</li>
              <li>Evrak dosyasının eksiksiz ve doğru şekilde hazırlanması</li>
              <li>Başvuru süreci hakkında bilgilendirme ve rehberlik</li>
              <li>Yetki grubu belirleme konusunda danışmanlık</li>
            </ul>
            <div className="bg-accent-dark/5 border-l-4 border-accent-dark p-4 mb-4">
              <p className="text-foreground font-medium mb-2">Önemli Uyarı:</p>
              <p className="text-muted-foreground">
                {LEGAL.disclaimer}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              3. Hizmet Süresi ve Taahhütler
            </h2>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">Evrak Hazırlama Süresi:</strong> Tüm gerekli belgeleriniz eksiksiz olarak bize ulaştığı andan itibaren, başvuruya hazır evrak dosyası {LEGAL.promise} içinde hazırlanır.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">Resmi Onay Süreci:</strong> Evrak dosyasının hazırlanmasından sonraki resmi başvuru, değerlendirme ve onay süreçleri tamamen ilgili kamu kurumunun (Çevre ve Şehircilik Bakanlığı İl Müdürlüğü) yetkisindedir. Bu süreçler hakkında herhangi bir taahhüt veremeyiz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              4. Kullanıcı Yükümlülükleri
            </h2>
            <p className="text-muted-foreground mb-4">
              Siteyi kullanırken aşağıdaki kurallara uymanız gerekmektedir:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Doğru, eksiksiz ve güncel bilgiler sağlamak</li>
              <li>Sahte veya yanıltıcı bilgi vermemek</li>
              <li>Siteyi yasadışı amaçlarla kullanmamak</li>
              <li>Site içeriğini izinsiz kopyalamamak veya dağıtmamak</li>
              <li>Siteyi zararlı yazılımlarla etkilemeye çalışmamak</li>
              <li>Diğer kullanıcıların haklarına saygı göstermek</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              5. Fikri Mülkiyet Hakları
            </h2>
            <p className="text-muted-foreground mb-4">
              Site içeriği, tasarımı, logoları, metinleri ve diğer materyaller {SITE.name}'e aittir ve telif hakları ile korunmaktadır. İzinsiz kullanım, kopyalama, dağıtım veya değiştirme yasaktır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              6. Sorumluluk Sınırlaması
            </h2>
            <p className="text-muted-foreground mb-4">
              Site içeriğinde yer alan bilgilerin doğruluğunu sağlamak için çaba gösteririz, ancak:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Site içeriğindeki hatalar veya eksikliklerden sorumlu tutulamayız</li>
              <li>Site üzerinden sağlanan bilgilerin kullanımından doğabilecek zararlardan sorumlu değiliz</li>
              <li>Resmi kurumların başvuru değerlendirme süreçleri, ret kararları veya onay süreleri konusunda garanti veremeyiz</li>
              <li>Site erişiminde yaşanabilecek teknik sorunlardan sorumlu değiliz</li>
              <li>Üçüncü taraf web sitelerine verilen bağlantılardan sorumlu değiliz</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              7. Hizmet Ücretleri ve Ödeme
            </h2>
            <p className="text-muted-foreground mb-4">
              Hizmet ücretleri, hizmet kapsamı ve yetki grubuna göre değişiklik gösterebilir. Detaylı fiyat bilgisi için iletişime geçmeniz gerekmektedir. Ödeme koşulları ve yöntemleri hizmet sözleşmesinde belirtilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              8. İptal ve İade Politikası
            </h2>
            <p className="text-muted-foreground mb-4">
              Hizmet başlamadan önce yapılan iptallerde, özel durumlar dışında iade yapılabilir. Hizmet başladıktan sonraki iptallerde, tamamlanan iş kapsamına göre değerlendirme yapılır. Detaylı bilgi için iletişime geçiniz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              9. Gizlilik ve Veri Koruma
            </h2>
            <p className="text-muted-foreground mb-4">
              Kişisel verilerinizin işlenmesi ve korunması hakkında detaylı bilgi için <a href="/privacy-policy" className="text-accent-gold hover:underline">Gizlilik Politikamız</a>'ı inceleyebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              10. Uygulanacak Hukuk ve Uyuşmazlık Çözümü
            </h2>
            <p className="text-muted-foreground mb-4">
              Bu Kullanım Şartları Türk Hukuku'na tabidir. Bu şartlardan kaynaklanan uyuşmazlıklarda, öncelikle dostane çözüm yolları aranacak, çözülemezse İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              11. İletişim
            </h2>
            <p className="text-muted-foreground mb-4">
              Kullanım şartları hakkında sorularınız için:
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
              12. Değişiklikler
            </h2>
            <p className="text-muted-foreground mb-4">
              Bu Kullanım Şartları, yasal düzenlemelerdeki değişiklikler veya hizmetlerimizdeki güncellemeler nedeniyle değiştirilebilir. Değişiklikler Site'de yayınlandığında yürürlüğe girer. Önemli değişikliklerde sizleri bilgilendirme hakkımız saklıdır.
            </p>
          </section>

          <div className="border-t pt-8 mt-8">
            <p className="text-sm text-muted-foreground">
              Bu Kullanım Şartları {lastUpdate} yılında güncellenmiştir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


import { Metadata } from "next";
import { SITE, CONTACT, ADDRESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Gizlilik Politikası | ${SITE.name}`,
  description: "KVKK uyumlu gizlilik politikamız ve kişisel verilerin korunması hakkında detaylı bilgiler.",
  robots: "noindex, follow",
};

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();
  const lastUpdate = "2024";

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Gizlilik Politikası
        </h1>
        <p className="text-muted-foreground mb-8">
          Son güncelleme: {lastUpdate}
        </p>
        
        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              1. Genel Bilgiler
            </h2>
            <p className="text-muted-foreground mb-4">
              {SITE.name} olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve ilgili mevzuat hükümlerine uygun olarak kişisel verilerinizin korunmasına büyük önem vermekteyiz. Bu Gizlilik Politikası, kişisel verilerinizin nasıl toplandığını, işlendiğini, saklandığını ve korunduğunu açıklamaktadır.
            </p>
            <p className="text-muted-foreground mb-4">
              Bu politika, web sitemizi ziyaret ettiğinizde, hizmetlerimizden yararlandığınızda veya bizimle iletişime geçtiğinizde toplanan kişisel verileriniz için geçerlidir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              2. Veri Sorumlusu
            </h2>
            <p className="text-muted-foreground mb-4">
              Kişisel verilerinizin işlenmesinden sorumlu olan veri sorumlusu:
            </p>
            <div className="bg-muted/50 p-4 rounded-lg mb-4">
              <p className="text-foreground font-medium mb-2">{SITE.name}</p>
              <p className="text-muted-foreground">{ADDRESS.full}</p>
              <p className="text-muted-foreground">Telefon: {CONTACT.phone.formatted}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              3. Toplanan Kişisel Veriler
            </h2>
            <p className="text-muted-foreground mb-4">
              Hizmetlerimizden yararlanırken aşağıdaki kişisel verileriniz toplanabilir:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong className="text-foreground">Kimlik Bilgileri:</strong> Ad, soyad, T.C. kimlik numarası</li>
              <li><strong className="text-foreground">İletişim Bilgileri:</strong> Telefon numarası, e-posta adresi, adres bilgileri</li>
              <li><strong className="text-foreground">İşlem Bilgileri:</strong> Başvuru bilgileri, yetki grubu tercihleri, evrak bilgileri</li>
              <li><strong className="text-foreground">Teknik Veriler:</strong> IP adresi, tarayıcı bilgileri, çerez verileri, ziyaret geçmişi</li>
              <li><strong className="text-foreground">İletişim Kayıtları:</strong> WhatsApp, telefon ve e-posta iletişim kayıtları</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              4. Kişisel Verilerin İşlenme Amaçları
            </h2>
            <p className="text-muted-foreground mb-4">
              Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Müteahhitlik belgesi başvuru dosyası hazırlama danışmanlık hizmetinin sunulması</li>
              <li>Müşteri ilişkileri yönetimi ve iletişim süreçlerinin yürütülmesi</li>
              <li>Hizmet kalitesinin artırılması ve müşteri memnuniyetinin sağlanması</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              <li>Web sitesi trafik analizi ve kullanıcı deneyiminin iyileştirilmesi</li>
              <li>Pazarlama ve tanıtım faaliyetlerinin yürütülmesi (açık rıza ile)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              5. Kişisel Verilerin İşlenme Hukuki Sebepleri
            </h2>
            <p className="text-muted-foreground mb-4">
              Kişisel verileriniz KVKK'nın 5. ve 6. maddelerinde belirtilen aşağıdaki hukuki sebeplere dayanarak işlenmektedir:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Açık rızanızın bulunması</li>
              <li>Sözleşmenin kurulması veya ifası ile doğrudan ilgili olması</li>
              <li>Yasal yükümlülüğün yerine getirilmesi</li>
              <li>Meşru menfaatlerimiz (hizmet kalitesinin artırılması, güvenliğin sağlanması)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              6. Kişisel Verilerin Aktarılması
            </h2>
            <p className="text-muted-foreground mb-4">
              Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi için aşağıdaki taraflarla paylaşılabilir:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>İlgili kamu kurum ve kuruluşları (müteahhitlik belgesi başvuru süreci kapsamında)</li>
              <li>Hukuki danışmanlarımız ve mali müşavirlerimiz</li>
              <li>IT hizmet sağlayıcıları ve hosting firmaları</li>
              <li>Google Analytics ve Google Ads gibi analitik platformlar (çerez onayı ile)</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Kişisel verileriniz, yurt dışına aktarılmamaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              7. Çerezler (Cookies)
            </h2>
            <p className="text-muted-foreground mb-4">
              Web sitemizde, kullanıcı deneyimini geliştirmek ve trafik analizi yapmak amacıyla çerezler kullanılmaktadır. Çerez türleri:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong className="text-foreground">Zorunlu Çerezler:</strong> Web sitesinin çalışması için gerekli çerezler</li>
              <li><strong className="text-foreground">Analitik Çerezler:</strong> Google Analytics ile kullanıcı davranışlarının analiz edilmesi (açık rıza ile)</li>
              <li><strong className="text-foreground">Pazarlama Çerezleri:</strong> Google Ads ile reklam performansının ölçülmesi (açık rıza ile)</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Çerez kullanımını tarayıcı ayarlarınızdan kontrol edebilir veya çerez onay ekranından yönetebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              8. Kişisel Verilerin Saklanma Süresi
            </h2>
            <p className="text-muted-foreground mb-4">
              Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve yasal saklama süreleri çerçevesinde saklanmaktadır. Hizmet ilişkisinin sona ermesinden sonra, yasal saklama süreleri dolana kadar verileriniz saklanabilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              9. Veri Güvenliği
            </h2>
            <p className="text-muted-foreground mb-4">
              Kişisel verilerinizin güvenliğini sağlamak için uygun teknik ve idari önlemler alınmaktadır:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>SSL sertifikası ile şifreli iletişim</li>
              <li>Güvenli sunucu altyapısı</li>
              <li>Erişim kontrolü ve yetkilendirme mekanizmaları</li>
              <li>Düzenli güvenlik güncellemeleri</li>
              <li>Personel eğitimleri ve gizlilik taahhütleri</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              10. KVKK Kapsamındaki Haklarınız
            </h2>
            <p className="text-muted-foreground mb-4">
              KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
              <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
              <li>KVKK'da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme</li>
              <li>Düzeltme, silme, yok etme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler ile analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kanuna aykırı işleme nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Haklarınızı kullanmak için {CONTACT.phone.formatted} numaralı telefondan veya WhatsApp üzerinden bizimle iletişime geçebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              11. İletişim
            </h2>
            <p className="text-muted-foreground mb-4">
              Gizlilik politikamız veya kişisel verilerinizin işlenmesi hakkında sorularınız, talepleriniz veya şikayetleriniz için:
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
              Bu Gizlilik Politikası, yasal düzenlemelerdeki değişiklikler veya hizmetlerimizdeki güncellemeler nedeniyle değiştirilebilir. Değişiklikler web sitesinde yayınlandığında yürürlüğe girer. Önemli değişikliklerde sizleri bilgilendirme hakkımız saklıdır.
            </p>
          </section>

          <div className="border-t pt-8 mt-8">
            <p className="text-sm text-muted-foreground">
              Bu Gizlilik Politikası {lastUpdate} yılında güncellenmiştir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


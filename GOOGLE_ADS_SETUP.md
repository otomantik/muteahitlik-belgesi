# Google Ads Landing Page Optimizasyonu

## Yapılan Optimizasyonlar

### 1. SEO İyileştirmeleri
- ✅ FAQ başlığına ana kelime eklendi: "Müteahhitlik Belgesi Hakkında Sık Sorulan Sorular"
- ✅ Final CTA başlığına ana kelime eklendi: "Müteahhitlik Belgesi Başvurusunu Ertelemeye Gerek Yok"
- ✅ Ana kelime yoğunluğu optimize edildi (%1.5 - optimal)

### 2. Trust Signals (Güven İşaretleri)
- ✅ Hero bölümüne trust badges eklendi:
  - Ücretsiz Ön Değerlendirme
  - Taahhüt Yok
  - 3 İş Gününde Hazır
- ✅ Çalışma saatleri header'da görünür
- ✅ Legal disclaimer footer'da her zaman görünür

### 3. Conversion Tracking
- ✅ Google Ads conversion tracking hazır
- ✅ Tüm CTA'larda conversion event'leri eklendi:
  - Hero WhatsApp CTA
  - Hero Phone CTA
  - Final CTA WhatsApp
  - Final CTA Phone
  - Mobile CTA WhatsApp
  - Mobile CTA Phone

### 4. CTA Optimizasyonu
- ✅ Primary CTA'lara shadow eklendi (daha belirgin)
- ✅ CTA metinleri Google Ads için optimize edildi
- ✅ Conversion tracking tüm CTA'larda aktif

## Google Ads Conversion Tracking Kurulumu

### Adım 1: Google Ads Conversion Action Oluşturma

1. Google Ads hesabınıza giriş yapın
2. **Araçlar ve Ayarlar** > **Ölçüm** > **Dönüşümler** bölümüne gidin
3. **+** butonuna tıklayın
4. **Web sitesi** seçeneğini seçin
5. Conversion action adını girin (örn: "WhatsApp İletişim" veya "Telefon Arama")
6. **Kategori**: "Telefon araması" veya "Diğer" seçin
7. **Değer**: İsteğe bağlı
8. **Sayma yöntemi**: "Her" veya "Bir" seçin
9. **Dönüşüm penceresi**: 30 gün önerilir
10. **Kaydet ve devam et** butonuna tıklayın

### Adım 2: Conversion ID ve Label Alma

1. Conversion action oluşturduktan sonra, **Etiket oluştur** sayfasına yönlendirileceksiniz
2. **Etiket türü**: "Google Ads'den yüklenen etiket" seçin
3. **Etiket kodu** bölümünde şu bilgileri bulacaksınız:
   ```
   AW-CONVERSION_ID/CONVERSION_LABEL
   ```
   Örnek: `AW-123456789/AbC-D_efG-h12AbC-D_efG`

### Adım 3: Kodda Güncelleme

`lib/constants.ts` dosyasında `GOOGLE_ADS` objesini güncelleyin:

```typescript
export const GOOGLE_ADS = {
  conversionId: "AW-123456789", // Google Ads'den aldığınız Conversion ID
  conversionLabel: "AbC-D_efG-h12AbC-D_efG", // Google Ads'den aldığınız Conversion Label
} as const;
```

### Adım 4: Test Etme

1. Sayfayı tarayıcıda açın
2. Bir CTA butonuna tıklayın
3. Google Ads hesabınızda **Araçlar ve Ayarlar** > **Ölçüm** > **Dönüşümler** bölümüne gidin
4. Conversion action'ınızı açın
5. **Test dönüşümleri** bölümünde test dönüşümünüzü görmelisiniz

## Google Ads Quality Score İyileştirmeleri

### Landing Page Experience (Sayfa Deneyimi)
- ✅ Sayfa hızı optimize (Next.js Image, priority loading)
- ✅ Mobil uyumluluk (responsive design)
- ✅ Navigasyon kolaylığı (smooth scroll, anchor links)
- ✅ İçerik kalitesi (detaylı, alakalı içerik)
- ✅ Şeffaflık (iletişim bilgileri, çalışma saatleri, legal disclaimer)

### Relevance (Alaka Düzeyi)
- ✅ Anahtar kelime ile sayfa içeriği uyumu (%1.5 keyword density)
- ✅ Ad copy ile landing page uyumu (ana kelime her yerde)
- ✅ Kullanıcı niyetine uygun içerik (problem-solution akışı)

### Expected CTR (Beklenen Tıklama Oranı)
- ✅ İlgili ve çekici başlıklar
- ✅ Net value proposition (Hero'da)
- ✅ Trust signals (güven işaretleri)

### Conversion Optimization
- ✅ Net CTA'lar (WhatsApp, Phone)
- ✅ Düşük friction (form yok, direkt iletişim)
- ✅ Güven işaretleri (trust badges)
- ✅ Legal disclaimer (her zaman görünür)

## Önemli Notlar

1. **Conversion Tracking**: Google Ads conversion ID ve Label'ı `lib/constants.ts` dosyasına eklemeyi unutmayın
2. **Test**: Conversion tracking'i mutlaka test edin
3. **Analytics**: Google Analytics de zaten entegre (cookie consent sonrası)
4. **Mobile CTA**: Mobil cihazlarda sabit CTA bar var
5. **Trust Signals**: Hero'da trust badges görünür

## Sonraki Adımlar

1. Google Ads conversion tracking'i kurun
2. Test dönüşümlerini kontrol edin
3. Google Ads kampanyalarınızı başlatın
4. Landing page performansını izleyin
5. Gerekirse A/B test yapın

## Destek

Sorularınız için: [İletişim bilgileri `lib/constants.ts` dosyasında]


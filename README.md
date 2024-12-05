# Uniswap V2 DEX Simülatörü

Bu proje, bir Uniswap V2 tarzı merkeziyetsiz borsa (DEX) işleyişini simüle eden bir Node.js tabanlı konsol uygulamasıdır. Kullanıcılar likidite ekleyebilir, token takas işlemleri yapabilir ve havuz durumunu görüntüleyebilir.

## Özellikler

- **Tamamen Konsol Üzerinde Çalışır:** Komut satırı tabanlı bir arayüz sunar.
- **Kullanıcı İşlemleri:**
  - Likidite ekleme.
  - Token takası (Token A ↔ Token B, Token B ↔ Token C, vb.).
  - Havuz ve kullanıcı bakiyelerini görüntüleme.
- **Havuzlar ve Tokenler:**
  - Üç farklı token (Token A, Token B, Token C) ve ilgili havuzlar oluşturulmuştur.

## Kurulum

1. **Gerekli Bağımlılıkları Yükleyin:**
   ```bash
   npm install requirements.txt
   ```

2. **Uygulamayı Çalıştırın:**
   ```bash
   node app.js
   ```

## Kullanım

Uygulama çalıştırıldığında, aşağıdaki menüden bir seçenek seçebilirsiniz:

1. Likidite Ekle  
2. Token Takası  
3. Havuz Durumunu Görüntüle  
4. Kullanıcı Bakiyesini Görüntüle  
5. Çıkış  

## Teknolojiler

- **JavaScript & Node.js:** Projenin temel programlama dili.  
- **Commander.js:** Konsol komutlarını işlemek için.  
- **Chalk:** Konsol çıktısını renklendirmek için.  

## Katkıda Bulunanlar

- [05Arda](https://github.com/05Arda)  
- [talhakok](https://github.com/talhakok)  
- [keremtalhaoral](https://github.com/keremtalhaoral)  

<!-- ## Proje Durumu

Proje şu anda aktif olarak geliştirilmektedir. Gelecekte eklenmesi planlanan özellikler:  
- Daha detaylı swap algoritmaları.
- Performans optimizasyonları. -->

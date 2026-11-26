# CEPHE Kapalı Beta sitesi – telefondan kurulum

Site `beta-site/` klasöründe. Firebase ayarı girilmezse "deneme modu"nda açılır (kayıtlar yalnızca o tarayıcıda kalır; yönetici şifresi `demo`).

## 1. Firebase (ücretsiz Spark planı)
1. console.firebase.google.com → Proje ekle → ad: `cephe-beta` (Analytics kapalı olabilir).
2. Build → Firestore Database → Veritabanı oluştur → konum `eur3` → üretim modu.
3. Firestore → Kurallar sekmesi → `beta-site/firestore.rules` içeriğini yapıştır → Yayınla.
4. Build → Authentication → Başlayın → E-posta/Şifre'yi etkinleştir.
5. Authentication → Kullanıcılar → Kullanıcı ekle → `ata.coplay@gmail.com` + güçlü bir şifre.
   (Başka adres kullanırsan hem `ayar.js` ADMIN_EPOSTA hem `firestore.rules` içindeki adresi değiştir.)
6. Proje ayarları (dişli) → Uygulamalarınız → Web (`</>`) → kaydet → çıkan `firebaseConfig` içinden
   `apiKey, authDomain, projectId, appId` değerlerini `beta-site/ayar.js` içine yaz. Bu değerler gizli değildir; güvenliği kurallar sağlar.
7. Authentication → Ayarlar → Yetkili alan adları → `ataozer.github.io` ekle.

## 2. Yayın
- Site bu depoda `beta/` klasöründe; GitHub Pages zaten bu depodan yayın yapıyor.
- Adres: `https://ataozer.github.io/cephe-gizlilik/beta/` · Yönetici: `https://ataozer.github.io/cephe-gizlilik/beta/#admin`

## Kullanım
- Yönetici panelinde **Yeni e-postalar** → "Seçilenleri kopyala" → Play Console > Test > Kapalı test > Test kullanıcıları listesine yapıştır.
- Sonra **Kayıtlar tamamlandı** → oyuncuların ekranı anında yeşile döner ve Google Play bağlantısı görünür.
- Bağlantı panelin altından değiştirilebilir (varsayılan: `https://play.google.com/apps/testing/co.ata.cephe`).

## Öneri görselleri ve geçersiz e-posta
- Oyuncu öneriye en çok 3 görsel ekleyebilir. Görseller telefonda küçültülüp (≤1600 px JPEG) Firestore'a, önerinin altındaki `gorseller` bölümüne yazılır. Firebase Storage gerekmez, Spark planında çalışır.
- Bu özellik için `firestore.rules` güncellendi: Firebase Console → Firestore → Kurallar sekmesine yeni içeriği yapıştırıp **Yayınla**. Kurallar güncellenmezse görselsiz öneriler çalışmaya devam eder, görselli öneriler gönderilemez.
- Yönetici panelinde **Yeni e-postalar** listesinden adres seçip "Seçilenleri geçersiz işaretle" (iki kez dokun) → oyuncu sarı "Geçersiz e-posta adresi" uyarısı ve "Doğru adresle tekrar kayıt ol" düğmesi görür. **Geçersiz** sekmesinden "Beklemeye al" ile geri alınır.

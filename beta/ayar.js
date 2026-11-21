// CEPHE Kapalı Beta sitesi ayarları.
// FIREBASE boş bırakılırsa site "deneme modu"nda çalışır (veriler yalnızca o tarayıcıda tutulur).
// Firebase Console > Proje ayarları > Web uygulaması > firebaseConfig değerlerini buraya yapıştır.
window.BETA_AYAR = {
  FIREBASE: {
    apiKey: "AIzaSyBI8Ck4uCRl6O-RI9mZE1FA6_2qQ1bu1hc",
    authDomain: "cephe-beta.firebaseapp.com",
    projectId: "cephe-beta",
    appId: "1:979253068666:web:39e13d39039b3d79984cc3"
  },
  // Yönetici hesabı (Firebase Authentication'da bu e-postayla oluşturulacak; firestore.rules ile aynı olmalı)
  ADMIN_EPOSTA: "ata.coplay@gmail.com",
  // Kayıt tamamlanınca oyuncuya gösterilecek varsayılan bağlantı (panelden değiştirilebilir)
  PLAY_LINK: "https://play.google.com/apps/testing/co.ata.cephe"
};

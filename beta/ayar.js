// CEPHE Kapalı Beta sitesi ayarları.
// FIREBASE boş bırakılırsa site "deneme modu"nda çalışır (veriler yalnızca o tarayıcıda tutulur).
// Firebase Console > Proje ayarları > Web uygulaması > firebaseConfig değerlerini buraya yapıştır.
window.BETA_AYAR = {
  FIREBASE: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    appId: ""
  },
  // Yönetici hesabı (Firebase Authentication'da bu e-postayla oluşturulacak; firestore.rules ile aynı olmalı)
  ADMIN_EPOSTA: "ata.coplay@gmail.com",
  // Kayıt tamamlanınca oyuncuya gösterilecek varsayılan bağlantı (panelden değiştirilebilir)
  PLAY_LINK: "https://play.google.com/apps/testing/co.ata.cephe"
};

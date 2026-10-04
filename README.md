# 1KA19 — THE FIRST CHAPTER
### Digital Time Capsule & Yearbook Website
**Sistem Informasi &bull; Universitas Gunadarma Karawaci (2026–2027)**  
*“One class. One beginning. Countless memories.”*

---

## 📖 Tentang Website Ini
Website ini dirancang khusus sebagai **Digital Time Capsule** untuk mengabadikan masa-masa berharga kelas **1KA19** di semester 1 Universitas Gunadarma Karawaci. 

Dengan perpaduan estetika editorial majalah, sentuhan scrapbook hangat, palet warna resmi Gunadarma (*deep purple, rich magenta, warm gold, soft cream, and dark cinematic black*), serta alur emosional dari awal masuk hingga babak penutup (*"We Were Here"*), website ini siap menjadi saksi bisu bahwa kita pernah berjuang dan tertawa bersama di sini.

---

## ✨ Fitur Utama

1. **Cinematic Opening / Intro**:
   - Transisi layar gelap: *Universitas Gunadarma Karawaci* &rarr; *2026* &rarr; *1KA19 The First Chapter* &rarr; Quote reflektif.
   - Tombol **"OPEN THE CHAPTER"** dengan efek tirai membuka lembaran baru.
   - Tombol *Skip Intro* dan *Replay Our Story* di bagian akhir.
2. **Hero Class Photo Placeholder**:
   - Frame foto kelas berukuran besar bergaya sinematik dengan rasio 21:9, badge, dan aksen sudut minimalis siap disematkan foto asli kelas 1KA19.
3. **Prolog "How It Started"**:
   - Refleksi awal dari sekadar nomor kelas menjadi bagian dari hidup masing-masing.
4. **Meet 1KA19 (Stats & Directory)**:
   - Statistik visual editorial (XX Mahasiswa, 1 Kelas, 1 First Chapter, 2026 The Beginning) + kartu profil anggota.
5. **Memory Timeline ("The Days We Didn't Know We'd Miss")**:
   - Kronologi vertikal interaktif dari Hari Pertama Kuliah, Kuliah Perdana, Tugas Kelompok, Presentasi Pertama, hingga Hangout Malam Karawaci.
6. **Photo Memory Wall (Moments Scrapbook)**:
   - Galeri foto masonry dengan berbagai rasio (landscape, portrait, square, polaroid, wide cinematic).
   - Filter kategori (*In Class, Hangouts, Candid*).
   - Klik kartu untuk membuka **Cinematic Lightbox Modal** berlayar penuh.
7. **The People**:
   - Memory cards personal untuk merekam kata-kata atau pesan khas dari setiap orang.
8. **The Chaos (Interactive Voting)**:
   - Polling *"Most Likely To..."* (datang telat bawa es kopi, nanya tugas apa, ngilang dari grup chat, submit 23:59, dll.).
   - Suara dihitung dan disimpan otomatis di browser (`localStorage`).
9. **Inside Jokes ("You Had To Be There")**:
   - Accordion interaktif yang bisa diklik untuk membuka kisah rahasia di balik lelucon internal 1KA19.
10. **Before We Roll**:
    - Monolog tulus menyikapi kemungkinan rolling kelas: *"The class may change. The chapter doesn't."*
11. **Letters to 1KA19 (Digital Capsule Wall)**:
    - Form penulisan surat/pesan kenangan langsung ke time capsule yang tersimpan di `localStorage`.
12. **"If We Ever Forget"**:
    - Bagian berlatar hitam pekat dengan ritme scroll tipografi emosional.
13. **Final Chapter & "We Were Here"**:
    - Epilog penutup yang menggetarkan hati dengan cap kelulusan/angkatan dan tombol **Replay Our Story**.
14. **Ambient Memories Audio**:
    - Generator melodi nostalgia lembut menggunakan *Web Audio API* (tidak butuh file eksternal tambahan, langsung berbunyi lembut saat tombol "MEMORIES AMBIENCE" di-klik).

---

## 📸 Cara Mengganti Foto Placeholder Menjadi Foto Asli

Semua placeholder didesain menggunakan class reusable `.memory-placeholder`. Saat foto asli sudah siap, Anda cukup menambahkan tag `<img>` ke dalam placeholder tersebut tanpa merusak tata letak sedikit pun:

Contoh pada **Hero Class Photo**:
```html
<div class="memory-placeholder aspect-cinematic hero-placeholder">
  <!-- Cukup tambahkan tag img foto kelas Anda: -->
  <img src="foto-kelas-1ka19.jpg" alt="Foto Kelas 1KA19 Gunadarma Karawaci">
  
  <!-- Elemen overlay & content dapat tetap dipertahankan atau dihapus -->
</div>
```

---

## 🛠️ Cara Mengubah Data (Nama Anggota, Timeline, Jokes)

Seluruh konten dinamis dikelola secara terpusat di awal file [`script.js`](script.js). Anda tidak perlu mengotak-atik CSS atau struktur rumit:

1. **Nama & Daftar Mahasiswa**: Edit array `classMembers` di `script.js`.
2. **Timeline Peristiwa**: Tambah atau edit item di array `timelineData` di `script.js`.
3. **Koleksi Momen Foto**: Tambah item di array `momentsData` di `script.js`.
4. **Inside Jokes**: Edit cerita di array `insideJokesData` di `script.js`.

---

## 🚀 Cara Menjalankan

Cukup buka file [`index.html`](index.html) langsung di browser apa pun (Google Chrome, Microsoft Edge, Safari, Firefox), atau gunakan Live Server di Visual Studio Code. Website sudah 100% responsif di layar ponsel pintar, tablet, maupun layar laptop/desktop.

# Website Portofolio Pribadi — Nandaa Mandira Faiq

Website portofolio pribadi modern, responsif, dan interaktif untuk siswa SMK jurusan **Rekayasa Perangkat Lunak (RPL)**. Dibangun menggunakan teknologi web murni (Vanilla HTML5, CSS3, dan JavaScript) tanpa dependensi backend sehingga dapat dijalankan langsung secara lokal.

---

## 👤 Identitas Pemilik Portofolio

- **Nama Lengkap:** Nandaa Mandira Faiq
- **Kelas:** 11 RPL B
- **Jurusan:** Rekayasa Perangkat Lunak (RPL)
- **Sekolah:** SMK Negeri 1 Tembarak
- **Tahun Pendidikan:** 2024 – 2027
- **Email:** nandafaq04@gmail.com

---

## 🚀 Teknologi yang Digunakan

- **HTML5:** Struktur semantik, aksesibilitas (ARIA), dan optimasi SEO.
- **CSS3:** Custom properties/variabel warna, tema Dark Mode modern (`#0f172a`), efek glassmorphism, responsive CSS grid & flexbox, serta micro-animations.
- **Vanilla JavaScript (ES6+):** Logika interaktivitas murni tanpa framework eksternal.
- **Google Fonts:** Poppins (sans-serif) & Fira Code (monospace).
- **FontAwesome 6 (CDN):** Icon modern untuk teknologi, antarmuka, dan navigasi.

---

## ✨ Fitur Utama

1. **Sticky Glassmorphism Navbar:** Menu navigasi melayang dengan efek blur dan scroll spy (indikator menu aktif otomatis).
2. **Mobile Hamburger Menu:** Navigasi drawer responsif yang nyaman dibuka di perangkat smartphone dan tablet.
3. **Hero Section Interaktif:**
   - Animasi ketik (Typewriter effect) pada sub-judul peran siswa RPL.
   - Mockup Code Editor (cuplikan kode Java) dengan syntax highlight tema IDE modern.
   - Tombol CTA langsung menuju bagian Proyek dan Kontak.
4. **About Section:**
   - Menampilkan biodata lengkap dan foto profil dengan *fallback image handler* otomatis jika gambar tidak ditemukan.
5. **Skills Cards:**
   - 6 kartu keahlian (HTML, CSS, JavaScript, Java, Python, Database/SQL) dengan icon, deskripsi fungsi, progress bar, dan level kemampuan realistis siswa (Beginner / Intermediate).
6. **Project Grid & Live Filter:**
   - Menampilkan 5 proyek latihan siswa RPL.
   - Filter instan per kategori (*All, HTML/CSS, JavaScript, Java, Python, Database*) tanpa reload halaman.
   - Modal Preview Interaktif: Mengklik "View Project" menampilkan jendela detail fitur dan cuplikan kode implementasi.
7. **Timeline Pendidikan:** Riwayat sekolah di SMK Negeri 1 Tembarak dengan garis timeline bercahaya (*glow*).
8. **Section Sertifikat:** Desain *empty-state* elegan dan jujur dengan pesan siap diperbarui saat sertifikat baru diperoleh.
9. **Contact Form & Direct Email:**
   - Tombol kirim email langsung via `mailto:nandafaq04@gmail.com`.
   - Form kontak dengan validasi JavaScript di sisi klien dan notifikasi umpan balik ramah.
10. **Floating Back-to-Top Button:** Tombol melayang untuk kembali ke bagian atas dengan animasi halus.

---

## 📁 Struktur Folder

```text
nandana/
│
├── index.html                  # Halaman utama portofolio
├── README.md                   # Dokumentasi panduan proyek
│
├── css/
│   └── style.css               # Styling, tema dark mode, dan media query
│
├── js/
│   └── script.js               # Logika navigasi, filter proyek, modal, dan validasi
│
└── assets/
    ├── profile.jpg             # Foto profil avatar Nandaa Mandira Faiq
    └── projects/               # Aset visual preview untuk tiap proyek
        ├── project1-web.svg
        ├── project2-kasir.svg
        ├── project3-notes.svg
        ├── project4-atm.svg
        └── project5-game.svg
```

---

## 💻 Cara Menjalankan Project

Website ini sepenuhnya berbasis file statis, Anda dapat menjalankannya dengan mudah tanpa perlu install server:

### Opsi 1: Buka Langsung di Browser (Paling Mudah)
1. Buka folder `nandana` di File Explorer komputer Anda.
2. Klik ganda pada file `index.html`.
3. Website akan otomatis terbuka di browser favorit Anda (Google Chrome, Microsoft Edge, Mozilla Firefox, dll).

### Opsi 2: Menggunakan Live Server di VSCode / Antigravity IDE
1. Buka folder `nandana` di Antigravity IDE atau VS Code.
2. Klik kanan pada file `index.html` -> pilih **"Open with Live Server"**.
3. Website akan berjalan di alamat `http://127.0.0.1:5500`.

---

## 🛠️ Panduan Kustomisasi

### 1. Cara Mengganti Foto Profil
- Siapkan foto profil Anda dengan format kotak/1:1 (contoh: resolusi 500x500 piksel).
- Simpan file foto Anda dengan nama `profile.jpg`.
- Salin dan timpa file tersebut ke dalam folder:
  ```text
  assets/profile.jpg
  ```
- *Catatan:* Jika Anda ingin menggunakan format `.png`, buka file `index.html` dan ubah `src="assets/profile.jpg"` menjadi `src="assets/profile.png"`.

### 2. Cara Menambahkan Proyek Baru
1. Buka file `index.html` dan cari tag `<div class="projects-grid" id="projectsGrid">`.
2. Duplikasi salah satu blok `<article class="project-card reveal" ...>` dan sesuaikan datanya:
   ```html
   <article class="project-card reveal" data-category="python">
     <div class="project-thumb">
       <img src="assets/projects/nama-file-gambar.svg" alt="Judul Proyek">
       <span class="project-overlay-badge">Python App</span>
     </div>
     <div class="project-info">
       <h3 class="project-title">Judul Proyek Baru</h3>
       <p class="project-desc">Deskripsi singkat proyek Anda.</p>
       <div class="project-tech-tags">
         <span class="tech-tag">Python</span>
         <span class="tech-tag">SQLite</span>
       </div>
       <div class="project-card-footer">
         <button class="btn-project-view btn-view-project" data-project="project-baru">
           <span>View Project</span>
           <i class="fa-solid fa-arrow-right"></i>
         </button>
       </div>
     </div>
   </article>
   ```
3. Buka file `js/script.js`, tambahkan data detail pada objek `projectDetails` dengan key `project-baru`.

### 3. Cara Mengganti Informasi Kontak
- Buka file `index.html`, cari bagian `<section id="contact">`.
- Ganti teks email `nandafaq04@gmail.com` dan atribut link `mailto:nandafaq04@gmail.com` dengan alamat email baru Anda.
- Buka file `js/script.js` pada fungsi `initContactForm()` dan sesuaikan parameter `mailtoUrl` jika diperlukan.

---

## 📄 Lisensi & Hak Cipta

© 2026 Nandaa Mandira Faiq. Siswa 11 RPL B — SMK Negeri 1 Tembarak. All rights reserved.

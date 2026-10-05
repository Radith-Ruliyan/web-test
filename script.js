/**
 * 1KA19 — THE FIRST CHAPTER | JAVASCRIPT SYSTEM
 * Universitas Gunadarma Karawaci (2026–2027)
 * "One class. One beginning. Countless memories."
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. CENTRALIZED CLASS DATA ARCHIVE (EASY TO CUSTOMIZE)
     ========================================================================== */

  /**
   * Data Mahasiswa 1KA19
   * Anda dapat dengan mudah menambahkan nama, foto, atau mengubah kutipan di sini.
   */
  const classMembers = [
    {
      id: "01",
      name: "AZHAR WIDIA RAHMAN",
      nickname: "BOSS Azhar",
      role: "Ketua Kelas",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/CLASS%20ROASTER%20AZHAR.jpeg"
    },
    {
      id: "02",
      name: "AHMAD RIZA",
      nickname: "RIZA",
      role: "Wakil Ketua Kelas",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },
    {
      id: "03",
      name: "MUHAMMAD YARIS",
      nickname: "Yaris",
      role: "PJ MATA KULIAH ALGORITMA & PEMROGRAMAN 1B",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },
    {
      id: "04",
      name: "HYUGA PUTRA APRIANTO",
      nickname: "Hyuga",
      role: "BOSS Muda",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },
    {
      id: "05",
      name: "RADITH RULIYAN",
      nickname: "Radith",
      role: "PJ MATA KULIAH MATEMATIKA DASAR 1A",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },
    {
      id: "06",
      name: "REHAN CHANDRA WINATA",
      nickname: "Rehan",
      role: "PJ MATA KULIAH KONSEP SISTEM & TEKNIK SISTEM INFORMASI B",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },
    {
      id: "07",
      name: "MUHAMMAD HAFIDZ NASUTION",
      nickname: "Hafidz",
      role: "Bendahara Kelas",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },
    {
      id: "08",
      name: "ARVIN HOBART PASARIBU",
      nickname: "Arvin",
      role: "PJ MATA KULIAH BISNIS & EKONOMI DIGITAL",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },
    {
      id: "09",
      name: "PASKALIS BAMA YUDANTO",
      nickname: "Bama",
      role: "PJ MATA KULIAH ALGORITMA & PEMROGRAMAN 1A",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },
    {
      id: "10",
      name: "CHAIRO JUAN SHEELO HARIYANTO",
      nickname: "Chairo",
      role: "PJ MATA KULIAH DIGITAL CITIZENSHIP",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },
    {
      id: "11",
      name: "FARDAN RUKMAN QOLBI",
      nickname: "Fardan",
      role: "PJ MATA KULIAH MATA KULIAH FISIKA KIMIA A",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },
    {
      id: "12",
      name: "SATRIA ARYA PRADIPTA",
      nickname: "Satria",
      role: "PJ MATA KULIAH MATA KULIAH FISIKA KIMIA B",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },
    {
      id: "13",
      name: "MUHAMMAD REIZYA KHUZAIMAH",
      nickname: "Reizya",
      role: "PJ MATA KULIAH MATA KULIAH ALGORITMA & PEMROGRAMAN 1C",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },
    {
      id: "14",
      name: "KEVIN AUFA NABIL",
      nickname: "Kevin",
      role: "ISI ROLE DISINI",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },
    {
      id: "15",
      name: "ACHMAD RAHMATULLAH",
      nickname: "Rahmat",
      role: "ISI ROLE DISINI",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },
    {
      id: "16",
      name: "ANDIKA NANDA MULYA",
      nickname: "Andika",
      role: "ISI ROLE DISINI",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },
    {
      id: "17",
      name: "MUHAMMAD AZRIEL MAHPUTRA",
      nickname: "Azriel",
      role: "ISI ROLE DISINI",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    }, 
    {
      id: "18",
      name: "NISA ZAKIYATUNNUFUS",
      nickname: "Nufus",
      role: "PJ MATA KULIAH PENDIDIKAN PANCASILA",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },
    {
      id: "19",
      name: "AULIA ERLIANA",
      nickname: "Liana",
      role: "PJ MATA KULIAH MATEMATIKA DASAR 1B",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },
    {
      id: "20",
      name: "ADZRA SHIFA NABILA",
      nickname: "Adzra",
      role: "ISI ROLE DISINI",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },
    {
      id: "21",
      name: "AQILA NURKHOLISA",
      nickname: "Aqila",
      role: "PJ MATA KULIAH KONSEP SISTEM & TEKNIK SISTEM INFORMASI C",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },
    {
      id: "22",
      name: "DIVA ADNIEL SAPUTRI",
      nickname: "Diva",
      role: "ISI ROLE DISINI",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },
    {
      id: "23",
      name: "GLADIES ZAHWA ALFIANI",
      nickname: "Gladies",
      role: "PJ MATA KULIAH KONSEP SISTEM & TEKNIK SISTEM INFORMASI A",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },
    {
      id: "24",
      name: "JULISKA DAMAYANTI",
      nickname: "Juliska",
      role: "ISI ROLE DISINI",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },
    {
      id: "25",
      name: "	MARIA MARGARETTA",
      nickname: "Maria",
      role: "ISI ROLE DISINI",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },
    {
      id: "26",
      name: "SOFIE TATA MIRANTHY",
      nickname: "Sofie",
      role: "PJ MATA KULIAH ILMU SOSIAL & BUDAYA DASAR",
      quote: "ISI QUOTE DISINI",
      funFact: "CIRI KHAS",
      image: "assets/Photo/"
    },


  ];

  /**
   * Memory Timeline Data (Chronicles)
   */
  const timelineData = [
    {
      date: "28 SEP 2026",
      kicker: "THE BEGINNING",
      title: "First Day as College Students",
      desc: "Hari pertama menginjakkan kaki di gedung kampus Gunadarma Karawaci. Masih mencari ruangan, masih canggung saling sapa, dan belum tahu siapa yang akan jadi teman tertawa sepanjang semester.",
      location: "Kampus Gunadarma Karawaci",
      tag: "FIRST DAY",
      aspect: "aspect-landscape",
      image: "assets/Photo/FIRST%20DAY.jpeg"
    },
    {
      date: "SEP 2026",
      kicker: "SOLIDARITY",
      title: "Barisan Laki-Laki & Class Presentation",
      desc: "Formasi kompak para mahasiswa 1KA19. Sistem kerja kebut yang dikerjain hingga menit-menit akhir dan solidaritas barisan yang saling menyemangati di depan kelas.",
      location: "Podium Kelas 1KA19",
      tag: "THE BOYS",
      aspect: "aspect-portrait",
      image: "assets/Photo/BARISAN%20LAKI%20LAKI%201KA19.jpeg"
    },
    {
      date: "SEP 2026",
      kicker: "ACADEMIC LIFE",
      title: "The First Lecture & Confusions",
      desc: "Materi algoritma dan teknik informasi pertama kali dibuka. Sesi foto bareng di ruang kelas setelah jam kuliah selesai dengan muka-muka penuh semangat baru.",
      location: "Ruang Kelas 1KA19",
      tag: "FOTBAR KELAS",
      aspect: "aspect-landscape",
      image: "assets/Photo/FOTBAR%20KELAS.jpeg"
    },
    {
      date: "NOV 2026",
      kicker: "THE BATTLE & FEAST",
      title: "Group Assignment & Makan Bareng",
      desc: "Kerja kelompok pertama. Pembagian tugas di grup chat, janji kumpul makan buah, dan sesi makan bareng hangat yang lebih lama dari ngerjain tugasnya.",
      location: "Lorong Kampus",
      tag: "MAKAN BARENG",
      aspect: "aspect-tall",
      image: "assets/Photo/MAKAN%20BARENG.jpeg"
    },
    {
      date: "OKT 2026",
      kicker: "INTIMACY",
      title: "Late-Night Hangouts & Mall SMS Trip",
      desc: "Saat obrolan bukan lagi seputar tugas kuliah, melainkan cerita-cerita pribadi yang saling dibagikan suka dan duka yang ikut saling diceritakan.",
      location: "Summarecon Mall Serpong & Karawaci",
      tag: "MALL SMS",
      aspect: "aspect-landscape",
      image: "assets/Photo/MALL%20SMS.jpeg"
    }
  ];

  /**
   * ==========================================================================
   * DINDING KENANGAN ACAK (THE SCATTERED PHOTO WALL)
   * --------------------------------------------------------------------------
   * Semua 20 foto dan video kenangan 1KA19 tertempel rapi di sini
   * dengan proporsi kartu khusus (landscape / portrait / tall)
   * sehingga foto TIDAK AKAN TERPOTONG SAMA SEKALI!
   * ==========================================================================
   */
  const photoWallGallery = [
    {
      id: "pw-1",
      image: "assets/Photo/FOTO%20UTAMA%20KELAS.jpeg",
      title: "Foto Utama Kelas 1KA19",
      desc: "Satu kelas, satu awal, ribuan kenangan bersama di kampus Gunadarma Karawaci.",
      tag: "CLASS PHOTO",
      category: "class",
      cardType: "card-landscape",
      date: "2026",
      tilt: "tilt-1",
      tape: "tape-slant"
    },
    {
      id: "pw-2",
      image: "assets/Photo/FIRST%20DAY.jpeg",
      title: "First Day in Class",
      desc: "Momen hari-hari awal di ruang kuliah Gunadarma Karawaci saat pertama kali duduk bersama.",
      tag: "FIRST DAY",
      category: "class",
      cardType: "card-landscape",
      date: "23 SEP 2026",
      tilt: "tilt-2",
      tape: "tape-left"
    },
    {
      id: "pw-3",
      image: "assets/Photo/FOTBAR%20KELAS.jpeg",
      title: "Foto di Lorong Kelas",
      desc: "Foto bersama seluruh kawan kelas setelah usai jam mata kuliah di kampus Karawaci.",
      tag: "IN CLASS",
      category: "class",
      cardType: "card-landscape",
      date: "2026",
      tilt: "tilt-3",
      tape: "tape-right"
    },
    {
      id: "pw-4",
      image: "assets/Photo/BARISAN%20LAKI%20LAKI%201KA19.jpeg",
      title: "Barisan Laki-Laki 1KA19",
      desc: "Formasi kompak para cowok 1KA19 di depan kelas dengan gaya santai andalan.",
      tag: "THE BOYS",
      category: "class",
      cardType: "card-portrait",
      date: "2026",
      tilt: "tilt-4",
      tape: "tape-slant"
    },
    {
      id: "pw-5",
      image: "assets/Photo/CLASS%20ROASTER%20AZHAR.jpeg",
      title: "Azhar gemoy",
      desc: "Potret resmi roster 1KA19: Azhar, mahasiswa Sistem Informasi Karawaci.",
      tag: "ROSTER",
      category: "class",
      cardType: "card-tall",
      date: "2026",
      tilt: "tilt-5",
      tape: "tape-left"
    },
    {
      id: "pw-6",
      image: "assets/Photo/AZHAREKSIS.jpeg",
      title: "Azhar melet",
      desc: "Pose penuh senyum dan rasa percaya diri Azhar yang selalu menghidupkan suasana kelas.",
      tag: "CANDID",
      category: "chaos",
      cardType: "card-landscape",
      date: "2026",
      tilt: "tilt-6",
      tape: "tape-right"
    },
    {
      id: "pw-7",
      image: "assets/Photo/KETUA.jpeg",
      title: "PETINGGI KELAS 1KA19",
      desc: "Sudut pandang percaya diri sang ketua bersama rekan-rekan seperjuangan 1KA19.",
      tag: "LEADERSHIP",
      category: "class",
      cardType: "card-portrait",
      date: "2026",
      tilt: "tilt-1",
      tape: "tape-slant"
    },
    {
      id: "pw-8",
      image: "assets/Photo/SIGANTENG.jpeg",
      title: "Si Ganteng 1KA19",
      desc: "Pose menawan dan rapi salah satu mahasiswa andalan kelas 1KA19.",
      tag: "THE SOUL",
      category: "class",
      cardType: "card-landscape",
      date: "2026",
      tilt: "tilt-2",
      tape: "tape-left"
    },
    {
      id: "pw-9",
      image: "assets/Photo/SI%20KEMBAR.jpeg",
      title: "Si Kembar 1KA19",
      desc: "Duo kembar kompak yang selalu satu frekuensi dan bikin kelas makin ramai.",
      tag: "DUO SQUAD",
      category: "class",
      cardType: "card-portrait",
      date: "2026",
      tilt: "tilt-3",
      tape: "tape-right"
    },
    {
      id: "pw-10",
      image: "assets/Photo/CECAN.jpeg",
      title: "BIDADARI 1KA19",
      desc: "Senyuman manis mahasiswi 1KA19 yang selalu mencerahkan suasana kelas.",
      tag: "THE GIRLS",
      category: "hangout",
      cardType: "card-landscape",
      date: "2026",
      tilt: "tilt-4",
      tape: "tape-slant"
    },
    {
      id: "pw-11",
      image: "assets/Photo/CECAN2.jpeg",
      title: "BIDADARI 1KA19 2",
      desc: "Momen kebersamaan dan keceriaan srikandi 1KA19 di selasar kampus Karawaci.",
      tag: "THE GIRLS",
      category: "hangout",
      cardType: "card-landscape",
      date: "2026",
      tilt: "tilt-5",
      tape: "tape-left"
    },
    {
      id: "pw-12",
      image: "assets/Photo/CECAN3.jpeg",
      title: "BIDADARI 1KA19 3",
      desc: "Obrolan santai dan tawa ceria para mahasiswi di sela pergantian mata kuliah.",
      tag: "THE GIRLS",
      category: "hangout",
      cardType: "card-landscape",
      date: "2026",
      tilt: "tilt-6",
      tape: "tape-right"
    },
    {
      id: "pw-13",
      image: "assets/Photo/CECAN4.jpeg",
      title: "BIDADARI 1KA19 4",
      desc: "Pose candid manis mahasiswi 1KA19 yang terekam abadi di kapsul waktu ini.",
      tag: "THE GIRLS",
      category: "hangout",
      cardType: "card-landscape",
      date: "2026",
      tilt: "tilt-1",
      tape: "tape-slant"
    },
    {
      id: "pw-14",
      image: "assets/Photo/MAKAN%20BARENG.jpeg",
      title: "Makan Bareng",
      desc: "Meja kantin yang disatukan panjang, obrolan ngalor-ngidul, dan kenikmatan makan bersama.",
      tag: "MAKAN BARENG",
      category: "hangout",
      cardType: "card-tall",
      date: "2026",
      tilt: "tilt-2",
      tape: "tape-left"
    },
    {
      id: "pw-15",
      image: "assets/Photo/MALL%20SMS.jpeg",
      title: "Summarecon Mall Serpong",
      desc: "Healing seru melepas penat tugas kuliah di SMS Karawaci bareng kawan sekelas.",
      tag: "MALL SMS",
      category: "hangout",
      cardType: "card-landscape",
      date: "2026",
      tilt: "tilt-3",
      tape: "tape-right"
    },
    {
      id: "pw-16",
      image: "assets/Photo/LIFT.jpeg",
      title: "Mirror Selfie di Lift Kampus",
      desc: "Foto wajib di cermin lift kampus Karawaci saat naik atau turun bareng menuju lantai kelas.",
      tag: "LIFT MOMENT",
      category: "chaos",
      cardType: "card-portrait",
      date: "2026",
      tilt: "tilt-4",
      tape: "tape-slant"
    },
    {
      id: "pw-17",
      image: "assets/Photo/MELET.jpeg",
      title: "Pose Melet — Candid Jahil",
      desc: "Ekspresi kocak melet lidah yang tertangkap kamera, bukti pertemanan yang tanpa jaim.",
      tag: "CHAOS & FUN",
      category: "chaos",
      cardType: "card-landscape",
      date: "2026",
      tilt: "tilt-5",
      tape: "tape-left"
    },
    {
      id: "pw-18",
      image: "assets/Photo/FOTO%20LUCU.jpeg",
      title: "Foto Lucu 1KA19 1",
      desc: "Kelakuan random anak 1KA19 yang bikin seisi kelas nggak bisa menahan tawa.",
      tag: "INSIDE CHAOS",
      category: "chaos",
      cardType: "card-landscape",
      date: "2026",
      tilt: "tilt-6",
      tape: "tape-right"
    },
    {
      id: "pw-19",
      image: "assets/Photo/FOTO%20LUCU2.jpeg",
      title: "Azhar ngantuk",
      desc: "Tingkah absurd spontan kawan sekelas yang menjadi memori paling menghibur.",
      tag: "INSIDE CHAOS",
      category: "chaos",
      cardType: "card-landscape",
      date: "2026",
      tilt: "tilt-1",
      tape: "tape-slant"
    },
    {
      id: "pw-20",
      image: "assets/Photo/MAKAN%20BUAH.mp4",
      title: "Video Candid: Makan Buah Bareng",
      desc: "Video momen santai saat makan buah bersama di waktu istirahat perkuliahan.",
      tag: "VIDEO CANDID",
      category: "chaos",
      cardType: "card-landscape",
      date: "2026",
      tilt: "tilt-2",
      tape: "tape-left"
    }
  ];

  const momentsData = photoWallGallery;

  /**
   * The People Memory Cards
   */
  const peopleData = [
    {
      id: "p1",
      name: "Azhar",
      sentence: "“1KA19 bukan sekadar kelas, tapi cerita terbaik di awal perjalanan kuliah.”",
      aspect: "aspect-portrait",
      image: "assets/Photo/CLASS%20ROASTER%20AZHAR.jpeg"
    },
    {
      id: "p2",
      name: "Ketua Kelas",
      sentence: "“Solidaritas 1KA19 itu nyata, dari panik bareng pas kuis sampai kebersamaan di luar kelas.”",
      aspect: "aspect-portrait",
      image: "assets/Photo/KETUA.jpeg"
    },
    {
      id: "p3",
      name: "Si Ganteng",
      sentence: "“Menemukan keluarga baru di Karawaci yang bikin hari-hari kuliah selalu punya alasan tersenyum.”",
      aspect: "aspect-portrait",
      image: "assets/Photo/SIGANTENG.jpeg"
    },
    {
      id: "p4",
      name: "Srikandi 1KA19",
      sentence: "“Setiap tawa di lorong kampus dan meja makan adalah kenangan berharga yang tak tergantikan.”",
      aspect: "aspect-portrait",
      image: "assets/Photo/CECAN.jpeg"
    }
  ];

  /**
   * The Chaos: Most Likely To...
   */
  const chaosList = [
    { id: "late", title: "Arrive Late with an iced coffee", icon: "☕" },
    { id: "tugas", title: "Tiba-tiba nanya 'Hari ini ada tugas apa ya?'", icon: "📝" },
    { id: "ghost", title: "Disappear from the group chat completely", icon: "👻" },
    { id: "reply8h", title: "Baru reply chat penting setelah 8 jam", icon: "⏳" },
    { id: "laugh", title: "Bikin satu kelas ketawa di saat dosen hening", icon: "😂" },
    { id: "deadline", title: "Submit tugas jam 23:58:49", icon: "🔥" },
    { id: "aman", title: "Selalu bilang 'Tenang, aman' padahal belum mulai", icon: "🧘" },
    { id: "comedian", title: "Accidentally become the unofficial class comedian", icon: "🎭" }
  ];

  /**
   * Inside Jokes Data
   */
  const insideJokesData = [
    {
      id: "j1",
      title: "“Aman, tinggal dikit lagi kok”",
      story: "Kalimat andalan di setiap kerja kelompok ketika seseorang menanyakan progres tugas, padahal dokumen Word baru berisi judul dan nama kelompok.",
      punchline: "— Filosofi bertahan hidup 1KA19"
    },
    {
      id: "j2",
      title: "Misteri Jam Masuk Kuliah Karawaci",
      story: "Saat jadwal bilang jam 08.30, tapi kesepakatan batin kelas adalah jam 08.45, dan dosennya ternyata datang jam 09.00.",
      punchline: "— Sinkronisasi waktu tak tertulis"
    },
    {
      id: "j3",
      title: "Pertanyaan Penyelamat di Akhir Sesi",
      story: "Ketika dosen bertanya 'Ada pertanyaan?', seisi kelas saling melirik dengan tatapan memohon agar tidak ada yang mengangkat tangan supaya bisa segera pulang.",
      punchline: "— Solidaritas tanpa kata"
    },
    {
      id: "j4",
      title: "The WiFi & Hotspot Hunt",
      story: "Perjuangan mencari sinyal di sudut lantai kampus saat harus submit tugas online bersamaan.",
      punchline: "— 'Bagi tethering dong pliss'"
    }
  ];

  /**
   * Initial Letters
   */
  const initialLetters = [
    {
      author: "Radith Ruliyan",
      date: "Semester 1 — 2026",
      text: "Terima kasih untuk setiap tawa, obrolan santai di lorong kampus, dan perjuangan bersama di semester pertama ini. Apapun yang terjadi di semester depan, bangga pernah ada di 1KA19 bareng kalian."
    },
    {
      author: "Teman 1KA19",
      date: "Semester 1 — 2026",
      text: "Mungkin kita bakal kepencar nanti, tapi jangan lupa sapaan kalau ketemu di lorong kampus ya. Chapter satu ini nggak akan pernah tergantikan."
    },
    {
      author: "Warga Karawaci",
      date: "Semester 1 — 2026",
      text: "Ingat zaman kita bingung nyari ruang kelas dan ngerjain tugas sampai begadang bareng. We made it this far!"
    }
  ];


  /* ==========================================================================
     2. RENDER FUNCTIONS (POPULATE DOM)
     ========================================================================== */

  /**
   * Helper: Validasi apakah path foto valid dan bukan sekadar folder kosong
   */
  function isValidPhoto(src) {
    return Boolean(src && typeof src === 'string' && src.trim() !== '' && src !== 'assets/Photo/' && !src.endsWith('/'));
  }

  // 1. Render Class Roster Grid
  const rosterContainer = document.getElementById('class-roster-container');
  if (rosterContainer) {
    rosterContainer.innerHTML = classMembers.map((m, idx) => {
      const hasPhoto = isValidPhoto(m.image);
      return `
      <div class="roster-card ${hasPhoto ? 'has-photo' : 'no-photo'}" data-roster-index="${idx}">
        <span class="roster-number">${m.id}</span>
        <div class="roster-thumb-wrap" ${hasPhoto ? 'style="cursor: pointer;" title="Klik untuk memperbesar foto"' : ''}>
          <div class="memory-placeholder aspect-portrait" data-label="${m.nickname || m.name}">
            ${hasPhoto ? `
              <img src="${m.image}" alt="${m.name}" loading="lazy">
            ` : `
              <div class="placeholder-overlay"></div>
              <div class="placeholder-content">
                <div class="placeholder-icon-ring" style="width: 44px; height: 44px; margin-bottom: 0.4rem;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <span class="placeholder-badge" style="font-size: 0.65rem;">PHOTO ${m.id}</span>
                <span class="placeholder-meta" style="font-size: 0.58rem;">1KA19 ARCHIVE</span>
              </div>
            `}
            <div class="placeholder-corners">
              <span class="corner tl"></span><span class="corner tr"></span>
              <span class="corner bl"></span><span class="corner br"></span>
            </div>
          </div>
        </div>
        <h4 class="roster-name">${m.name}</h4>
        <span class="roster-role">${m.nickname} &bull; ${m.role}</span>
        <p class="roster-quote">${m.quote}</p>
        <span class="roster-fact">${m.funFact}</span>
      </div>
      `;
    }).join('');

    // Attach click to open lightbox if member has photo
    rosterContainer.querySelectorAll('.roster-card.has-photo').forEach(card => {
      card.querySelector('.roster-thumb-wrap')?.addEventListener('click', () => {
        const m = classMembers[card.dataset.rosterIndex];
        if (m && isValidPhoto(m.image)) {
          openLightbox({
            title: `${m.name} (${m.nickname})`,
            desc: `${m.quote} — ${m.funFact}`,
            tag: "CLASS ROSTER",
            image: m.image
          });
        }
      });
    });
  }

  // 2. Render Timeline
  const timelineContainer = document.getElementById('timeline-container');
  if (timelineContainer) {
    timelineContainer.innerHTML = timelineData.map((t, idx) => {
      const hasPhoto = isValidPhoto(t.image);
      return `
      <div class="timeline-node reveal-fade" data-timeline-index="${idx}">
        <span class="timeline-date">${t.date} &bull; ${t.kicker}</span>
        <h3 class="timeline-title">${t.title}</h3>
        <p class="timeline-desc">${t.desc}</p>
        
        <div class="timeline-image-holder" ${hasPhoto ? 'style="cursor: pointer;" title="Klik untuk melihat foto berlayar penuh"' : ''}>
          <div class="memory-placeholder ${t.aspect}" data-label="${t.tag}">
            ${hasPhoto ? `
              <img src="${t.image}" alt="${t.title}" loading="lazy">
            ` : `
              <div class="placeholder-overlay"></div>
              <div class="placeholder-content">
                <div class="placeholder-icon-ring" style="width: 44px; height: 44px; margin-bottom: 0.5rem;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <span class="placeholder-badge">${t.tag}</span>
                <p class="placeholder-hint" style="font-size: 0.75rem;">Memory Slot: ${t.title}</p>
              </div>
            `}
            <div class="placeholder-corners">
              <span class="corner tl"></span><span class="corner tr"></span>
              <span class="corner bl"></span><span class="corner br"></span>
            </div>
          </div>
        </div>

        <div class="timeline-meta-bar">
          <span class="timeline-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            ${t.location}
          </span>
          <span class="timeline-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            Episode 0${idx + 1}
          </span>
        </div>
      </div>
      `;
    }).join('');

    timelineContainer.querySelectorAll('.timeline-node').forEach(node => {
      const idx = node.dataset.timelineIndex;
      const t = timelineData[idx];
      if (t && t.image) {
        node.querySelector('.timeline-image-holder')?.addEventListener('click', () => {
          openLightbox({
            title: t.title,
            desc: t.desc,
            tag: t.tag,
            image: t.image
          });
        });
      }
    });
  }

  // 3. Render Dinding Kenangan Acak (Scattered Photo Wall)
  const momentsGrid = document.getElementById('moments-grid');
  const photoWallUpload = document.getElementById('photo-wall-upload');

  function normalizePhotoItem(item, idx) {
    let obj = typeof item === 'string' ? {
      id: `photo-${idx}`,
      image: item,
      title: item.split('/').pop().replace(/\.[^/.]+$/, "").replace(/%20|[_-]/g, " "),
      desc: `Foto kenangan 1KA19: ${item}`,
      tag: "MOMENT",
      category: "class",
      date: "2026"
    } : { ...item };

    if (!obj.cardType && obj.image) {
      const lower = obj.image.toLowerCase();
      if (lower.includes('roaster') || lower.includes('makan%20bareng') || lower.includes('makan bareng')) {
        obj.cardType = 'card-tall';
      } else if (lower.includes('barisan') || lower.includes('ketua') || lower.includes('lift') || lower.includes('kembar')) {
        obj.cardType = 'card-portrait';
      } else {
        obj.cardType = 'card-landscape';
      }
    }

    return {
      ...obj,
      tilt: obj.tilt || `tilt-${(idx % 6) + 1}`,
      tape: obj.tape || ((idx % 3 === 0) ? 'tape-slant' : ((idx % 3 === 1) ? 'tape-left' : 'tape-right'))
    };
  }

  function renderMoments(filter = 'all') {
    if (!momentsGrid) return;
    
    // Normalize any raw string entries
    for (let i = 0; i < photoWallGallery.length; i++) {
      photoWallGallery[i] = normalizePhotoItem(photoWallGallery[i], i);
    }

    const filtered = filter === 'all' 
      ? photoWallGallery 
      : photoWallGallery.filter(m => m.category === filter || (filter === 'class' && m.category === 'all'));

    momentsGrid.innerHTML = filtered.map(m => {
      const hasImg = Boolean(m.image);
      const isVideo = hasImg && m.image.toLowerCase().endsWith('.mp4');
      const cardTypeClass = m.cardType || 'card-landscape';
      return `
        <article class="polaroid-pin-card ${cardTypeClass} ${m.tilt} reveal-fade" data-moment-id="${m.id}" tabindex="0" role="button" title="Klik untuk melihat foto berlayar penuh">
          <div class="tape-strip ${m.tape}" aria-hidden="true"></div>
          <div class="polaroid-inner">
            <div class="polaroid-media">
              ${hasImg ? (isVideo ? `
                <video src="${m.image}" muted loop playsinline autoplay preload="metadata" class="polaroid-thumb-video"></video>
                <div class="polaroid-video-badge">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  <span>VIDEO</span>
                </div>
              ` : `
                <img src="${m.image}" alt="${m.title}" loading="lazy">
              `) : `
                <div class="placeholder-overlay"></div>
                <div class="placeholder-content" style="padding: 1.2rem; text-align: center;">
                  <div class="placeholder-icon-ring" style="width: 38px; height: 38px; margin: 0 auto 0.4rem;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                      <circle cx="12" cy="13" r="4"></circle>
                    </svg>
                  </div>
                  <span class="placeholder-badge" style="font-size: 0.65rem;">SLOT FOTO</span>
                </div>
              `}
            </div>
            <div class="polaroid-caption">
              <span class="polaroid-title">${m.title}</span>
              <div class="polaroid-meta">
                <span>${m.tag || 'MOMENT'}</span>
                <span class="polaroid-date">${m.date || '2026'}</span>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach click triggers to open in full Lightbox
    momentsGrid.querySelectorAll('.polaroid-pin-card').forEach(card => {
      const id = card.dataset.momentId;
      const moment = photoWallGallery.find(m => m.id === id);
      card.addEventListener('click', () => {
        if (moment && moment.image) {
          openLightbox(moment);
        } else if (moment) {
          openLightbox({
            ...moment,
            desc: moment.desc || "Slot foto ini siap ditempel dengan kenangan baru kelas 1KA19."
          });
        }
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });

    setupRevealObserver();
  }
  renderMoments('all');

  // Moments Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMoments(btn.dataset.filter);
    });
  });

  // Mobile View Switcher (Grid vs Feed) for Memory Wall
  const viewToggleBtns = document.querySelectorAll('.view-toggle-btn');
  function setMomentsView(viewMode) {
    if (!momentsGrid) return;
    if (viewMode === 'feed') {
      momentsGrid.classList.add('feed-mode');
    } else {
      momentsGrid.classList.remove('feed-mode');
    }
    viewToggleBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === viewMode);
    });
    localStorage.setItem('1ka19_moments_view', viewMode);
  }

  viewToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setMomentsView(btn.dataset.view);
    });
  });

  // Restore saved view preference
  const savedMomentsView = localStorage.getItem('1ka19_moments_view');
  if (savedMomentsView) {
    setMomentsView(savedMomentsView);
  }

  // Client-side Photo Upload Handler (+TEMPEL FOTO)
  if (photoWallUpload) {
    photoWallUpload.addEventListener('change', (e) => {
      const files = Array.from(e.target.files);
      if (!files.length) return;

      files.forEach((file, i) => {
        const objectUrl = URL.createObjectURL(file);
        const cleanName = file.name.replace(/\.[^/.]+$/, "").replace(/%20|[_-]/g, " ");
        photoWallGallery.unshift({
          id: `custom-upload-${Date.now()}-${i}`,
          image: objectUrl,
          title: cleanName || `Foto Tambahan #${i + 1}`,
          desc: "Foto kenangan yang baru saja ditempelkan ke dinding kenangan 1KA19.",
          tag: "TEMPELAN BARU",
          category: "class",
          date: "2026",
          tilt: `tilt-${((i + 1) % 6) + 1}`,
          tape: (i % 2 === 0) ? 'tape-slant' : 'tape-left'
        });
      });

      renderMoments('all');
      filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
    });
  }

  // 4. Render People Grid
  const peopleGrid = document.getElementById('people-grid');
  if (peopleGrid) {
    peopleGrid.innerHTML = peopleData.map((p, i) => {
      const hasPhoto = isValidPhoto(p.image);
      return `
      <div class="people-card reveal-fade" data-people-index="${i}">
        <div class="memory-placeholder ${p.aspect}" data-label="PORTRAIT 0${i + 1}" ${hasPhoto ? 'style="cursor: pointer;" title="Klik untuk melihat foto berlayar penuh"' : ''}>
          ${hasPhoto ? `
            <img src="${p.image}" alt="${p.name}" loading="lazy">
          ` : `
            <div class="placeholder-overlay"></div>
            <div class="placeholder-content">
              <div class="placeholder-icon-ring" style="width: 46px; height: 46px; margin-bottom: 0.5rem;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <span class="placeholder-badge">PORTRAIT</span>
              <span class="placeholder-meta">1KA19 SOUL</span>
            </div>
          `}
          <div class="placeholder-corners">
            <span class="corner tl"></span><span class="corner tr"></span>
            <span class="corner bl"></span><span class="corner br"></span>
          </div>
        </div>
        <h4 class="people-name">${p.name}</h4>
        <p class="people-sentence">${p.sentence}</p>
      </div>
      `;
    }).join('');

    peopleGrid.querySelectorAll('.people-card').forEach(card => {
      const idx = card.dataset.peopleIndex;
      const p = peopleData[idx];
      if (p && p.image) {
        card.querySelector('.memory-placeholder')?.addEventListener('click', () => {
          openLightbox({
            title: p.name,
            desc: p.sentence,
            tag: "THE SOULS",
            image: p.image
          });
        });
      }
    });
  }

  // 5. Render The Chaos (Interactive Voting with LocalStorage)
  const chaosGrid = document.getElementById('chaos-grid');
  function getChaosVotes() {
    const saved = localStorage.getItem('1ka19_chaos_votes');
    return saved ? JSON.parse(saved) : {};
  }

  function renderChaos() {
    if (!chaosGrid) return;
    const votes = getChaosVotes();

    chaosGrid.innerHTML = chaosList.map(item => {
      const count = votes[item.id] || 0;
      return `
        <div class="chaos-card reveal-fade">
          <div class="chaos-item-icon">${item.icon}</div>
          <h4 class="chaos-item-title">${item.title}</h4>
          <div class="chaos-action-row">
            <span class="chaos-votes"><strong id="vote-count-${item.id}">${count}</strong> votes</span>
            <button class="btn-vote" data-chaos-id="${item.id}" type="button">
              <span>+1 VOTE</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Attach vote listeners
    chaosGrid.querySelectorAll('.btn-vote').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = btn.dataset.chaosId;
        const currentVotes = getChaosVotes();
        currentVotes[id] = (currentVotes[id] || 0) + 1;
        localStorage.setItem('1ka19_chaos_votes', JSON.stringify(currentVotes));
        
        const countSpan = document.getElementById(`vote-count-${id}`);
        if (countSpan) countSpan.textContent = currentVotes[id];
        
        btn.classList.add('voted');
        btn.querySelector('span').textContent = 'VOTED!';
        setTimeout(() => {
          btn.classList.remove('voted');
          btn.querySelector('span').textContent = '+1 VOTE';
        }, 1200);
      });
    });
  }
  renderChaos();

  // 6. Render Inside Jokes Accordion
  const jokesContainer = document.getElementById('jokes-accordion');
  if (jokesContainer) {
    jokesContainer.innerHTML = insideJokesData.map((j, i) => `
      <div class="joke-item reveal-fade">
        <button class="joke-header" type="button" aria-expanded="false">
          <div class="joke-header-left">
            <span class="joke-index">0${i + 1}</span>
            <span class="joke-title">${j.title}</span>
          </div>
          <span class="joke-arrow">&darr;</span>
        </button>
        <div class="joke-body">
          <p class="joke-story">${j.story}</p>
          <p class="joke-punchline">${j.punchline}</p>
        </div>
      </div>
    `).join('');

    jokesContainer.querySelectorAll('.joke-header').forEach(header => {
      header.addEventListener('click', () => {
        const parent = header.closest('.joke-item');
        const isOpen = parent.classList.contains('open');
        
        // Close other items for neat accordion feel
        jokesContainer.querySelectorAll('.joke-item').forEach(item => {
          item.classList.remove('open');
          item.querySelector('.joke-header').setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
          parent.classList.add('open');
          header.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // 7. Render Letters (Capsule Notes)
  const lettersWall = document.getElementById('letters-wall');
  const letterForm = document.getElementById('letter-form');

  function getStoredLetters() {
    const stored = localStorage.getItem('1ka19_capsule_letters');
    return stored ? JSON.parse(stored) : initialLetters;
  }

  function renderLetters() {
    if (!lettersWall) return;
    const letters = getStoredLetters();
    lettersWall.innerHTML = letters.map(l => `
      <article class="letter-note reveal-fade">
        <div class="letter-note-header">1KA19 MEMORY ARCHIVE &bull; TIME CAPSULE</div>
        <h4 class="letter-salutation">Dear 1KA19,</h4>
        <p class="letter-text">“${escapeHtml(l.text)}”</p>
        <div class="letter-author-row">
          <span class="letter-author-name">— ${escapeHtml(l.author)}</span>
          <span class="letter-date-meta">${escapeHtml(l.date)}</span>
        </div>
      </article>
    `).join('');
    setupRevealObserver();
  }
  renderLetters();

  if (letterForm) {
    letterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const authorInput = document.getElementById('letter-author');
      const contentInput = document.getElementById('letter-content');
      const dateInput = document.getElementById('letter-date');

      if (!authorInput.value.trim() || !contentInput.value.trim()) return;

      const newLetter = {
        author: authorInput.value.trim(),
        text: contentInput.value.trim(),
        date: dateInput.value.trim() || "Semester 1 — 2026"
      };

      const letters = getStoredLetters();
      letters.unshift(newLetter); // Add to top
      localStorage.setItem('1ka19_capsule_letters', JSON.stringify(letters));

      authorInput.value = '';
      contentInput.value = '';
      renderLetters();

      // Smooth scroll to latest letter
      lettersWall.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'`=\/]/g, s => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;'
    }[s]));
  }


  /* ==========================================================================
     3. CINEMATIC INTRO CONTROLLER
     ========================================================================== */
  const introEl = document.getElementById('cinematic-intro');
  const step1 = document.getElementById('intro-step-1');
  const step2 = document.getElementById('intro-step-2');
  const step3 = document.getElementById('intro-step-3');
  const step4 = document.getElementById('intro-step-4');
  const btnOpenChapter = document.getElementById('btn-open-chapter');
  const btnReplay = document.getElementById('btn-replay-story');

  let introTimeout1, introTimeout2, introTimeout3, introTimeout4;

  function runCinematicIntro() {
    if (!introEl) return;
    document.body.classList.add('intro-active');
    introEl.classList.remove('fade-out', 'opened', 'portal-dive');

    // Reset all steps
    [step1, step2, step3, step4].forEach(s => s && s.classList.remove('active'));

    // Sequence timing
    // Step 1: Universitas Gunadarma Karawaci
    step1.classList.add('active');

    // Step 2: 2026
    introTimeout1 = setTimeout(() => {
      step1.classList.remove('active');
      step2.classList.add('active');
    }, 1800);

    // Step 3: 1KA19 THE FIRST CHAPTER
    introTimeout2 = setTimeout(() => {
      step2.classList.remove('active');
      step3.classList.add('active');
    }, 3400);

    // Step 4: Quote & Open button
    introTimeout3 = setTimeout(() => {
      step3.classList.remove('active');
      step4.classList.add('active');
    }, 5200);
  }

  function closeCinematicIntro() {
    clearTimeout(introTimeout1);
    clearTimeout(introTimeout2);
    clearTimeout(introTimeout3);
    clearTimeout(introTimeout4);

    // 1. Trigger the 3D Gunadarma Campus Portal Dive
    introEl.classList.add('portal-dive');

    // 2. Play soundtrack synchronized with dive
    if (typeof musicController !== 'undefined' && !musicController.isExplicitlyDisabled()) {
      musicController.play();
    }

    // 3. Open campus shutter curtains after the zoom surge begins
    setTimeout(() => {
      introEl.classList.add('opened');
    }, 550);

    // 4. Smoothly fade out intro and reveal the 1KA19 class world
    setTimeout(() => {
      introEl.classList.add('fade-out');
      document.body.classList.remove('intro-active');
    }, 1150);
  }

  if (introEl) {
    introEl.addEventListener('click', (e) => {
      if (e.target.closest('#btn-open-chapter')) return;
      if (step4 && !step4.classList.contains('active')) {
        clearTimeout(introTimeout1);
        clearTimeout(introTimeout2);
        clearTimeout(introTimeout3);
        [step1, step2, step3].forEach(s => s && s.classList.remove('active'));
        step4.classList.add('active');
      }
    });
  }

  if (btnOpenChapter) {
    btnOpenChapter.addEventListener('click', (e) => {
      e.stopPropagation();
      closeCinematicIntro();
    });
  }
  if (btnReplay) {
    btnReplay.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      runCinematicIntro();
    });
  }

  // Run intro on initial page load
  runCinematicIntro();


  /* ==========================================================================
     4. NAVBAR SCROLL & MOBILE MENU
     ========================================================================== */
  const nav = document.getElementById('main-nav');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  function toggleMobileMenu(open) {
    if (!mobileMenu || !mobileToggle) return;
    const shouldOpen = open !== undefined ? open : !mobileMenu.classList.contains('active');
    mobileToggle.setAttribute('aria-expanded', String(shouldOpen));
    mobileToggle.classList.toggle('open', shouldOpen);
    mobileMenu.classList.toggle('active', shouldOpen);
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
  }

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => toggleMobileMenu());

    // Close menu when clicking link
    mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        toggleMobileMenu(false);
      });
    });

    // Close when tapping outside the menu container
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        toggleMobileMenu(false);
      }
    });
  }


  /* ==========================================================================
     5. CINEMATIC LIGHTBOX MODAL
     ========================================================================== */
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxTag = document.getElementById('lightbox-tag');
  const lightboxPlaceholder = document.getElementById('lightbox-placeholder');

  function openLightbox(moment) {
    if (!lightbox) return;
    lightboxTitle.textContent = moment.title;
    lightboxDesc.textContent = moment.desc;
    lightboxTag.textContent = moment.tag;

    if (moment.image) {
      lightboxPlaceholder.classList.remove('aspect-landscape');
      lightboxPlaceholder.classList.add('has-real-photo');
      const isVideo = moment.image.toLowerCase().endsWith('.mp4');

      if (isVideo) {
        lightboxPlaceholder.classList.remove('is-portrait');
        lightboxPlaceholder.innerHTML = `
          <video src="${moment.image}" controls autoplay playsinline class="lightbox-real-photo lightbox-video"></video>
        `;
      } else {
        lightboxPlaceholder.innerHTML = `
          <img src="${moment.image}" alt="${moment.title}" class="lightbox-real-photo" loading="eager">
        `;

        const img = lightboxPlaceholder.querySelector('img');
        if (img) {
          const updateRatio = () => {
            if (img.naturalHeight > img.naturalWidth) {
              lightboxPlaceholder.classList.add('is-portrait');
            } else {
              lightboxPlaceholder.classList.remove('is-portrait');
            }
          };
          if (img.complete && img.naturalWidth > 0) {
            updateRatio();
          } else {
            img.onload = updateRatio;
          }
        }
      }
    } else {
      lightboxPlaceholder.classList.add('aspect-landscape');
      lightboxPlaceholder.classList.remove('has-real-photo', 'is-portrait');
      lightboxPlaceholder.innerHTML = `
        <div class="placeholder-overlay"></div>
        <div class="placeholder-corners">
          <span class="corner tl"></span><span class="corner tr"></span>
          <span class="corner bl"></span><span class="corner br"></span>
        </div>
        <div class="placeholder-content">
          <div class="placeholder-icon-ring" style="width: clamp(42px, 10vw, 58px); height: clamp(42px, 10vw, 58px);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
          </div>
          <span class="placeholder-badge" style="font-size: 0.85rem;">${moment.tag}</span>
          <p class="placeholder-hint" style="max-width: 400px; margin-top: 0.4rem;">
            Area foto berlayar penuh siap disematkan untuk momen ini.
          </p>
          <span class="placeholder-meta">UNIVERSITAS GUNADARMA KARAWACI</span>
        </div>
      `;
    }

    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    const vid = lightbox.querySelector('video');
    if (vid) {
      vid.pause();
    }
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function attachMomentLightboxTriggers() {
    document.querySelectorAll('.moment-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.momentId;
        const moment = momentsData.find(m => m.id === id);
        if (moment) openLightbox(moment);
      });
    });
  }

  // Hero Class Photo Lightbox Trigger
  const heroPhotoFrame = document.getElementById('hero-class-photo-frame');
  if (heroPhotoFrame) {
    heroPhotoFrame.addEventListener('click', () => {
      openLightbox({
        title: "1KA19 — The First Chapter",
        desc: "Potret kebersamaan kelas 1KA19 Sistem Informasi Universitas Gunadarma Karawaci (2026–2027). Satu kelas, satu awal, ribuan kenangan.",
        tag: "FOTO UTAMA KELAS",
        image: "assets/Photo/FOTO%20UTAMA%20KELAS.jpeg"
      });
    });
    heroPhotoFrame.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        heroPhotoFrame.click();
      }
    });
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  if (lightbox) {
    lightbox.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);

    // Mobile Swipe Gesture to dismiss Lightbox
    let touchStartY = 0;
    lightbox.addEventListener('touchstart', (e) => {
      if (e.changedTouches && e.changedTouches[0]) {
        touchStartY = e.changedTouches[0].screenY;
      }
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      if (e.changedTouches && e.changedTouches[0]) {
        const touchEndY = e.changedTouches[0].screenY;
        if (Math.abs(touchEndY - touchStartY) > 85) {
          closeLightbox();
        }
      }
    }, { passive: true });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });


  /* ==========================================================================
     6. GLOBAL SOUNDTRACK CONTROLLER (NIKI — EVERY SUMMERTIME)
     Single Audio Instance • Smooth Volume Fade • Persistent State
     ========================================================================== */
  const musicController = {
    audio: null,
    isPlaying: false,
    volume: 0.4,
    fadeTimer: null,
    isInitialized: false,

    init() {
      if (this.isInitialized) return;
      this.loadState();

      // Single Global Audio Instance
      const primaryAudioPath = 'assets/audio/soundtrack.mp3';
      const fallbackAudioPath = 'assets/audio/NIKI - Every Summertime (Lyrics) Every year we get older.mp3';

      this.audio = new Audio(primaryAudioPath);
      this.audio.loop = false;
      this.audio.preload = 'auto';
      this.audio.volume = 0; // Starts from 0 for smooth fadeIn

      // Audio Event Listeners
      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.updateUI(true);
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.updateUI(false);
      });

      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
        this.updateUI(false, true); // Ended state (never loops, never restarts)
      });

      this.audio.addEventListener('error', (e) => {
        if (this.audio && this.audio.src && this.audio.src.indexOf('soundtrack.mp3') !== -1) {
          this.audio.src = fallbackAudioPath;
          this.audio.load();
          if (this.isPlaying) {
            this.audio.play().catch(err => console.warn(err));
          }
        } else {
          console.warn('Soundtrack notice: Audio file check.', e);
          this.isPlaying = false;
          this.updateUI(false);
        }
      });

      this.bindControls();
      this.isInitialized = true;
    },

    play() {
      if (!this.audio) this.init();
      if (!this.audio) return;

      if (this.audio.ended) {
        this.audio.currentTime = 0;
      }

      const playPromise = this.audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.fadeIn(this.volume, 600);
            this.saveState(true);
          })
          .catch(err => {
            console.warn('Autoplay prevented by browser or waiting for user interaction:', err);
            this.updateUI(false);
          });
      }
    },

    pause() {
      if (!this.audio) return;
      this.fadeOut(400, () => {
        this.audio.pause();
        this.saveState(false);
      });
    },

    toggle() {
      if (!this.audio) this.init();
      if (this.isPlaying) {
        this.pause();
      } else {
        this.play();
      }
    },

    fadeIn(targetVolume = this.volume, duration = 600) {
      if (!this.audio) return;
      clearInterval(this.fadeTimer);
      const startVolume = this.audio.volume;
      const startTime = performance.now();

      this.fadeTimer = setInterval(() => {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const newVol = startVolume + (targetVolume - startVolume) * progress;
        this.audio.volume = Math.max(0, Math.min(1, newVol));

        if (progress >= 1) {
          clearInterval(this.fadeTimer);
          this.audio.volume = targetVolume;
        }
      }, 25);
    },

    fadeOut(duration = 400, onComplete) {
      if (!this.audio) {
        if (onComplete) onComplete();
        return;
      }
      clearInterval(this.fadeTimer);
      const startVolume = this.audio.volume;
      const startTime = performance.now();

      this.fadeTimer = setInterval(() => {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const newVol = startVolume * (1 - progress);
        this.audio.volume = Math.max(0, Math.min(1, newVol));

        if (progress >= 1) {
          clearInterval(this.fadeTimer);
          this.audio.volume = 0;
          if (onComplete) onComplete();
        }
      }, 25);
    },

    setVolume(val) {
      this.volume = Math.max(0, Math.min(1, parseFloat(val)));
      if (this.audio && this.isPlaying) {
        this.audio.volume = this.volume;
      }
      localStorage.setItem('1ka19_music_volume', this.volume);
    },

    saveState(enabled) {
      localStorage.setItem('1ka19_music_enabled', enabled ? 'true' : 'false');
    },

    loadState() {
      const savedVolume = localStorage.getItem('1ka19_music_volume');
      if (savedVolume !== null && !isNaN(parseFloat(savedVolume))) {
        this.volume = parseFloat(savedVolume);
      }
      const slider = document.getElementById('music-volume-slider');
      if (slider) {
        slider.value = this.volume;
      }
    },

    isExplicitlyDisabled() {
      return localStorage.getItem('1ka19_music_enabled') === 'false';
    },

    updateUI(playing, hasEnded = false) {
      const visualizer = document.getElementById('music-visualizer');
      const btnToggle = document.getElementById('btn-music-toggle');
      const statusText = document.getElementById('music-status-text');
      const navAudioToggle = document.getElementById('audio-toggle');

      if (visualizer) {
        visualizer.classList.toggle('playing', playing);
      }

      if (btnToggle) {
        const iconPlay = btnToggle.querySelector('.music-icon-play');
        const iconPause = btnToggle.querySelector('.music-icon-pause');
        if (iconPlay && iconPause) {
          iconPlay.style.display = playing ? 'none' : 'block';
          iconPause.style.display = playing ? 'block' : 'none';
        }
        btnToggle.setAttribute('aria-label', playing ? 'Pause background music' : 'Play background music');
        btnToggle.setAttribute('title', playing ? 'Pause soundtrack' : 'Play soundtrack');
      }

      if (statusText) {
        if (hasEnded) {
          statusText.textContent = 'the soundtrack has ended';
        } else if (playing) {
          statusText.textContent = 'playing soundtrack';
        } else {
          statusText.textContent = 'paused';
        }
      }

      if (navAudioToggle) {
        navAudioToggle.classList.toggle('playing', playing);
        navAudioToggle.setAttribute('aria-label', playing ? 'Pause soundtrack' : 'Play soundtrack');
      }
    },

    bindControls() {
      const btnToggle = document.getElementById('btn-music-toggle');
      const navAudioToggle = document.getElementById('audio-toggle');
      const volumeSlider = document.getElementById('music-volume-slider');

      if (btnToggle) {
        btnToggle.addEventListener('click', (e) => {
          e.stopPropagation();
          this.toggle();
        });
      }

      if (navAudioToggle) {
        navAudioToggle.addEventListener('click', (e) => {
          e.stopPropagation();
          this.toggle();
        });
      }

      if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
          this.setVolume(e.target.value);
        });
      }

      const btnHeroEnter = document.getElementById('btn-hero-enter');
      if (btnHeroEnter) {
        btnHeroEnter.addEventListener('click', () => {
          if (!this.isPlaying) {
            this.play();
          }
        });
      }
    }
  };

  // Initialize global music controller instance
  musicController.init();


  /* ==========================================================================
     7. PROFESSIONAL RICH ANIMATIONS SYSTEM (NASA / AWWWARDS TIER)
     ========================================================================== */

  // 1. Animated Stat Counter (Smooth Precision Count Up)
  let statsCounted = false;
  function runStatsCounter() {
    if (statsCounted) return;
    statsCounted = true;

    const statElements = document.querySelectorAll('.stat-card .stat-value');
    statElements.forEach(el => {
      const originalText = el.textContent.trim();
      const targetNum = parseInt(originalText.replace(/[^0-9]/g, ''), 10);
      
      if (!isNaN(targetNum) && targetNum > 0) {
        const startNum = targetNum > 100 ? targetNum - 40 : 0;
        const duration = 1800; // ms
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out expo curve for crisp deceleration
          const easeOut = 1 - Math.pow(2, -10 * progress);
          const currentVal = Math.round(startNum + (targetNum - startNum) * easeOut);

          el.textContent = currentVal;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = originalText;
          }
        };
        requestAnimationFrame(updateCounter);
      }
    });
  }

  // 2. Cascade Staggered Scroll Observer
  function setupRevealObserver() {
    const reveals = document.querySelectorAll('.reveal-fade:not(.revealed), .reveal-scale:not(.revealed)');
    if (!('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('revealed'));
      runStatsCounter();
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;

          // Trigger stats counter if entering class stats
          if (el.classList.contains('class-stats-grid') || el.closest('.class-stats-grid')) {
            runStatsCounter();
          }

          // Calculate staggered delay for grid & list children
          const parent = el.parentElement;
          if (parent && (parent.classList.contains('photo-wall-board') || 
                         parent.classList.contains('class-roster-grid') || 
                         parent.classList.contains('people-grid') || 
                         parent.classList.contains('class-stats-grid'))) {
            const siblings = Array.from(parent.children).filter(c => c.classList.contains('reveal-fade') || c.classList.contains('reveal-scale'));
            const idx = siblings.indexOf(el);
            if (idx >= 0) {
              const delay = Math.min((idx % 6) * 65, 360);
              el.style.transitionDelay = `${delay}ms`;
            }
          }

          el.classList.add('revealed');
          obs.unobserve(el);
        }
      });
    }, {
      rootMargin: '0px 0px -45px 0px',
      threshold: 0.08
    });

    reveals.forEach(el => observer.observe(el));
  }
  setupRevealObserver();

  // 3. Interactive 3D Card Hover Tilt Physics (Desktop)
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const interactiveCards = document.querySelectorAll('.polaroid-pin-card, .roster-card, .hero-frame-wrap');

    interactiveCards.forEach(card => {
      let isHovered = false;

      card.addEventListener('mouseenter', () => {
        isHovered = true;
      });

      card.addEventListener('mousemove', (e) => {
        if (!isHovered) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Gentle tilt angles (max 6 degrees for sleek luxury feel)
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px) scale(1.025)`;
      });

      card.addEventListener('mouseleave', () => {
        isHovered = false;
        card.style.transform = '';
      });
    });
  }

});

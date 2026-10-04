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
      name: "NAME PLACEHOLDER",
      nickname: "NICKNAME",
      role: "Student",
      quote: "Replace this with their own memorable sentence or words.",
      funFact: "Fun fact: Replace with their iconic habit."
    },
    {
      id: "02",
      name: "NAME PLACEHOLDER",
      nickname: "NICKNAME",
      role: "Student",
      quote: "Replace this with their own memorable sentence or words.",
      funFact: "Fun fact: Datang selalu 5 menit sebelum absen ditutup."
    },
    {
      id: "03",
      name: "NAME PLACEHOLDER",
      nickname: "NICKNAME",
      role: "Student",
      quote: "Replace this with their own memorable sentence or words.",
      funFact: "Fun fact: Spesialis pembagi hotspot di pojok kelas."
    },
    {
      id: "04",
      name: "NAME PLACEHOLDER",
      nickname: "NICKNAME",
      role: "Student",
      quote: "Replace this with their own memorable sentence or words.",
      funFact: "Fun fact: Penyelamat deadline kelompok jam 23:59."
    },
    {
      id: "05",
      name: "NAME PLACEHOLDER",
      nickname: "NICKNAME",
      role: "Student",
      quote: "Replace this with their own memorable sentence or words.",
      funFact: "Fun fact: Pembuat meme kelas paling spontan."
    },
    {
      id: "06",
      name: "NAME PLACEHOLDER",
      nickname: "NICKNAME",
      role: "Student",
      quote: "Replace this with their own memorable sentence or words.",
      funFact: "Fun fact: Kopi andalan sebelum kelas pagi Karawaci."
    }
  ];

  /**
   * Memory Timeline Data (Chronicles)
   */
  const timelineData = [
    {
      date: "23 SEP 2026",
      kicker: "THE BEGINNING",
      title: "First Day as College Students",
      desc: "Hari pertama menginjakkan kaki di gedung kampus Gunadarma Karawaci. Masih mencari ruangan, masih canggung saling sapa, dan belum tahu siapa yang akan jadi teman tertawa sepanjang semester.",
      location: "Kampus Gunadarma Karawaci",
      tag: "FIRST DAY",
      aspect: "aspect-landscape"
    },
    {
      date: "OKT 2026",
      kicker: "ACADEMIC LIFE",
      title: "The First Lecture & Confusions",
      desc: "Materi pengantar algoritma dan konsep sistem informasi pertama kali dibuka. Muka-muka panik mulai terlihat saling melirik satu sama lain.",
      location: "Ruang Kelas 1KA19",
      tag: "FIRST LECTURE",
      aspect: "aspect-portrait"
    },
    {
      date: "NOV 2026",
      kicker: "THE BATTLE",
      title: "First Group Assignment Chaos",
      desc: "Kerja kelompok pertama. Pembagian tugas di grup chat, janji kumpul jam 1 tapi baru lengkap jam 3, diakhiri makan bareng yang lebih lama dari ngerjain tugasnya.",
      location: "Kantin & Selasar Kampus",
      tag: "FIRST ASSIGNMENT",
      aspect: "aspect-landscape"
    },
    {
      date: "DES 2026",
      kicker: "STAGE FRIGHT",
      title: "First Class Presentation",
      desc: "Slide presentasi yang diedit sampai menit-menit terakhir. Rasa deg-degan saat berdiri di depan kelas, dan tawa lega saat sesi tanya jawab selesai.",
      location: "Podium Kelas 1KA19",
      tag: "FIRST PRESENTATION",
      aspect: "aspect-landscape"
    },
    {
      date: "2026 — 2027",
      kicker: "INTIMACY",
      title: "The First Laugh & Late-Night Hangouts",
      desc: "Saat obrolan bukan lagi seputar tugas kuliah, melainkan cerita hidup masing-masing sambil menunggu macet Karawaci mereda.",
      location: "Warung Kopi & Sudut Karawaci",
      tag: "FIRST LAUGH",
      aspect: "aspect-polaroid"
    }
  ];

  /**
   * Photo Memory Wall (Moments)
   */
  const momentsData = [
    {
      id: "m1",
      category: "class",
      title: "Ruang Kelas Sebelum Dosen Masuk",
      desc: "Suasana pagi yang tenang, beberapa orang masih ngantuk dan yang lain saling pinjam catatan.",
      aspect: "aspect-landscape",
      span2: false,
      tag: "IN CLASS"
    },
    {
      id: "m2",
      category: "hangout",
      title: "Sore Santai Setelah Kuliah Terakhir",
      desc: "Menikmati langit sore Karawaci sambil menghabiskan sisa obrolan sebelum pulang ke rumah masing-masing.",
      aspect: "aspect-portrait",
      span2: false,
      tag: "HANGOUTS"
    },
    {
      id: "m3",
      category: "class",
      title: "Papan Tulis & Catatan Bersama",
      desc: "Coretan rumus dan flowchart yang memenuhi papan saat belajar kelompok dadakan.",
      aspect: "aspect-polaroid",
      span2: false,
      tag: "IN CLASS"
    },
    {
      id: "m4",
      category: "chaos",
      title: "Candid Momen Tertawa Lepas",
      desc: "Momen spontan ketika lelucon garing tiba-tiba terdengar sangat lucu di jam rawan mengantuk.",
      aspect: "aspect-cinematic",
      span2: true,
      tag: "CANDID"
    },
    {
      id: "m5",
      category: "hangout",
      title: "Makan Siang Bareng 1KA19",
      desc: "Meja kantin yang digabung jadi panjang agar semua bisa duduk bareng.",
      aspect: "aspect-square",
      span2: false,
      tag: "HANGOUTS"
    },
    {
      id: "m6",
      category: "chaos",
      title: "Ekspresi Selesai Kuis",
      desc: "Campuran rasa pasrah, lega, dan saling tanya 'lu tadi nomor tiga jawab apa?'.",
      aspect: "aspect-landscape",
      span2: false,
      tag: "CANDID"
    }
  ];

  /**
   * The People Memory Cards
   */
  const peopleData = [
    {
      id: "p1",
      name: "NAME PLACEHOLDER 01",
      sentence: "“Replace this with their memorable phrase or memory of 1KA19.”",
      aspect: "aspect-portrait"
    },
    {
      id: "p2",
      name: "NAME PLACEHOLDER 02",
      sentence: "“Replace this with their memorable phrase or memory of 1KA19.”",
      aspect: "aspect-portrait"
    },
    {
      id: "p3",
      name: "NAME PLACEHOLDER 03",
      sentence: "“Replace this with their memorable phrase or memory of 1KA19.”",
      aspect: "aspect-portrait"
    },
    {
      id: "p4",
      name: "NAME PLACEHOLDER 04",
      sentence: "“Replace this with their memorable phrase or memory of 1KA19.”",
      aspect: "aspect-portrait"
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

  // 1. Render Class Roster Grid
  const rosterContainer = document.getElementById('class-roster-container');
  if (rosterContainer) {
    rosterContainer.innerHTML = classMembers.map(m => `
      <div class="roster-card">
        <span class="roster-number">${m.id}</span>
        <div class="roster-thumb-wrap">
          <div class="memory-placeholder aspect-portrait" data-label="MEMBER ${m.id}">
            <div class="placeholder-overlay"></div>
            <div class="placeholder-corners">
              <span class="corner tl"></span><span class="corner tr"></span>
              <span class="corner bl"></span><span class="corner br"></span>
            </div>
            <div class="placeholder-content">
              <div class="placeholder-icon-ring" style="width: 42px; height: 42px; margin-bottom: 0.4rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <span class="placeholder-badge" style="font-size: 0.65rem;">PHOTO ${m.id}</span>
              <span class="placeholder-meta" style="font-size: 0.58rem;">1KA19 ARCHIVE</span>
            </div>
          </div>
        </div>
        <h4 class="roster-name">${m.name}</h4>
        <span class="roster-role">${m.nickname} &bull; ${m.role}</span>
        <p class="roster-quote">${m.quote}</p>
        <span class="roster-fact">${m.funFact}</span>
      </div>
    `).join('');
  }

  // 2. Render Timeline
  const timelineContainer = document.getElementById('timeline-container');
  if (timelineContainer) {
    timelineContainer.innerHTML = timelineData.map((t, idx) => `
      <div class="timeline-node reveal-fade">
        <span class="timeline-date">${t.date} &bull; ${t.kicker}</span>
        <h3 class="timeline-title">${t.title}</h3>
        <p class="timeline-desc">${t.desc}</p>
        
        <div class="timeline-image-holder">
          <div class="memory-placeholder ${t.aspect}" data-label="${t.tag}">
            <div class="placeholder-overlay"></div>
            <div class="placeholder-corners">
              <span class="corner tl"></span><span class="corner tr"></span>
              <span class="corner bl"></span><span class="corner br"></span>
            </div>
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
    `).join('');
  }

  // 3. Render Moments Grid (Masonry Scrapbook)
  const momentsGrid = document.getElementById('moments-grid');
  function renderMoments(filter = 'all') {
    if (!momentsGrid) return;
    const filtered = filter === 'all' 
      ? momentsData 
      : momentsData.filter(m => m.category === filter);

    momentsGrid.innerHTML = filtered.map(m => `
      <div class="moment-card ${m.span2 ? 'span-2' : ''} reveal-fade" data-moment-id="${m.id}">
        <div class="memory-placeholder ${m.aspect}" data-label="${m.tag}">
          <div class="placeholder-overlay"></div>
          <div class="placeholder-corners">
            <span class="corner tl"></span><span class="corner tr"></span>
            <span class="corner bl"></span><span class="corner br"></span>
          </div>
          <div class="placeholder-content">
            <div class="placeholder-icon-ring" style="width: 48px; height: 48px; margin-bottom: 0.5rem;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </div>
            <span class="placeholder-badge">${m.tag}</span>
            <p class="placeholder-hint" style="font-size: 0.78rem;">Klik untuk mode sinematik</p>
          </div>
        </div>
        <div class="moment-caption-bar">
          <h4 class="moment-title">${m.title}</h4>
          <span class="moment-tag">${m.tag}</span>
        </div>
      </div>
    `).join('');

    // Attach lightbox triggers to newly rendered moments
    attachMomentLightboxTriggers();
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

  // 4. Render People Grid
  const peopleGrid = document.getElementById('people-grid');
  if (peopleGrid) {
    peopleGrid.innerHTML = peopleData.map((p, i) => `
      <div class="people-card reveal-fade">
        <div class="memory-placeholder ${p.aspect}" data-label="PORTRAIT 0${i + 1}">
          <div class="placeholder-overlay"></div>
          <div class="placeholder-corners">
            <span class="corner tl"></span><span class="corner tr"></span>
            <span class="corner bl"></span><span class="corner br"></span>
          </div>
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
        </div>
        <h4 class="people-name">${p.name}</h4>
        <p class="people-sentence">${p.sentence}</p>
      </div>
    `).join('');
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
  const btnSkipIntro = document.getElementById('btn-skip-intro');
  const btnReplay = document.getElementById('btn-replay-story');

  let introTimeout1, introTimeout2, introTimeout3, introTimeout4;

  function runCinematicIntro() {
    if (!introEl) return;
    document.body.classList.add('intro-active');
    introEl.classList.remove('fade-out', 'opened');

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

    introEl.classList.add('opened');
    setTimeout(() => {
      introEl.classList.add('fade-out');
      document.body.classList.remove('intro-active');
    }, 600);
  }

  if (introEl) {
    introEl.addEventListener('click', (e) => {
      if (step4 && !step4.classList.contains('active') && !e.target.closest('#btn-open-chapter') && !e.target.closest('#btn-skip-intro')) {
        clearTimeout(introTimeout1);
        clearTimeout(introTimeout2);
        clearTimeout(introTimeout3);
        [step1, step2, step3].forEach(s => s && s.classList.remove('active'));
        step4.classList.add('active');
      }
    });
  }

  if (btnOpenChapter) {
    btnOpenChapter.addEventListener('click', () => {
      closeCinematicIntro();
      if (!musicController.isExplicitlyDisabled()) {
        musicController.play();
      }
    });
  }
  if (btnSkipIntro) {
    btnSkipIntro.addEventListener('click', () => {
      closeCinematicIntro();
      if (!musicController.isExplicitlyDisabled()) {
        musicController.play();
      }
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

    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
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

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  if (lightbox) {
    lightbox.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);
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
     7. SCROLL INTERSECTION OBSERVER (REVEAL ANIMATIONS)
     ========================================================================== */
  function setupRevealObserver() {
    const reveals = document.querySelectorAll('.reveal-fade:not(.revealed), .reveal-scale:not(.revealed)');
    if (!('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    });

    reveals.forEach(el => observer.observe(el));
  }
  setupRevealObserver();

});

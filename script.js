const sampleCards = [
    {
      name: "Momo Ayase",
      desc: "Momo",
      tag: "Dan Da Dan",
      imageUrl: "https://static.wikia.nocookie.net/dandadan/images/c/ce/Momo_Ayase_Anime_Infobox_2.png/revision/latest?cb=20241116233954"
    },
    {
      name: "Ken Takakura",
      desc: "Ken",
      tag: "Dan Da Dan",
      imageUrl: "https://static.wikia.nocookie.net/dandadan/images/e/e0/Okarun_Anime_Infobox_2.png/revision/latest?cb=20241218045003"
    },
    {
      name: "Aira Shiratori",
      desc: "Aira",
      tag: "Dan Da Dan",
      imageUrl: "https://static.wikia.nocookie.net/dandadan/images/3/35/Aira_Shiratori_Infobox.png/revision/latest?cb=20241216161245"
    },
    {
      name: "Turbo Granny",
      desc: "Turbo",
      tag: "Dan Da Dan",
      imageUrl: "https://static.wikia.nocookie.net/dandadan/images/8/84/Turbo_Granny_%28Doll%29_Infobox_%28Anime%29.png/revision/latest?cb=20241031174232"
    },
    {
      name: "Alucard",
      desc: "Alucard",
      tag: "Hellsing Ultimate",
      imageUrl: "https://i.redd.it/isj6ltwzsavf1.jpeg"
    },
    {
      name: "Integra Hellsing",
      desc: "Integra",
      tag: "Hellsing Ultimate",
      imageUrl: "https://static.wikia.nocookie.net/p__/images/5/58/Integra_Hellsing.png/revision/latest?cb=20240220141728&path-prefix=protagonist"
    },
    {
      name: "Seras Victoria",
      desc: "Seras",
      tag: "Hellsing Ultimate",
      imageUrl: "https://preview.redd.it/seras-victoria-hellsing-ultimate-vs-whole-mha-verse-who-wins-v0-lu7d4or9k56e1.jpg?width=600&format=pjpg&auto=webp&s=ce6e1b220c2743bc9ec4bf1cfbf0cc132b6a8df0"
    },
    {
      name: "Rip Van Winkle",
      desc: "Rip Van",
      tag: "Hellsing Ultimate",
      imageUrl: "https://static.wikia.nocookie.net/villainous-beauties/images/e/ec/Rip_van_Winkle.jpg/revision/latest?cb=20250522145946"
    },
    {
      name: "Padre Alexander Anderson",
      desc: "Padre Alexander",
      tag: "Hellsing Ultimate",
      imageUrl: "https://preview.redd.it/alexander-anderson-hellsing-ultimate-v0-yylas85gzxm91.jpg?width=640&crop=smart&auto=webp&s=781cdfe3f6b6d7279e425f0a391e73e830cecb99"
    },
    {
      name: "Denji",
      desc: "Denji",
      tag: "Chawsaw man",
      imageUrl: "https://metagalaxia.com.br/wp-content/uploads/2024/03/Chainsaw-Man-Denji.webp"
    },
    {
      name: "Pochita",
      desc: "Pochita",
      tag: "Chawsaw man",
      imageUrl: "https://static.wikia.nocookie.net/chainsaw-man/images/5/54/Pochita_anime_design.png/revision/latest/scale-to-width/360?cb=20220919121110"
    },
    {
      name: "Power",
      desc: "Power",
      tag: "Chawsaw man",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Power_%28Chainsaw_Man%29.png/250px-Power_%28Chainsaw_Man%29.png"
    },
    {
      name: "Makima",
      desc: "Makima",
      tag: "Chawsaw man",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN8JIaveVWmxRXFIBUqiPh_o6mGDe8l2_6fA&s"
    },
    {
      name: "Aki Hayakawa",
      desc: "Aki",
      tag: "Chawsaw man",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_0jOTfe9DC2nygElDVAmm9qMHcKIzQcN3j2erAWJoLOlqAkNAp9nGC4&s=10"
    },
    {
      name: "Inosuke Hashibira",
      desc: "Inosuke",
      tag: "Demon Slayer",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXhj75GYLWrj236K3svAyB9ZYM6-hpKtYj9jHudLeFP18DjU4XexoK-J7&s=10"
    },
    {
      name: "Rengoku Kyojuro",
      desc: "Rengoku",
      tag: "Demon Slayer",
      imageUrl: "https://i.redd.it/0avxf1uq26sb1.jpg"
    },
    {
      name: "Tanjiro Kamado",
      desc: "Tanjiro",
      tag: "Demon Slayer",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/ea/Tanjirou_manga.png"
    },
    {
      name: "Nezuko Kamado",
      desc: "Nezuko",
      tag: "Demon Slayer",
      imageUrl: "https://ovicio.com.br/wp-content/uploads/2023/10/20231028-demon-slayer-nezuko-555x555.jpg"
    },
    {
      name: "Zenitsu Agatsuma",
      desc: "Zenitsu",
      tag: "Demon Slayer",
      imageUrl: "https://easydrawingguides.com/wp-content/uploads/2023/10/how-to-draw-zenitsu-agatsuma-from-demon-slayer-featured-image-1200.png"
    },
    {
      name: "Muzan Kibutsuji",
      desc: "Muzan",
      tag: "Demon Slayer",
      imageUrl: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/0/0e/Muzan_Kibutsuji_Full_Body_%28Anime%29.png/revision/latest?cb=20210731042132"
    },
    {
      name: "Jonathan Joestar",
      desc: "Jonathan",
      tag: "JoJo's Bizarre Adventure",
      imageUrl: "https://static.wikitide.net/deathbattlewiki/5/55/Portrait.jonathanjoestar.png"
    },
    {
      name: "Joseph Joestar",
      desc: "Joestar",
      tag: "JoJo's Bizarre Adventure",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/fc/JosephJoestar.jpg"
    },
    {
      name: "Jotaro Kujo",
      desc: "Kujo",
      tag: "JoJo's Bizarre Adventure",
      imageUrl: "https://static.wikia.nocookie.net/jjba/images/9/9a/JotaroKujo.png/revision/latest?cb=20170204224518&path-prefix=pt-br"
    },
    {
      name: "Josuke Higashikata",
      desc: "Josuke",
      tag: "JoJo's Bizarre Adventure",
      imageUrl: "https://static.wikia.nocookie.net/jjba/images/8/81/JosukeAnime.webp/revision/latest/scale-to-width/360?cb=20230610163959&path-prefix=pt-br"
    },
    {
      name: "Giorno Giovanna",
      desc: "Giorno",
      tag: "JoJo's Bizarre Adventure",
      imageUrl: "https://static.wikitide.net/deathbattlewiki/d/df/Portrait.giornogiovanna.png"
    },
    {
      name: "Jolyne Cujoh",
      desc: "Jolyne",
      tag: "JoJo's Bizarre Adventure",
      imageUrl: "https://i.pinimg.com/736x/f6/c0/cf/f6c0cf105f081123774a7fe68a67385d.jpg"
    },
    {
      name: "Takaba Fumihiko",
      desc: "Takaba",
      tag: "Jujutsu Kaisen",
      imageUrl: "https://static.wikia.nocookie.net/jujutsukaisen/images/e/ea/Fumihiko_Takaba.webp/revision/latest?cb=20250319000643&path-prefix=pt-br"
    },
    {
      name: "Nobara Kugisaki",
      desc: "Nobara",
      tag: "Jujutsu Kaisen",
      imageUrl: "https://i.pinimg.com/736x/ba/5a/70/ba5a7064b4b1f9b260df25901008e21c.jpg"
    },
    {
      name: "Megumi Fushiguro",
      desc: "Megumi",
      tag: "Jujutsu Kaisen",
      imageUrl: "https://i.pinimg.com/736x/41/a4/11/41a411cc9ffd53a4a47f178b7f6b5d45.jpg"
    },
    {
      name: "Ryomen Sukuna",
      desc: "Sukuna",
      tag: "Jujutsu Kaisen",
      imageUrl: "https://www.shutterstock.com/image-illustration/ryomen-sukuna-anime-jujutsu-kaisen-600w-2234259231.jpg"
    },
    {
      name: "Satoru Gojo",
      desc: "Gojo",
      tag: "Jujutsu Kaisen",
      imageUrl: "https://i.pinimg.com/736x/70/ea/79/70ea79448ca47722bbf65946a18eb129.jpg"
    },
    {
      name: "Yuji Itadori",
      desc: "Itadori",
      tag: "Jujutsu Kaisen",
      imageUrl: "https://i.pinimg.com/736x/45/1a/eb/451aebcd2aea3028dc33cb33b0bed020.jpg"
    },
    {
      name: "Arataka Reigen",
      desc: "Reigen",
      tag: "Mob Psycho 100",
      imageUrl: "https://sketchok.com/images/articles/06-anime/080-mob-psycho-100/05/16.jpg"
    },
    {
      name: "Dimple",
      desc: "Ekubo",
      tag: "Mob Psycho 100",
      imageUrl: "https://i.pinimg.com/736x/cc/f8/b3/ccf8b32afd8c9d080a9495868c433064.jpg"
    },
    {
      name: "Shigeo Kageyama",
      desc: "Mob",
      tag: "Mob Psycho 100",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIgzwnCm-E7gJGkyTbRZ5qeMt0HWwXnSrxttwuxbJzJsYsAIhGYOlj77g&s=10"
    },
    {
      name: "Senua",
      desc: "Senua",
      tag: "Hellblade",
      imageUrl: "https://cms-assets.xboxservices.com/assets/22/44/2244ca80-ee5b-429c-8ee7-b93221ed67fb.jpg?n=Senuas-Saga-Hellblade-II_GLP-Page-Hero-0_Enhanced_1083x1222.jpg"
    },
    {
      name: "Senua",
      desc: "Senua",
      tag: "Hellblade",
      imageUrl: "https://cms-assets.xboxservices.com/assets/22/44/2244ca80-ee5b-429c-8ee7-b93221ed67fb.jpg?n=Senuas-Saga-Hellblade-II_GLP-Page-Hero-0_Enhanced_1083x1222.jpg"
    },
    {
      name: "Nagisa Furukawa",
      desc: "Nagisa",
      tag: "Clannad",
      imageUrl: "https://static.wikia.nocookie.net/c__/images/5/5b/Nagisajustmarried.jpg/revision/latest?cb=20100716161340&path-prefix=clannad"
    },
    {
      name: "Tomoya Okazaki",
      desc: "Tomoya",
      tag: "Clannad",
      imageUrl: "https://i.pinimg.com/474x/6d/71/98/6d7198991de6223effa299ef5c17d54e.jpg"
    },
    {
      name: "Griffith",
      desc: "Griffith",
      tag: "Berserk",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7a/GriffithBerserk.png"
    },
    {
      name: "Casca",
      desc: "Casca",
      tag: "Berserk",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiCK2upF88eghN_mfpfdXsJ21dacJIBnSMSPfdURxIXRqaQFzek5wyZHQ&s=10"
    },
    {
      name: "Rei Ayanami",
      desc: "Rei",
      tag: "Evangelion",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/53/Rei_Ayanami.jpg"
    },
    {
      name: "Asuka Langley Soryu",
      desc: "Asuka",
      tag: "Evangelion",
      imageUrl: "https://i1.sndcdn.com/avatars-000306166239-gfiap0-t1080x1080.jpg"
    },
    {
      name: "Shinji Ikari",
      desc: "Shinji",
      tag: "Evangelion",
      imageUrl: "https://preview.redd.it/i-love-shinji-ikari-what-are-your-opinions-on-him-v0-7og75gg5bk9f1.jpg?width=640&crop=smart&auto=webp&s=b017a6d07a0e11720c9c6008124e00885a92ccb7"
    },
    {
      name: "Bojji",
      desc: "Bojji",
      tag: "Ousama ranking",
      imageUrl: "https://static.wikia.nocookie.net/ousamaranking/images/b/be/Bojji_2022_anime_intro.jpg/revision/latest?cb=20220427001856"
    },
    {
      name: "Kage",
      desc: "Kage",
      tag: "Ousama ranking",
      imageUrl: "https://static.wikia.nocookie.net/ousamaranking/images/6/6e/Kage.png/revision/latest?cb=20210824160143"
    },
    {
      name: "John Marston",
      desc: "John Marston",
      tag: "Red Dead Redemption",
      imageUrl: "https://www.notebookcheck.info/fileadmin/Notebooks/News/_nc4/John-marston-rdr-2-switch-2.jpg"
    },
    {
      name: "Dutch",
      desc: "Dutch van der Linde",
      tag: "Red Dead Redemption",
      imageUrl: "https://static.wikia.nocookie.net/reddead/images/8/87/RDR2_Dutch_van_der_Linde_PC.png/revision/latest?cb=20210201222847&path-prefix=pt-br"
    },
  ];

  let cards = [...sampleCards];
  let flippedSet = new Set();

  // ─── Render ───────────────────────────────────────────────────────────────────
  function render({ shuffle = false } = {}) {
    const grid = document.getElementById('cardGrid');
    grid.innerHTML = '';
    cards.forEach((card, i) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'card-wrapper';
      wrapper.style.animationDelay = `${i * 60}ms`;

      const isFlipped = flippedSet.has(i);

      wrapper.innerHTML = `
        <div class="card ${isFlipped ? 'flipped' : ''}" data-index="${i}" onclick="flipCard(this)">
          <div class="card-face card-front">
            <div class="image-area">
              ${card.imageUrl
                ? `<img src="${card.imageUrl}" alt="${card.name}" loading="lazy">`
                : `<div class="placeholder-img">
                     <div class="ph-icon">🖼️</div>
                     <div class="ph-text">Sem imagem</div>
                   </div>`
              }
            </div>
            <div class="hint">
              <span class="hint-text">Clique para revelar</span>
              <span class="hint-icon">?</span>
            </div>
          </div>
          <div class="card-face card-back">
            <div class="back-icon">
              <svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
            </div>
            <div class="card-name">${card.name}</div>
            ${card.desc ? `<div class="card-desc">${card.desc}</div>` : ''}
            ${card.tag ? `<div class="tag">${card.tag}</div>` : ''}
          </div>
        </div>`;
      grid.appendChild(wrapper);
    });
    updateStats();
    if (shuffle) shuffleCards();
  }

  function flipCard(cardEl) {
    const i = parseInt(cardEl.dataset.index);
    if (flippedSet.has(i)) {
      flippedSet.delete(i);
      cardEl.classList.remove('flipped');
    } else {
      flippedSet.add(i);
      cardEl.classList.add('flipped');
      showTooltip(cards[i].name);
    }
    updateStats();
  }

  // ─── Stats & progress ─────────────────────────────────────────────────────────
  function updateStats() {
    const total = cards.length;
    const revealed = flippedSet.size;
    document.getElementById('totalCount').textContent = total;
    document.getElementById('revealedCount').textContent = revealed;
    document.getElementById('remainCount').textContent = total - revealed;
    const pct = total ? (revealed / total) * 100 : 0;
    document.getElementById('progressFill').style.width = pct + '%';
  }

  // ─── Controls ─────────────────────────────────────────────────────────────────
  function resetAll() {
    flippedSet.clear();
    render();
  }

  function shuffleCards() {
    cards = cards.sort(() => Math.random() - 0.5);
    flippedSet.clear();
    render();
  }


  // Instalacao do aplicativo
  let installPromptEvent;
  const installBanner = document.getElementById('installBanner');
  const installButton = document.getElementById('installButton');
  const installMessage = document.getElementById('installMessage');
  const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;

  function showInstallBanner() {
    if (!isStandalone && !localStorage.getItem('flashcards-install-dismissed')) installBanner.hidden = false;
  }

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installPromptEvent = event;
    showInstallBanner();
  });

  installButton.addEventListener('click', async () => {
    if (installPromptEvent) {
      installPromptEvent.prompt();
      await installPromptEvent.userChoice;
      installPromptEvent = null;
      installBanner.hidden = true;
    } else if (isIos) {
      installMessage.textContent = 'No Safari, toque em Compartilhar e depois em Adicionar a Tela de Inicio.';
      installButton.hidden = true;
    }
  });

  document.getElementById('installDismiss').addEventListener('click', () => {
    localStorage.setItem('flashcards-install-dismissed', 'true');
    installBanner.hidden = true;
  });
  window.addEventListener('appinstalled', () => { installPromptEvent = null; installBanner.hidden = true; });
  if (isIos && !isStandalone) showInstallBanner();
  if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js'));
  // ─── Tooltip ──────────────────────────────────────────────────────────────────
  let tooltipTimer;
  function showTooltip(text) {
    clearTimeout(tooltipTimer);
    const tip = document.getElementById('tooltip');
    tip.textContent = text;
    tip.classList.add('show');
    tooltipTimer = setTimeout(() => tip.classList.remove('show'), 2200);
  }

  // ─── Modal ───────────────────────────────────────────────────────────────────
  let pendingImageUrl = null;
  let pendingImageDataUrl = null;

  function openModal() {
    document.getElementById('modalOverlay').classList.add('open');
    document.getElementById('cardName').value = '';
    document.getElementById('cardDesc').value = '';
    document.getElementById('cardTag').value = '';
    document.getElementById('uploadContent').innerHTML = `
      <div class="upload-icon">🖼️</div>
      <p>Clique para selecionar uma imagem</p>`;
    pendingImageUrl = null;
    pendingImageDataUrl = null;
  }

  function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
  }

  function handleOverlayClick(e) {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  }

  function previewImage(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      pendingImageDataUrl = ev.target.result;
      document.getElementById('uploadContent').innerHTML = `
        <img class="preview-img" src="${pendingImageDataUrl}" alt="preview">
        <p style="margin-top:8px;font-size:11px;">${file.name}</p>`;
    };
    reader.readAsDataURL(file);
  }

  function addCard() {
    const name = document.getElementById('cardName').value.trim();
    if (!name) {
      document.getElementById('cardName').focus();
      document.getElementById('cardName').style.borderColor = '#c0392b';
      setTimeout(() => document.getElementById('cardName').style.borderColor = '', 1200);
      return;
    }
    cards.unshift({
      name,
      desc: document.getElementById('cardDesc').value.trim(),
      tag: document.getElementById('cardTag').value.trim(),
      imageUrl: pendingImageDataUrl || null
    });
    flippedSet = new Set([...flippedSet].map(i => i + 1)); // shift indices
    closeModal();
    render();
  }

  // ─── Init ─────────────────────────────────────────────────────────────────────
  render({ shuffle: true });
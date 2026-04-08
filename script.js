document.addEventListener('DOMContentLoaded', () => {
  // Stage Elements
  const stageOuter = document.getElementById('stage-outer');
  const stageInner = document.getElementById('stage-inner');
  const stageDna = document.getElementById('stage-dna');
  const stageEdu = document.getElementById('stage-edu');
  const stagePub = document.getElementById('stage-pub');
  const stagePres = document.getElementById('stage-pres');
  const stageCentriole = document.getElementById('stage-centriole');
  const stageLeadership = document.getElementById('stage-leadership');
  const stageProjects = document.getElementById('stage-projects');

  // Interactive Elements
  const outerCell = document.getElementById('outer-cell');
  const nucleus = document.getElementById('cell-nucleus');
  const backBtn = document.getElementById('back-to-nucleus');
  const backBtnEdu = document.getElementById('back-to-cell-from-edu');
  const backBtnPub = document.getElementById('back-to-cell-from-pub');
  const backBtnPres = document.getElementById('back-to-cell-from-pres');
  const backBtnCentriole = document.getElementById('back-to-cell-from-centriole');
  const backBtnLeadership = document.getElementById('back-to-cell-from-leadership');
  const backBtnProjects = document.getElementById('back-to-cell-from-projects');
  const backBtnHome = document.getElementById('back-to-home');

  // Education & Work Organelles
  const erGroup = document.getElementById('er-group');
  const mitoGroup = document.getElementById('mito-group');
  const mitoGroup2 = document.getElementById('mito-group-2');
  const centrioleGroup = document.getElementById('centriole-group');
  const golgiGroup = document.getElementById('golgi-group');
  const vacuoleGroup = document.getElementById('vacuole-group');

  // Stage 1 -> Stage 2 logic
  outerCell.addEventListener('click', () => {
    stageOuter.classList.remove('active');
    stageOuter.classList.add('hidden');
    window.location.hash = 'cell';

    setTimeout(() => {
      stageInner.classList.remove('hidden');
      stageInner.classList.add('active');
    }, 800);
  });

  // Back to Stage 1 from Stage 2
  if (backBtnHome) {
    backBtnHome.addEventListener('click', () => {
      stageInner.classList.remove('active');
      stageInner.classList.add('hidden');
      window.location.hash = 'home';

      setTimeout(() => {
        stageOuter.classList.remove('hidden');
        stageOuter.classList.add('active');
      }, 800);
    });
  }

  // Stage 2 -> Stage 3 logic (Education / DNA) from Nucleus
  nucleus.addEventListener('click', () => {
    stageInner.classList.remove('active');
    stageInner.classList.add('hidden');
    window.location.hash = 'education';

    setTimeout(() => {
      stageDna.classList.remove('hidden');
      stageDna.classList.add('active');
      initDNA();
    }, 800);
  });

  // Back to Stage 2 from Stage 3
  backBtn.addEventListener('click', () => {
    stageDna.classList.remove('active');
    stageDna.classList.add('hidden');
    window.location.hash = 'cell';

    setTimeout(() => {
      stageInner.classList.remove('hidden');
      stageInner.classList.add('active');
    }, 800);
  });

  // Stage 2 -> Stage 5 logic (Publications) from Mitochondria
  const openPublications = () => {
    stageInner.classList.remove('active');
    stageInner.classList.add('hidden');
    window.location.hash = 'publications';

    setTimeout(() => {
      stagePub.classList.remove('hidden');
      stagePub.classList.add('active');
      initPublications();
    }, 800);
  };

  if (mitoGroup) mitoGroup.addEventListener('click', openPublications);

  const openPresentations = () => {
    stageInner.classList.remove('active');
    stageInner.classList.add('hidden');
    window.location.hash = 'presentations';

    setTimeout(() => {
      stagePres.classList.remove('hidden');
      stagePres.classList.add('active');
      initPresentations();
    }, 800);
  };

  if (mitoGroup2) mitoGroup2.addEventListener('click', openPresentations);

  // Back to Stage 2 from Stage 5
  if (backBtnPub) {
    backBtnPub.addEventListener('click', () => {
      stagePub.classList.remove('active');
      stagePub.classList.add('hidden');
      window.location.hash = 'cell';

      setTimeout(() => {
        stageInner.classList.remove('hidden');
        stageInner.classList.add('active');
      }, 800);
    });
  }

  if (backBtnPres) {
    backBtnPres.addEventListener('click', () => {
      stagePres.classList.remove('active');
      stagePres.classList.add('hidden');
      window.location.hash = 'cell';

      setTimeout(() => {
        stageInner.classList.remove('hidden');
        stageInner.classList.add('active');
      }, 800);
    });
  }

  const openPublicTalks = () => {
    stageInner.classList.remove('active');
    stageInner.classList.add('hidden');
    window.location.hash = 'public-talks';

    setTimeout(() => {
      stageCentriole.classList.remove('hidden');
      stageCentriole.classList.add('active');
      initCentrioleTalks();
    }, 800);
  };

  if (centrioleGroup) centrioleGroup.addEventListener('click', openPublicTalks);

  if (backBtnCentriole) {
    backBtnCentriole.addEventListener('click', () => {
      stageCentriole.classList.remove('active');
      stageCentriole.classList.add('hidden');
      window.location.hash = 'cell';

      setTimeout(() => {
        stageInner.classList.remove('hidden');
        stageInner.classList.add('active');
      }, 800);
    });
  }

  const openLeadership = () => {
    stageInner.classList.remove('active');
    stageInner.classList.add('hidden');
    window.location.hash = 'leadership';

    setTimeout(() => {
      stageLeadership.classList.remove('hidden');
      stageLeadership.classList.add('active');
      initLeadership();
    }, 800);
  };

  if (golgiGroup) golgiGroup.addEventListener('click', openLeadership);

  if (backBtnLeadership) {
    backBtnLeadership.addEventListener('click', () => {
      stageLeadership.classList.remove('active');
      stageLeadership.classList.add('hidden');
      window.location.hash = 'cell';

      setTimeout(() => {
        stageInner.classList.remove('hidden');
        stageInner.classList.add('active');
      }, 800);
    });
  }

  const openProjects = () => {
    stageInner.classList.remove('active');
    stageInner.classList.add('hidden');
    window.location.hash = 'projects';

    setTimeout(() => {
      stageProjects.classList.remove('hidden');
      stageProjects.classList.add('active');
      initProjects();
    }, 800);
  };

  if (vacuoleGroup) vacuoleGroup.addEventListener('click', openProjects);

  if (backBtnProjects) {
    backBtnProjects.addEventListener('click', () => {
      stageProjects.classList.remove('active');
      stageProjects.classList.add('hidden');
      window.location.hash = 'cell';

      setTimeout(() => {
        stageInner.classList.remove('hidden');
        stageInner.classList.add('active');
      }, 800);
    });
  }

  // Stage 2 -> Stage 4 logic (Work Experience / Cards) from ER
  const openWorkExperience = () => {
    stageInner.classList.remove('active');
    stageInner.classList.add('hidden');
    window.location.hash = 'work-experience';

    setTimeout(() => {
      stageEdu.classList.remove('hidden');
      stageEdu.classList.add('active');
      initEducation();
    }, 800);
  };

  if (erGroup) erGroup.addEventListener('click', openWorkExperience);

  // Back to Stage 2 from Stage 4
  backBtnEdu.addEventListener('click', () => {
    stageEdu.classList.remove('active');
    stageEdu.classList.add('hidden');
    window.location.hash = 'cell';

    setTimeout(() => {
      stageInner.classList.remove('hidden');
      stageInner.classList.add('active');
    }, 800);
  });

  // Timeline Data
  let experiences = [];
  let educations = [];
  let publications = [];
  let presentations = [];
  let publicTalks = [];
  let leadership = [];
  let projects = [];

  // Load data from data.js variable
  if (typeof portfolioData !== 'undefined') {
    experiences = portfolioData.experiences || [];
    educations = portfolioData.educations || [];
    publications = portfolioData.publications || [];
    presentations = portfolioData.presentations || [];
    publicTalks = portfolioData.publicTalks || [];
    leadership = portfolioData.leadership || [];
    projects = portfolioData.projects || [];
  } else {
    console.error('portfolioData is not defined. Make sure data.js is loaded.');
  }

  function initPublications() {
    const pubListContainer = document.getElementById('pub-list-container');
    if (!pubListContainer) return;
    pubListContainer.innerHTML = '';

    publications.forEach((pubHtml, index) => {
      const pubDiv = document.createElement('div');
      pubDiv.className = 'pub-item';
      pubDiv.style.animationDelay = `${index * 0.1}s`;
      pubDiv.innerHTML = pubHtml;
      pubListContainer.appendChild(pubDiv);
    });
  }

  function initPresentations() {
    const presListContainer = document.getElementById('pres-list-container');
    if (!presListContainer) return;
    presListContainer.innerHTML = '';

    presentations.forEach((presHtml, index) => {
      const presDiv = document.createElement('div');
      presDiv.className = 'pub-item';
      presDiv.style.animationDelay = `${index * 0.1}s`;
      presDiv.innerHTML = presHtml;
      presListContainer.appendChild(presDiv);
    });
  }

  function initCentrioleTalks() {
    const listContainer = document.getElementById('centriole-list-container');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    publicTalks.forEach((talk, index) => {
      const item = document.createElement('div');
      item.className = 'centriole-item';
      item.style.animationDelay = `${index * 0.1}s`;
      
      const thumbUrl = `https://img.youtube.com/vi/${talk.videoId}/hqdefault.jpg`;

      item.innerHTML = `
        <div class="centriole-thumbnail-container">
          <img src="${thumbUrl}" alt="${talk.title}" class="centriole-thumbnail" loading="lazy">
          <div class="centriole-play-overlay">
            <i class="fa-solid fa-play centriole-play-icon"></i>
          </div>
        </div>
        <div class="centriole-content">
          <div class="centriole-title" title="${talk.title}">${talk.title}</div>
          <div class="centriole-subtitle">${talk.subtitle}</div>
          <a href="${talk.link}" target="_blank" rel="noopener noreferrer" class="centriole-link">
            Watch on YouTube <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      `;

      item.addEventListener('click', (e) => {
        if (!e.target.closest('a')) {
             window.open(talk.link, '_blank', 'noopener,noreferrer');
        }
      });

      listContainer.appendChild(item);
    });
  }

  function initLeadership() {
    const listContainer = document.getElementById('leadership-list-container');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    leadership.forEach((lead, index) => {
      const item = document.createElement('div');
      item.className = 'pub-item';
      item.style.animationDelay = `${index * 0.1}s`;

      item.innerHTML = `
        <div class="leadership-year">${lead.year}</div>
        <div class="leadership-role">${lead.role}</div>
        <div class="leadership-company">${lead.company}</div>
        ${lead.desc ? `<div class="leadership-desc">${lead.desc}</div>` : ''}
      `;

      listContainer.appendChild(item);
    });
  }

  function initProjects() {
    const gridContainer = document.getElementById('projects-grid-container');
    if (!gridContainer) return;
    gridContainer.innerHTML = '';

    projects.forEach((cat, index) => {
      const card = document.createElement('div');
      card.className = 'category-card';
      card.style.animationDelay = `${index * 0.1}s`;

      const itemCount = cat.items.length;

      card.innerHTML = `
        <div class="category-banner">
          <img src="${cat.thumbnail}" alt="${cat.category}" class="category-thumb" loading="lazy">
          <div class="category-thumb-overlay"></div>
        </div>
        <div class="category-info">
          <div class="category-title">${cat.category}</div>
          <div class="category-count">${itemCount} project${itemCount > 1 ? 's' : ''}</div>
        </div>
        <div class="category-items">
          ${cat.items.map(item => `
            <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="project-item-link">
              ${item.title} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.75rem; margin-left: auto;"></i>
            </a>
          `).join('')}
        </div>
      `;

      card.addEventListener('click', (e) => {
        if (!e.target.closest('.project-item-link')) {
          card.classList.toggle('expanded');
        }
      });

      gridContainer.appendChild(card);
    });
  }

  function initDNA() {
    const dnaContainer = document.getElementById('dna-helix');
    const timelineContainer = document.getElementById('timeline-container');
    dnaContainer.innerHTML = '';
    timelineContainer.innerHTML = '';

    const totalBasePairs = 40;
    const itemsInterval = Math.floor(totalBasePairs / educations.length);

    for (let i = 0; i < totalBasePairs; i++) {
      // Create DNA Base Pair
      const pair = document.createElement('div');
      pair.className = 'base-pair';
      pair.style.animationDelay = `${i * -0.15}s`;

      const leftStrand = document.createElement('div');
      leftStrand.className = 'strand left-strand';
      const rightStrand = document.createElement('div');
      rightStrand.className = 'strand right-strand';
      const connection = document.createElement('div');
      connection.className = 'connection';

      pair.appendChild(leftStrand);
      pair.appendChild(connection);
      pair.appendChild(rightStrand);
      dnaContainer.appendChild(pair);

      // Create Timeline Card if it aligns with this base pair
      if (i % itemsInterval === 0 && (i / itemsInterval) < educations.length) {
        const eduIndex = Math.floor(i / itemsInterval);
        const edu = educations[eduIndex];

        const card = document.createElement('div');
        // Use eduIndex to alternate strictly left/right:
        card.className = `timeline-card ${eduIndex % 2 === 0 ? 'left' : 'right'}`;

        // Add some top offset so the first card doesn't hit the very top edge
        const topPercentage = (i / totalBasePairs) * 100;
        card.style.top = `${topPercentage}%`;

        card.innerHTML = `
                    <div class="card-year">${edu.year}</div>
                    <div class="card-role">${edu.icon} ${edu.degree}</div>
                    <div class="card-company">@ ${edu.school}</div>
                    <div class="card-desc" style="margin-top: 15px; text-align: left; line-height: 1.4;">${edu.desc}</div>
                `;

        timelineContainer.appendChild(card);
      }
    }
  }

  function initEducation() {
    const eduTimeline = document.getElementById('edu-timeline-container');
    eduTimeline.innerHTML = '';

    experiences.forEach((exp, index) => {
      const card = document.createElement('div');
      card.className = 'edu-card';
      card.style.animationDelay = `${index * 0.2}s`;

      card.innerHTML = `
            <div class="edu-icon" style="font-size: 1.5rem;">💼</div>
            <div class="edu-content">
                <div class="edu-year">${exp.year}</div>
                <div class="edu-degree">${exp.role}</div>
                <div class="edu-school">${exp.company}</div>
                <div class="edu-desc" style="color: #94a3b8; font-size: 0.9rem; margin-top: 0.5rem; line-height: 1.4;">${exp.desc}</div>
            </div>
        `;
      eduTimeline.appendChild(card);
    });
  }

  // Protein Synthesis Animation Logic
  const colors = ['#f43f5e', '#38bdf8', '#a3e635', '#facc15', '#c084fc', '#fb923c'];

  stageEdu.addEventListener('scroll', () => {
    const scrollHeight = stageEdu.scrollHeight - stageEdu.clientHeight;
    if (scrollHeight <= 0) return;

    const scrollPercent = stageEdu.scrollTop / scrollHeight;
    const ribosome = document.getElementById('ribosome');
    const aaChain = document.getElementById('aa-chain');

    if (!ribosome || !aaChain) return;

    // Move ribosome down from 10% to 90%
    const topPos = 10 + (scrollPercent * 80);
    ribosome.style.top = `${topPos}%`;

    // Calculate how many amino acids we should have
    // Roughly 3 amino acids per experience card
    const maxAA = experiences.length * 3;
    const currentAA = Math.floor(scrollPercent * maxAA);

    const existingAA = aaChain.children.length;

    if (currentAA > existingAA) {
      for (let i = existingAA; i < currentAA; i++) {
        const color = colors[i % colors.length];

        // 1) Incoming amino acid animation
        const incoming = document.createElement('div');
        incoming.className = 'incoming-aa';
        incoming.style.backgroundColor = color;
        incoming.style.color = color;
        ribosome.appendChild(incoming);
        setTimeout(() => { if (incoming.parentNode) incoming.remove(); }, 500);

        // 2) Amino acid added to chain
        const aa = document.createElement('div');
        aa.className = 'amino-acid';
        aa.style.backgroundColor = color;
        aa.style.color = color;
        aaChain.appendChild(aa);

        // 3) Outgoing folded protein if max length reached
        if (i === maxAA - 1) {
          setTimeout(() => {
            const outgoing = document.createElement('div');
            outgoing.className = 'outgoing-protein';
            ribosome.appendChild(outgoing);
            setTimeout(() => { if (outgoing.parentNode) outgoing.remove(); }, 2000);
          }, 300);
        }
      }
    } else if (currentAA < existingAA) {
      for (let i = existingAA; i > currentAA; i--) {
        if (aaChain.lastChild) {
          aaChain.removeChild(aaChain.lastChild);
        }
      }
    }
  });

  // --- Deep Linking (Hash Routing) ---
  function loadFromHash() {
    const hash = window.location.hash;
    if (!hash || hash === '#home') return; // Default to cover

    const stages = ['stage-outer', 'stage-inner', 'stage-dna', 'stage-edu', 'stage-pub', 'stage-pres', 'stage-centriole', 'stage-leadership', 'stage-projects'];
    let targetId = '';

    if (hash === '#cell') targetId = 'stage-inner';
    else if (hash === '#publications') targetId = 'stage-pub';
    else if (hash === '#presentations') targetId = 'stage-pres';
    else if (hash === '#work-experience') targetId = 'stage-edu';
    else if (hash === '#education') targetId = 'stage-dna';
    else if (hash === '#public-talks') targetId = 'stage-centriole';
    else if (hash === '#leadership') targetId = 'stage-leadership';
    else if (hash === '#projects') targetId = 'stage-projects';

    if (targetId) {
      stages.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          if (id === targetId) {
            el.classList.remove('hidden');
            el.classList.add('active');
          } else {
            el.classList.remove('active');
            el.classList.add('hidden');
          }
        }
      });

      // Initialize data if needed
      if (hash === '#publications') initPublications();
      if (hash === '#presentations') initPresentations();
      if (hash === '#work-experience') initEducation();
      if (hash === '#education') initDNA();
      if (hash === '#public-talks') initCentrioleTalks();
      if (hash === '#leadership') initLeadership();
      if (hash === '#projects') initProjects();
    }
  }

  // Run once on load
  loadFromHash();

});

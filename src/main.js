import './styles.css';

const logo = '/logo-jml.png';

// Substitua somente este objeto pelos dados reais antes da publicação.
const CONTACT_CONFIG = {
  whatsapp: '+55 11 94420-1533',
  phone: '+55 11 94420-1533',
  email: '',
  serviceArea: 'Atendimento residencial — região a confirmar'
};

const icons = {
  bolt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/></svg>',
  home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z"/><path d="M9 21v-7h6v7M8 10h.01M12 10h.01M16 10h.01"/></svg>',
  spark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2ZM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
  menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7A8.5 8.5 0 1 1 20.5 11.5Z"/><path d="M8.2 8.1c.2-.4.5-.5.8-.5h.6c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c-.1.1-.1.3 0 .5.4.7 1 1.3 1.7 1.7.2.1.4.2.5 0l.7-.8c.2-.2.3-.2.6-.1l1.5.7c.2.1.3.3.3.5 0 .5-.2 1-.6 1.2-.4.3-1.1.4-1.7.2-1-.3-2.1-1-3.1-2-1-1-1.7-2.1-2-3.1-.2-.6-.1-1.3.1-1.7Z"/></svg>'
};

const services = [
  {
    number: '01',
    icon: icons.bolt,
    label: 'Parte elétrica',
    title: 'Base segura para a sua casa.',
    description: 'Instalação e manutenção elétrica feitas com organização, atenção aos detalhes e foco no uso real de cada ambiente.',
    items: ['Tomadas, interruptores, luminárias, plafons e spots', 'Chuveiros e ventiladores de teto', 'Quadros, disjuntores e circuitos dedicados', 'Diagnóstico de falhas e curtos-circuitos', 'Adequação e melhoria de instalações existentes']
  },
  {
    number: '02',
    icon: icons.spark,
    label: 'Automação',
    title: 'Mais controle. Menos complicação.',
    description: 'Modernize a rotina com dispositivos inteligentes configurados para funcionar do seu jeito e no seu ritmo.',
    items: ['Interruptores e tomadas inteligentes', 'Iluminação, sensores e ventiladores automatizados', 'Comandos por aplicativo', 'Assistentes de voz, quando compatível', 'Horários e cenários para equipamentos compatíveis']
  },
  {
    number: '03',
    icon: icons.shield,
    label: 'Manutenção',
    title: 'O problema aparece. A JM resolve.',
    description: 'Inspeção visual, testes elétricos e manutenção preventiva ou corretiva para devolver tranquilidade à sua rotina.',
    items: ['Disjuntores desarmando', 'Tomadas sem energia e lâmpadas piscando', 'Aquecimento de tomadas e conexões', 'Identificação de sobrecargas', 'Manutenção preventiva e corretiva']
  }
];

function serviceCard(service) {
  return `
    <article class="service-card reveal">
      <div class="service-card__top">
        <span class="service-card__number">${service.number}</span>
        <span class="icon-box">${service.icon}</span>
      </div>
      <p class="eyebrow">${service.label}</p>
      <h3>${service.title}</h3>
      <p class="service-card__description">${service.description}</p>
      <ul class="service-list">
        ${service.items.map(item => `<li><span class="check">✓</span>${item}</li>`).join('')}
      </ul>
      <a class="text-link" href="#contato" aria-label="Solicitar orçamento para ${service.label}">Quero resolver <span>↗</span></a>
    </article>
  `;
}

function contactLink() {
  const raw = CONTACT_CONFIG.whatsapp.replace(/\D/g, '');
  if (raw.length >= 10) {
    const message = encodeURIComponent('Olá, JM! Gostaria de solicitar um orçamento.');
    return `https://wa.me/${raw}?text=${message}`;
  }
  return '#contato';
}

function contactValue(value, fallback) {
  return value || `<span class="config-placeholder">${fallback}</span>`;
}

function app() {
  document.querySelector('#app').innerHTML = `
    <div class="site-shell">
      <div class="announcement"><span class="pulse"></span><span>Elétrica residencial &nbsp;·&nbsp; Automação &nbsp;·&nbsp; Manutenção</span><a href="#contato">Solicite seu orçamento <span>↗</span></a></div>
      <header class="site-header">
        <a class="brand" href="#inicio" aria-label="JM Serviços Elétricos — início"><img src="${logo}" alt="JM Serviços Elétricos" /></a>
        <nav class="desktop-nav" aria-label="Navegação principal">
          <a href="#servicos">Serviços</a><a href="#diferenciais">Diferenciais</a><a href="#processo">Como funciona</a>
        </nav>
        <a class="header-cta" href="${contactLink()}">Falar com a JM <span>↗</span></a>
        <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false">${icons.menu}</button>
      </header>
      <div class="mobile-menu" aria-hidden="true"><a href="#servicos">Serviços</a><a href="#diferenciais">Diferenciais</a><a href="#processo">Como funciona</a><a class="mobile-menu__cta" href="${contactLink()}">Falar com a JM ↗</a></div>

      <main>
        <section class="hero" id="inicio">
          <div class="hero__gridline hero__gridline--one"></div><div class="hero__gridline hero__gridline--two"></div>
          <div class="hero__copy reveal">
            <p class="eyebrow eyebrow--yellow"><span class="eyebrow-dot"></span>Energia que funciona. Tecnologia que acompanha.</p>
            <h1>Uma casa mais <em>segura.</em><br />Uma rotina mais <em>inteligente.</em></h1>
            <p class="hero__lead">Serviços elétricos residenciais pensados para deixar tudo no lugar: da instalação essencial à automação que simplifica o seu dia.</p>
            <div class="hero__actions"><a class="button button--yellow" href="#contato">Solicitar orçamento ${icons.arrow}</a><a class="button button--ghost" href="#servicos">Conhecer serviços <span>↓</span></a></div>
            <div class="hero__note"><span class="note-line"></span><span>Atendimento claro, execução organizada e soluções adequadas ao seu ambiente.</span></div>
          </div>
          <div class="hero__visual reveal">
            <div class="visual-halo"></div>
            <div class="visual-card visual-card--main"><img src="${logo}" alt="Logo JM Serviços Elétricos" /><span class="visual-card__caption">MANUTENÇÃO ELÉTRICA RESIDENCIAL</span></div>
            <div class="visual-tag visual-tag--top"><span class="tag-dot"></span> Segurança primeiro</div>
            <div class="visual-tag visual-tag--bottom">JM <span>／</span> 01</div>
            <div class="visual-cross visual-cross--one">＋</div><div class="visual-cross visual-cross--two">＋</div>
          </div>
        </section>

        <section class="intro-strip"><div class="section-wrap intro-strip__inner"><p>Para quem não quer <span>improviso</span> na parte elétrica.</p><div class="intro-strip__line"></div><p class="muted">Residencial · Prático · Sob medida</p></div></section>

        <section class="section services-section" id="servicos">
          <div class="section-wrap">
            <div class="section-heading reveal"><div><p class="eyebrow">O que fazemos</p><h2>Serviço bem feito começa<br /><span>por entender o problema.</span></h2></div><p class="section-heading__side">Da troca de uma tomada à modernização completa da instalação, a JM cuida da parte elétrica da sua casa com método e atenção.</p></div>
            <div class="services-grid">${services.map(serviceCard).join('')}</div>
          </div>
        </section>

        <section class="section difference-section" id="diferenciais">
          <div class="section-wrap difference-layout">
            <div class="difference-statement reveal"><p class="eyebrow eyebrow--yellow">Por que JM?</p><h2>Menos susto.<br /><span>Mais confiança.</span></h2><p>A elétrica da sua casa não precisa ser um mistério. A gente explica o que está acontecendo, organiza o que precisa ser feito e entrega uma solução que faz sentido para a sua rotina.</p><a class="button button--yellow" href="#contato">Conversar sobre meu caso ${icons.arrow}</a></div>
            <div class="principles reveal"><div class="principle"><span class="principle__index">01</span><div><h3>Diagnóstico claro</h3><p>Você entende o problema antes de decidir o próximo passo.</p></div></div><div class="principle"><span class="principle__index">02</span><div><h3>Execução organizada</h3><p>Mais cuidado com o ambiente e menos interferência na sua rotina.</p></div></div><div class="principle"><span class="principle__index">03</span><div><h3>Modernização possível</h3><p>Automação aplicada com simplicidade, quando fizer sentido para você.</p></div></div><div class="principle"><span class="principle__index">04</span><div><h3>Segurança em primeiro lugar</h3><p>Decisões técnicas voltadas para uma instalação mais confiável.</p></div></div></div>
          </div>
        </section>

        <section class="section process-section" id="processo">
          <div class="section-wrap"><div class="section-heading reveal"><div><p class="eyebrow">Como funciona</p><h2>Do primeiro contato<br /><span>à solução.</span></h2></div><p class="section-heading__side">Um processo direto, sem linguagem complicada e sem etapas desnecessárias.</p></div><div class="process-grid"><div class="process-step reveal"><span>01</span><div class="step-icon">↗</div><h3>Você chama</h3><p>Conta o que está acontecendo ou o que gostaria de instalar.</p></div><div class="process-connector"></div><div class="process-step reveal"><span>02</span><div class="step-icon">⌁</div><h3>A gente entende</h3><p>Fazemos as perguntas certas para direcionar o atendimento.</p></div><div class="process-connector"></div><div class="process-step reveal"><span>03</span><div class="step-icon">✓</div><h3>Você decide</h3><p>Recebe uma orientação clara para seguir com segurança.</p></div></div></div>
        </section>

        <section class="cta-section"><div class="cta-pattern"></div><div class="section-wrap cta-inner reveal"><div><p class="eyebrow eyebrow--dark">Vamos colocar isso em ordem?</p><h2>Seu próximo passo<br /><em>começa aqui.</em></h2></div><a class="button button--dark" href="#contato">Solicitar orçamento ${icons.arrow}</a></div></section>

        <section class="section contact-section" id="contato"><div class="section-wrap contact-layout"><div class="contact-copy reveal"><p class="eyebrow">Fale com a JM</p><h2>Descreva o que você<br /><span>precisa resolver.</span></h2><p>Envie uma mensagem para conversar sobre o seu caso e entender o melhor caminho para o seu ambiente.</p><a class="contact-whatsapp" href="${contactLink()}">${icons.whatsapp}<span><small>WhatsApp</small><strong>${CONTACT_CONFIG.whatsapp ? CONTACT_CONFIG.whatsapp : 'Configure seu número'}</strong></span><span class="contact-whatsapp__arrow">↗</span></a></div><div class="contact-details reveal"><div class="detail-row"><span class="detail-label">Atendimento</span><strong>${contactValue(CONTACT_CONFIG.serviceArea, 'Configure a região de atendimento')}</strong></div><div class="detail-row"><span class="detail-label">Telefone</span><strong>${contactValue(CONTACT_CONFIG.phone, 'Configure seu telefone')}</strong></div>${CONTACT_CONFIG.email ? `<div class="detail-row"><span class="detail-label">E-mail</span><strong>${CONTACT_CONFIG.email}</strong></div>` : ''}<div class="config-note">Os campos acima são editáveis no arquivo <code>src/main.js</code>. Substitua os placeholders pelos dados reais antes de publicar.</div></div></div></section>
      </main>
      <footer class="site-footer"><div class="section-wrap footer-inner"><a class="brand brand--footer" href="#inicio"><img src="${logo}" alt="JM Serviços Elétricos" /></a><p>Energia que funciona.<br />Tecnologia que acompanha.</p><div class="footer-meta"><span>© ${new Date().getFullYear()} JM Serviços Elétricos</span><a href="#inicio">Voltar ao topo ↑</a></div></div></footer>
    </div>
  `;

  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!open));
    mobileMenu.classList.toggle('is-open', !open);
    mobileMenu.setAttribute('aria-hidden', String(open));
    menuToggle.innerHTML = open ? icons.menu : icons.close;
  });
  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false'); mobileMenu.classList.remove('is-open'); mobileMenu.setAttribute('aria-hidden', 'true'); menuToggle.innerHTML = icons.menu;
  }));

  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}

app();

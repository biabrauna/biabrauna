// Menu hamburguer
const menuHamburguer = document.querySelector('.menu-hamburguer');
const navResponsive = document.querySelector('.nav-responsive');

menuHamburguer.addEventListener('click', () => {
    menuHamburguer.classList.toggle('change');
    navResponsive.style.display = menuHamburguer.classList.contains('change') ? 'block' : 'none';
});

// Rola até a seção descontando a altura do header fixo
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const headerHeight = document.querySelector('header').offsetHeight;
    window.scrollTo({ top: section.offsetTop - headerHeight, behavior: 'smooth' });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        scrollToSection(link.getAttribute('href').substring(1));
        if (menuHamburguer.classList.contains('change')) {
            menuHamburguer.classList.remove('change');
            navResponsive.style.display = 'none';
        }
    });
});

// Botão de voltar ao topo
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
scrollToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
window.addEventListener('scroll', () => {
    scrollToTopBtn.style.display = document.documentElement.scrollTop > 20 ? 'block' : 'none';
});

AOS.init();

// Traduções. O HTML já vem em português; o inglês substitui os textos com data-i18n.
const translations = {
  pt: {
    "header.role": "AI Engineer",
    "nav.home": "Início",
    "nav.experience": "Experiência",
    "nav.portfolio": "Projetos",
    "nav.skills": "Habilidades",
    "nav.about": "Sobre",
    "nav.contact": "Contato",
    "home.greeting": "Olá, eu sou",
    "home.subtitle": "AI <span>Engineer</span> · Python · <span>LLMs</span> em produção",
    "home.description": "Estudante de Engenharia Eletrônica e de Computação na UFRJ. Coloco LLMs em produção: pipelines de IA generativa que escrevem catálogos de e-commerce na FashionAI, e automações em Python e um chat com RAG na Globo.",
    "home.viewProjects": "Ver projetos",
    "home.or": "ou",
    "home.viewExperience": "Ver experiência",
    "experience.title": "Experiência <span>profissional</span>",
    "xp.globo.role": "Desenvolvedora Python Júnior · Automação",
    "xp.globo.org": "Globo (via SysManager) · jun/2026",
    "xp.globo.1": "Sustento e evoluo cerca de 40 automações RPA em Python, de rotinas diárias a processos mensais de fechamento contábil.",
    "xp.globo.2": "Atuo no desenvolvimento de um chat com RAG (LangChain) que responde perguntas a partir de documentos internos.",
    "xp.globo.3": "No hackathon interno, construí um Agent Gateway (Flask, protocolo A2A, MongoDB) para rotear tarefas entre agentes de IA e desenvolvi agentes que se comunicam entre si por A2A.",
    "xp.globo.4": "Investigo e corrijo incidentes em produção, registrando causa raiz e melhorias para evitar reincidência.",
    "xp.fashion.role": "Desenvolvedora Full Stack &amp; IA",
    "xp.fashion.org": "FashionAI · IA generativa para e-commerce · mar/2025",
    "xp.fashion.1": "Pipelines com LLMs que classificam produtos entre +42 categorias e geram descrições, nomes e tags de SEO para catálogos de marcas de moda, com refinamento de prompts a partir do feedback de cada cliente.",
    "xp.fashion.2": "Sistema de versionamento de prompts com variáveis por cliente, que reduziu em ~60% o tempo de configuração de novos clientes.",
    "xp.fashion.3": "Busca vetorial híbrida (Qdrant, vetores densos e esparsos) para busca de produtos e personalização da navegação.",
    "xp.fashion.4": "Fine-tuning da OpenAI em jobs em lote com Redis e filas; +30 endpoints REST e integrações com VTEX, Shopify, Omnichat e OpenAI.",
    "portfolio.title": "Meus <span>projetos</span>",
    "proj.code": "Código",
    "proj.financas.title": "Finanças · app de finanças com IA",
    "proj.financas.desc": "Categoriza os gastos da fatura do cartão. Regras e um dicionário aprendido resolvem os gastos recorrentes sem custo; o LLM entra só para estabelecimentos novos, com saída estruturada e lista fechada de categorias, e o que tem baixa confiança vai para revisão humana, que ensina o dicionário.",
    "proj.financas.result": "Avaliação com divisão por tempo: 63,9% dos gastos resolvidos sem LLM, com 100% de acerto. 33 testes automatizados.",
    "proj.econsciente.title": "E-Consciente · gestão de resíduos com IA",
    "proj.econsciente.desc": "Classificador de resíduos com visão computacional que substitui a triagem manual, num app que incentiva a coleta seletiva no Rio de Janeiro.",
    "proj.econsciente.result": "Pipeline de agentes autônomos (Planner → Executor → Tester) com Claude Agent SDK, que gerou commits reais e poupou ~5–6 h de trabalho repetitivo.",
    "proj.rodnan.title": "Rodnan Score · avaliação médica",
    "proj.rodnan.desc": "Calculadora clínica do escore de Rodnan: o médico clica nas regiões do corpo e o escore é somado na hora.",
    "proj.rodnan.result": "Validada por especialistas e adotada no doutorado de um pesquisador da UFRJ.",
    "proj.clinica.title": "Clínica Dutton · agendamento de consultas",
    "proj.clinica.desc": "Sistema de agendamento e controle de consultas, com áreas separadas para pacientes e médicos.",
    "skills.title": "Minhas <span>habilidades</span>",
    "skills.ai": "IA e LLMs",
    "skills.eval": "Avaliação de LLMs",
    "skills.structured": "Saída estruturada",
    "skills.backend": "Linguagens e backend",
    "skills.queues": "Filas",
    "skills.cloud": "Cloud, DevOps e qualidade",
    "about.title": "Sobre mim",
    "about.subtitle": "Engenharia na <span>UFRJ</span>, IA em <span>produção</span>",
    "about.desc": "Estudo Engenharia Eletrônica e de Computação na Poli/UFRJ e trabalho com IA aplicada desde 2025. Gosto de transformar um problema de negócio em um sistema de IA que dá para medir: quanto acerta, quanto custa e quando precisa de uma pessoa. Quero construir produtos de IA com impacto mensurável. Falo inglês fluente.",
    "about.cta": "Vamos conversar",
    "contact.title": "Fale <span>comigo</span>",
    "contact.intro": "O jeito mais rápido de falar comigo é por e-mail ou LinkedIn."
  },
  en: {
    "header.role": "AI Engineer",
    "nav.home": "Home",
    "nav.experience": "Experience",
    "nav.portfolio": "Projects",
    "nav.skills": "Skills",
    "nav.about": "About",
    "nav.contact": "Contact",
    "home.greeting": "Hi, I'm",
    "home.subtitle": "AI <span>Engineer</span> · Python · <span>LLMs</span> in production",
    "home.description": "Electronics and Computer Engineering student at UFRJ. I put LLMs into production: generative AI pipelines that write e-commerce catalogs at FashionAI, and Python automations and a RAG chatbot at Globo.",
    "home.viewProjects": "View projects",
    "home.or": "or",
    "home.viewExperience": "View experience",
    "experience.title": "Work <span>Experience</span>",
    "xp.globo.role": "Junior Python Developer · Automation",
    "xp.globo.org": "Globo (via SysManager) · Jun 2026",
    "xp.globo.1": "I maintain and improve about 40 Python RPA automations, from daily routines to the monthly accounting close.",
    "xp.globo.2": "I work on a RAG chatbot (LangChain) that answers questions from internal documents.",
    "xp.globo.3": "At the internal hackathon, I built an Agent Gateway (Flask, A2A protocol, MongoDB) that routes tasks between AI agents, and developed agents that talk to each other over A2A.",
    "xp.globo.4": "I investigate and fix production incidents, recording root causes and improvements to prevent them from happening again.",
    "xp.fashion.role": "Full Stack &amp; AI Developer",
    "xp.fashion.org": "FashionAI · generative AI for e-commerce · Mar 2025",
    "xp.fashion.1": "LLM pipelines that classify products into 42+ categories and generate descriptions, names and SEO tags for fashion brands' catalogs, with prompts refined from each client's feedback.",
    "xp.fashion.2": "A prompt versioning system with per-client variables that cut new-client setup time by ~60%.",
    "xp.fashion.3": "Hybrid vector search (Qdrant, dense and sparse vectors) for product search and personalized browsing.",
    "xp.fashion.4": "OpenAI fine-tuning in batch jobs with Redis and queues; 30+ REST endpoints and integrations with VTEX, Shopify, Omnichat and OpenAI.",
    "portfolio.title": "My <span>Projects</span>",
    "proj.code": "Code",
    "proj.financas.title": "Finanças · AI personal finance app",
    "proj.financas.desc": "Categorizes credit card expenses. Rules and a learned dictionary handle recurring merchants at no cost; the LLM is called only for new merchants, with structured output and a closed list of categories, and low-confidence answers go to human review, which teaches the dictionary.",
    "proj.financas.result": "Time-split evaluation: 63.9% of expenses resolved without the LLM, with 100% accuracy. 33 automated tests.",
    "proj.econsciente.title": "E-Consciente · AI waste management",
    "proj.econsciente.desc": "A computer vision waste classifier that replaces manual sorting, in an app that encourages recycling in Rio de Janeiro.",
    "proj.econsciente.result": "Autonomous agent pipeline (Planner → Executor → Tester) with the Claude Agent SDK that produced real commits and saved ~5–6 h of repetitive work.",
    "proj.rodnan.title": "Rodnan Score · medical assessment",
    "proj.rodnan.desc": "A clinical calculator for the Rodnan skin score: the physician clicks body regions and the score adds up instantly.",
    "proj.rodnan.result": "Validated by specialists and adopted in a UFRJ researcher's PhD work.",
    "proj.clinica.title": "Clínica Dutton · appointment scheduling",
    "proj.clinica.desc": "Appointment scheduling and management, with separate areas for patients and doctors.",
    "skills.title": "My <span>Skills</span>",
    "skills.ai": "AI and LLMs",
    "skills.eval": "LLM evaluation",
    "skills.structured": "Structured output",
    "skills.backend": "Languages and backend",
    "skills.queues": "Queues",
    "skills.cloud": "Cloud, DevOps and testing",
    "about.title": "About me",
    "about.subtitle": "Engineering at <span>UFRJ</span>, AI in <span>production</span>",
    "about.desc": "I study Electronics and Computer Engineering at Poli/UFRJ and have worked with applied AI since 2025. I like turning a business problem into an AI system you can measure: how often it is right, how much it costs, and when it needs a person. I want to build AI products with measurable impact. I speak fluent English.",
    "about.cta": "Let's talk",
    "contact.title": "Contact <span>Me</span>",
    "contact.intro": "The fastest way to reach me is by e-mail or LinkedIn."
  }
};

function setLanguage(lang) {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const text = translations[lang][el.getAttribute('data-i18n')];
        if (text) el.innerHTML = text;
    });
}

document.getElementById('ptBtn').addEventListener('click', () => setLanguage('pt'));
document.getElementById('enBtn').addEventListener('click', () => setLanguage('en'));
setLanguage('pt');

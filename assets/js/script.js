/*Turns the mmenu hamburguer into a x */

const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', ()=> {
    toggleMenu();
});

function toggleMenu(){
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');
    
    if(menuHamburguer.classList.contains('change')){
        nav.style.display = 'block';
    } else{
        nav.style.display = 'none';
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mostrar ou esconder o botão dependendo da posição de scroll
window.onscroll = function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};
document.getElementById('contactMeBtn').addEventListener('click', function(){
    scrollToSection('contact');
})

document.getElementById('showImagesButton').addEventListener('click', function() {
    const overlay = document.getElementById('overlay');
    const imagesContainer = document.getElementById('imagesContainer');
    
    // Toggle visibility of the overlay
    if (overlay.style.display === 'none' || overlay.style.display === '') {
        overlay.style.display = 'flex';
        
        // Add images to the container
        const images = ['assets/img/css.png', 'assets/img/wordpress.png', 'assets/img/html.png', 'assets/img/js.png']; // Replace with your actual image paths
        imagesContainer.innerHTML = ''; // Clear any existing images
        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Interactive Image';
            img.addEventListener('click', () => {
                alert(`You clicked on ${src}`);
            });
            imagesContainer.appendChild(img);
        });
        document.getElementById('overlay').addEventListener('click', function(){
                overlay.style.display = 'none';
            })
    }
});

document.getElementById('showImagesButton2').addEventListener('click', function() {
    const overlay = document.getElementById('overlay2');
    const imagesContainer = document.getElementById('imagesContainer2');
    
    // Toggle visibility of the overlay
    if (overlay.style.display === 'none' || overlay.style.display === '') {
        overlay.style.display = 'flex';
        
        // Add images to the container
        const images = ['assets/img/c++.webp', 'assets/img/java.png', 'assets/img/bd.png', 'assets/img/python.webp', 'assets/img/c.webp', 'assets/img/net.png']; // Replace with your actual image paths
        imagesContainer.innerHTML = ''; // Clear any existing images
        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Interactive Image';
            img.addEventListener('click', () => {
                alert(`You clicked on ${src}`);
            });
            imagesContainer.appendChild(img);
        });
        document.getElementById('overlay2').addEventListener('click', function(){
                overlay.style.display = 'none';
            })
    }
});

document.getElementById('showImagesButton3').addEventListener('click', function() {
    const overlay = document.getElementById('overlay3');
    const imagesContainer = document.getElementById('imagesContainer3');
    
    // Toggle visibility of the overlay
    if (overlay.style.display === 'none' || overlay.style.display === '') {
        overlay.style.display = 'flex';
        
        // Add images to the container
        const images = ['assets/img/css.png', 'assets/img/html.png', 'assets/img/js.png']; // Replace with your actual image paths
        imagesContainer.innerHTML = ''; // Clear any existing images
        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Interactive Image';
            img.addEventListener('click', () => {
                alert(`You clicked on ${src}`);
            });
            imagesContainer.appendChild(img);
        });
        document.getElementById('overlay3').addEventListener('click', function(){
                overlay.style.display = 'none';
            })
    }
});

document.getElementById('sendMessage').addEventListener('click', function() {
    event.preventDefault(); // Impede o envio do formulário

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('e-mail').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();

    if (name === '' || email === '' || phoneNumber === '') {
        // Exibe um alerta se algum dos campos estiver vazio
        Swal.fire({
            title: 'Erro!',
            text: 'Por favor, preencha todos os campos obrigatórios.',
            imageUrl: 'assets/img/error.png',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Erro',
            confirmButtonText: 'OK'
        });
    } else {
        Swal.fire({
            title: 'Mensagem enviada!',
            text: 'Sua mensagem foi enviada com sucesso.',
            imageUrl: 'assets/img/certo.png',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Certo',
            confirmButtonText: 'OK'
    });

    document.getElementById('name').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('e-mail').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('text').value = '';
}});

// Função para rolar para uma seção e centralizá-la na tela
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const sectionTop = section.offsetTop - headerHeight;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// Adicione um evento de clique para cada link no menu
document.querySelectorAll('header .nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        const sectionId = this.getAttribute('href').substring(1); // Obtém o ID da seção
        scrollToSection(sectionId); // Rola para a seção
    });
});

// Adicione um evento de clique para cada link no menu hamburguer
document.querySelectorAll('header .nav-responsive a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        const sectionId = this.getAttribute('href').substring(1); // Obtém o ID da seção
        scrollToSection(sectionId); // Rola para a seção
    });
});



document.getElementById('backHome').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link

    // Rola de volta para a seção "Home"
    const homeSection = document.getElementById('home');
    if (homeSection) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const sectionTop = homeSection.offsetTop - headerHeight;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }

    // Faz o ícone do WhatsApp piscar
    const whatsappIcon = document.querySelector('.bx.bxl-whatsapp');
    whatsappIcon.classList.add('blink');

    // Remove a classe de animação após alguns segundos
    setTimeout(function() {
        whatsappIcon.classList.remove('blink');
    }, 6000); // 3000 milissegundos = 3 segundos (ajuste conforme desejado)
});

AOS.init();

const translations = {
  pt: {
    "header.logo": "Bia Braúna",
    "header.role": "Desenvolvedora",
    "nav.home": "Home",
    "nav.services": "Serviços",
    "nav.portfolio": "Portfólio",
    "nav.contact": "Contato",
    "nav.about": "Sobre",
    "home.greeting": "Olá, eu sou",
    "home.name": "Bia Braúna",
    "home.subtitle": "Full-Stack <span>Desenvolvedora</span> e <span>Futura Engenheira</span><img class=\"charging\" src=\"assets/img/charged.gif\" alt=\"charging picture\">",
    "home.description": "Nos últimos 7 anos, como estudante de computação e freelancer, venho aprimorando minhas habilidades para transformar suas ideias em realidade.",
    "home.viewProjects": "Ver Projetos",
    "home.or": "ou",
    "home.readAboutMe": "Leia Sobre Mim",
    "home.curriculo": "Currículo Lattes",
    "services.title": "Nossos <span>Serviços</span>",
    "services.frontend.title": "Desenvolvimento Front-End",
    "services.frontend.desc": "Possui anos de experiência com as seguintes tecnologias, a fim de fazer sites criativos que se adequem ao objetivo do cliente.",
    "services.backend.title": "Desenvolvimento Back-End",
    "services.backend.desc": "Carreira majoritariamente acadêmica, com desenvolvimento de software acadêmico na área da agricultura e freelancers em diversas áreas.",
    "services.mobile.title": "Desenvolvimento Mobile",
    "services.mobile.desc": "Habilidade indispensável no mundo atual. Atualmente desenvolvo majoritariamente aplicativos híbridos.",
    "services.technologies": "Tecnologias",
    "portfolio.title": "Últimos <span>Projetos</span>",
    "portfolio.greenhope.title": "GreenHope",
    "portfolio.greenhope.desc": "App em desenvolvimento focado em incentivar a coleta seletiva no estado do Rio de Janeiro por meio de um jogo.",
    "portfolio.bot.title": "Bot",
    "portfolio.bot.desc": "Programado em python, o bot pode assumir várias responsabilidades, como nesse projeto foi listar membros por seus cargos e acompanhar as mudanças envolvidas.",
    "portfolio.dotnet.title": ".NET",
    "portfolio.dotnet.desc": "Software em .NET desenvolvido para a análise do crescimento e do desenvolvimento de plantas, focado em determinar as necessidades da planta a fim de aumentar a produtividade.",
    "portfolio.clinica.title": "Clínica",
    "portfolio.clinica.desc": "Software desenvolvido em java para agendamento e controle de consultas tanto para uso dos pacientes, quanto para uso dos médicos.",
    "contact.title": "Fale <span>Comigo!</span>",
    "contact.fullname": "Nome Completo",
    "contact.email": "E-mail",
    "contact.phone": "Telefone",
    "contact.subject": "Assunto",
    "contact.message": "Mensagem",
    "contact.send": "Enviar Mensagem",
    "about.title": "Sobre Mim",
    "about.subtitle": "Full-Stack <span>Desenvolvedora</span> e <span>Futura Engenheira</span>",
    "about.desc": "Eu cresci em uma cidade pequena admirada em como as invenções ao longo dos tempos foram melhorando o mundo, na programação descobri que eu poderia criar qualquer coisa que eu quisesse e me apaixonei, atualmente me desenvolvo cada dia mais para dar esse super poder aos meus clientes.",
    "about.cta": "Vamos trabalhar juntos!",
    "footer.copyright": "Copyright &copy; 2024 por &lt;/Bia&gt; Todos os direitos reservados."
  },
  en: {
    "header.logo": "Bia Braúna",
    "header.role": "Developer",
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",
    "nav.about": "About",
    "home.greeting": "Hi, I'm",
    "home.name": "Bia Braúna",
    "home.subtitle": "Full-Stack <span>Developer</span> and <span>Future Engineer</span><img class=\"charging\" src=\"assets/img/charged.gif\" alt=\"charging picture\">",
    "home.description": "Over the past 7 years, as a computer student and a freelancer, I've been improving my skills to be capable of turning your ideas into reality.",
    "home.viewProjects": "View Projects",
    "home.or": "or",
    "home.readAboutMe": "Read About Me",
    "home.curriculo": "Lattes CV",
    "services.title": "Our <span>Services</span>",
    "services.frontend.title": "Front-End Development",
    "services.frontend.desc": "Years of experience with the following technologies, aiming to create creative websites that fit the client's goals.",
    "services.backend.title": "Back-End Development",
    "services.backend.desc": "Mainly academic career, with academic software development in agriculture and freelance work in various areas.",
    "services.mobile.title": "Mobile Development",
    "services.mobile.desc": "An essential skill in today's world. Currently, I mostly develop hybrid apps.",
    "services.technologies": "Technologies",
    "portfolio.title": "Latest <span>Projects</span>",
    "portfolio.greenhope.title": "GreenHope",
    "portfolio.greenhope.desc": "App under development focused on encouraging selective collection in the state of Rio de Janeiro through a game.",
    "portfolio.bot.title": "Bot",
    "portfolio.bot.desc": "Programmed in python, the bot can take on various responsibilities, such as listing members by their roles and tracking changes involved.",
    "portfolio.dotnet.title": ".NET",
    "portfolio.dotnet.desc": ".NET software developed for analyzing plant growth and development, focused on determining plant needs to increase productivity.",
    "portfolio.clinica.title": "Clinic",
    "portfolio.clinica.desc": "Software developed in Java for scheduling and controlling appointments for both patients and doctors.",
    "contact.title": "Contact <span>Me!</span>",
    "contact.fullname": "Full Name",
    "contact.email": "E-mail",
    "contact.phone": "Phone Number",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "about.title": "About Me",
    "about.subtitle": "Full-Stack <span>Developer</span> and <span>Future Engineer</span>",
    "about.desc": "I grew up in a small town, amazed at how inventions have improved the world over time. In programming, I discovered I could create anything I wanted and fell in love. Now, I develop myself every day to give this superpower to my clients.",
    "about.cta": "Let's work together!",
    "footer.copyright": "Copyright &copy; 2024 by &lt;/Bia&gt; All Rights Reserved."
  }
};

function setLanguage(lang) {
  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.hasAttribute('data-i18n-placeholder')) {
        // el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });
//   Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

document.getElementById('ptBtn').addEventListener('click', function() {
  setLanguage('pt');
});
document.getElementById('enBtn').addEventListener('click', function() {
  setLanguage('en');
});

// Set default language
setLanguage('pt');
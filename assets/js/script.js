
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
// Redirecciona a productos si se ingresa un nombre
document.getElementById('startBtn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    if (username.trim()) {
        alert(`Bienvenido, ${username}!`);
        window.location.href = 'productos.html'; // Redirige a la página de productos
    } else {
        alert('Por favor, ingrese un nombre para continuar.');
    }
});

// Redirecciona al login de administrador si los datos son correctos
document.getElementById('adminLoginBtn').addEventListener('click', () => {
    const adminUser = document.getElementById('adminUser').value;
    const adminPass = document.getElementById('adminPass').value;
    
    if (adminUser === 'admin' && adminPass === '1234') {
        alert('Ingreso exitoso como administrador');
        window.location.href = 'admin-panel.html'; // Redirige al panel del administrador
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});

// Alterna entre tema claro y oscuro
const themeToggleBtn = document.getElementById('themeToggleBtn');
themeToggleBtn.addEventListener('click', () => {
    const body = document.body;

    // Alterna entre las clases 'light' y 'dark'
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
    }

    // Animación del botón
    themeToggleBtn.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggleBtn.style.transform = '';
    }, 300);
});

// Al cargar la página, aplicamos el tema claro por defecto
document.body.classList.add('light');

// Agrega el ícono del sol al botón al cargar la página
const iconMoon = document.createElement('span');
iconMoon.classList.add('icon-moon');
iconMoon.innerHTML = '&#9728;'; // Ícono de sol
themeToggleBtn.appendChild(iconMoon);

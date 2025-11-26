// Hamburger Menu
function toggleMenu() {
  document.getElementById('navbarMenu').classList.toggle('active');
}

// Typing Text Animation
const texts = ['Where Sunshine Meets Flavor!', 'Hangatnya Cahaya dalam Secangkir Kopi.', 'Energi, Rasa, Inspirasi!'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
const typingElement = document.getElementById('typing-text');

function typeLoop() {
  if (count === texts.length) {
    count = 0; // ulang dari awal
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  typingElement.textContent = letter;

  if (letter.length === currentText.length) {
    // selesai satu kata, tunggu sebentar lalu hapus
    setTimeout(() => {
      eraseLoop();
    }, 1500);
  } else {
    setTimeout(typeLoop, 150);
  }
}

function eraseLoop() {
  letter = currentText.slice(0, --index);
  typingElement.textContent = letter;

  if (letter.length === 0) {
    count++;
    index = 0;
    setTimeout(typeLoop, 500);
  } else {
    setTimeout(eraseLoop, 100);
  }
}

typeLoop();

// Scroll Reveal Animation
document.addEventListener('scroll', () => {
  document.querySelectorAll('.scroll-reveal').forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// Validasi Form
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  if (!form) return; // kalau tidak ada form, hentikan

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let subject = document.getElementById('subject').value;
    let customer = document.querySelector("input[name='customer']:checked");
    let coffee = document.querySelectorAll("input[name='coffee[]']:checked");
    let message = document.getElementById('message').value.trim();

    let errors = [];

    if (name === '') errors.push('Nama wajib diisi.');

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!email.match(emailPattern)) errors.push('Email tidak valid.');

    if (subject === '') errors.push('Silakan pilih topik.');

    if (!customer) errors.push('Pilih apakah Anda pelanggan tetap.');

    if (coffee.length === 0) errors.push('Pilih minimal satu jenis kopi favorit.');

    if (message === '') errors.push('Pesan tidak boleh kosong.');

    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      alert('Pesanan Anda siap dibuat');
    }
  });
});

// Dark Mode Toggle
const toggle = document.getElementById('darkModeToggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // opsional: ganti ikon
  if (document.body.classList.contains('dark-mode')) {
    toggle.textContent = '☀️';
  } else {
    toggle.textContent = '🌙';
  }
});

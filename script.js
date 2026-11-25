// 1. Fitur Filter Kategori Galeri Foto
function filterGallery(category, button) {
    // Ubah status tombol aktif
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Tampilkan atau sembunyikan kartu foto sesuai kategori
    const cards = document.querySelectorAll('.gallery-card');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// 2. Fitur Lightbox (Klik foto untuk memperbesar)
function openLightbox(cardElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    const img = cardElement.querySelector('img');
    const caption = cardElement.querySelector('.card-caption');

    lightboxImg.src = img.src;
    lightboxCaption.textContent = caption.textContent;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}


const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            themeToggle.textContent = '☀️ Mode Terang';
        } else {
            themeToggle.textContent = '🌙 Mode Gelap';
        }
    });
}
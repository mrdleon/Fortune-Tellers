const slides = document.querySelectorAll('.slide');
let mulai = 0;

function tampilkanSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        if (i === index) {
            slides[i].classList.add('active'); // Tambahkan 'active' ke slide yang dipilih
        } else {
            slides[i].classList.remove('active'); // Hapus 'active' dari slide lainnya
        }
    }
}

// index merujuk ke nomor slide yang harus ditampilkan.
// Nilai index berasal dari variabel mulai yang berubah setiap kali tombol panah ditekan.
// Tanpa index, fungsi tidak tahu slide mana yang harus aktif.
// index adalah parameter yang dikirim saat tampilkanSlide(index) dipanggil.

// i adalah indeks dari setiap elemen dalam slides.forEach()
// i adalah posisi (indeks) elemen dalam slides
// i sebagai inisialisasi

function nextSlide() {
    mulai = (mulai + 1) % slides.length;
    tampilkanSlide(mulai);
}

function prevSlide() {
    mulai = (mulai - 1 + slides.length) % slides.length;
    tampilkanSlide(mulai);
}


//////////////////////////////////////////////////////////////////////////////////



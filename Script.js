// Ambil tombol toggle
const toggleButton = document.getElementById('nav-toggle');
// Ambil elemen menu
const menu = document.querySelector('.nav-menu');
// Ambil elemen ikon tombol toggle
const toggleIcon = document.querySelector('label[for="nav-toggle"] svg');

// Tambahkan event listener untuk memantau klik pada tombol toggle
toggleButton.addEventListener('click', function() {
    // Toggle tampilan menu
    if (menu.style.maxHeight === '0px') {
        menu.style.maxHeight = menu.scrollHeight + 'px'; // Set max-height sesuai dengan tinggi konten
        // Ubah ikon menjadi close saat menu ditampilkan
        toggleIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        `;
    } else {
        menu.style.maxHeight = '0px'; // Sembunyikan menu dengan max-height 0px
        // Ubah ikon menjadi ikon awal saat menu disembunyikan
        toggleIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        `;
    }
});


window.addEventListener('scroll', function() {
        var button = document.getElementById('hubungi-kami');
        // Tampilkan tombol saat menggulir ke bawah lebih dari 400px dari bagian atas
        if (window.scrollY > 400) {
            button.style.right = '5px'; // Tombol muncul dari kanan halaman
        } else {
            button.style.right = '-150px'; // Tombol kembali disembunyikan di luar layar kanan
        }
    });
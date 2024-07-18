// JavaScript untuk toggle menu pada layar kecil
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('hidden');
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Mengatur fungsi untuk tombol toggle
    var toggleButton = document.getElementById('toggleFeatures');
    toggleButton.addEventListener('click', function() {
        // Mengambil elemen yang ingin disembunyikan
        var promoElement = document.querySelector('.promo');
        var syaratElement = document.querySelector('.syarat');
        var pembayaranElement = document.querySelector('.pembayaran');
        
        // Toggle class 'hidden' pada elemen yang ingin disembunyikan
        if (promoElement) {
            promoElement.classList.toggle('hidden');
        }
        if (syaratElement) {
            syaratElement.classList.toggle('hidden');
        }
        if (pembayaranElement) {
            pembayaranElement.classList.toggle('hidden');
        }
    });
});
module.exports = {
    theme: {
      extend: {
        colors: {
          deepskyblue: '#00bfff',
        },
      },
    },
  };
  module.exports = {
    theme: {
      extend: {
        fontFamily: {
          times: ['"Times New Roman"', 'serif'],
        },
      },
    },
  };
  function showPaymentMethod(methodNumber) {
    // Sembunyikan semua metode pembayaran
    var paymentMethods = document.querySelectorAll('.payment-method');
    paymentMethods.forEach(function(method) {
        method.classList.remove('active');
    });

    // Tampilkan metode pembayaran yang dipilih
    var selectedMethod = document.getElementById('paymentMethod' + methodNumber);
    if (selectedMethod) {
        selectedMethod.classList.add('active');
    }
}

// Event listener untuk resize agar menyesuaikan tampilan di desktop dan mobile
window.addEventListener('resize', function() {
    // Atur ulang tampilan metode pembayaran sesuai ukuran layar
    var activeMethod = document.querySelector('.payment-method.active');
    if (window.innerWidth > 768 && activeMethod) {
        activeMethod.style.display = 'block'; // Tampilkan metode pembayaran di desktop
    } else if (activeMethod) {
        activeMethod.style.display = 'block'; // Tampilkan metode pembayaran di mobile
    }
});

// Inisialisasi
document.addEventListener('DOMContentLoaded', function() {
    var activeMethod = document.querySelector('.payment-method.active');
    if (window.innerWidth > 768 && activeMethod) {
        activeMethod.style.display = 'block'; // Tampilkan metode pembayaran di desktop saat pertama kali dimuat
    } else if (activeMethod) {
        activeMethod.style.display = 'block'; // Tampilkan metode pembayaran di mobile saat pertama kali dimuat
    }
});

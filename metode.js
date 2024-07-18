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

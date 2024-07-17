function showPaymentMethod(methodNumber) {
    // Sembunyikan semua metode pembayaran
    var paymentMethods = document.querySelectorAll('.payment-method');
    paymentMethods.forEach(function(method) {
        method.classList.add('hidden');
    });

    // Tampilkan metode pembayaran yang dipilih
    var selectedMethod = document.getElementById('paymentMethod' + methodNumber);
    if (selectedMethod) {
        selectedMethod.classList.remove('hidden');
    }
}

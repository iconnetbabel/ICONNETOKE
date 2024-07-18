function showPaymentMethod(methodNumber) {
    // Hide all payment methods
    var paymentMethods = document.querySelectorAll('.payment-method');
    paymentMethods.forEach(function(method) {
        method.classList.add('hidden');
    });

    // Show the selected payment method
    var selectedMethod = document.getElementById('paymentMethod' + methodNumber);
    if (selectedMethod) {
        selectedMethod.classList.remove('hidden');
    }
}

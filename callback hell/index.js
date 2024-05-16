cart = [1,2,3,4,5];

// Callback Hell.
api.createOrder(cart, function() {

    api.proceedToPayment(function() {

        api.showOrderSummary(function() {

            api.updateWallet();
        });

    });
})
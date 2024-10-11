const paymongo = require("paymongo-node")("your secret api key");

(async () => {
    try {
        const paymentIntent = await paymongo.paymentIntents.create({
            amount: 10000,
            // insert other required attributes here
        });

        console.log(paymentIntent.id);
    } catch (e) {
        if (e.type === "InvalidRequestError") {
            // Handle validation errors
            e.errors.forEach(function (error) {
                console.log(error.code);
                console.log(error.detail);
            });
        }
    }
})();

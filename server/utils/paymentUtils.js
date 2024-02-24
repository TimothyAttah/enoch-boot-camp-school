const paystack = (request) => {
  const MySecretKey = process.env.PAYSTACK_SECRET_KEY;

  const initializePayment = (form, mycallback) => {
    const options = {
      url: 'https://api.paystack.co/transaction/initialize',
      headers: {
        authorization:
          'Bearer sk_test_532e2a95b53164b6b77c5521a741f7258bf88efe',
        'content-type': 'application/json',
        'cache-control': 'no-cache',
      },

      form,
      callback_url: 'https://api.paystack.co/transaction/verify',
    };

    const callback = (error, response, body) => {
      return mycallback(error, body);
    };

    request.post(options, callback);
  };

  const verifyPayment = (ref, mycallback) => {
    const options = {
      url:
        'https://api.paystack.co/transaction/verify/' + encodeURIComponent(ref),
      headers: {
        authorization:
          'Bearer   sk_test_532e2a95b53164b6b77c5521a741f7258bf88efe',
        'content-type': 'application/json',
        'cache-control': 'no-cache',
      },
    };
    const callback = (error, response, body) => {
      return mycallback(error, body);
    };
    request(options, callback);
  };
  return { initializePayment, verifyPayment };
};

export default paystack;

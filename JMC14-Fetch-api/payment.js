const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(event) {
  event.preventDefault(); //stops the form from reloading

  let handler = PaystackPop.setup({
    key: "pk_test_c867a2307ae810b4a2954ac1b61519179235b092", // Replace with your public key
    email: document.getElementById("cus-email").value,
    amount: document.getElementById("amount").value * 100,
    // ref: 'pwprof'+ Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
        console.log(response)
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(response.status + ": " + message);
    }
  });

  handler.openIframe();
}
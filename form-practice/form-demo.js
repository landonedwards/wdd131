function togglePaymentDetails(e) {
    // get a reference to the form. We can access all the named form inputs through the form element.
    const theForm = document.querySelector("#checkoutForm");
    // we will also need the creditCardContainer and paypalUsernameContainer
    const creditCardContainer = document.querySelector("#creditCardNumberContainer");
    const paypalContainer = document.querySelector("#paypalUsernameContainer");

    const creditInput = document.querySelector("#creditCardNumber input");
    const paypalInput = document.querySelector("#paypalUsernameContainer input");
    // Hide payment containers by adding the '.hide' class to each of them
    creditCardContainer.classList.add("hide");
    paypalContainer.classList.add("hide");
  
    // Disable required for payment fields...if we hide a required field the browser will throw an error when we try to submit!

    const paymentMethod = document.querySelector("#paymentMethod");
  
    // Show the container based on the selected payment method, and add the required attribute back.
    if (paymentMethod.value == "creditCard") {
        creditCardContainer.classList.remove("hide");
        paypalInput.required = false;
    }

    else if (paymentMethod.value == "paypal") {
        paypalContainer.classList.remove("hide");
        creditInput.required = false;
    }
  
  }

const selectElement = document.querySelector("#paymentMethod");
selectElement.addEventListener("change", togglePaymentDetails)
  
// attach a change event handler to the paymentMethod input
  // attach a submit event handler to the form
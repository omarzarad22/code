


document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("message").innerHTML = "Hello";
  });




  function togglePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = popup.style.display === "none" ? "block" : "none";
  }


  document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
  });



  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

  // Attach click event listener to each button
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
          // Retrieve product information
          const product = this.parentNode;
          const productName = product.querySelector('h3').textContent;
  
          // Add product to basket
          addToBasket(productName);
      });
  });
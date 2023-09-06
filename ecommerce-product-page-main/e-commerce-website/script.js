// Javascript functionalities for mobile

if (window.innerWidth <= 768) {
  // Get references to elements
  const cartIcon = document.getElementById("cart-icon");
  const cartCard = document.getElementById("cart-card");
  const numberDisplay = document.getElementById("number");
  const addToCartButton = document.getElementById("add-to-cart-button");
  const cartItemsContainer = document.getElementById("cart-items");
  const replaceEmptyCartText = document.getElementById("cart-is-empty");
  const navbarToggler = document.querySelector(".navbar-toggler-icon");
  const navbarTogglerIcon = document.querySelector("#navbar-items-toggler");

  // Initialize cart items array
  var cartItems = [];

  function addItemToCart() {
    const productTitle = document.getElementById("product-title").textContent;
    const imageElement = document.getElementById("product-image");
    const productImageSrc = imageElement.getAttribute("src");
    const productPrice = parseFloat(
      document.getElementById("product-price").textContent.replace("$", "")
    ); // Parse the price as a floating-point number

    const quantity = parseInt(numberDisplay.textContent); // Get the quantity

    // Find if the product is already in the cart
    const existingCartItemIndex = cartItems.findIndex((item) => {
      const title = item.querySelector(".cart-item-title-mobile").textContent;
      return title === productTitle;
    });

    if (existingCartItemIndex !== -1) {
      // If the product is already in the cart, update its quantity and total price
      const existingCartItem = cartItems[existingCartItemIndex];
      const existingQuantityElement = existingCartItem.querySelector(
        ".cart-item-title-mobile span:last-child"
      );
      const existingTotalPriceElement =
        existingCartItem.querySelector(".total-price");

      const existingQuantity = parseInt(
        existingQuantityElement.textContent.split("x")[1]
      );
      const newQuantity = existingQuantity + quantity;

      existingQuantityElement.textContent = ` x ${newQuantity}`;
      const newTotalPrice = (productPrice * newQuantity).toFixed(2);
      existingTotalPriceElement.textContent = `$${newTotalPrice}`;
    } else {
      // Create a new cart item element
      var cartItem = document.createElement("div");
      cartItem.className = "cart-item";

      // Create the item content
      var itemContent = `
    <div>
        <img src="${productImageSrc}" alt="${productTitle}" class="cart-item-image-mobile">
        <span class="cart-item-title-mobile">${productTitle}</span>
        <img src="/images/icon-delete.svg" alt="delete" class="delete-icon-mobile" onclick="removeCartItem(${
          cartItems.length
        })">            
            
            <div class="cart-item-title-mobile" >
               <span>
                   $${productPrice}.00</span> x ${quantity} 
               <span class="total-price">
                   $${(productPrice * quantity).toFixed(2)}
               </span>
            </div>              

           
     </div><br>
           <div class="checkout-mobile">
             <button class="checkout-button-mobile">checkout</button>
           </div>
              `;

      cartItem.innerHTML = itemContent;

      // Add the item to the cart
      cartItems.push(cartItem);
      cartItemsContainer.appendChild(cartItem);
      cartItemsContainer.removeChild(replaceEmptyCartText);
    }

    // Update the cart display
    updateCartDisplay();

    // Reset the number display to zero
    numberDisplay.textContent = "0";
  }

  // Event listener for the "Add to cart" button
  addToCartButton.addEventListener("click", function () {
    var currentNumber = parseInt(numberDisplay.textContent);
    if (currentNumber > 0) {
      addItemToCart();

      numberDisplay.textContent = "0"; // Reset the number display
    }
  });

  // Function to remove an item from the cart
  function removeCartItem(itemIndex) {
    // Remove the item from the cartItems array
    cartItems.splice(itemIndex, 1);

    // Remove the corresponding cart item element from the DOM
    cartItemsContainer.removeChild(cartItemsContainer.children[itemIndex]);

    // Update the cart display
    updateCartDisplay();
  }

  // Function to update cart card display and number display
  function updateCartDisplay() {
    if (cartItems.length === 0) {
      cartCard.style.display = "block";
      cartItemsContainer.innerHTML =
        "<p id='cart-is-empty'>Your cart is empty</p>";
      numberDisplay.textContent = "0";
    } else {
      cartCard.style.display = "block";
      document.getElementById("cart-is-empty").style.display = "none";
    }
  }

  // Event listener to toggle cart card display
  cartIcon.addEventListener("click", function () {
    cartCard.style.display =
      cartCard.style.display === "block" ? "none" : "block";
  });

  // Event listener for the plus button
  document.getElementById("plus").addEventListener("click", function () {
    var currentNumber = parseInt(numberDisplay.textContent);
    numberDisplay.textContent = currentNumber + 1;
  });

  document.getElementById("minus").addEventListener("click", function () {
    var currentNumber = parseInt(numberDisplay.textContent);

    if (currentNumber > 0) {
      numberDisplay.textContent = currentNumber - 1;
    }
  });

  // Event delegation for delete buttons
  cartItemsContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-icon")) {
      var itemIndex = Array.from(
        event.target.parentElement.parentElement.parentElement.children
      ).indexOf(event.target.parentElement.parentElement);
      removeCartItem(itemIndex);
    }
  });

  // Event listener for the navbar toggler
  navbarToggler.addEventListener("click", function () {
    if (navbarTogglerIcon.classList.contains("d-none")) {
      // The navbar is expanded, hide the close icon and show the default icon
      navbarTogglerIcon.classList.remove("d-none");
    } else {
      // The navbar is collapsed, hide the default icon and show the close icon
      navbarTogglerIcon.classList.add("d-none");
    }
  });

  // Function to toggle the sidebar visibility
  function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    var closeSidebarIcon = document.getElementById("closeSidebar");

    if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
      closeSidebarIcon.style.display = "none";
      navbarTogglerIcon.className = "navbar-toggler-icon";
    } else {
      sidebar.style.width = "250px";
      closeSidebarIcon.style.display = "block";
      navbarTogglerIcon.className = "navbar-toggler-icon open";
    }
  }

  // Add an event listener to the "close-icon" for closing the sidebar
  document
    .getElementById("closeSidebar")
    .addEventListener("click", toggleSidebar);
}

































// Javascript functionalities for desktop
if (window.innerWidth > 768) {
  // Get references to elements
  const cartIcon = document.getElementById("cart-icon-md");
  const cartCard = document.getElementById("cart-card-md");
  const numberDisplay = document.getElementById("number-md");
  const addToCartButton = document.getElementById("add-to-cart-button-md");
  const cartItemsContainer = document.getElementById("cart-items-md");
  const replaceEmptyCartText = document.getElementById("cart-is-empty-md");
  const navbarToggler = document.querySelector(".navbar-toggler-icon-md");
  const navbarTogglerIcon = document.querySelector("#navbar-items-toggler-md");

  // Initialize cart items array
  var cartItems = [];

  function addItemToCart() {
    var productTitle = "Fall Limited Edition Sneakers"; // Updated product title
    var productImageSrc = "/images/image-product-1.jpg"; // Updated product image URL

    // Create a new cart item element
    var cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    // Create the item content
    var itemContent = `
    <span>
      <img src="${productImageSrc}" alt="${productTitle}" class="cart-item-image-desktop">
      <span class="cart-item-title-desktop">${productTitle} 
        <img src="/images/icon-delete.svg" alt="delete" class="delete-icon-desktop" onclick="removeCartItem(${cartItems.length})">
      </span>
    </span>
  `;

    cartItem.innerHTML = itemContent;

    // Add the item to the cart
    cartItems.push(cartItem);
    cartItemsContainer.appendChild(cartItem);
    cartItemsContainer.removeChild(replaceEmptyCartText);

    // Update the cart display
    updateCartDisplay();
  }

  // Event listener for the "Add to cart" button
  addToCartButton.addEventListener("click", function () {
    var currentNumber = parseInt(numberDisplay.textContent);
    if (currentNumber > 0) {
      for (var i = 0; i < currentNumber; i++) {
        addItemToCart();
      }
      numberDisplay.textContent = "0"; // Reset the number display
    }
  });

  // Function to remove an item from the cart
  function removeCartItem(itemIndex) {
    // Remove the item from the cartItems array
    cartItems.splice(itemIndex, 1);

    // Remove the corresponding cart item element from the DOM
    cartItemsContainer.removeChild(cartItemsContainer.children[itemIndex]);

    // Update the cart display
    updateCartDisplay();
  }

  // Function to update cart card display and number display
  function updateCartDisplay() {
    if (cartItems.length === 0) {
      cartCard.style.display = "block";
      cartItemsContainer.innerHTML =
        "<p id='cart-is-empty'>Your cart is empty</p>";
      numberDisplay.textContent = "0";
    } else {
      cartCard.style.display = "block";
      document.getElementById("cart-is-empty").style.display = "none";
    }
  }

  // Event listener to toggle cart card display
  cartIcon.addEventListener("click", function () {
    cartCard.style.display =
      cartCard.style.display === "block" ? "none" : "block";
  });

  // Event listener for the plus button
  document.getElementById("plus-md").addEventListener("click", function () {
    var currentNumber = parseInt(numberDisplay.textContent);
    numberDisplay.textContent = currentNumber + 1;
  });

  document.getElementById("minus-md").addEventListener("click", function () {
    var currentNumber = parseInt(numberDisplay.textContent);

    if (currentNumber > 0) {
      numberDisplay.textContent = currentNumber - 1;
    }
  });

  // Event delegation for delete buttons
  cartItemsContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-icon")) {
      var itemIndex = Array.from(
        event.target.parentElement.parentElement.parentElement.children
      ).indexOf(event.target.parentElement.parentElement);
      removeCartItem(itemIndex);
    }
  });

  // Event listener for the navbar toggler
  navbarToggler.addEventListener("click", function () {
    if (navbarTogglerIcon.classList.contains("d-none")) {
      // The navbar is expanded, hide the close icon and show the default icon
      navbarTogglerIcon.classList.remove("d-none");
    } else {
      // The navbar is collapsed, hide the default icon and show the close icon
      navbarTogglerIcon.classList.add("d-none");
    }
  });

  // Function to toggle the sidebar visibility
  function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    var closeSidebarIcon = document.getElementById("closeSidebar");

    if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
      closeSidebarIcon.style.display = "none";
      navbarTogglerIcon.className = "navbar-toggler-icon";
    } else {
      sidebar.style.width = "250px";
      closeSidebarIcon.style.display = "block";
      navbarTogglerIcon.className = "navbar-toggler-icon open";
    }
  }

  // Add an event listener to the "close-icon" for closing the sidebar
  document
    .getElementById("closeSidebar-md")
    .addEventListener("click", toggleSidebar);
}

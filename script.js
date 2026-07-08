// Find the product-grid container
const productGrid = document.querySelector(".product-grid");
const products = [
  {
    image: "Images/product-1.jpg",
    title: "Men's Underwear Summer Thin Ice Silk",
    newPrice: "$1.54",
    oldPrice: "$1.92",
    badge: "-20%",
  },
  {
    image: "Images/product-2.jpg",
    title: "Car Steering Wheel Lock with Keys",
    newPrice: "$48.62",
    oldPrice: "$60.78",
    badge: "-20%",
  },
  {
    image: "Images/product-3.jpg",
    title: "Hiphop Accessories Glossy Trapezoid Braces",
    newPrice: "$3.73",
    oldPrice: "$4.66",
    badge: "-20%",
  },
  {
    image: "Images/product-4.jpg",
    title: "Camping Light",
    newPrice: "$15.18",
    oldPrice: "$18.97",
    badge: "-20%",
  },
  {
    image: "Images/product-5.jpg",
    title: "4 In 1 Travel Dispenser Portable Travel Bottle...",
    newPrice: "$4.42",
    oldPrice: "$5.52",
    badge: "-20%",
  },
  {
    image: "Images/product-6.jpg",
    title: "Niche Leopard Vertical Pattern Drop-resis",
    newPrice: "$0.99",
    oldPrice: "$1.24",
    badge: "-20%",
  },
];
// Loop through each product
products.forEach(function (product) {
  // 1. Create the card (article) ← "card" is created HERE!
  const card = document.createElement("article");
  card.className = "product-card";

  // 2. Create the badge
  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = product.badge;

  // 3. Create the image
  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.title;

  // 4. Create the title
  const title = document.createElement("h3");
  title.textContent = product.title;

  // 5. Create the price section
  const priceDiv = document.createElement("div");
  priceDiv.className = "price";

  const newPrice = document.createElement("span");
  newPrice.className = "new-price";
  newPrice.textContent = product.newPrice;

  const oldPrice = document.createElement("span");
  oldPrice.className = "old-price";
  oldPrice.textContent = product.oldPrice;

  priceDiv.appendChild(newPrice);
  priceDiv.appendChild(oldPrice);

  // 6. Create the status
  const status = document.createElement("p");
  status.className = "status";
  status.textContent = "Available";

  // 7. ASSEMBLE: put all pieces inside the card
  card.appendChild(badge);
  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(priceDiv);
  card.appendChild(status);

  // 8. Put the card inside the product-grid
  productGrid.appendChild(card);
});

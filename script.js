const productGrid = document.querySelector(".product-grid");

async function loadProducts() {
  try {
    const response = await fetch("http://localhost:4000/products");
    const products = await response.json();

    products.forEach(function (product) {
      const card = document.createElement("article");
      card.className = "product-card";

      const badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = "-" + product.discount + "%";

      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.name;

      const title = document.createElement("h3");
      title.textContent = product.name;

      const priceDiv = document.createElement("div");
      priceDiv.className = "price";

      const newPrice = document.createElement("span");
      newPrice.className = "new-price";
      newPrice.textContent = "$" + product.price;

      const oldPrice = document.createElement("span");
      oldPrice.className = "old-price";
      oldPrice.textContent = "$" + product.originalPrice;

      priceDiv.appendChild(newPrice);
      priceDiv.appendChild(oldPrice);

      const status = document.createElement("p");
      status.className = "status";
      status.textContent = product.inStock ? "Available" : "Out of stock";

      card.appendChild(badge);
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(priceDiv);
      card.appendChild(status);

      productGrid.appendChild(card);
    });
  } catch (err) {
    console.log(err);
    productGrid.innerHTML = "<p>Could not load products.</p>";
  }
}

loadProducts();

const btn = document.getElementById("accountBtn");
const menu = document.getElementById("accountMenu");
btn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

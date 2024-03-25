// Zadatak 2
// Ovo je API sa kojeg ćete morati da dobijete podatke: https://dummijson.com/products

// Zadatak je da preuzmete podatke o učitavanju stranice i prikažete podatke na stranici u karticama koje napravite.
// Kartice moraju da imaju najmanje 4 svojstva o proizvodu

const fetchQuote = async () => {
  try {
    const response = await fetch("https://dummijson.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

fetchQuote().then((data) => {
  const contentDiv = document.getElementById("content3");
  contentDiv.innerHTML = `<div class="container">
  <!-- <div class="card">
    <div class="imgBox">
      <img src="${products.images}" alt="mouse corsair" class="mouse">
    </div>
  
    <div class="contentBox">
      <h3>${products.title}</h3>
      <h2 class="price">${products.price} €</h2>
      <a href="#" class="buy">Buy Now</a>
    </div>
  
  </div> 
</div>;`;
});

let tg = window.Telegram.WebApp;
tg.expand();

const categories = ["outfits","jacket","sweatshirt"];
const products = [
  {id:1,title:"Stone Island Frost Finish",price:43990,size:"S-M",condition:"9/10",
   category:"jacket",photos:["https://via.placeholder.com/400"]}
];

function renderCategories(){
  const c = document.getElementById("categories");
  categories.forEach(cat=>{
    const d=document.createElement("div");
    d.className="category";
    d.innerText=cat;
    d.onclick=()=>renderProducts(cat);
    c.appendChild(d);
  });
}

function renderProducts(cat){
  const p=document.getElementById("products");
  p.innerHTML="";
  products.filter(x=>x.category===cat).forEach(item=>{
    const card=document.createElement("div");
    card.className="product";
    card.innerHTML=`<img src="${item.photos[0]}"/>
      <h3>${item.title}</h3>
      <p>${item.price}₽ • Size: ${item.size} • ${item.condition}</p>`;
    card.onclick=()=>tg.sendData(JSON.stringify(item));
    p.appendChild(card);
  });
}

renderCategories();

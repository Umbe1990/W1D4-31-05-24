document.addEventListener("DOMContentLoaded", async () => {
//console.log("prova")
})
const para= new URLSearchParams(location.search)
//console.log(para)
const asin= para.get("asin")
//console.log(asin)
var API_URL="https://striveschool-api.herokuapp.com/books/"
fetch(API_URL + asin)
.then((response) =>{
    response.json().then((pluto) =>{
        console.log(pluto)
       let container=document.querySelector(".dettagliLibro")
       let contenuto=`
        <div class="cardCard">
            <img class="card-img-top1" src="${pluto.img}" alt="ops">
            <div class="cardCard1">
                <p class="prezzo1">${pluto.title}</p>
                <p class="prezzo1">Categoria: ${pluto.category}</p>
                <p class="prezzo1">${pluto.price}Euro</p>
            </div>
        </div>
        `
        container.innerHTML+=contenuto
    })
})
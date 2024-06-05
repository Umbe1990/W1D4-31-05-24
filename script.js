
 var TuttiLibri=[]
 var arrayCarrello=[]
var count=0
var price=0

    
    
   fetch("https://striveschool-api.herokuapp.com/books") 
   .then((response) =>{
    response.json().then((pluto) =>{
        TuttiLibri=pluto
      //  console.log(pluto)
        
        //let container = document.querySelector("#container")
        //container.innerHTML=""
       
       pluto.forEach(element => {
            //console.log(element.price)

            /*contenuto =`<img class=img-fluid src= ${element.img}  alt=  ${element.alt} />`
            contenuto2=`<h2 id=title> ${element.title}</h2>`
            contenuto3=`<button class=btn>premi</button>`
            container.innerHTML += `<div class=pictures> ${contenuto}  ${contenuto2} ${contenuto3}  </div>`
           */
        let container = document.querySelector("#container")
        let contenuto=`
            <div  class="card" > 
            <img class= "card-img-top"  src="${element.img}" />
            <div class="card-title">  ${element.title} </div>
            <p class="prezzo">${element.price} Euro</p>
            <div class="infoDiv"><a class="info" href="./dettagli.html?asin=${element.asin}">premi per info </a></div>
            <button onclick="prendicard('${element.asin}')" class="btn">acquista</button>
            <button onclick="btnRemove('${element.asin}')" class="removeBtn">Rimuovi</button>
            </div>
            `
            //&price=${element.price} se voglio mettere il prezzo oltre
            container.innerHTML += contenuto
          
        //   let contenuto=""
        //   contenuto +="<div class='card' >"
        //   contenuto+=  "<img class= 'card-img-top'    src='" + element.img + "'/>"
        //   contenuto+= "<div class='card-title'>  '" + element.title + "'</div>"
        //   contenuto+="<button onclick='prendicard()' class='btn'>acquista</button>"
        //   contenuto+="</div>"
        //   container.innerHTML += contenuto

       });
    })

   })
   
// prende le card selezionate con tasti tastiera

function search(){
    let container = document.querySelector("#container")
    container.innerHTML = ""
    //console.log(container)
    let input=document.getElementById("input").value
    input = input.toUpperCase()
    //console.log(input)
    TuttiLibri.forEach(element =>{
        //console.log(element.title)
        let titoloUpperCase = element.title.toUpperCase()
        let libriInclusi=titoloUpperCase.includes(input)
       //console.log(libriInclusi)
        if(libriInclusi==true){
            console.log("ciao")
            let container = document.querySelector("#container")
            let contenuto=`
            <div class="card" >
            <img class= "card-img-top"  src="${element.img}" />
            <div class="card-title">  ${element.title} </div>
            <p class="prezzo">${element.price} Euro</p>
            <div class="infoDiv"><a class="info" href="./dettagli.html?asin=${element.asin}">premi per info </a></div>
            <button onclick="prendicard('${element.asin}')" class="btn">acquista</button>
            <button class="removeBtn">Rimuovi</button>
            </div>
            
            `
            container.innerHTML += contenuto
            

            // /contenuto +="<div class='card' >"
            // contenuto+=  "<img class= 'card-img-top'    src='" + element.img + "'/>"
            // contenuto+= "<div class='card-title'>  '" + element.title + "'</div>"
            // contenuto+="<button onclick='prendicard()' class='btn'>acquista</button>"
            // contenuto+="</div>"
            //container.innerHTML += contenuto
        }else{
            //console.log("non 0k")
        }
    })

}

//prendi asin delle card 

function prendicard(asin){
    //console.log(asin)
   if (!arrayCarrello.includes(asin)){
        arrayCarrello.push(asin)
    }
    
  
    document.getElementById("count").innerHTML=arrayCarrello.length
    //const card=document.querySelectorAll("card")
    //card.classList.add("prova")
}

//reset count
function resetCount(){
    document.getElementById("count").innerHTML=""
}
//pulsante RIMUOVI toglie 1 ad il carrello

function btnRemove(){
 arrayCarrello.splice(-1)
 document.getElementById("count").innerHTML=arrayCarrello.length   
}    
    
  
//somma prezzo

function sommaPrice(pippo){
}
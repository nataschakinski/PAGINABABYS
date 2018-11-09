
const titulo= document.getElementById("titulo");

titulo.addEventListener("mouseout",function(event){
    const innerText= event.target.innerText;
    event.target.style.color= "purple";
    event.target.innerText="BEBE GENIO";
})
titulo.addEventListener("mousemove",function(event){
    event.target.innerText="GENIUS BABY";
    event.target.style.color= "red";
})

titulo.addEventListener("click",function(event){
    event.target.innerText="INTELLIGENT BABY";
    event.target.style.color= "orange";
})
const img = document.getElementsByClassName("elementos-nav")
debugger
Array.prototype.slice.call(img)
    .forEach(function(item,key) {
        debugger
        item.addEventListener("mousemove",function(event){
            debugger
            event.target.nextElementSibling.className = "img-button display-img";
        })
        item.addEventListener("mouseout",function(event){
            event.target.nextElementSibling.className = "img-button";
        })
    })


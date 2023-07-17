var name = "Valerie"
var favouriteFood = "Pizza"
var button = document.querySelector("#my-btn")
var myDiv = document.getElementById("my-div")

function exampleFunction() {
   console.log(favouriteFood)
} 

exampleFunction()

function greeting(){
   console.log("Hello World")
   myDiv.innerHTML = `
      <p>Hello World!!!</p>
   `;
}

function generateCard(){
   var card = document.createElement("div")
   var title = document.createElement("h1")
   var img = document.createElement("img")

   title.innerText = "My Card Title"
   img.src = "https://img.freepik.com/free-vector/summer-lettering-with-photo_23-2148523751.jpg?size=626&ext=jpg"

   myDiv.appendChild(card)
   
   card.appendChild(title)
   card.appendChild(img)
  
}

button.addEventListener("click", generateCard)

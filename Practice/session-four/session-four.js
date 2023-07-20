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

const cards = [
   {
      title: 'My Card Title #1',
      className: 'card',
      subtitle: 'My Card subtitle #1',
      imageUrl: "https://img.freepik.com/free-vector/summer-lettering-with-photo_23-2148523751.jpg?size=626&ext=jpg"
   },
   {
      title: 'My Card Title #2',
      className: 'card',
      subtitle: 'My Card subtitle #2',
      imageUrl: "https://img.freepik.com/free-vector/summer-lettering-with-photo_23-2148523751.jpg?size=626&ext=jpg"
   },
   {
      title: 'My Card Title #3',
      className: 'card',
      subtitle: 'My Card subtitle #3',
      imageUrl: "https://img.freepik.com/free-vector/summer-lettering-with-photo_23-2148523751.jpg?size=626&ext=jpg"
   }
]

function generateCard(){
   for(let card of cards){
      var cardElement = document.createElement("div")
      var title = document.createElement("h1")
      var subtitle = document.createElement("h3")
      var img = document.createElement("img")

      title.innerText = card.title
      img.src = card.imageUrl
      subtitle.innerText = card.subtitle
      cardElement.classList.add(card.className)

      myDiv.appendChild(cardElement)
      cardElement.appendChild(title)
      cardElement.appendChild(subtitle)
      cardElement.appendChild(img)
   }
}

button.addEventListener("click", generateCard)

const myArray = [
   {
      name: 'Bananas',
      price: 1.5
   },
   {
      name: 'Cereal',
      price: 6.0
   },
   {
      name: 'Milk',
      price: 5.5
   },
   {
      name: 'Cookies',
      price: 1.8
   }
]

for (let item of myArray){
   console.log("I went to the store and I bought " + item.name)
}

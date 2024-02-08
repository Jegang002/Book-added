///select popup-box,popup overlay button
var popupoverlay = document.querySelector('.popup-overlay')
var popupbox = document.querySelector('.popup-box')
var addpopupbtn = document.getElementById('add-popup-button')

addpopupbtn.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button

var cancelpopup = document.getElementById('cancel-popup')

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()

    popupbox.style.display = "none"
    popupoverlay.style.display = "none"
})

//select container,add-book,book-title-input,book-author-input,book-description

var container = document.querySelector('.container')
var addbook = document.getElementById('add-book')
var booktitle = document.getElementById('book-title-input')
var bookauthor = document.getElementById('book-author-input')
var bookdes = document.getElementById('book-description')

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h4>${bookauthor.value}</h4>
    <p>${bookdes.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
   
    popupbox.style.display = "none"
    popupoverlay.style.display = "none"
})

//delete book

function deletebook(event){
    event.target.parentElement.remove()
}
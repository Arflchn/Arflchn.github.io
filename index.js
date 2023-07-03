let imageIndex = 0
let images = [
    "source/E-Commerce.png",
    "source/ToDo.png",
    "source/Calculator.png"
]
function changeImg(position){
    let imgClass = document.querySelector(".billboard-img")
    imgClass.src = images[imageIndex]
}
let nextImg = () =>{
    if(imageIndex != 2){
        imageIndex++
        changeImg(imageIndex)
    }else{
        imageIndex = 0
        changeImg(imageIndex)
    }
}
let previousImg = () =>{
    if(imageIndex != 0){
        imageIndex --
        changeImg(imageIndex)
    }else{
        imageIndex = 2
        changeImg(imageIndex)
    }
}
function copyIt(){
    navigator.clipboard.writeText("willuweitandriel@gmail.com")
    window.alert("Gmail copied")
}
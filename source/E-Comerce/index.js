/*
showItem function gets the clicked flower
and uses its own html code to show and expended version
of the product
*/
let showItem = (e) =>{
    let container = document.querySelector(".main")
    let divToShow = String(e.innerHTML)
    /*
    expendedItem's div its already in the HTML code it only puts
    the needed code inside
    */
    let mainexpendedItem = document.querySelector(".main-expendedItem")
    mainexpendedItem.innerHTML = `<div>
    <i class="fa-solid fa-square-xmark fa-2xl" style="color: #cb0606;" onclick="closeWindow(this)"></i>
    ${divToShow}
    <button onclick="addToCart(this)">Add to Cart</button>
    </div>`
    // mainexpendedItem"s display is css its set as none
    mainexpendedItem.style.display = "flex"
    // here the code sets it to be flex, and so, be visible
}
let closeWindow = (e) =>{ 
    /*
    closeWindow gets the "grandparent" of the button and 
    declares it as none again, to no be visible anymore
    note the closeWindow function it is in the button
    the was declared at "mainexpendedItem.innerHTML"
    */
    e.parentElement.parentElement.style.display = "none"
}
let scrollShop = () =>{
    // the function just scrolls the window to the products
    window.scrollTo(0,500)
}
let removeItem = (e) =>{
    /*
    removeItem gets its parente and remove it from the 
    cart page
    removeItem function will be written in
    an icon with the addToCart function
    */
    e.parentElement.remove()
}
let openCart = () =>{
    /*
    cart's display it's declared as none too
    and when the function is called it sets it
    to flex to be visible
    */
    mainCart = document.querySelector(".main-cart")
    mainCart.style.display = "flex"
}
let addToCart = (e) =>{
    /*
    addToCart gets its parent and set all
    its children to a variable
    forward these children will be each one in
    their variable and they will be in the code that
    will have been written to add the product to the cart
    */
    let mainCart = document.querySelector(".main-cart")
    let children = e.parentElement.children
    let imgChild = children[1]
    let pChild = children[2]
    mainCart.innerHTML += `
    <div class="cart-container">
    <div class="container-cartProduct">
    ${imgChild.outerHTML}
    </div>
    ${pChild.outerHTML}
    <input type="number" value="1">
    <i class="fa-solid fa-trash fa-xl" style="color: #ff7300;" onclick="removeItem(this)"></i>
    </div`
}
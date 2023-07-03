const $form = document.querySelector(".form")
const $notes = document.querySelector(".notes")
const $inputText = document.querySelector(".inputText")
let countNotes = 0
// creating a function inside addEventListener to prevent the automatic reload
$form.addEventListener("submit", function createPost(events){
    events.preventDefault()
    // countNotes used to set a note limit
    if (countNotes !=4){
        // insertAdjacentHTML to create the notes
        $notes.insertAdjacentHTML("beforeend", `
    <div>
        <p>${$inputText.value}</p>
        <div class=buttonsDisplay>
            <i class="fa-solid fa-pen-to-square" onclick="editPost(this)"></i>
            <i class="fa-solid fa-trash" onclick="deletePost(this)"></i>
        </div>
    </div>`)
    // reseting the text bar
    $inputText.value = String()
    countNotes++
    }
})
let deletePost = (e) =>{
    //Taking the grandparent of the button and removing it
    e.parentElement.parentElement.remove()
    countNotes --
}
let editPost = (e) =>{
    //Taking the grandparent of the button, putting its value in the text
    //box and removing it
    $inputText.value = e.parentElement.previousElementSibling.innerHTML
    e.parentElement.parentElement.remove()
    countNotes --
}
const $form = document.querySelector(".form")
const $notes = document.querySelector(".notes")
const $inputText = document.querySelector(".inputText")
let notesId = []
let idCount = 0
// creating a function inside addEventListener to prevent the automatic reload
$form.addEventListener("submit", function createPost(events){
    events.preventDefault()
    // countNotes used to set a note limit
    // insertAdjacentHTML to create the notes
    $notes.insertAdjacentHTML("beforeend", `
    <div id="${idCount}">
        <p>${$inputText.value}</p>
        <div class=buttonsDisplay>
            <i class="fa-solid fa-pen-to-square" onclick="editPost(this)"></i>
            <i class="fa-solid fa-trash" onclick="deletePost(this)"></i>
        </div>
    </div>`)
    // reseting the text bar
    localStorage.setItem(`${idCount}`,`<div id="${idCount}">
    <p>${$inputText.value}</p>
    <div class=buttonsDisplay>
        <i class="fa-solid fa-pen-to-square" onclick="editPost(this)"></i>
        <i class="fa-solid fa-trash" onclick="deletePost(this)"></i>
        </div>
    </div>`)
    $inputText.value = String()
    notesId.push(idCount)
    idCount ++
})
function deletePost(e){
    //Taking the grandparent of the button and removing it
    e.parentElement.parentElement.remove()
    const idToDelete = Number(e.parentElement.parentElement.id)
    const notDeletedNotes = readNotes().filter((note)=>{
        return note != idToDelete
    })
    notesId = notDeletedNotes
    localStorage.removeItem(String(idToDelete))

}
function editPost(e){
    //Taking the grandparent of the button, putting its value in the text
    //box and removing it
    $inputText.value = e.parentElement.previousElementSibling.innerHTML
    e.parentElement.parentElement.remove()
    const idToDelete = Number(e.parentElement.parentElement.id)
    const notDeletedNotes = readNotes().filter((note)=>{
        return note != idToDelete
    })
    notesId = notDeletedNotes
    localStorage.removeItem(String(idToDelete))
}
function readNotes(){
    return notesId
}
function startNotes(){
    const savedNotes = {...localStorage}
    let counter = 0
    while(savedNotes[counter]){
        $notes.innerHTML += savedNotes[counter]
        counter++
        idCount++
    }
}
startNotes()

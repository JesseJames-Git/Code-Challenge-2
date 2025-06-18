document.addEventListener ('DOMContentLoaded', () => {
    document.querySelector('form') .addEventListener('submit', (event) => {
        event.preventDefault() // Prevents default actions
        const input = document.querySelector("#input");
        guestNameShower(input.value);
        input.value = "";
    })
})
function guestNameShower(guestName) {
    let list = document.querySelector("#list");

    if (list.childElementCount > 9) {
        alert("Guest list is full")    
        return
    }
    // limits guest number


    let guestList = document.createElement("li");

    let nameSpan = document.createElement("span")
    nameSpan.textContent = guestName;


    let rsvpButton = document.createElement("button")
    rsvpButton.textContent = "Not Attending"
    rsvpButton.type = "button"


  rsvpButton.addEventListener("click", () => {
    if (rsvpButton.textContent === "Not Attending") {
      rsvpButton.textContent = "Attending";
      rsvpButton.style.backgroundColor = "lightgreen";
      rsvpButton.style.marginTop = "10px"
    } else{
      rsvpButton.textContent = "Not Attending";
      rsvpButton.style.backgroundColor = "lightcoral";
      rsvpButton.style.marginTop = "10px"
    } 
    // Makes RSVP button functional
})
    let guestCategory = document.createElement("button")
    guestCategory.textContent = "Friend"
    guestCategory.type ="button"
    
    guestCategory.addEventListener("click", ()=> { 
        if(guestCategory.textContent === "Friend"){
            guestCategory.textContent = "Family"
            guestCategory.style.backgroundColor = "Orange"
        } else if (guestCategory.textContent === "Family") {
            guestCategory.textContent = "Colleague"
            guestCategory.style.backgroundColor = "Green"        
        } else{
            guestCategory.textContent = "Friend"
            guestCategory.style.backgroundColor = "Yellow"
        }   
        //Makes Guest category button functional
    });
    
    let deleteButton = document.createElement("button");
    deleteButton.textContent = 'Remove';
    deleteButton.addEventListener('click',nameDeleter)
    deleteButton.type ="button"

    function nameDeleter(event){
    event.target.parentElement.remove()
}
// Makes remove button functional

    let timeStamp = document.createElement("small")
    let now = new Date()
    timeStamp.textContent = `Added at: ${now.toLocaleTimeString()}`
    timeStamp.style.marginLeft = "10px"
    timeStamp.style.color = "bisque"

    //Creates timestamp

    let editButton = document.createElement("button")
    editButton.textContent = "Edit"
    editButton.type ="button"

    editButton.addEventListener("click" ,() => {      
        let input = document.createElement("input")
        input.type = "text"
        input.value = nameSpan.textContent
        
        let saveButton = document.createElement("button")
        saveButton.textContent = "Save"

        guestList.replaceChild(input, nameSpan)
        guestList.replaceChild(saveButton, editButton)

        saveButton.addEventListener("click", () =>{
            nameSpan.textContent = input.value
            guestList.replaceChild(nameSpan ,input)
            guestList.replaceChild(editButton ,saveButton)
        })
    })
    // Makes edit and save button functional

   
    list.appendChild(guestList);
    guestList.appendChild(nameSpan);
    guestList.appendChild(editButton)
    guestList.appendChild(guestCategory)
    guestList.appendChild(deleteButton);
    guestList.appendChild(rsvpButton)
    guestList.appendChild(timeStamp)
    
    //Appends Child elements to parent element ("li")
}




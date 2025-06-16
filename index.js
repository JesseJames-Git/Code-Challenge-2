document.addEventListener ('DOMContentLoaded', () => {
    document.querySelector('form') .addEventListener('submit', (event) => {
        event.preventDefault()
        const input = document.querySelector("#input");
        guestNameShower(input.value);
        input.value = "";
    })
})
function guestNameShower(guestName) {
    let list = document.querySelector("#list");

    let guestList = document.createElement("li");

    let nameSpan = document.createElement("span")
    nameSpan.textContent = guestName;

    let rsvpButton = document.createElement("button")
    rsvpButton.textContent = "RSPV:"
    rsvpButton.style.height = "48px"
    rsvpButton.type = "button"


  rsvpButton.addEventListener("click", () => {
    if (rsvpButton.textContent.includes("Not Attending")) {
      rsvpButton.textContent = "RSVP: Attending";
      rsvpButton.style.backgroundColor = "lightgreen";
      rsvpButton.style.marginTop = "auto"
    } else {
      rsvpButton.textContent = "RSVP: Not Attending";
      rsvpButton.style.backgroundColor = "lightcoral";
      rsvpButton.style.marginTop = "auto"
    }
  });
    
    let deleteButton = document.createElement("button");
    deleteButton.textContent = 'Remove';
    deleteButton.addEventListener('click',nameDeleter)
    deleteButton.type ="button"
   
    list.appendChild(guestList);
    guestList.appendChild(nameSpan);
    guestList.appendChild(deleteButton);
    guestList.appendChild(rsvpButton)
}

function nameDeleter(event){
    event.target.parentElement.remove()
}



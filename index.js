document.addEventListener ('DOMContentLoaded', () => {
    document.querySelector('form') .addEventListener('submit', (event) => {
        event.preventDefault()
        guestNameShower(event.target.input.value)
    })
})
function guestNameShower(guestName) {
    let list = document.querySelector("#list");

    let guestList = document.createElement("li");
    guestList.textContent = `${guestName} `;
    
    let deleteButton = document.createElement("button");
    deleteButton.textContent = 'Remove';
    deleteButton.addEventListener('click',nameDeleter(guestList))
   
    guestList.appendChild(deleteButton);

    list.appendChild(guestList);
}

function nameDeleter(name){
    name.remove()
}

function listLimiter(guestList){
    
}

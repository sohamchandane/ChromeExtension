let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const otpt = document.querySelector("#output") //OUTPUT

function saveInputBtn(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    displayOutput()
}

function displayOutput(){
    let outputStr = ""
    for (let i=0; i<myLeads.length; i++){
        outputStr += 
            `<li>
                <a target=blank href=${myLeads[i]}> ${myLeads[i]} </a>
            </li>`
    }
    otpt.innerHTML = outputStr
}

inputBtn.addEventListener("click", saveInputBtn)
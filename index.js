let myLeads = []

const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")

const leadsFromLocalstorage =localStorage.getItem("myLeads")
if(leadsFromLocalstorage){
    console.log(leadsFromLocalstorage)
    myLeads=JSON.parse(leadsFromLocalstorage)
    render(myLeads)
}

saveBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
 })

function render(leads){
    let listItem = ""
    for(let i=0; i<leads.length; i++){
        listItem += `<li>
            <a href="${leads[i]}" target='_blank'>
            ${leads[i]}
            </a>
            </li>`
    }
    ulEl.innerHTML=listItem
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})


tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    })
    
})


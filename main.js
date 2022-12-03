let form = document.querySelector("form")
let Firstname = document.querySelector("#Firstname")
let contact = document.querySelector("#contact")
let select = document.querySelector("select")


 form.addEventListener("submit", saveItems)
  function saveItems(e) {
    e.preventDefault()
    let Link = document.createElement("h1")
    Link.innerText = "DATA"
    
    let ul = document.querySelector("ul")
    ul.appendChild(Link)
    let label1 = document.createElement("label")
    label1.innerText = "NAME"
    ul.appendChild(label1)
    let nameLi = document.createElement("li")
    nameLi.innerText = Firstname.value
    ul.appendChild(nameLi)

    let label2 = document.createElement("label")
    label2.innerText = "CONTACT NUMBER"
    ul.appendChild(label2)
    let contactLi = document.createElement("li")
    contactLi.innerText = contact.value
    ul.appendChild(contactLi)
    let label3 = document.createElement("label")
    label3.innerText = "RELATION"
    ul.appendChild(label3)
 let relLi = document.createElement("li")
 relLi.innerText = selected.value
  ul.appendChild(relLi)
  let Link2 = document.createElement("a")
  Link2.innerText = "CALL"
  Link2.style.fontSize = "32px"
  
  Link2.setAttribute("href", `tel:${contact.value}`)
  
  ul.appendChild(Link2)
    
    form.reset()

}
 



import { renderModalLogin } from "./modalLogin.js"
import { petz } from "../assets/data/dataBase.js"
import { login } from "/src/scripts/api.js"
import { renderModalRegister } from "./modalCadastro.js"
export function listenerHeader () {
    const buttonLogin = document.querySelector('#login')
    buttonLogin.addEventListener('click', function(){
        renderModalLogin()
    })
    const buttonRegister = document.querySelector('#register')
    buttonRegister.addEventListener('click', function(){
        renderModalRegister()
    })
}
listenerHeader()
export function openSandwich (){
    const buttonSandwich = document.querySelector('.open_sandwich')
    const divSandwich = document.querySelector('.div_sandwich')
    buttonSandwich.addEventListener('click', function(){
        divSandwich.classList.toggle('flex')
        if (divSandwich.classList.contains('flex')){
            buttonSandwich.innerHTML = ""
            buttonSandwich.insertAdjacentHTML('beforeend', `
            <img class="open" src="/src/assets/imgs/botaoFechar.svg">
            `)
        } else {
            buttonSandwich.innerHTML=""
            buttonSandwich.insertAdjacentHTML('beforeend', `
            <img class="open" src="/src/assets/imgs/botaoAbrir.svg">
            `)
        }
        
    })
   
    
}
openSandwich()

function renderPetCards(){
    const containerCards = document.querySelector('.container_cards')
  
   petz.forEach((animal)=> {
    containerCards.insertAdjacentHTML('beforeend', `
    <div class="card_pet">
        <img class="img_card" src=${animal.photo} alt="imagem de um pet">
        <div class="texto_card">
            <h2 class="pet_name">${animal.name} </h2>
            <p class="pet_type"> ${animal.type}</p>
        </div>
    </div>
    
    `)
   })
}
renderPetCards()
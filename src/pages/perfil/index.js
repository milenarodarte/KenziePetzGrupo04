import { modalEditProfile, modalDeleteProfile, modalRegisterPet, modalEditPet} from "./modal.js";
import { createPet, deleteProfile, getAllMyPets, updatePet, updateProfile} from "../../scripts/api.js"
import toast from "../../scripts/toast.js";

const token           = localStorage.getItem('token')
const user            = JSON.parse(localStorage.getItem('user')) 
import {logOut} from "../../scripts/logOut.js"

const body = document.querySelector('body')
/* JSON.parse(localStorage.getItem('token')) */
let atualizationPetButtons;

renderProfile(user)
addListenerDeleteProfile()
addListenerEditProfile()

const registerPet      = document.getElementById("registerPet")

// render profile

function renderProfile(user) {
  const navProfile = document.getElementById("nav_profile")
  const innerHTML = `
    <img src="${user.avatar_url}" width="320" height="320">
    <div class="info-user">
        <div class="info-h2 font-2-bold brand100">
            <h2>Dados Pessoais</h2>
        </div>
        <div class="info-span font-4-bold">
            <span><span class="brand100">Nome:</span> ${user.name}</span>
            <span><span class="brand100">Email:</span> ${user.email}</span>
        </div>
        <div class="info-button"> 
            <button class="button_purple_info font-5-bold" id="editProfile">Atualizar informações</button>
            <button class="button_red_info font-5-bold" id="deleteProfile">Deletar conta</button>
        </div>
    </div>
  `
  navProfile.innerHTML = innerHTML
}


logOut()
async function renderPets(){
    const ul = document.getElementById("my-list-pets")
    ul.innerHTML = ""
    try{
    const allPets = await getAllMyPets(token) 
    console.log(allPets)
    allPets.forEach(pet => {
        let avaliable = pet.available_for_adoption ? "Sim" : "Não"
        let li = document.createElement("li")
        li.innerHTML = `
        <img src="${pet.avatar_url}" alt="imagem de pet">
        <div class="flex-column info-animal">
            <span><span class="brand100">Nome:</span>${pet.name}</span>
            <span><span class="brand100">Espécie:</span>${pet.species}</span>
            <span><span class="brand100">Adotável:</span>${avaliable}</span>
            <button data-pet-id="${pet.id}" data-pet-name="${pet.name}" data-pet-species="${pet.species}" class="button_purple font-5-bold" data-action="atualizationPetButton">Atualizar</button>
        </div>`
        ul.append(li)
    })}
    //atualizar pet
    finally{
        atualizationPetButtons = document.querySelectorAll('button[data-action="atualizationPetButton"]')
    atualizationPetButtons.forEach(button => button.addEventListener("click", (e) => {
    let modal = modalEditPet()
    document.body.insertAdjacentElement("beforeend", modal)
    let closeButton         = document.getElementById("close")
    let editAvatarPet       = document.getElementById("pet-avatar-edit")
    let editPetButton       = document.getElementById("button-edit-pet")
        console.log(editPetButton)
    editPetButton.addEventListener("click", async (subevent) => {
        subevent.preventDefault()
        await updatePet(token, button.dataset.petId, 
            {
                "name": button.dataset.petName,
                "bread": "SRD",
                "species": button.dataset.petSpecies,
                "avatar_url": editAvatarPet.value
              }
            )
            .then((response) => {
                renderPets()
                document.querySelector('.modal-wrapper').remove()
            })
    })
        
    closeButton.addEventListener("click", (subevent) => {
        subevent.preventDefault()
        document.querySelector('.modal-wrapper').remove()
    })
})
)
    }
}
renderPets()


function addListenerEditProfile() {
    const user = JSON.parse(localStorage.getItem('user')) 
    const editProfile = document.getElementById("editProfile")
    //editar perfil
    editProfile.addEventListener("click", (e) => {
        let modal = modalEditProfile(user)
        document.body.insertAdjacentElement("beforeend", modal)
        let closeButton     = document.getElementById("close")
        let editNameUser    = document.getElementById("user-name")
        let editEmailUser   = document.getElementById("user-email")
        let editAvatarUser  = document.getElementById("user-avatar")
        let editProfileUser = document.getElementById("button-edit-profile")
    
        editProfileUser.addEventListener("click", async (subevent) => {
            subevent.preventDefault()
    
            const body = {
                name: editNameUser.value,
                avatar_url: editAvatarUser.value
              }
      
              const result = await updateProfile(token, body)
              if (result.message) {
                  toast("Erro", "Erro na operação", "Ocorreu erro ao atualizar o perfil")
              } else {
                  toast("Sucesso", "Sucesso na operação", "Atualização de perfil com sucesso")
                  renderProfile(result)
                  addListenerDeleteProfile()
                  addListenerEditProfile()                  
              }
    
            document.querySelector('.modal-wrapper').remove()       
        })
            
        closeButton.addEventListener("click", (subevent) => {
            subevent.preventDefault()
            document.querySelector('.modal-wrapper').remove()
        })
    })
}

function addListenerDeleteProfile() {
    const btnDeleteProfile = document.getElementById("deleteProfile")
    //deletar perfil
    btnDeleteProfile.addEventListener("click", (e) => {
        let modal = modalDeleteProfile()
        document.body.insertAdjacentElement("beforeend", modal)
        let closeButton   = document.getElementById("close")
        let dontDeleteProfile = document.getElementById("button-dont-profile")
        let deleteButton  = document.getElementById("button-delete-profile")
    
        deleteButton.addEventListener("click", async (subevent) => {
            subevent.preventDefault()
      
            const result = await deleteProfile(token)
            if (result.message) {
                toast("Erro", "Erro na operação", "Ocorreu erro ao deletar o perfil")
            } else {
                toast("Sucesso", "Sucesso na operação", "Deletado o perfil com sucesso")
                window.location.assign("/")
            }
      
            document.querySelector('.modal-wrapper').remove()
        })
    
        dontDeleteProfile.addEventListener("click", async (subevent) => {
            subevent.preventDefault()
            document.querySelector('.modal-wrapper').remove()
        })
            
        closeButton.addEventListener("click", (subevent) => {
            subevent.preventDefault()
            document.querySelector('.modal-wrapper').remove()
        })
    })
}




// registrar pet

registerPet.addEventListener("click", (e) => {
    let modal = modalRegisterPet()
    document.body.insertAdjacentElement("beforeend", modal)
    let closeButton        = document.getElementById("close")
    let createNamePet      = document.getElementById("pet-name")
    let createSpeciePet    = document.getElementById("pet-raca")
    let createAvatarPet    = document.getElementById("pet-avatar")
    let registerPetProfile = document.getElementById("button-register-pet")

    registerPetProfile.addEventListener("click", async (subevent) => {
        subevent.preventDefault()
        let body = {
                "name" : createNamePet.value,
                "bread" : "SRD",
                "species" : createSpeciePet.value,
                "avatar_url" : createAvatarPet.value
        }
        await createPet(token, body).then(()=>{
            document.querySelector('.modal-wrapper').remove()
            renderPets()
            })
    })
        
    closeButton.addEventListener("click", (subevent) => {
        subevent.preventDefault()
        document.querySelector('.modal-wrapper').remove()
    })
})

//abrir sandwich

export function openSandwich (){
    const buttonSandwich = document.querySelector(".open_sandwich")
    const divSandwich = document.querySelector(".div_sandwich")
    buttonSandwich.addEventListener("click", function(){
        divSandwich.classList.toggle("flex")
        if (divSandwich.classList.contains("flex")){
            buttonSandwich.innerHTML = ""
            buttonSandwich.insertAdjacentHTML("beforeend", `
            <img class=“open” src=/src/assets/imgs/botaoFechar.svg>
            `)
            divSandwich.id = 'sandwich'
        } else {
            buttonSandwich.innerHTML= ""
            buttonSandwich.insertAdjacentHTML("beforeend", `
            <img class=“open” src=/src/assets/imgs/botaoAbrir.svg>
            `)
            divSandwich.id = 'none'
        }
    })
}
openSandwich()
function goToHome(){
    const home = document.querySelector('#register')
    home.addEventListener('click', function(){
        window.location.href = "/src/pages/home/index.html"
    })
}
goToHome()
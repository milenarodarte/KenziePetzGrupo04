import { getAllPets } from "/src/scripts/api.js"
import { getTokenFromLocalStorageAndVerifyLogin } from "/src/scripts/getTokenAndVerify.js"
import { logOut } from "../../scripts/logOut.js"
import { createAdoption } from "../../scripts/api.js"
import { toast } from "../../scripts/toast.js"

const token = getTokenFromLocalStorageAndVerifyLogin()
async function renderCards(token) {
  const arrayPetz = await getAllPets(token)
  const containerCards = document.querySelector('.container_cards')
  arrayPetz.forEach(pet => {
    containerCards.insertAdjacentHTML('beforeend', `
    <div class="card_pet">
        <img class="img_card" src=${pet.avatar_url} alt="imagem de um pet">
        <div class="texto_card">
            <h2 class="pet_name">${pet.name} </h2>
            <p class="pet_type"> ${pet.species}</p>
            <button class="pet_adoption" type="button" id=${pet.id}>Me adota?</button>
            </div>
    </div>
    `)
  });
  buttonAdoption()
}
renderCards(token)

logOut()
function goToProfile() {
  const profile = document.querySelector('#perfil')
  profile.addEventListener('click', function () {
    window.location.href = "/src/pages/perfil/index.html"
  })
}
goToProfile()
export function openSandwich() {
  const buttonSandwich = document.querySelector('.open_sandwich')
  const divSandwich = document.querySelector('.div_sandwich')
  buttonSandwich.addEventListener('click', function () {
    divSandwich.classList.toggle('flex')
    if (divSandwich.classList.contains('flex')) {
      buttonSandwich.innerHTML = ""
      buttonSandwich.insertAdjacentHTML('beforeend', `
            <img class="open" src="/src/assets/imgs/botaoFechar.svg">
            `)
    } else {
      buttonSandwich.innerHTML = ""
      buttonSandwich.insertAdjacentHTML('beforeend', `
            <img class="open" src="/src/assets/imgs/botaoAbrir.svg">
            `)
    }

  })


}
openSandwich()
function buttonAdoption() {
  const buttonAdoptions = document.querySelectorAll('.pet_adoption')
  const arrayAdoption = Array.from(buttonAdoptions)

  arrayAdoption.forEach(btn => {
    btn.addEventListener('click', async function () {
      const body = {
        "pet_id": `${btn.id}`
      }
      const adoption = await createAdoption(token, body)
      if (adoption.message) {
        toast(`${adoption.response}`, `${adoption.status}`, `${adoption.message}`)
      }
    })
  })
}


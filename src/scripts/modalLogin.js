import { login } from "./api.js"
import { renderModalRegister } from "./modalCadastro.js"

function modalLogin() {


    const bgmodal = document.createElement("section")
    const modal = document.createElement("section")
    const form = document.createElement("form")

    const divHeader = document.createElement("div")
    const h2title = document.createElement("h2")
    const btnCloseModal = document.createElement("button")
    const iconClose = document.createElement("img")

    const inputEmail = document.createElement("input")
    const inputPassword = document.createElement("input")
    const btnEntrar = document.createElement("button")
 
    const footer = document.createElement("footer")

    bgmodal.classList = 'modal-wrapper'
    modal.classList = 'modal flex flex-col'
    divHeader.classList = 'flex justify-end bg-brand100 modal-header'
    h2title.classList = 'font-2-bold text-align-center brand100 mt-0'
    btnCloseModal.classList = 'clean-btn'
    form.classList = 'flex flex-col gap-12 form-padding'
    inputEmail.classList = 'input-default'
    inputPassword.classList = 'input-default'
    btnEntrar.classList = 'button_purple_max'
    footer.classList = 'bg-brand100 modal-footer'


    h2title.innerText = 'Login'
    iconClose.src = '/src/assets/icons/btn_close.svg'
    btnCloseModal.addEventListener('click',() => {
        bgmodal.remove()
    })


    inputEmail.name = 'email'
    inputEmail.placeholder = 'Email'
    inputEmail.type = 'email'

    
    inputPassword.name = 'password'
    inputPassword.placeholder = 'Senha'
    inputPassword.type = 'password'

    btnEntrar.innerText = 'Entrar'
    
    
    
    form.addEventListener('submit', async (event) => {
        
        
        event.preventDefault()

        const inputs = [...event.target]
        
        const body = {}
     
        
           
        inputs.forEach((element)=> {
            if (element.value !== ""){
                body[element.name] = element.value
            }
        })
        

        await login(body)
        
        bgmodal.remove()
    })

   
    form.append(inputEmail, inputPassword,btnEntrar)

    form.insertAdjacentHTML ('beforeend', `
    <pre class="font-7-regular">Não tem cadastro? Clique <a id="btnRegister" class="brand100">aqui</a> para se cadastrar.</pre>
    `)

    btnCloseModal.append(iconClose)
    divHeader.append(btnCloseModal)

    modal.append(divHeader, h2title, form,footer)
    bgmodal.append(modal)    
    
    return bgmodal

    
}


function renderModalLogin() {

    const mainContainer = document.querySelector(".container")

    const modal = modalLogin()
    mainContainer.append(modal)

    const btnRegister = document.getElementById("btnRegister")
    btnRegister.addEventListener("click", (event) => {
        modal.remove()
        renderModalRegister()
    })


}


export {
    renderModalLogin,
    
}
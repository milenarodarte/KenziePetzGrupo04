import { createUser } from "./api.js"
import { renderModalLogin } from "./modalLogin.js"

function modalRegister() {


    const bgmodal = document.createElement("section")
    const modal = document.createElement("section")
    const form = document.createElement("form")

    const header = document.createElement("header")
    const h2title = document.createElement("h2")
    const btnCloseModal = document.createElement("button")
    const iconClose = document.createElement("img")

    const inputName = document.createElement("input")
    const inputEmail = document.createElement("input")
    const inputPassword = document.createElement("input")
    const inputAvatar = document.createElement("input")
    const btnCadastrar = document.createElement("button")
 
    const footer = document.createElement("footer")

    bgmodal.classList = 'modal-wrapper'
    modal.classList = 'modal flex flex-col'
    header.classList = 'flex justify-end bg-brand100 modal-header'
    h2title.classList = 'font-2-bold text-align-center brand100 mt-2'
    btnCloseModal.classList = 'clean-btn'
    form.classList = 'flex flex-col gap-12 form-padding'
    inputName.classList = 'input-default'
    inputEmail.classList = 'input-default'
    inputPassword.classList = 'input-default'
    inputAvatar.classList = 'input-default'
    btnCadastrar.classList = 'button_purple_max'
    footer.classList = 'bg-brand100 modal-footer'


    h2title.innerText = 'Cadastrar'
    iconClose.src = '/src/assets/icons/btn_close.svg'
    btnCloseModal.addEventListener('click',() => {
        bgmodal.remove()
    })

    inputName.name = 'name'
    inputName.placeholder = 'Nome'
    inputName.type = 'text'

    inputEmail.name = 'email'
    inputEmail.placeholder = 'Email'
    inputEmail.type = 'email'

    
    inputPassword.name = 'password'
    inputPassword.placeholder = 'Senha'
    inputPassword.type = 'password'


    inputAvatar.name = 'avatar_url'
    inputAvatar.placeholder = 'Avatar?'
    inputAvatar.type = 'link'
 
    btnCadastrar.innerText = 'Cadastrar'
    
    
    
    form.addEventListener('submit', async (event) => {
        
        
        event.preventDefault()

        const inputs = [...event.target]
        
        const body = {}
     
        
           
        inputs.forEach((element)=> {
            if (element.value !== ""){
                body[element.name] = element.value
            }
        })
        

        await createUser(body)
        
        bgmodal.remove()
    })

   
    form.append( inputName, inputEmail, inputPassword, inputAvatar, btnCadastrar)

    form.insertAdjacentHTML ('beforeend', `
    <pre class="font-7-regular">Já tem cadastro? Clique <a id="btnLogin" class="brand100">aqui</a> para logar.</pre>
    `)

    btnCloseModal.append(iconClose)
    header.append(btnCloseModal)
    modal.append(header, h2title, form,footer)
    bgmodal.append(modal)
    
    
    
    return bgmodal

    
}


function renderModalRegister() {

    const mainContainer = document.querySelector(".container")

    const modal = modalRegister()
    mainContainer.append(modal)

    const btnLogin = document.getElementById("btnLogin")
    btnLogin.addEventListener("click", (event) => {
        modal.remove()
        renderModalLogin()
    })

}




export {
    renderModalRegister,
    
}
export const modalEditProfile = (user) => {
    let div = document.createElement("div")
    div.classList.add("modal-wrapper")
    div.innerHTML = `
        <form class="modal">
        <header class="modal-header">
            <button id="close"><img src="../../assets/imgs/button-close.png"></button>
        </header>
        
            <h1 class="font-1-bold brand100" >Atualizar perfil</h1> 
        <div>

        <input type="text" id="user-name" placeholder="Nome" value="${user.name}">
        <input type="email" id="user-email" placeholder="Email" value="${user.email}">
        <input type="url" id="user-avatar" placeholder="Avatar" value="${user.avatar_url}">

        <button class="button_purple_modal font-5-bold" id="button-edit-profile">Atualizar</button>
        </div>
        <div class="footer"></div>
        </form>`
    return div
}

export const modalDeleteProfile = () => {
    let div = document.createElement("div")
    div.classList.add("modal-wrapper")
    div.innerHTML = `
        <form class="modal">
        <header class="modal-header">
            <button id="close"><img src="../../assets/imgs/button-close.png"></button>
        </header>
            <h1 class="font-1-bold brand100" >Deseja mesmo deletar sua conta?</h1> 
        <div>
            <button class="button_purple_modal_delete font-5-bold" id="button-dont-profile">Não desejo deletar minha conta</button>
            <button class="button_red_modal font-5-bold" id="button-delete-profile">Quero deletar minha conta</button>
        </div>
        <div class="footer"></div>
        </form>`
    return div
}


export const modalRegisterPet = () => {
    let div = document.createElement("div")
    div.classList.add("modal-wrapper")
    div.innerHTML = `
        <form class="modal">
        <header class="modal-header">
            <button id="close"><img src="../../assets/imgs/button-close.png"></button>
        </header>
        
            <h1 class="font-1-bold brand100" >Cadastrar pet</h1> 
        <div>
            <input type="text" id="pet-name" placeholder="Nome">
            <div class="select">
                <select id="pet-raca">
                    <option value="Cachorro">Cachorro</option>
                    <option value="Gato">Gato</option>
                    <option value="Aves">Aves</option>
                    <option value="Repteis">Repteis</option>
                    <option value="Outros">Outros</option>
                </select>
            </div>
            <input type="url" id="pet-avatar" placeholder="Avatar">
            <button class="button_purple_modal font-5-bold" id="button-register-pet">Cadastrar</button>
        </div>
        <div class="footer"></div>
        </form>`
    return div
}

// editar pet
export const modalEditPet = () => {
    let div = document.createElement("div")
    div.classList.add("modal-wrapper")
    div.innerHTML = `
        <form class="modal">
        <header class="modal-header">
            <button id="close"><img src="../../assets/imgs/button-close.png" type="button"></button>
        </header>
            <h1 class="font-1-bold brand100" >Atualizar pet</h1> 
        <div>
            <input type="url" id="pet-avatar-edit" placeholder="Avatar">
            <button class="button_purple_modal font-5-bold" id="button-edit-pet" type="button">Atualizar</button>
        </div>
        <div class="footer"></div>
        </form>`   
        console.log(document.querySelector("form"))
    return div
}


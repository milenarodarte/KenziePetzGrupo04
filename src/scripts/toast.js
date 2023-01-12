export const toast = (type="", title = "", message = "", textLink = "", hrefLink = "") => {
  const body = document.querySelector("body")

  const toastContainer = document.createElement("div") 
  toastContainer.classList = "toast-container radius-4 flex flex-col"

  const divTitle = document.createElement("div")
  divTitle.classList = "mb-10"

  const icon = document.createElement("i")
  const spanTitle = document.createElement("span")
  
  if (type == "Erro") {
    icon.classList = "fa fa-ban p-13 radius-50 gray400 bg-alert100 mr-10"
    spanTitle.classList = "alert100 font-4-medium"
  } else {
    icon.classList = "fa fa-check p-13 radius-50 gray400 bg-sucess100 mr-10"
    spanTitle.classList = "sucess100 font-4-medium"
  }
  spanTitle.innerText = title

  const spanMessage = document.createElement("span")

  const link = document.createElement("a")
  link.href = hrefLink
  link.innerText = " " + textLink

  spanMessage.innerText = message
  spanMessage.append(link)

  divTitle.append(icon, spanTitle)

  toastContainer.append(divTitle, spanMessage)

  body.append(toastContainer)
}

export default toast
/*

    <div class="toast-container radius-4 flex flex-col">
        <div class="mb-10">
            <i class="fa fa-check p-13 radius-50 gray900 bg-sucess100 mr-10"></i>
            <span class="sucess100 font-4-medium">Sua conta foi criada com sucesso!</span>
        </div>
        <div class="mb-10">
            <i class="fa fa-ban p-13 radius-50 gray900 bg-alert100 mr-10"></i>
            <span class="alert100 font-4-medium">Titulo de toast alert</span>
        </div>
        <span class="font-5-regular grey200">Agora você pode acessar os conteúdos utilizando seu usuário e senha na página de login: <a href="#">Acessar página de login</a></span>  
    </div>

*/
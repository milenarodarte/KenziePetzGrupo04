export async function logOut () {
    const logOut = document.querySelector('#logout')
    logOut.addEventListener('click', function(){
        localStorage.clear()
        window.location.href ="/index.html"
    })
}

export function getTokenFromLocalStorageAndVerifyLogin() {
    const token = localStorage.getItem('token')
    if (token == "" || token == null || token == undefined) {
        window.location.href = "/index.html"
    }
    return token
}
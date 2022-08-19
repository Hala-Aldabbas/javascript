//local storage

localStorage.setItem('name','hala')
localStorage.getItem('name')
console.log(localStorage.getItem('name'))


// session storage
sessionStorage.setItem('name','heloo')
sessionStorage.getItem('name')
console.log(sessionStorage.getItem('name'))
sessionStorage.removeItem('name')


// cookies
document.cookie = 'name=hala; expires=' + new Date(2022, 7, 17).toUTCString()
document.cookie = 'lastName=aldabbas; expires=' + new Date(2022, 7, 17).toUTCString()

console.log(document.cookie)

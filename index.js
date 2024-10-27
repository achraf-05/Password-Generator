let characters = [
    // alphabet minuscule a-z
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    // alphabet majuscule A-Z
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    // nombres 0-9
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    // caractères spéciaux
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", 
    "=", "{", "}", "[", "]", ":", ";", "<", ">", "?", "/"
]


let passwordel= document.getElementById('password-el')
let generatebtn= document.getElementById('generatebtn')

generatebtn.addEventListener("click", function(){
    let password = ""
    for (i = 0; i < 10; i++){
        let randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    passwordel.textContent = password
})

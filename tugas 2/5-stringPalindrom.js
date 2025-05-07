const string = "madam"
const reversed = string.split('').reverse().join('')

if(string === reversed) {
    console.log(true)
} else if(string !== reversed){
    console.log(false)
}
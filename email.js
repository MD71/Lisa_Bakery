console.log("check it out");

$(document).ready(function(){
$('.submit').click(function(event){
console.log("clicked button")

let email = $('.email').val()
let subject = $('.subject').val()
let message = $('.message').val()
let statusElm = $('.status')
statusElm.empty()

if(email.length > 5 && email.includes('@') && email.includes('.'))){
console.log("email is valid")
statusElm.append('<div>Email is Valid</div>')
} else {
    event.preventDefault()

    statusElm.append('<div>Email is Not Valid</div>')
}
    if (subject.length >= 2){
    statusElm.append('<div>Subject is Valid</div>')
}else {
        event.preventDefault()

    statusElm.append('<div>Subject is not valid</div>')
}

if (message.length > 20) {
    statusElm.append('<div> Message is valid</div>')
} else {
    event.preventDefault()

    statusElm.append('<div> Message is not valid</div>')

}


})










})
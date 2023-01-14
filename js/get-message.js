
var message = document.getElementById("message");

fetch('https://dog.ceo/api/breeds/image/random')
.then(data => {
    console.log(data.json)

    return data.json();
    })
    .then(response => {
        console.log(response.message);
        message.innerHTML = "<img src =" + response.message + ">";   
    });


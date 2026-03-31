let Math = document.querySelector(".Math");
let Random = document.querySelector(".Random");
let SocialStudies = document.querySelector(".Social-Studies");
let Science = document.querySelector(".Science");
let English = document.querySelector(".English");
let MentalHealth= document.querySelector(".Mental-Health");
//identify the output div here
let output = document.querySelector("#output");

//replace myElement below with the var for one of the categories


myElement.addEventListener('click', function(e){
//make a console message appear and say which button was clicked, copy this and make the same pattern for each button 
});


Math.addEventListener('click', function(e){
    console.log("Math button clicked");
    output.textContent = "You chose Math";
});

Random.addEventListener('click', function(e){
    console.log("Random button clicked");
    output.textContent = "You chose Random";
});
SocialStudies.addEventListener('click', function(e){
    console.log("Social Studies button clicked");
    output.textContent = "You chose Social Studies";
});

Science.addEventListener('click', function(e){
    console.log("Science button clicked");
    output.textContent = "You chose Science";
});

English.addEventListener('click', function(e){
    console.log("English button clicked");
    output.textContent = "You chose English";
});

MentalHealth.addEventListener('click', function(e){
    console.log("Mental Health button clicked");
    output.textContent = "You chose Mental Health";
});


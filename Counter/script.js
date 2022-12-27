var counter = 0;
document.querySelector("h1").innerHTML = counter;

document.getElementById("plus").addEventListener("click", function(){
    counter++;
    document.querySelector("h1").innerHTML = counter;
    
})

document.getElementById("minus").addEventListener("click", function(){
    if(counter == 0){
        counter = true;
    }
    counter--;
    document.querySelector("h1").innerHTML = counter;
})

document.getElementById("reset").addEventListener("click", function(){
    counter = 0;
    document.querySelector("h1").innerHTML = counter;
})
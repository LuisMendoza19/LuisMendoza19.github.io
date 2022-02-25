let titleConthea = document.getElementById("conthea");
let infoConthea = document.getElementById("conthea-project");

let titleFotomatic = document.getElementById("fotomatic");
let infoFotomatic = document.getElementById("fotomatic-project");

let titleTsunami = document.getElementById("tsunami");
let infoTsunami = document.getElementById("tsunami-project");

let showConthea = function(){
    if(infoConthea.classList == "hidden"){
        infoConthea.classList.add("conthea-project");
        infoConthea.classList.remove("hidden");
    }else{
        infoConthea.classList.add("hidden");
        infoConthea.classList.remove("conthea-project");
    }
}

let showFotomatic = function(){
    console.log(infoFotomatic);
    if(infoFotomatic.classList == "hidden"){
        infoFotomatic.classList.add("fotomatic-project");
        infoFotomatic.classList.remove("hidden");
    }else{
        infoFotomatic.classList.add("hidden");
        infoFotomatic.classList.remove("fotomatic-project");
    }
}

let showTsunami = function(){
    console.log(infoTsunami);
    if(infoTsunami.classList == "hidden"){
        infoTsunami.classList.add("tsunami-project");
        infoTsunami.classList.remove("hidden");
    }else{
        infoTsunami.classList.add("hidden");
        infoTsunami.classList.remove("tsunami-project");
    }
}


titleConthea.onclick = showConthea;
titleFotomatic.onclick = showFotomatic;
titleTsunami.onclick = showTsunami;



window.addEventListener("load", function(){
    console.log("page has loaded");
    document.querySelector("h1").classList.add("heading");
});

window.addEventListener("dblclick", function(){
    const date = new Date();
    window.alert(date);
});

document.querySelector("#toggle").addEventListener("click", function(){
    if (document.getElementById("toggle").checked == true){
        document.getElementById("emailBox").style.display="block";
    }
    else{
        document.getElementById("emailBox").style.display="none";
    }
});
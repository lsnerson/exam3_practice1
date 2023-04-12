let billing = document.querySelector("#billing");
let home = document.querySelector("#home");
let same_box = document.getElementsByName("useBilling")[0];

window.addEventListener("load", function(){
    console.log("page has loaded");
    console.log(document.getElementById("billing").defaultValue);
});

// window.addEventListener("load", function(){
//     let def = document.getElementById("billing").value
//     console.log(def)
// });

same_box.addEventListener("click", function(){
    if (same_box.checked == true){
        console.log('this is checked');
        home.value = billing.value;
        home.disabled = true;
    }
    if (same_box.checked == false){
        console.log('this is unchecked');
        home.value = "";
        home.disabled = false;
    }
}) 

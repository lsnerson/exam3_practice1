// let second_img_alt = document.images.item(1).alt;
let image = document.querySelectorAll("img");
let display_img = document.querySelector("#display");


window.addEventListener("load", function(){
    console.log("page has loaded");
    const myNodeList = document.querySelectorAll("figcaption");
    alert(myNodeList[1].innerHTML);
});


for (var i=0; i < image.length; i++){
    let current_img = image[i];
    let image_url = current_img.src;
    let image_alt = current_img.alt;
    // document.image[i].setAttribute("tabindex", "0");

    
    current_img.addEventListener("mouseover", function mouseOverImage(){
        display_img.style.backgroundImage = "url('" + image_url + "')";

        current_img.classList.add("hidden");

        display_img.innerHTML = image_alt;
    })

// same as above but opposoite for blur

    current_img.addEventListener("mouseout", function mouseOutOfImage(){
        display_img.style.backgroundImage = "";
        current_img.classList.remove("hidden");
        display_img.innerHTML = "Hover over an image below to display the image and the alt text.";
    })


    current_img.addEventListener("focus", function tabOnImage(){
        display_img.style.backgroundImage = "url('" + image_url + "')";

        current_img.classList.add("hidden");

        display_img.innerHTML = image_alt;
    })

    current_img.addEventListener("blur", function tabOffImage(){
        display_img.style.backgroundImage = "";
        current_img.classList.remove("hidden");
        display_img.innerHTML = "Hover over an image below to display the image and the alt text.";
    })

}







// function image1(){
//     pic = document.getElementsByClassName("thumbnail")[0];
//     console.log(pic);
//     document.getElementById("display").style.backgroundImage = "url("+pic.src+")";
//     document.getElementById("display").innerHTML = pic.alt;
//     pic.style.visibility = "hidden";
// };

// function image2(){
//     pic = document.getElementsByClassName("thumbnail")[1];
//     console.log(pic);
//     document.getElementById("display").style.backgroundImage = "url("+pic.src+")";
//     document.getElementById("display").innerHTML = pic.alt;
//     pic.style.visibility = "hidden";
// };

// function image3(){
//     pic = document.getElementsByClassName("thumbnail")[2];
//     console.log(pic);
//     document.getElementById("display").style.backgroundImage = "url("+pic.src+")";
//     document.getElementById("display").innerHTML = pic.alt;
//     pic.style.visibility = "hidden";
// };


// document.getElementsByClassName("thumbnail")[0].addEventListener("mouseover", image1);
// document.getElementsByClassName("thumbnail")[0].addEventListener("mouseout", function(){
//     console.log("mousing out");
//     document.getElementById("display").style.backgroundImage = "";
//     pic.style.visibility = "visible";
//     document.getElementById("display").innerHTML = "Hover over an image below to display the image and the alt text.";
// });

// document.getElementsByClassName("thumbnail")[1].addEventListener("mouseover", image2);
// document.getElementsByClassName("thumbnail")[1].addEventListener("mouseout", function(){
//     console.log("mousing out");
//     document.getElementById("display").style.backgroundImage = "";
//     pic.style.visibility = "visible";
//     document.getElementById("display").innerHTML = "			Hover over an image below to display the image and the alt text.";
// });

// document.getElementsByClassName("thumbnail")[2].addEventListener("mouseover", image3);
// document.getElementsByClassName("thumbnail")[2].addEventListener("mouseout", function(){
//     console.log("mousing out");
//     document.getElementById("display").style.backgroundImage = "";
//     pic.style.visibility = "visible";
//     document.getElementById("display").innerHTML = "			Hover over an image below to display the image and the alt text.";
// });

// // document.querySelectorAll("#thumbs").setAttribute("[tab-index]", "0"); 


// if (document.getElementsByClassName("thumbnail")[0].addEventListener("focus", image1))


// document.getElementsByClassName("thumbnail")[0].addEventListener("blur", function(){
//     document.getElementsByClassName("thumbnail")[0].setAttribute("tabindex", "0");
//     console.log("tab focus 1");
//     document.getElementById("display").style.backgroundImage = "";
//     pic.style.visibility = "visible";
//     document.getElementById("display").innerHTML = "			Hover over an image below to display the image and the alt text.";
// });


// document.getElementsByClassName("thumbnail")[1].addEventListener("focus", image2);
// document.getElementsByClassName("thumbnail")[1].addEventListener("blur", function(){
//     // document.getElementsByClassName("thumbnail")[1].setAttribute("tabindex", "0");    
//     console.log("tab focus 2");
//     document.getElementById("display").style.backgroundImage = "";
//     pic.style.visibility = "visible";
//     document.getElementById("display").innerHTML = "			Hover over an image below to display the image and the alt text.";
// });

// document.getElementsByClassName("thumbnail")[2].addEventListener("focus", image3);
// document.getElementsByClassName("thumbnail")[2].addEventListener("blur", function(){
//     document.getElementsByClassName("thumbnail")[2].setAttribute("tabindex", "0");    
//     console.log("tab focus 3");
//     document.getElementById("display").style.backgroundImage = "";
//     pic.style.visibility = "visible";
//     document.getElementById("display").innerHTML = "			Hover over an image below to display the image and the alt text.";
// });

// // two variables one that is an array of images
// // for i  = 0... then images[i] 

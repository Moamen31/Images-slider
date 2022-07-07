//get element
let slides = document.querySelectorAll(".slide")
let nextBtn = document.querySelector(".nextBtn")
let prevBtn = document.querySelector(".prevBtn")

//for each slide move the slide to left
slides.forEach(function(slide, index){
//same as in the css ig the index 1 it will move 100% if its 2 it moves 200%
    slide.style.left = `${index * 100}%`; //dynamically
});

//counter that we will increase or decrease
let counter = 0;

//function on click
nextBtn.addEventListener("click", function(){
    counter++;
    //call function
    move();
})
prevBtn.addEventListener("click", function(){
    counter--;
    //call function
    move();
})

//function to move the slide with transform
function move(){
    //condition
// //if counter equal to slides length then go to the first image
//     if(counter === slides.length){
//         counter = 0;
//     }
// //if counter is less than 0 then go to the last image
//     if(counter < 0){
// //counter = slides length which is 4 in our case but index is less than length with 1
//         counter = slides.length - 1
//     }

//hide the button when we r at the first or end
//counter =0 1 2 and slides length - 1 = 3. so it will be shown for three images
    if(counter < slides.length - 1){
        nextBtn.style.display = "block"
    }
    else {
        nextBtn.style.display = "none"
    }
    if(counter > 0){
        prevBtn.style.display = "block"
    }
    else {
        prevBtn.style.display = "none"
    }
    //for each slide
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
    console.log(counter)
}
prevBtn.style.display = "none"
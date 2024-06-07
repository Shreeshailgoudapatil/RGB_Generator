// Select the button element
let btn = document.querySelector('button');

// Add event listener to the button
btn.addEventListener("click", function() {
    let h1 = document.querySelector("h1");
    let colourread = rgb_generator();
    h1.innerText = colourread;
    let div = document.querySelector("div");
    div.style.backgroundColor = colourread
    console.log("this is rgb colour"); // Log the generated color

});

// Function to generate random RGB color
function rgb_generator() {
    let red = Math.floor(Math.random() * 256); // Changed 255 to 256 to include 255
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    // Use backticks for template literals
    let colour = `rgb(${red}, ${green}, ${blue})`;
    return colour;
}

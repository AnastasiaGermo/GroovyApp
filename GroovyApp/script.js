/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */


const changeContainer = document.getElementById("container")



    changeContainer.addEventListener("mouseover", (e)=>{
    changeContainer.classList.add("containerColor");
})
   changeContainer.addEventListener("mouseout", (e)=>{
   changeContainer.classList.remove("containerColor");
})



const randomColorGenerator = () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}


const gridcells = document.querySelectorAll(".cell");

    gridcells.forEach((cell) => {

    cell.addEventListener("click", () => {
        if(cell.style.backgroundColor){
            cell.style.backgroundColor ="";
        }
        else{
            cell.style.backgroundColor = 
        `#${randomColorGenerator()}`;
        }
        
    })
    });

    /**
 * Set page background using the "b" key on the keyboard
 */


const body = document.querySelector("body");

body.addEventListener("keydown",(e) => {
 console.log(e.code)
 if(e.code === "KeyB"){
    body.style.backgroundColor === ""
    ?(body.style.backgroundColor = ("black"))
    :(body.style.backgroundColor = (""));
 }
 else{
    body.style.backgroundColor =  `#${randomColorGenerator()}`;
 }
 
})

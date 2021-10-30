const checkbox = document.getElementById("checkbox");
const submitBtn=document.querySelector("button[type=submit]");


checkbox.disabled= true;
submitBtn.disabled= true;

const elements= document.querySelectorAll(".element");
const selectColor= document.getElementById("SelectColor");

//const selectColor = document.querySelector("#SelectColor");


elements.forEach(function (element){
    const color= getRandomColor();

    element.style.backgroundColor = color;
    element.innerHTML=color;
    selectColor.innerHTML=color;
});

function getRandomColor(){
    const letter="0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++){
        color += letter[Math.floor(Math.random() * 16)];

    }
    return color;
}

elements.forEach(function(element)
{
    element.addEventListener("click",function(){
        if (element.innerHTML===selectColor.innerHTML) {
           
            alert("You Are Human...!!");  
            checkbox.checked=true;         
            submitBtn.disabled= false;
        } else {
            alert("Please Verify That You Are Human...!");
            location.reload(true);

        }
    });
});

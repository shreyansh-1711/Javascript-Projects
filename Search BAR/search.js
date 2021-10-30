const searchBtn=document.getElementById("Search-btn");

const searchInput=document.querySelector(".search-input");

console.log(searchBtn, searchInput);

searchBtn.addEventListener("click", function(){

    searchInput.classList.toggle("active-search");
    console.log(searchInput);
});

document.querySelector("main").addEventListener("click", ()=>{

    searchInput.classList.remove("active-search");
});
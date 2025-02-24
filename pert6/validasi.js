

function panggil(){
    let yuiji = prompt ("nama kamu siapa")
    let vuvu = document.getElementById("nama");
    vuvu.innerHTML = yuiji;
    vuvu.style.color = "blue";
}




document.getElementById("tombol").addEventListener("click", function () {
    panggil()
} )
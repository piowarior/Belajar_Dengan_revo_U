// let nama = prompt("siapa nama kamu");

// console.log(nama);

// document.getElementById("nama").innerHTML = nama

// function gantinama() {
//     let nama = prompt("siapa nama kamu") ;
// document.getElementById("nama").innerHTML = nama
// }

// gantinama();

// document.getElementById("tombol").addEventListener("click", function() {
//     gantinama();
// })


let nameinput = document.getElementById("name-input")

document.getElementById("submit").addEventListener("click", function () {
    const nama = nameinput.value

    if(nama == ""){
        document.getElementById("validasi").innerHTML = "nama kamu kosong"
    }else{
        document.getElementById("nama").innerHTML=nama
    }
    
})
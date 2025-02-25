let slideindex = 1;

showDivs(slideindex);

function plusDivs(n){
    showDivs((slideindex += n));
}

function showDivs(n) {
    let i;
    let imglist = document.getElementsByClassName("gambar1");
    if (n > imglist.length) slideindex = 1 ;
    else if (n < 1) slideindex = imglist.length;
    
    for(i = 0 ; i< imglist.length ; i++){
        imglist[i].style.display = "none";
    }
    
    imglist[slideindex - 1].style.display = "block";
}

setInterval(()=> {
    plusDivs(1);
},1000);
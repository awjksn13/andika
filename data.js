const nama = 'andika wjksn';
let usia = "19";

let biodata = document.getElementById('biodata')

function generateBiodata() {
let generasi;

    if (usia > 10 && usia < 18 ) { 
 generasi ="gen Z";
}
else if (usia > 18 && usia <30) {    
 generasi ="gen milenial";
} 
else if(usia >= 30) {
 generasi ="gen Y";
}
else if(usia >2 && usia <10 ) {
    generasi ="gen alpha";
}
else {
 
 generasi ="gen beta";
  }
 return biodata.innerHTML = generasi; 
}
console.log(nama)
console.log(usia)

generateBiodata(); 

//mendapatkan id button
mybutton = document.getElementById("myBtn");

// saat mendapati 20px ke bawah dari bagian paling atas dokumen, button scroll akan muncul
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Saat user mengklik button nya, maka akan melakukan scroll ke atas
function topFunction() {
  document.documentElement.scrollTop = 0; 
}
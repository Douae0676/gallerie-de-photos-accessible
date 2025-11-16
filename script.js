// Fonction appelée au chargement de la page
window.onload = function() {
    console.log("Page chargée");
    addTabIndexToImages();
}

// Ajouter tabindex à toutes les images
function addTabIndexToImages() {
    const images = document.querySelectorAll(".gallery img");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", 0); // rend chaque image accessible au clavier
    }
}

// Ajouter des événements onmouseover, onmouseleave, onfocus, onblur
const images = document.querySelectorAll(".gallery img");

images.forEach(img => {
    img.onmouseover = function() {
        img.style.border = "3px solid red";
    }
    img.onmouseleave = function() {
        img.style.border = "";
    }
    img.onfocus = function() {
        img.style.border = "3px solid green";
    }
    img.onblur = function() {
        img.style.border = "";
    }
});

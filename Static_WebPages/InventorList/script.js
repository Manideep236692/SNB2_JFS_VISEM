// Data for inventors: change image paths to your own images in the "images" folder
const inventors = {
    gosling: {
        photo: "images/james-gosling.jpg",
        text: "James Gosling created the Java programming language at Sun Microsystems in the early 1990s."
    },
    guido: {
        photo: "images/guido-van-rossum.jpg",
        text: "Guido van Rossum developed the Python programming language and released its first version in 1991."
    },
    ritchie: {
        photo: "images/ritchie.jpg",
        text: "Dennis Ritchie developed the C programming language at Bell Labs in the early 1970s."
    },
    bjarne: {
        photo: "images/bjarne-stroustrup.jpg",
        text: "Bjarne Stroustrup designed and implemented C++, an extension of C that adds object-oriented features."
    },
    eich: {
        photo: "images/brendan-eich.jpg",
        text: "Brendan Eich created JavaScript in 1995 while working at Netscape, enabling dynamic and interactive web pages."
    },
    lerdorf: {
        photo: "images/rasmus-lerdorf.jpg",
        text: "Rasmus Lerdorf originally created PHP in 1994 as a set of CGI scripts to track visits to his website."
    },
    matsumoto: {
        photo: "images/yukihiro-matsumoto.jpg",
        text: "Yukihiro 'Matz' Matsumoto designed Ruby with a focus on programmer happiness and productivity."
    },
    hejlsberg: {
        photo: "images/anders-hejlsberg.jpg",
        text: "Anders Hejlsberg is the chief architect of C#, developed by Microsoft as part of the .NET initiative."
    },
    hopper: {
        photo: "images/grace-hopper.jpg",
        text: "Grace Hopper was a pioneer of computer programming and led the development of the COBOL language."
    },
    mccarthy: {
        photo: "images/john-mccarthy.jpg",
        text: "John McCarthy created Lisp and is recognized as one of the founders of the field of Artificial Intelligence."
    }
};

const selectEl = document.getElementById("inventorSelect");
const imgEl = document.getElementById("inventorPhoto");
const descEl = document.getElementById("inventorDesc");
const photoContainer = document.querySelector('.photo-circle');

selectEl.addEventListener("change", function () {
    const key = this.value;

    if (!key) {
        descEl.textContent = "Select an inventor from the list above to see their photo and details.";
        // clear background image and show default inline image
        if (photoContainer) {
            // remove rectangle class and clear any background image
            photoContainer.classList.remove('to-rect');
            photoContainer.style.backgroundImage = '';
        }
        // hide inline image (no default image requested) and remove src
        imgEl.style.display = 'none';
        imgEl.removeAttribute('src');
        imgEl.alt = 'No image';
        return;
    }

    const inv = inventors[key];
    // Convert the circle into a rectangle and show the image inside it
    if (photoContainer) {
        // add class that morphs the shape
        photoContainer.classList.add('to-rect');
        // clear any background-image (we'll use the inline img to fill the rect)
        photoContainer.style.backgroundImage = '';
        // ensure inline <img> is visible and set to the inventor photo
        imgEl.style.display = '';
        imgEl.src = inv.photo;
        imgEl.alt = inv.text || key;
    // no visual effects; just ensure the image shows
    } else {
        // fallback: update img src
        imgEl.src = inv.photo;
    }
    descEl.textContent = inv.text;
});
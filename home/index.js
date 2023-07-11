let pic = document.getElementById("pic");
let bio = document.getElementById("bio");

bio.innerHTML = sessionStorage.getItem("bio");
pic.src = sessionStorage.getItem("pic");

window.onload = async function getGithubData() { 
    if (!sessionStorage.getItem("pic") || !sessionStorage.getItem("bio")) {
        const res = await fetch('https://api.github.com/users/alesscif');
        const response = await res.json();
        pic.setAttribute('crossOrigin', 'anonymous');
        pic.src = response.avatar_url;
        bio.innerHTML = response.bio;
        saveImage();
        sessionStorage.setItem("bio", response.bio)
    }
}

function saveImage() {
    pic.addEventListener("load", function() {
        let imgCanvas = document.createElement("canvas"),
            imgContext = imgCanvas.getContext("2d");
    
            imgCanvas.width = pic.width;
            imgCanvas.height = pic.height;

            imgContext.drawImage(pic, 0, 0, pic.width, pic.height);
    
            saved_pic = imgCanvas.toDataURL("image/png");

            sessionStorage.setItem("pic", saved_pic);
    }, false);
}







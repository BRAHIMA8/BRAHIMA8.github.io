console.log("Le script est bien chargé !");

document.getElementById("presentationButton").addEventListener("click", function() {
    var messageContainer = document.getElementById("messageContainer");
    
    if (messageContainer.style.display === "block") {
        messageContainer.style.display = "none";
        messageContainer.innerHTML = "";
    } else {
        messageContainer.innerHTML = "";
        
        var imgElement = document.createElement("img");
        imgElement.src = "image/O'brien.jpg";
        imgElement.alt = "Image de BRAHIMA KONE";
        
        var messageParagraph = document.createElement("p");
        messageParagraph.innerHTML = "C'était Brahima KONE. Merci d'avoir suivi ma présentation personnelle en miniature ainsi que mon parcours. J'ai hâte de faire équipe avec vous.<br>MERCI!!!";
        
        messageContainer.appendChild(imgElement);
        messageContainer.appendChild(messageParagraph);
        
        messageContainer.style.display = "block";
    }
});

console.log("Le script est bien chargé !");

document.getElementById("presentationButton").addEventListener("click", function() {
    var messageText = "C'était Brahima KONE. Merci d'avoir suivi ma présentation personnelle en miniature ainsi que mon parcours. J'ai hâte de faire équipe avec vous!";
    
    var messageContainer = document.getElementById("messageContainer");
    // Affichage du message
    messageContainer.innerHTML = "<p>" + messageText + "</p>";
    
    var imgElement = document.createElement("img");
    
    imgElement.src = "image/O'brien.jpg"; 
    imgElement.alt = "Image de Brahima KONE";
    
    // Insertion de l'image 
    messageContainer.appendChild(imgElement);
});

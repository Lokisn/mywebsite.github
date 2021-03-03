/**
 * Javascript Omnivers
 *
 * @summary JSON_PAth + Routie + Fetch + Mustache
 * @author Loki
 *
 * Created at     : 2021-02-26 20:04:13
 * Last modified  : 2021-02-26 20:23:28
 */

//-- 0) Vérification --//

console.log("Le script est correctement lié.");

//-- 1) Lien vers le fichier JSON --//

//-- 2) Récupérer les contenus --//

const viewContainer = document.querySelector("#js-main-container");

//-- 3) Routie --//

routie({
    accueil: function() {
        console.log("Accueil");
        showHomePage("views/accueil.html");
    },
    services: function() {
        console.log("Services");
    },
    informations: function() {
        console.log("Informations");
    },
    demo: function() {
        console.log("Démo");
    },
    projets: function() {
        console.log("Projets");
    },
    informations: function() {
        console.log("Informations");
    },
    contact: function() {
        console.log("Contact");
    },
    reseaux_sociaux: function() {
        console.log("Réseaux sociaux");
    },
});

//-- 4) Fetcher un accueil appart --//

function showHomePage(views) {
    fetch(views)
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            viewContainer.innerHTML = html;
        });
}

//-- 5) Mustache |  --//

//-- 6) Mustache |  --//

//-- 7) Mustache |  --//

//-- 8) Mustache |  --//

//-- 9) Mustache |  --//

//-- localstorage Dark mode aurore boréales   --//
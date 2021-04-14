/**
 * Javascript Omnivers
 *
 * @summary JSON_PAth + Routie + Fetch + Mustache
 * @author Loki
 *
 * Created at     : 2021-02-26 20:04:13
 * Last modified  : 2021-04-14 19:47:04
 */

//-- 0) Vérification --//

console.log("Le script est correctement lié.");

//-- 1) Lien vers le fichier JSON --//

//-- 2) Récupérer les contenus --//

const viewContainer = document.querySelector("#js-main-container");

//-- 3) Routie --//

routie({
    accueil: function() {
        showHomePage("views/accueil.html");
    },
    services: function() {
        showServicesPage("views/services.html");
    },
    informations: function() {
        showInfosPage("views/informations.html");
    },
    demo: function() {
        showDemoPage("views/demo.html");
    },
    projets: function() {
        showProjectPage("views/projets.html");
    },
    contact: function() {
        showContactPage("views/contact.html");
    },
    reseaux_sociaux: function() {
        showSocialMediaPage("views/reseau-sociaux.html");
    },
});

//-- 4) Fetcher la page d'accueil --//

function showHomePage(views) {
    fetch(views)
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            viewContainer.innerHTML = html;
        });
}

//-- 5) Fetcher la page des services |  --//

function showServicesPage(views) {
    fetch(views)
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            viewContainer.innerHTML = html;
        });
}

//-- 6) Fetcher la page des informations |  --//

function showInfosPage(views) {
    fetch(views)
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            viewContainer.innerHTML = html;
        });
}

//-- 7) Fetcher la page démo |  --//

function showDemoPage(views) {
    fetch(views)
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            viewContainer.innerHTML = html;
        });
}

//-- 8) Fetcher la page des projets |  --//

function showProjectPage(views) {
    fetch(views)
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            viewContainer.innerHTML = html;
        });
}

//-- 9) Fetcher la page pour contacter |  --//

function showContactPage(views) {
    fetch(views)
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            viewContainer.innerHTML = html;
        });
}

//-- 10) Fetcher la page pour les réseaux sociaux |  --//

function showSocialMediaPage(views) {
    fetch(views)
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            viewContainer.innerHTML = html;
        });
}

//-- localstorage Dark mode aurore boréales   --//

//-- Forcer l'accueil à se lancer au démarrage --//

if (!window.location.hash) {
    routie("accueil");
}
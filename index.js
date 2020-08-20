const url = 'https://blockchain.info/ticker';

function recupererPrix() {
    //Créer une requête
    let requete = new XMLHttpRequest(); // Créer un objet
    requete.open('GET', url); // Premier paramètre GET/POST, deuxieme paramètre: url
    requete.responseType = 'json'; // Nous attendons du json
    requete.send(); // Nous envoyons notre rêquete

    //Dés u'on recoit  une réponse,cette fonction est executée
    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let response = requete.response;// On stock la réponse
                let prixEnEuros = response.EUR.last;
                document.querySelector('#price_label').textContent = prixEnEuros;
            }
            else {
                alert('Un problème est intervenu, merci de revenir plus tard.');
            }
        }
    }
    console.log('Prix actualisé');
}

setInterval(recupererPrix, 1000);
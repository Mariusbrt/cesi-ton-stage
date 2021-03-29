self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([ "./" , "./montagne.png" , "./site.html","./manifest.json"
            , "./sw.js", "./inscription/inscription.html" , "./inscription/inscription.css" , 
            "./inscription/formulaire_tuteur/formulaire_tuteur.php", 
            "./inscription/formulaire_tuteur/formulaire_tuteur.html", 
            "./inscription/formulaire_tuteur/style_formulaire_tuteur.css" ,
            "./inscription/formulaire_etudiant/style_formulaire_etudiant.css" ,
            "./inscription/formulaire_etudiant/insertion.php", 
            "./inscription/formulaire_etudiant/formulaire_etudiant.html" , 
            "./inscription/formulaire_entreprise/insertion.php", 
            "./inscription/formulaire_entreprise/style_formulaire_entreprise.css" ,
            "./inscription/formulaire_entreprise/formulaire_entreprise.html", 
            "./script/script.js", "./connection/connection.html", 
            "./connection/style_connection.css", "./style/style.css"]);
        })

    )
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    );
});
const searchBar = document.getElementById('searchBar');
const categoryBubbles = document.querySelectorAll('.category-bubble');
const articlesGrid = document.getElementById('articlesGrid');

const articles = [
    //Seringue
    { name: 'Seringue de 0.5ml', decription: ' ', price: '5 TND', image: 'images/Seringue-05.jpg', category: 'seringue' },
    { name: 'Seringue a insuline 1ml 29G', description: ' ', price: '5 TND', image: 'images/Seringue-1.jpg', category: 'seringue' },
    { name: 'Seringue de 2ml', description: 'Description pour seringue 10mm', price: '7 TND', image: 'images/Seringue-2.jpg', category: 'seringue' },
    { name: 'Seringue de 3ml', decription: ' ', price: '5 TND', image: 'images/Seringue-3.jpg', category: 'seringue' },
    { name: 'Seringue de 5ml', decription: ' ', price: '5 TND', image: 'images/Seringue-5.jpg', category: 'seringue' },
    { name: 'Seringue de 10ml', decription: ' ', price: '5 TND', image: 'images/Seringue-10.jpg', category: 'seringue' },
    { name: 'Seringue de 20ml', decription: ' ', price: '5 TND', image: 'images/Seringue-20.jpg', category: 'seringue' },
    { name: 'Seringue de 50ml gavage', decription: ' ', price: '5 TND', image: 'images/Seringue-50.jpeg', category: 'seringue' },
    //Compresse
    { name: 'Compresse Stérile 7.5 x 7.5 12p sachet de 5', description: ' ', price: '3 TND', image: 'images/compress-sterile-7-5-5.png', category: 'compresse' },
    { name: 'Compresse Stérile 7.5 x 7.5 12p sachet de 10', description: ' ', price: '3 TND', image: 'images/compress-sterile-7-5-10.png', category: 'compresse' },
    { name: 'Compresse Stérile 10 x 10 sachet de 5', description: ' ', price: '3 TND', image: 'images/compress-sterile-10-5.png', category: 'compresse' },
    { name: 'Compresse Stérile 20 x 20 sachet de 5', description: ' ', price: '3 TND', image: 'images/compress-sterile-20-5.png', category: 'compresse' },
    { name: 'Compresse Stérile 30 x 30 sachet de 5', description: ' ', price: '3 TND', image: 'images/compress-sterile-30-5.png', category: 'compresse' },
    { name: 'Compresse Non Stérile 7.5 x 7.5 12p Boite 100', description: ' ', price: '3 TND', image: 'images/compress-non-sterile-7-5-100.png', category: 'compresse' },
    { name: 'Compresse Non Stérile 10 x 10 12p P5', description: ' ', price: '3  TND', image: 'images/compress-non-sterile-10-5.jpg', category: 'compresse' },
    { name: 'Compresse Non Stérile 10 x 10 12p P100', description: ' ', price: '3 TND', image: 'images/compress-non-sterile-10-100.jpg', category: 'compresse' },
    //Perfuseur
    { name: 'Perfuseur Normal', description: 'Perfuseur médical', price: '15 TND', image: 'images/perfuseur.jpg', category: 'perfuseur' },
    { name: 'Perfuseur Avec Robinet 3 voies', description: 'Perfuseur Avec Robinet 3 voies Neo-Med', price: '15 TND', image: 'images/perfuseur-3-voies.jpg', category: 'perfuseur' },
    { name: 'Perfuseur Noir Photo-Sensible', description: 'Perfuseur médical', price: '15 TND', image: 'images/perfuseur.jpg', category: 'perfuseur' },
    //Gant
    { name: "Gant d'examen", description: ' ', price: '10 TND', image: 'images/gant.png', category: 'gant' },
    { name: 'gant Nitrile', description: ' ', price: '10 TND', image: 'images/gant-nitrile.jpg', category: 'gant' },
    { name: 'gant Stérile 7', description: ' ', price: '10 TND', image: 'images/gant-7.png', category: 'gant' },
    { name: 'gant Stérile 7.5', description: ' ', price: '10 TND', image: 'images/gant-7-5.jpg', category: 'gant' },
    { name: 'gant Stérile 8', description: ' ', price: '10 TND', image: 'images/gant-8.jpg', category: 'gant' },
    { name: 'gant Propre Small Boite 100', description: ' ', price: '10 TND', image: 'images/gant-propre.jpg', category: 'gant' },
    { name: 'gant Propre Meduim Boite 100', description: ' ', price: '10 TND', image: 'images/gant-propre.jpg', category: 'gant' },
    { name: 'gant Propre Large Boite 100', description: ' ', price: '10 TND', image: 'images/gant-propre.jpg', category: 'gant' },
    { name: 'gant de Ménage Jaune', description: ' ', price: '10 TND', image: 'images/gant-menage.jpg', category: 'gant' },
    //couche
    { name: 'Couche Lilas Adulte Large', description: ' ', price: '10 TND', image: 'images/couche-lilas-large.jpg', category: 'couche' },
    { name: 'Couche Lilas Pharmaceutique Moyenne', description: ' ', price: '10 TND', image: 'images/couche-lilas-meduim.jpg', category: 'couche' },
    { name: 'Couche Lilas Pharmaceutique Large', description: ' ', price: '10 TND', image: 'images/couche-lilas-large.jpg', category: 'couche' },
    { name: 'Couche Tena Slip Meduim', description: ' ', price: '10 TND', image: 'images/tena-pants-m.jpg', category: 'couche' },
    { name: 'Couche Tena Slip Large', description: ' ', price: '10 TND', image: 'images/tena-pants-l.jpg', category: 'couche' },
    { name: 'Couche Lilas Maternité Super', description: ' ', price: '10 TND', image: 'images/lilas-maternite.png', category: 'couche' },
    //Sac
    { name: 'Sac Jaune 1m x 1m', description: ' ', price: '10 TND', image: 'images/sac.jpg', category: 'sac' },
    { name: 'Sac Noir 1m x 1m', description: ' ', price: '10 TND', image: 'images/sac-noir.jpg', category: 'sac' },
    { name: 'Sac Jaune 30L', description: ' ', price: '10 TND', image: 'images/sac.jpg', category: 'sac' },
    { name: 'Sac Jaune 50L', description: ' ', price: '10 TND', image: 'images/sac.jpg', category: 'sac' },
    { name: 'Sac Jaune 105L', description: ' ', price: '10 TND', image: 'images/sac.jpg', category: 'sac' },
    { name: 'Sachet Poubelle Jaune', description: ' ', price: '10 TND', image: 'images/sac-jaune.jpg', category: 'sac' },
    { name: 'Sachet Noir', description: ' ', price: '10 TND', image: 'images/sac-noir.jpg', category: 'sac' },
    //Autre
    { name: 'Sac a Urine Non Stérile', description: ' ', price: '10 TND', image: 'images/sac-urine-non-sterile.jpg', category: 'autre' },
    { name: 'Sac a Urine Stérile Ultramed', description: ' ', price: '10 TND', image: 'images/sac-urine-sterile.jpg', category: 'autre' },
    { name: 'Abaisse Langue BT 100', description: ' ', price: '10 TND', image: 'images/abaisse.jpeg', category: 'autre' },
    { name: 'Gel Lavant (Savon)', description: ' ', price: '10 TND', image: 'images/gel.jpg', category: 'autre' },
    { name: 'Lingettes Bébé', description: ' ', price: '10 TND', image: 'images/lingettes.jpg', category: 'autre' },
    { name: 'Transfuseur', description: ' ', price: '10 TND', image: 'images/transfuseur.jpg', category: 'autre' },
    { name: 'Bionime Bondelette Lecteur Glycémie', description: ' ', price: '10 TND', image: 'images/Bionime Bondelette Lecteur Glycémie.jpg', category: 'autre' },
    { name: 'Megaplast 60mm x 1m Boite 100 Strip', description: ' ', price: '10 TND', image: 'images/Megaplast 60mm x 1m Boite 1 Strip.png', category: 'autre' },
    { name: 'Megaplast 8cm x 1m', description: ' ', price: '10 TND', image: 'images/Megaplast 8cm x 1m.jpg', category: 'autre' },
    //Conteneur
    { name: 'Conteneur Jaune 3L', description: ' ', price: '10 TND', image: 'images/Conteneur Jaune 3L.jpeg', category: 'conteneur' },
    { name: 'Conteneur Jaune 5L', description: ' ', price: '10 TND', image: 'images/Conteneur Jaune 5L.jpg', category: 'conteneur' },
    { name: 'Conteneur Jaune 7L', description: ' ', price: '10 TND', image: 'images/Conteneur Jaune 7L.jpeg', category: 'conteneur' },
    //Aiguille
    { name: 'Aiguille Hypodermiques 27G TS', description: ' ', price: '10 TND', image: 'images/Aiguille Hypodermiques 27G TS.jpg', category: 'aiguille' },
    { name: 'Aiguille Hyber Avec Prolongateur', description: ' ', price: '10 TND', image: 'images/Aiguille Hyber Avec Prolongateur.jpg', category: 'aiguille' },
    { name: 'Aiguille Hyber Sans Prolongateur', description: ' ', price: '10 TND', image: 'images/Aiguille Hyber Sans Prolongateur.jpg', category: 'aiguille' },
    { name: 'Collecteur Pour Aiguille PBS 7L', description: ' ', price: '10 TND', image: 'images/Collecteur Pour Aiguille PBS 7L.jpeg', category: 'conteneur' },
    { name: 'Collecteur Pour Aiguille PBS 12L', description: ' ', price: '10 TND', image: 'images/Collecteur Pour Aiguille PBS 12L.jpeg', category: 'conteneur' },
    { name: 'Aiguille 18G', description: ' ', price: '10 TND', image: 'images/Aiguille 18G.jpg', category: 'aiguille' },
    { name: 'Aiguille 19G', description: ' ', price: '10 TND', image: 'images/Aiguille 19G.jpg', category: 'aiguille' },
    { name: 'Aiguille 25G', description: ' ', price: '10 TND', image: 'images/Aiguille 25G.jpg', category: 'aiguille' },
    //Coton
    { name: 'Coton Hydrophyl 50gr', description: ' ', price: '10 TND', image: 'images/Coton Hydrophyl 50gr.jpg', category: 'coton' },
    { name: 'Coton Hydrophyl 100gr', description: ' ', price: '10 TND', image: 'images/Coton Hydrophyl 50gr.jpg', category: 'coton' },
    { name: 'Coton Hydrophyl 500gr', description: ' ', price: '10 TND', image: 'images/Coton Hydrophyl 50gr.jpg', category: 'coton' },
    //Alcool
    { name: 'Isopropanol 70 B/1L', description: 'Alcool', price: '10 TND', image: 'images/Isopropanol 70 B1L.jpg', category: 'alcool' },
    { name: 'Isopropanol 95 B/1L', description: 'Alcool', price: '10 TND', image: 'images/Isopropanol 95 B1L.png', category: 'alcool' },
    { name: 'Isopropanol 95 B/5L', description: 'Alcool', price: '10 TND', image: 'images/Isopropanol 95 B5L.jpg', category: 'alcool' },
    //Papier
    { name: 'Papier Hygiénique Lilas 24 x 2', description: ' ', price: '10 TND', image: 'images/Papier Toilette Paquet de 24.png', category: 'papier' },
    { name: 'Papier Toilette Paquet de 24', description: ' ', price: '10 TND', image: 'images/Papier Hygiénique Lilas 24 x 2.png', category: 'papier' },
    { name: "Papier Roulou de 2 Table d'examen GM", description: ' ', price: '10 TND', image: "images/Papier Roulou de 2 Table d'examen GM.jpg", category: 'papier' },
    //Catheter
    { name: 'Catheter HD 12 FR 16 CM', description: ' ', price: '10 TND', image: 'images/Catheter HD 12 FR 16 CM.jpeg', category: 'catheter' },
    { name: 'Catheter HD 12 FR 20 CM', description: ' ', price: '10 TND', image: 'images/Catheter HD 12 FR 20 CM.jpg', category: 'catheter' },
    { name: "Catheter d'hémodialyse Pédiatrique", description: ' ', price: '10 TND', image: "images/Catheter d'hémodialyse Pédiatrique.jpg", category: 'catheter' },
    { name: "Catheter d'hémodialyse 2 Lum 13cm", description: ' ', price: '10 TND', image: "images/Catheter d'hémodialyse 2 Lum 13cm.png", category: 'catheter' },
    //Hypafix
    { name: 'Hypafix 10cm x 10m', description: ' ', price: '10 TND', image: 'images/Hypafix 10cm x 10m.jpg', category: 'hypafix' },
    { name: 'Hypafix 15cm x 10m', description: ' ', price: '10 TND', image: 'images/Hypafix 15cm x 10m.jpg', category: 'hypafix' },
    //Alese
    { name: 'Alèse Medcare 90cm x 180cm 60 Boite 30', description: ' ', price: '10 TND', image: 'images/Alèse Medcare 90cm x 180cm 60 Boite 30.jpg', category: 'alese' },
    { name: 'Alèse Molinea 60cm x 90cm Bedmat 8G SA/30', description: ' ', price: '10 TND', image: 'images/Alèse Molinea 60cm x 90cm Bedmat 8G SA30.jpg', category: 'alese' },

]

function renderArticles(filteredArticles) {
    articlesGrid.innerHTML = ''; 
    filteredArticles.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.classList.add('article-item');
        articleCard.innerHTML = `
            <img src="${article.image}" alt="${article.name}">
            <h2>${article.name}</h2>
            <p>${article.description || 'Aucune description'}</p>
            <p class="price">${article.price}</p>
        `;
        articlesGrid.appendChild(articleCard);
    });
}

// Initial render
renderArticles(articles);

// Filter articles by category
categoryBubbles.forEach(bubble => {
    bubble.addEventListener('click', () => {
        const category = bubble.getAttribute('data-category');
        const filteredArticles = category === 'all' ? articles : articles.filter(article => article.category === category);
        renderArticles(filteredArticles);
        categoryBubbles.forEach(b => b.classList.remove('active'));
        bubble.classList.add('active');
    });
});

// Search functionality
searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase().trim();
    
    const filteredArticles = articles.filter(article => {
        return (
            article.name.toLowerCase().includes(searchTerm) ||
            (article.description && article.description.toLowerCase().includes(searchTerm))
        );
    });

    renderArticles(filteredArticles);
});
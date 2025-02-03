const searchBar = document.getElementById('searchBar');
const categoryBubbles = document.querySelectorAll('.category-bubble');
const articlesGrid = document.getElementById('articlesGrid');

const articles = [
    //Seringue
    { name: 'Seringue de 0.5ml', decription: 'Description pour seringue 1mm', price: '5€', image: 'images/art1.jpg', category: 'seringue' },
    { name: 'Seringue a insuline 1ml 29G', description: 'Description pour seringue 1mm', price: '5€', image: 'images/art1.jpg', category: 'seringue' },
    { name: 'Seringue de 2ml', description: 'Description pour seringue 10mm', price: '7€', image: 'images/art2.jpg', category: 'seringue' },
    { name: 'Seringue de 3ml', decription: 'Description pour seringue 1mm', price: '5€', image: 'images/art1.jpg', category: 'seringue' },
    { name: 'Seringue de 5ml', decription: 'Description pour seringue 1mm', price: '5€', image: 'images/art1.jpg', category: 'seringue' },
    { name: 'Seringue de 10ml', decription: 'Description pour seringue 1mm', price: '5€', image: 'images/art1.jpg', category: 'seringue' },
    { name: 'Seringue de 20ml', decription: 'Description pour seringue 1mm', price: '5€', image: 'images/art1.jpg', category: 'seringue' },
    { name: 'Seringue de 50ml gavage', decription: 'Description pour seringue 1mm', price: '5€', image: 'images/art1.jpg', category: 'seringue' },
    //Compresse
    { name: 'Compresse Stérile 7.5 x 7.5 12p sachet de 5', description: 'Compresse haute qualité', price: '3€', image: 'https://via.placeholder.com/150', category: 'compresse' },
    { name: 'Compresse Stérile 7.5 x 7.5 12p sachet de 10', description: 'Compresse haute qualité', price: '3€', image: 'https://via.placeholder.com/150', category: 'compresse' },
    { name: 'Compresse Stérile 10 x 10 sachet de 5', description: 'Compresse haute qualité', price: '3€', image: 'https://via.placeholder.com/150', category: 'compresse' },
    { name: 'Compresse Stérile 20 x 20 sachet de 5', description: 'Compresse haute qualité', price: '3€', image: 'https://via.placeholder.com/150', category: 'compresse' },
    { name: 'Compresse Stérile 30 x 30 sachet de 5', description: 'Compresse haute qualité', price: '3€', image: 'https://via.placeholder.com/150', category: 'compresse' },
    { name: 'Compresse Non Stérile 7.5 x 7.5 12p Boite 100', description: 'Compresse haute qualité', price: '3€', image: 'https://via.placeholder.com/150', category: 'compresse' },
    { name: 'Compresse Non Stérile 10 x 10 12p P5', description: 'Compresse haute qualité', price: '3€', image: 'https://via.placeholder.com/150', category: 'compresse' },
    { name: 'Compresse Non Stérile 10 x 10 12p P100', description: 'Compresse haute qualité', price: '3€', image: 'https://via.placeholder.com/150', category: 'compresse' },
    //Perfuseur
    { name: 'Perfuseur Normal', description: 'Perfuseur médical', price: '15€', image: 'https://via.placeholder.com/150', category: 'perfuseur' },
    { name: 'Perfuseur Avec Robinet 3 voies', description: 'Perfuseur Avec Robinet 3 voies Neo-Med', price: '15€', image: 'https://via.placeholder.com/150', category: 'perfuseur' },
    { name: 'Perfuseur Noir Photo-Sensible', description: 'Perfuseur médical', price: '15€', image: 'https://via.placeholder.com/150', category: 'perfuseur' },
    //Gant
    { name: "Gant d'examen", description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'gant' },
    { name: 'gant Nitrile', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'gant' },
    { name: 'gant Stérile 7', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'gant' },
    { name: 'gant Stérile 7.5', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'gant' },
    { name: 'gant Stérile 8', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'gant' },
    { name: 'gant Propre Small Boite 100', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'gant' },
    { name: 'gant Propre Meduim Boite 100', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'gant' },
    { name: 'gant Propre Large Boite 100', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'gant' },
    { name: 'gant de Ménage Jaune', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'gant' },
    //couche
    { name: 'Couche Lilas Adulte Large', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'couche' },
    { name: 'Couche Lilas Pharmaceutique Moyenne', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'couche' },
    { name: 'Couche Lilas Pharmaceutique Large', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'couche' },
    { name: 'Couche Tena Slip Meduim', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'couche' },
    { name: 'Couche Tena Slip Large', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'couche' },
    { name: 'Couche Lilas Maternité Super', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'couche' },
    //Sac
    { name: 'Sac Jaune 1m x 1m', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'sac' },
    { name: 'Sac Noir 1m x 1m', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'sac' },
    { name: 'Sac Jaune 30L', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'sac' },
    { name: 'Sac Jaune 50L', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'sac' },
    { name: 'Sac Jaune 105L', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'sac' },
    { name: 'Sachet Poubelle Jaune', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'sac' },
    { name: 'Sachet Noir', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'sac' },
    //Autre
    { name: 'Sac a Urine Non Stérile', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'autre' },
    { name: 'Sac a Urine Stérile Ultramed', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'autre' },
    { name: 'Abaisse Langue BT 100', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'autre' },
    { name: 'Gel Lavant (Savon)', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'autre' },
    { name: 'Lingettes Bébé', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'autre' },
    { name: 'Transfuseur', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'autre' },
    { name: 'Bionime Bondelette Lecteur Glycémie', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'autre' },
    { name: 'Megaplast 60mm x 1m Boite 1 Strip', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'autre' },
    { name: 'Megaplast 8cm x 1m', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'autre' },
    //Conteneur
    { name: 'Conteneur Jaune 3L', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'conteneur' },
    { name: 'Conteneur Jaune 5L', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'conteneur' },
    { name: 'Conteneur Jaune 7L', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'conteneur' },
    //Aiguille
    { name: 'Aiguille Hypodermiques 27G TS', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'conteneur' },
    { name: 'Aiguille Hyber Avec Prolongateur', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'conteneur' },
    { name: 'Aiguille Hyber Sans Prolongateur', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'conteneur' },
    { name: 'Collecteur Pour Aiguille PBS 7L', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'conteneur' },
    { name: 'Collecteur Pour Aiguille PBS 12L', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'conteneur' },
    { name: 'Aiguille 18G', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'conteneur' },
    { name: 'Aiguille 19G', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'conteneur' },
    { name: 'Aiguille 25G', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'conteneur' },
    //Coton
    { name: 'Coton Hydrophyl 50gr', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'coton' },
    { name: 'Coton Hydrophyl 100gr', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'coton' },
    { name: 'Coton Hydrophyl 500gr', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'coton' },
    //Alcool
    { name: 'Isopropanol 70 B/1L', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'alcool' },
    { name: 'Isopropanol 95 B/1L', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'alcool' },
    { name: 'Isopropanol 95 B/5L', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'alcool' },
    //Papier
    { name: 'Papier Hygiénique Lilas 24 x 2', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'papier' },
    { name: 'Papier Toilette Paquet de 24', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'papier' },
    { name: "Papier Roulou de 2 Table d'examen GM", description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'alcool' },
    //Catheter
    { name: 'Catheter HD 12 FR 16 CM', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'catheter' },
    { name: 'Catheter HD 12 FR 20 CM', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'catheter' },
    { name: "Catheter d'hémodialyse Pédiatrique", description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'catheter' },
    { name: "Catheter d'hémodialyse 2 Lum 13cm", description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'catheter' },
    //Hypafix
    { name: 'Hypafix 10cm x 10m', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'hypafix' },
    { name: 'Hypafix 15cm x 10m', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'hypafix' },
    //Alese
    { name: 'Alèse Medcare 90cm x 180cm 60 Boite 30', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'alese' },
    { name: 'Alèse Molinea 60cm x 90cm Bedmat 8G SA/30', description: 'Couche super absorbante', price: '10€', image: 'images/art2.jpg', category: 'alese' },

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
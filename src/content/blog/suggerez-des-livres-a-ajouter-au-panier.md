---

title: Suggérez des livres à ajouter au panier
excerpt: Il est désormais possible, sur la page du panier, d’afficher une liste d’articles suggérés.
author: Clément Latzarus
image: ~/assets/images/blog/suggerez-des-livres-a-ajouter-au-panier/cover.jpg
published: true
publishDate: 2024-01-24T08:00:00.000Z
---

Il est désormais possible, sur la page du panier, d’afficher une liste d’articles suggérés.

![Suggestions du panier](../../assets/images/blog/suggerez-des-livres-a-ajouter-au-panier/suggestions-du-panier.png)

Cette liste est éditoriale, dans le sens où elle n’est pas construite automatiquement, en fonction des achats précédents
du client ou du contenu de son panier, dans le but l’inciter à acheter plus. Elle résulte d’un choix délibéré des
personnes administratrices du site souhaitant présenter une sélection de livres.

Elle peut être utilisée pour mettre en avant certains titres comme des nouveautés, des livres à petits prix pour
atteindre le montant minimum pour bénéficier de la gratuité du port, ou des goodies.

Pour faire apparaître des articles dans les suggestions du panier, il faut d’abord créer un nouveau rayon et y ajouter
les articles. C’est le titre qui servira d’annonce sur la page du panier.

![Configuration du rayon](../../assets/images/blog/suggerez-des-livres-a-ajouter-au-panier/configuration-du-rayon.png)

Ensuite, créer une nouvelle option de site avec pour clé `cart_suggestions_rayon_id` et pour valeur l’identifiant du
rayon. Les articles ajoutés au rayon apparaîtront alors sur la page du panier.

![Ajout de l'option de site](../../assets/images/blog/suggerez-des-livres-a-ajouter-au-panier/ajout-option-de-site.png)

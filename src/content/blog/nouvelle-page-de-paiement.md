---

title: Une nouvelle page de paiement
excerpt: La page de paiement des commandes Biblys a été significativement améliorée, avec l'objectif rendre le paiement plus intuitif, et ainsi de réduire les abandons de panier, les incidents de paiement et les questions des client·es.
image: ~/assets/images/blog/nouvelle-page-de-paiement/cover.jpg
published: true
publishDate: 2025-04-09T08:00:00.000Z
author: Clément Latzarus
---

Dans la mise à jour d’avril 2025 (3.5), la page de paiement des commandes Biblys a été significativement améliorée. Le
but : rendre le paiement plus intuitif, et ainsi de réduire les abandons de panier, les incidents de paiement et les
questions des client·es.

Pour commencer, souvenons-nous à quoi ressemblait la page de paiement jusqu’à présent.

![L'ancienne page de paiement avec de nombreuses méthodes de paiement sélectionnables à l'aide de boutons radio](../../assets/images/blog/nouvelle-page-de-paiement/paiement-selection-mode-ancien.png)

Cette page, l’une des plus importante du parcours client, était très chargée, présentant beaucoup d’informations,
surtout si plusieurs options de paiement étaient proposés, comme dans l’exemple ci-dessus. Le choix d’un mode de
paiement impliquait de cliquer un petit bouton radio, puis sur le bouton **Poursuivre la commande**. Les client·es
étaient alors redirigée·s vers le site du prestataire (Stripe, PayPlug ou PayPal) dans le cas d’un paiement sécurisé ou
vers une nouvelle page avec des instructions dans le cas d’un paiement classique.

![L'ancienne page de paiement lorsque la méthode "chèque" est sélectionnée](../../assets/images/blog/nouvelle-page-de-paiement/paiement-cheque-ancien.png)

En cas d’erreur, pour choisir un autre mode de paiement, il fallait cliquer sur un nouveau bouton pour revenir à la page
précédente et recommencer l’opération de zéro.

À l’inverse, la nouvelle page de paiement se veut à la fois beaucoup plus légère et plus complète. Notamment, le montant
à régler se distingue clairement et un nouveau lien en haut de page permet de retourner sur la page de la commande en
cas de doute sur son contenu.

![Un accordéon replié présentant quatre méthodes de paiement](../../assets/images/blog/nouvelle-page-de-paiement/paiement-selection-mode.png)

Cette nouvelle page présente potentiellement autant d’options de paiement, et donc autant d’informations, mais celle-ci
sont masquées jusqu’à ce qu’un moyen de paiement soit sélectionné. Au clic sur une des options, la page se déploie pour
afficher les informations pertinent pour l’option sélectionnée.

![Une section de l'accordéon dépliée affichant les instructions de paiement par virement](../../assets/images/blog/nouvelle-page-de-paiement/paiment-virement.png)

Dans le cas d’un paiement par virement, le code IBAN s’affiche distinctement et un bouton permet de le copier
facilement. Même après avoir fait un choix, on reste sur la même page, et il est donc facile de changer d’avis et de
sélectionner un autre mode de paiement. Dans ce cas, l’ancienne option se replie et la nouvelle se déplie.

![Une section de l'accordéon dépliée affichant un formulaire de paiement par carte bancaire](../../assets/images/blog/nouvelle-page-de-paiement/paiement-carte-bancaire.png)

Dans le cas d’un paiement par carte bancaire (uniquement avec le prestataire Stripe), le formulaire de paiement est
maintenant intégré directement sur la page de paiement, et ne nécessite donc plus de se rendre sur un autre site.
Néanmoins, les informations de la carte bancaires sont envoyés directement au prestataire, sans jamais transiter par le
serveur du site Biblys, ce qui permet de le faire dans des conditions de sécurité optimales.

Un autre nouveauté du paiement par carte bancaire est la petite case à cocher **Enregistrer les informations de paiement
pour vos futurs achats**. Si les client·es cochent cette case facultative, la carte bancaire sera enregistrée par le
prestataire (là encore, rien ne passe par le site Biblys pour des raisons de sécurité) et leur sera proposée au prochain
paiement d’une commande, permettant de la payer en un clic, sans avoir à ré-entrer toutes les informations de la carte.

![Une section de l'accordéon permettant de payer avec une carte bancaire sauvegardée](../../assets/images/blog/nouvelle-page-de-paiement/paiement-carte-enregistree.png)

Quoique plus moderne, cette nouvelle page de paiement n’a rien de révolutionnaire et les client·es habitués aux sites
e-commerce et au paiement en ligne ne seront pas dépaysé·es.

La page de paiement étaient l’un des plus anciennes du code Biblys et il y a longtemps que je voulais la reprendre.
Cette évolution visuelle a également été l’occasion d’une refonte technique, avec notamment l’ajout de tests automatisés
qui permettront, à l’avenir, de faire évoluer plus facilement cette page tout en limitant le risque d’apparitions de
bugs.

---
Illustration de couverture :  
Photo de <a href="https://unsplash.com/fr/@cardmapr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
CardMapr.nl</a>
sur <a href="https://unsplash.com/fr/photos/carte-visa-bleue-et-blanche-sur-ordinateur-portable-argente-s8F8yglbpjo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
Unsplash</a>
      
      

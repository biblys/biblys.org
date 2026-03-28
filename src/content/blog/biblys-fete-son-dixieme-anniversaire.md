---

title: Biblys fête son dixième anniversaire
published: true
publishDate: 2018-06-01T00:00:00.000Z
author: Clément Latzarus
---

Le 1er juin 2008, je lançais la [Librairie Ys](http://nokto.net/20130101la-librairie-ys-c-est-fini-mais-l-aventure-continue/), une librairie en ligne spécialisée en science-fiction. Libraire de formation et programmeur amateur, j’ai décidé à l’époque de me former pour pouvoir créer moi-même le site de ma librairie. Le concept en a séduit d’autres, et le simple moteur de la Librairie Ys est devenu [Biblys](/), un outil d’e-commerce spécialisé dans le livre papier et numérique.

Aujourd’hui, Biblys a dix ans et est utilisé par six éditeurs ([Le Bélial’](https://www.belial.fr/), [ActuSF](https://www.editions-actusf.fr/), [Dystopia](https://www.dystopia.fr/), [Multivers](https://librairie.multivers-editions.com/), [Tous Lire](http://touslire.biblys.fr/), [Label Badass](https://www.labelbadass.fr/)), trois libraires ([Charybde](https://www.charybde.fr/), [Scylla](https://www.scylla.fr/), [Plumes du monde](https://www.plumesdumonde.com/)) et deux associations d’éditeurs ([L’Autre Livre](https://www.lautrelivre.fr/), [la Librairie du Voyageur](https://www.librairieduvoyageur.com/)). L’occasion m’a paru bonne pour faire le point sur les chantiers en cours et l’avenir du projet.

![](/biblys/media/blog/biblys-10-ans-site.png)

### Vers la version open source

Je prévois toujours de proposer une version libre de Biblys. Celle-ci permettra à n’importe qui avec un peu de bagage technique d’installer Biblys sur son hébergement et de gérer lui-même son site, mais aussi aux abonnés actuels de se libérer de l’abonnement.

Début 2017, je définissais quatre grands chantiers à effectuer pour arriver à cet objectif : revoir la manière dont sont stockées les images, revoir la gestion des utilisateurs, proposer la possibilité d’installer des plug-ins et gérer la mise à jour du schéma de la base de données. Je vous renvoie au billet [Perspectives pour 2017](/blog/perspectives-pour-2017) pour les détails. Seul le premier de ces chantiers est aujourd’hui terminé, tandis que le deuxième va s’ouvrir dans le cadre du RGPD (j’y reviendrais).

Je ne me risque plus à donner de date de disponibilité pour cette version open source, mais je continuerai à vous tenir au courant de son avancée dans de prochaines newsletters.

### Le chantier du moment : PHP 7

Biblys est écrit en PHP, l’un des langages de développement web les plus populaires. PHP est passé en version 7 en décembre 2015, et la version utilisée actuellement par Biblys, la 5 (il n’y a pas eu de version 6), deviendra obsolète à la fin de l’année 2018. Cela signifie qu’elle ne recevra plus de correctifs de bugs ou de failles de sécurité, et qu’il est donc impératif qu’à cette date, Biblys puisse fonctionner sur la version actuelle, la 7.2.

![](/biblys/media/blog/biblys-10-ans-code.png)

PHP 7 ayant changé drastiquement la manière dont sont effectués les appels à la base de données, cela implique de réécrire une grande partie du code de Biblys, notamment certaines parties vieilles de dix ans. Mais c’est une bonne chose, car cela permet au passage de corriger bugs et failles de sécurité, tout en améliorant les performances. C’est néanmoins un chantier important et chronophage. Sur les 1000 lignes de codes qu’il fallait modifier au début de l’année, il en reste aujourd’hui un peu moins de 450.

### Entrée en vigueur du RGPD

Le Règlement Général sur la Protection des Données est un règlement européen entré en vigueur le 25 mai dernier. Il concerne toutes les entreprises ayant des clients ou des utilisateurs dans l’Union européenne et réglemente la manière dont ces entreprises gèrent les données personnelles de leurs utilisateurs. Il implique des modifications de Biblys.

Axys, le service d’authentification commun à tous les sites Biblys, a déjà été modifié et permet désormais aux utilisateurs de télécharger leurs données et de supprimer définitivement leur compte. Le RGPD oblige également les entreprises à supprimer les données utilisateurs lorsqu’elles ne sont plus utiles. Côté Biblys, un outil vous permettra d’anonymiser les commandes, une fois qu’elles ont été expédiées, ou après une période que vous aurez définie.

![](/biblys/media/blog/biblys-10-ans-axys.png)

Enfin, la manière dont s’articulent Biblys et Axys va être revue, afin de permettre aux utilisateurs d’avoir plus de contrôle sur leurs données et de clarifier la manière dont elles sont gérées. Ainsi, les utilisateurs Axys devront autoriser le partage de leurs données avec un site Biblys lors de leur première connexion. Et ils auront la possibilité de créer un compte directement sur un site Biblys sans passer par Axys.

![](/biblys/media/blog/biblys-10-ans.png)

---
title: Bilan de l'année 2016
image: ~/assets/images/post/82/6482.jpg
published: true
publishDate: 2016-12-29T00:00:00.000Z
author: Clément Latzarus
---

Image : « Iceland » CC [BY-NC-ND](https://creativecommons.org/licenses/by-nc-nd/2.0/) [Huang Chao](https://www.flickr.com/photos/huang_chao/6006981926/in/photolist-a9PmrU-djpshj-5Avufr-d6mNsj-pw31MB-rbCbGY-Hix3bL-aJbqvM-d8Kqq9-NYoB3-ehrr3M-qk9CtY-ahqxEV-a9LZ7H-9ANX6S-81qWph-fKW1SR-qk8XfQ-a9PrVU-cVx7XE-ahqwAZ-ehrmhF-pzbkiK-fK8U5V-qngGVP-oWRnAV-rafK8B-6a7Jap-irHghu-aEEYEz-mW1k9-iQG2oH-z1RFrS-fuEuwj-oPWuqW-oroP4S-Dx6pAN-qayK62-teUden-H5LmTN-brVL6n-brVLpT-pEHEyJ-j8U8t2-kAMhEv-mS3LwL-hgheyY-aVycbr-8Lq61n-nJsV3A)

La fin de l’année approchant, l’heure est aux bilans ! Voici celui des améliorations apportées à Biblys au cours de l’année 2016, que l&#039;on pourra comparer [au bilan de l&#039;année dernière](/blog/bilan-2015-et-perspectives-2016).

### Sous le capot

Un grand nombre de tests automatisés ont été rédigés. Ces tests permettent de vérifier automatiquement les fonctionnalités d’un logiciel lorsqu’une nouvelle est ajoutée et s’assurer qu’on n’a pas cassé les anciennes. En 2008, lorsque j’ai commencé à travailler sur Biblys, je n’avais pas connaissance de cette pratique et j’ai donc pris du retard en la matière. Je la rattrape en créant désormais des tests à chaque fonctionnalité ajoutée ou à chaque bug découvert pour éviter que celui-ci ne se reproduise.

Un grand nombre de failles de type « injections SQL » ont été corrigées. Ces failles sont un type particulier de bug, du à une faiblesse du langage PHP, dont les pirates se servent pour injecter des instructions dans la base de données en les insérant dans l&#039;url de la page. S’il est important de corriger ces erreurs dans l’absolu, il faut qu’elles aient toutes disparues lorsque Biblys sera disponible dans une version _open source_ et que son code sera visible aux yeux de tous.

### L’accent mis sur la sécurité

Un travail a également été effectué pour améliorer le chiffrement des mots de passe des comptes utilisateurs Axys. En cas de piratage de la base de données, il serait beaucoup plus difficile d’obtenir le mot de passe à partir de la version chiffrée. Pour en savoir plus, vous pouvez lire Axys : [amélioration du chiffrement des mots de passe](/blog/axys-amelioration-du-cryptage-des-mots-de-passe) sur le blog.

Tous les sites Biblys, ainsi que le site de gestion des comptes utilisateurs Axys, sont désormais accessibles uniquement via le protocole HTTPS, identifiable au petit cadenas vert dans la barre d’adresse. Ce protocole apporte de nombreux avantages en matière de sécurité, de confiance client, mais aussi de référencement. Pour en savoir plus, vous pouvez lire [HTTPS est désormais activé par défaut pour tous les sites Biblys](/blog/https-est-desormais-active-par-defaut-pour-tous-les-sites-biblys) sur le blog.

### Un éditeur de thème déjà mis à profit

Un éditeur de thème a été ajouté à Biblys, permettant à un administrateur de modifier le thème graphique de son site sans passer par moi. Cela signifie aussi qu’un nouveau site Biblys peut être ouvert aujourd’hui sans autre frais que celui de l’abonnement, si l’administrateur prend en charge la création de l&#039;aspect visuel du site. Pour en savoir plus, vous pouvez lire [L&#039;éditeur de thème](/blog/l-editeur-de-theme) sur le blog. Biblys s’est également à cette occasion doté [d’un wiki](https://wiki.biblys.fr/).

Cet éditeur a déjà été mis à profit pour réaliser [la Librairie du Voyageur](https://www.librairieduvoyageur.com/), une nouvelle librairie propulsée par Biblys qui a ouvert ses portes en novembre. Réunissant neuf éditeurs autour du voyage, elle propose un catalogue commun de plus de 1000 titres et se structure autour d’une base bibliographique très riche en métadonnées, qui profite du moteur de recherche très efficace de Biblys. Pour en savoir plus, vous pouvez lire [La Librairie du Voyageur, propulsée par Biblys](/blog/la-librairie-du-voyageur-propulsee-par-biblys) sur le blog.

![](/biblys/media/blog/voyageur-home.png)

### Biblys Data Server

Dans mon billet bilan d’il y un an, je parlais d’un projet open source permettant d’échanger des données bibliographiques de manière standard. Ce projet en est encore à l’état embryonnaire, mais il est fonctionnel et déjà alimenté par plusieurs sites biblys et riche d’une base de 8000 entrées. Vous pouvez accéder au serveur à l’adresse [data.biblys.fr](https://data.biblys.fr/) et au code source ainsi qu’à la documentation sur [Github](https://github.com/biblys/biblys-data-server).

### Communication

Biblys s’est doté en début d’année d’une [newsletter](/pages/newsletter-biblys). Avec un rythme d’un à deux envois tous les deux mois, c’est un bon moyen de se tenir au courant des évolutions du projet et de l’ajout de nouvelles fonctionnalités.

Les pages Biblys sur les réseaux sociaux, [Facebook](https://www.facebook.com/biblys.fr/) et [Twitter](https://twitter.com/biblys), sont désormais plus régulièrement animées, avec des actualités et des astuces, et permettent d’être informé en cas d’incident sur le serveur, tout comme le nouveau site [status.biblys.fr](http://status.biblys.fr/). En cas d’indisponibilité de votre site, n’hésitez pas à consulter d’abord ces pages avant de me contacter, j’y afficherai les informations au fur et à mesure que je les obtiens moi-même.

![](/biblys/media/blog/bilan-2017-status.png)

### Perspectives pour 2017

De nombreuses autres améliorations ont été apportées tout au long de l’année ; on peut en trouver la liste complète sur la page [Historique des mises à jour](/biblys/changelog). D&#039;autres améliorations menées en tâche de fond, préparent d’importantes évolutions qui verront le jour en 2017, notamment, je l’espère, la version open source de Biblys. J’y reviendrai dans un billet dédié au début du mois de janvier.

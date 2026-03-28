---

title: Perspectives pour 2017
image: ~/assets/images/post/95/6495.jpg
published: true
publishDate: 2017-01-10T00:00:00.000Z
author: Clément Latzarus
---

« In the steel jaw. » CC [BY-NC-BD](https://creativecommons.org/licenses/by-nc-nd/2.0/) [Jérémy Lelièvre](https://www.flickr.com/photos/jrmllvr/9468996737/in/album-72157643810081383/)

Après un billet consacré aux [évolutions de Biblys au cours de l’année 2016](/blog/bilan-de-l-annee-2016), il est de temps de faire le point sur les perspectives pour l’année à venir, et au-delà.

### Des améliorations tout au long de l’année

Une refonte de l’interface d’administration était nécessaire depuis longtemps. Vous avez pu déjà en avoir un aperçu depuis début décembre, la nouvelle version sera finalisée et remplacera définitivement la version actuelle fin janvier.

D’autres améliorations de ce type seront développées pour Biblys tout au long de l’année. N&#039;hésitez pas à utiliser l&#039;outil de support intégré à l&#039;administration et à créer des tickets pour proposer d&#039;autres améliorations en fonction de vos besoins.

### Vers la version open source

Les principaux travaux de fond que je mène visent à préparer la future version _open source_ de Biblys. L’application a en effet été conçue de manière très monolithique, pour héberger plusieurs sites sur un unique serveur. Un certain nombre de chantiers assez conséquents devront être entrepris pour permettre de libérer Biblys du modèle actuel :

- Biblys ne sait pas aujourd’hui fonctionner sans Axys. Mais une version _open source_ devrait pouvoir être capable de créer et gérer ses propres utilisateurs de manière totalement indépendante. Il faudra donc que Biblys embarque un outil de gestion des utilisateurs intégré, ce qui n’est pas le cas aujourd’hui, et qu’Axys ne soit qu&#039;une option.
- Les images de couverture des livres sont partagées entre les différents sites Biblys. C&#039;est pratique, si un visiteur voit un même livre sur deux sites différents, il n&#039;aura pas à charger deux fois l&#039;image car elle aura été mise en cache la première fois. Mais pour qu&#039;un site puisse fonctionner de manière indépendante, il faudra repenser la manière dont sont gérées ces images.
- Les sites Biblys ont parfois des outils très spécifiques. Par exemple, Le Bélial’ utilise Biblys pour gérer les abonnés numériques à sa revue Bifrost ou L’Autre Livre pour gérer les adhérents à son association. Bien entendu, le code associé à ces outils n’a pas vocation à se retrouver dans la version _open source_ de Biblys mais ne doit pas pour autant disparaître. Il faudra donc développer un système de plugins pour pouvoir ajouter des fonctionnalités à la carte non prévues par le code de base.
- Les mises à jour de Biblys nécessitent parfois de modifier le schéma de sa base de données. Aujourd’hui, je modifie le schéma manuellement lorsque c’est nécessaire, mais cette méthode n’est pas envisageable à grande échelle. Il faudra donc embarquer un outil de migration de base de données.

Ces quatre chantiers sont les conditions _sine qua non_ pour permettre à Biblys d&#039;être executé de manière indépendante sur un autre serveur que le serveur principal. Mais avant d&#039;ouvrir le code à d&#039;autres développeurs, il restera à terminer un chantier plus général de nettoyage et de documentation du code, que j&#039;ai entreprise depuis un an déjà et que je continuerai au cours de l&#039;année 2017.

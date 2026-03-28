---
title: Calcul de la TVA européenne sur les livres numériques en 2015
image: ~/assets/images/post/28/4728.jpg
published: true
publishDate: 2015-01-19T00:00:00.000Z
author: Clément Latzarus
---

**En 2015, le calcul de la TVA sur le livre numérique a changé. Biblys s&#039;adapte et propose [un module open-source](/pages/open-source) utilisable dans d&#039;autres applications.**

Conformément à [la directive européenne 2008/8/CE](http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2008:044:0011:0022:FR:PDF), depuis le 1er janvier 2015, le taux de TVA applicable pour les &quot;services en ligne&quot; n&#039;est plus celui du pays du vendeur, mais [celui du pays du consommateur](http://www.service-public.fr/professionnels-entreprises/actualites/001024.html). Les livres électroniques, parmi d&#039;autres produits immatériels, étant considérés dans le cadre de cette loi comme des services en ligne, un grand nombre de sites propulsés par Biblys sont concernés.

Ainsi, dans le cas d&#039;un livre électronique vendu par un site français à un consommateur domicilié en Belgique, c&#039;est la TVA belge sur le livre numérique (21 %) qui doit être appliquée, et non la française (5.5 %). En revanche, si le vendeur et le consommateur se trouvent dans le même pays, si le consommateur se trouve hors de l&#039;Union Européenne, ou si le produit n&#039;est pas considéré comme un service en ligne (par exemple, un livre papier), c&#039;est toujours le taux de TVA du pays du vendeur qui s&#039;applique.

La démarche, qui vise à diminuer l&#039;intérêt pour des multinationales de placer leur siège social dans des pays où la TVA est avantageuse, est louable. Mais elle complique considérablement le travail des comptables et celui des logiciels d&#039;e-commerce, dont Biblys. Ainsi, pour connaître le taux de TVA applicable à une vente, il faut désormais prendre en compte :

- le pays du vendeur ;
- le pays du consommateur ;
- le type de produit ;
- la date de la vente.

Si l&#039;on considère que les sites propulsés par Biblys permettent d&#039;acheter à la fois des livres papiers et des livres numériques, cela devient un véritable casse-tête. Il a fallu donc repenser entièrement la manière dont la TVA est calculée, prendre en compte les taux de l&#039;ensemble des pays européens pour chaque type de produit, sans oublier que ces taux peuvent évoluer à tout moment...

La dernière version de Biblys contient un module créé pour l&#039;occasion, permettant de calculer correctement la TVA en prenant en compte tous les facteurs qui entrent en jeu. [Ce module étant open-source](/pages/open-source), il peut facilement être réutilisé par une autre application utilisant aussi PHP.

Cette mise à jour est gratuite et disponible dès aujourd&#039;hui pour tous les sites Biblys.

Illustration : CC [BY-SA](https://creativecommons.org/licenses/by-sa/2.0/) [401 (K) 2012](https://www.flickr.com/photos/68751915@N05/6355404323/in/photolist-b6MYGc-bH1kaH-aFB7hB-4X6APG-QAaR-8Y5YVJ-bt4m54-9qdvDe-iqbEJZ-6fvMde-G3K7m-bib12g-7hgd89-9VxavH-CDhDJ-bxDenq-pvfNCe-biaPun-7fP5dL-biaBRX)

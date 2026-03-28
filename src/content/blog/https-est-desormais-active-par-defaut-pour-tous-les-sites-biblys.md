---
title: HTTPS est désormais activé par défaut pour tous les sites Biblys
image: https://www.biblys.fr/images/post/09/6309.jpg
published: true
publishDate: 2016-10-05T00:00:00.000Z
author: Clément Latzarus
---

Illustration CC [Fabio Lanari](https://commons.wikimedia.org/wiki/File:Internet2.jpg)

La mise à jour 2.22 de Biblys ajoute une option de configuration permettant de forcer la connexion au site avec le protocole HTTPS. Cette option est désormais activée par défaut sur tous les sites Biblys.

### À quoi sert le protocole HTTPS ?

Le protocole HTTPS permet de crypter les données qu’échangent un site web et un visiteur. Il n’est pas très difficile pour un individu malintentionné de s’interposer entre vous et un site que vous visitez (par exemple sur un réseau Wi-Fi public) et d’intercepter toutes les informations échangées : pages visitées, formulaires envoyés, mots de passe, informations bancaires, etc.

Mais si le site utilise le protocole HTTPS (identifiable par le petit cadenas vert dans la barre d’adresse du navigateur), l’indiscret ne verra que du bruit qu’il lui sera impossible de décrypter. C’est pourquoi les sites de paiement où l’on entre son numéro de carte bancaire utilisent systématiquement ce protocole.

### Quel intérêt d’utiliser le protocole HTTPS pour un site Biblys ?

Même si l’entrée des informations de paiement et de connexion se font sur des sites externes déjà sécurisés (chez PayPal, PayPlug et Axys), utiliser HTTPS sur un site Biblys permet de protéger d’autres informations sensibles comme les coordonnées de facturation et de livraison que les clients renseignent lors de l’enregistrement d’une commande. La présence du cadenas vert dans la barre d’adresse est de plus un marqueur de confiance qui rassure, surtout sur les sites marchands.

Depuis un an, la disponibilité du protocole HTTPS est également un critère d’optimisation du référencement (SEO), puisque Google avantage les sites qui disposent d’un certificat SSL.

À titre personnel, je pense comme beaucoup que le HTTPS est amené à devenir le standard de facto tandis que HTTP va disparaitre, et qu’il est du devoir des sites que nous consultons de protéger les informations que nous échangeons avec eux de tous les indiscrets qui pourraient s’interposer.

![](https://www.biblys.fr/biblys/media/blog/https-1.jpg)

« Bletchley Park » (Image CC BY-NC [John Adams](https://www.flickr.com/photos/netik/27070196446/in/photolist-Hf6QhW-8TmEJP-8TqszY-cA977s-9t7EDb-8TmFoe-cA8Yib-muCZyG-8TqoWC-8TmGfR-feraWP-gUzu9a-75uU5F-jR1PuL-9virR8-82yEZ1-9vmugo-ER8BYq-dPcqJ1-4uwyQL-8TtuZu-8TpNxS-8TpTjQ-4t68Lv-8Tqvi4-cA8Yts-8Xg1Dr-8TpS5S-9t4EMX-6DaKF-8TmM28-8TpRpC-cA96Ph-4t68Lp-cA972f-4t68LP-9t7Fx9-4aqKuz-9t7FzW-9t7F7W-8TqNf9-9t7FRu-8Ttuwq-9t4FUc-9t4Gaa-6GxcH1-9t4FeZ-9t4F7X-9t4FXK-Hf6QMJ))

### Pourquoi ne pas avoir proposé plus tôt le protocole HTTPS ?

Il était déjà possible d’activer HTTPS sur un site Biblys, mais cela nécessitait l’acquisition à l’année d’un certificat SSL très onéreux, et dans les faits, aucun administrateur n’en avait fait la démarche.

Depuis la fin 2015, l’autorité de certification [Let’s Encrypt](https://fr.wikipedia.org/wiki/Let%27s_Encrypt), à l’initiative de géants de l’internet comme Mozilla, Google, Facebook mais aussi des français comme Free et OVH, a commencé à délivrer des certificats gratuitement. Il est donc désormais facile pour n’importe quel site d’acquérir un certificat SSL et de proposer le protocole HTTPS.

### Comment activer le protocole HTTPS sur mon site Biblys ?

Il n’y a rien de spécial à faire. HTTPS est activé par défaut, ne peut être désactivé et est désormais le seul protocole disponible pour accéder à un site Biblys. Vous pouvez le vérifiez par la présence du cadenas vert dans la barre d’adresse et du sigle https:// au début de l’adresse.

---
title: Bilan 2015 et perspectives 2016
published: true
publishDate: 2016-01-04T00:00:00.000Z
author: Clément Latzarus
---

### Résumé des épisodes précédents

**J&#039;ai créé la première version de Biblys en 2008** pour les besoins de la [librairie Ys](/blog/la-librairie-ys-c-est-fini-mais-l-aventure-continue), ma librairie en ligne spécialisée en science-fiction. Dans les années qui ont suivies, j&#039;ai réutilisé Biblys pour de nombreux autres sites ([Le Bélial&#039;](http://www.belial.fr), [Les Imaginales](http://www.imaginales.fr), [Librairie Charybde](http://www.charybde.fr), [Éditions Dystopia](http://www.dystopia.fr), etc.) ce qui m&#039;a amené à créé une version 2 de Biblys, plus polyvalente. En 2013, **j&#039;ai cessé mon activité de librairie** pour me consacrer entièrement au développement web.

![Tys, robot mascotte de la librairie Ys](/biblys/media/blog/tys.jpg)

L&#039;idée était alors de faire de Biblys **un outil &quot;tout-en-un&quot; au service de l&#039;édition indépendante** &lt;span style=&quot;line-height: 1.6;&quot;&gt;(libraires, éditeurs, salons littéraires, etc.). Un logiciel utilisable dans un navigateur, qui permettait de gérer non seulement un site web avec vente par correspondance et vente de livres numériques mais aussi la vente en magasin et sur salon avec une caisse, la gestion du stock et de la comptabilité, d&#039;une newsletter, d&#039;un blog, d&#039;un forum, du financement participatif, etc. Plutôt que de facturer une grosse somme pour la construction d&#039;un site puis de me laisser ensuite mes clients se débrouiller avec, je proposais un abonnement mensuel de 100 € comprenant l&#039;installation, l&#039;hébergement et la maintenance d&#039;une instance Biblys avec la promesse de faire &lt;/span&gt;**évoluer le logiciel en fonction de leurs besoins**&lt;span style=&quot;line-height: 1.6;&quot;&gt;.&lt;/span&gt;

Il m&#039;est rapidement apparu que peu d&#039;indépendants de l&#039;édition était prêt à investir une telle somme dans un service tout-en-un, et que la plupart n&#039;étaient intéressés que par l&#039;une ou l&#039;autre des nombreuses fonctionnalités de Biblys. De plus, répondre aux besoins des clients que j&#039;avais déjà occupait une grande partie de mon temps et il m&#039;était difficile d&#039;envisager en avoir beaucoup plus. N&#039;ayant réussi à dégager un chiffre d&#039;affaires suffisant de cette nouvelle activité, **j&#039;ai décidé au printemps 2015 de reprendre une activité salariée à temps partiel**.

### Biblys en 2015

Si j&#039;ai cessé d&#039;accepter de nouveaux clients au début de l&#039;année, le développement de Biblys ne s&#039;est pas arrêté pour autant. **Deux nouvelles fonctionnalités importantes ont vu le jour en 2015** :

- **le financement participatif**, [utilisé avec succès par les éditions Scylla](http://editions.scylla.fr/financement/lancement-editions-scylla) il y a un an ;
- **la liste d&#039;envies**, déjà utilisée sur les sites des librairies Charybde et Scylla et depuis peu sur le site des editions Dystopia.

![La liste d'envies Biblys](/biblys/media/newsletters/n46-wishlist.png)

Mais **les changements les plus importants sont ceux qui ont eu lieu sous le capo**t — refactorisation du code, correction de bugs et de failles de sécurité — et qui sont le reflet de ma maturité en tant que développeur auto-didacte. Le gros chantier, toujours en cours, a été la réécriture de Biblys sous la forme d&#039;un framework MVC, avec l&#039;intégration de composants Symfony 2 (HttpFoundation, Router, etc.) et de l&#039;ORM Doctrine. **L&#039;objectif étant d&#039;apporter plus de stabilité, de sécurité, de rapidité** mais aussi de préparer le terrain pour la prochaine version de Biblys.

![](http://media.biblys.fr/post/55/4855.jpg)

### Biblys open source

2016 sera, je l&#039;espère, l&#039;année qui verra la sortie de **la troisième version de Biblys**. Cette itération abandonnera l&#039;idée, trop ambitieuse, du site tout-en-un, pour se concentrer sur **ce que Biblys fait de mieux** : la vente de livres (papier, numérique, par correspondance, sur site, etc.). Un système de plugin permettra toutefois d&#039;ajouter des fonctionnalités pour répondre à des besoins plus spécifiques sans pour autant alourdir les sites qui n&#039;en ont pas besoin.

![](/biblys/media/blog/open-source.png)

**Biblys 3 sera open source**. Cela signifie que **n&#039;importe qui pourra télécharger, installer et utiliser Biblys** pour gérer son site web, sans contrepartie financière, mais aussi, le modifier pour l&#039;adapter à ses besoins, voire contribuer au projet. J&#039;espère que cela permettra à Biblys de devenir **LA solution e-commerce pour les petits éditeurs et les libraires indépendants** qui ne souhaitent pas investir des sommes astronomiques sur ce terrain. Pour ceux qui ne souhaitent pas s&#039;embarrasser de la technique, je proposerai toujours une solution SAAS comprenant l&#039;hébergement et le support technique à un tarif qui reste à définir, mais qui sera de toute façon bien moins onéreux que l&#039;abonnement actuel.

### Biblys open data

L&#039;une des forces de Biblys tel qu&#039;il fonctionne aujourd&#039;hui est que **tous les sites partagent la même base de données**. Cela permet à un libraire de ne pas avoir à recréer une fiche livre qu&#039;un autre libraire aurait déjà créée, et de profiter aussi des fiches très complètes créées par les éditeurs utilisant Biblys. Le tout sans avoir à souscrire à un abonnement souvent très onéreux à une base de données commerciale. Il y a longtemps que je réfléchis au moyen d&#039;agrandir le terrain de jeu.

Dans un monde idéal, éditeurs, libraires et autres indépendants du livres devraient pouvoir **échanger des données bibliographiques facilement et gratuitement**. Parce que la plupart des éditeurs ont aujourd&#039;hui un site présentant leur catalogue, lequel repose souvent sur une base de donnée, **l&#039;information est déjà disponible en ligne**, mais présentée sous une forme non structurée et difficilement lisible par un programme.

Mon projet est de lancer **un service open data indépendant de Biblys**, mais grâce auquel tous les sites de Biblys pourraient **échanger des données bibliographiques de qualité**, qu&#039;il s&#039;agisse d&#039;instances installées sur mon serveur ou de site herbergés ailleurs, bâtis avec la version libre de Biblys. En fait, l&#039;API étant publique, n&#039;importe quel éditeur pourra s&#039;y brancher pour y déposer ses données bibliographiques et n&#039;importe quel autre site (libraire, blogueurs, etc.) pourra récupérer des données à jour et de qualité.

### Biblys.me

Lancé avec la version 2 de Biblys, **Axys est un système d&#039;authentification unique** (&quot;Single Sign-On&quot;) permettant de **se connecter à tous les sites Biblys en un clic**, avec le même identifiant. Aujourd&#039;hui, les services SSO sont bien plus répandus qu&#039;il ne l&#039;étaient à l&#039;époque, et peu sont les sites qui n&#039;ont pas leur bouton de connexion avec Facebook, Google et consorts.

**Axys évoluera** (là aussi, je l&#039;espère, en 2016) **pour devenir Biblys.me**. Plus qu&#039;un service d&#039;authentification unique (qui sera compatible avec d&#039;autres services SSO), Biblys.me proposera d&#039;**unifier certains services de Biblys**. Il sera par exemple possible de retrouver tous ses livres numériques achetés chez différents éditeurs Biblys dans **une unique bibliothèque numérique** ou de disposer d&#039;une seule liste de souhait à partager, avec des livres issus de chaque site.

Là encore, **Biblys.me disposera d&#039;une API publique** permettant à n&#039;importe quel site de s&#039;y brancher, qu&#039;il utilise ou non la version open source de Biblys.

### Pour finir

Ces projets sont ambitieux. Certains sont bien avancés, d&#039;autres ne sont que des ébauches dans un coin de ma tête. Si vous êtes intéressé et souhaitez être tenu au courant de leur avancées, n&#039;hésitez pas à [me le faire savoir](/pages/contact).

**En attendant, excellente année 2016 à tous !**

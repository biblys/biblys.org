---
title: Y'a-t-il une vie (pour Biblys) après la mort (de son créateur) ?
author: Clément Latzarus
image: ~/assets/images/blog/y-a-t-il-une-vie-pour-biblys-apres-la-mort/cover.jpg
published: true
publishDate: 2024-05-17T10:00:00.000Z
---

> “_La seule chose dont on soit sûr, après la mort, c’est qu’on aide l’herbe et les fleurs à pousser ; tout le reste, ce
> sont des boniments._“  
> Dan Simmons

**Aujourd’hui, j’aimerais aborder un sujet certes peu réjouissant, mais important : les conséquences de la mort du
porteur d’un projet logiciel, et tout particulièrement l’éventualité de la mienne et des conséquences pour Biblys.**

Soyez assurés que ce billet est parfaitement hypothétique. Je suis en parfaite santé (autant qu’on puisse l’être à
presque 40 ans) et jusqu’à preuve du contraire, j’ai encore de nombreuses belles et longues années devant moi.

Ceci étant posé, certains de mes client·e·s me demandent, au moment de la signature d’un contrat Biblys, ce qu’il
adviendrait de leur site s’il m’arrivait un accident. La question est légitime. Et, malheureusement, je n’ai pas
aujourd’hui de réponse satisfaisante à apporter à cette question.

Mais j’y travaille.

## Le facteur d’autobus

Dans le secteur des nouvelles technologies, nous avons pour coutume de parler
du [facteur d’autobus](https://fr.wikipedia.org/wiki/Facteur_d%27autobus) (ou _bus factor_) qui pose le problème en ces
termes : “Combien de personnes impliquées dans un projet peuvent se faire renverser par un autobus avant que le projet
échoue ?”. Si ce nombre est bas, c’est sans doute le signe que les responsabilités sont trop concentrées et les
informations sont mal partagées entre les membres d’une équipe.

![Bus factor](../../assets/images/blog/y-a-t-il-une-vie-pour-biblys-apres-la-mort/bus-factor.jpg)
_A bus waiting at a pedestrian crossing in Lima · [Robert Cutts](https://www.flickr.com/photos/21678559@N06/3170401562)
· CC-BY 2.0_

Dans le cas de Biblys, dans la mesure où je suis l’unique personne à travailler sur le projet, à avoir au accès au code
source, à administrer son hébergement et à porter les connaissances techniques, ce facteur est égal à 1. Vu la manière
dont il est géré aujourd’hui, si je disparais, le projet Biblys s’arrête.

Dans un premier temps, cela veut dire que je ne serais évidemment plus capable de répondre à des questions, corriger des
bugs ou développer de nouvelles fonctionnalités. Pour autant, les sites Biblys continuerait à fonctionner. Mais pour
combien de temps ?

## Les sites Biblys

Aujourd’hui, et depuis la création de Biblys en 2008, l’ensemble des sites sont hébergés sur un même hébergement
mutualisé chez l’hébergeur OVH et partagent une même base de données. Cette situation a plusieurs avantages,
principalement financiers, mais aussi pratiques, puisque les libraires peuvent profiter des données bibliographiques
enrichies des éditeurs dont ils vendent les livres.

Néanmoins, c’est aussi une faiblesse, car pendant longtemps, Biblys a été conçu pour fonctionner de cette manière
centralisée, sur le mode “SAAS”, et n’a pas été du tout pensé pour être installé sur un hébergement solitaire,
indépendamment des autres sites.

![Les sites Biblys](../../assets/images/blog/y-a-t-il-une-vie-pour-biblys-apres-la-mort/sites-biblys.png)
_Les douze sites qui se partageaient l'hébergement mutualisé de Biblys fin 2023. Un treizième
([Le Baiser du frelon](https://lebaiserdufrelon.fr)) vient d'ouvrir, et deux autres devraient suivre avant la fin de
l'année._

Cette situation est loin d’être idéale, car cela rend mes client·e·s actuels et futurs très dépendant·e·s de moi. En
effet, et bien que cet hébergement mutualisé soit payé avec un an d’avance, dans l’éventualité de mon décès, il finirait
par être clos, et avec lui disparaîtrait tous les sites Biblys et toutes les données liées : catalogue, historiques des
commandes, données personnelles, notamment.

J’aimerais depuis longtemps proposer une version open source de Biblys que n’importe qui pourrait installer, et j’y
travaille depuis plusieurs années. Il s’avère que cet objectif est tout aussi crucial pour les sites existants, qui
pourront alors transférés sur des hébergements dont mes client·e·s seraient propriétaires.

Une fois l’installation de Biblys possible sur un hébergement indépendant, je pourrais proposer à mes client·e·s, contre
un abonnement au coût réduit, d’installer Biblys sur leur propre hébergement, tout en continuant à assurer la
maintenance technique comme je le fais aujourd’hui. Ainsi, dans l’éventualité de mon décès, le site pourrait continuer à
fonctionner indéfiniment.

## Les données

Peut-être plus importantes encore que les sites eux-même : les données qu’ils contiennent, qu’il s’agisse des données
bibliographiques du catalogue, des données commerciales sur les ventes, des données personnelles des clientes.

Aujourd’hui, il y a peu d’options d’export des données dans Biblys. La raison (mauvaise, sans doute) est que, lorsque
mes client·e·s ont besoin d’exporter des données, je réalise ces exports moi-même, ces demandes étant relativement rares
pour qu’il ne m’ait jamais semblé prioritaire de développer un outil dédié, et qu’elles sont suffisamment différentes à
chaque fois pour qu’il soit compliqué d’en créer un qui conviennent à tout le monde.

Bien sûr, il faudra le faire car, au lendemain de ma mort, ces exports manuels ne seraient plus possibles et mes
client·e·s se trouveraient coincés sans pouvoir avoir accès à leurs données, rendant impossible leur transfert sur un
nouveau site.

La meilleure solution reste pour moi que mes client·e·s soient propriétaires de l’hébergement de leur site et donc
maîtres de leur données. Je me pencherais donc sur ces outils d’export dans un second temps.

## Les noms de domaine

Imaginons le pire scénario possible : et si je disparaissais juste après avoir fini d’écrire ce billet et cliqué sur le
bouton “Publier” ? Bien sûr, je pourrais aussi disparaître juste avant, et ce serait un scénario pire encore, mais si
vous lisez ces lignes, ce n’est vraisemblablement pas arrivé.

Qu’arriverait-il alors ? Un site Biblys continuerait à fonctionner jusqu’à ce que mon hébergement arrive à échéance. Si
un·e de mes client·e·s décidait d’anticiper cette échéance et de faire créer un nouveau site au plus vite (ce qui serait
ma recommandation), il faudrait le faire pointer son nom de domaine sur ce nouveau site… ce qui implique qu’il ou elle
soit le propriétaire du dit domaine.

Historiquement, j’achetais les noms de domaine pour mes client·e·s et j’en étais propriétaire en leur nom, mais depuis
plusieurs années, je ne propose plus cette option et j’incite fortement mes client·e·s historiques à récupérer leur
propriété de leur nom de domaine, entre autres raisons, pour parer à ce scénario précis.

Le nom de domaine est la porte d’entrée de leur boutique virtuelle, et s’il serait bien sûr possible d’acheter un second
nom de domaine pour le faire pointer vers le nouveau site, tant que l’ancien sera en vigueur, il sera le bénéficiaire
des liens existants et du référencement Google, amenant un grand nombre de visiteurs vers un site potentiellement
obsolète.

## Le code source

Je le dis depuis longtemps, j’aimerais libérer le code source de Biblys et j’espère mener à leur terme l’ensemble des
chantiers indispensable pour atteindre cet objectif avant la fin de cette année.

Bien sûr, idéalement, je rêve que, si je devais disparaître, Biblys soit repris par d’autres développeurs et
développeuses, et continue à exister, mais je ne me fais pas beaucoup d’illusions. Il existe déjà nombre de projets
_open source_ beaucoup plus populaires et bien plus largement utilisés que Biblys qui ont du mal à trouver des
mainteneurs. Il n’y a pas non plus d’enjeux financiers puisque je ne vis pas moi-même de Biblys, il s’agirait donc de
bénévolat.

Alors, pourquoi est-ce un enjeu ? Tout simplement parce la tâche de quelqu’un qui serait chargé de maintenir un site
Biblys, de le transférer sur un nouvel hébergement ou d’en extraire des données pour les utiliser sur un nouveau site
serait grandement facilité s’il avait accès au code source et à la documentation de Biblys.

![Le dépôt Github de Biblys](../../assets/images/blog/bilan-2023-et-perspectives-2024/github.png)
_Le dépôt Github de Biblys, aujourd'hui pas encore accessible publiquement._

Au-delà de mon souhait d’offrir à tous la possibilité créer de nouveaux sites Biblys sans passer par moi (ce qui est
déjà une garantie d’indépendance), la publication du code source est aussi un avantage non-négligeable pour assurer la
pérennité des sites existants aujourd’hui, ou au moins l’activité de mes client·e·s sur le web.

## Vivons heureux en attendant la mort

Peut-être motivé par l’approche de mon quarantième anniversaire, j’ai posé en congés, auprès de mon employeur, tout le
mois de mai, pour le consacrer entièrement à Biblys et avancer sur ces sujets.

Le principal chantier qui empêchait un site Biblys de fonctionner indépendamment des autres, celui de la gestion des
utilisateurs locaux, débuté déjà en septembre 2023, avance bien. Je suis heureux d’annoncer que depuis
la [version 2.81](https://blog.biblys.fr/posts/biblys-2.81), publiée le 10 mai, les sites Biblys sont indépendants du
fournisseur d’identité Axys pour la gestion des comptes utilisateurs, une fois un import réalisé à la première
connexion, nécessaire pour assurer la rétro-compatibilité.

Dès la version 2.82, prévue début juin, il sera possible de se connecter et de créer un compte directement sur les sites
Biblys, sans passer par Axys. L’utilisation d’Axys sur un site Biblys deviendra, de fait, faculative. Cela peut sembler
anodin, mais c’était un énorme chantier, tant les comptes Axys étaient intrinsèquement liés au fonctionnement de Biblys.
Je suis bien content d’en voir enfin le bout !

Une fois ce chantier achevé, Biblys sera techniquement prêt à fonctionner indépendamment de l’hébergement principal. Me
restera principalement des tâches pour faciliter son installation et améliorer sa documentation. J’ai hâte… et espère
arriver à l’objectif de libérer le code source au plus tard le 30 octobre, pour mon quarantième anniversaire !

---

title: Biblys est désormais un logiciel libre
excerpt: Depuis sa version 3.0 publiée le 30 octobre 2024, Biblys est désormais un logiciel libre distribué sous AGPL-3.0.
image: ~/assets/images/blog/biblys-logiciel-libre.jpg
publishDate: 2024-10-30T09:00:00Z
author: Clément Latzarus
published: true
---

**Depuis sa version 3.0 publiée le 30 octobre 2024, [Biblys](https://biblys.fr) est
désormais [un logiciel libre](https://www.gnu.org/philosophy/free-sw.fr.html) distribué
sous [la licence AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.html#license-text)**.

Cela signifie que **n’importe qui peut télécharger, installer et utiliser Biblys sans contrepartie financière, mais
aussi consulter, modifier et redistribuer son code source**. La seule condition est que toute modification exploitée sur
un serveur public doit être publiée pour bénéficier à la communauté.

[**Le code source de Biblys est disponible sur Github**](https://github.com/biblys/biblys), où l’on trouvera
également [les instructions d’installation](https://github.com/biblys/biblys/blob/dev/INSTALL.md) d’une version de
développement en local. D'ici la fin de l'année, je proposerais également des guides pour installer un vrai site
Biblys sur un hébergement. Mon objectif à terme est que Biblys soit très facile à installer, même par quelqu'un n'ayant
aucune compétence technique.

## Qu’est-ce que Biblys ?

**Biblys est un logiciel de gestion d’un site e-commerce, permettant des maisons d’édition et librairies indépendantes
de créer une boutique en ligne.** Il est spécialisé dans la vente de livres, papier et numérique, qui est régie par des
règles particulières. Il a aussi quelques fonctionnalités supplémentaires comme la gestion d’un blog et d’un agenda
d’évènements, tous les deux liés à la boutique, ou la création de campagne de financement participatif.

J’ai créé Biblys en 2008, en même temps que ma librairie spécialisée en littératures de l’imaginaire, la Librairie Ys.
Rapidement, j’ai été contacté par d’autres éditeurs et libraires qui souhaitaient un site, et j’ai transformé le site de
ma librairie en outil en marque blanche, sur abonnement. **À présent que Biblys est open-source, n’importe qui peut
l’utiliser, même sans passer par moi.**

**Aujourd’hui, Biblys est utilisée par sept maisons d’édition** : [Le Bélial’](https://biblys.fr/theme/logo-belial.jpg)
(et [sa boutique Goodies](https://goodies.belial.fr)), [ActuSF](https://editions-actusf.fr), [Dystopia](https://dystopia.fr), [Scylla](https://editions.scylla.fr), [Velvet](https://www.editionsvelvet.com/), [Musidora](https://leseditionsmusidora.com), [Le Baiser du frelon](https://lebaiserdufrelon.fr),
**cinq librairies** : [L’Atalante](https://librairielatalante.com), [Charybde](https://charybde.fr), [Scylla](https://scylla.fr), [Alterlibris](https://alterlibris.fr), [Lavondyss](https://lavondyss.fr),
mais aussi **des associations d’éditeurs** : [L’Autre Livre](https://lautrelivre.fr) et
la [Librairie du Voyageur](https://librairieduvoyageur.com). Trois nouveaux sites de maisons d’édition sont également en
préparation.

Autre fait d’armes dont je ne suis pas peu fier : pendant le premier confinement de 2020, Biblys a été utilisé pour
**[l’Opération Bol d’air](https://www.numerama.com/pop-culture/613536-pendant-le-confinement-des-editeurs-offrent-un-livre-numerique-chaque-jour.html)
qui, pendant un mois et demi, permettait d’offrir aux lecteurices confiné·es un nouveau livre numérique chaque jour.**
Organisée en trois nuits, elle a permis à 26 maisons d’édition indépendantes de faire découvrir 47 livres de leur
catalogue pour un total de 67.207 téléchargements.

## Pourquoi rendre Biblys open source ?

**Si les choses étaient à refaire, je rendrais Biblys open source dès le début.** Mais lorsque j’ai créé le site de ma
librairie en 2008, je n’avais pas idée que ça pourrait être utile à d’autres. Et même quand j’ai quand commencé à
utiliser Biblys pour créer d’autres sites, il ne m’a pas traversé l’esprit que cela pourrait aussi se faire sans moi.
Aussi, avant le milieu des années 2010, je n’avais qu’une vague qu’idée de ce qu’était le logiciel libre (ou, pour tout
dire, ce qu’était l’ingénierie logicielle — étant autodidacte).

Aujourd’hui, j’espère que libérer le code source de Biblys permettra à un plus grand nombre de libraires et
d’éditeurices de l’utiliser, sans passer par moi. **Mon objectif est que Biblys puisse être installé et configuré par
quelqu’un qui n’ait aucune compétence technique.** Il reste pour cela du travail notamment de documentation, mais c’est
l’objectif que je me suis fixé pour fin de l'année.

Dernière raison, et non des moindres, j’espère que rendre Biblys open source permettra au logiciel, ou au moins au site
l’utilisant actuellement, de me survivre. Dans le modèle actuel (dit “SaaS” pour “Software as a Service”), tout est
centralisé et dépendant de moi, et ma disparition mettrait beaucoup de gens dans l’embarras. La version open-source
permettra à mes clients d’être réellement propriétaire de leur site — de l’hébergement, du code source, des données —,
lequel sera aussi plus résilient. J’évoquais ce sujet dans
l’article [Y a-t-il une vie (pour Biblys) après la mort (de son créateur) ?](https://blog.biblys.fr/posts/y-a-t-il-une-vie-pour-biblys-apres-la-mort-de-son-createur)

## L’aventure du passage au logiciel libre

**J’ai commencé à promettre le passage de Biblys en open
source [en 2017](https://blog.biblys.fr/posts/perspectives-pour-2017)**, soit il y sept ans, et neuf ans après la
création du logiciel. Pour des délais aussi longs ?

D’abord, **après avoir arrêté ma librairie pour me consacrer à plein temps à Biblys, en 2013, j’ai durant un temps
caressé l’idée d’exploiter commercialement le logiciel** et d’en vivre. Mais j’ai rapidement compris que je n’avais pas
l’esprit startup, que je n’étais pas fait pour l’entreprenariat : ce qui m’était intéressait, c’était de travailler sur
le logiciel, pas les aspects commercial et marketing. Dès 2015, j’ai préféré retrouver la stabilité d’un emploi salarié
à temps partiel ([chez Actialuna](https://sail.univ-lr.fr/consortium-et-gouvernance/) d’abord,
puis [chez Pix](https://pix.fr)), tout en consacrant une journée par semaine — le mercredi — à Biblys, et c’est toujours
sur ce mode que je fonctionne aujourd’hui.

Dès le moment où mes revenus n’ont plus dépendu de Biblys, j’ai réduit l’abonnement que je facture mensuellement à mes
client·es de manière à ce qu’il couvre les frais d’hébergement et les différents outils de développement que j’utilise,
sans me rémunérer. **L’idée de faire de Biblys un logiciel libre est alors devenue une évidence.**

**J’ai longtemps pensé qu’avant d’ouvrir le code source du logiciel, il était important que celui-ci soit parfait** :
propre, bien documenté, bien testé, débarrassé de ses portions déprécié. Puis l’expérience m’a appris qu’un code source
n’était jamais parfait, et surtout pas celui d’un projet de cette importance maintenu par une personne seule. Mon nouvel
objectif était alors beaucoup plus raisonnable : **il fallait qu’un site Biblys puisse être installé sur un serveur et
fonctionner en tout indépendance**, là où jusqu’ici, selon le mode “SaaS”, le logiciel avait été pensé pour les sites
fonctionnent tous sur un même serveur, avec une seule base de données.

**En 2017, j’identifiais quatre grands chantier pour atteindre cet objectif**,
que [je détaillais dans ce billet de blog](https://blog.biblys.fr/posts/perspectives-pour-2017) : la gestion des
utilisateurs et la gestion des images (qui, dans les deux cas, étaient alors déportés et mis en commun entre tous les
sites), l’extraction de certaines fonctionnalités très spécifiques à certains sites sous forme de plug-ins, et enfin la
facilitation du processus d’installation et de mises à jour.

**Divers évènements expliquent les sept années qu’il a fallu pour mener ces grands travaux** : la naissance de ma fille
en 2019 (mon second bébé, chronologiquement, après Biblys, mais bien sûr, le premier dans mon cœur), les différents
confinements qui ont suivis, et tout simplement, la gestion d’une quinzaine de sites au quotidien : développement de
nouvelles fonctionnalités, corretions de bug, création de nouveaux sites avec leurs habillages graphiques, et support
technique aux utilisateurs.

En 2024, trois ans après mon embauche [chez Pix](https://www.welcometothejungle.com/fr/companies/pix), j’ai pu accumuler
suffisamment de congés sur
mon [Compte épargne-temps](https://www.service-public.fr/particuliers/vosdroits/F1907)
pour poser un mois de congés hors vacances scolaires, que j’ai consacré en grande partie à Biblys. **Cela m’a permis de
mettre le coup de collier nécessaire pour mener à bout les derniers gros chantiers.** Dernière étape : l'ajout d'une
licence open-source permettant de détailler les conditions d'utilisation de Biblys. J'ai choisi la licence AGPL-3.0,
très permissive, qui permet d'utiliser et de modifier librement le code source, à la condition de publier ces
modifications pour en faire bénéficier la communauté.

Aujourd’hui, au moment de libérer le code, celui-ci est loin d’être parfait, et sans doute en sera-t-il toujours ainsi.
Mais si Biblys peut de cette manière être utile à plus de maisons d’édition et de librairies indépendantes, alors j’en
suis très heureux. **Dix-sept ans après la création de Biblys, c’est une formidable étape qui vient d’être franchie, et
j’ai le sentiment que l’aventure ne fait que commencer !**

Illustration de couverture :  
[francescoch](https://www.instagram.com/fran_kie_s/) via iStockPhoto

---
title: 'Axys : amélioration du chiffrement des mots de passe'
image: https://www.biblys.fr/images/post/35/5735.jpg
published: true
publishDate: 2016-03-23T00:00:00.000Z
author: Clément Latzarus
---

Illustration : locked CC [BY-NC-ND](https://creativecommons.org/licenses/by-nc-nd/2.0/) [Karol Franks](https://www.flickr.com/photos/karolfranks/15136260663/in/photolist-p4xhXr-9qewys-CedUUw-9rwG83-5fVAoS-q2tcea-8pqb2e-ubfCu-anuzJo-4XpCsF-bAUx5j-54AtDS-nj5sut-4Fwo5w-iZ3Wkr-pyHpxi-9xiRmv-aaLV9A-9VFAMR-2JZJSr-9VrQdf-dqkJ5n-oWMmAi-rgm2Me-cmLNAA-h3533f-bn1aZv-X54YR-bUe1zd-dWSJDQ-f4mmFY-6aRr8S-7BRZ1e-qi6if5-a8dJvx-s9Y5mc-kPnZQt-euMzFj-hr3kWW-9djr3k-jEJr9C-rHGUvU-e8oram-9o8etq-jLzii7-6idDqp-bhAqEg-amVQyg-b8bY8c-bFaaNg)

Depuis sa création en 2009 pour les besoins des sites Biblys, le service d&#039;authentification Axys utilise, pour encrypter les mots de passe des utilisateurs, la fonction de hachage MD5, considérée aujourd&#039;hui comme peu fiable.

En mai 2015, a commencé le ré-encryptage systématique des mots de passe avec un algorithme plus récent et plus sûr. Il n&#039;est pas possible d&#039;opérer ce processus sans connaître le mot de passe de l&#039;utilisateur, qui n&#039;est pas stocké en clair dans la base données pour des raisons de sécurité. Le ré-encryptage ne peut donc se faire qu&#039;au moment de la connexion, lorsque l&#039;utilisateur entre son mot de passe.

Cela signifie que seuls les utilisateurs qui se sont connectés au moins une fois à leur compte Axys depuis mai 2015 ont vu leur mot de passe ré-encrypté. Fin mars, cela représente environ 8850 comptes Axys sur un total de 18000.

Le 1er mai 2016, les mots de passe utilisant l&#039;ancien méthode d&#039;encryptage seront supprimés définitivement. Les utilisateurs dont le mot de passe n&#039;aura pas été ré-encrypté pourront toujours utiliser leur compte Axys, mais ils devront pour cela demander la réinitialisation de leur mot de passe par courriel.

La prochaine étape consistera à forcer toutes les connexions à Axys à utiliser le protocole sécurisé SSL. En attendant, vous pouvez déjà accéder à Axys en utilisant HTTPS à l&#039;adresse &lt;https://secure.axys.me/&gt;.

### Pourquoi les mots de passe sont-ils encryptés dans la base de données ?

Si une base de données venait à être piratée, toutes les informations qu&#039;elle contient seraient accessibles au pirate. Pour cette raison, on ne les sauvegarde jamais en clair les mots de passe dans une base de donnés : on les protège grâce à une fonction de hachage cryptographique. Par exemple, le mot de passe &quot;correcthorsebatterystaple&quot;, une fois &quot;haché&quot;, devient : e9f5bd2bae1c70770ff8c6e6cf2d7b76.

L&#039;une des propriétés du hachage cryptographique est qu&#039;il est impossible de faire la traduction en sens inverse et d&#039;obtenir le mot de passe en clair à partir de son hachage. Comment alors s&#039;assurer que l&#039;utilisateur entre le bon mot de passe au moment de la connexion ? Tout simplement en appliquant la fonction de hachage au mot de passe entré dans le formulaire de connexion, en en comparant le résultat au hachage sauvegardé dans la base de données.

En cas de piratage, le pirate n&#039;obtiendra que des hachages dont il ne peut (en théorie) rien faire.

### Pourquoi la fonction de hachage MD5 est-elle considérée comme peu fiable ?

Bien qu&#039;il soit toujours impossible d&#039;obtenir un mot de passe à partir d&#039;un hachage MD5, rien n&#039;empêche un pirate qui aurait obtenu un hachage d&#039;essayer de hacher toutes les chaînes de caractères possibles pour constituer un dictionnaire, jusqu&#039;à obtenir le hachage correspondant. MD5 étant un algorithme relativement peu coûteux en terme de puissance de calcul, cette opération est envisageable.

Des fonctions de hachage plus récentes et plus couteuses rendent cette opération beaucoup plus difficile, quoique l&#039;évolution de la puissance de calcul des processeurs (et notamment l&#039;utilisation de puces graphiques) oblige à les améliorer sans cesse. Pour mieux protéger les mots de passe, on peut ajouter une chaîne de caractère unique et aléatoire appelée &quot;salt&quot; (grain de sel) au mot de passe avant son encryptage ce qui limite la possibilité de créer des dictionnaires. On peut également augmenter le coup algorithmique de l&#039;encryptage en appliquant plusieurs fois la fonction de hachage cryptographique sur le mot de passe puis sur le hachage produit, et ainsi de suite.

![](http://www.biblys.fr/biblys/media/blog/encrypted-stories.jpg)

Image : Encrypted stories CC [BY](https://creativecommons.org/licenses/by/2.0/) [Joel Penner](https://www.flickr.com/photos/featheredtar/3042678202/)

### Pourquoi ne pas ré-encrypter automatiquement tous les mots de passe ?

Parce qu&#039;encrypter un mot de passe nécessite de connaître le mot de passe en clair, qui n&#039;est pas stocké dans la base de donnée, il n&#039;est pas possible de ré-encrypter automatiquement tous les mots de passe. Ce processus ne peut se faire qu&#039;au seul moment où Axys a brièvement connaissance de votre mot de passe en clair : à la connexion, lorsque vous le tapez dans le formulaire.

### Comment m&#039;assurer que mon mot de passe à bien été ré-encrypté ?

Déconnectez-vous puis reconnectez-vous à votre compte Axys. Si vous avez fait cette manipulation au moins une fois entre mai 2015 et aujourdh&#039;ui, votre mot de passe à déjà été ré-encrypté à l&#039;aide de la nouvelle fonction de hachage.

### Mon mot de passe a-t-il été compromis ?

Rien ne permet de penser que la base contenant votre mot de passe encrypté à été compromis. Mais si cela devait se produire à l&#039;avenir, votre mot de passe serait mieux ainsi mieux protégé.

### Dois-je changer mon mot de passe ?

Vous pouvez garder votre mot de passe actuel. Toutefois, c&#039;est l&#039;occasion d&#039;[en choisir un nouveau](http://axys.me/#MotDePasse) ! Il est en effet conseillé de changer votre mot de passe régulièrement, en particulier si vous utilisez le même pour plusieurs services. Personnellement, j&#039;en change une fois par an.

### Comment choisir un bon mot de passe ?

On dit parfois qu&#039;un bon mot de passe combine des caractères majuscules, minuscules, des chiffres et des symboles. En réalité, la longueur est le meilleur moyen de protéger votre mot d critère permettant de juger de la difficulté à &quot;cracker&quot; un mot de passe (c&#039;est à dire obtenir le mot de passe en clair à partir de son hachage, à l&#039;aide d&#039;une attaque par dictionnaire).

Par exemple, à raison de 1000 essais par seconde, un mot de passe comme Pa$sw0rd pourra être forcé en 3 jours tandis pour &quot;unmotdepassepluslong&quot;, il faudra 157 milliards d&#039;années, soit plus de 10 fois l&#039;âge de l&#039;univers ! Choisissez donc de préférence une phrase, facile à retenir, et introduisez idéalement une variante de manière à disposer d&#039;un mot de passe différent pour chaque service auquel vous êtes inscrit.

[![](http://imgs.xkcd.com/comics/password_strength.png)](https://xkcd.com/936/)

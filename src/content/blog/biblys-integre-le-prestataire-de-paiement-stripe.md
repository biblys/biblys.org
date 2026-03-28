---
title: Biblys intègre le prestataire de paiement Stripe
image: https://www.biblys.fr/images/post/60/9460.jpg
published: true
publishDate: 2020-07-15T00:00:00.000Z
author: Clément Latzarus
---

Biblys supporte historiquement plusieurs mode de paiement : espèces, chèque, virement et carte bancaire. Concernant ce dernier mode, deux prestataires étaient disponibles jusqu’à présent : Paypal et Payplug. S’y ajoute désormais Stripe, qui apporte un certain nombre d’avantages par rapport aux deux précédents.

## Frais

[Les frais prélevés par Stripe](https://stripe.com/fr/pricing) sur chaque commission sont parmi les plus intéressants du marché.

- Paypal : 3,4 % + 0,35 € par transaction
- Payplug : 1,2 % + 0,25 € par transaction + 10 € / mois
- Stripe : 1,5 % + 0,25 € par transaction

Sur un chiffre d’affaire de 1000 € réparti en 50 commandes de 20 €, Stripe permet d’économiser 12 € par rapport à Payplug et 20 € par rapport à Paypal.

## Virements automatiques

Stripe permet de programmer des transferts automatique à la fréquence de votre choix (quotidienne, hebdomadaire ou mensuel). Les fonds perçus arrivent ainsi directement sur votre compte sans que vous ayez à effectuer des virements manuellement depuis l’interface Stripe. Et si vous préférez le faire vous-même, cela reste possible.

Par comparaison, Paypal et Payplug ne permettent pas de programmer des virements automatiques, l’opération doit être faite manuellement.

## Apple Pay, Google Pay, etc.

Stripe vous permet d’accepter de [nombreux moyens de paiement](https://stripe.com/fr/payments/payment-methods-guide#disponibilit%C3%A9), dont les cartes bancaires Visa et MasterCard et les prélèvements SEPA, mais aussi Apple Pay et Google Pay. Vos clients peuvent ainsi payer de manière sécurisée et rapide avec leur empreinte digital depuis leur téléphone (y compris pour un achat effectué depuis un ordinateur) sans avoir à entrer leurs informations bancaires.

Par comparaison, Paypal accepte les paiements à partir d’un compte Paypal, Payplug à partir de cartes Visa et MasterCard.

## Confidentialité des données personnelles

Le prestataire Paypal a acquis une mauvaise réputation auprès de certains acheteurs car il collecte leurs données personnelles (et notamment le contenu de leur commande sur votre site) pour les revendre à des société de publicité ciblée par centre d’intérêt. C’est pourquoi ce prestataire requiert que l’utilisateur crée un compte PayPal, et s’il n’en a pas, qu’il remplisse avant le paiement un formulaire avec ses coordonnées personnelles (même si l’utilisateur l’a déjà fait sur votre site). Certains acheteurs refusent d’utiliser PayPal pour cette raison et cela peut conduire à des abandons de panier.

À l’inverse, Stripe s’engage, dans ses conditions d’utilisation, à ne pas faire d’usage commercial des données personnelles de vos clients et ne leur demande aucune information autre que celles nécessaire au paiement.

## D’autres fonctionnalités innovantes à venir

Stripe offre également les fonctionnalités suivantes, qui demandent des développements côté Biblys qui n’a pas encore été réalisés, mais qui pourront l’être à la demande s’il y a de l’intérêt de la part des administrateurs.

- Le **formulaire de paiement intégré** pour que votre client puisse payer sans quitter votre site Biblys
- La **possibilité de sauvegarder sa carte** pour ne pas avoir à entrer ses informations à chaque paiement
- L’**achat en un clic**, particulièrement adapté à l&#039;achat de livres numériques

Notez que certaines de ces fonctionnalités sont également disponibles chez PayPlug, mais à partir d&#039;un chiffre d&#039;affaires mensuel de 50.000 € et contre un abonnement de 80 €.

## Quel prestataire de paiement choisir ?

Biblys propose désormais trois prestataires de paiement par carte bancaire : Stripe, PayPal et Payplug. S&#039;il est inutile d’avoir les trois, vous pouvez tout à fait en proposer plusieurs. Mais comment les choisir ?

- Choisissez **Stripe** si vous voulez profiter des frais les plus bas du marché, des virements automatiques vers votre compte, et permettre à vos clients de payer avec Apple et Google Pay, de sauvegarder leur carte et de faire des achats en un clic.
- Choisissez **PayPal** si vous souhaitez permettre à vos clients de payer avec leur compte PayPal sans avoir à entrer leur numéro de carte. Je recommande de choisir au moins un autre prestataire car certains clients sont réticents à utiliser PayPal en raison de l’utilisation qui est faite de leur données personnelles.
- Choisissez **Payplug** si vous souhaitez travailler avec un acteur français.

## Comment passer à Stripe ?

C’est simple, il suffit de [créer votre compte Stripe](https://dashboard.stripe.com/register) puis de [créer un accès développeur](https://www.biblys.fr/pages/stripe-creer-un-acces-developpeur) pour Biblys.

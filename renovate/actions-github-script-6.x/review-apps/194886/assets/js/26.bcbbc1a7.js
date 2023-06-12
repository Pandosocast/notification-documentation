(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{399:function(e,t,s){"use strict";s.r(t);var a=s(11),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"obtenir-l-etat-du-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#obtenir-l-etat-du-message"}},[e._v("#")]),e._v(" Obtenir l’état du message")]),e._v(" "),s("p",[e._v("Vous pouvez utiliser l’API Notification GC pour récupérer l’état d’un ou de plusieurs messages.")]),e._v(" "),s("p",[e._v("L’état du message dépend du type de message que vous avez envoyé.")]),e._v(" "),s("p",[e._v("Vous ne pouvez obtenir que l’état des messages qui ont été envoyés durant les 7 derniers jours. La retention des données peut être configurée pour être entre 3 et 90 jours, soit au niveau du service, soit au niveau de la notification.")]),e._v(" "),s("h2",{attrs:{id:"etat-du-courriel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etat-du-courriel"}},[e._v("#")]),e._v(" État du courriel")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[e._v("État")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Renseignements")])])]),e._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("Créé")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Notification GC a placé le message dans une file d’attente, prêt à être envoyé au fournisseur. Il ne doit rester dans cet état que quelques secondes.")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("Envoi en cours")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Notification GC a envoyé le message au fournisseur. Le fournisseur essaiera d’envoyer le message au destinataire pendant une période maximale de 72 heures. Notification GC attend les renseignements de livraison.")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("En attente")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Notification GC attend plus de renseignements sur la livraison."),s("br"),e._v("Notification GC a reçu un rappel du fournisseur, mais l’appareil du destinataire n’a pas encore répondu. Un autre rappel du fournisseur détermine l’état final de la notification.")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("Livraison réussie")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Le message a été livré avec succès.")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("Échec")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Ce champ couvre tous les états d’échec : "),s("br"),e._v("- "),s("code",[e._v("permanent-failure")]),e._v(' – "Le fournisseur n’a pas pu envoyer le message, car l’adresse de courriel était inexacte. Vous devez supprimer ces adresses de courriel de votre base de données."'),s("br"),e._v("- "),s("code",[e._v("temporary-failure")]),e._v(' - "Le fournisseur n’a pas pu envoyer le message. Cela peut se produire lorsque la boîte de réception du destinataire est pleine. Vous pouvez essayer de renvoyer le message."'),s("br"),e._v("- "),s("code",[e._v("technical-failure")]),e._v(' - "Votre message n’a pas été envoyé, car il y a un problème entre Notification GC et le fournisseur.'),s("br"),e._v('Vous devrez essayer de renvoyer vos messages."'),s("br"),e._v(" "),s("code",[e._v("virus-scan-failed")]),e._v(' "Notification GC n’a pas envoyé votre message, car un virus a été détecté dans vos pièces jointes. Veuillez vérifier ces dernières et réessayer."')])])])]),e._v(" "),s("h2",{attrs:{id:"etat-du-message-texte"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etat-du-message-texte"}},[e._v("#")]),e._v(" État du message texte")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[e._v("État")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Renseignements")])])]),e._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("Créé")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Notification GC a placé le message dans une file d’attente, prêt à être envoyé au fournisseur. Il ne doit rester dans cet état que quelques secondes.")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("Envoi en cours")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Notification GC a envoyé le message au fournisseur. Le fournisseur essaiera d’envoyer le message au destinataire pendant une période maximale de 72 heures. Notification GC attend les renseignements de livraison.")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("En attente")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Notification GC attend plus de renseignements sur la livraison."),s("br"),e._v("Notification GC a reçu un rappel du fournisseur, mais l’appareil du destinataire n’a pas encore répondu. Un autre rappel du fournisseur détermine l’état final de la notification.")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("Envoyé / Envoyé à l’international")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Le message a été envoyé à un numéro international. Dans certains pays, les réseaux mobiles ne fournissent plus de renseignements sur la livraison. L’API client Notification GC renvoie cet état comme étant "),s("code",[e._v("sent")]),e._v(". L’application cliente Notification GC retourne cet état comme "),s("code",[e._v("Sent to an international number")]),e._v(".")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("Livraison réussie")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Le message a été livré avec succès.")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("Échec")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Ce champ couvre tous les états d’échec : "),s("br"),e._v("- "),s("code",[e._v("permanent-failure")]),e._v(' – "Le fournisseur n’a pas pu envoyer le message. Cela peut se produire si le numéro de téléphone était inexact ou si l’opérateur réseau rejette le message. Si vous êtes certain que ces numéros de téléphone sont exacts, vous devriez '),s("a",{attrs:{href:"https://notification.canada.ca/contact?lang=fr",target:"_blank",rel:"noopener noreferrer"}},[e._v("communiquer avec nous"),s("OutboundLink")],1),e._v('. Dans le cas contraire, vous devez les supprimer de votre base de données. Vous serez toujours facturé pour les messages texte qui ne peuvent pas être livrés."'),s("br"),e._v("- "),s("code",[e._v("temporary-failure")]),e._v(' - "Le fournisseur n’a pas pu livrer le message. Cela peut se produire lorsque le téléphone du destinataire est éteint, qu’il n’a pas de signal ou que sa boîte de réception de message texte est pleine. Vous pouvez essayer de renvoyer le message. On vous facturera quand même les messages texte aux téléphones qui ne reçoivent pas de messages."'),s("br"),e._v("- "),s("code",[e._v("technical-failure")]),e._v(' - "Votre message n’a pas été envoyé, car il y a un problème entre Notification GC et le fournisseur.'),s("br"),e._v('Vous devrez essayer de renvoyer vos messages. Vous ne serez pas facturé pour les messages texte touchés par une défaillance technique."')])])])]),e._v(" "),s("h2",{attrs:{id:"obtenir-l-etat-d-un-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#obtenir-l-etat-d-un-message"}},[e._v("#")]),e._v(" Obtenir l’état d’un message")]),e._v(" "),s("p",[e._v("Vous pouvez utiliser l’API de Notification GC pour obtenir un état de message unique.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("GET /v2/notifications/{notification_id}\n")])])]),s("h3",{attrs:{id:"parametres-de-requete"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parametres-de-requete"}},[e._v("#")]),e._v(" Paramètres de requête")]),e._v(" "),s("h4",{attrs:{id:"notification-id-obligatoire"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notification-id-obligatoire"}},[e._v("#")]),e._v(" notification_id (obligatoire)")]),e._v(" "),s("p",[e._v("L’ID de la notification. Vous pouvez trouver l’ID de notification dans la réponse à l’appel de méthode de notification initiale.")]),e._v(" "),s("p",[e._v("Vous pouvez également le trouver en "),s("a",{attrs:{href:"https://notification.canada.ca/sign-in?lang=fr",target:"_blank",rel:"noopener noreferrer"}},[e._v("vous connectant à Notification GC"),s("OutboundLink")],1),e._v(" et en accédant à la page "),s("strong",[e._v("Integration API")]),e._v(".")]),e._v(" "),s("p",[e._v("Vous pouvez filtrer les messages retournés en incluant les paramètres facultatifs suivants dans l’adresse URL :")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("template_type")])]),e._v(" "),s("li",[s("code",[e._v("status")])]),e._v(" "),s("li",[s("code",[e._v("reference")])]),e._v(" "),s("li",[s("code",[e._v("older_than")])])]),e._v(" "),s("h3",{attrs:{id:"reponse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reponse"}},[e._v("#")]),e._v(" Réponse")]),e._v(" "),s("p",[e._v("Si la demande est acceptée, le corps de la réponse est "),s("code",[e._v("json")]),e._v(" et le code d’état est "),s("code",[e._v("200")]),e._v(" :")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"740e5834-3a29-46b4-9a6f-16142fde533a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # chaîne obligatoire – ID de notification\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"reference"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # chaîne facultative\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"email_address"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"expéditeur@quelquechose.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # chaîne obligatoire pour les courriels\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"phone_number"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"+447900900123"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("  # chaîne obligatoire pour les messages texte\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"type"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"email / sms"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # chaîne obligatoire\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"status"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"created / sending / pending / delivered / permanent-failure / temporary-failure / technical-failure / pending-virus-check / virus-scan-failed"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # chaîne obligatoire\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"status_description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Envoi en cours / Envoi en cours  / Envoi en cours / Livraison réussie / [Message bloqué | Numéro inexistante | Adresse inexistant] / [Problème de contenu ou de boîte de réception | Problème du fournisseur] / Problème technique / Envoi en cours / Virus dans la pièce jointe"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # chaîne obligatoire\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"provider_response"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # chaîne facultative - ne sera pas nulle si seulement le statut est une erreur technique\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"template"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"f33517ff-2a88-4f6e-b855-c550268ce08a"')]),e._v(" # chaîne obligatoire – ID de modèle\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"uri"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/v2/template/{id}/{version}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # obligatoire\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"body"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # chaîne obligatoire – corps de la notification\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"subject"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"STRING"')]),e._v(" # chaîne obligatoire pour le courriel – objet du courriel\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"created_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # chaîne obligatoire – date et heure de création de la notification\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"created_by_name"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # chaîne facultative – nom de la personne qui a envoyé la notification si elle est envoyée manuellement\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"sent_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # chaîne facultative – date et heure d’envoi de la notification au fournisseur\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"completed_at :"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"STRING"')]),e._v(" # chaîne facultative – date et heure de remise ou d’échec de la notification\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("h3",{attrs:{id:"codes-d-erreur"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#codes-d-erreur"}},[e._v("#")]),e._v(" Codes d’erreur")]),e._v(" "),s("p",[e._v("Si la demande a été refusée, le corps de la réponse est "),s("code",[e._v("json")]),e._v(", consultez le tableau ci-dessous pour plus de détails.")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[e._v("status_code")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("message")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Comment réparer")])])]),e._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("400")])]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("[{")]),s("br"),s("code",[e._v('"error": "ValidationError",')]),s("br"),s("code",[e._v('"message": "id is not a valid UUID"')]),s("br"),s("code",[e._v("}]")])]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Vérifiez l’ID de notification")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("403")])]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("[{")]),s("br"),s("code",[e._v('"error": "AuthError",')]),s("br"),s("code",[e._v('"message": "Error: Your system clock must be accurate to within 30 seconds"')]),s("br"),s("code",[e._v("}]")])]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Vérifiez votre horloge système")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("403")])]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("[{")]),s("br"),s("code",[e._v('"error": "AuthError",')]),s("br"),s("code",[e._v('"message": "Invalid token: API key not found"')]),s("br"),s("code",[e._v("}]")])]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Utilisez la bonne "),s("RouterLink",{attrs:{to:"/fr/cles.html"}},[e._v("clé API")])],1)]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("404")])]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("[{")]),s("br"),s("code",[e._v('"error": "NoResultFound",')]),s("br"),s("code",[e._v('"message": "No result found"')]),s("br"),s("code",[e._v("}]")])]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Vérifiez l’ID de notification")])])])]),e._v(" "),s("h2",{attrs:{id:"obtenir-l-etat-de-plusieurs-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#obtenir-l-etat-de-plusieurs-messages"}},[e._v("#")]),e._v(" Obtenir l’état de plusieurs messages")]),e._v(" "),s("p",[e._v("Vous pouvez utiliser l’API de Notification GC pour rechercher simultanément l’état de plusieurs messages.")]),e._v(" "),s("p",[e._v("Cet appel d’API renvoie une page d’un maximum de 250 messages et états. Vous pouvez obtenir les messages les plus récents ou obtenir des messages plus anciens en indiquant un ID de notification particulier dans l’argument "),s("code",[e._v("older_than")]),e._v(".")]),e._v(" "),s("p",[e._v("Vous ne pouvez obtenir que l’état des messages qui ont été envoyés durant les 7 derniers jours. La retention des données peut être configurée pour être entre 3 et 90 jours, soit au niveau du service, soit au niveau de la notification.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("GET /v2/notifications\n")])])]),s("h4",{attrs:{id:"tous-les-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tous-les-messages"}},[e._v("#")]),e._v(" Tous les messages")]),e._v(" "),s("p",[e._v("Cela retournera vos messages avec des états. Le type de clé API que vous utilisez pour effectuer des requêtes vers ce point de terminaison de l'API est important (c'est-à-dire Équipe, Test ou Active). Ce type sera assorti au type de clé API qui a créé vos messages. Si vous effectuez une requête avec une clé API Active, seuls les messages créés par des clés API Active seront renvoyés. Chaque page contiendra jusqu’à 250 messages.")]),e._v(" "),s("p",[e._v("Vous pouvez filtrer les messages retournés en incluant les arguments facultatifs suivants dans l’adresse URL :")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("template_type")])]),e._v(" "),s("li",[s("code",[e._v("status")])]),e._v(" "),s("li",[s("code",[e._v("reference")])]),e._v(" "),s("li",[s("code",[e._v("older_than")])])]),e._v(" "),s("h3",{attrs:{id:"arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[e._v("#")]),e._v(" Arguments")]),e._v(" "),s("p",[e._v("Vous pouvez omettre n’importe lequel de ces arguments pour ignorer ces filtres.")]),e._v(" "),s("h4",{attrs:{id:"type-de-gabarit-facultatif"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-de-gabarit-facultatif"}},[e._v("#")]),e._v(" Type de gabarit (facultatif)")]),e._v(" "),s("p",[e._v("Si vous spécifiez le filtre "),s("code",[e._v("template_type")]),e._v(", vous pouvez filtrer par :")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("email")])]),e._v(" "),s("li",[s("code",[e._v("sms")])])]),e._v(" "),s("h3",{attrs:{id:"etat-facultatif"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etat-facultatif"}},[e._v("#")]),e._v(" État (facultatif)")]),e._v(" "),s("p",[e._v("Si vous spécifiez le filtre "),s("code",[e._v("status")]),e._v(", vous pouvez filtrer par chaque :")]),e._v(" "),s("ul",[s("li",[e._v("état du courriel")]),e._v(" "),s("li",[e._v("état du message texte")])]),e._v(" "),s("p",[e._v("Vous pouvez ignorer cet argument pour ignorer ce filtre.")]),e._v(" "),s("h4",{attrs:{id:"reference-facultatif"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference-facultatif"}},[e._v("#")]),e._v(" Référence (facultatif)")]),e._v(" "),s("p",[e._v("Si vous spécifiez le filtre "),s("code",[e._v("reference")]),e._v(", vous pouvez filtrer les résultats par la valeur "),s("code",[e._v("reference")]),e._v(", un identificateur que vous pouvez créer au besoin lors de l'envoi des notifications. Cette référence identifie une seule notification ou un lot de notifications. Il ne doit contenir aucun renseignement personnel comme le nom ou l’adresse postale. Par exemple :")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"reference"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"STRING"')]),e._v("\n")])])]),s("h4",{attrs:{id:"plus-ancien-que-facultatif"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plus-ancien-que-facultatif"}},[e._v("#")]),e._v(" Plus ancien que (facultatif)")]),e._v(" "),s("p",[e._v("Si vous spécifiez le filtre "),s("code",[e._v("older_than")]),e._v(", la méthode renvoie les 250 notifications reçues plus anciennes que l’ID de notification donné.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('"older_than":"740e5834-3a29-46b4-9a6f-16142fde533a"\n')])])]),s("p",[e._v("Si vous ignorez cet argument, la méthode renvoie les 250 notifications les plus récentes.")]),e._v(" "),s("p",[e._v("Le client ne retourne que les notifications envoyées lors des 7 derniers jours. Si la notification indiquée dans cet argument a été envoyée il y a plus de 7 jours, le client renvoie une réponse vide.")]),e._v(" "),s("h3",{attrs:{id:"reponse-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reponse-2"}},[e._v("#")]),e._v(" Réponse")]),e._v(" "),s("p",[e._v("Si la demande est acceptée, le corps de la réponse est "),s("code",[e._v("json")]),e._v(" et le code d’état est "),s("code",[e._v("200")]),e._v(".")]),e._v(" "),s("h4",{attrs:{id:"tous-les-messages-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tous-les-messages-2"}},[e._v("#")]),e._v(" Tous les messages")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"notifications"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"740e5834-3a29-46b4-9a6f-16142fde533a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # chaîne obligatoire – ID de notification\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"référence"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # chaîne facultative – référence client\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"email_address"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"expéditeur@quelquechose.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # chaîne obligatoire pour les courriels\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"phone_number"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"+447900900123"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("  # chaîne obligatoire pour les messages texte\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"type"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"email / sms"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # chaîne obligatoire\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"status"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"created / sending / pending / delivered / permanent-failure / temporary-failure / technical-failure / pending-virus-check / virus-scan-failed"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # chaîne obligatoire\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"status_description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Envoi en cours / Envoi en cours / Envoi en cours / Livraison réussie / [Message bloqué | Numéro inexistante | Adresse inexistant] / Problème de contenu ou de boîte de réception / Problème technique / Envoi en cours / Virus dans la pièce jointe"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # chaîne obligatoire\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"provider_response"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # chaîne facultative - ne sera pas nulle si seulement le statut est une erreur technique\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"template"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" 'f33517ff-2a88-4f6e-b855-c550268ce08a' # chaîne obligatoire – ID de modèle\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"uri"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/v2/template/{id}/{version}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # obligatoire\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"body"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # chaîne obligatoire – corps de la notification\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"subject"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"STRING"')]),e._v(" # chaîne obligatoire pour le courriel – objet du courriel\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"created_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # chaîne obligatoire – date et heure de création de la notification\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"created_by_name"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # chaîne facultative – nom de la personne qui a envoyé la notification si elle est envoyée manuellement\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"sent_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" # chaîne facultative – date et heure d’envoi de la notification au fournisseur\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"completed_at :"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"STRING"')]),e._v(" # chaîne facultative – date et heure de livraison ou d’échec de la notification\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    …\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"links"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"current"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/notifications?template_type=sms&status=delivered"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"next"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/notifications?other_than=last_id_in_list&template_type=sms&status=delivered"')]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("h3",{attrs:{id:"codes-d-erreur-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#codes-d-erreur-2"}},[e._v("#")]),e._v(" Codes d’erreur")]),e._v(" "),s("p",[e._v("Si la demande a été refusée, le corps de la réponse est "),s("code",[e._v("json")]),e._v(", consultez le tableau ci-dessous pour plus de détails.")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[e._v("status_code")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("message")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Comment réparer")])])]),e._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("400")])]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("[{")]),s("br"),s("code",[e._v('"error": "ValidationError",')]),s("br"),s("code",[e._v('"message": "id is not a valid UUID"')]),s("br"),s("code",[e._v("}]")])]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Vérifiez l’ID de notification")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("403")])]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("[{")]),s("br"),s("code",[e._v('"error": "AuthError",')]),s("br"),s("code",[e._v('"message": "Error: Your system clock must be accurate to within 30 seconds"')]),s("br"),s("code",[e._v("}]")])]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Vérifiez votre horloge système")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("403")])]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("[{")]),s("br"),s("code",[e._v('"error": "AuthError",')]),s("br"),s("code",[e._v('"message": "Invalid token: API key not found"')]),s("br"),s("code",[e._v("}]")])]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Utilisez la bonne "),s("RouterLink",{attrs:{to:"/fr/cles.html"}},[e._v("clé API")])],1)]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("404")])]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("[{")]),s("br"),s("code",[e._v('"error": "NoResultFound",')]),s("br"),s("code",[e._v('"message": "No result found"')]),s("br"),s("code",[e._v("}]")])]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Vérifiez l’ID de notification")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
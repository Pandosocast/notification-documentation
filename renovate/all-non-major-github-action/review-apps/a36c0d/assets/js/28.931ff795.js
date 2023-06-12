(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{402:function(e,t,o){"use strict";o.r(t);var i=o(11),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"fonctions-de-rappel"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fonctions-de-rappel"}},[e._v("#")]),e._v(" Fonctions de rappel")]),e._v(" "),o("p",[e._v("Les fonctions de rappels peuvent automatiser la production d'un accusé de réception ou maintenir l'état d'une notification dans votre base de données.")]),e._v(" "),o("p",[e._v("Une fonction de rappel vous permet de recevoir des messages sur l'état des notifications de Notification GC à une adresse URL de votre choix. Les rappels sont lorsque Notification GC envoie des requêtes HTTP "),o("code",[e._v("POST")]),e._v(" à votre service. Vous pouvez obtenir des rappels lorsqu'un courriel ou un message texte que vous avez envoyé est livré ou échoue.")]),e._v(" "),o("p",[e._v("Vous devrez fournir un jeton "),o("code",[e._v("Bearer")]),e._v(", pour des raisons de sécurité. Nous ajouterons ceci à l’en-tête "),o("code",[e._v("Authorization")]),e._v(" de la demande de rappel.")]),e._v(" "),o("h2",{attrs:{id:"configurer-des-fonctions-de-rappel"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configurer-des-fonctions-de-rappel"}},[e._v("#")]),e._v(" Configurer des fonctions de rappel")]),e._v(" "),o("p",[e._v("Vous devez fournir :")]),e._v(" "),o("ul",[o("li",[e._v("une adresse URL de destination vers laquelle Notification GC effectuera une requête HTTP")]),e._v(" "),o("li",[e._v("un jeton "),o("code",[e._v("Bearer")]),e._v(", pour des raisons de sécurité, que Notification GC placera dans l’en-tête "),o("code",[e._v("Authorization")]),e._v(" des demandes")])]),e._v(" "),o("p",[e._v("Pour ce faire :")]),e._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"https://notification.canada.ca/sign-in?lang=fr",target:"_blank",rel:"noopener noreferrer"}},[e._v("Connectez-vous à Notification GC"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("Allez à la page "),o("strong",[e._v("Intégration API")]),e._v(".")]),e._v(" "),o("li",[e._v("Sélectionnez "),o("strong",[e._v("Fonctions de rappel")]),e._v(".")])]),e._v(" "),o("p",[e._v("Lors de la création d’un jeton "),o("code",[e._v("Bearer")]),e._v(", vous devez :")]),e._v(" "),o("ul",[o("li",[e._v("garder votre jeton "),o("code",[e._v("Bearer")]),e._v(" sécurisé")]),e._v(" "),o("li",[e._v("le changer si vous avez une raison de penser qu’on ne peut plus lui faire confiance")]),e._v(" "),o("li",[e._v("Assurez-vous que les fonctions de rappel que vous recevez de Notification GC contiennent votre jeton "),o("code",[e._v("Bearer")]),e._v(" dans l’en-tête "),o("code",[e._v("Authorization")])]),e._v(" "),o("li",[e._v("utiliser une valeur hachée pour que Notification GC ne contienne pas le vrai jeton")])]),e._v(" "),o("h2",{attrs:{id:"accuses-de-reception-de-message"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#accuses-de-reception-de-message"}},[e._v("#")]),e._v(" Accusés de réception de message")]),e._v(" "),o("p",[e._v("Lorsque vous envoyez un courriel ou un message texte, Notification GC envoie un accusé de réception à votre adresse URL de rappel pour vous dire s’il a été livré ou non. Il s’agit d’une méthode automatisée pour obtenir l’état des messages.")]),e._v(" "),o("p",[e._v("Cette fonctionnalité fonctionne avec les clés API de test, mais ne fonctionne pas avec les adresses de courriel ou les numéros de téléphone de test de détection de fumée.")]),e._v(" "),o("p",[e._v("Le message de la fonction de rappel est formaté en JSON. Toutes les valeurs sont des chaînes de caractères. Voici la clé, la description et le format des arguments du message de la fonction de rappel :")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[e._v("Clé")]),e._v(" "),o("th",{staticStyle:{"text-align":"left"}},[e._v("Description")]),e._v(" "),o("th",{staticStyle:{"text-align":"left"}},[e._v("Format de la chaîne")])])]),e._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[o("code",[e._v("id")])]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("ID de Notification GC pour les accusés d’état")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("UUID")])]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[o("code",[e._v("reference")])]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Référence envoyée par le service")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("12345678")])]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[o("code",[e._v("to")])]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("L’adresse de courriel ou numéro de téléphone du destinataire")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("hello@canada.ca ou 01234567890")])]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[o("code",[e._v("status")])]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("État de la notification")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("code",[e._v("delivered")]),e._v(", "),o("code",[e._v("permanent-failure")]),e._v(", "),o("code",[e._v("temporary-failure")]),e._v(" ou "),o("code",[e._v("technical-failure")])])]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[o("code",[e._v("status_description")])]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("(placeholder) Libellé de l'état de livraison de la notification")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("code",[e._v("Envoi en cours")]),e._v(", "),o("code",[e._v("Envoi en cours")]),e._v(", "),o("code",[e._v("Envoi en cours")]),e._v(", "),o("code",[e._v("Livraison réussie")]),e._v(", "),o("code",[e._v("[Message bloqué | Numéro inexistante | Adresse inexistant]")]),e._v(", "),o("code",[e._v("[Problème de contenu ou de boîte de réception | Problème du fournisseur]")]),e._v(", "),o("code",[e._v("Problème technique")]),e._v(", "),o("code",[e._v("Envoi en cours")]),e._v(", "),o("code",[e._v("Virus dans la pièce jointe")])])]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[o("code",[e._v("provider_response")])]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("La réponse détaillée venant du fournisseur. Ceci sera renseigné uniquement lorsque l’état de la notification est une erreur technique")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("code",[e._v("Blocked as spam by phone carrier")]),e._v(" (ou tout autre message) ou nul")])]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[o("code",[e._v("created_at")])]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Heure à laquelle le service a envoyé la demande")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("code",[e._v("2017-05-14T12:15:30.000000Z")])])]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[o("code",[e._v("completed_at")])]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Dernière mise à jour de l’état")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("code",[e._v("2017-05-14T12:15:30.000000Z")]),e._v(" ou nul")])]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[o("code",[e._v("sent_at")])]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Heure d’envoi de la notification")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("code",[e._v("2017-05-14T12:15:30.000000Z")]),e._v(" ou nul")])]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[o("code",[e._v("notification_type")])]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Type de notification")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("code",[e._v("email")]),e._v(" ou "),o("code",[e._v("sms")])])])])]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("Plusieurs fonctions de rappel pour une notification")]),e._v(" "),o("p",[e._v("Vous pouvez recevoir plusieurs fonctions de rappel pour une seule notification envoyée. Par exemple, il est possible que le serveur de messagerie destinataire accepte le courriel (envoyant une fonction de rappel de livraison réussie), mais après avoir traité le courriel, le serveur de messagerie peut déterminer qu’en réalité ce courriel retourne un échec (envoyant une fonction de rappel d’échec).")]),e._v(" "),o("p",[e._v("Les fonctions de rappel sont envoyées dans l’ordre où elles sont reçues.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);
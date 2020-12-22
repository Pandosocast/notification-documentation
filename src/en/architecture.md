# API Architecture

## Sending a text message

![](documentation/images/notify-architecture-text-message-2020.png)

1. The service sends a text message notification to Notify.
1. Notify sends the text message to the provider.
1. The provider delivers the text message to the recipient.
1. The recipient receives the text message and sends a delivery receipt to the provider.
1. The provider sends the delivery receipt to Notify.
1. Notify receives the delivery receipt and sends an API response to the service.
1. The service receives the API response.

## Sending an email

![](documentation/images/notify-architecture-email-2020.png)

1. The service sends an email notification to Notify.
1. Notify sends the email to the provider.
1. The provider delivers the email to the recipient.
1. The recipient receives the email and sends a delivery receipt to the provider.
1. The provider sends the delivery receipt to Notify.
1. Notify receives the delivery receipt and sends an API response to the service.
1. The service receives the API response.

## Getting the status of a message

![](documentation/images/notify-architecture-get-status-2020.png)

1. The service requests a notification status from Notify.
1. Notify queries the database and retrieves the notification status.
1. Notify sends the API response with the notification status to the service.
1. The service receives the API response.

## Getting received text messages

![](documentation/images/notify-architecture-received-text-messages-2020.png)

1. Recipients send text messages.
1. Notify receives the text messages.
1. The service requests all or specific received text messages from Notify.
1. Notify receives the request for received text messages.
1. Notify sends the received text messages to the service.
1. The service receives the received text messages.

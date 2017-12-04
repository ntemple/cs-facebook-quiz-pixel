# Facebook Pixel Events for Thrive Quiz

Plugin for Thrive Quiz Builder to Send Facebook Pixel Events for each Page


* First, ensure that you have your Facebook Pixel installed on the site
https://www.facebook.com/business/help/952192354843755
* Install the plugin
* Determine the Events that are sent

Facebook doesn’t give great insights on the events sent - so you need to know what they are to create custom audiences.

The plugin sends a ViewContent event for each page shown, with the content_category being the id of the quiz and the page being the page shown, or if a question, the question id.

##Example of ViewContent events sent:
In this example, we have  a 2 question quiz with an optin and results page.

### Every Question:
content_category: quiz_12

### Optin:
content_name: optin
content_category: quiz_12

### Results:
content_name: results
content_category: quiz_12

## Helper 
You can use the Facebook Pixel Helper for Chrome to see the exact events sent.

https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc

See the video to verify that the events are firing correctly:
https://vimeo.com/245682737

## Support and questions
The CommerceStore.com digital marketplace, with full support services, is launching shortly.
In the meantime, you can contact hello@temple.rocks with any questions and feature / event requests.

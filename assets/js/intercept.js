/*
The goal is to a) determine if this is a page from thrive, and b) if it is, fire a ViewContent event.
This action triggers sends to the Facebook pixel. See:
https://developers.facebook.com/ads/blog/post/2017/05/29/tagging-a-single-page-application-facebook-pixel/
*/
(function(open) {
  
  XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {
    
    this.addEventListener("readystatechange", function() {
      if (this.readyState === 4 && this.status === 200) {
        try {
          var page = null;
          var response = JSON.parse(this.responseText);
        
          if ('page_type' in response) page = response['page_type'];
          if ('question' in response && response['question'])
            page = 'q' + response['question']['data']['id'];
          
          if (page) {
            
            window.fbq('track', 'ViewContent', {
              'content_name': page,
              'content_category': 'quiz_' + response['quiz_id']
            });
            
          }
        } catch(e) {} // Errors are not fatal, even expected. The return may not be JSON at all!
      }
    }, false);
    
    open.call(this, method, url, async, user, pass);
  };
  
})(XMLHttpRequest.prototype.open);


AFRAME.registerComponent('facebook-link', {
  init: function () {
    var el = this.el;
    el.addEventListener('click', (e) => {     
    window.open("https://facebook.com/", '_blank');
    });
  }
});

AFRAME.registerComponent('twitter-link', {
  init: function () {
    var el = this.el;
    el.addEventListener('click', (e) => {    
    window.open("https://twitter.com/", '_blank');
    });
  }
});

AFRAME.registerComponent('instagram-link', {
  init: function () {
    var el = this.el;
    el.addEventListener('click', (e) => {     
    window.open("https://instagram.com/", '_blank');
    });
  }
});

AFRAME.registerComponent('linkedin-link', {
  init: function () {
    var el = this.el;
    el.addEventListener('click', (e) => {     
    window.open("https://www.linkedin.com/in/husaini99/", '_blank');
    });
  }
});

AFRAME.registerComponent('company-link', {
  init: function () {
    var el = this.el;
    el.addEventListener('click', (e) => {     
    window.open("https://arlink.glitch.me/", '_blank');
    });
  }
});

AFRAME.registerComponent('email-link', {
  init: function () {
    var el = this.el;
    el.addEventListener('click', (e) => {     
    window.location.href = "mailto:muhammad_17001566@utp.edu.my";
    });
  }
});

AFRAME.registerComponent('call-link', {
  init: function () {
    var el = this.el;
    el.addEventListener('click', (e) => {     
    window.location.href = "tel:+60198864456";
    });
  }
});

AFRAME.registerComponent('vid-player', {
  init: function () {
    var vid = document.getElementById('video');
    var el = this.el;
    el.addEventListener('click', (e) => {  
    if (vid.paused){
      vid.play()
    } else {
      vid.pause()
    }
    });
  }
});

 AFRAME.registerComponent('resize-text', { 
    init: function() {  
      var self = this; 
      window.addEventListener('resize', function(e) { 
        var height = window.innerHeight;
        var width = window.innerWidth; 
        // console.log('resized!', height, width); 
        self.el.setAttribute('width', ( width / 100 ));   
      });
    }
  });

var initSlide = function(el) {
  var dom = document.querySelector(el),
  Slideshow = {
    init: function() {
      this.current = 0;
      this.slides = dom.querySelectorAll('img');
      this.numSlides = this.slides.length;
      this.addEventListeners();
      this.show();
    },
    addEventListeners: function () {
      var that = this;
      dom.querySelector('.show-prev').addEventListener('click', function() {
        that.decrement();
      }, false);
      dom.querySelector('.show-next').addEventListener('click', function() {
        that.increment();
      }, false);
      window.addEventListener('keydown', function(k) {
        if (k.key === 'ArrowLeft' || k.keyCode === 37) {
          that.decrement();
        } else if (k.key === 'ArrowRight' || k.keyCode === 39) {
          that.increment();
        }
      }, false);
    },
    decrement: function() {
      this.hide();
      this.current = (this.current === 0) ? (this.numSlides - 1) : (this.current - 1);
      this.show();
    },
    increment: function() {
      this.hide();
      this.current = (this.current === this.numSlides - 1) ? (0) : (this.current + 1);
      this.show();
    },
    hide: function() {
      this.slides[this.current].className = 'hide';
    },
    show: function() {
      this.slides[this.current].className = 'show';
    }
  };
  Slideshow.init();
};


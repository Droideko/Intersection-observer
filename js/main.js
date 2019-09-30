const images = document.querySelectorAll('.section-container__image-wrap');
const options = {
   root: null,
   rootMargin: '0px',
   threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
   entries.forEach(entry => {
      let targetElement = entry.target.children[0];
      let delay = targetElement.dataset.delay || `.0s`;
      if (entry.intersectionRatio > 0.2) {
        targetElement.style.animation = `anim 2s forwards ease ${delay}`;
      }
      else {
         if (targetElement.style.animation == '2s ease 0s 1 normal forwards running anim') {
            targetElement.style.animation = 'anim2 1s forwards ease';  
         } else {
            targetElement.style.animation = 'none';
         }
      }
   });
}, options);

images.forEach(img => {
   observer.observe(img);
});
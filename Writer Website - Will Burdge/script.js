window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });
  
  var form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for submitting the form!');
});

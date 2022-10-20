function update() {
    document.querySelectorAll('css-doodle').forEach(function (o) {
      o.update();
    });
  }
  
  var interval = setInterval(update, 5000);
  
  document.addEventListener('click', function () {
    clearInterval(interval);
    update();
    interval = setInterval(update, 5000);
  });
document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.button');
  var description = document.getElementById('description');
  var adjectivesContainer = document.getElementById('adjectives');
  var pianoSound = document.getElementById('pianoSound');
  var container = document.getElementById('container');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      var letter = button.textContent;
      var adjectives = getAdjectives(letter);
      
      // Очищаем содержимое контейнера description
      description.textContent = '';

      // Добавляем прилагательные в бегущую строку
      adjectivesContainer.innerHTML = '';
      adjectives.forEach(function(adjective) {
        var span = document.createElement('span');
        span.textContent = adjective;
        adjectivesContainer.appendChild(span);
      });

      // Запускаем анимацию бегущей строки
      adjectivesContainer.style.animation = 'marquee 5s linear infinite';

      // Воспроизводим звук пианино
      pianoSound.play();

      // Изменяем фон экрана в зависимости от нажатой кнопки
      switch (letter) {
        case 'L':
          container.style.backgroundImage = "url('flag_russia.jpg')";
          break;
        case 'U':
          container.style.backgroundImage = "url('flag_singapore.webp')";
          break;
        case 'C':
          container.style.backgroundImage = "url('flag_uk.jpg')";
          break;
        case 'I':
          container.style.backgroundImage = "url('flag_france.jpg')";
          break;
        case 'N':
          container.style.backgroundImage = "url('flag_japan.jpg')";
          break;
        case 'D':
          container.style.backgroundImage = "url('flag_italy.jpg')";
          break;
        case 'E':
          container.style.backgroundImage = "url('flag_ballet.jpg')";
          break;
        default:
          container.style.backgroundImage = 'none';
      }

      // Устанавливаем таймер для возвращения исходного фона через 1 секунду
      setTimeout(function() {
        container.style.backgroundImage = 'none';
      }, 1000);
    });
  });

  function getAdjectives(letter) {
    var adjectives = {
      'L': ['lovely', 'Leading', 'luminous'],
      'U': ['unique', 'unstoppable', 'uplifting'],
      'C': ['charming', 'caring', 'creative'],
      'I': ['intelligent', 'inspiring', 'irresistible'],
      'N': ['noble', 'natural', 'nurturing'],
      'D': ['dazzling', 'delightful', 'dynamic'],
      'E': ['elegant', 'enchanting', 'empowering']
    };
    return adjectives[letter] || [];
  }
});

var select = document.querySelector('select');
var p = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  if (choice === 'sunny') {
    p.textContent = 'Сегодня светит солнце, не забудьте взять с собой солнцезащитные очки и крем';
  } else if (choice === 'rainy') {
    p.textContent = 'Сегодня идёт дождь, не забудьте взять собой зонтик и непромокаемую обувь';
  } else if (choice === 'snowing') {
    p.textContent = 'Сегодня идёт снег, не забудьте одеться тепло и взять с собой перчатки';
  } else if (choice === 'overcast') {
    p.textContent = 'Сегодня облачно, возможно сегодня будет временный дождь и возьмите на всякий случай зонтик';
  } else {
    p.textContent = '';
  }
}
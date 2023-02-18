function Time() {
  const d = new Date();
  const hour = d.getHours();
  const min = d.getMinutes();
  const sec = d.getSeconds();
  const currentHour = 30*hour + min/2;
  const currentMin = 6*min;
  const currentSec = 6*sec;

  const H = document.getElementById('hour');
  const M = document.getElementById('min');
  const S = document.getElementById('sec');

  H.style.transform = `rotate(${currentHour}deg)`;
  M.style.transform = `rotate(${currentMin}deg)`;
  S.style.transform = `rotate(${currentSec}deg)`;
}

Time();
setInterval(Time, 1000);

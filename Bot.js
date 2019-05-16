  demongox = document.createElement('div');
  demongox.style.position = 'absolute';
  demongox.style.top = '10px';
  demongox.style.left = '10px';
  demongox.style.padding = '2px';
  demongox.style.color = '#000';
  demongox.style.backgroundColor = '#fff';
  demongox.innerHTML = 'Powered by Ampulex';
  body = document.getElementsByTagName('body')[0];
  body.appendChild(demongox);
  demongox = document.createElement('div');
  demongox.style.position = 'absolute';
  demongox.style.top = '50px';
  demongox.style.left = '10px';
  demongox.style.padding = '2px';
  demongox.style.color = '#000';
  demongox.style.backgroundColor = '#fff';
  demongox.innerHTML = 'Plugin enabled';
  body = document.getElementsByTagName('body')[0];
  body.appendChild(demongox);
  needResCalcute = document.createElement('div');
  needResCalcute.style.position = 'absolute';
  needResCalcute.style.top = '100px';
  needResCalcute.style.left = '88%';
  needResCalcute.id = 'needResCalcute';
  needResCalcute.style.padding = '2px';
  needResCalcute.style.width = '150px';
  needResCalcute.style.height = '200px';
  needResCalcute.style.color = '#000';
  needResCalcute.style.backgroundColor = '#fff';
  body = document.getElementsByTagName('body')[0];
  body.appendChild(needResCalcute);
  function format(maxtime) {
    var hrs = Math.floor(maxtime / 3600);
    var min = Math.floor(maxtime / 60) % 60;
    var sec = maxtime % 60;
    var t = hrs + ":"; if (min < 10) { t += "0"; }
    t += min + ":"; if (sec < 10) { t += "0"; }
    t += sec; return t;
};
function ReLoadTime(Time) { var p = Time.split(":"); return (p[0] * 3600) + (p[1] * 60) + (p[2] * 1); }
function Time(x, y) { return format(Math.abs(Math.round(x / y))); };
window.location.href = "http://site.ir/build.php?id=29";
$('a.build').click();

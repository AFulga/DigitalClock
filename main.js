function getDigit(number) {
  const digitMap = {
    0: { b1: 1, b2: 1, b3: 1, b4: 0, b5: 1, b6: 1, b7: 1 },
    1: { b1: 0, b2: 0, b3: 0, b4: 0, b5: 0, b6: 1, b7: 1 },
    2: { b1: 0, b2: 1, b3: 1, b4: 1, b5: 1, b6: 1, b7: 0 },
    3: { b1: 0, b2: 0, b3: 1, b4: 1, b5: 1, b6: 1, b7: 1 },
    4: { b1: 1, b2: 0, b3: 0, b4: 1, b5: 0, b6: 1, b7: 1 },
    5: { b1: 1, b2: 0, b3: 1, b4: 1, b5: 1, b6: 0, b7: 1 },
    6: { b1: 1, b2: 1, b3: 1, b4: 1, b5: 1, b6: 0, b7: 1 },
    7: { b1: 0, b2: 0, b3: 1, b4: 0, b5: 0, b6: 1, b7: 1 },
    8: { b1: 1, b2: 1, b3: 1, b4: 1, b5: 1, b6: 1, b7: 1 },
    9: { b1: 1, b2: 0, b3: 1, b4: 1, b5: 1, b6: 1, b7: 1 },
  };

  const { b1, b2, b3, b4, b5, b6, b7 } = digitMap[number || 0];

  const digit = `<div class="col1">
                <div class="bar-container vertical v-top-left ${
                  b1 && 'selected'
                }">
                <div class="bar"></div>
                </div>
                <div class="bar-container vertical v-bottom-left ${
                  b2 && 'selected'
                }">
                <div class="bar"></div>
                </div>
                </div>

                <div class="col2">
                <div class="bar-container horizontal h-top ${b3 && 'selected'}">
                <div class="bar"></div>
                </div>
                <div class="bar-container horizontal h-mid ${b4 && 'selected'}">
                <div class="bar"></div>
                </div>
                <div class="bar-container horizontal h-bottom ${
                  b5 && 'selected'
                }">
                <div class="bar"></div>
                </div>
                </div>

                <div class="col3">
                <div class="bar-container vertical v-top-right ${
                  b6 && 'selected'
                }">
                <div class="bar"></div>
                </div>
                <div class="bar-container vertical v-bottom-right ${
                  b7 && 'selected'
                }">
                <div class="bar"></div>
                </div>
                </div>`;
  return digit;
}
function getCurrentTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hh = (hours < 10 ? '0' + hours : '' + hours).split('');
  const mm = (minutes < 10 ? '0' + minutes : '' + minutes).split('');
  const ss = (seconds < 10 ? '0' + seconds : '' + seconds).split('');

  return { h1: hh[0], h2: hh[1], m1: mm[0], m2: mm[1], s1: ss[0], s2: ss[1] };
}

function setDigits() {
  const { h1, h2, m1, m2, s1, s2 } = getCurrentTime();
  document.querySelector('#hourDig1').innerHTML = getDigit(h1);
  document.querySelector('#hourDig2').innerHTML = getDigit(h2);

  document.querySelector('#minuteDig1').innerHTML = getDigit(m1);
  document.querySelector('#minuteDig2').innerHTML = getDigit(m2);

  document.querySelector('#secondsDig1').innerHTML = getDigit(s1);
  document.querySelector('#secondsDig2').innerHTML = getDigit(s2);
}

setInterval(function () {
  setDigits();
}, 1000);

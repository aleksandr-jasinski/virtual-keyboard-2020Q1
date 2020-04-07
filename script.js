let main = document.createElement('main');
main.className = 'main';
document.body.append(main);

let textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.id = 'textarea';
textarea.rows = '10';
textarea.cols = '50';
textarea.tabIndex = '0';
main.append(textarea);

const keyboard = document.createElement('section');
keyboard.className = 'keyboard';
keyboard.id = 'keyboard';
keyboard.tabIndex = '1';
main.append(keyboard);

// First row - Digits & Signs
const row1 = new Row(1).rowX;

const yoCyrillicSmall = new Key('ё').keyCyrillicSmall;
yoCyrillicSmall.classList.add('Backquote');
row_1.append(yoCyrillicSmall);

const digitOne = new Key('1').keyDigit;
digitOne.classList.add('Digit1');
row_1.append(digitOne);

const digitTwo = new Key('2').keyDigit;
digitTwo.classList.add('Digit2');
row_1.append(digitTwo);

const digitThree = new Key('3').keyDigit;
digitThree.classList.add('Digit3');
row_1.append(digitThree);

const digitFour = new Key('4').keyDigit;
digitFour.classList.add('Digit4');
row_1.append(digitFour);

const digitFive = new Key('5').keyDigit;
digitFive.classList.add('Digit5');
row_1.append(digitFive);

const digitSix = new Key('6').keyDigit;
digitSix.classList.add('Digit6');
row_1.append(digitSix);

const digitSeven = new Key('7').keyDigit;
digitSeven.classList.add('Digit7');
row_1.append(digitSeven);

const digitEight = new Key('8').keyDigit;
digitEight.classList.add('Digit8');
row_1.append(digitEight);

const digitNine = new Key('9').keyDigit;
digitNine.classList.add('Digit9');
row_1.append(digitNine);

const digitZero = new Key('0').keyDigit;
digitZero.classList.add('Digit0');
row_1.append(digitZero);

const minusKey = new Key('-').keySign;
minusKey.classList.add('Minus');
row_1.append(minusKey);

const equalKey = new Key('=').keySign;
equalKey.classList.add('Equal');
row_1.append(equalKey);

const backspace = new Key('Backspace').keySignature;
backspace.classList.add('Backspace');
row_1.append(backspace);

//Second row
const row2 = new Row(2).rowX;

const Tab = new Key('Tab').keyTab;
Tab.classList.add('Tab');
row_2.append(Tab);

const jCyrillicSmall = new Key('й').keyCyrillicSmall;
jCyrillicSmall.classList.add('KeyQ');
row_2.append(jCyrillicSmall);

const cCyrillicSmall = new Key('ц').keyCyrillicSmall;
cCyrillicSmall.classList.add('KeyW');
row_2.append(cCyrillicSmall);

const uCyrillicSmall = new Key('у').keyCyrillicSmall;
uCyrillicSmall.classList.add('KeyE');
row_2.append(uCyrillicSmall);

const kCyrillicSmall = new Key('к').keyCyrillicSmall;
kCyrillicSmall.classList.add('KeyR');
row_2.append(kCyrillicSmall);

const yeCyrillicSmall = new Key('е').keyCyrillicSmall;
yeCyrillicSmall.classList.add('KeyT');
row_2.append(yeCyrillicSmall);

const nCyrillicSmall = new Key('н').keyCyrillicSmall;
nCyrillicSmall.classList.add('KeyY');
row_2.append(nCyrillicSmall);

const gCyrillicSmall = new Key('г').keyCyrillicSmall;
gCyrillicSmall.classList.add('KeyU');
row_2.append(gCyrillicSmall);

const shCyrillicSmall = new Key('ш').keyCyrillicSmall;
shCyrillicSmall.classList.add('KeyI');
row_2.append(shCyrillicSmall);

const shchCyrillicSmall = new Key('щ').keyCyrillicSmall;
shchCyrillicSmall.classList.add('KeyO');
row_2.append(shchCyrillicSmall);

const zCyrillicSmall = new Key('з').keyCyrillicSmall;
zCyrillicSmall.classList.add('KeyP');
row_2.append(zCyrillicSmall);

const khCyrillicSmall = new Key('х').keyCyrillicSmall;
khCyrillicSmall.classList.add('BracketLeft');
row_2.append(khCyrillicSmall);

const tzCyrillicSmall = new Key('ъ').keyCyrillicSmall;
tzCyrillicSmall.classList.add('BracketRight');
row_2.append(tzCyrillicSmall);

const backSlash = new Key('\\').keyBackSlash;
row_2.append(backSlash);

const Del = new Key('Del').keyTab;
Del.classList.add('Delete');
row_2.append(Del);

//Third row
const row3 = new Row(3).rowX;

const capsLock = new Key('CapsLock').keySignature;
capsLock.classList.add('CapsLock');
row_3.append(capsLock);

const fCyrillicSmall = new Key('ф').keyCyrillicSmall;
fCyrillicSmall.classList.add('KeyA');
row_3.append(fCyrillicSmall);

const yCyrillicSmall = new Key('ы').keyCyrillicSmall;
yCyrillicSmall.classList.add('KeyS');
row_3.append(yCyrillicSmall);

const vCyrillicSmall = new Key('в').keyCyrillicSmall;
vCyrillicSmall.classList.add('KeyD');
row_3.append(vCyrillicSmall);

const aCyrillicSmall = new Key('а').keyCyrillicSmall;
aCyrillicSmall.classList.add('KeyF');
row_3.append(aCyrillicSmall);

const pCyrillicSmall = new Key('п').keyCyrillicSmall;
pCyrillicSmall.classList.add('KeyG');
row_3.append(pCyrillicSmall);

const rCyrillicSmall = new Key('р').keyCyrillicSmall;
rCyrillicSmall.classList.add('KeyH');
row_3.append(rCyrillicSmall);

const oCyrillicSmall = new Key('о').keyCyrillicSmall;
oCyrillicSmall.classList.add('KeyJ');
row_3.append(oCyrillicSmall);

const lCyrillicSmall = new Key('л').keyCyrillicSmall;
lCyrillicSmall.classList.add('KeyK');
row_3.append(lCyrillicSmall);

const dCyrillicSmall = new Key('д').keyCyrillicSmall;
dCyrillicSmall.classList.add('KeyL');
row_3.append(dCyrillicSmall);

const zhCyrillicSmall = new Key('ж').keyCyrillicSmall;
zhCyrillicSmall.classList.add('Semicolon');
row_3.append(zhCyrillicSmall);

const eCyrillicSmall = new Key('э').keyCyrillicSmall;
eCyrillicSmall.classList.add('Quote');
row_3.append(eCyrillicSmall);

const enter = new Key('Enter').keySignature;
enter.classList.add('Enter');
row_3.append(enter);

// Fourth row
const row4 = new Row(4).rowX;

const shiftLeft = new Key('Shift').keyShiftLeft;
row_4.append(shiftLeft);

const yaCyrillicSmall = new Key('я').keyCyrillicSmall;
yaCyrillicSmall.classList.add('KeyZ');
row_4.append(yaCyrillicSmall);

const chCyrillicSmall = new Key('ч').keyCyrillicSmall;
chCyrillicSmall.classList.add('KeyX');
row_4.append(chCyrillicSmall);

const sCyrillicSmall = new Key('с').keyCyrillicSmall;
sCyrillicSmall.classList.add('KeyC');
row_4.append(sCyrillicSmall);

const mCyrillicSmall = new Key('м').keyCyrillicSmall;
mCyrillicSmall.classList.add('KeyV');
row_4.append(mCyrillicSmall);

const iCyrillicSmall = new Key('и').keyCyrillicSmall;
iCyrillicSmall.classList.add('KeyB');
row_4.append(iCyrillicSmall);

const tCyrillicSmall = new Key('т').keyCyrillicSmall;
tCyrillicSmall.classList.add('KeyN');
row_4.append(tCyrillicSmall);

const mzCyrillicSmall = new Key('ь').keyCyrillicSmall;
mzCyrillicSmall.classList.add('KeyM');
row_4.append(mzCyrillicSmall);

const bCyrillicSmall = new Key('б').keyCyrillicSmall;
bCyrillicSmall.classList.add('Comma');
row_4.append(bCyrillicSmall);

const yuCyrillicSmall = new Key('ю').keyCyrillicSmall;
yuCyrillicSmall.classList.add('Period');
row_4.append(yuCyrillicSmall);

const pointKey = new Key('.').keySign;
pointKey.classList.add('Slash');
row_4.append(pointKey);

const arrowUpKey = new Key('▲').keyArrow;
arrowUpKey.classList.add('ArrowUp');
row_4.append(arrowUpKey);

const shiftRight = new Key('Shift').keyShiftRight;
row_4.append(shiftRight);

// 5th row
const row5 = new Row(5).rowX;

const ctrlLeft = new Key('Ctrl').keyCtrlLeft;
row_5.append(ctrlLeft);

const winKey = new Key('Win').keyWin;
row_5.append(winKey);

const altLeft = new Key('Alt').keyAltLeft;
row_5.append(altLeft);

const spaceKey = new Key('&nbsp;').keySpace;
row_5.append(spaceKey);

const altRight = new Key('Alt').keyAltRight;
row_5.append(altRight);

const arrowLeftKey = new Key('◄').keyArrow;
arrowLeftKey.classList.add('ArrowLeft');
row_5.append(arrowLeftKey);

const arrowDownKey = new Key('▼').keyArrow;
arrowDownKey.classList.add('ArrowDown');
row_5.append(arrowDownKey);

const arrowRightKey = new Key('►').keyArrow;
arrowRightKey.classList.add('ArrowRight');
row_5.append(arrowRightKey);

const ctrlRight = new Key('Ctrl').keyCtrlRight;
row_5.append(ctrlRight);

const descritio = document.createElement('p');
descritio.innerHTML = 'Виртуальная клавиатура создана в ОС Ubuntu 19.10 <br> Реализована только русская раскладка со строчными буквами'
descritio.className = 'p_desc';
keyboard.append(descritio);

// Highlighting pressed keys

document.addEventListener('keydown', function (event) {
  let pressedKey = document.querySelector('.' + event.code);
  pressedKey.classList.add('key_transform');
});

document.addEventListener('keyup', function (event) {
  let pressedKey = document.querySelector('.' + event.code);
  pressedKey.classList.remove('key_transform');
});

// printing letters, didgits & signs on click

document.addEventListener('click', function (event) {

  switch (event.target.classList[2]) {
    case 'digit':
      textarea.append(event.target.innerHTML);
      break;
    case 'sign':
      textarea.append(event.target.innerHTML);
      break;
    case 'letter':
      textarea.append(event.target.innerHTML);
  }
});

document.addEventListener('click', function (event) {

  switch (event.target.classList[3]) {

    case 'Backspace':
      let text = textarea.innerHTML;
      textarea.innerHTML = text.split('').slice(0, -1).join('');
      break;

    case 'Enter':
      textarea.append('\n');
      break;
    case 'Space':
      textarea.append(' ');
      break;
  }
});



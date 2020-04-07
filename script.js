let main = document.createElement('main');
main.className = 'main';
document.body.append(main);

let textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.id = 'textarea';
textarea.rows = '10';
textarea.cols = '50';
main.append(textarea);

const keyboard = document.createElement('section');
keyboard.className = 'keyboard';
keyboard.id = 'keyboard';
main.append(keyboard);

// First row - Digits & Signs
const row1 = new Row(1).rowX;

const yoCyrillicSmall = new Key('ё').keyCyrillicSmall;
row_1.append(yoCyrillicSmall);

const digitOne = new Key('1').keyDigit;
row_1.append(digitOne);

const digitTwo = new Key('2').keyDigit;
row_1.append(digitTwo);

const digitThree = new Key('3').keyDigit;
row_1.append(digitThree);

const digitFour = new Key('4').keyDigit;
row_1.append(digitFour);

const digitFive = new Key('5').keyDigit;
row_1.append(digitFive);

const digitSix = new Key('6').keyDigit;
row_1.append(digitSix);

const digitSeven = new Key('7').keyDigit;
row_1.append(digitSeven);

const digitEight = new Key('8').keyDigit;
row_1.append(digitEight);

const digitNine = new Key('9').keyDigit;
row_1.append(digitNine);

const digitZero = new Key('0').keyDigit;
row_1.append(digitZero);

const minusKey = new Key('-').keySign;
row_1.append(minusKey);

const equalKey = new Key('=').keySign;
row_1.append(equalKey);

const backspace = new Key('Backspace').keySignature;
row_1.append(backspace);

//Second row
const row2 = new Row(2).rowX;

const Tab = new Key('Tab').keyTab;
row_2.append(Tab);

const jCyrillicSmall = new Key('й').keyCyrillicSmall;
row_2.append(jCyrillicSmall);

const cCyrillicSmall = new Key('ц').keyCyrillicSmall;
row_2.append(cCyrillicSmall);

const uCyrillicSmall = new Key('у').keyCyrillicSmall;
row_2.append(uCyrillicSmall);

const kCyrillicSmall = new Key('к').keyCyrillicSmall;
row_2.append(kCyrillicSmall);

const yeCyrillicSmall = new Key('е').keyCyrillicSmall;
row_2.append(yeCyrillicSmall);

const nCyrillicSmall = new Key('н').keyCyrillicSmall;
row_2.append(nCyrillicSmall);

const gCyrillicSmall = new Key('г').keyCyrillicSmall;
row_2.append(gCyrillicSmall);

const shCyrillicSmall = new Key('ш').keyCyrillicSmall;
row_2.append(shCyrillicSmall);

const shchCyrillicSmall = new Key('щ').keyCyrillicSmall;
row_2.append(shchCyrillicSmall);

const zCyrillicSmall = new Key('з').keyCyrillicSmall;
row_2.append(zCyrillicSmall);

const khCyrillicSmall = new Key('х').keyCyrillicSmall;
row_2.append(khCyrillicSmall);

const tzCyrillicSmall = new Key('ъ').keyCyrillicSmall;
row_2.append(tzCyrillicSmall);

const backSlash = new Key('\\').keyBackSlash;
row_2.append(backSlash);

const Del = new Key('Del').keyTab;
row_2.append(Del);

//Third row
const row3 = new Row(3).rowX;

const capsLock = new Key('CapsLock').keySignature;
row_3.append(capsLock);

const fCyrillicSmall = new Key('ф').keyCyrillicSmall;
row_3.append(fCyrillicSmall);

const yCyrillicSmall = new Key('ы').keyCyrillicSmall;
row_3.append(yCyrillicSmall);

const vCyrillicSmall = new Key('в').keyCyrillicSmall;
row_3.append(vCyrillicSmall);

const aCyrillicSmall = new Key('а').keyCyrillicSmall;
row_3.append(aCyrillicSmall);

const pCyrillicSmall = new Key('п').keyCyrillicSmall;
row_3.append(pCyrillicSmall);

const rCyrillicSmall = new Key('р').keyCyrillicSmall;
row_3.append(rCyrillicSmall);

const oCyrillicSmall = new Key('о').keyCyrillicSmall;
row_3.append(oCyrillicSmall);

const lCyrillicSmall = new Key('л').keyCyrillicSmall;
row_3.append(lCyrillicSmall);

const dCyrillicSmall = new Key('д').keyCyrillicSmall;
row_3.append(dCyrillicSmall);

const zhCyrillicSmall = new Key('ж').keyCyrillicSmall;
row_3.append(zhCyrillicSmall);

const eCyrillicSmall = new Key('э').keyCyrillicSmall;
row_3.append(eCyrillicSmall);

const enter = new Key('Enter').keySignature;
row_3.append(enter);

// Fourth row
const row4 = new Row(4).rowX;

const shiftLeft = new Key('Shift').keyShiftLeft;
row_4.append(shiftLeft);

const yaCyrillicSmall = new Key('я').keyCyrillicSmall;
row_4.append(yaCyrillicSmall);

const chCyrillicSmall = new Key('ч').keyCyrillicSmall;
row_4.append(chCyrillicSmall);

const sCyrillicSmall = new Key('с').keyCyrillicSmall;
row_4.append(sCyrillicSmall);

const mCyrillicSmall = new Key('м').keyCyrillicSmall;
row_4.append(mCyrillicSmall);

const iCyrillicSmall = new Key('и').keyCyrillicSmall;
row_4.append(iCyrillicSmall);

const tCyrillicSmall = new Key('т').keyCyrillicSmall;
row_4.append(tCyrillicSmall);

const mzCyrillicSmall = new Key('ь').keyCyrillicSmall;
row_4.append(mzCyrillicSmall);

const bCyrillicSmall = new Key('б').keyCyrillicSmall;
row_4.append(bCyrillicSmall);

const yuCyrillicSmall = new Key('ю').keyCyrillicSmall;
row_4.append(yuCyrillicSmall);

const pointKey = new Key('.').keySign;
row_4.append(pointKey);

const arrowUpKey = new Key('▲').keySign;
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

const arrowLeftKey = new Key('◄').keySign;
row_5.append(arrowLeftKey);

const arrowDownKey = new Key('▼').keySign;
row_5.append(arrowDownKey);

const arrowRightKey = new Key('►').keySign;
row_5.append(arrowRightKey);

const ctrlRight = new Key('Ctrl').keyCtrlRight;
row_5.append(ctrlRight);

let keys = document.querySelectorAll('.key');


class Key {
  constructor(inscription) {
    this.inscription = inscription;
  }



  get keyCyrillicSmall() {
    let span = document.createElement('span');
    span.className = 'key key_square letter cyrillic small';
    span.id = 'id_' + this.inscription.charCodeAt(0);
    span.innerHTML = this.inscription;
    span.onmousedown = function () { span.classList.add('key_transform'); };
    span.onmouseup = function () { span.classList.remove('key_transform'); };
    span.onmouseover = function () { span.classList.add('mover'); };
    span.onmouseout = function () { span.classList.remove('mover'); };
    return span;
  }

  get keyDigit() {
    let span = document.createElement('span');
    span.className = 'key key_square digit';
    span.id = 'id_' + this.inscription.charCodeAt(0);
    span.innerHTML = this.inscription;
    span.onmousedown = function () { span.classList.add('key_transform'); };
    span.onmouseup = function () { span.classList.remove('key_transform'); };
    span.onmouseover = function () { span.classList.add('mover'); };
    span.onmouseout = function () { span.classList.remove('mover'); };
    return span;
  }

  get keySign() {
    let span = document.createElement('span');
    span.className = 'key key_square sign';
    span.id = 'id_sign_' + this.inscription.charCodeAt(0);
    span.innerHTML = this.inscription;
    span.onmousedown = function () { span.classList.add('key_transform'); };
    span.onmouseup = function () { span.classList.remove('key_transform'); };
    span.onmouseover = function () { span.classList.add('mover'); };
    span.onmouseout = function () { span.classList.remove('mover'); };
    return span;
  }

  get keySignature() {
    let span = document.createElement('span');
    span.className = 'key key_twin signature';
    span.id = 'id_' + this.inscription;
    span.innerHTML = this.inscription;
    span.onmousedown = function () { span.classList.add('key_transform'); };
    span.onmouseup = function () { span.classList.remove('key_transform'); };
    span.onmouseover = function () { span.classList.add('mover'); };
    span.onmouseout = function () { span.classList.remove('mover'); };
    return span;
  }

  get keyTab() {
    let span = document.createElement('span');
    span.className = 'key key_tab signature';
    span.id = 'id_' + this.inscription;
    span.innerHTML = this.inscription;
    span.onmousedown = function () { span.classList.add('key_transform'); };
    span.onmouseup = function () { span.classList.remove('key_transform'); };
    span.onmouseover = function () { span.classList.add('mover'); };
    span.onmouseout = function () { span.classList.remove('mover'); };
    return span;
  }

  get keyBackSlash() {
    let span = document.createElement('span');
    span.className = 'key key_square sign Backslash';
    span.id = 'id_BackSlash'
    span.innerHTML = this.inscription;
    span.onmousedown = function () { span.classList.add('key_transform'); };
    span.onmouseup = function () { span.classList.remove('key_transform'); };
    span.onmouseover = function () { span.classList.add('mover'); };
    span.onmouseout = function () { span.classList.remove('mover'); };
    return span;
  }

  get keyShiftLeft() {
    let span = document.createElement('span');
    span.className = 'key shift ShiftLeft';
    span.id = 'id_ShiftLeft'
    span.innerHTML = this.inscription;
    span.onmousedown = function () { span.classList.add('key_transform'); };
    span.onmouseup = function () { span.classList.remove('key_transform'); };
    span.onmouseover = function () { span.classList.add('mover'); };
    span.onmouseout = function () { span.classList.remove('mover'); };
    return span;
  }

  get keyShiftRight() {
    let span = document.createElement('span');
    span.className = 'key shift ShiftRight';
    span.id = 'id_ShiftRight'
    span.innerHTML = this.inscription;
    span.onmousedown = function () { span.classList.add('key_transform'); };
    span.onmouseup = function () { span.classList.remove('key_transform'); };
    span.onmouseover = function () { span.classList.add('mover'); };
    span.onmouseout = function () { span.classList.remove('mover'); };
    return span;
  }
  get keyCtrlLeft() {
    let span = document.createElement('span');
    span.className = 'key ctrl ControlLeft';
    span.id = 'id_CtrlLeft'
    span.innerHTML = this.inscription;
    span.onmousedown = function () { span.classList.add('key_transform'); };
    span.onmouseup = function () { span.classList.remove('key_transform'); };
    span.onmouseover = function () { span.classList.add('mover'); };
    span.onmouseout = function () { span.classList.remove('mover'); };
    return span;
  }

  get keyWin() {
    let span = document.createElement('span');
    span.className = 'key win MetaLeft';
    span.id = 'id_' + this.inscription;
    span.innerHTML = this.inscription;
    span.tabIndex = '2';
    span.onmousedown = function () { span.classList.add('key_transform'); };
    span.onmouseup = function () { span.classList.remove('key_transform'); };
    span.onmouseover = function () { span.classList.add('mover'); };
    span.onmouseout = function () { span.classList.remove('mover'); };
    return span;
  }

  get keySpace() {
    let span = document.createElement('span');
    span.className = 'key zx ab Space';
    span.id = 'id_Space';
    span.innerHTML = this.inscription;
    span.onmousedown = function () { span.classList.add('key_transform'); };
    span.onmouseup = function () { span.classList.remove('key_transform'); };
    span.onmouseover = function () { span.classList.add('mover'); };
    span.onmouseout = function () { span.classList.remove('mover'); };
    return span;
  }

  get keyAltLeft() {
    let span = document.createElement('span');
    span.className = 'key key_square alt AltLeft';
    span.id = 'id_AltLeft'
    span.innerHTML = this.inscription;
    span.onmousedown = function () { span.classList.add('key_transform'); };
    span.onmouseup = function () { span.classList.remove('key_transform'); };
    span.onmouseover = function () { span.classList.add('mover'); };
    span.onmouseout = function () { span.classList.remove('mover'); };
    return span;
  }

  get keyAltRight() {
    let span = document.createElement('span');
    span.className = 'key key_square alt AltRight';
    span.id = 'id_AltRight'
    span.innerHTML = this.inscription;
    span.onmousedown = function () { span.classList.add('key_transform'); };
    span.onmouseup = function () { span.classList.remove('key_transform'); };
    span.onmouseover = function () { span.classList.add('mover'); };
    span.onmouseout = function () { span.classList.remove('mover'); };
    return span;
  }

  get keyCtrlRight() {
    let span = document.createElement('span');
    span.className = 'key ctrl ControlRight';
    span.id = 'id_CtrlRight'
    span.innerHTML = this.inscription;
    span.onmousedown = function () { span.classList.add('key_transform'); };
    span.onmouseup = function () { span.classList.remove('key_transform'); };
    span.onmouseover = function () { span.classList.add('mover'); };
    span.onmouseout = function () { span.classList.remove('mover'); };
    return span;
  }

  get keyArrow() {
    let span = document.createElement('span');
    span.className = 'key key_square arrow';
    span.id = 'id_arrow_' + this.inscription.charCodeAt(0);
    span.innerHTML = this.inscription;
    span.onmousedown = function () { span.classList.add('key_transform'); };
    span.onmouseup = function () { span.classList.remove('key_transform'); };
    span.onmouseover = function () { span.classList.add('mover'); };
    span.onmouseout = function () { span.classList.remove('mover'); };
    return span;
  }
}

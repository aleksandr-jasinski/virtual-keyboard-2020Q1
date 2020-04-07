class Key {
  constructor(inscription) {
    this.inscription = inscription;
  }
  get keyCyrillicSmall() {
    let span = document.createElement('span');
    span.className = 'key key_square cyrillic_small';
    span.id = 'id_' + this.inscription.charCodeAt(0);
    span.innerHTML = this.inscription;
    return span;
  }

  get keyDigit() {
    let span = document.createElement('span');
    span.className = 'key key_square digit';
    span.id = 'id_' + this.inscription.charCodeAt(0);
    span.innerHTML = this.inscription;
    return span;
  }

  get keySign() {
    let span = document.createElement('span');
    span.className = 'key key_square sign';
    span.id = 'id_sign_' + this.inscription.charCodeAt(0);
    span.innerHTML = this.inscription;
    return span;
  }

  get keySignature() {
    let span = document.createElement('span');
    span.className = 'key key_twin signature';
    span.id = 'id_' + this.inscription;
    span.innerHTML = this.inscription;
    return span;
  }

  get keyTab() {
    let span = document.createElement('span');
    span.className = 'key key_tab signature';
    span.id = 'id_' + this.inscription;
    span.innerHTML = this.inscription;
    return span;
  }

  get keyBackSlash() {
    let span = document.createElement('span');
    span.className = 'key key_square sign';
    span.id = 'id_BackSlash'
    span.innerHTML = this.inscription;
    return span;
  }

  get keyShiftLeft() {
    let span = document.createElement('span');
    span.className = 'key key_twin shift';
    span.id = 'id_ShiftLeft'
    span.innerHTML = this.inscription;
    return span;
  }

  get keyShiftRight() {
    let span = document.createElement('span');
    span.className = 'key key_twin shift';
    span.id = 'id_ShiftRight'
    span.innerHTML = this.inscription;
    return span;
  }
  get keyCtrlLeft() {
    let span = document.createElement('span');
    span.className = 'key ctrl';
    span.id = 'id_CtrlLeft'
    span.innerHTML = this.inscription;
    return span;
  }

  get keyWin() {
    let span = document.createElement('span');
    span.className = 'key win';
    span.id = 'id_' + this.inscription;
    span.innerHTML = this.inscription;
    return span;
  }

  get keySpace() {
    let span = document.createElement('span');
    span.className = 'key space';
    span.id = 'id_Space' + this.inscription;
    span.innerHTML = this.inscription;
    return span;
  }

  get keyAltLeft() {
    let span = document.createElement('span');
    span.className = 'key key_square alt';
    span.id = 'id_AltLeft'
    span.innerHTML = this.inscription;
    return span;
  }

  get keyAltRight() {
    let span = document.createElement('span');
    span.className = 'key key_square alt';
    span.id = 'id_AltRight'
    span.innerHTML = this.inscription;
    return span;
  }

  get keyCtrlRight() {
    let span = document.createElement('span');
    span.className = 'key ctrl';
    span.id = 'id_CtrlRight'
    span.innerHTML = this.inscription;
    return span;
  }
}

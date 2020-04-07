class Row {
  constructor(row) {
    this.row = row;
  }

  get rowX() {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    rowDiv.id = 'row_' + this.row;

    return keyboard.append(rowDiv);
  }

}


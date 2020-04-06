let main = document.createElement('main');
main.className = 'main';
document.body.append(main);

let textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.id = 'textarea';
textarea.rows = '10';
textarea.cols = '50';
main.append(textarea);

let keyboard = document.createElement('section');
keyboard.className = 'keyboard';
keyboard.id = 'keyboard';
main.append(keyboard);

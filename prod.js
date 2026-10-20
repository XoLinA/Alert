let color = prompt('Enter color =', 'white');
let width = +prompt('Enter width =', 0.1);
let height = +prompt('Enter height =', 0.3);
let theme = prompt('Enter theme =', 'dark');

alert(
    color + ' = ' + typeof color + '\n' +
    width + ' = ' + typeof width + '\n' +
    height + ' = ' + typeof height + '\n' +
    theme + ' = ' + typeof theme + '\n'
);
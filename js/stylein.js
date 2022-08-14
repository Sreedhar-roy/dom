const sections = document.querySelectorAll('section');
// console.log(section);
for (const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.paddingLeft = '10px'
    section.style.borderRadius = '10px';
    section.style.backgroundColor ='lightgray';
}

const contain = document.getElementById('container');
contain.style.backgroundColor = 'yellow';

//------ using onclick

// function addText() {
//     // let body = document.body;
//     let body = document.querySelector('body');
//     body.innerHTML = '<h1>Hello</h1>';
//     // body.innerText = '<h1>Hello</h1>';
// }

// using addEventListener

const btnEl = document.querySelector('button');
// alert(btn)
console.log(btnEl);
btnEl.addEventListener('click', function () {
    const bodyEl = document.querySelector('body');
    const heading = document.createElement('h1');
    // heading.innerText = 'Hello from addEventListener()';
    const headingText = document.createTextNode(
        'Hello from addEventListener()'
    );
    heading.appendChild(headingText);
    bodyEl.appendChild(heading);
});

// removeEventListener - to remove the attached event

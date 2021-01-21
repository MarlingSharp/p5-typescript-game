function component() {
    const element: HTMLElement = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 'Hello Webpack and p5 and TypeScript'
    return element;
}

document.body.appendChild(component());
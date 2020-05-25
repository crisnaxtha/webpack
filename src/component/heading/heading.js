class Heading {
    render(pageName) {
        const heading = document.createElement('h1');
        heading.innerHTML = 'Lal Mani. This is"' + pageName + '"Page';
        heading.classList.add('heading');

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(heading);
    }
}

export default Heading;
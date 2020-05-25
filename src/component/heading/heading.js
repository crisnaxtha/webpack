class Heading {
    render() {
        const heading = document.createElement('h1');
        heading.innerHTML = "Lal Mani";
        heading.classList.add('heading');

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(heading);
    }
}

export default Heading;
import HelloWorldButton from './component/hello-world-button/HelloWorldButton'
import Heading from './component/heading/heading.js';
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperCase("hello World"));

const helloWorldButton = new HelloWorldButton;
helloWorldButton.render();

if(process.env.NODE_ENV === 'production') {
    console.log('Production mode')
} else if( process.env.NODE_ENV === 'development') {
    console.log('Development Mode');
}

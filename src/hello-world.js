import HelloWorldButton from './component/hello-world-button/HelloWorldButton'
import addImage from './add-image';

const helloWorldButton = new HelloWorldButton;
helloWorldButton.render();

if(process.env.NODE_ENV === 'production') {
    console.log('Production mode')
} else if( process.env.NODE_ENV === 'development') {
    console.log('Development Mode');
}

import Heading from './component/heading/heading.js';
import KiwiImage from './component/kiwi-image/kiwi-image';
import React from 'react';

const heading = new Heading();
heading.render("Kiwi Page");

const kiwiImage = new KiwiImage;
kiwiImage.render();
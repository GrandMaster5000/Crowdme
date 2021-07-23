"use strict";

import {modal} from './modules/menu';
import viewTab from './modules/tabs';


document.addEventListener('DOMContentLoaded', () => {

    
    modal('[data-trigger]', '.menu', '[data-close]');
    viewTab('.capabilities__tab', '.capabilities__text-wrapper');
});
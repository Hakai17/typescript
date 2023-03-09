import { Controller } from './controllers/controllers.js';
const controller = new Controller();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.add();
});

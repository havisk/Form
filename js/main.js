import angular from 'angular';
import  'angular-ui-router';
import FormController from './controllers/form.controller';
import ContactController from './controllers/contact.controller';
import config from './config';

import PARSE from './constants/parse.constant';

import UserService from './services/user.service';



angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('FormController', FormController)
  .controller('ContactController', ContactController)

  .constant('PARSE', PARSE)

  .service('UserService', UserService)
  ;

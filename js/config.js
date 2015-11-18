let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.form', {
      url: '/',
      controller: 'FormController as vm',
      templateUrl: 'templates/form.tpl.html'
    })
    .state('root.contacts', {
      url:'/contacts',
      controller: 'ContactController',
      templateUrl: 'templates/contacts.tpl.html'

    });

  
  

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;
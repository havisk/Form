let ContactController = function($scope, UserService) {

  UserService.getAllContacts().then ( (res) =>{
     $scope.contacts = res.data.results;
   });



  };
  
  

ContactController.$inject = ['$scope', 'UserService'];

export default ContactController;
let ContactController = function($scope, UserService) {

//gets all the contacts 
  UserService.getAllContacts().then ( (res) =>{
     $scope.contacts = res.data.results;
     console.log(res);
   });



  };
  
  

ContactController.$inject = ['$scope', 'UserService'];

export default ContactController;
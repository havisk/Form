let FormController = function($scope, UserService) {

  let vm = this;
  vm.addContact = addContact;


  let validateName = (name) => {
  
    if (name.length < 4)
    {
      $scope.namMsg = 'What the Deuce need Full Name';   
    } else {
      $scope.namMsg = 'Great!!';
    }
  };

  $scope.$watch('contact.name', function (newVal, prevVal) {
    if(!newVal) return;
    validateName(newVal);
  });



  let validateE = (email) => {

    let AtPos = email.indexOf("@")

    if (AtPos === -1){
      $scope.emailMsg = "Your testing me aren't you!! Where is the @ "
    } else {
      $scope.emailMsg = "Great!!!"
    }
  };

  $scope.$watch('contact.email', function (newVal, prevVal) {
    if(!newVal) return;
    validateE(newVal);
  });



  let validateWeb = (website) => {

    let pattern = /^https?:\/\//i;

    if (!pattern.test(website)){
      $scope.newMsg = " Start with http:// or https://....MAN!"
    } else {
      $scope.newMsg = "Great!!!"
    }
  };

$scope.$watch('contact.website', function (newVal, prevVal) {
    if(!newVal) return;
    validateWeb(newVal);
  });



  let validateMess = (message) => {
    if (message.length < 7){
      $scope.pssMsg = " No Way Man!! Write more."
    } else{
      $scope.pssMsg = "Great!!!"
    }
  };

  $scope.$watch('contact.message', function (newVal, prevVal) {
    if(!newVal) return;
    validateMess(newVal);
  });

  function addContact( contact){
    UserService.addContact(contact).then( (res) =>{
    console.log(res);    

    });
  };


  







  
  

};

FormController.$inject = ['$scope', 'UserService'];

export default FormController;
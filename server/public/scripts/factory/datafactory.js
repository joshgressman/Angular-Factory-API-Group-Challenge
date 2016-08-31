myApp.factory('DataFactory', ['$http', function ($http) {
//var faves = [];

  //private
var faves = undefined;
var horse = [];
  var getFavorites = function () {
    console.log('getting data from server');
    var promise = $http.get('/favorites').then(function(response){
    //  animal = response.data;
      //console.log('Animal data', animal);
      faves = response.data;
      console.log(faves);
    });
    return promise;
  };

  var addFavorite = function () {
    var promise = $http.post('/data', horse).then(function (response){
      console.log('POST works:)');
      return getFavorites();
    });
  }

  var animalObject = function () {

  }



  //public API
  var publicApi =  {
//this is the mechanism that is sending information to the controller; can be accessed to anything we tie to the factory
 retrieveData: function() {
   return faves;
 },
//this is the function that gets the information from the database
  getFavorites: function(){
    return getFavorites();
  },

  faves: faves,

  addAnimal: function(horse){
    return addFavorite(horse);
  }
  //close of API return
}

return publicApi;

}]);



var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(["$routeProvider", function($routeProvider){
 $routeProvider
 .when("/home", {
   templateUrl: "/views/partials/home.html",
   controller: "homeController"
 })
   .when("/cat", {
     templateUrl: "/views/partials/cat.html",
     controller: "catController"
   })
   .when("/dog", {
     templateUrl: "/views/partials/dog.html",
     controller: "dogController"
   })
   .when("/smallfurry", {
     templateUrl: "/views/partials/smallfurry.html",
     controller: "smallfurryController"
   })
   .when("/favorites", {
     templateUrl: "/views/partials/favorites.html",
     controller: "favoritesController"
   })
   .when("/barnyard", {
     templateUrl: "/views/partials/barnyard.html",
     controller: "barnyardController"
   })
   .when("/bird", {
     templateUrl: "/views/partials/bird.html",
     controller: "birdController"
   })
   .when("/horse", {
     templateUrl: "/views/partials/horse.html",
     controller: "horseController"
   })
   .when("/pig", {
     templateUrl: "/views/partials/pig.html",
     controller: "pigController"
   })
   .when("/reptile", {
     templateUrl: "/views/partials/reptile.html",
     controller: "reptileController"
   })
   .otherwise({
     redirectTo: "/views/partials/home.html",

   });

}]);
///////BARN YARD //////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
myApp.controller('barnyardController', ['$scope', '$http', function($scope, $http) {
  var key = '4af0798b031e2bc75209c88894b5f15c';
  var baseURL = 'http://api.petfinder.com/';
  $scope.breed = '';
  $scope.getRandomBarnyard = function() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=barnyard';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log("response data",response.data);
        $scope.animal = response.data.petfinder.pet;
        // $scope.breed = $scope.animal.animal.$t;
        // $scope.getBreeds();
       $scope.animalObject = {
         pet_id: $scope.animal.id.$t,
         pet_name: $scope.animal.name.$t,
         pet_url: $scope.animal.media.photos.photo[1].$t,
         description: $scope.animal.description.$t.substring(0, 100)
       }
       console.log("Animal object", $scope.animalObject);

       $scope.addFavorite = function(){
       $http.post('/animals', $scope.animalObject)
       .then(function(response){
         console.log('response object', response);
         if(response.status == 201){
           $scope.animals = response.data;
         } else {
           console.log("error posting animal");
         }

       });
       }
      }
    )
  }
  ////end of BARNYARD controller ///////////////
}]);

///////BRID YARD //////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
myApp.controller('birdController', ['$scope', '$http', function($scope, $http) {
  var key = '4af0798b031e2bc75209c88894b5f15c';
  var baseURL = 'http://api.petfinder.com/';
  $scope.breed = '';

  $scope.getRandomBird = function() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=bird';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log("response data",response.data);
        $scope.animal = response.data.petfinder.pet;
        // $scope.breed = $scope.animal.animal.$t;
        // $scope.getBreeds();
       $scope.animalObject = {
         pet_id: $scope.animal.id.$t,
         pet_name: $scope.animal.name.$t,
         pet_url: $scope.animal.media.photos.photo[1].$t,
         description: $scope.animal.description.$t.substring(0, 100)
       }
       console.log("Animal object", $scope.animalObject);

       $scope.addFavorite = function(){
       $http.post('/animals', $scope.animalObject)
       .then(function(response){
         console.log('response object', response);
         if(response.status == 201){
           $scope.animals = response.data;
         } else {
           console.log("error posting animal");
         }

       });
       }
      }
    )
  }
  ////end of controller ///////////////
}]);

////////////CAT CONTROLLER//////////////////////////////////
myApp.controller('catController', ['$scope', '$http', function($scope, $http) {
  var key = '4af0798b031e2bc75209c88894b5f15c';
  var baseURL = 'http://api.petfinder.com/';
  $scope.breed = '';

  $scope.getRandomCat = function() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=cat';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log("response data",response.data);
        $scope.animal = response.data.petfinder.pet;
        // $scope.breed = $scope.animal.animal.$t;
        // $scope.getBreeds();
       $scope.animalObject = {
         pet_id: $scope.animal.id.$t,
         pet_name: $scope.animal.name.$t,
         pet_url: $scope.animal.media.photos.photo[1].$t,
         description: $scope.animal.description.$t.substring(0, 100)
       }
       console.log("Animal object", $scope.animalObject);

       $scope.addFavorite = function(){
       $http.post('/animals', $scope.animalObject)
       .then(function(response){
         console.log('response object', response);
         if(response.status == 201){
           $scope.animals = response.data;
         } else {
           console.log("error posting animal");
         }

       });
       }
      }
    )
  }
  ////end of controller ///////////////
}]);

////////////DOG CONTROLLER//////////////////////////////////
myApp.controller('dogController', ['$scope', '$http', function($scope, $http) {
  var key = '4af0798b031e2bc75209c88894b5f15c';
  var baseURL = 'http://api.petfinder.com/';
  $scope.breed = '';

  $scope.getRandomDog = function() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=dog';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log("response data",response.data);
        $scope.animal = response.data.petfinder.pet;
        // $scope.breed = $scope.animal.animal.$t;
        // $scope.getBreeds();
       $scope.animalObject = {
         pet_id: $scope.animal.id.$t,
         pet_name: $scope.animal.name.$t,
         pet_url: $scope.animal.media.photos.photo[1].$t,
         description: $scope.animal.description.$t.substring(0, 100)
       }
       console.log("Animal object", $scope.animalObject);

       $scope.addFavorite = function(){
       $http.post('/animals', $scope.animalObject)
       .then(function(response){
         console.log('response object', response);
         if(response.status == 201){
           $scope.animals = response.data;
         } else {
           console.log("error posting animal");
         }

       });
       }
      }
    )
  }
  ////end of controller ///////////////
}]);

////////////HORSER CONTROLLER//////////////////////////////////
myApp.controller('horseController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
  var key = '4af0798b031e2bc75209c88894b5f15c';
  var baseURL = 'http://api.petfinder.com/';
  $scope.breed = '';

  $scope.dataFactory = DataFactory;
  $scope.faves = $scope.dataFactory.faves;
  $scope.horse = $scope.dataFactory.horse;

  $scope.getRandomHorse = function() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=horse';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log("response data",response.data);
        $scope.animal = response.data.petfinder.pet;
        // $scope.breed = $scope.animal.animal.$t;
        // $scope.getBreeds();
       $scope.animalObject = {
         pet_id: $scope.animal.id.$t,
         pet_name: $scope.animal.name.$t,
         pet_url: $scope.animal.media.photos.photo[1].$t,
         description: $scope.animal.description.$t.substring(0, 100)
       }

       $scope.addFavorite = function () {
         $scope.dataFactory.addAnimal($scope.animalObject).then(function(response){
           $scope.faves = $scope.dataFactory.retrieveData();
           $scope.horse.push($scope.animalObject);
           console.log("horse", $scope.horse);
         });
       }
     })
   }
      }]);
  //      console.log("Animal object", $scope.animalObject);
  //
  //      $scope.addFavorite = function(){
  //      $http.post('/animals', $scope.animalObject)
  //      .then(function(response){
  //        console.log('response object', response);
  //        if(response.status == 201){
  //          $scope.animals = response.data;
  //        } else {
  //          console.log("error posting animal");
  //        }
  //
  //      });
  //      }
  //     }
  //   )
  // }
  ////end of controller ///////////////
// }]);

////////////PIG CONTROLLER//////////////////////////////////
myApp.controller('pigController', ['$scope', '$http', function($scope, $http) {
  var key = '4af0798b031e2bc75209c88894b5f15c';
  var baseURL = 'http://api.petfinder.com/';
  $scope.breed = '';

  $scope.getRandomPig = function() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=pig';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log("response data",response.data);
        $scope.animal = response.data.petfinder.pet;
        // $scope.breed = $scope.animal.animal.$t;
        // $scope.getBreeds();
       $scope.animalObject = {
         pet_id: $scope.animal.id.$t,
         pet_name: $scope.animal.name.$t,
         pet_url: $scope.animal.media.photos.photo[1].$t,
         description: $scope.animal.description.$t.substring(0, 100)
       }
       console.log("Animal object", $scope.animalObject);

       $scope.addFavorite = function(){
       $http.post('/animals', $scope.animalObject)
       .then(function(response){
         console.log('response object', response);
         if(response.status == 201){
           $scope.animals = response.data;
         } else {
           console.log("error posting animal");
         }

       });
       }
      }
    )
  }
  ////end of controller ///////////////
}]);

/////////////////////REPTILE CONTORLL////////////////////////
myApp.controller('reptileController', ['$scope', '$http', function($scope, $http) {
  var key = '4af0798b031e2bc75209c88894b5f15c';
  var baseURL = 'http://api.petfinder.com/';
  $scope.breed = '';

  $scope.getRandomReptile = function() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=reptile';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log("response data",response.data);
        $scope.animal = response.data.petfinder.pet;
        // $scope.breed = $scope.animal.animal.$t;
        // $scope.getBreeds();
       $scope.animalObject = {
         pet_id: $scope.animal.id.$t,
         pet_name: $scope.animal.name.$t,
         pet_url: $scope.animal.media.photos.photo[1].$t,
         description: $scope.animal.description.$t.substring(0, 100)
       }
       console.log("Animal object", $scope.animalObject);

       $scope.addFavorite = function(){
       $http.post('/animals', $scope.animalObject)
       .then(function(response){
         console.log('response object', response);
         if(response.status == 201){
           $scope.animals = response.data;
         } else {
           console.log("error posting animal");
         }

       });
       }
      }
    )
  }
  ////end of controller ///////////////
}]);

/////////////////////Furry CONTORLL////////////////////////
myApp.controller('smallfurryController', ['$scope', '$http', function($scope, $http) {
  var key = '4af0798b031e2bc75209c88894b5f15c';
  var baseURL = 'http://api.petfinder.com/';
  $scope.breed = '';

  $scope.getRandomFurry = function() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=smallfurry';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log("response data",response.data);
        $scope.animal = response.data.petfinder.pet;
        // $scope.breed = $scope.animal.animal.$t;
        // $scope.getBreeds();
       $scope.animalObject = {
         pet_id: $scope.animal.id.$t,
         pet_name: $scope.animal.name.$t,
         pet_url: $scope.animal.media.photos.photo[1].$t,
         description: $scope.animal.description.$t.substring(0, 100)
       }
       console.log("Animal object", $scope.animalObject);

       $scope.addFavorite = function(){
       $http.post('/animals', $scope.animalObject)
       .then(function(response){
         console.log('response object', response);
         if(response.status == 201){
           $scope.animals = response.data;
         } else {
           console.log("error posting animal");
         }

       });
       }
      }
    )
  }
  ////end of controller ///////////////
}]);

////////////DOG CONTROLLER//////////////////////////////////
myApp.controller('homeController', ['$scope', '$http', function($scope, $http) {

  ////end of controller ///////////////
}]);

////////////FAVORITES CONTROL//////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
myApp.controller('favoritesController',['$scope', 'DataFactory', function ($scope, DataFactory) {

$scope.dataFactory = DataFactory;
$scope.faves = $scope.dataFactory.faves;
console.log($scope.faves);
console.log("favorites controller LOADED");


//retrieving the retrieveData or not; retrieveData grabs data out of database
//if it does not have data (like on initial load,  )
  if($scope.dataFactory.retrieveData() === undefined){
    console.log("Factory has no data, getting it now");
    $scope.dataFactory.getFavorites().then(function() {
      $scope.faves = $scope.dataFactory.retrieveData();
      console.log($scope.faves);

    });

  } else {
    console.log("is this firing?");
    $scope.faves = $scope.dataFactory.faves;
  }

}]);



// $scope.dataFactory = DataFactory;
// $scope.faves = $scope.dataFactory.faves;
//
// $scope.addFavorite = function () {
//   $scope.dataFactory.addAnimal($scope.animalObject).then(function(response){
//     $scope.faves = $scope.dataFactory.retrieveData();
//   });
// }

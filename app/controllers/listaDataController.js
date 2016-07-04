angular.module('myApp').controller('listData', function($scope, $http){

  $scope.employees = [
       {
         "id": 1,
         "firstName": "Jan",
         "lastName": "Kowalski",
         "dateOfBirth": "1.7.1990 11:35",
         "company": "XSolve",
         "note": 90
       },
       {
         "id": 4,
         "firstName": "Justyna",
         "lastName": "Kowalska",
         "dateOfBirth": "4.02.1976 14:37",
         "company": "XSolve",
         "note": 91
       },
       {
         "id": 2,
         "firstName": "Krzysztof",
         "lastName": "Krawczyk",
         "dateOfBirth": "28.10.1950 2:15",
         "company": "Chilid",
         "note": 27
       },
       {
         "id": 3,
         "firstName": "Bogusław",
         "lastName": "Linda",
         "dateOfBirth": "03.01.1963 23:10",
         "company": "XSolve",
         "note": 50
       },
       {
         "id": 5,
         "firstName": "Krzysztof",
         "lastName": "Kononowicz",
         "dateOfBirth": "10.10.1910 18:00",
         "company": "Chilid",
         "note": 77
       },
       {
         "id": 6,
         "firstName": "Maryla",
         "lastName": "Rodowicz",
         "dateOfBirth": "29.02.1936 11:35",
         "company": "XSolve",
         "note": 8
       }
     ];


     $scope.sort = function(sortKey){
        $scope.sortKey = sortKey;
        $scope.reverse = !$scope.reverse;
      };


     $scope.$on('sendDate', function(event, currentDate){

       if (currentDate != "not set"){
         var month = (currentDate.getMonth() < 9 ? '0' : '') + (currentDate.getMonth() + 1);
         var year = currentDate.getFullYear();
         var day = (currentDate.getDate() < 10 ? '0' : '') + currentDate.getDate();
         var hours = (currentDate.getHours() < 10 ? '0' : '') + currentDate.getHours();
         var minutes = (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes();
         var datetime = day + "." + month + "." + year + " " + hours + ":" + minutes;

         $scope.datetime = datetime;
       } else {
         $scope.datetime = currentDate;
       }

     });
});

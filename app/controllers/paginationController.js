angular.module('myApp').controller('paginationController', function($scope, $filter){

  $scope.currentPage = 1;
  $scope.itemsPerPage = 5;
  $scope.numberOfPages = Math.ceil($scope.employees.length / $scope.itemsPerPage);
  $scope.visiblePages = [];

  $scope.$watchCollection('[datetime, query]', function(array){

    var response =
  {
    datetime: array[0],
    query: array[1]
  };

    if (response.query && (response.datetime == "not set")){
        $scope.filteredArray = $filter('listFilter')($scope.employees, response.query);
    } else if ((response.query == undefined || response.query == "") && (response.datetime != "not set")){
        $scope.filteredArray = $filter('dateFilter')($scope.employees, response.datetime);
    } else if (response.query && (response.datetime != "not set")) {
        $scope.filteredArrayQ = $filter('listFilter')($scope.employees, response.query);
        $scope.filteredArrayD = $filter('dateFilter')($scope.employees, response.datetime);

        $scope.filteredArray = $filter('dateFilter')($scope.filteredArrayQ, response.datetime);
    } else if (response.query == "" && (response.datetime == "not set")) {
        $scope.filteredArray = $scope.employees;
    }

    });

  for (var i = 1; i <= $scope.numberOfPages; i++){
    $scope.visiblePages.push(i);
  }


  $scope.setPage = function(page){
    $scope.currentPage = page;
  }

  $scope.nextPage = function(){
    if ($scope.currentPage < $scope.visPages.length){
      $scope.currentPage++;
    }
  }

  $scope.previousPage = function(){
    if ($scope.currentPage > 1){
      $scope.currentPage--;
    }
  }

});

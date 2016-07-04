angular.module('myApp').filter('pageFilter', function(){
return function(collection, itemsPerPage, filteredArray, employees, query, datetime){

  var lengthOfFiltered = filteredArray.length;
  if(lengthOfFiltered == 0 && !query && datetime == "not set"){
    lengthOfFiltered = employees.length;
  }
    var result = [];
    for (var i = 1; i <= Math.ceil(lengthOfFiltered / itemsPerPage); i++) {
      result.push(i);
    }
    return result;
}
});

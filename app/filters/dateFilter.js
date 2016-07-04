angular.module('myApp').filter('dateFilter', function(){
return function(collection, datetime){

if (datetime == "not set"){

  return collection;
} else {
      return collection.filter(function(item){
        if (item.dateOfBirth == datetime){
          return item;
        }
    });
  }
}
});

angular.module('myApp').filter('listFilter', function(){

  return function(collection,query){

    if(!query){
      return collection;
    } else {
      return collection.filter(function(item){
        if (item.id == query){
          return item;
        } else if (item.firstName == query){
          return item;
        } else if (item.lastName == query){
          return item;
        } else if (item.company == query){
          return item;
        } else if (item.note == query){
          return item;
        }
        });
      }
    }

});

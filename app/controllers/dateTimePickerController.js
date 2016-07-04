angular.module('myApp').controller('DateTimePickerCtrl', function ($scope) {
  $scope.dateTimeNow = function () {

    $scope.date = "not set";
  };

  $scope.dateTimeNow();

  $scope.toggleMinDate = function () {
    $scope.minDate = $scope.minDate ? null : new Date();
  };

  $scope.maxDate = new Date('2014-06-22');
  $scope.toggleMinDate();

  $scope.dateOptions = {
    showWeeks: false
  };

  $scope.disabled = function (calendarDate, mode) {
    return mode === 'day' && ( calendarDate.getDay() === 0 || calendarDate.getDay() === 6 );
  };

  $scope.open = function ($event, opened) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.dateOpened = true;
  };

  $scope.dateOpened = false;
  $scope.hourStep = 1;
  $scope.minuteStep = 15;

  $scope.timeOptions = {
    hourStep: [1, 2, 3],
    minuteStep: [1, 5, 10, 15, 25, 30]
  };


  $scope.$watch("date", function (date) {
    $scope.$emit('sendDate', date)
  }, true);

  $scope.resetHours = function () {
    if ($scope.date) {
      $scope.date.setHours(1);
    }
  };

  $scope.reset = function () {
    $scope.date = null;
  };
});

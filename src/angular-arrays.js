(function(angular, undefined) {
  'use strict';

  angular.module('angryjs.arrays', [])
    .factory('Arrays', function () {
      var Arrays = function () {};

      Arrays.prototype.shuffle = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      };

      Arrays.prototype.remove = function (array, value) {
        var index = array.indexOf(value);
        if(index != -1) {
          var arrayCopy = angular.copy(array);
          arrayCopy.splice(index, 1);
          return arrayCopy;
        }else{
          return array;
        }
      };

      return new Arrays();
    })

    .filter('shuffle', ['Arrays', function (Arrays) {
      return function (array) {
        return Arrays.shuffle(array);
      }
    }]);

})(window.angular);
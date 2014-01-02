(function(angular, undefined) {
  'use strict';

  angular.module('angryjs.arrays', [])
    .factory('Arrays', function () {
      var Arrays = function () {};

      Arrays.prototype.shuffle = function (o) {
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
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
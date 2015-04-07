'use strict';

angular.module('hw14')

  .directive('jbMask', function () {
    return {
      restrict: 'A',
      scope: {
        jbMask: '@'
      },
      require: 'ngModel',
      link: function ($scope, $elem, $attr, $controller) {
        var isValid = function (data, mask) {
          var newModel = '';
          if (data.length !== mask.length) {
            return false;
          }
          for (var i = 0; i < data.length; ++i) {
            if ((/[0-9]/).test(data[i])) {
              if (mask[i] !== '9') {
                return false;
              } else {
                newModel += data[i];
              }
            } else if ((/[a-z]/i).test(data[i])) {
              if (mask[i] !== 'a') {
                return false;
              } else {
                newModel += data[i];
              }
            } else if (data[i] !== mask[i]) {
              return false;
            }
          }

          return newModel;
        };

        var myParser = function (modelValue) {
          var newModelValue = isValid(modelValue, $scope.jbMask);
          if (newModelValue === false) {
            return undefined;
          }
          return newModelValue;
        };

        var myFormatter = function (value) {
          if (value !== undefined) {
            var newValue = '';
            var index = 0;
            for (var i = 0; i < $scope.jbMask.length; ++i) {
              if ($scope.jbMask[i] === 'a' || $scope.jbMask[i] === '9') {
                newValue += value[index++];
              } else {
                newValue += $scope.jbMask[i];
              }
            }

            if (isValid(newValue, $scope.jbMask) !== false) {
              return newValue;
            } else {
              return undefined;
            }
          }
        };

        $controller.$parsers.push(myParser);
        $controller.$formatters.push(myFormatter);
      }
    }
  });

/*ui-mask*/

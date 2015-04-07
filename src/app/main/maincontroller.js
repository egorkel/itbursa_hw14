'use strict';

angular.module('hw14')
  .controller('mainCtrl', function () {
    this.inputVar = undefined;

    this.testVar = '';
    this.clickChange = function () {
      this.inputVar = this.testVar;
    };

    this.check = function () {

    };
  });

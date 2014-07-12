'use strict';

angular.module('ti4StreamsApp')
  .controller('MainCtrl', function ($scope, $interval, streams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.allStreams = [
      // List of stream names of TI streams.
      'dota2ti',
      'dota2ti_1',
      'dota2ti_2',
      'dota2ti_3',
      'dota2ti_4',
      'dota2ti_noob',
      'dota2ti_ru'
    ];

    $scope.streamsList = [];
    $scope.updateInterval = 10000;

    $scope.$on('event', function(event, data) {
      $scope.streamOb = data;
      $scope.streamsList.push(data);
      console.log(data);
    });
    
    /*
    $interval(function() {
      $scope.streamsList = [];
      for (var i = 0; i < $scope.allStreams.length; i++) {
        streams.getStreamData($scope.allStreams[i]);
      }
    }, $scope.updateInterval);
    */

    for (var i = 0; i < $scope.allStreams.length; i++) {
      streams.getStreamData($scope.allStreams[i]);
    }
  });

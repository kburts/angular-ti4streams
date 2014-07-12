'use strict';

angular.module('ti4StreamsApp')
  .factory('streams', function ($http, $rootScope) {
    // Public API here
    return {
      getStreamData: function (channel) {
        return $http({
          method: 'jsonp',
          url: 'https://api.twitch.tv/kraken/streams/' + channel + '?callback=JSON_CALLBACK',
        })
        .success(function(data) {
          $rootScope.$broadcast('event', data);
        })
        .error(function(data, status) {
          console.log('error!', data, status);
        });
      }
    };
  });

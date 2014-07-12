'use strict';

describe('Service: streams', function () {

  // load the service's module
  beforeEach(module('ti4StreamsApp'));

  // instantiate service
  var streams;
  beforeEach(inject(function (_streams_) {
    streams = _streams_;
  }));

  it('should do something', function () {
    expect(!!streams).toBe(true);
  });

});

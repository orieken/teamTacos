(function() {
  'use strict';

  angular.module('teamTaco.foo')
    .controller('Foo', Foo);

  function Foo() {
    var vm = this;
    vm.bars = [];
    vm.title = 'Foo!';

    activate();

    function activate() {
      return getFoos()
    }

    function getFoos() {
      //this is where you would make some call for data
      vm.bars = [
        {id: 1, name: 'A'},
        {id: 2, name: 'B'},
        {id: 3, name: 'C'}
      ];
      return vm.bars
    }
  }

})();
(function(){
    "use strict";

    angular.module('geoCharting', [])
        .constant('SIXTY_DEGREES', 60 * (Math.PI / 180))
        .factory('_', function( $window ) {
            var _ = $window._;
            delete( $window._ );
            return( _ );
        })
        .run(function (_) { });
})();

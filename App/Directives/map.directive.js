(function() {
    'use strict';

   app.directive('ngMap', ngMap);

    function ngMap() {
        return {
            restrict: "A",
            templateUrl: 'App/Templates/map.directive.html',
            scope:{
                zoom:'=',
                center: '=',
                map: '=',
                changeZoom:'&'
            },
            bindToController: true,
            controller: MapCtrl,
            controllerAs: 'vm',
            transclude: true
        };
    }

    function MapCtrl($scope){
        var vm = this;
        vm.scope = $scope;

        var map;
       
       map = L.map('map'); 

       map.setView(vm.center, vm.zoom);
       L.marker(vm.center).addTo(map);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'joshpierro.jc74i1gp',
            accessToken: 'pk.eyJ1Ijoiam9zaHBpZXJybyIsImEiOiJjaWk3cHJiejMwMmJsc3drcTVpeTg0bnV2In0.RMDonVJuD-v2OqqiIiF59Q'
        }).addTo(map);

        map.on('dragend', function () {
            vm.center = map.getCenter();
            $scope.safeApply();
        });

        map.on('viewreset', function () {
            vm.zoom = map.getZoom();
            $scope.safeApply()
        });

        vm.changeZoom = function(zoom){
            map.setZoom(zoom);
        }

        vm.changeCenter = function(center){
            if(center.lat>=-180 && center.lat<=180 && center.lng>=-180 && center.lng<=180){
                map.panTo(new L.LatLng(center.lat, center.lng));
              
            }
        }

        //hate to do this...
        $scope.safeApply = function(fn) {
            var phase = this.$root.$$phase;
            if(phase == '$apply' || phase == '$digest') {
                if(fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };

    }

})();
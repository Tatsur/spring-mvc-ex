angular.module('app', []).controller('ngController', function ($scope, $http) {
    const contextPath = 'http://localhost:8189/shop/api/v1';

    $scope.saveProduct = function () {
        console.log($scope.newProduct)
        $http.post(contextPath + '/product', $scope.newProduct)
            .then(function (resp){
                $scope.newProduct = null
                $scope.fillTable();
            })

    };

    $scope.deleteProduct = function (id) {
        console.log('product id: '+id)
        $http.delete(contextPath + '/product/' + id)
            .then(function (resp){
                $scope.fillTable();
            })

    };

    $scope.fillTable = function (pageIndex = 1) {
        $http({
            url: contextPath + '/product',
            method: 'GET'
        }).then(function (response) {
            $scope.ProductsPage = response.data;
        });
    };

    $scope.fillTable();
});
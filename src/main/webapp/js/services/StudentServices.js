var productApp = angular.module('productApp', ['ngRoute', 'LocalStorageModule', 'ui.bootstrap', 'ngSanitize', 'angular-flash.service', 'angular-flash.flash-alert-directive']);

productApp.factory('productFactory', function ($http, localStorageService) {
    var factory = {};
   
    factory.getAllProducts = function (callbackSuccess, callbackError) {
        $http({
            url: 'rest/message/getAllProducts',
            method: 'GET'
        })
                .success(callbackSuccess)
                .error(callbackError);
    };

    factory.addSimpleProduct = function (NAME, EMAIL,SEX, COURSE, FEE, PAID, DUE, ADDRESS, CONTACT, callbackSuccess, callbackError) {

        if (NAME!== null) {
            var postData = {
                name: NAME,
                email: EMAIL,
                sex: SEX,
                course: COURSE,
                fee: FEE,
                paid: PAID,
                due: DUE,
                address: ADDRESS,
                contact: CONTACT
            };

          $http({
                url: 'rest/message/addNewProduct',
                method: 'POST',
                data: postData
            })
                    .success(callbackSuccess)
                    .error(callbackError);

        } else {
            alert("The Student name can't be empty, please add a name");
        }

    };

    factory.removeProductById = function (prod_id, callbackSuccess, callbackError) {
        if (prod_id !== '') {
            $http({
                url: 'rest/message/removeProductById/' + prod_id,
                method: 'DELETE'
            })
                    .success(callbackSuccess)
                    .error(callbackError);
        } else {
            alert("There was an error while passing the ID. Please refresh the page and try again");
        }
    };

    factory.getProductById = function (prod_id, callbackData, callbackError) {
        if (prod_id !== '') {
            $http({
                url: 'rest/message/getProductById/' + prod_id,
                method: 'GET'
            })
                    .success(callbackData)
                    .error(callbackError);
        } else {
            alert("There was an error while passing the ID. Please refresh the page and try again");
        }
    };

    factory.updateProductById = function (prodObj, callbackData, callbackError) {
        $http({
            url: 'rest/message/updateProductById',
            method: 'PUT',
            data: prodObj
        })
                .success(callbackData)
                .error(callbackError);
    };

    return factory;
});
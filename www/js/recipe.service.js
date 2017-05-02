(function() {
    angular.module('recipe')
        .factory('Recipe', Recipe);

    Recipe.$inject = ['$log', '$http'];
    function Recipe($log, $http) {
        var url = 'https://nuisepic.com/recipedb'
        var self = {
            all: all,
            one: one,
            find: find
        }

        return self;

        function all() {
            return $http
                .get(url + '/recipes')
                .then(success)
                .catch(error);
        }

        function one(id) {
            return $http.get(url + '/recipes/' + id)
                .then(success)
                .catch(error);
        }

        function find() {
            return $http.get(url + '/recipes')
                .then(success)
                .catch(error);
        }

        function success(res) {
            return res.data;
        }

        function error(err) {
            $log.error(err);
        }
    }
}());


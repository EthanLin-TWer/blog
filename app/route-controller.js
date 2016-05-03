export default class RouteController {
    /*@ngInject*/
    constructor($route, $routeParams) {
        this.$route = $route;
        this.$routeParams = $routeParams;
    }
}

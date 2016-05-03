export default class PostController {
    /*@ngInject*/
    constructor($routeParams, postsService) {
        postsService.getPost($routeParams.postId).success(response => {
            this.current = response;
        });
    }
}

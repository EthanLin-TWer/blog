'use strict';

export default class HomeController {
    /*@ngInject*/
    constructor(postsService) {
        postsService.getDescriptiveMetaInfo().success(response => {
            this.postsMeta = response;
        });
    }
}

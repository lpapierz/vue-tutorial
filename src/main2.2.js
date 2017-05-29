const Child = {
    template: '#childarea'
};
const Post = {
    template: '#post'
};

new Vue({
    el: '#app',
    components: {
        appChild: Child,
        appPost: Post
    }
});
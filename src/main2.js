Vue.component('child', {
    props: {
        text: {
            type: String,
            required: true
        }
    },
    template: '<div>{{ text }}</div>'
});

Vue.component('count', {
    props: {
        count: {
            type: Number,
            required: true
        }
    },
    template: '<div class="num">{{ count }}</div>'
});

Vue.component('individual-comment', {
    template: `<li>{{ comment }}</li>`,
    props: ['comment']
});

var app = new Vue({
    el: '#app',
    data() {
        return {
            message: "Hello Mr. Papi",
            count: 0,
            newComment: '',
            comments: [
                'Looks great!',
                'I love this picture.',
                'Where is that?'
            ]
        }
    },
    methods: {
        decrement() {
            this.count--;
        },
        increment() {
            this.count++;
        },
        addComment(){
            this.comments.push(this.newComment);
            this.newComment = '';
        }
    }
});

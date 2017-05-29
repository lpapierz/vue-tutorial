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
    template: '#comment-template',
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
                {
                    text: 'Looks great!',
                    author: 'Robin Rendle',
                    authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-coffee.jpg'
                },
                {
                    text: 'I love this picture.',
                    author: 'Miriam Suzanne',
                    authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-miriam.jpg'
                },
                {
                    text: 'Where are you?',
                    author: 'Geoff Graham',
                    authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-geoff.jpg'
                }
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
        addComment() {
            const newCommentObj = {
                text: this.newComment,
                author: 'Magoo',
                authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-skull.jpg'
            };
            this.comments.push(newCommentObj);
            this.newComment = '';
        }
    }
});

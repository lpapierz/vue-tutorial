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

var app = new Vue({
    el: '#app',
    data() {
        return {
            message: "Hello Mr. Papi",
            count: 0,
        }
    },
    methods: {
        decrement() {
            this.count--;
        },
        increment() {
            this.count++;
        }
    }
});

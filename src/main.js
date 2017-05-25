const items = [
    'thingie',
    'next thingie',
    'more stuff',
    'sth sth sth'
];

new Vue({
    el: '#app',
    data() {
        return {
            counter: 0,
            quantity: 0,
            message: 'Type your text here...',
            text: 'Hello world!',
            items: items,
            x: 0
        };
    },
    methods: {
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        },
        xCoordinate(e) {
            this.x = e.clientX;
        }
    }
});


function listItems(){
    let listHTML = '';
    _(items).forEach((item) => {
        listHTML += '<li>' + item + '</li>';
    });
    const contain = document.querySelector('#app');
    //contain.innerHTML += '<ul>'+listHTML+'</ul>';
}

listItems();
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
            message: 'Type your text here...',
            text: 'Hello world!',
            items: items
        };
    },
    methods: {
        increment() {
            this.counter++;
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
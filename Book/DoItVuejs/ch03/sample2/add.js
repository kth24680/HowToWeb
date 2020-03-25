Vue.component('sibling-component', {
    props: ['propsdata'],
    template: '<p>{{ propsdata }}</p>'
});

Vue.component('child-component', {
    props: ['propsdata'],
    template: '<p>{{ propsdata }}</p>'
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vul! passed from Parent Component',
        another_message: 'another_message Vue!'
    }
});
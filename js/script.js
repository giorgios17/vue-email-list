console.log('js ok')

const app = new Vue({
    el: '#app',
    data: {
        allEmail: [],
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                const email = response.data;
                this.allEmail.push(email.response)
            });
        }

    }
})
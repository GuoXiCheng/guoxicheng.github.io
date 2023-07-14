const { createApp } = Vue

const app = createApp({
    data() {
        return {
            items: [1, 2, 3, 4, 5]
        }
    }
}).mount('#app')




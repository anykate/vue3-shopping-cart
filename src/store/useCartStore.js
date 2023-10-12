import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    // state: () => {
    //     return {
    //         count: 0,
    //         name: 'Aniket',
    //     }
    // },
    state: () => ({
        count: 0,
        name: 'Aniket',
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
    },
})

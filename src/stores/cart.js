import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    // state: () => {
    //     return {
    //         count: 0,
    //         name: 'Aniket',
    //     }
    // },
    state: () => ({
        // https://biteable.com/tools/image-resizer/#instagram
        products: [
            {
                id: 1,
                name: 'Iphone 12',
                price: 700,
                image: '/images/Iphone.jpg',
            },
            {
                id: 2,
                name: 'Samsung s10',
                price: 400,
                image: '/images/Samsung.jpg',
            },
            {
                id: 3,
                name: 'Samsung Tv',
                price: 1200,
                image: '/images/tv.jpg',
            },
            {
                id: 4,
                name: 'Huwawei Mate',
                price: 900,
                image: '/images/huwawei.jpg',
            },
        ],
    }),
    getters: {},
    actions: {},
})

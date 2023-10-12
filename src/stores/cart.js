import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'

const toast = useToast()

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
        cartItems: [],
    }),
    getters: {
        countCartItems(state) {
            return state.cartItems.length
        },
        getCartItems(state) {
            return state.cartItems
        },
    },
    actions: {
        addToCart(item) {
            let index = this.cartItems.findIndex(
                (product) => product.id === item.id
            )

            if (index != -1) {
                this.cartItems[index].quantity += 1
                toast.info("Your item's quantity  has been updated!", {
                    timeout: 3000,
                })
            } else {
                this.cartItems.push({ ...item, quantity: 1 })
                toast.info('Your item has been added to cart!', {
                    timeout: 3000,
                })
            }
        },
    },
})

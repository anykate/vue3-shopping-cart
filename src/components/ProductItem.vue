<script setup>
import { useCartStore } from '@/stores/cart'

const store = useCartStore()

defineProps({
    product: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div class="col-md-4 mb-2">
        <div class="card">
            <img
                :src="product.image"
                alt="product.name"
                class="card-img-top"
            />
            <div class="card-body">
                <h5 class="card-title">
                    {{ product.name }}
                </h5>
                <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi, quo.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="fs-3 my-2">
                        <span class="badge bg-danger">
                            &#x20B9;. {{ product.price }}/-
                        </span>
                    </p>
                    <button
                        class="btn btn-outline-primary"
                        @click="store.addToCart(product)"
                    >
                        <i class="bi bi-cart-check"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

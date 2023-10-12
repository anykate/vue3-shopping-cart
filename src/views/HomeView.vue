<script setup>
import ProductItem from '@/components/ProductItem.vue'
import { useCartStore } from '@/stores/cart'

const store = useCartStore()
</script>

<template>
    <div class="row my-4">
        <ProductItem
            v-for="product in store.products"
            :key="product.id"
            :product="product"
        />
    </div>
</template>

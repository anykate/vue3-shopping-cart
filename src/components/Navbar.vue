<script setup>
import { useCartStore } from '@/stores/cart'

const store = useCartStore()
</script>

<template>
    <header>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <router-link
                    class="navbar-brand"
                    :to="{ name: 'home' }"
                >
                    <i class="bi bi-bag fs-4"></i>
                    Shop
                </router-link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav ms-auto fs-4 mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                :to="{ name: 'cart' }"
                            >
                                <i class="bi bi-cart-check"></i>
                                <span> Cart (</span>
                                <span class="text-white">
                                    {{ store.countCartItems }}
                                </span>
                                <span>)</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

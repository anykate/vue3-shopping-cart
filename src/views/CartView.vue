<script setup>
import { useCartStore } from '@/stores/cart'

const store = useCartStore()
</script>

<template>
    <div class="row my-4">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Sr. No.</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody v-if="store.countCartItems >= 1">
                                <tr
                                    v-for="(item, index) in store.getCartItems"
                                    :key="item.id"
                                >
                                    <td>
                                        {{ index + 1 }}
                                    </td>
                                    <td>
                                        {{ item.id }}
                                    </td>
                                    <td>
                                        <img
                                            :src="item.image"
                                            alt="item.name"
                                            height="114"
                                            width="64"
                                        />
                                    </td>
                                    <td>
                                        {{ item.name }}
                                    </td>
                                    <td>
                                        <div class="d-flex gap-2 fs-5">
                                            <i
                                                class="bi bi-plus-circle-fill"
                                                @click="store.incrementQ(item)"
                                            ></i>
                                            {{ item.quantity }}
                                            <i
                                                class="bi bi-dash-circle-fill"
                                                @click="store.decrementQ(item)"
                                            ></i>
                                        </div>
                                    </td>
                                    <td>
                                        {{ item.price }}
                                    </td>
                                    <td>
                                        {{ item.price * item.quantity }}
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td
                                        colspan="7"
                                        class="text-center text-danger fs-4 fw-bold"
                                    >
                                        Cart empty - No items in Cart!
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot v-if="store.countCartItems >= 1">
                                <td colspan="7">
                                    <div
                                        class="d-flex justify-content-between fs-3"
                                    >
                                        <div></div>
                                        <div>
                                            Total:
                                            <span class="badge bg-danger">
                                                &#x20B9;.
                                                {{ store.getTotalCost }}/-
                                            </span>
                                        </div>
                                    </div>
                                </td>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
i {
    cursor: pointer;
}
</style>

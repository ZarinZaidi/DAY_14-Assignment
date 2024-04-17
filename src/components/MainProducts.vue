<template>
    <div class="home">
        <h1>Anything that catch your eyes?</h1>
        <p>Use CODE: ROOM1 for 15% off.</p>
        <ul class="product-list">
            <li v-for="item in list" :key="item.id" class="product-item">
                <img :src="item.image" alt="Product Image" class="product-image">
                <div class="product-details">
                    <h2 class="product-title">{{ item.title }}</h2>
                    <p class="product-price">$ {{ item.price }}</p>
                    <p class="product-rating">Rating: {{ item.rating.rate }}</p>
                    <button>Add to cart</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "MainProducts",
    data() {
        return {
            list: []
        }
    },
    async mounted() {
        let result = await axios.get("https://fakestoreapi.com/products");
        console.warn("api data", result.data);
        this.list = result.data
    }
}
</script>

<style scoped>
h1,
p {
    text-align: center;
    margin-bottom: 20px;
    color: darksalmon;
}

.home {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.product-list {
    list-style-type: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.product-item {
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.product-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
}

.product-details {
    text-align: center;
}

.product-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
}

.product-price {
    font-size: 16px;
    color: darkcyan;
    margin-bottom: 5px;
}

.product-rating {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
}

button {
    background-color: crimson;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
}

button:hover {
    background-color: brown;
}
</style>
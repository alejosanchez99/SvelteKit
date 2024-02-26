<script>
  export let productId = 100;
</script>

<a href="/">Home</a>

<h1>Products lists</h1>
<h2><a href="/products/1">product 1</a></h2>
<h2><a href="/products/2">product 2</a></h2>
<h2><a href="/products/3">product 3</a></h2>
<h2><a href={`/products/${productId}`}>Product {productId}</a></h2>

<script>
  import { page } from "$app/stores";

  console.log($page.params.slug);
  const slugs = $page.params.slug.split("/");
</script>

{#if slugs.length === 1}
  <h1>Viewing docs for feature {slugs[0]}</h1>
{:else if slugs.length === 2}
  <h1>Viewing docs for feature {slugs[0]} and concept {slugs[1]}</h1>
{/if}

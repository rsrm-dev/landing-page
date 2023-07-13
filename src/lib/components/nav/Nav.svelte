<script>
  import { page } from '$app/stores';
  import Logo from '$lib/elements/Logo.svelte';
  import { routes } from './Nav.js';
  import './Nav.scss';
</script>

<nav class="nav">
  <Logo />
  <ul class="pages">
    {#each routes as route}
      <li
        class="page"
        class:active={[route.href, route.href.replace('#', '')].includes(
          $page.url.hash
        )}
      >
        <a rel="external" href={route.href}>
          {route.name}
        </a>
      </li>
    {/each}
    <div class={`slider ${$page.url.hash.replace('#', '')}`} />
  </ul>

  <div>EN/VI</div>
</nav>

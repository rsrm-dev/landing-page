<script>
  import { page } from '$app/stores';
  import Logo from '$lib/elements/Logo.svelte';
  import { isScrolling } from '$lib/hooks/store.js';
  import { routes } from './Nav.js';
  import './Nav.scss';
  const handleNavClick = () => {
    isScrolling.set(false);
    setTimeout(() => {
      isScrolling.set(true);
    }, 1000);
  };
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
        <a rel="external" href={route.href} on:click={handleNavClick}>
          {route.name}
        </a>
      </li>
    {/each}
    <div class={`slider ${$page.url.hash.replace('#', '')}`} />
  </ul>

  <div>EN/VI</div>
</nav>

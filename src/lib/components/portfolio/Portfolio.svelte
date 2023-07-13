<script>
  import { goto } from '$app/navigation';
  import viewport from '$lib/hooks/useViewportAction';
  import './Portfolio.scss';
</script>

<section
  id="portfolio"
  class="portfolio-container"
  use:viewport
  on:enterViewport={() => {
    goto('#portfolio', { replaceState: true, noScroll: true });
  }}
>
  <div>
    <div class="page">
      Portfolio <div class="line" />
    </div>
    <div class="title">
      <span>Awesome Portfolio</span>
    </div>
  </div>
</section>

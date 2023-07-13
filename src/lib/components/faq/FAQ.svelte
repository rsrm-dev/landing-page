<script>
  import { goto } from '$app/navigation';
  import viewport from '$lib/hooks/useViewportAction';
  import './FAQ.scss';
</script>

<section
  id="faq"
  class="faq-container"
  use:viewport
  on:enterViewport={() => {
    goto('#faq', { replaceState: true, noScroll: true });
  }}
>
  <div class="page">
    <div class="line" />
    <div>FAQ</div>
    <div class="line" />
  </div>
  <div class="title">
    <span>Frequently Asked </span>
    <span>Questions</span>
  </div>
</section>

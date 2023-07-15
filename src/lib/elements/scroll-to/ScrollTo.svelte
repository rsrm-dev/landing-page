<script>
  import { goto } from '$app/navigation';
  import { isScrolling } from '$lib/hooks/store';
  import viewport from '$lib/hooks/useViewportAction';
  export let id = '';
  let allowScroll = true;

  isScrolling.subscribe((value) => {
    allowScroll = value;
  });

  const handleEnterViewPort = () => {
    console.log('LOG ~ :', id, allowScroll);
    if (allowScroll) {
      goto(id, { replaceState: true, noScroll: true });
    }
  };
</script>

<div>
  <div use:viewport on:enterViewport={handleEnterViewPort} />
</div>

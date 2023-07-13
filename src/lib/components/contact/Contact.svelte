<script>
  import { goto } from '$app/navigation';
  import Button from '$lib/elements/button/Button.svelte';
  import Input from '$lib/elements/input/Input.svelte';
  import viewport from '$lib/hooks/useViewportAction';
  import './Contact.scss';
</script>

<section id="contact" class="contact-container">
  <div class="mask" />
  <div class="left">
    <img src="/contact-img.png" alt="img" />
  </div>

  <div class="right">
    <div class="page">
      Contact Us <div class="line" />
    </div>
    <div class="title">
      <span
        >Have Any <span style="color:#00aff4">Questions?</span>
        <br />
        Let's <span style="color:#00aff4">Answer</span> Them
      </span>
    </div>
    <div
      class="description"
      use:viewport
      on:enterViewport={() => {
        goto('#contact', { replaceState: true, noScroll: true });
      }}
    >
      If you are looking for high-quality Internet service, feel free to fill
      out the form on the right so that our managers could contact you and
      discuss every detail you need in the new network.
    </div>
    <div class="form">
      <div>
        <Input label="Name" name="name" placeholder="Enter your name" />
      </div>
      <div>
        <Input label="Email" name="email" placeholder="Enter your email" />
      </div>
      <div>
        <Input
          label="Your message"
          name="message"
          placeholder="Enter your message"
        />
      </div>
      <div>
        <Button>Submit Request</Button>
      </div>
    </div>
  </div>
</section>

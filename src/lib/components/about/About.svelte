<script>
  import ScrollTo from '$lib/elements/scroll-to/ScrollTo.svelte';
  import HeadsetMicIcon from '../../icons/HeadsetMicIcon.svelte';
  import MonetizationIcon from '../../icons/MonetizationIcon.svelte';
  import StarIcon from '../../icons/StarIcon.svelte';
  import SupervisedUserCircleIcon from '../../icons/SupervisedUserCircleIcon.svelte';
  import { infoList } from './About.js';
  import './About.scss';
</script>

<section id="about" class="about-container">
  <div class="mask" />
  <div class="about-content">
    <div class="left">
      <img src="/col-left.png" alt="img" />
    </div>
    <div class="right">
      <div class="page">
        About Us <div class="line" />
      </div>
      <div class="title">
        <span
          >Our Goal is Giving the Best For
          <br />
        </span>
        <span>IT Services</span>
      </div>
      <div class="description">
        We specialize in creating custom Web Design & Development, Graphic
        Design, Brand Development, Online Marketing and SEO as our core
        services. Our team works flawlessly and timely to create a website of
        your dream in a time that meets your deadlines.
      </div>
      <div class="info-list">
        {#each infoList as infoItem}
          <div class="info-item">
            <div class="info-item__icon">
              {#if infoItem.id === 1}
                <MonetizationIcon />
              {:else if infoItem.id === 2}
                <StarIcon />
              {:else if infoItem.id === 3}
                <SupervisedUserCircleIcon />
              {:else}
                <HeadsetMicIcon />
              {/if}
            </div>
            <div class="info-item__info">
              <div class="info-item__name">{infoItem.name}</div>
              <div class="info-item__desc">{infoItem.desc}</div>
            </div>
          </div>
        {/each}
      </div>
      <ScrollTo id="#about" />
    </div>
  </div>
</section>

<script>
  import { infoList } from './WhyChooseUs.js';
  import './WhyChooseUs.scss';
</script>

<section id="why-choose-us" class="why-choose-us-container">
  <!-- <div class="mask" /> -->
  <div class="right">
    <div class="page">
      Why Choose Us <div class="line" />
    </div>
    <div class="title">
      <span
        >Our Goal is Giving the Best For
        <br />
      </span>
      <span>IT Services</span>
    </div>

    <div class="info-list">
      {#each infoList as infoItem}
        <div class="info-item">
          <div class="info-item__icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10.71 16.29C10.32 16.68 9.69 16.68 9.3 16.29L5.71 12.7C5.32 12.31 5.32 11.68 5.71 11.29C6.1 10.9 6.73 10.9 7.12 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.71 16.29Z"
                fill="#00AFF4"
              />
            </svg>
          </div>
          <div class="info-item__info">
            <div class="info-item__desc">{infoItem.desc}</div>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div class="left">
    <img src="/why-choose-us-img.png" alt="img" />
  </div>
</section>

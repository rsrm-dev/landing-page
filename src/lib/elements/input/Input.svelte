<script>
  // @ts-nocheck

  import './Input.scss';
  export let label;
  export let name;
  export let placeholder;
</script>

<div class="input-wrapper">
  <label class="label" for={name}>{label}</label>
  <input class="input" {name} {placeholder} />
</div>

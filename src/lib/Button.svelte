<script lang="ts">
  export let disabled = false;
  export let onClick: () => void;
  let props = { ...$$restProps }

  const clickHandler = () => {
    console.log(':: click');
    onClick?.();
  }
</script>

<button class={`Button ${props.class}`} {disabled} style={props.style} on:click={clickHandler}>
  <slot/>
</button>

<style>
  .Button {
    position: relative;
  }
</style>
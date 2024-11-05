<script lang="ts">

</script>

<button class="MenuToggler" type="button">
	<slot />
</button>

<style lang="scss">
	.MenuToggler {
    position: relative;
		display: inline-block;
		background: transparent;
		transition: var(--transitionBase);
		border: var(--borderSizeBase) solid transparent;
		border-radius: var(--borderRadiusBase100);
    background: var(--bgControl200);
		font-size: var(--fontSizeBase);
		line-height: var(--lineHeightBase);
		padding: 2px 4px;

		&:hover {
			background: var(--bgControl300);
		}
    &:active {
      background: var(--bgControl400);
    }
	}
</style>

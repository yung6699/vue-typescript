<template>
	<div>
		<label>
			<input type="checkbox" :checked="tempChecked" @change="onchange" />
			tests
		</label>
	</div>
</template>
<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator';

@Component
export default class Message extends Vue {
	@Model('change', { type: Boolean }) tempChecked?: boolean;

	onchange(e: InputEvent) {
		const target = e.target as HTMLInputElement;
		this.$emit('change', target.checked);
	}
}
</script>

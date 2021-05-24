<template>
	<div>
		<input type="text" @input="handleInput" />

		<!-- <input type="text" @input="onInput" :value="message" /> -->
		<!-- <span> {{ message }}</span> -->
		<!-- <input type="text" v-model="syncedChildValue" /> -->
		<!-- <input
			type="text"
			@input="$emit('update:childValue', $event.target.value)"
		/> -->

		<button @click="testClick">Test Model</button>
		{{ show }}
	</div>
</template>
<script lang="ts">
import { Component, Vue, Model, Emit, PropSync } from 'vue-property-decorator';

@Component
export default class Message extends Vue {
	// @Model('input', { type: String }) message?: string;

	@PropSync('childValue', { type: String }) syncedChildValue?: string;
	// @Prop({ type: Boolean }) childValue?: boolean;

	// @Prop({ type: String, required: false })
	// message: string;

	@Model('update', { type: Boolean }) show?: boolean;

	handleInput(e: InputEvent) {
		const target = e.target as HTMLInputElement;
		this.syncedChildValue = target.value;
	}

	@Emit('input')
	onInput(e: InputEvent) {
		const target = e.target as HTMLInputElement;
		return target.value;
	}

	@Emit('update')
	testClick() {
		return !this.show;
	}
}
</script>

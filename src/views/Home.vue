<template>
	<div>
		<!-- <message v-model="messageTest" :childValue.sync="childValue" /> -->
		<message v-model="dialogShow" :childValue.sync="childValue" />
		<check-box v-model="tempChecked" />
		{{ childValue }}
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Message from '@/components/base/Message.vue';
import CheckBox from '@/components/base/CheckBox.vue';

@Component({
	components: {
		Message,
		CheckBox,
	},
})
export default class extends Vue {
	messageTest = '';
	tempChecked = true;
	childValue = 'propsync test';
	dialogShow = false;

	@Watch('dialogShow')
	onChangeTest() {
		console.log('test', this.dialogShow);
	}
}
</script>

<style scoped></style>

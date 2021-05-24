<template>
	<div class="calendar-container">
		<time-line />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TimeLine from '@/components/calendar/Time.vue';

@Component({
	components: {
		TimeLine,
	},
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.calendar-container {
	display: inline-flex;
	position: relative;
	width: 1200px;
	height: 800px;
	overflow: scroll;
}
</style>

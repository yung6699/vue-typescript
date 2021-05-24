<template>
	<calendar />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Calendar from '@/components/calendar/index.vue';

@Component({
	components: {
		Calendar,
	},
})
export default class extends Vue {}
</script>

<style scoped lang="scss"></style>

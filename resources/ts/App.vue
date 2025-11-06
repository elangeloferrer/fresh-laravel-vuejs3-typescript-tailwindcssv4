<template>
    <div class="text-center mt-10">
        <h1 class="text-2xl font-bold text-green-600">{{ message }}</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        const message: string = "Hello from Vue 3 + TypeScript + Laravel 11!";

        return {
            message,
        };
    },
});
</script>

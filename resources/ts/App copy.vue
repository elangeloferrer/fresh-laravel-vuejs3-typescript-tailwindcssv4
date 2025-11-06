<template>
    <div class="flex min-h-screen flex-col">
        <!-- Navbar -->
        <nav
            class="flex items-center justify-between border-b border-gray-400 bg-white px-6 py-3 text-black"
        >
            <!-- Left Side -->
            <div class="flex items-center space-x-3">
                <h1 class="font-semibold text-black">PSA Exam</h1>
            </div>
        </nav>

        <div class="flex flex-1 p-4">
            <!-- Main Content -->
            <div
                class="flex-1 overflow-auto bg-gray-100 p-4 shadow-md"
                style="max-height: calc(120vh - 10rem)"
            >
                <router-view :key="route.path"></router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
    setup() {
        const route = useRoute();

        return {
            route,
        };
    },
});
</script>

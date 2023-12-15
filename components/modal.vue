<script setup lang="ts">
const emit = defineEmits(['close'])

const close = () => {
    emit('close');
}
</script>
<template>
    <div class="modalContainer" @click.self="close">
        <div class="modalBody">
            <div class="modalContent">
                <iframe width="799" height="450" src="https://www.youtube.com/embed/6szqRF7RIlg?si=GQoraHIkAhB1-0UE&amp;&autoplay=1&
                    mute=1&amp;start=387&end=476" title="YouTube video player" frameborder="5"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modalContainer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.3s ease-in-out;
    z-index: 9999;
}
</style>
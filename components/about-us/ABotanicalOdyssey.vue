<script setup>
const displayVideo = ref(false)
const youtubeVideoId = "nZUMdnky11E"
</script>

<template>
    <div class="botanical-odyssey__parent">
        <section class="botanical-odyssey">
            <div class="botanical-odyssey__title">
                <Tag>
                    Our Story
                </Tag>
                <h2 class="h2">A Botanical Odyssey</h2>
            </div>
            <div class="botanical-odyssey__video">
                <figure v-if="!displayVideo" class="botanical-odyssey__background">
                    <img :src="`https://i3.ytimg.com/vi/${youtubeVideoId}/maxresdefault.jpg`" alt="">
                </figure>
                <button  v-if="!displayVideo" @click="displayVideo = true">
                    <svg width="71" height="82" viewBox="0 0 71 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M71 41L0.500004 81.7032L0.500007 0.296803L71 41Z" fill="#FFC300" />
                    </svg>
                </button>

            <iframe class="botanical-odyssey__iframe"  v-else
                src="https://www.youtube-nocookie.com/embed/nZUMdnky11E?autoplay=1" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
.botanical-odyssey__parent {
    padding: 0 4px;
}

.botanical-odyssey {
    max-width: 1296px;
    width: 100%;
    border-left: 2px solid var(--nandor);
    border-right: 2px solid var(--nandor);
    margin: 0 auto;
    border-top: 2px solid var(--nandor);
    padding-top: 120px;
    padding-bottom: 120px;
}

.botanical-odyssey__title {
    max-width: 858px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 40px;
}

.botanical-odyssey__video {
    max-width: 1087px;
    margin: 0 auto;
    aspect-ratio: 16/9;
    background-size: cover;
    width: 100%;
    position: relative;
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        transition: transform 200ms ease-in-out;
        transition-delay: 100ms;
        cursor: pointer;
        position: relative;
z-index: 2;
        &:hover {
            transform: scale(1.1);
        }
    }
}

.botanical-odyssey__background{
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
    filter: brightness(.7);
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}

.botanical-odyssey__iframe{
    height: 100%;
    width: 100%;
}

@media (max-width:900px) {
        .botanical-odyssey__title{
            padding: 0 1rem;
        }
}
@media (max-width:809px) {
    .botanical-odyssey{
        padding: 40px 0;
    }
}
</style>
<template>
    <button class="command" @click="toggleCollapse">
        <div class="head">
            <span class="arrow" v-if="collapsed">⇓</span>
            <span class="arrow" v-else>⇑</span>
            <span class="name">{{ name }}</span>
            <span class="arrow" v-if="collapsed">⇓</span>
            <span class="arrow" v-else>⇑</span>
        </div>
        <div :style="(collapsed) ? 'max-height: 0px; padding-top: 0px; padding-bottom: 0px' : ''" class="body">
            <p class="campbellssoup">{{ syntax }}</p>
            <p class="pumpkinpie" :style="(align_left) ? 'text-align: left' : ''">
                <slot></slot>
            </p>
        </div>
    </button>
</template>

<style>
.campbellssoup {
    margin-bottom: 15px;
    display: inline-block;
    padding: 5px;
    border-width: 5px;
    border-color: rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.2);
}

.campbellssoup,
soup {
    color: rgb(255, 255, 255);
    border-radius: 4px;
    color: rgb(231, 231, 231);
    font-family: 'Lucida Console', monospace;
}

soup {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 4px;
}

.command {
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    opacity: 80%;
    margin-top: 20px;
    margin-bottom: 20px;

    transition: all 0.2s;
    width: 100%;
}

.command:hover .name,
.command:hover .arrow {
    opacity: 0.85;
}

.command:hover {
    background-color: rgba(255, 255, 255, 0.15);
}

.head {
    font-size: 30px;
    padding: 5px;
    text-align: center;
    display: flex;
    justify-content: center;
}

.name {
    flex-shrink: 1;
    flex-grow: 1;
    display: inline-block;
    max-width: 100%;
    word-break: break-word;
}

.body {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
    padding-right: 40px;
    font-size: 18px;
    overflow: hidden;
    max-height: 1000px;

    transition: padding 0.2s, max-height 0.5s;
}

.arrow {
    flex-basis: 20%;
}

@media (max-width: 750px) {
    .head {
        font-size: 20px;
    }

    .body {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 20px;
        padding-right: 20px;
        font-size: 14px;
    }

    .pumpkinpie {
        text-align: justify;
    }
}
</style>

<script>
import { ref } from 'vue';

export default {
    props: ['name', 'syntax', 'align_left'],

    setup(props) {
        var collapsed = ref(true);

        function toggleCollapse() {
            collapsed.value = !collapsed.value;
        }

        return {
            collapsed,
            toggleCollapse
        };
    }
}
</script>
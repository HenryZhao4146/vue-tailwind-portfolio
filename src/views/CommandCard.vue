<template>
    <button class="command" @click="toggleCollapse">
        <div class="head">
            <span class="arrow" v-if="collapsed">⇓</span>
            <span class="arrow" v-else>⇑</span>
            <span class="name">{{name}}</span>
            <span class="arrow" v-if="collapsed">⇓</span>
            <span class="arrow" v-else>⇑</span>
        </div>
        <div :style="(collapsed) ? 'max-height: 0px; padding-top: 0px; padding-bottom: 0px' : ''" class="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            fringilla
            sapien a fermentum fermentum.
            Curabitur nec finibus lectus. In pretium, ipsum nec consequat tempus, tellus metus faucibus justo, in
            rutrum
            dolor lacus non orci. In consequat euismod lorem non cursus. Aenean posuere dui sed tortor pellentesque
            tristique. Duis eu lacus vitae est tristique euismod. Nulla vitae justo urna. Fusce sed faucibus nulla.
            Mauris tempus nisl eu odio hendrerit tristique. Phasellus blandit augue at ultricies venenatis. Aliquam
            erat volutpat. Ut eu nisi consectetur, consequat nulla at, luctus leo.</div>
    </button>
</template>

<style>
.command {
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    text-align: center;
    opacity: 80%;

    margin-top: 20px;
    margin-bottom: 20px;
    width: 85%;

    transition: all 0.2s;
}

.command:hover .name, .command:hover .arrow {
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
    max-height: 600px;

    transition: all 0.5s;
}

.arrow {
    flex-basis: 20%;
}
</style>

<script>
import { ref } from 'vue';

export default {
  props: ['name'],

  setup(props) {
    var collapsed = ref(true);
    var name = ref(props.name);

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
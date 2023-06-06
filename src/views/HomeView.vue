<template>
    <!-- Header -->
    <header class="py-20 text-center">
        <div class="header">
            <img src="../assets/imgs/ServerIcon.png">
            <h1 class="text-8xl font-bold text-white">Welcome to Pangea</h1>
        </div>

    </header>

    <!-- Body -->
    <div class="text-white">
        <div class="body-container">
            <div class="body-intro">
                <p>Think twice before proceeding into the land of dinosaurs. But if you insist on taming
                    the untameable, then let this be your guide.
                </p>
                <img src="../assets/imgs/logo.png">
            </div>
            <div class="body-divider">Sample divider</div>
            <div class="body-text">
                <div class="body-text-head">
                    <span class="symbol">⇑</span>
                    <button class="text" @click="toggleCollapse">{{ 'QWEGQRGqrgknqrewg' }}</button>
                    <span class="symbol">⇑</span>
                </div>
                <div v-if="!collapsed" class="body-text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla
                    sapien a fermentum fermentum.
                    Curabitur nec finibus lectus. In pretium, ipsum nec consequat tempus, tellus metus faucibus justo, in
                    rutrum
                    dolor lacus non orci. In consequat euismod lorem non cursus. Aenean posuere dui sed tortor pellentesque
                    tristique. Duis eu lacus vitae est tristique euismod. Nulla vitae justo urna. Fusce sed faucibus nulla.
                    Mauris tempus nisl eu odio hendrerit tristique. Phasellus blandit augue at ultricies venenatis. Aliquam
                    erat volutpat. Ut eu nisi consectetur, consequat nulla at, luctus leo.</div>
            </div>
            <div class="body-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla sapien a fermentum fermentum.
                Curabitur nec finibus lectus. In pretium, ipsum nec consequat tempus, tellus metus faucibus justo, in rutrum
                dolor lacus non orci. In consequat euismod lorem non cursus. Aenean posuere dui sed tortor pellentesque
                tristique. Duis eu lacus vitae est tristique euismod. Nulla vitae justo urna. Fusce sed faucibus nulla.
                Mauris tempus nisl eu odio hendrerit tristique. Phasellus blandit augue at ultricies venenatis. Aliquam
                erat volutpat. Ut eu nisi consectetur, consequat nulla at, luctus leo.
            </div>
            <div class="body-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla sapien a fermentum fermentum.
                Curabitur nec finibus lectus. In pretium, ipsum nec consequat tempus, tellus metus faucibus justo, in rutrum
                dolor lacus non orci. In consequat euismod lorem non cursus. Aenean posuere dui sed tortor pellentesque
                tristique. Duis eu lacus vitae est tristique euismod. Nulla vitae justo urna. Fusce sed faucibus nulla.
                Mauris tempus nisl eu odio hendrerit tristique. Phasellus blandit augue at ultricies venenatis. Aliquam
                erat volutpat. Ut eu nisi consectetur, consequat nulla at, luctus leo.
            </div>

            <button class="collapsible" @click="toggleCollapse">{{ collapsed ? 'Header' : 'Click to Collapse' }}</button>
            <p v-show="!collapsed">Penguin</p>
            <div class="content" v-show="!collapsed">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu consectetur est, vel tristique nisl.
                    Aenean
                    feugiat nec nulla at feugiat. Quisque tincidunt eleifend dolor, a varius tellus faucibus et. Suspendisse
                    nec
                    lorem vel mauris scelerisque fermentum. Nam et augue diam. Mauris finibus turpis sed libero blandit, in
                    convallis risus placerat. Sed vestibulum turpis sit amet tortor dignissim condimentum. Ut sed ultricies
                    nibh.
                    Nullam finibus enim ac pulvinar eleifend. Sed luctus fringilla ex vel posuere. Curabitur posuere
                    bibendum sem
                    quis feugiat.
                </p>
            </div>
        </div>

    </div>
</template>

<style>
.header img {
    width: 300px;
    height: 300px;
    animation: rotation 10s infinite linear;
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(359deg);
    }
}



.text-8xl {
    margin-left: 15px;
    max-width: 500px;
}

.body-intro {
    margin-bottom: 60px;
    margin-top: 60px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.body-intro p {
    font-size: 35px;
    min-width: 50%;
    width: 400px;
    line-height: 3;
    text-align: right;
    color: white;
    opacity: 80%;
}

.body-intro img {
    width: 300px;
    height: 300px;
    margin-left: 10%;
}

.body-divider {
    font-size: 40px;
    opacity: 80%;
}

.body-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 7%;
    margin-right: 7%;
}

.body-text {
    border-radius: 25px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 50px;
    padding-left: 50px;
    background-color: rgba(255, 255, 255, 0.1);
    text-align: center;
    border-style: solid;
    opacity: 80%;
    border-width: 5px;
    margin: 10px;
}

.body-text-head {
    font-size: 30px;
    margin: 10px;
    padding: 5px;
    display: flex;
    align-items: center;
}

.body-text-head .symbol {
    margin-right: 30px;
    margin-left: 30px;
}

.body-text-head .text {
    flex-grow: 1;
}

@media (min-width: 701px) {
    .header {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

@media (max-width: 700px) {
    .text-8xl {
        font-size: 60px;
        margin-top: 25px;
    }

    .header img {
        width: 300px;
        height: 300px;
    }

    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}

.collapsible {
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 18px;
}

.content {
    padding: 0 18px;
    display: none;
    overflow: hidden;
    background-color: #f1f1f1;
}
</style>

<script setup>
import { ref } from 'vue';

var collapsed = ref(true);

function toggleCollapse() {
    collapsed.value = !collapsed.value;
}
</script>
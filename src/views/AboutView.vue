<template>
    <div class="header">
        <img class="egg" src="../assets/imgs/egg.png">
        <h1>About Pangea</h1>
    </div>

    <div class="body-container text-white">
        <div class="body-intro box1">
            <p>You might be wondering, why is there an egg on this page? Because eggs are cool. You know what else is
                cool? A Discord bot that lets you own dinosaurs. Keep scrolling to read the epic tale of DinoBot.
            </p>
            <img class="bob" src="../assets/imgs/dino1.png">
        </div>

        <div class="subsequent body-intro box2">
            <p>Once upon a time, all the continents were stuck together like overcooked mac and cheese, forming the Pangea
                supercontinent. Here roamed dinosaurs of all shapes and sizes. Far from living in harmony, though, many
                dinosaurs engaged in predatory behavior and would've folded you into a pretzel regardless of how tough you
                act behind your keyboard. But rather than fearing these magnificent beasts, you should harness their power.
                DinoBot's vibrant virtual economy lets you buy dinosaurs, which are then yours to customize, train, breed,
                and most importantly, send to war against other players. The more your dinos fight, the better they'll
                become at it. And the better they fight, the more resources you plunder to finance a bigger army.
            </p>
        </div>

        <div class="grilledcheese">
            <img class="bigbob" src="../assets/imgs/dino2.png">
        </div>

        <div class="fatcat">
            <p>Now that you know what's up, head back to the top of the page to join our server and kickstart your prehistoric empire. Go!
            </p>
            <br><br>
            <br><br>
            <br><br>
            <br><br>
            <p>I said, go!</p>
            <br><br>
            <br><br>
            <br><br>
            <br><br>
            <p>Back to the top of the page!</p>
            <br><br>
            <br><br>
            <br><br>
            <br><br>
            <p>No, the TOP of the page. Not the bottom!</p>
            <br><br>
            <br><br>
            <br><br>
            <br><br>
            <p>What, can you not read?</p>
            <br><br>
            <br><br>
            <br><br>
            <br><br>
            <p>Go back. There's nothing to see down here.</p>
        </div>
    </div>
</template>

<style>
.grilledcheese img {
    margin-top: 60px;
    width: 500px;
}

.egg {
    animation: eggrotation 2s infinite linear;
}

.bob {
    animation: bob 3s infinite linear;
}

.bigbob {
    animation: bigbob 3s infinite linear;
}

@keyframes eggrotation {

    0% {
        transform: translateX(-20px) rotate(-10deg);
    }

    50% {
        transform: translateX(20px) rotate(10deg);
    }

    100% {
        transform: translateX(-20px) rotate(-10deg);
    }
}

@keyframes bob {
    0% {
        transform: translateY(5px) scale(1.05, 0.95);
        ;
    }

    50% {
        transform: translateY(-5px) scale(0.95, 1.05);
        ;
    }

    100% {
        transform: translateY(5px) scale(1.05, 0.95);
        ;
    }
}

@keyframes bigbob {
    0% {
        transform: translateY(5px) scale(1.05, 0.95);
        ;
    }

    50% {
        transform: translateY(-5px) scale(0.95, 1.05);
        ;
    }

    100% {
        transform: translateY(5px) scale(1.05, 0.95);
        ;
    }
}

@keyframes bigbob2 {
    0% {
        transform: translateY(2px) scale(1.05, 0.95);
        ;
    }

    50% {
        transform: translateY(-2px) scale(0.95, 1.05);
        ;
    }

    100% {
        transform: translateY(2px) scale(1.05, 0.95);
        ;
    }
}

@keyframes bob2 {
    0% {
        transform: translateY(2.5px) scale(1.05, 0.95);
        ;
    }

    50% {
        transform: translateY(-2.5px) scale(0.95, 1.05);
        ;
    }

    100% {
        transform: translateY(2.5px) scale(1.05, 0.95);
        ;
    }
}

.box1 {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
}

.box2 {
    font-family: 'Herculanum';
    border-width: 12px;
    border-style: groove;
    border-color: rgba(172, 255, 233, 0.2);
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    color: rgb(214, 202, 189);
}

.subsequent {
    margin-top: 100px;
}

.subsequent p, .fatcat p {
    text-align: center;
}

.chickenpenguin {
    text-align: center;
    font-size: 40px;
}

@media (max-width: 750px) {
    .subsequent {
        margin-top: 30px;
    }

    .bob {
        animation: bob2 3s infinite linear;
    }

    .bigbob {
        animation: bigbob2 3s infinite linear;
    }

    .grilledcheese img {
        width: 250px;
    }
}
</style>
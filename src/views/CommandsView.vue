<template>
    <div class="header">
        <img class="diet" src="../assets/imgs/diet.png">
        <h1 class="commandlisttext">Command List</h1>
    </div>

    <div class="body-container text-white">
        <div class="command-section">
            <div class="body-divider">Dino Market</div>
            <CommandCard name="!market" syntax="!market [page]">Displays a page of purchaseable dinosaurs. The first page is
                displayed by default, and other pages can accessed by page number. The market updates every hour so if a dinosaur you wanted to purchase isn't there, if you wait it will refresh. Once you purchase a dinosaur from the market, nobody else can. You can see it be removed.</CommandCard>
            <CommandCard name="!preview" syntax="!preview [dino type]">Displays the stats of a dinosaur that's in the <soup>!market</soup> using its
                numerical
                ID found to the left of it's name. (e.g. 1 for female microraptor.)</CommandCard>
            <CommandCard name="!purchase" syntax="!purchase [dino] [name]">Purchases a dinosaur from <soup>!market</soup> with
                the specified ID. See below;
                

                <img src="../assets/imgs/screenshots/markethelp.png">

                (e.g. <soup>!purchase 1 cindy</soup> for 💵1.2k) You will use this name to identify your dinosaur once it's bought, but don't worry. You can rename your dinosaurs.
            </CommandCard>
        </div>

<div class="command-section">
    <div class= "body-divider">Combat</div>
    <CommandCard name="!attack" syntax="!attack [user]">Sends your army to attack the specified user. If they have a defence then your dinosaurs will clash until one party wins or until the fight is over. If you win the clash and defeat their defences your dinosaurs will start looting their farm and businesses.</CommandCard>

            <CommandCard name="!army" syntax="!army [@user]">Shows your dinosaur army or the army of the person you mentioned. Armies are used to launch attacks with !attack</CommandCard>

            <CommandCard name="!defense" syntax="!defense [@user]">Shows your dinosaur defenses or the defense of the person you mentioned. Defense is used to protect agains armies when users <soup>!attack</soup> you.</CommandCard>

            <CommandCard name="!enlist" syntax="!enlist [dino dino dino...]">Enlists the selected dinosaurs into your army. (you can use the dinosaur id). <br><br> Use <soup>!army</soup> to view your army.</CommandCard>

            <CommandCard name="!retire" syntax="!retire [dino dino dino...]">Retires the selected dinosaurs (you can use the dinosaur id).</CommandCard>

            <CommandCard name="!defend" syntax="!defend [dino dino dino..]">Selected dinosaurs will leave your defense if they're in it, or join if they're not.</CommandCard>
        </div>

        <div class="command-section">
            <div class="body-divider">Dino Management</div>
            
            <CommandCard name="!display" syntax="!display [dinosaur]">This is a risky command. What it does is shows a group of people your dinosaur for a fee. This is risk as your dinosaurs may escape. If they ecape they have a chance of returning or running away for good. The dinosaurs with high damage are likely to cause some casualties and cost you.

                <img src="../assets/imgs/screenshots/display.png" style = "width: 500px;">

            </CommandCard>
            
            <CommandCard name="!train" syntax="!train [dinosaur] [stat]">Will upgrade the level of a stat, greatly increasing it. This requires XP which can be collected by using your dinosaurs.</CommandCard>
            <CommandCard name="!view" syntax="!view [dino]">Displays the stats of a dinosaur you own using the dinosaur's ID or name. See dinosaur IDs in <soup>!dinos</soup>.</CommandCard>
            <CommandCard name="!dinos" syntax="!dinos [user]">Lists the dinosaurs owned by a user. The <soup>[user]</soup>
                parameter is optional and if none is specified, your own dinosaurs will be displayed.</CommandCard>
            <CommandCard name="!eggs" syntax="!eggs [user]">Lists the eggs owned by a user. The <soup>[user]</soup>
                parameter is
                optional and if none is specified, your own eggs will be displayed.</CommandCard>
            <CommandCard name="!breed" syntax="!breed [dino1] [dino2] [baby name]">Breed two of your dinosaurs. Use <soup>[dino1]</soup>
                and <soup>[dino2]</soup> to specify the names of the dinosaur. <soup>[baby name]</soup> will be the name of your dinosaur which you can change at any time with <soup>!rename</soup>. <br><br>The genetics of these two dinosaurs will mix, sometimes there will be mutations and the dinosaur can be worse or better than either parent, this is slightly rare. The colors of the dinosaurs will also mix, and the mutation rule applies for this too. If you want a dinosaur of a specific color what you must do is continue the bloodline of dinosaurs that look like that specific dinosaur. This applies also for specific dinos that have good stats for that species. <br><br>
                If you want to compare your dinosaurs genetics you can use <soup>!preview [any dinosaur in the market] </soup>
                <img src="../assets/imgs/screenshots/breedimg.png" style = "width: 200px;">
                The right side of the stats will always be the default or average stats of that dinosaur species.
            </CommandCard>
            <CommandCard name="!hatch" syntax="!hatch <egg>">Hatches an egg from your <soup>!eggs</soup></CommandCard>

            <CommandCard name="!changename" syntax="!changename/rename [dino] [newname]">Rename a dinosaur to the specified [newname].</CommandCard>
            <CommandCard name="!picture" syntax="!picture">Toggle visibility of dinosaur's picture when viewing.
            </CommandCard>

            <CommandCard name="!dinocolors" syntax="!dinocolors [dino]">Lists your dinosaur's colors. Use <soup>[dino]
                </soup> to
                specify the name of the dinosaur.</CommandCard>

        </div>

        <div class="command-section">
            <div class="body-divider">Shop</div>
                <CommandCard name="!shop (items)" syntax="!shop [substances, farm, food, traps]">Shows you whichever shop category you specified, or the substance shop if there's none specified.</CommandCard>
                <CommandCard name="!buy" syntax="!buy [id] [amount]">Purchases the amount of the specified item from any of the <soup>!shops</soup></CommandCard>
                <CommandCard name="!sell" syntax="!sell [id] [amount]">Sells the amount of the specified item to any of the <soup>!shops</soup></CommandCard>
        </div>

        <div class="command-section">
            <div class="body-divider">Park</div>
                <CommandCard name="!park" syntax="!park [@user]">Shows the park of the user mentioned or if there's none it shows your park</CommandCard>
                <CommandCard name="!park status" syntax="!park status">Gives you a comparison of your park's level relative to all of the possible levels.
                <img src="../assets/imgs/screenshots/status.png">
                In this shortened screenshot you can see what how your park level is displayed by making it bold. In this case my park level is 10.
                </CommandCard>
                <CommandCard name="!improve" syntax="!improve [park, yard, fence or farm]">This upgrades an aspect of your park. You need to upgrade your park level first as the other levels can not exceed this level.<br><br>
                    <bold style="font-size: 30px;">Upgrading different things unlocks different benefits.</bold><br>
                <ul>
                    <li>- upgrading your farm allows you to plant more crops</li>
                    <li>- upgrading your fence will fend off attacks from dinos under the level</li>
                    <li>- upgrading your park allows you to have more attractions</li>
                    <li>- and upgrading your yard allows you more traps to fend off dinos</li>
                </ul>
            </CommandCard>
                <CommandCard name="!farm" syntax="!farm [@user]">Shows your farm or the farm of the user specified. Farms are used to grow crops to sell for 💵💵, it's a good way to get a lot of money.</CommandCard>
                <CommandCard name="!plant" syntax="!plant [crop] [amount]">Plants the specified amount of the crop in your farm.</CommandCard>
                <CommandCard name="!harvest" syntax="!harvest [crop] [amount]">Harvests the specified amount of the crop in your farm.</CommandCard>
                <CommandCard name="!cure" syntax="!cure [amount]">This command is only used for turning harvested weed into smokable or sellable "bud".</CommandCard>
        </div>

       
        <div class="command-section">
            <div class="body-divider">Attractions</div>
            <CommandCard :sunscreen="true" name="What are attractions?">Attractions are businesses that you can purchase. Once an attraction is purchased in DinoBot it is refered to as a business. These businesses are one of the main ways to make money in DinoBot so if you haven't invested in a couple, you should start!
                <img src="../assets/imgs/screenshots/attractions.png" style="width: 200px;">
        </CommandCard>
            <CommandCard name="!attractions" syntax="!attractions">Shows you the purchasable attractions. If there's a closed lock next to the attraction it means you need to upgrade your park level to the same level as the attraction.</CommandCard>
            <CommandCard name="!businesses " syntax="!businesses [@user]">Shows yours (or the specified users) purchased attractions </CommandCard>
            <CommandCard name="!upgrade " syntax="!upgrade [index]">Upgrades the business, increasing it's level, rating and money output.</CommandCard>
            <CommandCard name="!acquire" syntax="!acquire [attraction id]">Acquires the specified attraction from the list of <soup>attractions</soup></CommandCard>
            <CommandCard name="!liquidate " syntax="!liquidate [id]">Liquidates one of your attractions with the specified ID. From this you get a percentage of what the business was worth. If your business is a 0 rating business, you will need to upgrade it to increase the rating otherwise you will not receive anything.</CommandCard>
            <CommandCard name="!collect " syntax="!collect [id]">Collects the money from the business. This comes with the risk of something going wrong which can decrease your rating and cost you some money to repair before you can collect again.</CommandCard>
            <CommandCard name="!repair " syntax="!repair [id]">Repairs one of your businesses in order to start collecting revenue again.</CommandCard>
            
        </div>

        <div class="command-section">
            <div class="body-divider">Substances</div>
            <CommandCard :sunscreen="true" name="How substances work">When your dinosaur ingests a substance, the buffs will automatically apply to your dinosaurs stats. Check your dinosaurs buffs by using <soup>!buffs [dinosaur]</soup>.
            </CommandCard>
            <CommandCard name="!substances" syntax="!substances">Displays your substances. Shop for more using <soup>!shop
                </soup>.</CommandCard>
            <CommandCard name="!shop" syntax="!shop">Lists substances that can be bought and fed to dinosaurs.</CommandCard>
            <CommandCard name="!buy" syntax="!buy [substance] [amount]">Buys a substance from <soup>!shop</soup> with its
                name
                or numerical ID (e.g. 0 for coffee.)</CommandCard>
            <CommandCard name="!dose" syntax="!dose [dino] [substance] [amount]">Feeds your dinosaur a substance. See
                dinosaur
                names and IDs in <soup>!dinos</soup>. See substance names and IDs in <soup>!substances</soup>.</CommandCard>
            
        </div>
    </div>
</template>

<script setup>
import CommandCard from './CommandCard.vue';

</script>
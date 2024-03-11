import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ShopView from '../views/ShopView.vue'
import CommandsView from '../views/CommandsView.vue'

const routes = [
    {
        path: '/about',
        name: 'About',
        component: AboutView
    },
    {
        path: '/shop',
        name: 'Shop',
        component: ShopView
    },
    {
        path: '/commands',
        name: 'Commands',
        component: CommandsView
    },
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/:route',
        name: 'MatchAll',
        component: HomeView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

function generateRandomString() {
    let randomString = '';
    const randomNumber = Math.floor(Math.random() * 20);

    for (let i = 0; i < 40 + randomNumber; i++) {
        randomString += String.fromCharCode(65 + Math.floor(Math.random() * 20));
    }

    return randomString;
}

router.beforeEach(async (to, _, next) => {
    var oauth_state
    
    try {
        oauth_state = JSON.parse(localStorage.getItem('oauth-state'));
    } catch (error) {
        oauth_state = null
    }

    const code = to.query.code

    if (oauth_state?.avatar) { // TODO: later check for expiration here
        to.meta.user = oauth_state
    }
    else if (code) { //TODO: make sure it doesn't break when code is invalid
        try {

            // TODO: send code to the backend instead of directly querying Discord here
            const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
                method: 'POST',
                body: new URLSearchParams({
                    client_id: '791131539140247588',
                    client_secret: 'bqAww77BWB8O8hs1iq6QUQustdV6wR5B', // this is NOT secure, we'll want a .env file later
                    code,
                    grant_type: 'authorization_code',
                    redirect_uri: 'http://localhost:5173',
                    scope: 'identify',
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            if (tokenResponse.status === 200) {
                const tokenResponseData = await tokenResponse.json();

                const userResponse = await fetch('https://discord.com/api/users/@me', {
                    headers: {
                        authorization: `${tokenResponseData.token_type} ${tokenResponseData.access_token}`,
                    },
                });
                const userResponseData = await userResponse.json()

                to.meta.user = userResponseData;

                const randomString = generateRandomString(); // TODO: use bearer token instead of this

                /*
                await fetch('https://www.pangea.directory:3000/oauth_state?token=' + randomString, {
                    method: 'POST',
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userResponseData),
                })
                */

                localStorage.setItem('oauth-state', JSON.stringify({
                    ...userResponseData,
                    token: randomString
                }));
            } else {
                console.log('Exiting gracefully from failed token response')
            }
        } catch (error) {
            console.error(error);
        }
    }

    to.meta.loaded = true
    next();
});

export default router
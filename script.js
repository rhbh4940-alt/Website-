/* =========================
FINAL ADVANCED script.js
VELRIONA HUB
========================= */

document.addEventListener('DOMContentLoaded', () => {

    /* =========================
    SIDEBAR SYSTEM
    ========================= */

    const menuToggle =
    document.getElementById('menuToggle');

    const sidebarMenu =
    document.getElementById('sidebarMenu');

    const sidebarOverlay =
    document.getElementById('sidebarOverlay');

    const closeSidebar =
    document.getElementById('closeSidebar');

    if(menuToggle){

        menuToggle.addEventListener('click', () => {

            sidebarMenu.classList.add('active');

            sidebarOverlay.classList.add('active');

        });

    }

    if(closeSidebar){

        closeSidebar.addEventListener('click', closeSidebarMenu);

    }

    if(sidebarOverlay){

        sidebarOverlay.addEventListener('click', closeSidebarMenu);

    }

    function closeSidebarMenu(){

        sidebarMenu.classList.remove('active');

        sidebarOverlay.classList.remove('active');

    }

    /* =========================
    DARK MODE SYSTEM
    ========================= */

    const darkModeToggle =
    document.getElementById('darkModeToggle');

    if(localStorage.getItem('velrionaDarkMode') === 'enabled'){

        document.body.classList.add('dark-mode');

    }

    if(darkModeToggle){

        darkModeToggle.addEventListener('click', () => {

            document.body.classList.toggle('dark-mode');

            if(document.body.classList.contains('dark-mode')){

                localStorage.setItem(
                    'velrionaDarkMode',
                    'enabled'
                );

            }

            else{

                localStorage.setItem(
                    'velrionaDarkMode',
                    'disabled'
                );

            }

        });

    }

    /* =========================
    SEARCH SYSTEM
    ========================= */

    const searchInput =
    document.getElementById('searchInput');

    const productCards =
    document.querySelectorAll('.product-card');

    if(searchInput){

        searchInput.addEventListener('keyup', () => {

            const value =
            searchInput.value.toLowerCase();

            productCards.forEach(card => {

                const productName =
                card.dataset.name.toLowerCase();

                if(productName.includes(value)){

                    card.style.display = 'block';

                }

                else{

                    card.style.display = 'none';

                }

            });

        });

    }

    /* =========================
    HERO BUTTON
    ========================= */

    const heroBtn =
    document.querySelector('.hero-btn');

    if(heroBtn){

        heroBtn.addEventListener('click', () => {

            window.scrollTo({

                top:700,
                behavior:'smooth'

            });

        });

    }

    /* =========================
    PRODUCT IMAGE GALLERY
    ========================= */

    const thumbnails =
    document.querySelectorAll('.thumb');

    thumbnails.forEach(thumb => {

        thumb.addEventListener('click', () => {

            const productCard =
            thumb.closest('.product-card');

            const mainImage =
            productCard.querySelector('.mainProductImage');

            mainImage.src = thumb.src;

            productCard
            .querySelectorAll('.thumb')
            .forEach(img => {

                img.classList.remove('active-thumb');

            });

            thumb.classList.add('active-thumb');

        });

    });

    /* =========================
    LANGUAGE SYSTEM
    ========================= */

    window.toggleLanguageMenu = function(){

        const dropdown =
        document.getElementById('languageDropdown');

        if(dropdown){

            dropdown.classList.toggle('active');

        }

    }

    window.changeLanguage = function(lang){

        localStorage.setItem(
            'velrionaLanguage',
            lang
        );

        alert(
            '✅ Language Updated Successfully'
        );

    }

    /* =========================
    FONT STYLE SYSTEM
    ========================= */

    window.toggleFontMenu = function(){

        const dropdown =
        document.getElementById('fontDropdown');

        if(dropdown){

            dropdown.classList.toggle('active');

        }

    }

    window.setFontStyle = function(style){

        document.body.classList.remove(
            'font-bold',
            'font-italic'
        );

        if(style === 'bold'){

            document.body.classList.add(
                'font-bold'
            );

        }

        else if(style === 'italic'){

            document.body.classList.add(
                'font-italic'
            );

        }

        localStorage.setItem(
            'velrionaFontStyle',
            style
        );

    }

    const savedFont =
    localStorage.getItem(
        'velrionaFontStyle'
    );

    if(savedFont === 'bold'){

        document.body.classList.add(
            'font-bold'
        );

    }

    if(savedFont === 'italic'){

        document.body.classList.add(
            'font-italic'
        );

    }

    /* =========================
    NOTIFICATION MENU
    ========================= */

    window.toggleNotificationMenu = function(){

        const dropdown =
        document.getElementById(
            'notificationDropdown'
        );

        if(dropdown){

            dropdown.classList.toggle(
                'active'
            );

        }

    }

    /* =========================
    ACCOUNT COMING SOON
    ========================= */

    const accountItem =
    document.querySelectorAll('.setting-item');

    accountItem.forEach(item => {

        if(item.innerText.includes('Account')){

            item.addEventListener('click', () => {

                let existingBox =
                document.getElementById(
                    'comingSoonBox'
                );

                if(existingBox){

                    existingBox.remove();

                    return;

                }

                const comingSoon =
                document.createElement('div');

                comingSoon.id =
                'comingSoonBox';

                comingSoon.innerHTML = `
                <div style="
                background:#0f172a;
                color:white;
                padding:18px;
                border-radius:18px;
                margin-top:12px;
                line-height:1.7;
                box-shadow:0 10px 25px rgba(0,0,0,0.2);
                animation:fadeIn 0.3s ease;
                ">

                <h3 style="
                font-size:18px;
                margin-bottom:8px;
                color:#60a5fa;
                ">
                🚀 Account System
                </h3>

                <p style="
                font-size:14px;
                color:#d1d5db;
                ">
                Login & profile features are
                coming soon in future updates.
                Stay connected with Velriona Hub.
                </p>

                </div>
                `;

                item.insertAdjacentElement(
                    'afterend',
                    comingSoon
                );

            });

        }

    });

    /* =========================
    NOTIFICATION POPUP
    ========================= */

    const popup =
    document.getElementById(
        'notificationPopup'
    );

    const notificationStatus =
    localStorage.getItem(
        'velrionaNotification'
    );

    if(notificationStatus !== 'enabled'){

        setTimeout(() => {

            if(popup){

                popup.style.display = 'flex';

            }

        },1500);

    }

    /* =========================
    ACCEPT NOTIFICATIONS
    ========================= */

    window.acceptNotifications = function(){

        localStorage.setItem(
            'velrionaNotification',
            'enabled'
        );

        if(popup){

            popup.style.display = 'none';

        }

        alert(
            '✅ Notifications Enabled Successfully'
        );

        /* FAKE REMINDER */

        setTimeout(() => {

            alert(
                '🔔 AAJ CHECK NAHI KIYE'
            );

        },86400000);

    }

    /* =========================
    CLOSE NOTIFICATION POPUP
    ========================= */

    window.closeNotificationPopup = function(){

        if(popup){

            popup.style.display = 'none';

        }

    }

    /* =========================
    ENABLE / DISABLE BUTTONS
    ========================= */

    window.enableNotifications = function(){

        localStorage.setItem(
            'velrionaNotification',
            'enabled'
        );

        alert(
            '✅ Notifications Turned ON'
        );

    }

    window.disableNotifications = function(){

        localStorage.setItem(
            'velrionaNotification',
            'disabled'
        );

        alert(
            '❌ Notifications Turned OFF'
        );

    }

    /* =========================
    SMOOTH SCROLL
    ========================= */

    document.querySelectorAll('a')
    .forEach(anchor => {

        anchor.addEventListener('click', function(e){

            const href =
            this.getAttribute('href');

            if(href.startsWith('#')){

                e.preventDefault();

                document.querySelector(href)
                .scrollIntoView({

                    behavior:'smooth'

                });

            }

        });

    });

    /* =========================
    REMOVE BLUE TAP EFFECT
    ========================= */

    document.querySelectorAll(
        'button,a,input,div'
    ).forEach(item => {

        item.style.outline = 'none';

        item.style.boxShadow = 'none';

    });

    /* =========================
    CONSOLE MESSAGE
    ========================= */

    console.log(
        '✅ Velriona Hub Loaded Successfully'
    );
/* =========================
MODERN CHATBOT
========================= */

const chatbotToggle =
document.getElementById("chatbotToggle");

const chatbotBox =
document.getElementById("chatbotBox");

const closeChatbot =
document.getElementById("closeChatbot");

const chatMessages =
document.getElementById("chatMessages");

const chatInput =
document.getElementById("chatInput");

const sendChat =
document.getElementById("sendChat");

if(chatbotToggle){

chatbotToggle.onclick = ()=>{

chatbotBox.classList.add("active");

};

}

if(closeChatbot){

closeChatbot.onclick = ()=>{

chatbotBox.classList.remove("active");

};

}

function addBotMessage(text){

const msg =
document.createElement("div");

msg.className =
"bot-message";

msg.innerText =
text;

chatMessages.appendChild(msg);

chatMessages.scrollTop =
chatMessages.scrollHeight;

}

function addUserMessage(text){

const msg =
document.createElement("div");

msg.className =
"user-message";

msg.innerText =
text;

chatMessages.appendChild(msg);

chatMessages.scrollTop =
chatMessages.scrollHeight;

}

function getReply(message){

message =
message.toLowerCase();

if(
message.includes("fan")
||
message.includes("summer")
||
message.includes("cooling")
){

return "🌬️ I recommend TSEL Rechargeable Hand Fan. It's portable, rechargeable and perfect for summer.";

}

if(
message.includes("speaker")
||
message.includes("music")
||
message.includes("bass")
){

return "🔊 TRIGGR Horizon 16 is a great option with strong bass and Bluetooth connectivity.";

}

if(
message.includes("buds")
||
message.includes("earbuds")
||
message.includes("calling")
){

return "🎧 realme Buds T110 is a solid choice for calling, music and daily use.";

}

if(
message.includes("best")
||
message.includes("deal")
){

return "🔥 Tell me your requirement and I'll suggest the most suitable deal available.";

}

return "👋 Please tell me what kind of product you're looking for. I can help with earbuds, speakers and cooling products.";

}

function sendMessage(){

const message =
chatInput.value.trim();

if(!message) return;

addUserMessage(message);

chatInput.value = "";

setTimeout(()=>{

addBotMessage(
getReply(message)
);

},500);

}

if(sendChat){

sendChat.addEventListener(
"click",
sendMessage
);

}

if(chatInput){

chatInput.addEventListener(
"keypress",
function(e){

if(e.key === "Enter"){

sendMessage();

}

});

}

document.querySelectorAll(".quick-btn")
.forEach(btn=>{

btn.addEventListener("click",()=>{

const text =
btn.innerText;

let reply = "";

if(text.includes("Earbuds")){

reply =
"🎧 I recommend realme Buds T110.";

}

else if(text.includes("Speakers")){

reply =
"🔊 TRIGGR Horizon 16 is a great speaker choice.";

}

else if(text.includes("Cooling")){

reply =
"🌬️ TSEL Rechargeable Hand Fan is perfect for summer.";

}

else{

reply =
"🔥 TSEL Rechargeable Hand Fan currently offers excellent value.";

}

addBotMessage(reply);

});

});

});

// Sideabar
const menuItems = document.querySelectorAll('.menu-item');
const inputs = document.querySelectorAll('button');

// Messages
const messagesNotification = document.querySelector('#message-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message')
const messageSearch = document.querySelector('#message-search');    

// Theme

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalets = document.querySelectorAll('.choose-color span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

// Remove active class from all menu items
const changeActiveItem = () =>{
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', ()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').
            style.display = 'none';
        } else{
            document.querySelector('.notification-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').
            style.display = 'none';
        }
    })
});
// Messages

messagesNotification.addEventListener('click', () => {
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(()=>{
        messages.style.boxShadow = 'none';
    }, 2000);
})
// search chat
   
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex'
        }else{
            chat.style.display = 'none'
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage);

// Theme/Display Customization

// const openThemeModal = () =>{
//     themeModal.style.display = 'grid';
// }
// opens model
theme.addEventListener('click', () =>{
    themeModal.style.display = 'grid';
});

// close model
// const closeThemeModel = 

themeModal.addEventListener('click', (e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    };
});

// ===================Font size======================

// remove active class from spans or font size selectors
const removeSelectors = ()=>{
    fontSizes.forEach(size=>{
        size.classList.remove('active');
    })
}
const removeSelectors2 = () => {
    colorPalets.forEach(color => {
        color.classList.remove('active');
    })
}
fontSizes.forEach(size => {
    size.addEventListener('click', ()=>{
        removeSelectors();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }
        else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }
        // change font size of the html element
        document.querySelector('html').style.fontSize = fontSize;
    })
     
});
colorPalets.forEach(color =>{
    color.addEventListener('click', ()=>{
        removeSelectors2();
        let primaryHue;
        color.classList.toggle('active');
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
         else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
         else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
         else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        root.style.setProperty('--color-primary-Hue', primaryHue);
    })
});

// Background color is changing
let darkColorLightness;
let lightColorLightness;
let whiteColorLightness;
const chooseColor = ()=>{
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}
bg1.addEventListener('click', ()=>{
    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    window.location.reload();
});
bg2.addEventListener('click', ()=>{
    darkColorLightness='95%';
    lightColorLightness='15%';
    whiteColorLightness = '20%';
    bg2.classList.add('active');
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    chooseColor();
});
bg3.addEventListener('click', ()=>{
    darkColorLightness = '95%';
    lightColorLightness = '0%';
    whiteColorLightness = '10%';
    bg3.classList.add('active');
    bg2.classList.remove('active');
    bg1.classList.remove('active');
    chooseColor();
});
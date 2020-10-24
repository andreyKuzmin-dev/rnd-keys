<template><div class='header-component-container'>
    <div class='header_background-container'>
        <div class='header_background background-border'></div>
    </div>
    <div class='header_layout'>
        <div class='header_content-container'>
        <div class='header_logo'>
            <p class='logo pointer push'>MEGARAZDACHA</p>
        </div>
        <div class='header_menu'>
            <p class='menu-button pointer push'>Все раздачи</p>
            <p class='menu-button pointer push'>Мои раздачи</p>
            <p class='menu-button pointer push'>Мои участия</p>
        </div>
        <div class='header_user-info'>
            <div class='user-info pointer push'>   
                <img class='user-avatar' src='test-avatar.jpg'/> 
                <div class='user-info user-avatar-border'></div>
            </div>
            <div class='user-info pointer push'>
                <img class='user-admin-chat' src='messages.svg'>    
            </div>
            <div class='user-info pointer push'>
                <img class='user-messages' src='gifts.svg'>    
            </div>
        </div>
        <div class='header_login'></div>
            <div class='header_distribution-start pointer push'>
                <p class='distribution-start'>Создать раздачу</p>
            </div>
        </div>
    </div>
</div></template>
 
<script src='./header-component.js'/>
<style scoped src='./header-component.css'/>
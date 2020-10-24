<template><div class='search-component-container'>
    <p class='search-title' v-show='searchStr.length === 0'>{{title}}</p>
    <div class='search-button pointer push button-hover' @click='search' v-show='searchStr.length !== 0'>
        <p class='search-title'>Найти</p>
    </div>
    <div class='search-container'>
        <div class='input-container'>
            <input type='text' v-model='searchStr' @keydown='searchByEnter'/>
        </div>
        <img class='search-icon pointer push' @click='search' src='search-icon.svg'/>
    </div>

</div></template>
 
<script src='./search-component.js'/>
<style scoped src='./search-component.css'/>
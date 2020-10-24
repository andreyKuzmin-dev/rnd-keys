<template><div class='select-component-container'>
    <p class='select-title'>{{title}}</p>
    <div class='select-container'>
        <div class='select pointer' @click='openOptions'>
            {{selected}}
        </div>
        <img class='select-icon' src='select-icon.svg' :style='`transform: rotate(${showOptions ? 180 : 0}deg);`'/>
        <div class='options' v-show='showOptions'>
            <div class='option-container pointer' @click='selectOption(option)' v-for='option in options' :key='option'>
                <p class='option'>{{option}}</p>
            </div>
        </div>
    </div>
</div></template>
 
<script src='./select-component.js'/>
<style scoped src='./select-component.css'/>
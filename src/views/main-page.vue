<template><div class='main-page-container'>

    <div class='main-page-header'>
        <header-component></header-component>
    </div>

    <div class='main-page-body'>
        <div class='body-title-container'>
            <div class='layout-1200'>
                <div class='body-title'>
                    <select-component @searchByGame='searchByGame' :title="'Выберите игру'" :options='[1,2,3,4,5,67,23,89,0,7]'/>
                    <search-component @searchByAuthor='searchByAuthor' :title="'Поиск по автору раздачи'"/>
                </div>
            </div>
        </div>
        <div class='layout-1200'>
            <div class='distribution-cards'>
                <div class='distribution-card-fake-margin' v-for='item in 10' :key='item'>
                    <distribution-card></distribution-card>
                </div>
            </div>
            <div class='more-button pointer push button-hover'>
                <p class='more-button-text'>
                    Показать ещё
                </p>
            </div>
        </div>
    </div>

    <div class='main-page-footer'>
        <footer-component :header='true'></footer-component>
    </div>

    <div class='scroll-to-top-containter pointer push' v-show='showScrollToTop' @click='scrollToTop'>
        <img class='scroll-to-top' src='scroll-to-top.svg'/>
    </div>

</div></template>
 
<script src='./main-page.js'/>
<style scoped src='./main-page.css'/>
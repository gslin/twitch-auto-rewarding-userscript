// ==UserScript==
// @name         Twitch Auto Rewarding
// @namespace    https://github.com/gslin/twitch-auto-rewarding-userscript
// @version      0.20210518.1
// @description  Auto rewarding channel points on Twitch.
// @author       Gea-Suan Lin <gslin@gslin.com>
// @match        https://www.twitch.tv/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => {
        let el = document.querySelector('div.claimable-bonus__icon').closest('button')
        if (el) {
            console.debug('Twitch Auto Rewarding clicked a button.');
            el.click();
        }
    }, 1000);
})();

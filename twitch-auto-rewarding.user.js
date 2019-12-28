// ==UserScript==
// @name         Twitch Auto Rewarding
// @namespace    https://github.com/gslin/twitch-auto-rewarding-userscript
// @version      0.20190228.0
// @description  Auto rewarding on Twitch.
// @author       Gea-Suan Lin <gslin@gslin.com>
// @match        https://www.twitch.tv/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => {
        let el = document.querySelector('button.tw-button.tw-button--success.tw-interactive');
        if (el) {
            console.debug('Twitch Auto Rewarding clicked a button.');
            el.click();
        }
    }, 1000);
})();

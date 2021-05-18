// ==UserScript==
// @name         Twitch Auto Rewarding
// @namespace    https://github.com/gslin/twitch-auto-rewarding-userscript
// @version      0.20210518.0
// @description  Auto rewarding channel points on Twitch.
// @author       Gea-Suan Lin <gslin@gslin.com>
// @match        https://www.twitch.tv/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => {
        let el = document.querySelector('div[data-test-selector="community-points-summary"] button[class^="ScCoreButton-sc-"] svg').closest('button')
        if (el) {
            console.debug('Twitch Auto Rewarding clicked a button.');
            el.click();
        }
    }, 1000);
})();

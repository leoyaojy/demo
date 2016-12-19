/**
 * 产生一个介于m~n之间的随机数
 * @param m
 * @param n
 * @returns {number}
 */
function random(m, n) {
    return ~~(Math.random() * (n - m + 1) + m);
}
/**
 * 生成随机rgb颜色
 * @returns {string}
 */
function randomColor() {
    return "rgb(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")";
}

function randomRGBA() {
    return "rgba(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + "," + Math.random().toFixed(2) + ")";
}

/**
 * 获取dom元素样式
 * @param obj:dom元素
 * @param attr:属性
 * @returns {*}
 */
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}
/**
 * requestAnimationFrame兼容写法
 */
var RAF = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
            window.setTimeout(callback, 1000 / 60);
        }
})();

var $ = function (selector) {
    return document.querySelector(selector);
};
var $$ = function (selector) {
    return document.querySelectorAll(selector);
};
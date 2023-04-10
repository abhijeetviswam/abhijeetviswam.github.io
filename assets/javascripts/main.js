---
---

/*!
 * Basically Basic Jekyll Theme 1.4.4
 * Copyright 2017-2018 Michael Rose - mademistakes | @mmistakes
 * Free for personal and commercial use under the MIT license
 * https://github.com/mmistakes/jekyll-theme-basically-basic/blob/master/LICENSE
*/

var menuItems = document.querySelectorAll('#sidebar li');

// Get vendor transition property
var docElemStyle = document.documentElement.style;
var transitionProp = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';

// Animate sidebar menu items
function animateMenuItems() {
  for (var i = 0; i < menuItems.length; i++) {
    var item = menuItems[i];
    // Stagger transition with transitionDelay
    item.style[transitionProp + 'Delay'] = (i * 75) + 'ms';
    item.classList.toggle('is--moved');
  }
};

var myWrapper = document.querySelector('.wrapper');
var myMenu = document.querySelector('.sidebar');
var myToggle = document.querySelector('.toggle');
var myInitialContent = document.querySelector('.initial-content');
var mySearchContent = document.querySelector('.search-content');
var mySearchToggle = document.querySelector('.search-toggle');
var myDarkModeIcon = document.querySelector('.darkmode-icon');
var myDarkModeToggle = document.querySelector('.darkmode-toggle');
var myDarkModeIconLight = document.querySelector('#toggle-light');
var myDarkModeIconDark = document.querySelector('#toggle-dark');
// var myDarkModeIcon = document.querySelector('.darkmode-icon');

if (typeof DarkReader === 'undefined') {
    // Don't display light dark toggle if darkreader is not reachable. i.e. no internet
    myDarkModeToggle.style.visibility = "hidden";
} else if (localStorage.getItem('color-scheme') === 'dark') {
    myDarkModeIconDark.style.opacity = 1;
    myDarkModeIconLight.style.opacity = 0.3;
} else {
    myDarkModeIconDark.style.opacity = 0.3;
    myDarkModeIconLight.style.opacity = 1;
}

// Toggle sidebar visibility
function toggleClassMenu() {
  myMenu.classList.add('is--animatable');
  if (!myMenu.classList.contains('is--visible')) {
    myMenu.classList.add('is--visible');
    myToggle.classList.add('open');
    myWrapper.classList.add('is--pushed');
    myDarkModeToggle.classList.add('darkmode-switch-is-visible');
  } else {
    myMenu.classList.remove('is--visible');
    myToggle.classList.remove('open');
    myWrapper.classList.remove('is--pushed');
    myDarkModeToggle.classList.remove('darkmode-switch-is-visible');
  }
}

// Animation smoother
function OnTransitionEnd() {
  myMenu.classList.remove('is--animatable');
}

myMenu.addEventListener('transitionend', OnTransitionEnd, false);
myToggle.addEventListener('click', function () {
  toggleClassMenu();
  animateMenuItems();
}, false);
myMenu.addEventListener('click', function () {
  toggleClassMenu();
  animateMenuItems();
}, false);
if (mySearchToggle) {
  mySearchToggle.addEventListener('click', function () {
    toggleClassSearch();
  }, false);
}
// Toggle to dark mode with button click
myDarkModeToggle.addEventListener('click', function () {
  toggleDarkMode();
}, false);
// Automatically switch to dark mode based on OS preference
const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
darkModePreference.addEventListener("change", e => e.matches && enableDarkMode());
const lightModePreference = window.matchMedia("(prefers-color-scheme: light)");
lightModePreference.addEventListener("change", e => e.matches && disableDarkMode());


// Toggle search input and content visibility
function toggleClassSearch() {
  mySearchContent.classList.toggle('is--visible');
  myInitialContent.classList.toggle('is--hidden');
  setTimeout(function () {
    document.querySelector('.search-content input').focus();
  }, 400);
}

// Toggle dark mode
function toggleDarkMode() {
    let currentColorScheme = localStorage.getItem('color-scheme')

    if (currentColorScheme === null) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            enableDarkMode();
        }
    } else if (currentColorScheme === 'dark') {
        enableDarkMode();
    }

    if (localStorage.getItem('color-scheme') === 'light') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

function enableDarkMode() {
    DarkReader.setFetchMethod(window.fetch);
    DarkReader.enable({contrast: 120});
    localStorage.setItem('color-scheme', 'dark');
    myDarkModeIconDark.style.opacity = 1;
    myDarkModeIconLight.style.opacity = 0.3;
    // // Sun icon in dark mode
    // myDarkModeIcon.innerHTML = '<svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7,12c0,2.8,2.2,5,5,5s5-2.2,5-5s-2.2-5-5-5S7,9.2,7,12z M12,9c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S10.3,9,12,9z"/><path d="M13,5V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v2c0,0.6,0.4,1,1,1S13,5.6,13,5z"/><path d="M19.1,4.9c-0.4-0.4-1-0.4-1.4,0l-1.4,1.4c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4   C19.5,6,19.5,5.3,19.1,4.9z"/><path d="M21,11h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1S21.6,11,21,11z"/><path d="M17.7,16.2c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4   L17.7,16.2z"/><path d="M11,19v2c0,0.6,0.4,1,1,1s1-0.4,1-1v-2c0-0.6-0.4-1-1-1S11,18.4,11,19z"/><path d="M4.9,19.1c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-1.4,1.4   C4.5,18,4.5,18.7,4.9,19.1z"/><path d="M2,12c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1s-0.4-1-1-1H3C2.4,11,2,11.4,2,12z"/><path d="M6.3,4.9c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l1.4,1.4C6.5,8,6.8,8.1,7.1,8.1S7.6,8,7.8,7.8c0.4-0.4,0.4-1,0-1.4L6.3,4.9z"/></svg>'
}

function disableDarkMode() {
    DarkReader.disable();
    localStorage.setItem('color-scheme', 'light');
    myDarkModeIconDark.style.opacity = 0.3;
    myDarkModeIconLight.style.opacity = 1;
    // // Moon icon in light mode
    // myDarkModeIcon.innerHTML = '<svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.3,4.9c0.4-0.2,0.6-0.7,0.5-1.1S12.2,3,11.7,3C6.8,3.1,3,7.1,3,12c0,5,4,9,9,9c3.8,0,7.1-2.4,8.4-5.9   c0.2-0.4,0-0.9-0.4-1.2c-0.4-0.3-0.9-0.2-1.2,0.1c-1,0.9-2.3,1.4-3.7,1.4c-3.1,0-5.7-2.5-5.7-5.7C9.4,7.8,10.5,5.9,12.3,4.9z    M15.1,17.4c0.5,0,1,0,1.4-0.1C15.3,18.4,13.7,19,12,19c-3.9,0-7-3.1-7-7c0-2.5,1.4-4.8,3.5-6c-0.7,1.1-1,2.4-1,3.8   C7.4,14,10.9,17.4,15.1,17.4z"/></svg>'
}

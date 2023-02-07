import {pageLoad} from "./pageLoad";
import { renderHomePage  } from "./home";
import {renderMenuPage} from "./menu";
import {renderContactPage} from "./contact";

pageLoad;
console.log("code chal rha hai ");

const tabs = document.querySelectorAll('.tab');
const dataContent = document.querySelectorAll('[data-content]');
console.log(dataContent);
const dataTabs = document.querySelectorAll('[data-tab]');
console.log(dataTabs);
// console.log(tabs);
tabs.forEach((tab) => tab.addEventListener('click' ,(e) =>{
    // container for the tab click 
    // console.log(tab.id);
    
    dataContent.forEach((data) =>{
        data.classList.remove('active');
    })
    let target = document.querySelector(tab.getAttribute('data-tab'));

    // navigation 
    tabs.forEach((tab) =>{
        tab.classList.remove("red");
    })
    // console.log(target.id);
    target.classList.add('active');
    tab.classList.add("red");
}))


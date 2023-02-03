import {pageLoad} from "./pageLoad";
import { renderHomePage  } from "./home";
import {renderMenuPage} from "./menu";


console.log("chal rha hai code");
pageLoad;


const tabs = document.querySelectorAll('.tab');
console.log(tabs);
tabs.forEach((tab) => tab.addEventListener('click' ,(e) =>{
    // container for the tab click 
    if(tab.id == 'menu') {
        renderMenuPage;
        const menu = document.querySelector('.menu');
        menu.classList.add('active');
    }else if(tab.id == 'home'){
        renderHomePage;
        const home = document.querySelector('.home');
        home.classList.add('active');
    }
    else {
        console.log("abhi likhna hai")
    }
    // navigation 
    tabs.forEach((tab) =>{
        tab.classList.remove("red");
    })
    tab.classList.add("red");
}))


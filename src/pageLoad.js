
const pageLoad = (() =>{
    const container = document.querySelector('#content');

    const header = document.createElement('header');
    header.innerHTML = `
            <div class="logo">
               MOUNTAIN VIEW RESTAURANT
           </div>
           <nav>
               <li class="tab red" data-tab = "#home">Home</li>
               <li class="tab" data-tab = "#menu">Menu</li>
               <li class="tab" data-tab = "#contact">Contact Us</li>
           </nav>`;
    
    container.appendChild(header);
})();

export {pageLoad};
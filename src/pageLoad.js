
const pageLoad = (() =>{
    const container = document.querySelector('#content');

    const header = document.createElement('header');
    header.innerHTML = `
            <div class="logo">
               MOUNTAIN VIEW RESTAURANT
           </div>
           <nav>
               <li class="tab active" id="home">Home</li>
               <li class="tab" id="menu">Menu</li>
               <li class="tab" id="contact">Contact Us</li>
           </nav>`;
    
    container.appendChild(header);
})();
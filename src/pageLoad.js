
const pageLoad = (() =>{
    const container = document.querySelector('#content');

    const header = document.createElement('header');
    header.innerHTML = `
    <div class="title">
                   MOUNTAIN VIEW RESTAURANT
               </div>
               <div class="options">
                   <li>Home</li>
                   <li>Menu</li>
                   <li>Contact Us</li>
               </div>`;
    
    container.appendChild(header);
})();
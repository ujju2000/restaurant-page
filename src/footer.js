
const renderFooter = (() =>{

    const container = document.querySelector('#content');

    const footer = document.createElement('footer');
    footer.setAttribute('id','footer');
    footer.classList.add('active');
    footer.innerHTML = `<div>
    &copy; Ujjwal Tarika 
    <a href="https://github.com/ujju2000/restaurant-page" target="_blank"><i class="fa-brands fa-github"></i></a>
    </div>`;
    container.appendChild(footer);
})();

export {renderFooter};
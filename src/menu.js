
const renderMenuPage = (() =>{
    
    const container = document.querySelector('#content');

    const menu  = document.createElement('div');
    menu.classList.add('menu');
    menu.innerHTML = `
    <div class="title">MENU 
    <!-- SYMBOL -->
</div>
<div class="cards">
    <div class="card">
        <div class="left-side">
            <img src="./images/food-1.jpg" alt="food phot">
        </div>
        <div class="right-side">
            <div class="food-heading">
                Burger
                <div class="food-price">
                    $3.00
                </div>
            </div>
            <div class="food-ingredients">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quidem ad nobis vel fuga voluptatem, assumenda ratione necessitatibus magni perspiciatis?
            </div>
        </div>
    </div>
    <div class="card">
        <div class="left-side">
            <img src="./images/food-1.jpg" alt="food phot">
        </div>
        <div class="right-side">
            <div class="food-heading">
                Burger
                <div class="food-price">
                    $3.00
                </div>
            </div>
            <div class="food-ingredients">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quidem ad nobis vel fuga voluptatem, assumenda ratione necessitatibus magni perspiciatis?
            </div>
        </div>
    </div>
    <div class="card">
        <div class="left-side">
            <img src="./images/food-1.jpg" alt="food phot">
        </div>
        <div class="right-side">
            <div class="food-heading">
                Burger
                <div class="food-price">
                    $3.00
                </div>
            </div>
            <div class="food-ingredients">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quidem ad nobis vel fuga voluptatem, assumenda ratione necessitatibus magni perspiciatis?
            </div>
        </div>
    </div>
    <div class="card">
        <div class="left-side">
            <img src="./images/food-1.jpg" alt="food phot">
        </div>
        <div class="right-side">
            <div class="food-heading">
                Burger
                <div class="food-price">
                    $3.00
                </div>
            </div>
            <div class="food-ingredients">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quidem ad nobis vel fuga voluptatem, assumenda ratione necessitatibus magni perspiciatis?
            </div>
        </div>
    </div>
    <div class="card">
        <div class="left-side">
            <img src="./images/food-1.jpg" alt="food phot">
        </div>
        <div class="right-side">
            <div class="food-heading">
                Burger
                <div class="food-price">
                    $3.00
                </div>
            </div>
            <div class="food-ingredients">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quidem ad nobis vel fuga voluptatem, assumenda ratione necessitatibus magni perspiciatis?
            </div>
        </div>
    </div>
    
</div>
    `;
    container.appendChild(menu);
})

export {renderMenuPage};


const renderHomePage = (() =>{
    
    const container = document.querySelector('#content');

    const main = document.createElement('main');
    main.setAttribute('data-content','');
    main.setAttribute('id','home');
    main.classList.add('active');
    main.innerHTML = `<div class="title headline">
                Relax and Recharge with a Meal to Remember at Mountain View Restaurant!
            </div>

            <div class="heading headline">
                Experience breathtaking views of the mountains while indulging in delectable cuisine at Mountain View Restaurant. With its picturesque location and sumptuous menu, this eatery is the perfect place for a memorable dining experience. Savor every bite as you take in the beauty of the surrounding landscape and enjoy the serene ambiance of the restaurant.
            </div>

            <div class="address headline">
                <div class="location">
                    
                    Govind Puram, Ghaziabad
                </div>

                <div class="timeline">
                    <div class="weekdays">
                        WeekDays : 8am - 8pm
                    </div>
                    <div class="weekends">
                        WeekEnds : 10am - 10pm
                    </div>
                </div>
            </div>
        </main>`

        container.appendChild(main);
})();

export {renderHomePage};
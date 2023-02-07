
const renderContactPage = (() => {

    const container = document.querySelector('#content');

    const contact = document.createElement('div');
    contact.setAttribute('data-content', '');
    contact.setAttribute('id', 'contact');
    
    contact.innerHTML = `
    <div class="title">
        CONTACT US
    </div>
    <div class="contact-container">
       <div class="info">
           <div class="name">
               Navjyoti Machinery Store
           </div>
           <div class="hours">
            <div class="weekdays">
                WeekDays : 8am - 8pm
            </div>
            <div class="weekends">
                WeekEnds : 10am - 10pm
            </div>  
           </div>   
           <div class="number">
            8368377522
        </div>
        <div class="message-us">
            <form action="" onsubmit="">
                <span>Full Name</span>
                <input type="text" name="" id="" required>

                <span>Email</span>
                <input type="email" name="" id="" reqiured>

                <span>Type your message</span>
                <textarea name="" id="" cols="30" rows="10">
                    
                </textarea>
            </form>
        </div>
       </div>
        
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.78982708992!2d77.42048335059444!3d28.666011082318292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf04af639e32f%3A0x8f1947ccb82e12ea!2sNavjyoti%20Machinery%20Store!5e0!3m2!1sen!2sin!4v1675752223656!5m2!1sen!2sin" width="600" height="520" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
</div>`

    container.appendChild(contact);
})();


export { renderContactPage };
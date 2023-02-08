
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
                <span class="material-icons">
                location_on
                </span>
               MOUNTAIN VIEW RESTARUANT
           </div>
           <div class="hours">
           <span class="material-icons">
           schedule
           </span>
           <div class="timeline">
           WeekDays : 8am - 8pm
           <br>
           WeekEnds : 10am - 10pm
      </div>   
      </div>
           <div class="number">
            <span class="material-icons">call</span>
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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.1407307696236!2d77.18788545064992!3d30.96655468146577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f81f9d09a374d%3A0x78ad67b6d913f63!2sMountain%20View%20Resort!5e0!3m2!1sen!2sin!4v1675835243435!5m2!1sen!2sin" width="600" height="520" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
</div>`

    container.appendChild(contact);
})();


export { renderContactPage };
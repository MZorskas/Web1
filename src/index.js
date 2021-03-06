import './assets/styles/app.scss'
import './assets/images/all_inclusive-24px.svg'
import './assets/images/crop_free-24px.svg'
import './assets/images/emoji_objects-24px.svg'
import './assets/images/format_list_bulleted-24px.svg'
import './assets/images/home-24px.svg'
import './assets/images/invert_colors-24px.svg'
import './assets/images/map-24px.svg'
import './assets/images/markunread-24px.svg'
import './assets/images/more_horiz-24px.svg'
import './assets/images/navigate_next-24px.svg'
import './assets/images/notification_important-24px.svg'
import './assets/images/notifications-24px.svg'
import './assets/images/offline_bolt-24px.svg'
import './assets/images/search-24px.svg'
import './assets/images/track_changes-24px.svg'
import './assets/images/trending_up-24px.svg'
import './assets/images/portrait1.jpg'
import './assets/images/menu-24px.svg'
import './assets/images/arrow_drop_down_circle-24px.svg'
import './assets/images/radio_button_unchecked-24px.svg'
import './assets/images/portrait2.jpg'
import './assets/images/portrait3.jpg'
import './index.hbs'

document.querySelector('[data-toggle]').addEventListener('click', function (event) {
    let element = event.target.dataset.toggle;
    document.querySelectorAll('[data-' + element + ']').forEach(function (el) {
        el.classList.toggle(element + '-hide');
    })
});
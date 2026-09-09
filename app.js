'use strict';

const english = {
  skip: 'Skip to content', navApartment: 'The apartment', navAmenities: 'Amenities',
  navGallery: 'Gallery', navLocation: 'Location', navBooking: 'Book your stay',
  heroEyebrow: 'YOUR ADDRESS IN VILNIUS', heroTitle1: 'Cozy apartments,', heroTitle2: 'old town',
  heroDescription: 'A cosy apartment on Pylimo Street. For slow weekends, walks through the Old Town, and evenings that are entirely your own.',
  explore: 'Explore the apartment', heroBook: 'Choose your dates', heroLocation: 'Pylimo · Central Vilnius',
  heroPhotoCaption: 'A LITTLE PLACE. A LOVELY STAY.', insetCaption: 'Come in. Make yourself at home.',
  stripLocation: 'In the city centre', stripKitchen: 'Your own kitchenette', stripWifi: 'Complimentary Wi-Fi', stripLift: 'Elevator in the building',
  apartmentEyebrow: 'A SMALL SPACE. A WARM WELCOME.', apartmentTitle1: 'Your little home', apartmentTitle2: 'in the city.',
  apartmentBody1: 'Warm light, a window under the eaves, and the essentials close at hand. Start the morning with coffee, head out to explore Vilnius, and come back to a space of your own.',
  apartmentBody2: 'The apartment is on Pylimo Street, in the former Hotel Aleksa building. A comfortable base for a trip for two or a visit for work.',
  seeAmenities: 'Inside the apartment', kitchenNote: 'Coffee. And no plans.',
  amenitiesEyebrow: 'SETTLE RIGHT IN', amenitiesTitle: 'The comforts of a good stay.', amenitiesIntro: 'The little essentials are already here. All that’s left is to unpack.',
  bedTitle: 'Sofa bed', bedDescription: 'A double sleeping space', kitchenTitle: 'Kitchenette', kitchenDescription: 'Tableware and a kettle',
  wifiTitle: 'Complimentary Wi-Fi', wifiDescription: 'Stay connected', tvTitle: 'Television', tvDescription: 'For a quiet evening',
  bathTitle: 'Private bathroom', bathDescription: 'Your own shower', linenTitle: 'Linen and towels', linenDescription: 'Ready for your arrival',
  coffeeTitle: 'Coffee and tea', coffeeDescription: 'A gentle start to the day', liftTitle: 'Elevator', liftDescription: 'In the apartment building',
  galleryEyebrow: 'TAKE A CLOSER LOOK', galleryTitle: 'A feeling, in the details.', allPhotos: 'All 13 photos',
  galleryApartment: 'Your space', galleryKitchen: 'Kitchenette', galleryBathroom: 'Bathroom', galleryWindow: 'The view', galleryBuilding: 'Building entrance', morePhotos: '+8 photos',
  galleryFootnote: 'Real photographs of the apartment. The full gallery also shows the entrance, elevator and shared areas of the building.',
  locationEyebrow: 'THE CITY IS JUST OUTSIDE', locationTitle1: 'Step out the door.', locationTitle2: 'Step into Vilnius.',
  locationBody: 'Pylimo Street is a convenient starting point for exploring the city. The Old Town, cafés, restaurants, and the bus and train stations are nearby.',
  addressBuilding: 'The former Hotel Aleksa building', openMap: 'Find Pylimo Street on the map', locationPhotoLabel: 'VILNIUS, LITHUANIA',
  bookingEyebrow: 'STAY A LITTLE', bookingTitle1: 'Make your next trip', bookingTitle2: 'a stay with us.',
  bookingSubtitle: 'A good stay starts with a date.', bookingBody: 'Choose your travel dates and number of guests on Airbnb to see availability, the total price and the terms of your stay.',
  bookButton: 'Choose dates on Airbnb', checkinNote: 'Self check-in with a key lockbox.',
  bookingNote: 'The Airbnb listing is categorised as a room with a private attached bathroom. Shared building areas are shown in the gallery.',
  footerLine: 'Your little home in Vilnius.', backTop: 'Back to top', footerLocation: 'Vilnius, Lithuania', galleryKeyboard: '← → browse · Esc close'
};

const englishAttributes = {
  navLabel: 'Main navigation', menuLabel: 'Open menu', heroPhotoLabel: 'Open photo: view from the window',
  roomPhotoLabel: 'Open photo: apartment interior', highlightsLabel: 'Apartment highlights',
  diningPhotoLabel: 'Open photo: dining area', kitchenPhotoLabel: 'Open photo: kitchenette',
  bathPhotoLabel: 'Open photo: bathroom', buildingPhotoLabel: 'Open photo: building entrance',
  closeGallery: 'Close gallery', previousPhoto: 'Previous photo', nextPhoto: 'Next photo', thumbnailsLabel: 'Photographs',
  windowAlt: 'View of trees and Vilnius buildings through the attic window',
  apartmentAlt: 'Attic apartment with a sofa, dining table and window', diningAlt: 'Round table for two under the sloping ceiling',
  kitchenAlt: 'Kitchenette with a sink, kettle and warm lighting', bathroomAlt: 'Private bathroom with a mirror and washbasin',
  buildingAlt: 'Entrance to the building with the Aleksa sign'
};

const photos = [
  {file:'window',ru:'Вид из окна',en:'The view from your window',area:'apartment'},
  {file:'apartment',ru:'Интерьер квартиры',en:'Inside the apartment',area:'apartment'},
  {file:'kitchen',ru:'Мини-кухня',en:'The kitchenette',area:'apartment'},
  {file:'dining',ru:'Столик на двоих',en:'A table for two',area:'apartment'},
  {file:'sofa',ru:'Диван-кровать',en:'The sofa bed',area:'apartment'},
  {file:'shower',ru:'Душ',en:'The shower',area:'apartment'},
  {file:'bathroom',ru:'Ванная комната',en:'The private bathroom',area:'apartment'},
  {file:'entrance',ru:'Прихожая квартиры',en:'The apartment entrance',area:'apartment'},
  {file:'building',ru:'Вход в здание',en:'The building entrance',area:'building'},
  {file:'lobby',ru:'Холл здания',en:'The building lobby',area:'building'},
  {file:'stairs',ru:'Лестница в здании',en:'The building staircase',area:'building'},
  {file:'lift',ru:'Лифт в здании',en:'The building elevator',area:'building'},
  {file:'corridor',ru:'Общий коридор',en:'The shared corridor',area:'building'}
];

const translatedNodes = [...document.querySelectorAll('[data-t]')];
const russian = Object.fromEntries(translatedNodes.map(node => [node.dataset.t, node.innerHTML.replace(/<br\s*\/?>(\s*)/gi, ' ').replace(/<[^>]*>/g, '')]));
const labelNodes = [...document.querySelectorAll('[data-label]')];
const altNodes = [...document.querySelectorAll('[data-alt]')];
const russianAttributes = Object.fromEntries([
  ...labelNodes.map(node => [node.dataset.label, node.getAttribute('aria-label')]),
  ...altNodes.map(node => [node.dataset.alt, node.getAttribute('alt')])
]);
let language = 'ru';
let photoIndex = 0;
let opener = null;
const languageButton = document.getElementById('language');
const menu = document.getElementById('menu');
const navigation = document.getElementById('navigation');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const thumbnails = document.getElementById('lightbox-thumbnails');
const titleElement = document.getElementById('lightbox-title');
const categoryElement = document.getElementById('lightbox-category');
const counterElement = document.getElementById('lightbox-counter');

function setLanguage(nextLanguage) {
  language = nextLanguage === 'en' ? 'en' : 'ru';
  document.documentElement.lang = language;
  const copy = language === 'en' ? english : russian;
  const attributes = language === 'en' ? englishAttributes : russianAttributes;
  translatedNodes.forEach(node => { if (copy[node.dataset.t]) node.textContent = copy[node.dataset.t]; });
  labelNodes.forEach(node => { if (attributes[node.dataset.label]) node.setAttribute('aria-label', attributes[node.dataset.label]); });
  altNodes.forEach(node => { if (attributes[node.dataset.alt]) node.alt = attributes[node.dataset.alt]; });
  languageButton.textContent = language === 'ru' ? 'EN' : 'RU';
  languageButton.setAttribute('aria-label', language === 'ru' ? 'Switch to English' : 'Переключить на русский');
  document.title = 'Cozy apartments, old town';
  document.querySelector('meta[name="description"]').content = language === 'ru'
    ? 'Уютная квартира на улице Пилимо в центре Вильнюса. Фотографии, мини-кухня, Wi-Fi, удобства и бронирование на Airbnb.'
    : 'A cosy apartment on Pylimo Street in central Vilnius. Real photographs, a kitchenette, Wi-Fi, amenities and booking through Airbnb.';
  document.querySelectorAll('[data-airbnb]').forEach(link => {
    link.href = `https://${language === 'ru' ? 'ru' : 'www'}.airbnb.com/rooms/1752366128630309756`;
  });
  thumbnails.querySelectorAll('button').forEach((button,index) => {
    button.setAttribute('aria-label', `${index+1}. ${photos[index][language]}`);
  });
  menu.setAttribute('aria-label', menu.getAttribute('aria-expanded') === 'true'
    ? (language === 'ru' ? 'Закрыть меню' : 'Close menu') : attributes.menuLabel);
  if (lightbox.open) showPhoto(photoIndex);
  try { localStorage.setItem('pylimo-language', language); } catch (_) { /* Language stays available without storage. */ }
}

function closeMenu() {
  navigation.classList.remove('open');
  menu.setAttribute('aria-expanded','false');
  menu.setAttribute('aria-label', language === 'ru' ? 'Открыть меню' : 'Open menu');
}

menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('open',open);
  menu.setAttribute('aria-expanded',String(open));
  menu.setAttribute('aria-label', open ? (language === 'ru' ? 'Закрыть меню' : 'Close menu') : (language === 'ru' ? 'Открыть меню' : 'Open menu'));
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('click', event => {
  if (!navigation.contains(event.target) && !menu.contains(event.target)) closeMenu();
});
languageButton.addEventListener('click', () => setLanguage(language === 'ru' ? 'en' : 'ru'));

photos.forEach((photo,index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'thumbnail';
  button.setAttribute('aria-label', `${index+1}. ${photo[language]}`);
  const image = document.createElement('img');
  image.src = `./assets/${photo.file}-small.webp`;
  image.alt = '';
  image.loading = 'lazy';
  button.append(image);
  button.addEventListener('click', () => showPhoto(index));
  thumbnails.append(button);
});

function showPhoto(index) {
  photoIndex = (index + photos.length) % photos.length;
  const photo = photos[photoIndex];
  lightboxImage.src = `./assets/${photo.file}.webp`;
  lightboxImage.alt = photo[language];
  titleElement.textContent = photo[language];
  categoryElement.textContent = photo.area === 'apartment'
    ? (language === 'ru' ? 'В КВАРТИРЕ' : 'IN THE APARTMENT')
    : (language === 'ru' ? 'ЗДАНИЕ · ОБЩИЕ ЗОНЫ' : 'BUILDING · SHARED AREAS');
  counterElement.textContent = `${String(photoIndex+1).padStart(2,'0')} / ${photos.length}`;
  thumbnails.querySelectorAll('button').forEach((button,index) => button.setAttribute('aria-current', String(index === photoIndex)));
  const selected = thumbnails.children[photoIndex];
  if (selected && lightbox.open) {
    const target = selected.offsetLeft - thumbnails.offsetLeft - thumbnails.clientWidth/2 + selected.offsetWidth/2;
    thumbnails.scrollTo({left:Math.max(0,target),behavior:'instant'});
  }
}

document.querySelectorAll('[data-photo]').forEach(button => {
  button.addEventListener('click', () => {
    opener = button;
    showPhoto(Number(button.dataset.photo));
    lightbox.showModal();
    document.body.classList.add('dialog-open');
    document.getElementById('lightbox-close').focus({preventScroll:true});
    showPhoto(photoIndex);
  });
});
document.getElementById('lightbox-close').addEventListener('click', () => lightbox.close());
document.getElementById('lightbox-prev').addEventListener('click', () => showPhoto(photoIndex-1));
document.getElementById('lightbox-next').addEventListener('click', () => showPhoto(photoIndex+1));
lightbox.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  opener?.focus({preventScroll:true});
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
  if (!lightbox.open) return;
  if (event.key === 'ArrowLeft') { event.preventDefault(); showPhoto(photoIndex-1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); showPhoto(photoIndex+1); }
});
let touchStart = null;
lightboxImage.addEventListener('touchstart',event => {
  touchStart = event.touches.length === 1 ? {x:event.touches[0].clientX,y:event.touches[0].clientY} : null;
},{passive:true});
lightboxImage.addEventListener('touchend',event => {
  if (!touchStart || !event.changedTouches.length) return;
  const dx = event.changedTouches[0].clientX - touchStart.x;
  const dy = event.changedTouches[0].clientY - touchStart.y;
  if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy)*1.5) showPhoto(photoIndex + (dx<0 ? 1 : -1));
  touchStart = null;
},{passive:true});
try {
  const savedLanguage = localStorage.getItem('pylimo-language');
  if (savedLanguage === 'en' || savedLanguage === 'ru') setLanguage(savedLanguage);
} catch (_) { /* The default Russian page works without storage. */ }

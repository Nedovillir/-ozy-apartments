 'use strict';

const translations = {
  ru: {
    skip:'К содержимому', mainNav:'Основная навигация', openMenu:'Открыть меню', closeMenu:'Закрыть меню',
    navAbout:'О квартире', navAmenities:'Удобства', navGallery:'Галерея', navReviews:'Отзывы', navLocation:'Расположение',
    book:'Забронировать', heroEyebrow:'ВАШЕ МЕСТО В ВИЛЬНЮСЕ', heroTitle1:'Небольшая квартира.', heroTitle2:'Большое чувство уюта.',
    heroText:'Светлая мансардная квартира на улице Пилимо — рядом со Старым городом, вокзалами, кафе и прогулочными маршрутами.',
    chooseDates:'Выбрать даты', seePhotos:'Смотреть фото', heroMetaCenter:'центр города', heroMetaWifi:'бесплатно',
    heroMetaCheckin:'мини‑сейф с ключом', openApartmentPhoto:'Открыть фотографию квартиры', openKitchenPhoto:'Открыть фотографию кухни', openWindowPhoto:'Открыть вид из окна',
    insideApartment:'В квартире', vilniusLithuania:'Вильнюс, Литва', featureCenter:'Центр Вильнюса',
    featureCenterSub:'Пилимо, рядом со Старым городом', featureKitchen:'Мини‑кухня', featureKitchenSub:'чайник, посуда, кофе и чай',
    featureLift:'Лифт', featureLiftSub:'в здании', featureBathroom:'Своя ванная', featureBathroomSub:'душ, полотенца и бельё', locationHint:'Откройте карту, чтобы увидеть точное расположение квартиры.',
    goodFor:'ИДЕАЛЬНО ДЛЯ', goodForText:'пары · деловой поездки · короткого отдыха', aboutEyebrow:'ПРОСТРАНСТВО ДЛЯ ВАШЕЙ ПОЕЗДКИ',
    aboutTitle:'Всё нужное — и ничего лишнего.', aboutText1:'Тёплый свет, мансардное окно, удобное спальное место и небольшая кухня создают спокойную атмосферу после насыщенного дня в городе.',
    aboutText2:'Квартира находится на улице Пилимо, в здании бывшего Hotel Aleksa. Удобное расположение позволяет быстро добраться до центра, вокзалов и основных достопримечательностей.',
    viewAmenities:'Посмотреть все удобства', amenitiesEyebrow:'КОМФОРТ В ДЕТАЛЯХ', amenitiesTitle:'Всё готово к вашему приезду.',
    amenitiesLead:'Приезжайте налегке — основные вещи уже будут ждать вас в квартире.', aBed:'Диван‑кровать',
    aBedText:'Двуспальное место для комфортного отдыха.', aKitchen:'Мини‑кухня', aKitchenText:'Посуда, чайник и всё для простого завтрака.',
    aWifi:'Бесплатный Wi‑Fi', aWifiText:'Для работы, общения и планирования маршрутов.', aTv:'Телевизор',
    aTvText:'Для спокойного вечера после прогулки.', aBath:'Своя ванная', aBathText:'Душ находится прямо в квартире.',
    aLinen:'Бельё и полотенца', aLinenText:'Подготовлены перед вашим приездом.', aCoffee:'Кофе и чай',
    aCoffeeText:'Небольшой приятный бонус для вашего утра.', aLift:'Лифт', aLiftText:'Удобный доступ к этажу квартиры.',
    galleryEyebrow:'ПОСМОТРИТЕ БЛИЖЕ', galleryTitle:'Квартира в деталях.', allPhotos:'Все 13 фото', gApartment:'Интерьер',
    gKitchen:'Мини‑кухня', gBathroom:'Ванная', gWindow:'Вид из окна', gBuilding:'Здание', reviewsEyebrow:'ОТЗЫВЫ ГОСТЕЙ',
    reviewsTitle:'Поделитесь впечатлением.', reviewsLead:'Если вы уже останавливались у нас, оставьте несколько слов — это поможет будущим гостям.',
    leaveReview:'Оставить отзыв', reviewsEmptyTitle:'Здесь появятся ваши отзывы',
    reviewsEmptyText:'Будьте первым гостем, который поделится впечатлением на этом сайте.', locationEyebrow:'ГОРОД НАЧИНАЕТСЯ ЗА ДВЕРЬЮ',
    locationTitle1:'Пилимо.', locationTitle2:'Удобная точка для Вильнюса.', locationText:'Старый город, кафе, рестораны, автобусный и железнодорожный вокзалы находятся неподалёку. Удобно и для прогулок, и для коротких деловых поездок.',
    formerHotel:'Здание бывшего Hotel Aleksa', openMap:'Открыть на карте', bookingEyebrow:'ГОТОВЫ К ПОЕЗДКЕ?',
    bookingTitle:'Выберите даты и приезжайте в Вильнюс.', bookingText:'Актуальную стоимость, доступные даты и условия бронирования можно посмотреть на Airbnb.',
    bookAirbnb:'Забронировать на Airbnb', checkinText:'Самостоятельное заселение · ключ в мини‑сейфе',
    footerLine:'Небольшое место для хорошей поездки.', backTop:'Наверх', galleryDialogLabel:'ГАЛЕРЕЯ', close:'Закрыть',
    previous:'Предыдущее фото', next:'Следующее фото', reviewFormLabel:'ВАШЕ ВПЕЧАТЛЕНИЕ', reviewFormTitle:'Оставить отзыв',
    reviewFormIntro:'Оцените проживание и напишите пару слов о поездке.', ratingLabel:'Ваша оценка', nameLabel:'Ваше имя',
    namePlaceholder:'Имя', reviewLabel:'Отзыв', reviewPlaceholder:'Что вам понравилось?', publishReview:'Опубликовать отзыв',
    storageNote:'На этой версии сайта отзыв сохраняется в браузере этого устройства.', ratingError:'Выберите оценку от 1 до 5 звёзд.',
    formError:'Заполните имя и текст отзыва.', reviewSaved:'Спасибо! Отзыв добавлен на этом устройстве.', guest:'Гость'
  },
  en: {
    skip:'Skip to content', mainNav:'Main navigation', openMenu:'Open menu', closeMenu:'Close menu',
    navAbout:'Apartment', navAmenities:'Amenities', navGallery:'Gallery', navReviews:'Reviews', navLocation:'Location',
    book:'Book now', heroEyebrow:'YOUR PLACE IN VILNIUS', heroTitle1:'A small apartment.', heroTitle2:'A big sense of comfort.',
    heroText:'A bright attic apartment on Pylimo Street — close to the Old Town, stations, cafés and the best routes for exploring the city.',
    chooseDates:'Choose dates', seePhotos:'View photos', heroMetaCenter:'city centre', heroMetaWifi:'complimentary',
    heroMetaCheckin:'key lockbox', openApartmentPhoto:'Open apartment photo', openKitchenPhoto:'Open kitchen photo', openWindowPhoto:'Open window view',
    insideApartment:'Inside the apartment', vilniusLithuania:'Vilnius, Lithuania', featureCenter:'Central Vilnius',
    featureCenterSub:'Pylimo, near the Old Town', featureKitchen:'Kitchenette', featureKitchenSub:'kettle, tableware, coffee and tea',
    featureLift:'Elevator', featureLiftSub:'in the building', featureBathroom:'Private bathroom', featureBathroomSub:'shower, towels and linen', locationHint:'Open the map to see the exact apartment location.',
    goodFor:'PERFECT FOR', goodForText:'couples · business trips · short city breaks', aboutEyebrow:'A SPACE FOR YOUR TRIP',
    aboutTitle:'Everything you need. Nothing you do not.', aboutText1:'Warm light, an attic window, a comfortable sleeping space and a compact kitchen make it easy to unwind after a full day in the city.',
    aboutText2:'The apartment is on Pylimo Street, in the former Hotel Aleksa building. Its convenient location keeps the centre, stations and key sights within easy reach.',
    viewAmenities:'See all amenities', amenitiesEyebrow:'COMFORT IN THE DETAILS', amenitiesTitle:'Ready for your arrival.',
    amenitiesLead:'Travel light — the everyday essentials will already be waiting for you.', aBed:'Sofa bed',
    aBedText:'A double sleeping space for a comfortable rest.', aKitchen:'Kitchenette', aKitchenText:'Tableware, kettle and the basics for a simple breakfast.',
    aWifi:'Complimentary Wi‑Fi', aWifiText:'For work, messages and planning your route.', aTv:'Television',
    aTvText:'For a quiet evening after a day out.', aBath:'Private bathroom', aBathText:'Your own shower inside the apartment.',
    aLinen:'Linen and towels', aLinenText:'Prepared before your arrival.', aCoffee:'Coffee and tea',
    aCoffeeText:'A small extra to make mornings easier.', aLift:'Elevator', aLiftText:'Convenient access to the apartment floor.',
    galleryEyebrow:'TAKE A CLOSER LOOK', galleryTitle:'The apartment in detail.', allPhotos:'All 13 photos', gApartment:'Interior',
    gKitchen:'Kitchenette', gBathroom:'Bathroom', gWindow:'Window view', gBuilding:'Building', reviewsEyebrow:'GUEST REVIEWS',
    reviewsTitle:'Share your stay.', reviewsLead:'If you have stayed with us, leave a few words to help future guests.',
    leaveReview:'Leave a review', reviewsEmptyTitle:'Your reviews will appear here',
    reviewsEmptyText:'Be the first guest to share an impression on this website.', locationEyebrow:'THE CITY STARTS OUTSIDE YOUR DOOR',
    locationTitle1:'Pylimo.', locationTitle2:'A convenient base in Vilnius.', locationText:'The Old Town, cafés, restaurants, bus station and railway station are nearby — convenient for both city walks and short business trips.',
    formerHotel:'Former Hotel Aleksa building', openMap:'Open in maps', bookingEyebrow:'READY TO TRAVEL?',
    bookingTitle:'Choose your dates and come to Vilnius.', bookingText:'See current rates, available dates and booking terms on Airbnb.',
    bookAirbnb:'Book on Airbnb', checkinText:'Self check‑in · key in a lockbox',
    footerLine:'A small place for a good trip.', backTop:'Back to top', galleryDialogLabel:'GALLERY', close:'Close',
    previous:'Previous photo', next:'Next photo', reviewFormLabel:'YOUR EXPERIENCE', reviewFormTitle:'Leave a review',
    reviewFormIntro:'Rate your stay and write a few words about your trip.', ratingLabel:'Your rating', nameLabel:'Your name',
    namePlaceholder:'Name', reviewLabel:'Review', reviewPlaceholder:'What did you enjoy?', publishReview:'Publish review',
    storageNote:'In this version, the review is stored in this device’s browser.', ratingError:'Choose a rating from 1 to 5 stars.',
    formError:'Please enter your name and review.', reviewSaved:'Thank you! Your review was added on this device.', guest:'Guest'
  },
  lt: {
    skip:'Pereiti prie turinio', mainNav:'Pagrindinė navigacija', openMenu:'Atidaryti meniu', closeMenu:'Uždaryti meniu',
    navAbout:'Apie apartamentus', navAmenities:'Patogumai', navGallery:'Galerija', navReviews:'Atsiliepimai', navLocation:'Vieta',
    book:'Rezervuoti', heroEyebrow:'JŪSŲ VIETA VILNIUJE', heroTitle1:'Nedideli apartamentai.', heroTitle2:'Daug jaukumo.',
    heroText:'Šviesūs mansardiniai apartamentai Pylimo gatvėje — netoli Senamiesčio, stočių, kavinių ir patogių maršrutų po Vilnių.',
    chooseDates:'Pasirinkti datas', seePhotos:'Žiūrėti nuotraukas', heroMetaCenter:'miesto centras', heroMetaWifi:'nemokamas',
    heroMetaCheckin:'raktų dėžutė', openApartmentPhoto:'Atidaryti apartamentų nuotrauką', openKitchenPhoto:'Atidaryti virtuvės nuotrauką', openWindowPhoto:'Atidaryti vaizdą pro langą',
    insideApartment:'Apartamentuose', vilniusLithuania:'Vilnius, Lietuva', featureCenter:'Vilniaus centras',
    featureCenterSub:'Pylimo g., šalia Senamiesčio', featureKitchen:'Mini virtuvė', featureKitchenSub:'virdulys, indai, kava ir arbata',
    featureLift:'Liftas', featureLiftSub:'pastate', featureBathroom:'Privatus vonios kambarys', featureBathroomSub:'dušas, rankšluosčiai ir patalynė', locationHint:'Atidarykite žemėlapį, kad pamatytumėte tikslią apartamentų vietą.',
    goodFor:'PUIKIAI TINKA', goodForText:'porai · darbo kelionei · trumpam poilsiui', aboutEyebrow:'ERDVĖ JŪSŲ KELIONEI',
    aboutTitle:'Viskas, ko reikia. Nieko nereikalingo.', aboutText1:'Šilta šviesa, mansardos langas, patogi miegamoji vieta ir nedidelė virtuvė padeda ramiai pailsėti po dienos mieste.',
    aboutText2:'Apartamentai yra Pylimo gatvėje, buvusio Hotel Aleksa pastate. Patogi vieta leidžia lengvai pasiekti centrą, stotis ir svarbiausias miesto vietas.',
    viewAmenities:'Peržiūrėti visus patogumus', amenitiesEyebrow:'KOMFORTAS DETALĖSE', amenitiesTitle:'Viskas paruošta jūsų atvykimui.',
    amenitiesLead:'Keliaukite lengviau — svarbiausi dalykai jūsų jau lauks apartamentuose.', aBed:'Sofa‑lova',
    aBedText:'Dvigulė miegamoji vieta patogiam poilsiui.', aKitchen:'Mini virtuvė', aKitchenText:'Indai, virdulys ir pagrindiniai dalykai paprastiems pusryčiams.',
    aWifi:'Nemokamas Wi‑Fi', aWifiText:'Darbui, bendravimui ir maršrutų planavimui.', aTv:'Televizorius',
    aTvText:'Ramiam vakarui po pasivaikščiojimo.', aBath:'Privatus vonios kambarys', aBathText:'Nuosavas dušas apartamentuose.',
    aLinen:'Patalynė ir rankšluosčiai', aLinenText:'Paruošiami prieš jūsų atvykimą.', aCoffee:'Kava ir arbata',
    aCoffeeText:'Maloni smulkmena gerai ryto pradžiai.', aLift:'Liftas', aLiftText:'Patogus patekimas į apartamentų aukštą.',
    galleryEyebrow:'PAŽVELKITE IŠ ARČIAU', galleryTitle:'Apartamentai iš arčiau.', allPhotos:'Visos 13 nuotraukų', gApartment:'Interjeras',
    gKitchen:'Mini virtuvė', gBathroom:'Vonios kambarys', gWindow:'Vaizdas pro langą', gBuilding:'Pastatas', reviewsEyebrow:'SVEČIŲ ATSILIEPIMAI',
    reviewsTitle:'Pasidalykite įspūdžiais.', reviewsLead:'Jei jau viešėjote pas mus, parašykite kelis žodžius — tai padės būsimiems svečiams.',
    leaveReview:'Palikti atsiliepimą', reviewsEmptyTitle:'Čia pasirodys jūsų atsiliepimai',
    reviewsEmptyText:'Būkite pirmasis svečias, pasidalijęs įspūdžiais šiame puslapyje.', locationEyebrow:'MIESTAS PRASIDEDA UŽ DURŲ',
    locationTitle1:'Pylimo gatvė.', locationTitle2:'Patogi vieta Vilniuje.', locationText:'Senamiestis, kavinės, restoranai, autobusų ir geležinkelio stotys yra netoliese — patogu ir pasivaikščiojimams, ir trumpoms darbo kelionėms.',
    formerHotel:'Buvusio Hotel Aleksa pastatas', openMap:'Atidaryti žemėlapyje', bookingEyebrow:'PASIRUOŠĘ KELIONEI?',
    bookingTitle:'Pasirinkite datas ir atvykite į Vilnių.', bookingText:'Aktualias kainas, laisvas datas ir rezervavimo sąlygas rasite Airbnb.',
    bookAirbnb:'Rezervuoti per Airbnb', checkinText:'Savarankiškas atvykimas · raktas dėžutėje',
    footerLine:'Nedidelė vieta gerai kelionei.', backTop:'Į viršų', galleryDialogLabel:'GALERIJA', close:'Uždaryti',
    previous:'Ankstesnė nuotrauka', next:'Kita nuotrauka', reviewFormLabel:'JŪSŲ ĮSPŪDIS', reviewFormTitle:'Palikti atsiliepimą',
    reviewFormIntro:'Įvertinkite viešnagę ir parašykite kelis žodžius apie kelionę.', ratingLabel:'Jūsų įvertinimas', nameLabel:'Jūsų vardas',
    namePlaceholder:'Vardas', reviewLabel:'Atsiliepimas', reviewPlaceholder:'Kas jums patiko?', publishReview:'Paskelbti atsiliepimą',
    storageNote:'Šioje versijoje atsiliepimas išsaugomas šio įrenginio naršyklėje.', ratingError:'Pasirinkite įvertinimą nuo 1 iki 5 žvaigždučių.',
    formError:'Įrašykite vardą ir atsiliepimo tekstą.', reviewSaved:'Ačiū! Atsiliepimas pridėtas šiame įrenginyje.', guest:'Svečias'
  },
  de: {
    skip:'Zum Inhalt', mainNav:'Hauptnavigation', openMenu:'Menü öffnen', closeMenu:'Menü schließen',
    navAbout:'Apartment', navAmenities:'Ausstattung', navGallery:'Galerie', navReviews:'Bewertungen', navLocation:'Lage',
    book:'Buchen', heroEyebrow:'IHR ORT IN VILNIUS', heroTitle1:'Ein kleines Apartment.', heroTitle2:'Ein großes Gefühl von Gemütlichkeit.',
    heroText:'Ein helles Dachgeschoss-Apartment in der Pylimo-Straße — ganz in der Nähe der Altstadt, der Bahnhöfe, Cafés und schöner Spazierwege.',
    chooseDates:'Daten wählen', seePhotos:'Fotos ansehen', heroMetaCenter:'Stadtzentrum', heroMetaWifi:'kostenlos',
    heroMetaCheckin:'Schlüsselsafe', openApartmentPhoto:'Apartmentfoto öffnen', openKitchenPhoto:'Küchenfoto öffnen', openWindowPhoto:'Fensteransicht öffnen',
    insideApartment:'Im Apartment', vilniusLithuania:'Vilnius, Litauen', featureCenter:'Zentrum von Vilnius',
    featureCenterSub:'Pylimo, nahe der Altstadt', featureKitchen:'Kochnische', featureKitchenSub:'Wasserkocher, Geschirr, Kaffee und Tee',
    featureLift:'Aufzug', featureLiftSub:'im Gebäude', featureBathroom:'Eigenes Bad', featureBathroomSub:'Dusche, Handtücher und Bettwäsche', locationHint:'Öffnen Sie die Karte, um die genaue Lage des Apartments zu sehen.',
    goodFor:'PERFEKT FÜR', goodForText:'Paare · Geschäftsreisen · kurze Städtereisen', aboutEyebrow:'EIN ORT FÜR IHRE REISE',
    aboutTitle:'Alles, was Sie brauchen. Nichts Überflüssiges.', aboutText1:'Warmes Licht, ein Dachfenster, ein bequemer Schlafplatz und eine kleine Küche schaffen eine ruhige Atmosphäre nach einem Tag in der Stadt.',
    aboutText2:'Das Apartment befindet sich in der Pylimo-Straße im ehemaligen Hotel-Aleksa-Gebäude. Die Lage ist praktisch für das Zentrum, die Bahnhöfe und die wichtigsten Sehenswürdigkeiten.',
    viewAmenities:'Alle Ausstattungen ansehen', amenitiesEyebrow:'KOMFORT IM DETAIL', amenitiesTitle:'Alles ist für Ihre Ankunft bereit.',
    amenitiesLead:'Reisen Sie leicht — die wichtigsten Dinge warten bereits im Apartment auf Sie.', aBed:'Schlafsofa',
    aBedText:'Ein Doppel-Schlafplatz für einen angenehmen Aufenthalt.', aKitchen:'Kochnische', aKitchenText:'Geschirr, Wasserkocher und alles für ein einfaches Frühstück.',
    aWifi:'Kostenloses Wi‑Fi', aWifiText:'Für Arbeit, Nachrichten und Routenplanung.', aTv:'Fernseher',
    aTvText:'Für einen ruhigen Abend nach dem Spaziergang.', aBath:'Eigenes Bad', aBathText:'Eine eigene Dusche direkt im Apartment.',
    aLinen:'Bettwäsche und Handtücher', aLinenText:'Vor Ihrer Anreise vorbereitet.', aCoffee:'Kaffee und Tee',
    aCoffeeText:'Ein kleines Extra für einen angenehmen Morgen.', aLift:'Aufzug', aLiftText:'Bequemer Zugang zur Etage des Apartments.',
    galleryEyebrow:'SEHEN SIE NÄHER HIN', galleryTitle:'Das Apartment im Detail.', allPhotos:'Alle 13 Fotos', gApartment:'Innenraum',
    gKitchen:'Kochnische', gBathroom:'Badezimmer', gWindow:'Fensterblick', gBuilding:'Gebäude', reviewsEyebrow:'GÄSTEBEWERTUNGEN',
    reviewsTitle:'Teilen Sie Ihren Eindruck.', reviewsLead:'Wenn Sie bereits bei uns übernachtet haben, hinterlassen Sie ein paar Worte — das hilft zukünftigen Gästen.',
    leaveReview:'Bewertung abgeben', reviewsEmptyTitle:'Ihre Bewertungen erscheinen hier',
    reviewsEmptyText:'Seien Sie der erste Gast, der auf dieser Website einen Eindruck teilt.', locationEyebrow:'DIE STADT BEGINNT DIREKT VOR DER TÜR',
    locationTitle1:'Pylimo.', locationTitle2:'Ein praktischer Ausgangspunkt für Vilnius.', locationText:'Altstadt, Cafés, Restaurants sowie Bus- und Bahnhof liegen in der Nähe — praktisch sowohl für Spaziergänge als auch für kurze Geschäftsreisen.',
    formerHotel:'Gebäude des ehemaligen Hotel Aleksa', openMap:'In Karte öffnen', bookingEyebrow:'BEREIT FÜR DIE REISE?',
    bookingTitle:'Wählen Sie Ihre Daten und kommen Sie nach Vilnius.', bookingText:'Aktuelle Preise, freie Termine und Buchungsbedingungen finden Sie auf Airbnb.',
    bookAirbnb:'Auf Airbnb buchen', checkinText:'Self Check‑in · Schlüssel im Safe',
    footerLine:'Ein kleiner Ort für eine gute Reise.', backTop:'Nach oben', galleryDialogLabel:'GALERIE', close:'Schließen',
    previous:'Vorheriges Foto', next:'Nächstes Foto', reviewFormLabel:'IHR EINDRUCK', reviewFormTitle:'Bewertung abgeben',
    reviewFormIntro:'Bewerten Sie Ihren Aufenthalt und schreiben Sie ein paar Worte über Ihre Reise.', ratingLabel:'Ihre Bewertung', nameLabel:'Ihr Name',
    namePlaceholder:'Name', reviewLabel:'Bewertung', reviewPlaceholder:'Was hat Ihnen gefallen?', publishReview:'Bewertung veröffentlichen',
    storageNote:'In dieser Version wird die Bewertung im Browser dieses Geräts gespeichert.', ratingError:'Wählen Sie eine Bewertung von 1 bis 5 Sternen.',
    formError:'Bitte geben Sie Ihren Namen und einen Bewertungstext ein.', reviewSaved:'Danke! Ihre Bewertung wurde auf diesem Gerät hinzugefügt.', guest:'Gast'
  }
};

const photoNames = {
  window:{ru:'Вид из окна',en:'Window view',lt:'Vaizdas pro langą',de:'Fensterblick'},
  apartment:{ru:'Интерьер квартиры',en:'Apartment interior',lt:'Apartamentų interjeras',de:'Apartment-Innenraum'},
  kitchen:{ru:'Мини‑кухня',en:'Kitchenette',lt:'Mini virtuvė',de:'Kochnische'},
  dining:{ru:'Столик на двоих',en:'Table for two',lt:'Staliukas dviem',de:'Tisch für zwei'},
  sofa:{ru:'Диван‑кровать',en:'Sofa bed',lt:'Sofa‑lova',de:'Schlafsofa'},
  shower:{ru:'Душ',en:'Shower',lt:'Dušas',de:'Dusche'},
  bathroom:{ru:'Ванная комната',en:'Bathroom',lt:'Vonios kambarys',de:'Badezimmer'},
  entrance:{ru:'Прихожая квартиры',en:'Apartment entrance',lt:'Apartamentų prieškambaris',de:'Apartment-Eingang'},
  building:{ru:'Вход в здание',en:'Building entrance',lt:'Įėjimas į pastatą',de:'Gebäudeeingang'},
  lobby:{ru:'Холл здания',en:'Building lobby',lt:'Pastato holas',de:'Gebäude-Lobby'},
  stairs:{ru:'Лестница',en:'Staircase',lt:'Laiptinė',de:'Treppenhaus'},
  lift:{ru:'Лифт',en:'Elevator',lt:'Liftas',de:'Aufzug'},
  corridor:{ru:'Общий коридор',en:'Shared corridor',lt:'Bendras koridorius',de:'Gemeinsamer Flur'}
};

const photoFiles = Object.keys(photoNames);
let language = 'ru';
let photoIndex = 0;
let rating = 0;

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];

const header = $('#site-header');
const progress = $('#scroll-progress');
const mobileButton = $('#mobile-menu-button');
const mobileMenu = $('#mobile-menu');
const langTrigger = $('#language-trigger');
const langMenu = $('#language-menu');
const langCode = $('#language-code');
const galleryDialog = $('#gallery-dialog');
const galleryImage = $('#gallery-image');
const galleryCaption = $('#gallery-caption');
const galleryCounter = $('#gallery-counter');
const galleryThumbs = $('#gallery-thumbs');
const reviewDialog = $('#review-dialog');
const reviewForm = $('#review-form');
const reviewText = $('#review-text');
const reviewCount = $('#review-count');
const reviewError = $('#review-error');
const reviewsList = $('#reviews-list');
const reviewsEmpty = $('#reviews-empty');
const toast = $('#toast');

function safeStore(key, value){
  try{ localStorage.setItem(key, value); }catch(_){}
}

function safeRead(key, fallback=null){
  try{ return localStorage.getItem(key) ?? fallback; }catch(_){ return fallback; }
}

function setLanguage(next){
  language = ['ru','en','lt','de'].includes(next) ? next : 'ru';
  document.documentElement.lang = language;
  const dict = translations[language];

  $$('[data-i18n]').forEach(node => {
    const key = node.dataset.i18n;
    if(dict[key] !== undefined) node.textContent = dict[key];
  });

  $$('[data-i18n-aria]').forEach(node => {
    const key = node.dataset.i18nAria;
    if(dict[key] !== undefined) node.setAttribute('aria-label', dict[key]);
  });

  $$('[data-i18n-placeholder]').forEach(node => {
    const key = node.dataset.i18nPlaceholder;
    if(dict[key] !== undefined) node.placeholder = dict[key];
  });

  langCode.textContent = language.toUpperCase();
  $$('[data-lang]').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === language));

  const airbnbHost = language === 'ru' ? 'ru.airbnb.com' : 'www.airbnb.com';
  $$('[data-airbnb]').forEach(link => link.href = `https://${airbnbHost}/rooms/1752366128630309756`);

  document.title = language === 'lt' ? 'Cozy Apartments · Vilnius' : 'Cozy Apartments · Vilnius';
  const desc = {
    ru:'Уютная квартира на улице Пилимо в центре Вильнюса. Фотографии, удобства, отзывы и бронирование через Airbnb.',
    en:'A cosy apartment on Pylimo Street in central Vilnius. Photos, amenities, reviews and booking through Airbnb.',
    lt:'Jaukūs apartamentai Pylimo gatvėje, Vilniaus centre. Nuotraukos, patogumai, atsiliepimai ir rezervacija per Airbnb.',
    de:'Gemütliches Apartment in der Pylimo-Straße im Zentrum von Vilnius. Fotos, Ausstattung, Bewertungen und Buchung über Airbnb.'
  };
  $('meta[name="description"]').content = desc[language];

  updateMobileAria();
  renderGalleryPhoto(photoIndex);
  renderReviews();
  safeStore('cozy-language-v2', language);
}

function closeLanguageMenu(){
  langMenu.classList.remove('open');
  langTrigger.setAttribute('aria-expanded','false');
}

langTrigger.addEventListener('click', e => {
  e.stopPropagation();
  const open = !langMenu.classList.contains('open');
  langMenu.classList.toggle('open', open);
  langTrigger.setAttribute('aria-expanded', String(open));
});

$$('[data-lang]').forEach(btn => btn.addEventListener('click', () => {
  setLanguage(btn.dataset.lang);
  closeLanguageMenu();
}));

document.addEventListener('click', e => {
  if(!langMenu.contains(e.target) && !langTrigger.contains(e.target)) closeLanguageMenu();
});

function updateMobileAria(){
  const open = mobileButton.getAttribute('aria-expanded') === 'true';
  mobileButton.setAttribute('aria-label', translations[language][open ? 'closeMenu' : 'openMenu']);
}

function closeMobile(){
  mobileMenu.classList.remove('open');
  mobileButton.setAttribute('aria-expanded','false');
  updateMobileAria();
}

mobileButton.addEventListener('click', () => {
  const open = mobileButton.getAttribute('aria-expanded') !== 'true';
  mobileMenu.classList.toggle('open', open);
  mobileButton.setAttribute('aria-expanded', String(open));
  updateMobileAria();
});

$$('#mobile-menu a').forEach(a => a.addEventListener('click', closeMobile));

function updateScroll(){
  const max = document.documentElement.scrollHeight - innerHeight;
  const pct = max > 0 ? (scrollY / max) * 100 : 0;
  progress.style.width = `${Math.min(100, Math.max(0,pct))}%`;
  header.classList.toggle('scrolled', scrollY > 12);
}
addEventListener('scroll', updateScroll, {passive:true});
updateScroll();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12, rootMargin:'0px 0px -30px'});
$$('.reveal').forEach(el => observer.observe(el));

photoFiles.forEach((file, index) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'gallery-thumb';
  btn.setAttribute('aria-label', `${index + 1}`);
  const img = document.createElement('img');
  img.src = `./assets/${file}-small.webp`;
  img.alt = '';
  img.loading = 'lazy';
  btn.append(img);
  btn.addEventListener('click', () => renderGalleryPhoto(index));
  galleryThumbs.append(btn);
});

function renderGalleryPhoto(index){
  photoIndex = (index + photoFiles.length) % photoFiles.length;
  const file = photoFiles[photoIndex];
  galleryImage.src = `./assets/${file}.webp`;
  galleryImage.alt = photoNames[file][language];
  galleryCaption.textContent = photoNames[file][language];
  galleryCounter.textContent = `${String(photoIndex+1).padStart(2,'0')} / ${photoFiles.length}`;
  $$('.gallery-thumb').forEach((btn,i) => btn.classList.toggle('active', i === photoIndex));
  const active = galleryThumbs.children[photoIndex];
  if(active && galleryDialog.open) active.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});
}

$$('[data-open-gallery]').forEach(btn => btn.addEventListener('click', () => {
  renderGalleryPhoto(Number(btn.dataset.openGallery || 0));
  galleryDialog.showModal();
  document.body.classList.add('dialog-open');
}));

$('#gallery-close').addEventListener('click', () => galleryDialog.close());
$('#gallery-prev').addEventListener('click', () => renderGalleryPhoto(photoIndex - 1));
$('#gallery-next').addEventListener('click', () => renderGalleryPhoto(photoIndex + 1));
galleryDialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));

let touchStartX = null;
galleryImage.addEventListener('touchstart', e => {
  touchStartX = e.touches.length === 1 ? e.touches[0].clientX : null;
},{passive:true});
galleryImage.addEventListener('touchend', e => {
  if(touchStartX === null || !e.changedTouches.length) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  if(Math.abs(dx) > 55) renderGalleryPhoto(photoIndex + (dx < 0 ? 1 : -1));
  touchStartX = null;
},{passive:true});

document.addEventListener('keydown', e => {
  if(galleryDialog.open){
    if(e.key === 'ArrowLeft') renderGalleryPhoto(photoIndex - 1);
    if(e.key === 'ArrowRight') renderGalleryPhoto(photoIndex + 1);
  }
  if(e.key === 'Escape'){
    closeLanguageMenu();
    closeMobile();
  }
});

function setRating(value){
  rating = Number(value);
  $('#rating-value').value = rating;
  $$('#star-rating button').forEach(btn => {
    btn.classList.toggle('active', Number(btn.dataset.rating) <= rating);
    btn.setAttribute('aria-checked', String(Number(btn.dataset.rating) === rating));
  });
}
$$('#star-rating button').forEach(btn => {
  btn.setAttribute('role','radio');
  btn.addEventListener('click', () => setRating(btn.dataset.rating));
  btn.addEventListener('mouseenter', () => {
    $$('#star-rating button').forEach(star => star.classList.toggle('active', Number(star.dataset.rating) <= Number(btn.dataset.rating)));
  });
});
$('#star-rating').addEventListener('mouseleave', () => setRating(rating));

function openReview(){
  reviewError.textContent = '';
  reviewDialog.showModal();
  document.body.classList.add('dialog-open');
  setTimeout(() => $('#review-name').focus(), 20);
}
$$('[data-review-open]').forEach(btn => btn.addEventListener('click', openReview));
$('#review-close').addEventListener('click', () => reviewDialog.close());
reviewDialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));

reviewText.addEventListener('input', () => reviewCount.textContent = reviewText.value.length);

function getReviews(){
  try{
    const data = JSON.parse(safeRead('cozy-reviews-v1','[]'));
    return Array.isArray(data) ? data : [];
  }catch(_){ return []; }
}

function dateForReview(timestamp){
  const locale = language === 'ru' ? 'ru-RU' : language === 'lt' ? 'lt-LT' : 'en-GB';
  try{
    return new Intl.DateTimeFormat(locale,{year:'numeric',month:'short',day:'numeric'}).format(new Date(timestamp));
  }catch(_){ return ''; }
}

function renderReviews(){
  const reviews = getReviews();
  reviewsList.innerHTML = '';
  reviewsEmpty.hidden = reviews.length > 0;

  reviews.slice().reverse().forEach(review => {
    const card = document.createElement('article');
    card.className = 'review-card';

    const stars = document.createElement('div');
    stars.className = 'stars';
    stars.textContent = '★'.repeat(review.rating) + '☆'.repeat(5-review.rating);

    const quote = document.createElement('blockquote');
    quote.textContent = review.text;

    const footer = document.createElement('footer');
    const name = document.createElement('strong');
    name.textContent = review.name || translations[language].guest;
    const date = document.createElement('span');
    date.textContent = dateForReview(review.createdAt);

    footer.append(name,date);
    card.append(stars,quote,footer);
    reviewsList.append(card);
  });
}

reviewForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = $('#review-name').value.trim();
  const text = reviewText.value.trim();

  if(rating < 1){
    reviewError.textContent = translations[language].ratingError;
    return;
  }
  if(!name || !text){
    reviewError.textContent = translations[language].formError;
    return;
  }

  const reviews = getReviews();
  reviews.push({name:name.slice(0,50), text:text.slice(0,600), rating, createdAt:Date.now()});
  safeStore('cozy-reviews-v1', JSON.stringify(reviews.slice(-30)));
  renderReviews();

  reviewForm.reset();
  reviewCount.textContent = '0';
  setRating(0);
  reviewError.textContent = '';
  reviewDialog.close();
  showToast(translations[language].reviewSaved);
  document.querySelector('#reviews').scrollIntoView({behavior:'smooth',block:'start'});
});

let toastTimer;
function showToast(message){
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

$('#year').textContent = new Date().getFullYear();

const savedLanguage = safeRead('cozy-language-v2','ru');
setLanguage(['ru','en','lt','de'].includes(savedLanguage) ? savedLanguage : 'ru');
renderGalleryPhoto(0);
renderReviews();

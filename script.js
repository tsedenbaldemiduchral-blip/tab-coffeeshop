const translations = {
  mn: {
    navHome:"Нүүр",navMenu:"Цэс",navEvents:"Эвент",navGallery:"Зураг",navContact:"Холбоо барих",
    heroEyebrow:"COFFEE · ART · COMMUNITY",heroTitle:"Өдөр бүрийг<br><em>амттай</em> эхлүүлье.",heroCopy:"Сайхан кофе, дулаан уур амьсгал, бүтээлч мөчүүд таныг хүлээж байна.",heroButton:"Цэстэй танилцах",
    introEyebrow:"WELCOME TO TAB",introTitle:"Кофегоо уугаад,<br>мөчөө мэдэр.",introCopy:"TAB бол зөвхөн кофе уух газар биш. Найзуудтайгаа уулзах, санаагаа хуваалцах, урлаг бүтээх, өөртөө цаг гаргах тухтай орон зай.",
    menuEyebrow:"MADE WITH CARE",menuTitle:"Манай цэс",menuSub:"Өөрийн дуртай амтаа сонгоорой.",menuNote:"* Цэс болон үнэ шинэчлэгдэх боломжтой. Захиалга өгөхдөө ажилтнаас лавлана уу.",
    eventsEyebrow:"MORE THAN COFFEE",eventsTitle:"TAB дээр юу болох вэ?",eventsSub:"Урлаг, кино, шинэ танилууд — хамтдаа бүтээе.",eventsNote:"Удахгүй болох эвентийн мэдээллийг Instagram хуудсаараа зарлана.",
    galleryTitle:"TAB-ийн мөчүүд",instagramLink:"Instagram-д зочлох ↗",contactEyebrow:"COME SAY HELLO",contactTitle:"Тавтай морил!",contactCopy:"Дуртай кофегоо уунгаа тухтай мөчийг өнгөрүүлээрэй. Бид таныг хүлээж байна.",
    addressLabel:"Хаяг",hoursLabel:"Цагийн хуваарь",socialLabel:"Сошиал",mapButton:"Байршил харах ↗",
    categories:{all:"Бүгд",coffee:"Кофе",matcha:"Матча",other:"Бусад"},
    eventType:"ЭВЕНТ",eventSoon:"Тун удахгүй",event1:"Art & Drawing",event1desc:"Кофегоо уунгаа өөрийн бүтээлч талыг нээгээрэй.",event2:"Movie Night",event2desc:"Дуртай кино, попкорн, тухтай орой.",event3:"Community Day",event3desc:"Шинэ хүмүүстэй танилцаж, сайхан мөч хуваалцаарай."
  },
  en: {
    navHome:"Home",navMenu:"Menu",navEvents:"Events",navGallery:"Gallery",navContact:"Contact",
    heroEyebrow:"COFFEE · ART · COMMUNITY",heroTitle:"Make every day<br><em>taste better.</em>",heroCopy:"Good coffee, a warm atmosphere and creative moments are waiting for you.",heroButton:"Explore the menu",
    introEyebrow:"WELCOME TO TAB",introTitle:"Sip your coffee,<br>enjoy the moment.",introCopy:"TAB is more than a coffee shop. It is a cozy place to meet friends, share ideas, make art and take a little time for yourself.",
    menuEyebrow:"MADE WITH CARE",menuTitle:"Our menu",menuSub:"Find a flavour you'll love.",menuNote:"* Menu items and prices may change. Please ask our team when ordering.",
    eventsEyebrow:"MORE THAN COFFEE",eventsTitle:"What's happening at TAB?",eventsSub:"Art, movies and new connections — let's make moments together.",eventsNote:"Follow us on Instagram for announcements about upcoming events.",
    galleryTitle:"Moments at TAB",instagramLink:"Visit Instagram ↗",contactEyebrow:"COME SAY HELLO",contactTitle:"You're welcome here.",contactCopy:"Enjoy your favourite drink and spend a lovely moment with us. We look forward to seeing you.",
    addressLabel:"Location",hoursLabel:"Opening hours",socialLabel:"Social",mapButton:"Find us on the map ↗",
    categories:{all:"All",coffee:"Coffee",matcha:"Matcha",other:"Other"},
    eventType:"EVENT",eventSoon:"Coming soon",event1:"Art & Drawing",event1desc:"Explore your creative side over a cup of coffee.",event2:"Movie Night",event2desc:"A favourite film, popcorn and a cozy evening.",event3:"Community Day",event3desc:"Meet new people and share a good moment."
  }
};

// EDIT THESE SAMPLE MENU ITEMS AND PRICES BEFORE PUBLISHING.
const menuItems = [
  {name:"Espresso",category:"coffee",price:"₮  —",descMn:"Баялаг амттай сонгодог кофе",descEn:"A rich and classic coffee"},
  {name:"Americano",category:"coffee",price:"₮  —",descMn:"Эспрессо болон халуун ус",descEn:"Espresso with hot water"},
  {name:"Cappuccino",category:"coffee",price:"₮  —",descMn:"Сүүтэй зөөлөн хөөс",descEn:"Espresso with steamed milk foam"},
  {name:"Latte",category:"coffee",price:"₮ 8,900",descMn:"Зөөлөн, сүүн амт",descEn:"Smooth espresso and milk"},
  {name:"Matcha Latte",category:"matcha",price:"₮  —",descMn:"Японы матча, сүү",descEn:"Japanese matcha with milk"},
  {name:"Strawberry Matcha",category:"matcha",price:"₮  —",descMn:"Гүзээлзгэнэ, матча, сүүний хослол",descEn:"A fruity blend of strawberry and matcha"},
  {name:"Smoothie",category:"other",price:"₮  —",descMn:"Жимсний сэрүүцүүлэх ундаа",descEn:"A refreshing fruit drink"},
  {name:"Hot Chocolate",category:"other",price:"₮  —",descMn:"Дулаахан шоколадан ундаа",descEn:"A comforting chocolate drink"}
];

// Add confirmed event dates, times and prices here before publishing.
const events = [
  {image:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85",titleKey:"event1",descKey:"event1desc"},
  {image:"https://images.unsplash.com/photo-1489599849927-2ee91c4d8c2f?auto=format&fit=crop&w=900&q=85",titleKey:"event2",descKey:"event2desc"},
  {image:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85",titleKey:"event3",descKey:"event3desc"}
];
let language = "mn";
let activeCategory = "all";

function renderMenu(){
  const t=translations[language];
  document.getElementById("categoryTabs").innerHTML=Object.entries(t.categories).map(([key,label])=>
    `<button class="category-tab ${activeCategory===key?"active":""}" data-category="${key}" role="tab" aria-selected="${activeCategory===key}">${label}</button>`).join("");
  document.getElementById("menuGrid").innerHTML=menuItems.filter(item=>activeCategory==="all"||item.category===activeCategory).map(item=>
    `<article class="menu-card"><div class="menu-card-top"><h3>${item.name}</h3><span class="price">${item.price}</span></div><p>${language==="mn"?item.descMn:item.descEn}</p></article>`).join("");
  document.querySelectorAll(".category-tab").forEach(button=>button.addEventListener("click",()=>{activeCategory=button.dataset.category;renderMenu()}));
}
function renderEvents(){
  const t=translations[language];
  document.getElementById("eventsGrid").innerHTML=events.map(event=>
    `<article class="event-card"><img src="${event.image}" alt="${t[event.titleKey]}" loading="lazy"><div class="event-info"><span class="event-date">${t.eventType} · ${t.eventSoon}</span><h3>${t[event.titleKey]}</h3><p>${t[event.descKey]}</p></div></article>`).join("");
}
function setLanguage(next){
  language=next;
  document.documentElement.lang=next;
  document.querySelectorAll("[data-i18n]").forEach(el=>{const value=translations[next][el.dataset.i18n];if(value)el.innerHTML=value});
  document.getElementById("langSwitch").textContent=next==="mn"?"EN":"MN";
  renderMenu();renderEvents();
}
document.getElementById("langSwitch").addEventListener("click",()=>setLanguage(language==="mn"?"en":"mn"));
document.getElementById("menuToggle").addEventListener("click",()=>{
  const nav=document.getElementById("mainNav"),open=nav.classList.toggle("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded",String(open));
});
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>{document.getElementById("mainNav").classList.remove("open");document.getElementById("menuToggle").setAttribute("aria-expanded","false")}));
document.getElementById("year").textContent=new Date().getFullYear();
setLanguage("mn");

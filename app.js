import {
    ActivityCard,
    FlightCard,
    HotelCard,
    RenderFooter,
    RenderHeader,
    RenderPromotionalSection,
    RenderSearchWidget,
    RenderSideMenu
} from './components.js';

const flights = [
    { 
        code: 'DAC', 
        to: 'DXB', 
        airline: 'Qatar Airways', 
        price: 345, 
        badgeLabel: 'Best', 
        badgeText: 'Cheapest', 
        logo: './assets/Qatar-Airways-Symbol-1.png' 
    },
    { 
        code: 'DAC', 
        to: 'DXB', 
        airline: 'Emirates', 
        price: 345, 
        badgeLabel: 'Bundle', 
        badgeText: 'Save Deal', 
     logo: './assets/Qatar-Airways-Symbol-1.png' 
    },
    { 
        code: 'DAC', 
        to: 'DXB', 
        airline: 'Jazeera Airways', 
        price: 345, 
        badgeLabel: 'Best', 
        badgeText: 'Cheapest', 
       logo: './assets/Qatar-Airways-Symbol-1.png' 
    }
];

const hotels = [
    { name: 'Grand Switzerland', location: 'Switzerland', reviews: '4.8 (3.0K Reviews)', price: 345, badge: 'Lowest Price', img: './assets/popular-hotel-img-1.png' },
    { name: 'Tiny House Dreich...', location: 'Germany, Trier', reviews: '4.8 (3.0K Reviews)', price: 345, badge: '20% Offers', img: './assets/popular-hotel-img-2.png' },
    { name: 'Grand Switzerland', location: 'Switzerland', reviews: '4.8 (3.0K Reviews)', price: 345, badge: 'Best buy for', img: './assets/popular-hotel-img-3.jpg' }
];

const promos = [
    { 
        title: 'Your next adventure begins', 
        text: '-30% Off Hotel Bookings', 
        img: './assets/promotional-img-1.jpg' 
    },
    { 
        title: 'Up to 50% Savings on Flights', 
        text: '18 - 20 March 2026', 
        label: 'Limited-Time Offer', 
        img: './assets/promotional-img-2.jpg' 
    },
    { 
        title: 'Start your next journey', 
        text: '50% Off Hotel Bookings', 
        img: './assets/promotional-img-3.jpeg' 
    }
];

const activities = [
    { 
        title: 'Coral Reef Snorkeling Tour', 
        badge: '20% off', 
        img: './assets/features-activity-img-1.jpg', 
        location: 'Switzerland', 
        price: '99' 
    },
    { 
        title: 'Mountain Hiking Experience', 
        badge: 'Save Deals', 
           img: './assets/features-activity-img-2.jpg',  
        location: 'Switzerland', 
        price: '99' 
    },
    { 
        title: 'City Bridge Walk', 
                badge: 'Best saves', 
         img: './assets/features-activity-img-3.jpg', 
        location: 'Switzerland', 
        price: '99' 
    }
];


window.toggleMenu = (open) => {
    const menu = document.getElementById('side-menu-root');
    if (menu) {

        if (open) {
            menu.classList.remove('translate-x-full', 'opacity-0', 'invisible');
            menu.classList.add('translate-x-0', 'opacity-100', 'visible');
        } else {
            menu.classList.add('translate-x-full', 'opacity-0', 'invisible');
            menu.classList.remove('translate-x-0', 'opacity-100', 'visible');
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Layout Shells
    document.getElementById('header-root').innerHTML = RenderHeader();
    document.getElementById('footer-root').innerHTML = RenderFooter();
    document.getElementById('side-menu-root').innerHTML = RenderSideMenu();
    document.getElementById('search-root').innerHTML = RenderSearchWidget();

    // 2. Render Flights (Pixel Perfect Grid)
    const flightsContainer = document.getElementById('flights-root');
    if (flightsContainer) {
        flightsContainer.innerHTML = `
            <div class="flex justify-between items-end mb-8">
                <div>
                    <p class="text-skyBlue/60 text-sm font-semibold tracking-wider mb-1">Best Deals</p>
                    <h2 class="font-outfit tracking-wide text-xl md:text-2xl mt-3 lg:text-3xl lg:text-4xl font-semibold text-skyBlue">Featured Flights</h2>
                </div>
                <a href="#" class="text-skyBlue font-bold text-sm hover:underline">View All</a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${flights.map(f => FlightCard(f)).join('')}
            </div>
        `;
    }

const hotelsContainer = document.getElementById('hotels-root');
if (hotelsContainer) {
    hotelsContainer.innerHTML = `
        <div class="flex justify-between items-end pt-14 lg:pt-24">
            <div>
                <p class="text-skyBlue/60 text-sm font-semibold tracking-wider mb-1">Top Rated</p>
                <h2 class="font-outfit tracking-wide text-xl md:text-2xl mt-3 lg:text-3xl lg:text-4xl font-semibold text-skyBlue">Popular Hotels</h2>
            </div>
            <a href="#" class="text-skyBlue font-bold text-sm hover:underline">View All</a>
        </div>
        <div class="mt-8 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14 lg:mb-24">
            ${hotels.map(hotel => HotelCard(hotel)).join('')}
        </div>
    `;
}


const activitiesContainer = document.getElementById('activities-root');
if (activitiesContainer) {
    activitiesContainer.innerHTML = `
        <div class="container mx-auto">
            <div class="flex justify-between items-end mb-10">
                <div>
                    <p class="text-skyBlue/60 text-sm font-semibold tracking-wider mb-1">Experiences</p>
                    <h2 class="font-outfit tracking-wide text-xl md:text-2xl mt-3 lg:text-3xl lg:text-4xl font-semibold text-skyBlue">Featured Activities</h2>
                </div>
                <a href="#" class="text-skyBlue font-bold text-sm hover:underline flex items-center gap-2">
                    View All
                </a>
            </div>

      
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5 lg:mb-10">
                    ${activities.map(a => ActivityCard(a)).join('')}
                </div>
           
         
        </div>
    `;


}
    // 4. Render Promotional Offers
    const promosContainer = document.getElementById('promos-root');
if (promosContainer) {
    // We pass the entire promos array to the custom section renderer
    promosContainer.innerHTML = RenderPromotionalSection(promos);
}
});
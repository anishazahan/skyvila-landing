import {
    ActivityCard,
    FlightCard,
    PromoCard,
    RenderFooter,
    RenderHeader,
    RenderSearchWidget,
    RenderSideMenu
} from './components.js';

const flights = [
    { code: 'DAC', from: 'Dhaka', to: 'DXB', airline: 'Qatar Airways', price: 345, badgeLabel: 'Best', badgeText: 'Cheapest', logo: 'https://logo.clearbit.com/qatarairways.com' },
    { code: 'DAC', from: 'Dhaka', to: 'DXB', airline: 'Emirates', price: 345, badgeLabel: 'Bundle', badgeText: 'Save Deal', logo: 'https://logo.clearbit.com/emirates.com' },
    { code: 'DAC', from: 'Dhaka', to: 'DXB', airline: 'Jazeera Airways', price: 345, badgeLabel: 'Best', badgeText: 'Cheapest', logo: 'https://logo.clearbit.com/jazeeraairways.com' }
];

const promos = [
    { title: 'Your next adventure begins', text: '-30% Off Hotel Bookings', label: 'Limited Time', bg: 'bg-gradient-to-br from-skyCyan to-blue-500', icon: 'fa-solid fa-hotel' },
    { title: 'Up to 50% Savings on Flights', text: '18 - 20 March 2026', label: 'Limited-Time Offer', bg: 'bg-red-500', icon: 'fa-solid fa-plane' },
    { title: 'Start your next journey', text: '-50% Off Hotel Bookings', label: 'Exclusive Deal', bg: 'bg-skyBlue', icon: 'fa-solid fa-suitcase' }
];

const activities = [
    { title: 'Coral Reef Snorkeling Tour', badge: '20% off', img: 'https://images.unsplash.com/photo-1544551763-47a0159f9234?q=80&w=600' },
    { title: 'Mountain Hiking Experience', badge: 'Save Deals', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600' },
    { title: 'City Bridge Walk', badge: 'Best Saves', img: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=600' }
];


window.toggleMenu = (open) => {
    const menu = document.getElementById('side-menu-root');
    if (menu) {
        menu.classList.toggle('translate-x-full', !open);
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
                    <p class="text-skyBlue font-bold text-xs uppercase tracking-widest">Best Deals</p>
                    <h2 class="font-outfit text-3xl font-bold">Featured Flights</h2>
                </div>
                <a href="#" class="text-skyBlue font-bold text-sm hover:underline">View All</a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                ${flights.map(f => FlightCard(f)).join('')}
            </div>
        `;
    }

    // 3. Render Activities (Slider Logic)
    const activitiesContainer = document.getElementById('activities-root');
    if (activitiesContainer) {
        activitiesContainer.innerHTML = `
            <div class="flex justify-between items-end mb-10">
                <div>
                    <p class="text-skyBlue font-bold text-xs uppercase tracking-widest">Experiences</p>
                    <h2 class="font-outfit text-3xl font-bold">Featured Activities</h2>
                </div>
                <a href="#" class="text-skyBlue font-bold text-sm hover:underline">View All</a>
            </div>
            <div class="swiper activitySwiper overflow-hidden">
                <div class="swiper-wrapper mb-10">
                    ${activities.map(a => ActivityCard(a)).join('')}
                </div>
                <div class="swiper-pagination"></div>
            </div>
        `;
        
        // Initialize Swiper ONLY after the HTML is injected
        new Swiper('.activitySwiper', {
            slidesPerView: 1,
            spaceBetween: 24,
            pagination: { el: '.swiper-pagination', clickable: true },
            breakpoints: {
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }
        });
    }

    // 4. Render Promotional Offers
    const promosContainer = document.getElementById('promos-root');
    if (promosContainer) {
        promosContainer.innerHTML = `
            <h2 class="font-outfit text-3xl font-bold mb-8">Promotional Offers</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                ${promos.map(p => PromoCard(p)).join('')}
            </div>
        `;
    }
});
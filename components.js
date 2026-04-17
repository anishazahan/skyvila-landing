export const RenderHeader = () => `
    <div class="container mx-auto px-4 flex justify-between items-center h-20">
        <div class="flex items-center gap-2">
            <img src="./assets/logo.png" class="h-8" onerror="this.outerHTML='<span class=\'font-outfit text-2xl font-bold text-skyBlue\'>skyvela</span>'">
        </div>
        <div class="hidden lg:flex items-center gap-10 font-semibold text-slate-600">
            <a href="#" class="text-skyBlue border-b-2 border-skyBlue pb-1">Flights</a>
            <a href="#" class="hover:text-skyBlue transition">Hotels</a>
            <a href="#" class="hover:text-skyBlue transition">Packages</a>
            <a href="#" class="hover:text-skyBlue transition">Activities</a>
            <a href="#" class="hover:text-skyBlue transition">Transfers</a>
        </div>
        <div class="flex items-center gap-4">
            <button class="flex items-center gap-2 text-sm font-bold text-slate-700">
                <img src="https://flagcdn.com/us.svg" class="w-5"> ENG <i class="fa-solid fa-chevron-down text-[10px]"></i>
            </button>
            <button class="bg-skyBlue text-gray50 px-8 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2">Sign In <i class="fa-solid fa-arrow-right"></i></button>
            <button onclick="window.toggleMenu(true)" class="bg-skyAccent p-3 rounded-xl text-slate-900"><i class="fa-solid fa-bars-staggered"></i></button>
        </div>
    </div>
`;

export const RenderSearchWidget = () => `
    <div class="bg-white rounded-4xl shadow-2xl p-8 max-w-6xl mx-auto border border-slate-100">
        <div class="flex gap-8 border-b border-slate-100 mb-8 overflow-x-auto pb-2">
            <button class="flex items-center gap-2 pb-4 text-skyBlue font-bold border-b-2 border-skyBlue whitespace-nowrap">
                <i class="fa-solid fa-plane"></i> Flights
            </button>
            <button class="flex items-center gap-2 pb-4 text-slate-400 font-medium whitespace-nowrap"><i class="fa-solid fa-hotel"></i> Hotels</button>
            <button class="flex items-center gap-2 pb-4 text-slate-400 font-medium whitespace-nowrap"><i class="fa-solid fa-suitcase"></i> Packages</button>
            <button class="flex items-center gap-2 pb-4 text-slate-400 font-medium whitespace-nowrap"><i class="fa-solid fa-person-walking-luggage"></i> Activities</button>
        </div>

        <div class="flex gap-6 mb-6">
            <label class="flex items-center gap-2 cursor-pointer font-bold text-sm text-skyBlue">
                <input type="radio" name="trip" checked class="accent-skyBlue"> One Way
            </label>
            <label class="flex items-center gap-2 cursor-pointer font-medium text-sm text-slate-400">
                <input type="radio" name="trip" class="accent-skyBlue"> Round Trip
            </label>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div class="md:col-span-3 border-2 border-slate-100 rounded-2xl p-4 relative">
                <p class="text-[10px] uppercase font-bold text-slate-400 mb-1">From</p>
                <p class="font-bold text-slate-800">Dhaka</p>
                <p class="text-[10px] text-slate-400">DAC, Hazrat Shahjalal Inter</p>
                <div class="absolute -right-4 top-1/2 -translate-y-1/2 bg-white border-2 border-slate-100 p-2 rounded-full z-10 cursor-pointer">
                    <i class="fa-solid fa-right-left text-[10px] text-slate-400"></i>
                </div>
            </div>
            <div class="md:col-span-3 border-2 border-slate-100 rounded-2xl p-4">
                <p class="text-[10px] uppercase font-bold text-slate-400 mb-1">To</p>
                <p class="font-bold text-slate-800">Cox's Bazar</p>
                <p class="text-[10px] text-slate-400">CXB, Cox's Bazar Airport</p>
            </div>
            <div class="md:col-span-2 border-2 border-slate-100 rounded-2xl p-4">
                <p class="text-[10px] uppercase font-bold text-slate-400 mb-1">Departure Date</p>
                <p class="font-bold text-slate-800">22 Mar '26</p>
                <p class="text-[10px] text-slate-400">Sunday</p>
            </div>
            <div class="md:col-span-2 border-2 border-slate-100 rounded-2xl p-4 bg-slate-50/50">
                <p class="text-[10px] uppercase font-bold text-slate-400 mb-1">Return Date</p>
                <p class="text-xs text-slate-400 italic">Save more on return</p>
            </div>
            <div class="md:col-span-2">
                <button class="w-full h-full bg-skyAccent text-slate-900 font-bold rounded-2xl flex items-center justify-center gap-2 hover:brightness-95 transition py-4 md:py-0">
                    Search <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    </div>
`;
export const RenderSideMenu = () => `
    <div class="fixed inset-0 bg-black/40 backdrop-blur-sm" onclick="window.toggleMenu(false)"></div>
    <div class="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-8 overflow-y-auto flex flex-col">
        <div class="flex justify-between items-center mb-10">
            <span class="font-outfit text-2xl font-bold text-skyBlue">skyvela</span>
            <button onclick="window.toggleMenu(false)" class="text-slate-400 hover:text-red-500 transition">
                <i class="fa-solid fa-xmark text-2xl"></i>
            </button>
        </div>
        
        <div class="grid grid-cols-2 gap-y-10 gap-x-4 mb-12">
            <div>
                <h4 class="font-bold text-slate-800 mb-4 border-b pb-2">Travel</h4>
                <div class="space-y-4 text-sm font-medium text-slate-500">
                    <p class="flex items-center gap-2 hover:text-skyBlue cursor-pointer"><i class="fa-solid fa-plane"></i> Flights</p>
                    <p class="flex items-center gap-2 hover:text-skyBlue cursor-pointer"><i class="fa-solid fa-hotel"></i> Hotels</p>
                    <p class="flex items-center gap-2 hover:text-skyBlue cursor-pointer"><i class="fa-solid fa-box"></i> Packages</p>
                </div>
            </div>
            </div>
        
        <div class="mt-auto border-t pt-8">
            <p class="text-[10px] font-bold uppercase text-slate-400 mb-4">Region & Currency</p>
            <div class="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <img src="https://flagcdn.com/us.svg" class="w-6 rounded-sm">
                <span class="font-bold text-sm">English - USD</span>
                <i class="fa-solid fa-chevron-right ml-auto text-slate-300"></i>
            </div>
        </div>
    </div>
`;

export const FlightCard = (f) => `
    <div class="bg-white p-6 rounded-2xl border border-skyBorder hover:shadow-xl transition-all group">
        <div class="flex justify-between items-start mb-6">
            <div class="flex items-center gap-3">
                <i class="fa-solid fa-plane text-skyBlue text-xl"></i>
                <span class="font-bold text-lg">${f.code}</span>
            </div>
            <div class="text-right">
                <p class="text-[10px] text-slate-400 font-bold uppercase">${f.badgeLabel}</p>
                <p class="text-xs text-skyAccent font-bold">${f.badgeText}</p>
            </div>
        </div>
        <div class="flex items-center justify-between mb-6">
            <div class="text-center"><p class="font-bold">${f.from}</p><p class="text-xs text-slate-400">1 Stop</p></div>
            <div class="flex-1 px-4"><div class="h-[1px] bg-slate-200 w-full relative">
                <i class="fa-solid fa-plane absolute left-1/2 -top-2 text-[10px] text-skyBlue/40"></i>
            </div></div>
            <div class="text-center"><p class="font-bold">${f.to}</p><p class="text-xs text-slate-400">Dubai</p></div>
        </div>
        <div class="flex items-center justify-between pt-4 border-t border-slate-50">
            <div class="flex items-center gap-2">
                <img src="${f.logo}" class="w-6 h-6 rounded-full object-cover">
                <span class="text-xs font-semibold text-slate-600">${f.airline}</span>
            </div>
            <p class="font-bold text-skyBlue">$${f.price}<span class="text-[10px] font-normal text-slate-400"> / person</span></p>
        </div>
    </div>
`;

export const HotelCard = (hotel) => `
    <div class="bg-white  rounded-[12px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
        <div class="relative h-[220px] overflow-hidden rounded-tl-[20px] rounded-tr-[20px]">
            <img src="${hotel.img}" class="w-full px-6 pt-6  h-full object-cover group-hover:scale-110 transition-transform duration-700">
            
            <div class="absolute top-10 left-0 z-10">
                <div class="bg-skyAccent text-slate-900 text-[11px] font-bold px-4 py-1.5 rounded-r-md flex items-center shadow-md">
                    ${hotel.badge}
                    <div class="absolute -bottom-[6px] left-0 w-0 h-0 border-t-[6px] border-t-amber-600 border-l-[6px] border-l-transparent"></div>
                </div>
            </div>
            
            <div class="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button class="bg-white/20 backdrop-blur-md text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/40 transition">
                    <i class="fa-solid fa-chevron-left text-xs"></i>
                </button>
                <button class="bg-white/20 backdrop-blur-md text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/40 transition">
                    <i class="fa-solid fa-chevron-right text-xs"></i>
                </button>
            </div>
        </div>

        <div class="p-5 flex-grow">
            <div class="flex justify-between items-start mb-2">
                <h3 class="font-outfit text-[22px]  text-skyBlue leading-tight">${hotel.name}</h3>
                <div class="text-right">
                    <div class="flex text-skyAccent text-[10px] justify-end mb-1">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    </div>
                    <p class="text-sm text-skyBlue ">${hotel.reviews}</p>
                </div>
            </div>

            <p class="text-skyBlue text-sm mb-6 flex items-center">
                <i class="fa-solid fa-location-dot text-skyBlue mr-1"></i>
                ${hotel.location}
            </p>

            <div class="flex justify-between items-end ">
                <div class="space-y-2">
                    <div class="flex items-center gap-2 text-slate-500 text-xs">
                        <i class="fa-solid fa-mug-hot text-amber-500"></i>
                        <span class="text-skyvela text-sm">Breakfast included</span>
                    </div>
                    <div class="flex items-center gap-3 text-slate-400 text-[11px]">
                        <span class="flex items-center gap-1 text-skyvela text-sm"><i class="fa-solid fa-wifi text-green-500"></i> Free Wifi</span>
                        <span class="flex items-center gap-1 text-skyvela text-sm"><i class="fa-solid fa-snowflake text-skyCyan"></i> Spa</span>
                    </div>
                </div>
                <div class="text-right">
                    <p class="text-2xl font-semibold text-skyBlue leading-none">$${hotel.price}</p>
                    <p class="text-skyvela text-sm mt-1  whitespace-nowrap">for 1 Night, per person</p>
                </div>
            </div>
        </div>
    </div>
`;

// Updated Activity Card Component
export const ActivityCard = (act) => `
    <div class=" h-full">
        <div class="rounded-[12px] overflow-hidden group h-full flex flex-col transition-all duration-300">
            <div class="relative h-[220px] md:h-[240px] overflow-hidden">
                <img src="${act.img}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 rounded-[12px]">
                <span class="absolute top-4 left-4 bg-skyBlue/90 backdrop-blur-sm text-gray50 text-[11px] font-medium px-4 py-1.5 rounded-full shadow-lg">
                    ${act.badge}
                </span>
            </div>
            
            <div class="py-5 flex-grow flex flex-col">
                <div class="flex items-center gap-1 mb-2">
                    <div class="flex text-[#FFB800] text-[10px]">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <span class="text-skyBlue text-xs font-medium ml-1">4.8 (3.0K Reviews)</span>
                </div>
                
                <h3 class="font-outfit text-[19px]  text-skyBlue mb-2 leading-tight">
                    ${act.title}
                </h3>
                
                <p class="text-skyBlue text-sm mb-2 flex items-center">
                    <i class="fa-solid fa-location-dot text-skyBlue mr-1"></i>
                    ${act.location}
                </p>
                
                <div class="mt-auto pt-2 border-t border-slate-50">
                    <p class="text-xs  text-skyvela ">FROM 
                        <span class="text-xl text-skyBlue ml-1 font-bold">$${act.price}</span>
                        <span class="text-[10px] text-xs  text-skyvela font-normal lowercase ml-0.5">/person</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
`;

export const RenderPromotionalSection = (promos) => `
    <div class="space-y-1 mb-6">
        <p class="text-skyvela text-base tracking-wider">Special Offers</p>
        <h2 class="font-outfit text-[20px] lg:text-[32px] font-semibold text-skyBlue tracking-wide">Promotional Offers</h2>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div class="relative rounded-[12px] overflow-hidden min-h-[280px] md:h-full group cursor-pointer">
            <img src="${promos[0].img}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
            <div class="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            
            <div class="relative z-10 p-6 h-full flex flex-col justify-between items-start">
                <h3 class="text-[28px] lg:text-3xl font-semibold text-gray50 leading-tight max-w-[200px] tracking-wide">
                    ${promos[0].title}
                </h3>
                <span class="bg-white text-skyBlue px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg transition-colors hover:bg-gray-100">
                    ${promos[0].text}
                </span>
            </div>
        </div>

        <div class="relative rounded-[12px] overflow-hidden min-h-[280px] md:h-full group cursor-pointer bg-[#0091FF]">
            <img src="${promos[1].img}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
            <div class="absolute inset-0 bg-skyBlue/10 backdrop-blur-[1px]"></div>
            
            <div class="relative z-10 py-6 h-full flex flex-col justify-between items-start">
                <div class="space-y-4">
                    <span class="bg-[#D02A00] text-gray50 px-5 py-2 rounded-tr-lg rounded-br-lg text-[10px] font-bold uppercase tracking-[0.2em] shadow-md">
                        Limited-Time Offer
                    </span>
                    <h3 class="text-[28px] lg:text-3xl pl-6 font-semibold text-gray50 leading-tight max-w-[240px] drop-shadow-md tracking-wide">
                        Up to 50% Savings on Flights
                    </h3>
                </div>
                <p class="text-gray50 pl-6 text-sm font-semibold opacity-90 tracking-widest drop-shadow-sm">18 - 20 March 2026</p>
            </div>
        </div>

        <div class="relative rounded-[12px] overflow-hidden min-h-[280px] md:h-full group cursor-pointer bg-skyBlue">
            <img src="${promos[2].img}" class="absolute top-0 right-0 w-[85%] h-full object-cover object-right group-hover:scale-105 transition-transform duration-700">
            
            <div class="absolute inset-0 bg-gradient-to-r from-skyBlue via-skyBlue/60 to-transparent"></div>

            <div class="relative z-10 p-8 h-full flex flex-col justify-between items-start">
                <h3 class="text-[28px] lg:text-3xl font-semibold text-gray50 leading-tight max-w-[180px] drop-shadow-md tracking-wide">
                    Start your next journey
                </h3>
                <span class="bg-white text-skyBlue px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg transition-transform active:scale-95">
                    50% Off Hotel Bookings
                </span>
            </div>
        </div>
    </div>
`;
export const RenderFooter = () => `
    <div class="max-w-[1140px] mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            
            <div class="lg:col-span-4">
                <div class="mr-auto -mt-7">
                    <img src="./assets/footer-logo.png" class="w-[168px]" alt="Skyvela Logo">
                </div>
                <p class="text-gray50 max-w-[306px] text-sm font-medium leading-relaxed mb-10">
                    Your smart travel companion for flights, hotels, activities and more — across the globe.
                </p>
                <div class="space-y-6">
                    <div>
                        <p class="text-sm uppercase mb-3 text-gray50 font-medium">Language</p>
                        <div class="flex flex-wrap gap-2">
                            ${['English', 'বাংলা', 'Français', 'عربي'].map((l, i) => `
                                <span class="${i === 0 ? 'bg-primary900 text-gray50' : 'bg-primary800 text-gray50/70 hover:bg-white/10'} px-4 py-2 rounded-lg text-xs cursor-pointer transition font-medium">${l}</span>
                            `).join('')}
                        </div>
                    </div>
                    <div>
                        <p class="text-sm uppercase mb-3 text-gray50 font-medium">Currency</p>
                        <div class="flex flex-wrap gap-2">
                            ${['USD', 'EUR', 'GBP', 'BDT', 'AED'].map((c, i) => `
                                <span class="${i === 0 ? 'bg-[#293b6e] text-gray50' : 'bg-primary800 text-gray50/70 hover:bg-white/10'} px-4 py-2 rounded-lg text-xs cursor-pointer transition font-medium">${c}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-7 lg:col-start-6 grid grid-cols-2 lg:grid-cols-3 gap-10">
                <div>
                    <h4 class="font-bold mb-6 text-sm tracking-wide text-gray50">EXPLORE</h4>
                    <ul class="space-y-4 text-gray50 hover:[&>li>a]:text-gray50/70 text-sm">
                        <li><a href="#" class="transition tracking-wide">Flights</a></li>
                        <li><a href="#" class="transition tracking-wide">Hotels</a></li>
                        <li><a href="#" class="transition tracking-wide">Activities & Tours</a></li>
                        <li><a href="#" class="transition tracking-wide">Flight + Hotel</a></li>
                        <li><a href="#" class="transition tracking-wide">Airport Transfers</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-bold mb-6 text-sm tracking-wide text-gray50">COMPANY</h4>
                    <ul class="space-y-4 text-gray50 hover:[&>li>a]:text-gray50/70 text-sm">
                        <li><a href="#" class="transition tracking-wide">About Us</a></li>
                        <li><a href="#" class="transition tracking-wide">Blog</a></li>
                        <li><a href="#" class="transition tracking-wide">Gallery</a></li>
                        <li><a href="#" class="transition tracking-wide">Contact Us</a></li>
                        <li><a href="#" class="transition tracking-wide">Help Center</a></li>
                    </ul>
                </div>

                <div class="col-span-2 lg:col-span-1">
                    <h4 class="font-bold mb-6 text-sm tracking-wide text-gray50">LEGAL</h4>
                    <ul class="space-y-4 text-gray50 hover:[&>li>a]:text-gray50/70 text-sm">
                        <li><a href="#" class="transition tracking-wide">Terms & Conditions</a></li>
                        <li><a href="#" class="transition tracking-wide">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p class="text-sm text-gray50">Copyright © 2026 Skyvela, All Rights Reserved.</p>
            <div class="flex flex-wrap justify-center gap-4 text-sm text-gray50">
                <a href="#" class="hover:text-gray50/70 transition">Facebook</a>
                <span class="hidden md:inline">|</span>
                <a href="#" class="hover:text-gray50/70 transition">LinkedIn</a>
                <span class="hidden md:inline">|</span>
                <a href="#" class="hover:text-gray50/70 transition">Twitter</a>
                <span class="hidden md:inline">|</span>
                <a href="#" class="hover:text-gray50/70 transition">Instagram</a>
            </div>
        </div>
    </div>
`;
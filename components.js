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
            <button class="bg-skyBlue text-white px-8 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2">Sign In <i class="fa-solid fa-arrow-right"></i></button>
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

// Activity Card Component
export const ActivityCard = (act) => `
    <div class="swiper-slide h-full">
        <div class="bg-white rounded-3xl overflow-hidden group h-full flex flex-col">
            <div class="relative h-56">
                <img src="${act.img}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <span class="absolute top-4 left-4 bg-skyBlue text-white text-[10px] font-bold px-3 py-1 rounded-md">${act.badge}</span>
            </div>
            <div class="p-6 flex-grow">
                <p class="text-skyAccent text-xs font-bold mb-2">⭐ 4.8 (3.0K Reviews)</p>
                <h3 class="font-bold text-lg mb-1">${act.title}</h3>
                <p class="text-slate-400 text-sm mb-4"><i class="fa-solid fa-location-dot mr-1"></i>Switzerland</p>
                <p class="text-lg font-bold text-skyBlue mt-auto">FROM $99 <span class="text-xs font-normal text-slate-400">/ person</span></p>
            </div>
        </div>
    </div>
`;

// Promotional Offer Component
export const PromoCard = (p) => `
    <div class="rounded-[32px] p-8 ${p.bg} text-white min-h-[220px] flex flex-col justify-between relative overflow-hidden group">
        <span class="bg-white/20 self-start px-3 py-1 rounded-md text-[10px] font-bold uppercase">${p.label}</span>
        <div class="z-10">
            <h3 class="text-2xl font-bold leading-tight mb-2">${p.title}</h3>
            <p class="text-white/80 font-medium">${p.text}</p>
        </div>
        <i class="${p.icon} absolute -right-6 -bottom-6 text-9xl text-white/10 group-hover:scale-110 transition-transform"></i>
    </div>
`;

export const RenderFooter = () => `
    <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div class="lg:col-span-2">
                <div class="flex items-center gap-2 mb-6">
                    <i class="fa-solid fa-plane-departure text-white text-2xl"></i>
                    <span class="font-outfit text-2xl font-bold">skyvela</span>
                </div>
                <p class="text-white/70 max-w-xs leading-relaxed mb-8">
                    Your smart travel companion for flights, hotels, activities and more — across the globe.
                </p>
                <div class="space-y-6">
                    <div>
                        <p class="text-xs font-bold uppercase mb-3 text-white/50 tracking-widest">Language</p>
                        <div class="flex flex-wrap gap-2">
                            ${['English', 'বাংলা', 'Français', 'اردو'].map(l => `<span class="bg-white/10 px-3 py-1.5 rounded-lg text-xs cursor-pointer hover:bg-white/20 transition">${l}</span>`).join('')}
                        </div>
                    </div>
                    <div>
                        <p class="text-xs font-bold uppercase mb-3 text-white/50 tracking-widest">Currency</p>
                        <div class="flex flex-wrap gap-2">
                            ${['USD', 'EUR', 'GBP', 'BDT', 'AED'].map(c => `<span class="bg-white/10 px-3 py-1.5 rounded-lg text-xs cursor-pointer hover:bg-white/20 transition">${c}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h4 class="font-bold mb-6 uppercase text-sm tracking-widest">Explore</h4>
                <ul class="space-y-4 text-white/70 text-sm">
                    <li><a href="#" class="hover:text-white transition">Flights</a></li>
                    <li><a href="#" class="hover:text-white transition">Hotels</a></li>
                    <li><a href="#" class="hover:text-white transition">Activities & Tours</a></li>
                    <li><a href="#" class="hover:text-white transition">Flight + Hotel</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-bold mb-6 uppercase text-sm tracking-widest">Company</h4>
                <ul class="space-y-4 text-white/70 text-sm">
                    <li><a href="#" class="hover:text-white transition">About Us</a></li>
                    <li><a href="#" class="hover:text-white transition">Blog</a></li>
                    <li><a href="#" class="hover:text-white transition">Contact Us</a></li>
                    <li><a href="#" class="hover:text-white transition">Help Center</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-bold mb-6 uppercase text-sm tracking-widest">Legal</h4>
                <ul class="space-y-4 text-white/70 text-sm">
                    <li><a href="#" class="hover:text-white transition">Terms & Conditions</a></li>
                    <li><a href="#" class="hover:text-white transition">Privacy Policy</a></li>
                </ul>
            </div>
        </div>

        <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p class="text-xs text-white/40">Copyright © 2026 Skyvela, All Rights Reserved.</p>
            <div class="flex gap-6 text-xs text-white/60">
                <a href="#" class="hover:text-white">Facebook</a>
                <a href="#" class="hover:text-white">LinkedIn</a>
                <a href="#" class="hover:text-white">Twitter</a>
                <a href="#" class="hover:text-white">Instagram</a>
            </div>
        </div>
    </div>
`;
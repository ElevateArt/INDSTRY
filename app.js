// INDSTRY App - Main JavaScript

// Image paths for easy reference
const IMAGES = {
    mua1: 'Images/kirstenmichelle._A_makeup_artist_applying_lipstick_on_the_face__bc8a9dc7-3410-4ef1-977c-a59ddfd46555.png',
    mua2: 'Images/diecoscs_Editorial_photography_of_a_makeup_artist_working_at_a__007b9b45-f7d6-4592-a865-5f4c9ef041a4.png',
    mua3: 'Images/u6442654211_video_of_a_Professional_makeup_artists_applying_mak_f815ffa2-829c-49e3-8043-fffca2f076bd.png',
    mua4: 'Images/moonlight16948_A_calm_behind-the-scenes_beauty_studio_scene_a_y_375082e5-b434-4a2f-a1d6-f1d9ebe90f61.png',
    photographer1: 'Images/shoaibak__28878_Happy_man_taking_photos_on_street_with_camera_-_5295f414-afd7-4434-b9f4-563a53d6accc.png',
    photographer2: 'Images/waldemarpawlik_Dynamic_photo_of_young_photographer_during_portr_07a0d5d7-8090-4e0f-986c-b2f6005b5912.png',
    photographer3: 'Images/tess2447_Young_man_with_backpack_and_travel_with_a_camera_hangi_e9970390-f724-4918-b781-adc6b8188909.png',
    videographer1: 'Images/asraar4758_A_young_compassionate_professional_indian_videograph_eac88325-a1bb-4f15-972d-d6574da572ce.png',
    videographer2: 'Images/gomezdavid1728_a_person_operating_a_professional_video_camera_m_e3ee4e09-3ec6-4e85-9e71-b38eb2472239.png',
    videographer3: 'Images/ziburta1818_making_movie_asiatic_--profile_caqeuu8_--v_7_efa059cf-abf9-4fe4-b683-217c98e07db7.png',
    hairstylist1: 'Images/mamaboy39_A_stylish_Korean_female_hairdresser_in_her_30s_wearin_d02113d8-156a-4294-8a4f-909b062cd24c.png',
    hairstylist2: 'Images/yukowka_hairdressers_stylists_in_hair_salon_are_getting_lesson__45749440-01ac-4470-bfb3-98a74331407d.png',
    designer1: 'Images/sf_hannah_a_person_drawing_a_picture_--ar_169_--v_7_dfe2603e-09dd-4db7-af73-309d113824a7.png',
    designer2: 'Images/faiafractals_graphic_design_web_design_dark_background_--chaos__080a5e8b-7576-49b2-aab6-7aa602fd9ed6.png',
    cinematic1: 'Images/cosmicpalette_Cinematic_hyperrealism_takes_center_stage_as_the__54da8559-89cf-46eb-a8b5-0def9e1d331d.png',
    cinematic2: 'Images/u8669325665_long_shot_still_from_video_Brazilian_Amazonian_yawa_aa2b3ec2-2faf-4b1b-bc70-544a690f88c3.png',
    pov: 'Images/tusharkharayat_photorealistic_first-person_perspective_shot_loo_06cdd071-231c-45e4-9376-22134685ba27.png',
    coolPro: 'Images/the_prompt_crafters_A_photo_of_a_middle_aged_handsome_and_cool__64830ecf-b889-4f20-bad9-8ac645d1ccf9.png'
};

// Mock Data
const mockFeed = [
    {
        id: 'p1',
        handle: '@blend.by.kenna',
        displayName: 'Kenna Reef',
        avatar: IMAGES.mua1,
        role: 'MUA',
        location: 'Los Angeles',
        availability: 'Available Oct 14',
        verified: true,
        accentColor: 'cyan',
        image: IMAGES.mua2,
        tags: ['Editorial', 'Beauty'],
        title: 'Soft Glam for Editorial Sets: Full Process',
        description: 'Behind the scenes on my latest shoot for Vogue. Breaking down skin prep, lighting checks, and final touches.',
        stats: { likes: '1.2k', comments: '142', saves: '310' }
    },
    {
        id: 'p2',
        handle: '@lens.by.marcus',
        displayName: 'Marcus Lens',
        avatar: IMAGES.photographer1,
        role: 'Photographer',
        location: 'NYC',
        availability: 'Booking Nov',
        verified: false,
        accentColor: 'amber',
        image: IMAGES.photographer2,
        tags: ['Lighting', 'Portrait'],
        title: 'Natural Light Studio Setup',
        description: 'Using negative fill to shape the face in harsh noon sunlight. Simple but effective technique for portraiture.',
        stats: { likes: '4.9k', comments: '520', saves: '1.1k' }
    },
    {
        id: 'p3',
        handle: '@niko.dp',
        displayName: 'Niko James',
        avatar: IMAGES.videographer1,
        role: 'DP',
        location: 'Berlin',
        availability: 'Available Now',
        verified: true,
        accentColor: 'fuchsia',
        image: IMAGES.videographer2,
        tags: ['Cinematography', 'Music Video'],
        title: 'Lighting Breakdown: Neon + Skin Tones',
        description: 'Quick breakdown of how I lit this music video scene. The key is balancing practical neons with skin-friendly fill.',
        stats: { likes: '2.8k', comments: '341', saves: '890' }
    },
    {
        id: 'p4',
        handle: '@stylist.ayla',
        displayName: 'Ayla Parker',
        avatar: IMAGES.hairstylist1,
        role: 'Hair Stylist',
        location: 'Seoul',
        availability: 'Booking Dec',
        verified: false,
        accentColor: 'amber',
        image: IMAGES.hairstylist2,
        tags: ['Hair', 'Fashion'],
        title: '3 Looks in 10 Seconds (Client-approved)',
        description: 'Swipeable styles linked to my case studies and availability calendar. INDSTRY makes your work instantly actionable.',
        stats: { likes: '2.6k', comments: '201', saves: '740' }
    }
];

const mockJobs = [
    {
        id: 'j1',
        title: 'Editorial MUA',
        company: 'Vogue Italia',
        type: 'Freelance',
        budget: '$1.2k/day',
        budgetType: 'green',
        logo: 'V',
        logoGradient: 'from-pink-500 to-rose-600',
        description: 'Looking for an experienced MUA for a 2-day outdoor editorial shoot in Sicily. Must have experience with natural glow looks.',
        tags: ['Travel Paid', 'Oct 20-22', 'Sicily, Italy']
    },
    {
        id: 'j2',
        title: 'Head of Styling',
        company: 'H&M Studio',
        type: 'Contract',
        budget: 'DOE',
        budgetType: 'neutral',
        logo: 'H',
        logoGradient: 'from-red-500 to-orange-600',
        description: 'Leading the styling team for the upcoming SS24 campaign. Coordination with creative director required.',
        tags: ['Stockholm', '3 Months', 'On-site']
    },
    {
        id: 'j3',
        title: 'Product Photographer',
        company: 'Nike',
        type: 'Full-time',
        budget: '$85k - $110k',
        budgetType: 'green',
        logo: 'N',
        logoGradient: 'from-gray-800 to-black',
        description: 'Join our in-house creative team to shoot product photography for global campaigns.',
        tags: ['Portland, OR', 'On-site', 'Benefits']
    },
    {
        id: 'j4',
        title: 'Key Makeup Artist',
        company: 'Sunset Line Productions',
        type: 'Contract',
        budget: '$2.4k/week',
        budgetType: 'green',
        logo: 'SL',
        logoGradient: 'from-purple-500 to-indigo-600',
        description: 'Streaming series production seeking key makeup artist for 8-week shoot. Union rates.',
        tags: ['Los Angeles', '8 Weeks', 'Union']
    },
    {
        id: 'j5',
        title: 'Runway Show - Team Lead',
        company: 'INDSTRY Collective',
        type: 'Freelance',
        budget: '$1.1k total',
        budgetType: 'green',
        logo: 'IC',
        logoGradient: 'from-cyan-500 to-blue-600',
        description: 'Fashion Week runway show needs experienced team lead for hair and makeup.',
        tags: ['NYC', '2 Nights', 'Team Lead']
    }
];

const mockMessages = [
    {
        id: 'm1',
        name: 'Sarah Jenkins',
        avatar: IMAGES.mua3,
        message: 'Hey! Are you available for a shoot next Tuesday?',
        time: '10:42 AM',
        unread: true
    },
    {
        id: 'm2',
        name: 'Mike Studio',
        avatar: IMAGES.photographer3,
        message: 'I sent over the moodboard. Let me know what you think.',
        time: 'Yesterday',
        unread: false
    },
    {
        id: 'm3',
        name: 'Alex Creative',
        avatar: IMAGES.coolPro,
        message: 'Thanks for the connection!',
        time: 'Oct 12',
        unread: false
    },
    {
        id: 'm4',
        name: 'Jin Park',
        avatar: IMAGES.videographer3,
        message: 'Would love to collaborate on the music video project.',
        time: 'Oct 10',
        unread: false
    }
];

const mockCourses = [
    {
        id: 'c1',
        title: 'Building a 6-Figure Bridal Business',
        mentor: 'Talia Monroe',
        mentorAvatar: IMAGES.mua3,
        level: 'Intermediate',
        duration: '8-part series • 2h 40m',
        progress: 38,
        color: 'fuchsia',
        image: IMAGES.mua4,
        students: '2.4k'
    },
    {
        id: 'c2',
        title: 'On-Set Etiquette for Film & TV',
        mentor: 'David Cruz',
        mentorAvatar: IMAGES.coolPro,
        level: 'All levels',
        duration: '5 lessons • 1h 10m',
        progress: 0,
        color: 'cyan',
        image: IMAGES.videographer2,
        students: '1.8k'
    },
    {
        id: 'c3',
        title: 'Lighting & Skin: Working With DPs',
        mentor: 'Kenna Reef x Indie DP',
        mentorAvatar: IMAGES.mua1,
        level: 'Advanced',
        duration: 'Live session replay • 55m',
        progress: 72,
        color: 'amber',
        image: IMAGES.photographer2,
        students: '3.1k'
    },
    {
        id: 'c4',
        title: 'Portfolio to Paid: Brand Positioning',
        mentor: 'INDSTRY Collective',
        mentorAvatar: IMAGES.designer1,
        level: 'All levels',
        duration: 'Mini-class • 30m',
        progress: 15,
        color: 'cyan',
        image: IMAGES.cinematic1,
        students: '5.2k'
    }
];

const mockProfile = {
    name: 'Kenna Reef',
    initials: 'KR',
    title: 'Celebrity Makeup Artist • Creative Director',
    avatar: IMAGES.mua1,
    location: 'Los Angeles',
    rating: '4.9',
    reviews: 128,
    verified: true,
    followers: '12.4k',
    following: '842',
    specialties: ['Bridal', 'Editorial', 'Runway', 'Film/TV'],
    portfolio: [
        { label: 'Vogue Cover', image: IMAGES.cinematic1 },
        { label: 'Film Set', image: IMAGES.videographer2 },
        { label: 'Runway Show', image: IMAGES.hairstylist2 },
        { label: 'Brand Campaign', image: IMAGES.mua4 },
        { label: 'Bridal Party', image: IMAGES.mua2 },
        { label: 'Music Video', image: IMAGES.cinematic2 }
    ],
    services: [
        { label: 'On-set day rate', value: '$950' },
        { label: 'Bridal package', value: '$650' },
        { label: 'Touch-ups', value: '$150' }
    ],
    availability: 'Thu • Fri • Sun'
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadThemePreference();
    loadDevicePreference();
    renderFeed();
    renderDiscover();
    renderJobs();
    renderMessages();
    renderProfile();
    renderRightPanel();
    renderMasterclassDrawer();
    switchMainView('feed');
});

// View switching
function switchMainView(viewId) {
    const views = document.querySelectorAll('.view-section');
    views.forEach(view => {
        view.classList.add('hidden');
        view.classList.remove('flex');
    });

    const selectedView = document.getElementById('view-' + viewId);
    if (selectedView) {
        selectedView.classList.remove('hidden');
        selectedView.classList.add('flex');
    }

    const navIds = ['feed', 'discover', 'jobs', 'messages', 'profile'];
    navIds.forEach(id => {
        const btn = document.getElementById('nav-' + id);
        const indicator = btn.querySelector('.active-indicator');
        
        if (id === viewId) {
            btn.classList.add('bg-white/5', 'text-cyan-400', 'border-white/5');
            btn.classList.remove('text-slate-400', 'hover:text-white');
            if(indicator) indicator.classList.remove('hidden');
        } else {
            btn.classList.remove('bg-white/5', 'text-cyan-400', 'border-white/5');
            btn.classList.add('text-slate-400', 'hover:text-white');
            if(indicator) indicator.classList.add('hidden');
        }
    });
}

// Render Feed
function renderFeed() {
    const container = document.getElementById('view-feed');
    container.innerHTML = `
        <div class="overflow-y-auto hide-scrollbar snap-y snap-mandatory pb-20">
            <div class="flex items-center justify-between px-4 mb-4 z-20 sticky top-0 py-4 bg-slate-950/80 backdrop-blur-md">
                <div class="flex flex-col">
                    <span class="text-[10px] tracking-[0.25em] text-slate-500 uppercase font-semibold">Feed</span>
                    <h1 class="text-sm font-semibold text-white">For You</h1>
                </div>
                <button class="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                    <span class="iconify" data-icon="lucide:filter"></span>
                </button>
            </div>
            ${mockFeed.map((post, idx) => renderFeedPost(post, idx)).join('')}
        </div>
    `;
}

function renderFeedPost(post, idx) {
    // Use full class names for Tailwind JIT to pick them up
    const colorClasses = {
        cyan: {
            border: 'border-cyan-400',
            bg: 'bg-cyan-400',
            bgHover: 'hover:bg-cyan-300',
            text: 'text-cyan-400',
            tagBg: 'bg-cyan-950/50',
            tagBorder: 'border-cyan-400/20'
        },
        amber: {
            border: 'border-amber-400',
            bg: 'bg-amber-400',
            bgHover: 'hover:bg-amber-300',
            text: 'text-amber-400',
            tagBg: 'bg-amber-950/50',
            tagBorder: 'border-amber-400/20'
        },
        fuchsia: {
            border: 'border-fuchsia-400',
            bg: 'bg-fuchsia-400',
            bgHover: 'hover:bg-fuchsia-300',
            text: 'text-fuchsia-400',
            tagBg: 'bg-fuchsia-950/50',
            tagBorder: 'border-fuchsia-400/20'
        }
    };
    const c = colorClasses[post.accentColor] || colorClasses.cyan;
    
    return `
        <div class="snap-start shrink-0 relative w-full h-[calc(100vh-100px)] md:h-[650px] bg-slate-900 md:rounded-[2rem] overflow-hidden border-b md:border border-white/10 mb-6 shadow-2xl">
            <div class="absolute inset-0 z-0">
                <img src="${post.image}" class="w-full h-full object-cover opacity-80" alt="Content">
                <div class="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/90"></div>
            </div>
            
            <div class="absolute top-0 left-0 right-0 p-5 z-10 flex justify-between items-start">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full border-2 ${c.border} p-0.5 relative">
                        <img src="${post.avatar}" class="w-full h-full object-cover rounded-full" alt="Creator">
                        ${post.verified ? `<div class="absolute -bottom-1 -right-1 w-4 h-4 ${c.bg} rounded-full flex items-center justify-center border border-black">
                            <span class="iconify text-black w-2.5 h-2.5" data-icon="lucide:check"></span>
                        </div>` : ''}
                    </div>
                    <div>
                        <div class="flex items-center gap-1.5">
                            <span class="font-display font-semibold text-sm drop-shadow-md">${post.displayName}</span>
                            <span class="text-[10px] bg-white/20 backdrop-blur-md px-1.5 py-0.5 rounded text-white font-medium">${post.role}</span>
                        </div>
                        <span class="text-[10px] text-slate-300 drop-shadow-md">${post.location} • ${post.availability}</span>
                    </div>
                </div>
                <button class="px-3 py-1.5 ${c.bg} ${c.bgHover} text-slate-950 text-xs font-bold rounded-full transition-colors">Follow</button>
            </div>

            <!-- Book Now Button - positioned in action buttons column -->
            <div class="absolute right-2 bottom-52 z-20">
                <button class="group flex items-center gap-2 px-3 py-2 bg-white text-slate-950 rounded-full hover:bg-cyan-400 transition-all shadow-lg">
                    <span class="iconify w-4 h-4" data-icon="lucide:calendar-check"></span>
                    <span class="text-[10px] font-bold">Book</span>
                </button>
            </div>

            <div class="absolute right-2 bottom-24 z-20 flex flex-col gap-5 items-center">
                <button class="group flex flex-col items-center gap-1">
                    <div class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-fuchsia-500/20 group-hover:scale-110 transition-all border border-white/10">
                        <span class="iconify text-white group-hover:text-fuchsia-500 w-5 h-5" data-icon="lucide:heart"></span>
                    </div>
                    <span class="text-[10px] font-medium drop-shadow-md">${post.stats.likes}</span>
                </button>
                <button class="group flex flex-col items-center gap-1">
                    <div class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-cyan-400/20 group-hover:scale-110 transition-all border border-white/10">
                        <span class="iconify text-white group-hover:text-cyan-400 w-5 h-5" data-icon="lucide:message-circle"></span>
                    </div>
                    <span class="text-[10px] font-medium drop-shadow-md">${post.stats.comments}</span>
                </button>
                <button class="group flex flex-col items-center gap-1">
                    <div class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-amber-400/20 group-hover:scale-110 transition-all border border-white/10">
                        <span class="iconify text-white group-hover:text-amber-400 w-5 h-5" data-icon="lucide:bookmark"></span>
                    </div>
                    <span class="text-[10px] font-medium drop-shadow-md">${post.stats.saves}</span>
                </button>
            </div>

            <div class="absolute bottom-0 left-0 w-full p-5 pb-8 z-10 bg-gradient-to-t from-black via-black/60 to-transparent">
                <div class="flex items-center gap-2 mb-2">
                    ${post.tags.map(tag => `<span class="text-[10px] font-bold uppercase tracking-wider ${c.text} ${c.tagBg} px-2 py-0.5 rounded border ${c.tagBorder}">${tag}</span>`).join('')}
                </div>
                <h2 class="text-xl font-display font-medium leading-tight mb-2 pr-12">${post.title}</h2>
                <p class="text-xs text-slate-300 line-clamp-2 max-w-[85%] leading-relaxed opacity-90">${post.description}</p>
                <div class="w-full h-1 bg-white/20 rounded-full mt-4 overflow-hidden"><div class="video-progress rounded-full" style="animation-delay: -${idx * 5}s;"></div></div>
            </div>
        </div>
    `;
}

// Render Discover
function renderDiscover() {
    const container = document.getElementById('view-discover');
    container.innerHTML = `
        <div class="overflow-y-auto hide-scrollbar px-4 pb-20 animate-fade-in">
            <div class="sticky top-0 bg-slate-950/90 backdrop-blur-md z-20 pt-4 pb-4">
                <h1 class="text-2xl font-display font-bold mb-4 tracking-tight">Discover</h1>
                <div class="relative group">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors">
                        <span class="iconify w-5 h-5" data-icon="lucide:search"></span>
                    </span>
                    <input type="text" placeholder="Search creators, moodboards, styles..." class="w-full bg-slate-900 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-slate-600">
                </div>
                <div class="flex gap-2 mt-4 overflow-x-auto hide-scrollbar pb-2">
                    <button class="px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-medium whitespace-nowrap">For You</button>
                    <button class="px-4 py-1.5 bg-slate-900 border border-white/10 text-slate-300 rounded-full text-xs font-medium whitespace-nowrap hover:bg-slate-800">Photography</button>
                    <button class="px-4 py-1.5 bg-slate-900 border border-white/10 text-slate-300 rounded-full text-xs font-medium whitespace-nowrap hover:bg-slate-800">Videography</button>
                    <button class="px-4 py-1.5 bg-slate-900 border border-white/10 text-slate-300 rounded-full text-xs font-medium whitespace-nowrap hover:bg-slate-800">HMUA</button>
                    <button class="px-4 py-1.5 bg-slate-900 border border-white/10 text-slate-300 rounded-full text-xs font-medium whitespace-nowrap hover:bg-slate-800">Design</button>
                </div>
            </div>

            <div class="mt-2">
                <h2 class="text-sm font-semibold text-white mb-3">Trending Now</h2>
                <div class="grid grid-cols-2 gap-3">
                    ${[
                        { img: IMAGES.cinematic1, title: 'Cinematic Realism', views: '12.4k' },
                        { img: IMAGES.mua4, title: 'BTS Beauty', views: '8.2k' },
                        { img: IMAGES.designer2, title: 'Dark Design', views: '6.1k' },
                        { img: IMAGES.cinematic2, title: 'Documentary Style', views: '9.7k' }
                    ].map(item => `
                        <div class="aspect-[4/5] relative rounded-xl overflow-hidden group cursor-pointer">
                            <img src="${item.img}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-3 flex flex-col justify-end">
                                <span class="text-xs font-bold text-white">${item.title}</span>
                                <span class="text-[10px] text-slate-400">${item.views} Views</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="mt-6">
                <div class="flex justify-between items-end mb-3">
                    <h2 class="text-sm font-semibold text-white">Featured Creatives</h2>
                    <button class="text-[10px] text-cyan-400">View all</button>
                </div>
                <div class="space-y-3">
                    ${[
                        { name: 'Elena Rose', role: 'Celebrity MUA', location: 'London', avatar: IMAGES.mua3 },
                        { name: 'Marco D.', role: 'Travel Photographer', location: 'Berlin', avatar: IMAGES.photographer3 },
                        { name: 'Jin Park', role: 'Director of Photo', location: 'Seoul', avatar: IMAGES.videographer3 },
                        { name: 'Hannah S.', role: 'Illustrator', location: 'NYC', avatar: IMAGES.designer1 },
                        { name: 'David Cruz', role: 'Creative Director', location: 'LA', avatar: IMAGES.coolPro }
                    ].map(creator => `
                        <div class="flex items-center gap-3 p-3 bg-slate-900 rounded-xl border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
                            <div class="w-12 h-12 rounded-full overflow-hidden">
                                <img src="${creator.avatar}" class="w-full h-full object-cover">
                            </div>
                            <div class="flex-1">
                                <h3 class="text-sm font-semibold text-white">${creator.name}</h3>
                                <p class="text-[11px] text-slate-400">${creator.role} • ${creator.location}</p>
                            </div>
                            <button class="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white"><span class="iconify" data-icon="lucide:user-plus"></span></button>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Render Jobs
function renderJobs() {
    const container = document.getElementById('view-jobs');
    container.innerHTML = `
        <div class="overflow-y-auto hide-scrollbar px-4 pb-20 animate-fade-in">
            <div class="sticky top-0 bg-slate-950/90 backdrop-blur-md z-20 pt-4 pb-4">
                <h1 class="text-2xl font-display font-bold tracking-tight mb-2">Open Roles</h1>
                <p class="text-xs text-slate-400 mb-4">Curated opportunities for your skill set.</p>
                <div class="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
                    <button class="px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-medium whitespace-nowrap">All Jobs</button>
                    <button class="px-4 py-1.5 bg-slate-900 border border-white/10 text-slate-300 rounded-full text-xs font-medium whitespace-nowrap hover:bg-slate-800">Freelance</button>
                    <button class="px-4 py-1.5 bg-slate-900 border border-white/10 text-slate-300 rounded-full text-xs font-medium whitespace-nowrap hover:bg-slate-800">Full-time</button>
                    <button class="px-4 py-1.5 bg-slate-900 border border-white/10 text-slate-300 rounded-full text-xs font-medium whitespace-nowrap hover:bg-slate-800">Remote</button>
                </div>
            </div>
            <div class="space-y-3 mt-2">
                ${mockJobs.map(job => `
                    <div class="p-4 rounded-xl bg-slate-900 border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer group">
                        <div class="flex justify-between items-start mb-2">
                            <div class="flex items-center gap-2">
                                <div class="w-10 h-10 rounded-lg bg-gradient-to-br ${job.logoGradient} flex items-center justify-center text-white font-bold text-sm">${job.logo}</div>
                                <div>
                                    <h3 class="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">${job.title}</h3>
                                    <p class="text-[11px] text-slate-400">${job.company} • ${job.type}</p>
                                </div>
                            </div>
                            <span class="text-[10px] ${job.budgetType === 'green' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-slate-800 text-slate-300 border-white/10'} border px-2 py-0.5 rounded-full font-medium">${job.budget}</span>
                        </div>
                        <p class="text-xs text-slate-300 my-3 line-clamp-2">${job.description}</p>
                        <div class="flex gap-2 flex-wrap">
                            ${job.tags.map(tag => `<span class="text-[10px] text-slate-500 bg-slate-800 px-2 py-0.5 rounded">${tag}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Render Messages
function renderMessages() {
    const container = document.getElementById('view-messages');
    container.innerHTML = `
        <div class="animate-fade-in relative bg-slate-950 px-4 pt-4 h-full overflow-y-auto hide-scrollbar">
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-2xl font-display font-bold text-white">Messages</h1>
                <button class="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white"><span class="iconify" data-icon="lucide:edit"></span></button>
            </div>
            <div class="relative mb-4">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"><span class="iconify" data-icon="lucide:search"></span></span>
                <input type="text" placeholder="Search inbox" class="w-full bg-slate-900 border border-white/5 rounded-lg py-2 pl-9 pr-4 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50">
            </div>
            <div class="space-y-1">
                ${mockMessages.map(msg => `
                    <div class="p-3 -mx-2 rounded-xl hover:bg-white/5 cursor-pointer flex gap-3 group ${msg.unread ? 'relative' : ''}">
                        <div class="relative">
                            <div class="w-10 h-10 rounded-full bg-slate-800 overflow-hidden">
                                <img src="${msg.avatar}" class="w-full h-full object-cover">
                            </div>
                            ${msg.unread ? '<div class="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-cyan-500 rounded-full border border-black"></div>' : ''}
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex justify-between items-center mb-0.5">
                                <h3 class="text-sm font-medium ${msg.unread ? 'text-white' : 'text-slate-200'} group-hover:text-cyan-400">${msg.name}</h3>
                                <span class="text-[10px] ${msg.unread ? 'text-cyan-500 font-medium' : 'text-slate-500'}">${msg.time}</span>
                            </div>
                            <p class="text-xs ${msg.unread ? 'text-white font-medium' : 'text-slate-400'} truncate">${msg.message}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Render Profile
function renderProfile() {
    const container = document.getElementById('view-profile');
    container.innerHTML = `
        <div class="animate-fade-in relative bg-slate-950 overflow-y-auto hide-scrollbar pb-20">
            <div class="h-32 w-full bg-gradient-to-r from-cyan-900/40 via-purple-900/40 to-slate-900 relative">
                <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <button class="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-3 py-1 rounded-full">Edit Profile</button>
            </div>
            <div class="px-5 -mt-10 mb-6">
                <div class="w-20 h-20 rounded-2xl bg-slate-900 border-2 border-slate-950 overflow-hidden p-0.5 mb-3 shadow-2xl">
                    <img src="${mockProfile.avatar}" class="w-full h-full rounded-xl object-cover">
                </div>
                <h1 class="text-xl font-display font-bold text-white mb-0.5">${mockProfile.name}</h1>
                <p class="text-xs text-slate-400 mb-3">${mockProfile.title}</p>
                <div class="flex gap-4 mb-4">
                    <div class="flex flex-col">
                        <span class="text-sm font-bold text-white">${mockProfile.followers}</span>
                        <span class="text-[10px] text-slate-500">Followers</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-sm font-bold text-white">${mockProfile.following}</span>
                        <span class="text-[10px] text-slate-500">Following</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-sm font-bold text-white">${mockProfile.rating}</span>
                        <span class="text-[10px] text-slate-500">Rating</span>
                    </div>
                </div>
                <p class="text-sm text-slate-300 leading-relaxed max-w-md">Specializing in editorial and red carpet looks. Featured in Vogue, Elle, and Harper's Bazaar. Open for travel bookings.</p>
            </div>
            <div class="flex px-5 border-b border-white/5 mb-4 sticky top-0 bg-slate-950/80 backdrop-blur-md z-10">
                <button class="flex-1 pb-3 text-sm font-medium text-cyan-400 border-b-2 border-cyan-400">Portfolio</button>
                <button class="flex-1 pb-3 text-sm font-medium text-slate-500 hover:text-white transition-colors">Tagged</button>
                <button class="flex-1 pb-3 text-sm font-medium text-slate-500 hover:text-white transition-colors">Saved</button>
            </div>
            <div class="px-1 grid grid-cols-3 gap-0.5">
                ${mockProfile.portfolio.map(item => `
                    <div class="aspect-square bg-slate-900 overflow-hidden">
                        <img src="${item.image}" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer">
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Render Right Panel
function renderRightPanel() {
    const container = document.getElementById('right-panel');
    container.innerHTML = `
        <div class="p-4 border-b border-white/5 flex items-center justify-between bg-slate-950/50">
            <div class="flex bg-slate-900 p-1 rounded-full border border-white/5">
                <button onclick="switchTab('profile')" id="tab-profile" class="px-4 py-1.5 text-xs font-semibold rounded-full bg-white text-slate-950 shadow-sm transition-all">Talent Profile</button>
                <button onclick="switchTab('jobs')" id="tab-jobs" class="px-4 py-1.5 text-xs font-medium rounded-full text-slate-400 hover:text-white transition-all">Jobs for You</button>
            </div>
            <button onclick="toggleDrawer()" class="group flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cyan-500/30 text-cyan-400 bg-cyan-500/5 hover:bg-cyan-500 hover:text-white transition-all">
                <span class="text-[10px] font-bold uppercase tracking-wider">Masterclasses</span>
            </button>
        </div>
        <div class="flex-1 overflow-y-auto hide-scrollbar p-4 relative bg-[#0f1115]">
            <div id="profile-panel" class="space-y-4 transition-opacity duration-300">
                ${renderProfilePanel()}
            </div>
            <div id="jobs-panel" class="space-y-4 hidden opacity-0 transition-opacity duration-300">
                ${renderJobsPanel()}
            </div>
        </div>
    `;
}

function renderProfilePanel() {
    return `
        <div class="rounded-[2rem] bg-panel border border-panel-border relative overflow-hidden group">
            <div class="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-indigo-900/30 to-transparent opacity-60"></div>
            <div class="p-5 relative z-10">
                <div class="flex justify-between items-start mb-4">
                    <div class="flex gap-4">
                        <div class="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 shrink-0">
                            <img src="${mockProfile.avatar}" class="w-full h-full object-cover">
                        </div>
                        <div class="flex flex-col pt-0.5">
                            <h2 class="text-lg font-display font-semibold text-white leading-tight mb-1">${mockProfile.name}</h2>
                            <p class="text-[11px] text-slate-400 leading-relaxed max-w-[140px]">${mockProfile.title}</p>
                        </div>
                    </div>
                    <button class="px-4 py-2 bg-white text-slate-950 text-[10px] font-bold rounded-full hover:bg-slate-200 transition-colors whitespace-nowrap">View Public Profile</button>
                </div>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${mockProfile.specialties.map(tag => `<span class="px-2.5 py-1 rounded-full border border-white/10 bg-slate-800/50 text-[10px] text-slate-300">${tag}</span>`).join('')}
                </div>
                <div class="flex items-center gap-4 pt-2">
                    <div class="flex items-center gap-1.5">
                        <span class="iconify text-amber-400 w-3 h-3" data-icon="lucide:star"></span>
                        <span class="text-[10px] text-slate-400 font-medium"><span class="text-white">${mockProfile.rating}</span> (${mockProfile.reviews} reviews)</span>
                    </div>
                    <div class="flex items-center gap-1.5">
                        <span class="iconify text-red-400 w-3 h-3" data-icon="lucide:map-pin"></span>
                        <span class="text-[10px] text-slate-400">${mockProfile.location}</span>
                    </div>
                    <div class="flex items-center gap-1.5 ml-auto">
                        <span class="iconify text-green-400 w-3 h-3" data-icon="lucide:check-square"></span>
                        <span class="text-[10px] text-slate-400">Verified</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="rounded-[2rem] bg-panel border border-panel-border p-5">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-sm font-semibold text-white">Portfolio Highlights</h3>
                <button class="text-[10px] text-slate-500 hover:text-white transition-colors">View all</button>
            </div>
            <div class="grid grid-cols-3 gap-2">
                ${mockProfile.portfolio.map((item, idx) => `
                    <div class="relative aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer bg-slate-900">
                        <img src="${item.image}" class="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                        <span class="absolute bottom-2 left-2 right-2 text-[9px] font-medium text-white leading-tight">${idx + 1}. ${item.label}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="rounded-[2rem] bg-panel border border-panel-border p-5">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-sm font-semibold text-white">Services & Availability</h3>
                <button class="text-[10px] text-slate-500 hover:text-white transition-colors">Edit</button>
            </div>
            <div class="space-y-3">
                ${mockProfile.services.map(s => `
                    <div class="flex justify-between items-center text-xs">
                        <span class="text-slate-300">${s.label}</span>
                        <span class="text-white font-medium">${s.value}</span>
                    </div>
                `).join('')}
                <div class="h-px bg-white/5 my-2"></div>
                <div class="flex justify-between items-center text-xs">
                    <span class="text-slate-400">Next available</span>
                    <span class="text-slate-300">${mockProfile.availability}</span>
                </div>
            </div>
        </div>
    `;
}

function renderJobsPanel() {
    return mockJobs.slice(0, 3).map(job => `
        <div class="glass-card rounded-2xl p-4 hover:border-cyan-500/30 group cursor-pointer relative">
            <div class="flex justify-between items-start mb-2">
                <div>
                    <h4 class="text-sm font-semibold text-white group-hover:text-cyan-400">${job.title}</h4>
                    <p class="text-[11px] text-slate-400">${job.company}</p>
                </div>
                <span class="text-xs font-mono font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded">${job.budget}</span>
            </div>
            <button class="w-full py-2 mt-2 rounded-lg bg-slate-100 text-slate-950 text-xs font-bold hover:bg-cyan-400 transition-colors">1-Click Apply</button>
        </div>
    `).join('');
}

// Tab switching
function switchTab(tabId) {
    const profilePanel = document.getElementById('profile-panel');
    const jobsPanel = document.getElementById('jobs-panel');
    const tabProfile = document.getElementById('tab-profile');
    const tabJobs = document.getElementById('tab-jobs');

    if (tabId === 'profile') {
        profilePanel.classList.remove('hidden', 'opacity-0');
        jobsPanel.classList.add('hidden', 'opacity-0');
        tabProfile.classList.add('bg-white', 'text-slate-950', 'shadow-sm');
        tabProfile.classList.remove('text-slate-400');
        tabJobs.classList.remove('bg-white', 'text-slate-950', 'shadow-sm');
        tabJobs.classList.add('text-slate-400');
    } else {
        jobsPanel.classList.remove('hidden', 'opacity-0');
        profilePanel.classList.add('hidden', 'opacity-0');
        tabJobs.classList.add('bg-white', 'text-slate-950', 'shadow-sm');
        tabJobs.classList.remove('text-slate-400');
        tabProfile.classList.remove('bg-white', 'text-slate-950', 'shadow-sm');
        tabProfile.classList.add('text-slate-400');
    }
}

// Masterclass Drawer
function renderMasterclassDrawer() {
    const drawer = document.getElementById('masterclass-drawer');
    const gradientColors = {
        fuchsia: 'from-fuchsia-600/80 to-purple-900/80',
        cyan: 'from-cyan-600/80 to-blue-900/80',
        amber: 'from-amber-600/80 to-orange-900/80'
    };
    const accentColors = {
        fuchsia: 'bg-fuchsia-500',
        cyan: 'bg-cyan-500',
        amber: 'bg-amber-500'
    };
    
    drawer.innerHTML = `
        <div class="p-5 border-b border-white/5 bg-slate-900/50 flex items-center justify-between">
            <div>
                <span class="text-[10px] uppercase tracking-[0.2em] text-fuchsia-400 font-bold">Learning</span>
                <h2 class="text-lg font-display font-semibold text-white">Masterclasses</h2>
            </div>
            <button onclick="toggleDrawer()" class="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 transition-colors"><span class="iconify" data-icon="lucide:x"></span></button>
        </div>
        <div class="h-0.5 w-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-300"></div>
        
        <!-- Featured Course -->
        <div class="p-4">
            <div class="relative rounded-2xl overflow-hidden h-48 group cursor-pointer">
                <img src="${mockCourses[0].image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div class="absolute top-3 left-3">
                    <span class="px-2 py-1 bg-fuchsia-500 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">Featured</span>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-4">
                    <h3 class="text-base font-display font-semibold text-white mb-1">${mockCourses[0].title}</h3>
                    <div class="flex items-center gap-2">
                        <img src="${mockCourses[0].mentorAvatar}" class="w-6 h-6 rounded-full object-cover border border-white/20">
                        <span class="text-xs text-slate-300">with ${mockCourses[0].mentor}</span>
                    </div>
                </div>
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div class="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <span class="iconify text-white w-6 h-6" data-icon="lucide:play"></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex-1 overflow-y-auto px-4 pb-6 space-y-4">
            <div class="flex items-center justify-between">
                <h3 class="text-sm font-semibold text-white">Continue Learning</h3>
                <button class="text-[10px] text-cyan-400 hover:text-cyan-300">View all</button>
            </div>
            
            ${mockCourses.map(course => `
                <div class="rounded-2xl overflow-hidden bg-slate-900/80 border border-white/5 hover:border-white/10 transition-all cursor-pointer group">
                    <!-- Image Header -->
                    <div class="relative h-28 overflow-hidden">
                        <img src="${course.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t ${gradientColors[course.color] || gradientColors.cyan}"></div>
                        <div class="absolute top-2 right-2">
                            <span class="text-[10px] px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm text-white font-medium">${course.level}</span>
                        </div>
                        <div class="absolute bottom-2 left-3 right-3">
                            <h4 class="text-sm font-semibold text-white leading-tight line-clamp-2">${course.title}</h4>
                        </div>
                        ${course.progress > 0 ? `
                            <div class="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
                                <div class="h-full ${accentColors[course.color] || 'bg-cyan-500'}" style="width: ${course.progress}%"></div>
                            </div>
                        ` : ''}
                    </div>
                    
                    <!-- Content -->
                    <div class="p-3">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center gap-2">
                                <img src="${course.mentorAvatar}" class="w-7 h-7 rounded-full object-cover border border-white/10">
                                <div>
                                    <p class="text-[11px] text-slate-300 font-medium">${course.mentor}</p>
                                    <p class="text-[10px] text-slate-500">${course.duration}</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-1 text-[10px] text-slate-500">
                                <span class="iconify w-3 h-3" data-icon="lucide:users"></span>
                                <span>${course.students}</span>
                            </div>
                        </div>
                        
                        ${course.progress > 0 ? `
                            <button class="w-full py-2 bg-white text-slate-950 text-xs font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                                <span class="iconify w-3.5 h-3.5" data-icon="lucide:play"></span>
                                Continue (${course.progress}%)
                            </button>
                        ` : `
                            <button class="w-full py-2 border border-white/20 text-white text-xs font-bold rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                                <span class="iconify w-3.5 h-3.5" data-icon="lucide:play-circle"></span>
                                Start Course
                            </button>
                        `}
                    </div>
                </div>
            `).join('')}
            
            <!-- Browse More -->
            <div class="pt-2">
                <button class="w-full py-3 border border-dashed border-white/20 text-slate-400 text-xs font-medium rounded-xl hover:border-cyan-500/50 hover:text-cyan-400 transition-colors flex items-center justify-center gap-2">
                    <span class="iconify w-4 h-4" data-icon="lucide:grid-3x3"></span>
                    Browse All Masterclasses
                </button>
            </div>
        </div>
    `;
}

function toggleDrawer() {
    const drawer = document.getElementById('masterclass-drawer');
    const backdrop = document.getElementById('masterclass-backdrop');
    
    if (drawer.classList.contains('translate-x-full')) {
        drawer.classList.remove('translate-x-full');
        backdrop.classList.remove('opacity-0', 'pointer-events-none');
    } else {
        drawer.classList.add('translate-x-full');
        backdrop.classList.add('opacity-0', 'pointer-events-none');
    }
}

// Theme Toggle
let isDarkMode = true;

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const themeLabel = document.getElementById('theme-label');
    
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeIcon.setAttribute('data-icon', 'lucide:sun');
        themeLabel.textContent = 'Light Mode';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeIcon.setAttribute('data-icon', 'lucide:moon');
        themeLabel.textContent = 'Dark Mode';
    }
    
    // Save preference
    localStorage.setItem('indstry-theme', isDarkMode ? 'dark' : 'light');
}

// Load saved theme preference
function loadThemePreference() {
    const savedTheme = localStorage.getItem('indstry-theme');
    if (savedTheme === 'light') {
        isDarkMode = false;
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        document.getElementById('theme-icon').setAttribute('data-icon', 'lucide:moon');
        document.getElementById('theme-label').textContent = 'Dark Mode';
    }
}

// Device View Toggle
let currentDevice = 'mobile';

function setDeviceView(device) {
    currentDevice = device;
    const frame = document.getElementById('device-frame');
    const buttons = document.querySelectorAll('.device-btn');
    
    // Remove all device classes
    frame.classList.remove('device-mobile', 'device-tablet', 'device-desktop');
    
    // Add selected device class
    frame.classList.add('device-' + device);
    
    // Update button states
    buttons.forEach(btn => {
        btn.classList.remove('bg-white/5', 'text-cyan-400');
        btn.classList.add('text-slate-500');
    });
    
    const activeBtn = document.getElementById('device-' + device);
    activeBtn.classList.add('bg-white/5', 'text-cyan-400');
    activeBtn.classList.remove('text-slate-500');
    
    // Save preference
    localStorage.setItem('indstry-device', device);
}

// Load saved device preference
function loadDevicePreference() {
    const savedDevice = localStorage.getItem('indstry-device');
    if (savedDevice) {
        setDeviceView(savedDevice);
    }
}

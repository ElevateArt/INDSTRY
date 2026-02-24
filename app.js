// INDSTRY App - Main JavaScript

// Image paths for easy reference
const IMAGES = {
    mua1: 'Images/u6442654211_video_of_a_Professional_makeup_artists_applying_mak_f815ffa2-829c-49e3-8043-fffca2f076bd.png',
    mua2: 'Images/diecoscs_Editorial_photography_of_a_makeup_artist_working_at_a__007b9b45-f7d6-4592-a865-5f4c9ef041a4.png',
    mua3: 'Images/u6442654211_video_of_a_Professional_makeup_artists_applying_mak_f815ffa2-829c-49e3-8043-fffca2f076bd.png',
    mua4: 'Images/moonlight16948_A_calm_behind-the-scenes_beauty_studio_scene_a_y_375082e5-b434-4a2f-a1d6-f1d9ebe90f61.png',
    photographer1: 'Images/shoaibak__28878_Happy_man_taking_photos_on_street_with_camera_-_5295f414-afd7-4434-b9f4-563a53d6accc.png',
    photographer2: 'Images/waldemarpawlik_Dynamic_photo_of_young_photographer_during_portr_07a0d5d7-8090-4e0f-986c-b2f6005b5912.png',
    photographer3: 'Images/tess2447_Young_man_with_backpack_and_travel_with_a_camera_hangi_e9970390-f724-4918-b781-adc6b8188909.png',
    videographer1: 'Images/asraar4758_A_young_compassionate_professional_indian_videograph_eac88325-a1bb-4f15-972d-d6574da572ce.png',
    videographer2: 'Images/gomezdavid1728_a_person_operating_a_professional_video_camera_m_e3ee4e09-3ec6-4e85-9e71-b38eb2472239.png',
    videographer3: 'Images/ziburta1818_making_movie_asiatic_--profile_caqeuu8_--v_7_efa059cf-abf9-4fe4-b683-217c98e07db7.png',
    hairstylist1: 'Images/yukowka_hairdressers_stylists_in_hair_salon_are_getting_lesson__45749440-01ac-4470-bfb3-98a74331407d.png',
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
        role: 'Celebrity MUA',
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
        handle: '@bridal.skin.by.talia',
        displayName: 'Talia Monroe',
        avatar: IMAGES.mua3,
        role: 'Bridal MUA',
        location: 'Miami',
        availability: 'Booking Nov',
        verified: true,
        accentColor: 'amber',
        image: IMAGES.mua4,
        tags: ['Bridal', 'Skin Prep'],
        title: 'Humidity-Proof Bridal Base (Miami Test Day)',
        description: 'My full skin prep + layering stack for outdoor weddings. Lightweight finish, no flashback, and touch-up kit breakdown.',
        stats: { likes: '3.7k', comments: '281', saves: '980' }
    },
    {
        id: 'p3',
        handle: '@set.glam.nina',
        displayName: 'Nina Vale',
        avatar: IMAGES.mua2,
        role: 'Film/TV MUA',
        location: 'Atlanta',
        availability: 'Available Now',
        verified: true,
        accentColor: 'fuchsia',
        image: IMAGES.mua3,
        tags: ['Film/TV', 'Continuity'],
        title: 'On-Set Continuity Kit for Long Shoot Days',
        description: 'What stays in my belt on set: skin refresh, anti-shine fixes, and continuity notes that save retakes.',
        stats: { likes: '2.8k', comments: '341', saves: '890' }
    },
    {
        id: 'p4',
        handle: '@glow.lab.aria',
        displayName: 'Aria Cole',
        avatar: IMAGES.hairstylist1,
        role: 'HMUA',
        location: 'Seoul',
        availability: 'Booking Dec',
        verified: false,
        accentColor: 'amber',
        image: IMAGES.hairstylist2,
        tags: ['Hair+Makeup', 'Runway'],
        title: 'Backstage HMUA Flow: 3 Looks, 18 Minutes',
        description: 'How I split hair + makeup tasks with assistants to keep model turnover fast without sacrificing finish quality.',
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

const mockBrandLaunches = [
    {
        id: 'b1',
        brand: 'Fenty Beauty Pro',
        title: 'Soft Matte Flashback-Safe Setting Powder',
        summary: 'New pro-size release announced with on-set test kits shipping this week.',
        image: IMAGES.mua4,
        tags: ['Product Launch', 'Pro Kit', 'Flash Test']
    },
    {
        id: 'b2',
        brand: 'Pat McGrath Labs',
        title: 'Editorial Pigment Vault (Backstage Edition)',
        summary: 'Limited run textures built for runway/editorial looks. Early access signups now open.',
        image: IMAGES.mua2,
        tags: ['Brand Drop', 'Editorial', 'Limited']
    }
];

const mockFeedDigest = {
    lastLogin: '2 days ago',
    newPosts: 9,
    jobMatches: 5,
    productDrops: 2
};

const mockRecentCircle = [
    { name: 'Sarah', avatar: IMAGES.mua3, status: 'DM’d you', tone: 'cyan' },
    { name: 'Vogue', logo: 'V', logoGradient: 'from-pink-500 to-rose-600', status: 'New role', tone: 'fuchsia' },
    { name: 'Fenty Pro', avatar: IMAGES.mua4, status: 'Product drop', tone: 'amber' },
    { name: 'Nina', avatar: IMAGES.mua2, status: 'Posted BTS', tone: 'fuchsia' },
    { name: 'H&M', logo: 'H', logoGradient: 'from-red-500 to-orange-600', status: 'Hiring', tone: 'amber' }
];

const mockMissedTimeline = [
    {
        id: 't1',
        kind: 'comment',
        actor: 'Sarah Jenkins',
        actorRole: 'Producer',
        avatar: IMAGES.mua3,
        time: '12m ago',
        headline: 'commented on your editorial soft glam post',
        body: '"Can you share the lip combo and skin prep you used for camera closeups?"',
        chips: ['Client Lead', 'Engagement'],
        ctaLabel: 'Reply',
        ctaAction: "openCommentsSheet('p1')",
        accent: 'cyan'
    },
    {
        id: 't2',
        kind: 'job',
        actor: 'Vogue Italia',
        actorRole: 'Brand',
        logo: 'V',
        logoGradient: 'from-pink-500 to-rose-600',
        time: '24m ago',
        headline: 'posted a new Editorial MUA role that matches your profile',
        body: '2-day outdoor editorial in Sicily • travel paid • natural glow portfolio preferred.',
        chips: ['95% Match', '$1.2k/day'],
        ctaLabel: 'View Job',
        ctaAction: "openJobSheet('j1')",
        accent: 'fuchsia'
    },
    {
        id: 't3',
        kind: 'brand',
        actor: 'Fenty Beauty Pro',
        actorRole: 'Brand',
        avatar: IMAGES.mua4,
        time: '41m ago',
        headline: 'announced a pro-size product launch in your followed category',
        body: 'Soft matte flashback-safe powder is shipping test kits this week for creators and MUAs.',
        chips: ['Product Launch', 'Creator Demos'],
        ctaLabel: 'Save Alert',
        ctaAction: "showToast('Saved product launch alert', 'bell')",
        accent: 'amber'
    },
    {
        id: 't4',
        kind: 'network',
        actor: 'Marcus Lens',
        actorRole: 'Photographer',
        avatar: IMAGES.photographer1,
        time: '1h ago',
        headline: 'reposted your portfolio and tagged you for an upcoming beauty concept',
        body: '“Looking for a clean skin-focused MUA for a November studio test in NYC.”',
        chips: ['Repost', 'Potential Collab'],
        ctaLabel: 'Open DMs',
        ctaAction: "switchMainView('messages')",
        accent: 'cyan'
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
    avatar: IMAGES.mua2,
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

let currentMainView = 'feed';
let feedActivityFilter = 'all';
const viewScrollPositions = {};
let currentJobSheetVariant = null;
let currentJobSheetHeightRatio = 0.8;

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

    document.addEventListener('error', (event) => {
        if (event.target?.tagName === 'IMG') {
            handleImageError(event.target);
        }
    }, true);

    applyImageFallbacks();
});

window.addEventListener('resize', () => {
    refreshActiveJobSheetPosition();
});

function handleImageError(img) {
    if (!img || img.dataset.fallbackApplied === 'true') return;
    img.dataset.fallbackApplied = 'true';
    img.style.background = 'linear-gradient(135deg, #1e293b, #334155)';
    img.style.objectFit = 'cover';
    img.style.opacity = '0.92';
    if (img.dataset.fallbackSrc) {
        img.src = img.dataset.fallbackSrc;
    }
}

function applyImageFallbacks(root = document) {
    root.querySelectorAll?.('img').forEach(img => {
        if (!img.dataset.fallbackSrc) {
            img.dataset.fallbackSrc = IMAGES.mua2;
        }
        img.onerror = function() {
            handleImageError(this);
        };
    });
}

function getViewScroller(viewId) {
    return document.querySelector(`#view-${viewId} [data-view-scroll]`);
}

function saveCurrentViewScroll() {
    const scroller = getViewScroller(currentMainView);
    if (scroller) {
        viewScrollPositions[currentMainView] = scroller.scrollTop;
    }
}

function restoreViewScroll(viewId) {
    const scroller = getViewScroller(viewId);
    if (!scroller) return;
    const nextTop = viewScrollPositions[viewId] ?? 0;
    requestAnimationFrame(() => {
        scroller.scrollTop = nextTop;
    });
}

window.handleImageError = handleImageError;

function resetJobSheetViewportStyles() {
    const sheet = document.getElementById('job-sheet');
    const backdrop = document.getElementById('job-backdrop');
    if (!sheet || !backdrop) return;

    ['top', 'left', 'right', 'bottom', 'width', 'height', 'maxHeight', 'borderRadius'].forEach(prop => {
        sheet.style[prop] = '';
    });
    ['top', 'left', 'right', 'bottom', 'width', 'height', 'borderRadius'].forEach(prop => {
        backdrop.style[prop] = '';
    });
}

function positionJobSheetForCurrentDevice(heightRatio = 0.8) {
    const sheet = document.getElementById('job-sheet');
    const backdrop = document.getElementById('job-backdrop');
    const frame = document.getElementById('device-frame');
    if (!sheet || !backdrop || !frame) return;

    const useDeviceFrame = currentDevice !== 'desktop';
    if (!useDeviceFrame) {
        resetJobSheetViewportStyles();
        sheet.style.height = `${Math.round(window.innerHeight * heightRatio)}px`;
        return;
    }

    const rect = frame.getBoundingClientRect();
    const viewportBottomOffset = Math.max(window.innerHeight - rect.bottom, 0);
    const viewportTopOffset = Math.max(rect.top, 0);
    const sheetHeight = Math.max(280, Math.min(rect.height * heightRatio, rect.height - 8));
    const frameRadius = getComputedStyle(frame).borderRadius || '24px';

    backdrop.style.top = `${viewportTopOffset}px`;
    backdrop.style.left = `${rect.left}px`;
    backdrop.style.width = `${rect.width}px`;
    backdrop.style.height = `${rect.height}px`;
    backdrop.style.right = 'auto';
    backdrop.style.bottom = 'auto';
    backdrop.style.borderRadius = frameRadius;

    sheet.style.left = `${rect.left}px`;
    sheet.style.right = 'auto';
    sheet.style.width = `${rect.width}px`;
    sheet.style.bottom = `${viewportBottomOffset}px`;
    sheet.style.top = 'auto';
    sheet.style.height = `${Math.round(sheetHeight)}px`;
    sheet.style.maxHeight = `${Math.round(rect.height)}px`;
    sheet.style.borderRadius = '1.1rem 1.1rem 0 0';
}

function openJobSheetLayer(options = {}) {
    const sheet = document.getElementById('job-sheet');
    const backdrop = document.getElementById('job-backdrop');
    currentJobSheetVariant = options.variant || currentJobSheetVariant || 'job';
    currentJobSheetHeightRatio = options.heightRatio || currentJobSheetHeightRatio || 0.8;

    positionJobSheetForCurrentDevice(currentJobSheetHeightRatio);
    sheet.classList.remove('translate-y-full');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
}

function refreshActiveJobSheetPosition() {
    const sheet = document.getElementById('job-sheet');
    if (!sheet || sheet.classList.contains('translate-y-full')) return;
    positionJobSheetForCurrentDevice(currentJobSheetHeightRatio);
}

// View switching
function switchMainView(viewId) {
    saveCurrentViewScroll();
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
        if (!btn) return;
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

    currentMainView = viewId;
    syncMobileBottomNav(viewId);
    restoreViewScroll(viewId);
}

// Render Feed
function renderFeed() {
    const container = document.getElementById('view-feed');
    const unreadMessages = mockMessages.filter(msg => msg.unread).length;
    const filterData = getFeedFilterData();
    const timelineEvents = getTimelineEventsForFilter(feedActivityFilter);
    const splitIndex = Math.ceil(timelineEvents.length / 2);
    const timelineFirst = timelineEvents.slice(0, splitIndex);
    const timelineSecond = timelineEvents.slice(splitIndex);
    const showJobs = feedActivityFilter === 'all' || feedActivityFilter === 'jobs';
    const showBrand = feedActivityFilter === 'all' || feedActivityFilter === 'brand';
    const showMentions = feedActivityFilter === 'all' || feedActivityFilter === 'mentions' || feedActivityFilter === 'dms';
    const showDMPeek = feedActivityFilter === 'all' || feedActivityFilter === 'dms';

    container.innerHTML = `
        <div class="relative h-full">
            <div class="absolute top-0 left-0 right-0 z-30 px-4 pt-4 pointer-events-none">
                <div class="flex items-center justify-end">
                    <div class="pointer-events-auto flex items-center gap-2">
                        <button onclick="switchMainView('messages')" class="relative w-10 h-10 rounded-full border border-cyan-400/20 bg-slate-950/25 backdrop-blur-md hover:bg-slate-900/45 transition-colors text-slate-200 hover:text-white shadow-lg shadow-black/20 flex items-center justify-center">
                            <span class="iconify text-cyan-400 w-4 h-4" data-icon="lucide:message-square"></span>
                            ${unreadMessages ? `<span class="absolute -top-1 -right-1 min-w-[17px] h-[17px] px-1 rounded-full bg-cyan-500 text-white text-[10px] font-bold flex items-center justify-center">${unreadMessages}</span>` : ''}
                        </button>
                    </div>
                </div>
            </div>
            <div data-view-scroll="feed" class="feed-scroll-stream overflow-y-auto hide-scrollbar snap-y snap-mandatory h-full pb-28 md:pb-20">
            ${renderFeedPost(mockFeed[0], 0)}
            ${renderFeedFilterBar(filterData)}
            ${renderRecentCircleStrip()}
            ${renderFeedDigestCard()}
            ${showMentions && timelineFirst.length ? renderMissedTimelineSection(feedActivityFilter === 'dms' ? 'DMs & Replies' : 'What You Missed', timelineFirst) : ''}
            ${showDMPeek ? renderFeedMessagePeekSection() : ''}
            ${showJobs ? renderInFeedJobsSection() : ''}
            ${renderFeedPost(mockFeed[1], 1)}
            ${showBrand ? renderBrandLaunchSection() : ''}
            ${showMentions && timelineSecond.length ? renderMissedTimelineSection(feedActivityFilter === 'mentions' ? 'Mentions & Reposts' : 'Network Activity', timelineSecond) : ''}
            ${renderFeedPost(mockFeed[2], 2)}
            ${renderCommunityUpdateSection()}
            ${renderFeedPost(mockFeed[3], 3)}
            </div>
        </div>
    `;
    applyImageFallbacks(container);
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
    const roleTag = post.role.includes('HMUA') ? 'HMUA' : 'Makeup';
    const displayTags = [roleTag, ...post.tags]
        .filter((tag, i, arr) => arr.findIndex(t => t.toLowerCase() === tag.toLowerCase()) === i)
        .slice(0, 3);
    
    return `
        <div class="feed-video-card snap-start shrink-0 relative w-full h-[calc(100vh-120px)] md:h-[650px] bg-slate-900 md:rounded-[2rem] overflow-hidden border-b md:border border-white/10 mb-6 shadow-2xl">
            <div class="absolute inset-0 z-0" ondblclick="doubleTapLike('${post.id}', event)">
                <img src="${post.image}" class="w-full h-full object-cover opacity-80" alt="Content">
                <div class="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/90"></div>
                <!-- Double-tap heart animation -->
                <div id="heart-anim-${post.id}" class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 scale-0 transition-all duration-300">
                    <span class="iconify w-24 h-24 text-white drop-shadow-2xl" data-icon="lucide:heart"></span>
                </div>
            </div>
            
            <div class="absolute top-0 left-0 right-0 p-5 ${idx === 0 ? 'pt-16' : ''} z-10 flex justify-between items-start">
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
                        <span class="text-[10px] text-slate-300 drop-shadow-md">${post.location} • ${post.availability} • 18m ago</span>
                    </div>
                </div>
                <button onclick="toggleFollow('${post.id}', this)" data-accent="${post.accentColor}" class="px-3 py-1.5 ${c.bg} ${c.bgHover} text-slate-950 text-xs font-bold rounded-full transition-colors">Follow</button>
            </div>

            <div class="absolute bottom-0 left-0 w-full p-4 pb-5 md:p-5 md:pb-6 z-10 bg-gradient-to-t from-black via-black/70 to-transparent">
                <div class="flex items-center gap-2 mb-2">
                    ${displayTags.map(tag => `<span class="text-[10px] font-bold uppercase tracking-wider ${c.text} ${c.tagBg} px-2 py-0.5 rounded border ${c.tagBorder}">${tag}</span>`).join('')}
                </div>
                <h2 class="text-base md:text-lg font-display font-medium leading-tight mb-1.5">${post.title}</h2>
                <p class="text-[11px] md:text-xs text-slate-300 line-clamp-2 leading-relaxed opacity-90">${post.description}</p>
                <div class="mt-3 flex items-center justify-between gap-2">
                    <div class="flex items-center gap-3 min-w-0">
                    <button onclick="toggleLike('${post.id}', this)" class="group h-8 px-0 flex items-center justify-center gap-1.5 min-w-0">
                        <span data-action-surface class="w-5 h-5 flex items-center justify-center transition-all shrink-0">
                            <span class="iconify text-white w-4 h-4 drop-shadow" data-icon="lucide:heart"></span>
                        </span>
                        <span class="text-[10px] font-semibold text-white truncate">${post.stats.likes}</span>
                    </button>
                    <button onclick="openCommentsSheet('${post.id}')" class="group h-8 px-0 flex items-center justify-center gap-1.5 min-w-0">
                        <span class="w-5 h-5 flex items-center justify-center transition-all shrink-0">
                            <span class="iconify text-white/90 group-hover:text-cyan-400 w-4 h-4 drop-shadow" data-icon="lucide:message-circle"></span>
                        </span>
                        <span class="text-[10px] font-semibold text-white truncate">${post.stats.comments}</span>
                    </button>
                    <button onclick="toggleSave('${post.id}', this)" class="group h-8 px-0 flex items-center justify-center gap-1.5 min-w-0">
                        <span data-action-surface class="w-5 h-5 flex items-center justify-center transition-all shrink-0">
                            <span class="iconify text-white w-4 h-4 drop-shadow" data-icon="lucide:bookmark"></span>
                        </span>
                        <span class="text-[10px] font-semibold text-white truncate">${post.stats.saves}</span>
                    </button>
                    <button onclick="openShareSheet('${post.title}')" class="group h-8 w-6 flex items-center justify-center">
                        <span class="iconify text-white/90 group-hover:text-green-400 w-4 h-4 drop-shadow" data-icon="lucide:share-2"></span>
                    </button>
                    </div>
                    <button onclick="openBookingSheet('${post.displayName}', '${post.avatar}', '${post.role}')" class="group h-8 px-3 bg-white text-slate-950 rounded-xl hover:bg-cyan-400 transition-all shadow-lg flex items-center gap-1.5 justify-center shrink-0">
                        <span class="iconify w-3.5 h-3.5" data-icon="lucide:calendar-check"></span>
                        <span class="text-[10px] font-bold">Book</span>
                    </button>
                </div>
                <div class="w-full h-1 bg-white/20 rounded-full mt-3 overflow-hidden"><div class="video-progress rounded-full" style="animation-delay: -${idx * 5}s;"></div></div>
            </div>
        </div>
    `;
}

function renderRecentCircleStrip() {
    return `
        <section class="mx-4 mb-4">
            <div class="flex items-center justify-between mb-2">
                <p class="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-semibold">Recent in Your Circle</p>
                <button onclick="switchMainView('discover')" class="text-[10px] text-cyan-400 hover:text-cyan-300">See all</button>
            </div>
            <div class="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
                ${mockRecentCircle.map(item => `
                    <button class="feed-chip-card shrink-0 rounded-2xl border border-white/10 bg-slate-900/80 px-2.5 py-2 flex items-center gap-2 min-w-[126px] hover:border-cyan-400/20 transition-all">
                        ${item.avatar ? `
                            <div class="w-9 h-9 rounded-xl overflow-hidden border border-white/10">
                                <img src="${item.avatar}" class="w-full h-full object-cover" alt="${item.name}">
                            </div>
                        ` : `
                            <div class="w-9 h-9 rounded-xl bg-gradient-to-br ${item.logoGradient} flex items-center justify-center text-white text-xs font-bold">${item.logo}</div>
                        `}
                        <div class="text-left">
                            <p class="text-[11px] font-semibold text-white leading-none">${item.name}</p>
                            <p class="text-[10px] text-slate-400 mt-1">${item.status}</p>
                        </div>
                    </button>
                `).join('')}
            </div>
        </section>
    `;
}

function getFeedFilterData() {
    const unreadDMs = mockMessages.filter(msg => msg.unread).length;
    const mentions = mockMissedTimeline.filter(event => ['comment', 'network'].includes(event.kind)).length;
    const jobs = mockJobs.length;
    const brand = mockBrandLaunches.length;

    return {
        all: mockFeedDigest.newPosts + mockFeedDigest.jobMatches + mockFeedDigest.productDrops + unreadDMs,
        jobs,
        dms: unreadDMs,
        brand,
        mentions
    };
}

function getTimelineEventsForFilter(filter) {
    if (filter === 'dms') {
        return mockMissedTimeline.filter(event => event.kind === 'comment' || event.kind === 'network');
    }
    if (filter === 'mentions') {
        return mockMissedTimeline.filter(event => event.kind === 'comment' || event.kind === 'network');
    }
    if (filter === 'jobs') {
        return mockMissedTimeline.filter(event => event.kind === 'job');
    }
    if (filter === 'brand') {
        return mockMissedTimeline.filter(event => event.kind === 'brand');
    }
    return mockMissedTimeline;
}

function renderFeedFilterBar(filterData) {
    const items = [
        { id: 'all', label: 'All', count: filterData.all, icon: 'layout-grid' },
        { id: 'jobs', label: 'Jobs', count: filterData.jobs, icon: 'briefcase' },
        { id: 'dms', label: 'DMs', count: filterData.dms, icon: 'message-square' },
        { id: 'brand', label: 'Brand Drops', count: filterData.brand, icon: 'sparkles' },
        { id: 'mentions', label: 'Mentions', count: filterData.mentions, icon: 'at-sign' }
    ];

    return `
        <section class="mx-4 mb-5 rounded-[1.1rem] border border-white/10 bg-slate-900/75 p-2">
            <div class="flex items-center justify-between px-2 pb-2">
                <div>
                    <p class="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-semibold">What Changed</p>
                    <p class="text-[11px] text-slate-400">Filter updates since your last login</p>
                </div>
                <button onclick="setFeedActivityFilter('all')" class="text-[10px] text-cyan-400 hover:text-cyan-300">Reset</button>
            </div>
            <div class="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
                ${items.map(item => `
                    <button onclick="setFeedActivityFilter('${item.id}')" class="feed-filter-chip ${feedActivityFilter === item.id ? 'feed-filter-chip-active' : ''} shrink-0 rounded-xl border px-3 py-2 flex items-center gap-2">
                        <span class="iconify w-3.5 h-3.5 ${feedActivityFilter === item.id ? 'text-cyan-300' : 'text-slate-500'}" data-icon="lucide:${item.icon}"></span>
                        <span class="text-[11px] font-semibold ${feedActivityFilter === item.id ? 'text-white' : 'text-slate-300'}">${item.label}</span>
                        <span class="min-w-[18px] h-[18px] px-1 rounded-full ${feedActivityFilter === item.id ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/5 text-slate-400'} text-[10px] font-bold flex items-center justify-center">${item.count}</span>
                    </button>
                `).join('')}
            </div>
        </section>
    `;
}

function setFeedActivityFilter(filterId) {
    if (feedActivityFilter === filterId) return;
    const feedScroller = getViewScroller('feed');
    if (feedScroller) {
        viewScrollPositions.feed = feedScroller.scrollTop;
    }
    feedActivityFilter = filterId;
    renderFeed();
    restoreViewScroll('feed');
    showToast(`Feed filter: ${filterId === 'all' ? 'All updates' : filterId}`, 'sliders-horizontal');
}

function renderFeedMessagePeekSection() {
    const unread = mockMessages.filter(msg => msg.unread);
    const recent = unread.length ? unread : mockMessages.slice(0, 2);
    return `
        <section class="mx-4 mb-6 rounded-[1.1rem] border border-white/10 bg-slate-900/75 overflow-hidden shadow-xl">
            <div class="px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <div>
                    <p class="text-[10px] uppercase tracking-[0.18em] text-cyan-400 font-semibold">DM Activity</p>
                    <h3 class="text-sm font-semibold text-white">${unread.length ? `${unread.length} unread messages` : 'Recent conversations'}</h3>
                </div>
                <button onclick="switchMainView('messages')" class="text-[11px] px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10">Open Inbox</button>
            </div>
            <div class="p-3 space-y-2">
                ${recent.map(msg => `
                    <button onclick="openMessageSheet('${msg.id}')" class="w-full text-left rounded-xl border border-white/5 bg-slate-950/60 p-3 hover:border-cyan-400/20 transition-all">
                        <div class="flex items-center gap-3">
                            <div class="relative w-10 h-10 rounded-xl overflow-hidden border border-white/10 shrink-0">
                                <img src="${msg.avatar}" class="w-full h-full object-cover" alt="${msg.name}">
                                ${msg.unread ? '<span class="absolute top-1 right-1 w-2 h-2 rounded-full bg-cyan-400"></span>' : ''}
                            </div>
                            <div class="flex-1 min-w-0">
                                <div class="flex items-center justify-between gap-2">
                                    <span class="text-xs font-semibold text-white truncate">${msg.name}</span>
                                    <span class="text-[10px] ${msg.unread ? 'text-cyan-400' : 'text-slate-500'}">${msg.time}</span>
                                </div>
                                <p class="text-xs ${msg.unread ? 'text-slate-200' : 'text-slate-400'} truncate mt-1">${msg.message}</p>
                            </div>
                        </div>
                    </button>
                `).join('')}
            </div>
        </section>
    `;
}

function renderFeedDigestCard() {
    return `
        <div class="mx-4 mb-5 rounded-2xl border border-cyan-400/15 bg-gradient-to-r from-cyan-500/8 via-slate-900 to-fuchsia-500/8 p-4 shadow-xl shadow-black/10">
            <div class="flex items-start justify-between gap-3">
                <div>
                    <div class="flex items-center gap-2 mb-1">
                        <span class="iconify w-4 h-4 text-cyan-400" data-icon="lucide:history"></span>
                        <span class="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">Since Your Last Login</span>
                    </div>
                    <h3 class="text-sm font-semibold text-white">Your makeup network has been active</h3>
                    <p class="text-xs text-slate-400 mt-1">Feed now prioritizes HMUA + makeup-only posts based on your subscription.</p>
                </div>
                <button onclick="switchMainView('messages')" class="shrink-0 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-colors">Open DMs</button>
            </div>
            <div class="grid grid-cols-3 gap-2 mt-4">
                <div class="rounded-xl border border-white/5 bg-slate-900/60 p-3">
                    <p class="text-[10px] text-slate-500">New posts</p>
                    <p class="text-lg font-bold text-white">${mockFeedDigest.newPosts}</p>
                </div>
                <div class="rounded-xl border border-white/5 bg-slate-900/60 p-3">
                    <p class="text-[10px] text-slate-500">Job matches</p>
                    <p class="text-lg font-bold text-fuchsia-400">${mockFeedDigest.jobMatches}</p>
                </div>
                <div class="rounded-xl border border-white/5 bg-slate-900/60 p-3">
                    <p class="text-[10px] text-slate-500">Product drops</p>
                    <p class="text-lg font-bold text-cyan-400">${mockFeedDigest.productDrops}</p>
                </div>
            </div>
        </div>
    `;
}

function renderMissedTimelineSection(title, events) {
    return `
        <section class="mx-4 mb-6 rounded-[1.1rem] border border-white/10 bg-slate-900/75 overflow-hidden shadow-xl">
            <div class="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-gradient-to-r from-white/[0.03] to-transparent">
                <div>
                    <p class="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-semibold">Since ${mockFeedDigest.lastLogin}</p>
                    <h3 class="text-sm font-semibold text-white">${title}</h3>
                </div>
                <button onclick="showToast('Marked as reviewed', 'check')" class="text-[11px] px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10">Mark reviewed</button>
            </div>
            <div class="p-3 space-y-3">
                ${events.map((event, idx) => renderTimelineEventCard(event, idx, idx === events.length - 1)).join('')}
            </div>
        </section>
    `;
}

function renderTimelineEventCard(event, idx, isLast = false) {
    const accentMap = {
        cyan: { chip: 'text-cyan-300 border-cyan-400/15 bg-cyan-500/8', line: 'from-cyan-400/30 to-cyan-500/0' },
        fuchsia: { chip: 'text-fuchsia-300 border-fuchsia-400/15 bg-fuchsia-500/8', line: 'from-fuchsia-400/30 to-fuchsia-500/0' },
        amber: { chip: 'text-amber-300 border-amber-400/15 bg-amber-500/8', line: 'from-amber-400/30 to-amber-500/0' }
    };
    const accent = accentMap[event.accent] || accentMap.cyan;
    const kindIcons = {
        comment: 'message-circle',
        job: 'briefcase',
        brand: 'sparkles',
        network: 'users'
    };
    const icon = kindIcons[event.kind] || 'bell';

    return `
        <article class="timeline-event relative rounded-[1.1rem] border border-white/5 bg-slate-950/65 p-3">
            <div class="absolute left-7 top-12 bottom-3 w-px bg-gradient-to-b ${accent.line} ${isLast ? 'opacity-40' : ''}"></div>
            <div class="flex gap-3">
                <div class="relative shrink-0">
                    ${event.avatar ? `
                        <div class="w-10 h-10 rounded-xl overflow-hidden border border-white/10">
                            <img src="${event.avatar}" class="w-full h-full object-cover" alt="${event.actor}">
                        </div>
                    ` : `
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br ${event.logoGradient || 'from-slate-600 to-slate-800'} flex items-center justify-center text-white text-sm font-bold">${event.logo || event.actor.slice(0, 1)}</div>
                    `}
                    <div class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center">
                        <span class="iconify w-3 h-3 text-slate-300" data-icon="lucide:${icon}"></span>
                    </div>
                </div>
                <div class="min-w-0 flex-1">
                    <div class="flex items-center justify-between gap-2">
                        <div class="min-w-0">
                            <p class="text-xs text-white leading-tight">
                                <span class="font-semibold">${event.actor}</span>
                                <span class="text-slate-400"> ${event.headline}</span>
                            </p>
                            <p class="text-[10px] text-slate-500 mt-0.5">${event.actorRole} • ${event.time}</p>
                        </div>
                        <button onclick="showToast('Saved update', 'bookmark')" class="w-8 h-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 flex items-center justify-center shrink-0">
                            <span class="iconify w-4 h-4" data-icon="lucide:bookmark-plus"></span>
                        </button>
                    </div>
                    <p class="text-xs text-slate-300 leading-relaxed mt-2">${event.body}</p>
                    <div class="mt-2 flex flex-wrap gap-1.5">
                        ${event.chips.map(chip => `<span class="text-[10px] px-2 py-0.5 rounded-full border ${accent.chip}">${chip}</span>`).join('')}
                    </div>
                    <div class="mt-3 flex items-center justify-between gap-2">
                        <div class="flex items-center gap-3 text-[11px] text-slate-500">
                            <button onclick="showToast('Liked update', 'heart')" class="hover:text-white transition-colors">Like</button>
                            <button onclick="showToast('Queued for later', 'clock')" class="hover:text-white transition-colors">Later</button>
                            <button onclick="showToast('Shared to DMs', 'send')" class="hover:text-white transition-colors">Share</button>
                        </div>
                        <button onclick="${event.ctaAction}" class="px-3 py-1.5 rounded-full bg-white text-slate-950 text-[11px] font-semibold hover:bg-cyan-400 transition-colors">${event.ctaLabel}</button>
                    </div>
                </div>
            </div>
        </article>
    `;
}

function renderInFeedJobsSection() {
    return `
        <section class="mx-4 mb-6 rounded-2xl bg-slate-900 border border-white/10 overflow-hidden shadow-xl">
            <div class="px-4 py-3 border-b border-white/5 bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 flex items-center justify-between">
                <div>
                    <p class="text-[10px] uppercase tracking-[0.2em] text-fuchsia-400 font-semibold">New Jobs in Feed</p>
                    <h3 class="text-sm font-semibold text-white">Matches you may have missed</h3>
                </div>
                <button onclick="openJobsForYouSheet()" class="text-[11px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 transition-colors">View all</button>
            </div>
            <div class="p-3 space-y-3">
                ${mockJobs.slice(0, 2).map((job, i) => `
                    <div onclick="openJobSheet('${job.id}')" class="rounded-xl border border-white/5 bg-slate-950/70 p-3 cursor-pointer group hover:border-fuchsia-500/25 transition-all">
                        <div class="flex items-start gap-3">
                            <div class="w-10 h-10 rounded-xl bg-gradient-to-br ${job.logoGradient} flex items-center justify-center text-sm font-bold text-white shrink-0">${job.logo}</div>
                            <div class="flex-1 min-w-0">
                                <div class="flex items-center justify-between gap-2">
                                    <h4 class="text-sm font-semibold text-white group-hover:text-fuchsia-400 transition-colors truncate">${job.title}</h4>
                                    <span class="text-[10px] px-2 py-0.5 rounded-full bg-fuchsia-500/15 text-fuchsia-300 font-semibold">${95 - i * 4}% Match</span>
                                </div>
                                <p class="text-[11px] text-slate-400">${job.company} • ${job.type}</p>
                                <p class="text-xs text-slate-300 mt-2 line-clamp-2">${job.description}</p>
                            </div>
                        </div>
                        <div class="mt-3 flex items-center justify-between gap-2">
                            <div class="flex gap-1.5 flex-wrap">
                                ${job.tags.slice(0, 2).map(tag => `<span class="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">${tag}</span>`).join('')}
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-sm font-bold text-green-400">${job.budget}</span>
                                <button onclick="event.stopPropagation(); quickApply('${job.id}')" class="px-3 py-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white text-[11px] font-bold">Quick Apply</button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

function renderBrandLaunchSection() {
    return `
        <section class="mx-4 mb-6 rounded-2xl bg-slate-900 border border-white/10 overflow-hidden shadow-xl">
            <div class="px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <div>
                    <p class="text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-semibold">Brand Launches</p>
                    <h3 class="text-sm font-semibold text-white">New product announcements in your niche</h3>
                </div>
                <button class="text-[11px] px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10">Following</button>
            </div>
            <div class="p-3 space-y-3">
                ${mockBrandLaunches.map(item => `
                    <div class="rounded-xl border border-white/5 bg-slate-950/60 p-3">
                        <div class="flex gap-3">
                            <div class="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/10">
                                <img src="${item.image}" class="w-full h-full object-cover" alt="${item.brand}">
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-semibold">${item.brand}</p>
                                <h4 class="text-sm font-semibold text-white leading-tight mt-1">${item.title}</h4>
                                <p class="text-xs text-slate-400 leading-relaxed mt-1">${item.summary}</p>
                            </div>
                        </div>
                        <div class="mt-3 flex items-center justify-between gap-2">
                            <div class="flex gap-1.5 flex-wrap">
                                ${item.tags.map(tag => `<span class="text-[10px] px-2 py-0.5 rounded-full border border-cyan-400/15 bg-cyan-500/8 text-cyan-300">${tag}</span>`).join('')}
                            </div>
                            <button onclick="showToast('Saved product launch alert', 'bell')" class="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-semibold text-slate-200 hover:bg-white/10">Save Alert</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

function renderCommunityUpdateSection() {
    return `
        <section class="mx-4 mb-6 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <div class="flex items-center justify-between gap-2 mb-3">
                <div>
                    <p class="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">Community Updates</p>
                    <h3 class="text-sm font-semibold text-white">Brand drops + jobs + friend activity in one place</h3>
                </div>
                <button onclick="switchMainView('discover')" class="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-200">Explore</button>
            </div>
            <div class="space-y-2">
                <div class="flex items-center gap-3 rounded-xl bg-slate-950/60 border border-white/5 p-3">
                    <div class="w-8 h-8 rounded-lg bg-fuchsia-500/15 text-fuchsia-300 flex items-center justify-center">
                        <span class="iconify w-4 h-4" data-icon="lucide:sparkles"></span>
                    </div>
                    <p class="text-xs text-slate-300">3 new editorial makeup opportunities were added in Jobs for You since your last session.</p>
                </div>
                <div class="flex items-center gap-3 rounded-xl bg-slate-950/60 border border-white/5 p-3">
                    <div class="w-8 h-8 rounded-lg bg-cyan-500/15 text-cyan-300 flex items-center justify-center">
                        <span class="iconify w-4 h-4" data-icon="lucide:bell-ring"></span>
                    </div>
                    <p class="text-xs text-slate-300">Two beauty brands posted new product launches and are requesting creator demos.</p>
                </div>
                <div class="flex items-center gap-3 rounded-xl bg-slate-950/60 border border-white/5 p-3">
                    <div class="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-300 flex items-center justify-center">
                        <span class="iconify w-4 h-4" data-icon="lucide:message-circle"></span>
                    </div>
                    <p class="text-xs text-slate-300">Unread DMs are pinned to the feed header so you can jump into client conversations faster.</p>
                </div>
            </div>
        </section>
    `;
}

function syncMobileBottomNav(activeViewId) {
    ['feed', 'discover', 'messages', 'profile'].forEach(id => {
        const btn = document.getElementById('mobile-nav-' + id);
        if (!btn) return;
        btn.classList.toggle('active', id === activeViewId);
    });
}

// Render Discover
function renderDiscover() {
    const container = document.getElementById('view-discover');
    container.innerHTML = `
        <div data-view-scroll="discover" class="overflow-y-auto hide-scrollbar px-4 pb-28 md:pb-20 animate-fade-in">
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
    applyImageFallbacks(container);
}

// Render Jobs
function renderJobs() {
    const container = document.getElementById('view-jobs');
    container.innerHTML = `
        <div data-view-scroll="jobs" class="overflow-y-auto hide-scrollbar px-4 pb-28 md:pb-20 animate-fade-in">
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
                    <div onclick="openJobSheet('${job.id}')" class="p-4 rounded-xl bg-slate-900 border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer group">
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
    applyImageFallbacks(container);
}

// Render Messages
function renderMessages() {
    const container = document.getElementById('view-messages');
    container.innerHTML = `
        <div data-view-scroll="messages" class="animate-fade-in relative bg-slate-950 px-4 pt-4 h-full overflow-y-auto hide-scrollbar pb-28 md:pb-20">
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
                    <div onclick="openMessageSheet('${msg.id}')" class="p-3 -mx-2 rounded-xl hover:bg-white/5 cursor-pointer flex gap-3 group ${msg.unread ? 'relative' : ''}">
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
    applyImageFallbacks(container);
}

// Render Profile
function renderProfile() {
    const container = document.getElementById('view-profile');
    container.innerHTML = `
        <div data-view-scroll="profile" class="animate-fade-in relative bg-slate-950 overflow-y-auto hide-scrollbar pb-28 md:pb-20">
            <div class="h-40 w-full relative">
                <img src="${IMAGES.cinematic1}" class="w-full h-full object-cover object-center" alt="Cover">
                <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/40 via-cyan-800/30 to-slate-950/60"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <button class="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors flex items-center gap-1.5">
                    <span class="iconify w-3 h-3" data-icon="lucide:edit-2"></span>
                    Edit Profile
                </button>
            </div>
            <div class="px-5 -mt-10 mb-6 relative z-10">
                <div class="w-20 h-20 rounded-2xl bg-slate-900 border-2 border-slate-950 p-0.5 mb-3 shadow-2xl">
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
    applyImageFallbacks(container);
}

// Render Right Panel
function renderRightPanel() {
    const container = document.getElementById('right-panel');
    container.innerHTML = `
        <div class="p-4 border-b border-white/5 flex items-center justify-between bg-gradient-to-b from-slate-950/70 to-slate-900/20 backdrop-blur-md">
            <div class="flex bg-slate-900/90 p-1 rounded-full border border-white/5 shadow-lg shadow-black/20">
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
    applyImageFallbacks(container);
}

function renderProfilePanel() {
    return `
        <div class="rounded-[1.1rem] bg-panel border border-panel-border relative overflow-hidden group shadow-xl shadow-black/15">
            <div class="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-transparent"></div>
            <div class="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-indigo-900/30 to-transparent opacity-60"></div>
            <div class="p-5 relative z-10">
                <div class="flex items-start justify-between gap-3 mb-4">
                    <div class="flex gap-4 min-w-0">
                        <div class="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 shrink-0 bg-slate-800">
                            <img src="${mockProfile.avatar}" data-fallback-src="${IMAGES.mua2}" onerror="handleImageError(this)" class="w-full h-full object-cover" alt="${mockProfile.name}">
                        </div>
                        <div class="flex flex-col pt-0.5 min-w-0">
                            <div class="flex items-center gap-2 mb-1">
                                <h2 class="text-lg font-display font-semibold text-white leading-tight">${mockProfile.name}</h2>
                                <span class="text-[10px] px-2 py-0.5 rounded-full border border-emerald-400/20 bg-emerald-500/10 text-emerald-300 font-semibold">Available</span>
                            </div>
                            <p class="text-[11px] text-slate-400 leading-relaxed max-w-[170px]">${mockProfile.title}</p>
                        </div>
                    </div>
                    <button class="px-4 py-2 bg-white text-slate-950 text-[10px] font-bold rounded-full hover:bg-slate-200 transition-colors whitespace-nowrap shadow-sm">View Public Profile</button>
                </div>

                <div class="grid grid-cols-3 gap-2 mb-4">
                    <div class="rounded-xl border border-white/5 bg-slate-900/60 p-2.5">
                        <p class="text-[10px] text-slate-500">Followers</p>
                        <p class="text-sm font-semibold text-white">${mockProfile.followers}</p>
                    </div>
                    <div class="rounded-xl border border-white/5 bg-slate-900/60 p-2.5">
                        <p class="text-[10px] text-slate-500">Rating</p>
                        <p class="text-sm font-semibold text-white">${mockProfile.rating}</p>
                    </div>
                    <div class="rounded-xl border border-white/5 bg-slate-900/60 p-2.5">
                        <p class="text-[10px] text-slate-500">Jobs Fit</p>
                        <p class="text-sm font-semibold text-fuchsia-300">95%</p>
                    </div>
                </div>

                <div class="flex flex-wrap gap-2 mb-4">
                    ${mockProfile.specialties.map(tag => `<span class="px-2.5 py-1 rounded-full border border-white/10 bg-slate-800/50 text-[10px] text-slate-300">${tag}</span>`).join('')}
                </div>
                <div class="flex items-center gap-4 pt-2 border-t border-white/5">
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
        <div class="rounded-[1.1rem] bg-panel border border-panel-border p-5 shadow-xl shadow-black/10">
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
        <div class="rounded-[1.1rem] bg-panel border border-panel-border p-5 shadow-xl shadow-black/10">
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
    return `
        <div class="rounded-[1.1rem] border border-fuchsia-500/20 bg-gradient-to-r from-fuchsia-500/10 via-indigo-500/8 to-cyan-500/10 p-4 shadow-xl shadow-black/10">
            <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-fuchsia-900/20">
                    <span class="text-lg font-bold">95</span>
                </div>
                <div>
                    <p class="text-[10px] uppercase tracking-[0.18em] text-fuchsia-300 font-semibold mb-0.5">Curated</p>
                    <h3 class="text-sm font-semibold text-white">Your Match Score</h3>
                    <p class="text-xs text-slate-400">Based on skills, location, and availability</p>
                </div>
            </div>
        </div>
        ${mockJobs.slice(0, 3).map((job, idx) => `
            <div onclick="openJobSheet('${job.id}')" class="glass-card rounded-[1.1rem] p-4 hover:border-fuchsia-500/25 group cursor-pointer relative overflow-hidden shadow-xl shadow-black/10">
                <div class="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-fuchsia-500/15 text-fuchsia-300 text-[10px] font-bold">
                    ${95 - idx * 5}% Match
                </div>
                <div class="flex justify-between items-start mb-2 pr-20">
                    <div class="flex items-start gap-3">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br ${job.logoGradient} flex items-center justify-center text-white font-bold text-sm shrink-0">${job.logo}</div>
                        <div>
                            <h4 class="text-sm font-semibold text-white group-hover:text-fuchsia-400 transition-colors">${job.title}</h4>
                            <p class="text-[11px] text-slate-400">${job.company}</p>
                        </div>
                    </div>
                    <span class="text-xs font-mono font-medium ${job.budgetType === 'green' ? 'text-green-400 bg-green-400/10' : 'text-slate-300 bg-white/5'} px-2 py-1 rounded">${job.budget}</span>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed mb-3 line-clamp-2">${job.description}</p>
                <div class="flex flex-wrap gap-1.5 mb-3">
                    ${job.tags.slice(0, 2).map(tag => `<span class="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">${tag}</span>`).join('')}
                </div>
                <button onclick="event.stopPropagation(); quickApply('${job.id}')" class="w-full py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white text-xs font-bold hover:from-fuchsia-400 hover:to-cyan-400 transition-colors shadow-lg shadow-fuchsia-900/20">Quick Apply</button>
            </div>
        `).join('')}
    `;
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

    requestAnimationFrame(() => {
        refreshActiveJobSheetPosition();
    });
}

// Load saved device preference
function loadDevicePreference() {
    const savedDevice = localStorage.getItem('indstry-device');
    if (savedDevice) {
        setDeviceView(savedDevice);
    }
}

// ===== COMMENTS SHEET =====
let currentPostForComments = null;

const mockComments = [
    { id: 1, user: 'Sarah M.', avatar: IMAGES.mua3, text: 'This is absolutely stunning! Love the technique 🔥', time: '2h ago', likes: 24 },
    { id: 2, user: 'Marcus L.', avatar: IMAGES.photographer1, text: 'The lighting in this is perfect. What modifier did you use?', time: '3h ago', likes: 18 },
    { id: 3, user: 'Jin Park', avatar: IMAGES.videographer3, text: 'Collab soon? This style would be perfect for my next project', time: '5h ago', likes: 12 },
    { id: 4, user: 'Elena R.', avatar: IMAGES.hairstylist1, text: 'Saved for inspiration! 💫', time: '8h ago', likes: 8 },
    { id: 5, user: 'David C.', avatar: IMAGES.coolPro, text: 'The color grading here is next level', time: '1d ago', likes: 45 }
];

function openCommentsSheet(postId) {
    currentPostForComments = postId;
    const sheet = document.getElementById('comments-sheet');
    const backdrop = document.getElementById('comments-backdrop');
    
    sheet.innerHTML = `
        <div class="flex items-center justify-between p-4 border-b border-white/10">
            <div class="w-10"></div>
            <div class="flex flex-col items-center">
                <div class="w-10 h-1 bg-slate-700 rounded-full mb-3"></div>
                <h3 class="text-base font-semibold text-white">Comments</h3>
                <span class="text-xs text-slate-500">${mockComments.length} comments</span>
            </div>
            <button onclick="closeCommentsSheet()" class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400">
                <span class="iconify w-5 h-5" data-icon="lucide:x"></span>
            </button>
        </div>
        <div class="flex-1 overflow-y-auto hide-scrollbar p-4 space-y-4">
            ${mockComments.map(comment => `
                <div class="flex gap-3 group">
                    <img src="${comment.avatar}" class="w-9 h-9 rounded-full object-cover shrink-0">
                    <div class="flex-1">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="text-sm font-medium text-white">${comment.user}</span>
                            <span class="text-[10px] text-slate-500">${comment.time}</span>
                        </div>
                        <p class="text-sm text-slate-300 leading-relaxed">${comment.text}</p>
                        <div class="flex items-center gap-4 mt-2">
                            <button class="flex items-center gap-1 text-slate-500 hover:text-fuchsia-400 transition-colors">
                                <span class="iconify w-4 h-4" data-icon="lucide:heart"></span>
                                <span class="text-xs">${comment.likes}</span>
                            </button>
                            <button class="text-xs text-slate-500 hover:text-white transition-colors">Reply</button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="p-4 border-t border-white/10 bg-slate-950/50">
            <div class="flex items-center gap-3">
                <img src="${IMAGES.mua1}" class="w-8 h-8 rounded-full object-cover">
                <div class="flex-1 relative">
                    <input type="text" placeholder="Add a comment..." class="w-full bg-slate-800 border border-white/10 rounded-full py-2.5 px-4 pr-12 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50">
                    <button onclick="addComment()" class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-cyan-500 hover:bg-cyan-400 flex items-center justify-center text-white transition-colors">
                        <span class="iconify w-4 h-4" data-icon="lucide:send"></span>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    sheet.classList.remove('translate-y-full');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
}

function closeCommentsSheet() {
    const sheet = document.getElementById('comments-sheet');
    const backdrop = document.getElementById('comments-backdrop');
    sheet.classList.add('translate-y-full');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
}

function addComment() {
    showToast('Comment posted!', 'check-circle');
    closeCommentsSheet();
}

// ===== BOOKING SHEET =====
let currentCreatorForBooking = null;

function openBookingSheet(creatorName, creatorAvatar, role) {
    currentCreatorForBooking = creatorName;
    const sheet = document.getElementById('booking-sheet');
    const backdrop = document.getElementById('booking-backdrop');
    
    const today = new Date();
    const days = [];
    for (let i = 0; i < 14; i++) {
        const d = new Date(today);
        d.setDate(d.getDate() + i);
        days.push({
            day: d.toLocaleDateString('en-US', { weekday: 'short' }),
            date: d.getDate(),
            month: d.toLocaleDateString('en-US', { month: 'short' }),
            available: Math.random() > 0.3
        });
    }
    
    sheet.innerHTML = `
        <div class="flex items-center justify-between p-4 border-b border-white/10">
            <div class="w-10"></div>
            <div class="flex flex-col items-center">
                <div class="w-10 h-1 bg-slate-700 rounded-full mb-3"></div>
                <h3 class="text-base font-semibold text-white">Book ${creatorName || 'Creator'}</h3>
                <span class="text-xs text-slate-500">${role || 'Creative Professional'}</span>
            </div>
            <button onclick="closeBookingSheet()" class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400">
                <span class="iconify w-5 h-5" data-icon="lucide:x"></span>
            </button>
        </div>
        
        <div class="flex-1 overflow-y-auto hide-scrollbar">
            <!-- Creator Card -->
            <div class="p-4 border-b border-white/5">
                <div class="flex items-center gap-3 p-3 bg-slate-800/50 rounded-2xl border border-white/5">
                    <img src="${creatorAvatar || IMAGES.mua1}" class="w-14 h-14 rounded-xl object-cover">
                    <div class="flex-1">
                        <h4 class="text-sm font-semibold text-white">${creatorName || 'Kenna Reef'}</h4>
                        <p class="text-xs text-slate-400">${role || 'MUA'} • Los Angeles</p>
                        <div class="flex items-center gap-1 mt-1">
                            <span class="iconify w-3 h-3 text-amber-400" data-icon="lucide:star"></span>
                            <span class="text-xs text-slate-300">4.9 (128 reviews)</span>
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="text-lg font-bold text-white">$950</span>
                        <p class="text-[10px] text-slate-500">per day</p>
                    </div>
                </div>
            </div>
            
            <!-- Date Selection -->
            <div class="p-4 border-b border-white/5">
                <h4 class="text-sm font-semibold text-white mb-3">Select Date</h4>
                <div class="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
                    ${days.map((d, i) => `
                        <button onclick="selectBookingDate(this)" class="booking-date flex flex-col items-center p-3 rounded-xl border ${i === 2 ? 'border-cyan-500 bg-cyan-500/10' : 'border-white/10 bg-slate-800/50'} ${d.available ? 'hover:border-cyan-500/50' : 'opacity-40 cursor-not-allowed'} transition-all min-w-[60px]" ${!d.available ? 'disabled' : ''}>
                            <span class="text-[10px] text-slate-500 uppercase">${d.day}</span>
                            <span class="text-lg font-bold ${i === 2 ? 'text-cyan-400' : 'text-white'}">${d.date}</span>
                            <span class="text-[10px] text-slate-500">${d.month}</span>
                            ${!d.available ? '<span class="text-[8px] text-red-400 mt-1">Booked</span>' : ''}
                        </button>
                    `).join('')}
                </div>
            </div>
            
            <!-- Time Selection -->
            <div class="p-4 border-b border-white/5">
                <h4 class="text-sm font-semibold text-white mb-3">Select Time</h4>
                <div class="grid grid-cols-3 gap-2">
                    ${['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'].map((time, i) => `
                        <button onclick="selectBookingTime(this)" class="booking-time py-2.5 px-3 rounded-xl border ${i === 1 ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400' : 'border-white/10 bg-slate-800/50 text-slate-300'} text-sm font-medium hover:border-cyan-500/50 transition-all">
                            ${time}
                        </button>
                    `).join('')}
                </div>
            </div>
            
            <!-- Service Selection -->
            <div class="p-4 border-b border-white/5">
                <h4 class="text-sm font-semibold text-white mb-3">Service Type</h4>
                <div class="space-y-2">
                    ${[
                        { name: 'Full Day Rate', price: '$950', desc: '8+ hours on set' },
                        { name: 'Half Day Rate', price: '$550', desc: '4 hours on set' },
                        { name: 'Bridal Package', price: '$650', desc: 'Trial + day-of' }
                    ].map((service, i) => `
                        <button onclick="selectService(this)" class="booking-service w-full flex items-center justify-between p-3 rounded-xl border ${i === 0 ? 'border-cyan-500 bg-cyan-500/10' : 'border-white/10 bg-slate-800/50'} hover:border-cyan-500/50 transition-all text-left">
                            <div>
                                <span class="text-sm font-medium ${i === 0 ? 'text-cyan-400' : 'text-white'}">${service.name}</span>
                                <p class="text-xs text-slate-500">${service.desc}</p>
                            </div>
                            <span class="text-sm font-bold text-white">${service.price}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
            
            <!-- Notes -->
            <div class="p-4">
                <h4 class="text-sm font-semibold text-white mb-3">Add Notes</h4>
                <textarea placeholder="Describe your project, location, or any special requirements..." class="w-full bg-slate-800 border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 resize-none h-24"></textarea>
            </div>
        </div>
        
        <div class="p-4 border-t border-white/10 bg-slate-950/80 backdrop-blur-md">
            <div class="flex items-center justify-between mb-3">
                <span class="text-sm text-slate-400">Total</span>
                <span class="text-xl font-bold text-white">$950</span>
            </div>
            <button onclick="confirmBooking()" class="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-bold rounded-xl hover:from-cyan-400 hover:to-cyan-300 transition-all flex items-center justify-center gap-2">
                <span class="iconify w-5 h-5" data-icon="lucide:calendar-check"></span>
                Request Booking
            </button>
            <p class="text-[10px] text-slate-500 text-center mt-2">You won't be charged until the booking is confirmed</p>
        </div>
    `;
    
    sheet.classList.remove('translate-y-full');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
}

function closeBookingSheet() {
    const sheet = document.getElementById('booking-sheet');
    const backdrop = document.getElementById('booking-backdrop');
    sheet.classList.add('translate-y-full');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
}

function selectBookingDate(el) {
    document.querySelectorAll('.booking-date').forEach(btn => {
        btn.classList.remove('border-cyan-500', 'bg-cyan-500/10');
        btn.classList.add('border-white/10');
        btn.querySelector('.text-lg').classList.remove('text-cyan-400');
        btn.querySelector('.text-lg').classList.add('text-white');
    });
    el.classList.add('border-cyan-500', 'bg-cyan-500/10');
    el.classList.remove('border-white/10');
    el.querySelector('.text-lg').classList.add('text-cyan-400');
    el.querySelector('.text-lg').classList.remove('text-white');
}

function selectBookingTime(el) {
    document.querySelectorAll('.booking-time').forEach(btn => {
        btn.classList.remove('border-cyan-500', 'bg-cyan-500/10', 'text-cyan-400');
        btn.classList.add('border-white/10', 'text-slate-300');
    });
    el.classList.add('border-cyan-500', 'bg-cyan-500/10', 'text-cyan-400');
    el.classList.remove('border-white/10', 'text-slate-300');
}

function selectService(el) {
    document.querySelectorAll('.booking-service').forEach(btn => {
        btn.classList.remove('border-cyan-500', 'bg-cyan-500/10');
        btn.classList.add('border-white/10');
        btn.querySelector('.text-sm.font-medium').classList.remove('text-cyan-400');
        btn.querySelector('.text-sm.font-medium').classList.add('text-white');
    });
    el.classList.add('border-cyan-500', 'bg-cyan-500/10');
    el.classList.remove('border-white/10');
    el.querySelector('.text-sm.font-medium').classList.add('text-cyan-400');
    el.querySelector('.text-sm.font-medium').classList.remove('text-white');
}

function confirmBooking() {
    showToast('Booking request sent! 🎉', 'calendar-check');
    closeBookingSheet();
}

// ===== SHARE SHEET =====
function openShareSheet(title) {
    const sheet = document.getElementById('share-sheet');
    const backdrop = document.getElementById('share-backdrop');
    
    sheet.innerHTML = `
        <div class="p-4">
            <div class="w-10 h-1 bg-slate-700 rounded-full mx-auto mb-4"></div>
            <h3 class="text-base font-semibold text-white text-center mb-4">Share</h3>
            
            <div class="grid grid-cols-4 gap-4 mb-4">
                ${[
                    { icon: 'message-circle', label: 'Message', color: 'bg-green-500' },
                    { icon: 'instagram', label: 'Instagram', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
                    { icon: 'twitter', label: 'Twitter', color: 'bg-sky-500' },
                    { icon: 'link', label: 'Copy Link', color: 'bg-slate-600' }
                ].map(item => `
                    <button onclick="shareVia('${item.label}')" class="flex flex-col items-center gap-2">
                        <div class="w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center">
                            <span class="iconify w-6 h-6 text-white" data-icon="lucide:${item.icon}"></span>
                        </div>
                        <span class="text-[10px] text-slate-400">${item.label}</span>
                    </button>
                `).join('')}
            </div>
            
            <div class="flex items-center gap-2 p-3 bg-slate-800 rounded-xl mb-4">
                <input type="text" value="indstry.app/p/${Math.random().toString(36).substr(2, 8)}" readonly class="flex-1 bg-transparent text-sm text-slate-300 outline-none">
                <button onclick="copyLink()" class="px-3 py-1.5 bg-cyan-500 text-white text-xs font-bold rounded-lg hover:bg-cyan-400 transition-colors">Copy</button>
            </div>
            
            <button onclick="closeShareSheet()" class="w-full py-3 border border-white/10 text-slate-300 font-medium rounded-xl hover:bg-white/5 transition-colors">Cancel</button>
        </div>
    `;
    
    sheet.classList.remove('translate-y-full');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
}

function closeShareSheet() {
    const sheet = document.getElementById('share-sheet');
    const backdrop = document.getElementById('share-backdrop');
    sheet.classList.add('translate-y-full');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
}

function shareVia(platform) {
    showToast(`Shared via ${platform}!`, 'share-2');
    closeShareSheet();
}

function copyLink() {
    showToast('Link copied to clipboard!', 'link');
    closeShareSheet();
}

// ===== TOAST NOTIFICATIONS =====
function showToast(message, icon = 'check-circle') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');
    
    toastMessage.textContent = message;
    toastIcon.setAttribute('data-icon', `lucide:${icon}`);
    
    toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
    
    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    }, 2500);
}

// ===== DOUBLE TAP TO LIKE =====
function doubleTapLike(postId, event) {
    event.preventDefault();
    const heartAnim = document.getElementById('heart-anim-' + postId);
    
    // Show heart animation
    heartAnim.classList.remove('opacity-0', 'scale-0');
    heartAnim.classList.add('opacity-100', 'scale-100');
    
    // Add to liked posts
    if (!likedPosts.has(postId)) {
        likedPosts.add(postId);
        showToast('Added to your likes ❤️', 'heart');
    }
    
    // Hide heart after animation
    setTimeout(() => {
        heartAnim.classList.add('opacity-0', 'scale-0');
        heartAnim.classList.remove('opacity-100', 'scale-100');
    }, 800);
}

// ===== LIKE ANIMATION =====
let likedPosts = new Set();

function toggleLike(postId, el) {
    const icon = el.querySelector('.iconify');
    const surface = el.querySelector('[data-action-surface]') || el.querySelector('div');
    
    if (likedPosts.has(postId)) {
        likedPosts.delete(postId);
        icon.classList.remove('text-fuchsia-500');
        icon.classList.add('text-white');
        if (surface) {
            surface.classList.remove('bg-fuchsia-500/20', 'scale-110');
        }
    } else {
        likedPosts.add(postId);
        icon.classList.add('text-fuchsia-500');
        icon.classList.remove('text-white');
        if (surface) {
            surface.classList.add('bg-fuchsia-500/20');
        }
        
        // Heart burst animation
        if (surface) {
            surface.classList.add('scale-110');
            setTimeout(() => surface.classList.remove('scale-110'), 150);
        }
        
        showToast('Added to your likes ❤️', 'heart');
    }
}

// ===== SAVE/BOOKMARK =====
let savedPosts = new Set();

function toggleSave(postId, el) {
    const icon = el.querySelector('.iconify');
    const surface = el.querySelector('[data-action-surface]') || el.querySelector('div');
    
    if (savedPosts.has(postId)) {
        savedPosts.delete(postId);
        icon.classList.remove('text-amber-400');
        icon.classList.add('text-white');
        if (surface) {
            surface.classList.remove('bg-amber-400/20');
        }
        showToast('Removed from saved', 'bookmark-minus');
    } else {
        savedPosts.add(postId);
        icon.classList.add('text-amber-400');
        icon.classList.remove('text-white');
        if (surface) {
            surface.classList.add('bg-amber-400/20');
        }
        showToast('Saved to collection 📌', 'bookmark-check');
    }
}

// ===== FOLLOW ANIMATION =====
let followedCreators = new Set();

function toggleFollow(creatorId, el) {
    const accent = el.dataset.accent || 'cyan';
    const accentClasses = {
        cyan: ['bg-cyan-400', 'hover:bg-cyan-300'],
        amber: ['bg-amber-400', 'hover:bg-amber-300'],
        fuchsia: ['bg-fuchsia-400', 'hover:bg-fuchsia-300']
    };
    const [defaultBg, defaultHover] = accentClasses[accent] || accentClasses.cyan;

    if (followedCreators.has(creatorId)) {
        followedCreators.delete(creatorId);
        el.textContent = 'Follow';
        el.classList.remove('bg-slate-700', 'text-white');
        el.classList.add(defaultBg, defaultHover, 'text-slate-950');
    } else {
        followedCreators.add(creatorId);
        el.textContent = 'Following';
        el.classList.add('bg-slate-700', 'text-white');
        el.classList.remove('bg-cyan-400', 'hover:bg-cyan-300', 'bg-amber-400', 'hover:bg-amber-300', 'bg-fuchsia-400', 'hover:bg-fuchsia-300', 'text-slate-950');
        showToast('You\'re now following this creator! 🎉', 'user-check');
    }
}

// ===== JOB APPLICATION SHEET =====
function openJobSheet(job) {
    const sheet = document.getElementById('job-sheet');
    const backdrop = document.getElementById('job-backdrop');
    
    const jobData = mockJobs.find(j => j.id === job) || mockJobs[0];
    
    sheet.innerHTML = `
        <div class="flex items-center justify-between p-4 border-b border-white/10">
            <div class="w-10"></div>
            <div class="flex flex-col items-center">
                <div class="w-10 h-1 bg-slate-700 rounded-full mb-3"></div>
                <h3 class="text-base font-semibold text-white">Apply Now</h3>
            </div>
            <button onclick="closeJobSheet()" class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400">
                <span class="iconify w-5 h-5" data-icon="lucide:x"></span>
            </button>
        </div>
        
        <div class="flex-1 overflow-y-auto hide-scrollbar">
            <!-- Job Header -->
            <div class="p-4 border-b border-white/5">
                <div class="flex items-start gap-3">
                    <div class="w-14 h-14 rounded-xl bg-gradient-to-br ${jobData.logoGradient} flex items-center justify-center text-white font-bold text-lg shrink-0">${jobData.logo}</div>
                    <div class="flex-1">
                        <h4 class="text-lg font-semibold text-white">${jobData.title}</h4>
                        <p class="text-sm text-slate-400">${jobData.company}</p>
                        <div class="flex items-center gap-2 mt-2">
                            <span class="text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded-full">${jobData.type}</span>
                            <span class="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full">${jobData.budget}</span>
                        </div>
                    </div>
                </div>
                <p class="text-sm text-slate-300 mt-4 leading-relaxed">${jobData.description}</p>
                <div class="flex gap-2 flex-wrap mt-3">
                    ${jobData.tags.map(tag => `<span class="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">${tag}</span>`).join('')}
                </div>
            </div>
            
            <!-- Application Form -->
            <div class="p-4 space-y-4">
                <div>
                    <label class="text-sm font-medium text-white mb-2 block">Portfolio Link</label>
                    <input type="text" value="indstry.app/kenna.reef" class="w-full bg-slate-800 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-cyan-500/50">
                </div>
                
                <div>
                    <label class="text-sm font-medium text-white mb-2 block">Why are you a good fit?</label>
                    <textarea placeholder="Tell them about your relevant experience..." class="w-full bg-slate-800 border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 resize-none h-28"></textarea>
                </div>
                
                <div>
                    <label class="text-sm font-medium text-white mb-2 block">Availability</label>
                    <div class="grid grid-cols-2 gap-2">
                        <button class="py-2.5 px-4 rounded-xl border border-cyan-500 bg-cyan-500/10 text-cyan-400 text-sm font-medium">Available</button>
                        <button class="py-2.5 px-4 rounded-xl border border-white/10 bg-slate-800/50 text-slate-300 text-sm font-medium">Need to check</button>
                    </div>
                </div>
                
                <div>
                    <label class="text-sm font-medium text-white mb-2 block">Attachments</label>
                    <button class="w-full py-4 border border-dashed border-white/20 rounded-xl text-slate-400 text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-colors flex items-center justify-center gap-2">
                        <span class="iconify w-5 h-5" data-icon="lucide:upload"></span>
                        Upload resume or portfolio PDF
                    </button>
                </div>
            </div>
        </div>
        
        <div class="p-4 border-t border-white/10 bg-slate-950/80 backdrop-blur-md">
            <button onclick="submitApplication()" class="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-bold rounded-xl hover:from-cyan-400 hover:to-cyan-300 transition-all flex items-center justify-center gap-2">
                <span class="iconify w-5 h-5" data-icon="lucide:send"></span>
                Submit Application
            </button>
            <p class="text-[10px] text-slate-500 text-center mt-2">Your profile and portfolio will be shared with ${jobData.company}</p>
        </div>
    `;
    
    applyImageFallbacks(sheet);
    openJobSheetLayer({ variant: 'apply', heightRatio: 0.82 });
}

function closeJobSheet() {
    const sheet = document.getElementById('job-sheet');
    const backdrop = document.getElementById('job-backdrop');
    sheet.classList.add('translate-y-full');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    currentJobSheetVariant = null;
    setTimeout(() => resetJobSheetViewportStyles(), 320);
}

function submitApplication() {
    showToast('Application submitted! 🎉', 'check-circle');
    closeJobSheet();
}

function quickApply(jobId) {
    const job = mockJobs.find(j => j.id === jobId);
    showToast(`Applied to ${job?.company || 'job'}! 🚀`, 'check-circle');
}

// ===== JOBS FOR YOU SHEET =====
function openJobsForYouSheet() {
    const sheet = document.getElementById('job-sheet');
    
    // Curated jobs based on user profile
    const curatedJobs = mockJobs.slice(0, 3);
    
    sheet.innerHTML = `
        <div class="jobsforyou-sheet-shell h-full flex flex-col">
            <div class="px-4 pt-3 pb-4 border-b border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-900/40 backdrop-blur-md">
                <div class="w-10 h-1 bg-slate-700 rounded-full mx-auto mb-3"></div>
                <div class="flex items-start justify-between gap-3">
                    <div>
                        <p class="text-[10px] uppercase tracking-[0.22em] text-fuchsia-300 font-semibold mb-1">Curated</p>
                        <h3 class="text-base font-semibold text-white flex items-center gap-2">
                            <span class="iconify w-4 h-4 text-fuchsia-400" data-icon="lucide:sparkles"></span>
                            Jobs for You
                        </h3>
                        <p class="text-[11px] text-slate-400 mt-1">Based on profile + activity</p>
                    </div>
                    <button onclick="closeJobSheet()" class="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 shrink-0">
                        <span class="iconify w-4 h-4" data-icon="lucide:x"></span>
                    </button>
                </div>
            </div>

            <div class="flex-1 overflow-y-auto hide-scrollbar p-4 space-y-4">
                <div class="rounded-[1.1rem] border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/12 via-slate-900 to-cyan-500/10 p-4 shadow-xl shadow-black/10">
                    <div class="flex items-center justify-between gap-3">
                        <div class="flex items-center gap-3">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-fuchsia-900/20">
                                <span class="text-xl font-bold text-white">95</span>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white">Your Match Score</h4>
                                <p class="text-xs text-slate-400">Best fits right now</p>
                            </div>
                        </div>
                        <button onclick="switchMainView('profile'); closeJobSheet();" class="hidden sm:flex px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-semibold text-slate-200 hover:bg-white/10">Refine Profile</button>
                    </div>
                    <div class="grid grid-cols-3 gap-2 mt-4">
                        <div class="rounded-xl bg-slate-950/60 border border-white/5 p-2.5">
                            <p class="text-[10px] text-slate-500">New</p>
                            <p class="text-sm font-semibold text-white">5 roles</p>
                        </div>
                        <div class="rounded-xl bg-slate-950/60 border border-white/5 p-2.5">
                            <p class="text-[10px] text-slate-500">Urgent</p>
                            <p class="text-sm font-semibold text-fuchsia-300">2 today</p>
                        </div>
                        <div class="rounded-xl bg-slate-950/60 border border-white/5 p-2.5">
                            <p class="text-[10px] text-slate-500">Saved</p>
                            <p class="text-sm font-semibold text-cyan-300">3 jobs</p>
                        </div>
                    </div>
                    <div class="flex gap-2 mt-3 overflow-x-auto hide-scrollbar pb-1">
                        ${['Editorial', 'Freelance', 'On-set', 'Beauty', 'High Match'].map(tag => `
                            <button class="shrink-0 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-medium text-slate-300 hover:bg-white/10">${tag}</button>
                        `).join('')}
                    </div>
                </div>

                <div class="space-y-3">
                    ${curatedJobs.map((job, i) => `
                        <article onclick="openJobSheet('${job.id}')" class="jobsforyou-card p-4 rounded-[1.1rem] bg-slate-800/50 border border-white/5 hover:border-fuchsia-500/25 transition-all cursor-pointer group relative overflow-hidden">
                            <div class="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-fuchsia-500/80 to-cyan-400/70 opacity-70"></div>
                            <div class="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-fuchsia-500/15 text-fuchsia-300 text-[10px] font-bold">
                                ${95 - i * 5}% Match
                            </div>

                            <div class="flex items-start gap-3 mb-3 pr-16">
                                <div class="w-12 h-12 rounded-xl bg-gradient-to-br ${job.logoGradient} flex items-center justify-center text-white font-bold shrink-0 shadow-lg shadow-black/20">${job.logo}</div>
                                <div class="flex-1 min-w-0 pt-0.5">
                                    <div class="flex items-center gap-2 mb-1">
                                        <h4 class="text-sm font-semibold text-white group-hover:text-fuchsia-300 transition-colors truncate">${job.title}</h4>
                                        ${i === 0 ? '<span class="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 font-semibold shrink-0">Top Pick</span>' : ''}
                                    </div>
                                    <p class="text-xs text-slate-400">${job.company} • ${job.type}</p>
                                    <p class="text-[11px] text-slate-500 mt-1">2h ago • 14 applicants</p>
                                </div>
                            </div>

                            <p class="jobsforyou-desc text-xs text-slate-300 mb-3 leading-relaxed" title="${job.description}">${job.description}</p>

                            <div class="flex flex-wrap gap-1.5 mb-3">
                                ${job.tags.map(tag => `<span class="text-[10px] text-slate-400 bg-slate-700/70 border border-white/5 px-2 py-0.5 rounded-md">${tag}</span>`).join('')}
                            </div>

                            <div class="mb-3">
                                <div class="flex items-center justify-between text-[10px] mb-1">
                                    <span class="text-slate-500">Match</span>
                                    <span class="text-slate-300">${95 - i * 5}%</span>
                                </div>
                                <div class="h-1.5 rounded-full bg-white/5 overflow-hidden">
                                    <div class="h-full bg-gradient-to-r from-fuchsia-500 to-cyan-400" style="width:${95 - i * 5}%"></div>
                                </div>
                            </div>

                            <div class="flex items-center justify-between gap-3">
                                <div>
                                    <span class="text-[10px] text-slate-500 block">Compensation</span>
                                    <span class="text-sm font-bold ${job.budgetType === 'green' ? 'text-green-400' : 'text-slate-200'}">${job.budget}</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <button onclick="event.stopPropagation(); showToast('Saved job', 'bookmark')" class="px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-xs font-semibold text-slate-200 hover:bg-white/10">Save</button>
                                    <button onclick="event.stopPropagation(); quickApply('${job.id}')" class="px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white text-xs font-bold hover:from-fuchsia-400 hover:to-cyan-400 shadow-lg shadow-fuchsia-900/20">
                                        Quick Apply
                                    </button>
                                </div>
                            </div>
                        </article>
                    `).join('')}
                </div>

                <div class="rounded-[1.1rem] border border-dashed border-white/15 p-4 bg-slate-900/40">
                    <div class="flex items-center justify-between gap-3">
                        <div>
                            <p class="text-xs font-semibold text-white">Want better matches?</p>
                            <p class="text-[11px] text-slate-400 mt-1">Update profile to improve ranking...</p>
                        </div>
                        <button onclick="closeJobSheet(); switchMainView('profile')" class="px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-xs font-semibold text-slate-200 hover:bg-white/10 shrink-0">Update Profile</button>
                    </div>
                </div>
            </div>

            <div class="p-4 border-t border-white/10 bg-slate-950/80 backdrop-blur-md">
                <div class="flex gap-2">
                    <button onclick="closeJobSheet(); switchMainView('jobs')" class="flex-1 py-3 border border-white/10 text-slate-300 text-sm font-medium rounded-xl hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                        <span class="iconify w-4 h-4" data-icon="lucide:briefcase"></span>
                        Browse All Jobs
                    </button>
                    <button onclick="showToast('Notifications enabled for new matches', 'bell-ring')" class="px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 text-sm font-bold hover:from-cyan-400 hover:to-cyan-300 transition-colors flex items-center justify-center gap-2">
                        <span class="iconify w-4 h-4" data-icon="lucide:bell-ring"></span>
                        Alerts
                    </button>
                </div>
            </div>
        </div>
    `;

    applyImageFallbacks(sheet);
    openJobSheetLayer({ variant: 'jobsForYou', heightRatio: currentDevice === 'desktop' ? 0.82 : 0.88 });
}

// ===== MESSAGE DETAIL SHEET =====
const mockConversation = [
    { id: 1, sender: 'them', text: 'Hey! Love your work on the Vogue shoot', time: '10:30 AM' },
    { id: 2, sender: 'me', text: 'Thank you so much! It was such a fun project', time: '10:32 AM' },
    { id: 3, sender: 'them', text: 'Are you available for a shoot next Tuesday? We\'re doing a beauty editorial for our new collection', time: '10:35 AM' },
    { id: 4, sender: 'them', text: 'Budget is $1.2k for the day, travel covered', time: '10:36 AM' },
    { id: 5, sender: 'me', text: 'That sounds amazing! Let me check my calendar', time: '10:40 AM' },
    { id: 6, sender: 'them', text: 'Perfect, no rush. Here\'s the moodboard for reference', time: '10:42 AM' }
];

function openMessageSheet(messageId) {
    const sheet = document.getElementById('message-sheet');
    const backdrop = document.getElementById('message-backdrop');
    
    const msg = mockMessages.find(m => m.id === messageId) || mockMessages[0];
    
    sheet.innerHTML = `
        <div class="flex items-center justify-between p-4 border-b border-white/10">
            <button onclick="closeMessageSheet()" class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400">
                <span class="iconify w-5 h-5" data-icon="lucide:arrow-left"></span>
            </button>
            <div class="flex items-center gap-3">
                <img src="${msg.avatar}" class="w-9 h-9 rounded-full object-cover">
                <div>
                    <h3 class="text-sm font-semibold text-white">${msg.name}</h3>
                    <span class="text-[10px] text-green-400 flex items-center gap-1">
                        <span class="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                        Active now
                    </span>
                </div>
            </div>
            <button class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400">
                <span class="iconify w-5 h-5" data-icon="lucide:more-vertical"></span>
            </button>
        </div>
        
        <div class="flex-1 overflow-y-auto hide-scrollbar p-4 space-y-3">
            ${mockConversation.map(m => `
                <div class="flex ${m.sender === 'me' ? 'justify-end' : 'justify-start'}">
                    <div class="max-w-[80%] ${m.sender === 'me' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-slate-200'} rounded-2xl ${m.sender === 'me' ? 'rounded-br-sm' : 'rounded-bl-sm'} px-4 py-2.5">
                        <p class="text-sm leading-relaxed">${m.text}</p>
                        <span class="text-[10px] ${m.sender === 'me' ? 'text-cyan-200' : 'text-slate-500'} mt-1 block text-right">${m.time}</span>
                    </div>
                </div>
            `).join('')}
            
            <!-- Moodboard attachment -->
            <div class="flex justify-start">
                <div class="max-w-[80%] bg-slate-800 rounded-2xl rounded-bl-sm overflow-hidden">
                    <img src="${IMAGES.mua4}" class="w-full h-32 object-cover">
                    <div class="px-4 py-2">
                        <p class="text-xs text-slate-400">moodboard_beauty_ss24.pdf</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="p-4 border-t border-white/10 bg-slate-950/50">
            <div class="flex items-center gap-3">
                <button class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400">
                    <span class="iconify w-5 h-5" data-icon="lucide:image"></span>
                </button>
                <div class="flex-1 relative">
                    <input type="text" placeholder="Type a message..." class="w-full bg-slate-800 border border-white/10 rounded-full py-2.5 px-4 pr-12 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50">
                    <button onclick="sendMessage()" class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-cyan-500 hover:bg-cyan-400 flex items-center justify-center text-white transition-colors">
                        <span class="iconify w-4 h-4" data-icon="lucide:send"></span>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    sheet.classList.remove('translate-y-full');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
}

function closeMessageSheet() {
    const sheet = document.getElementById('message-sheet');
    const backdrop = document.getElementById('message-backdrop');
    sheet.classList.add('translate-y-full');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
}

function sendMessage() {
    showToast('Message sent!', 'check-circle');
}

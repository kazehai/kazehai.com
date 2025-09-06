// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//homepage urls for the webring index
var sites = [
'https://kazehai.com',
'https://rombuffer.online/',
'https://nadianova.neocities.org',
'https://porksbun.neocities.org',
'https://frgmnt.neocities.org/',
'https://ashenlotus.neocities.org/',
'https://pukebucket.neocities.org',
'https://joycestick.moe/',
'https://intothesinx.neocities.org/',
'https://pltn.neocities.org/',
'https://ppilotco.faith/',
'https://mimidoshima.neocities.org/',
'https://tangledvirus.bearblog.dev/',
'https://melonkid.neocities.org/',
'https://bigbadoneechan.neocities.org/',
'https://imcoffeecats.neocities.org/home',
'https://kyou.systems/',
'https://hamaonoverdrive.online/',
'https://snekremiliaketter.nekoweb.org/',
'https://ilu-beato.neocities.org/',
'https://fawxplus.neocities.org/',
'https://aokoro.neocities.org/',
'https://cutwithsalt.neocities.org/',
'https://slitherbop.neocities.org/',
'https://23noko.neocities.org/',
'https://solflo.neocities.org/',
'https://frogfriends.neocities.org/',
'https://games.birdwrongs.sh/',
'https://howling-angel-games.com/',
'https://azalin.nekoweb.org',
'https://www.lexie.land',
'https://kirinkoumori.neocities.org/',
'https://hund666.neocities.org/',
'https://telltaletypist.neocities.org/',
//'https://ruemilley.neocities.org/',
'https://cowboy-starshine.neocities.org/',
'https://ophanimkei.com/'
];

//page containing widget for the random and directional buttons
var webringlocs = [
'https://kazehai.com/else/links',
'https://rombuffer.online/games',
'https://nadianova.neocities.org/snowromancy',
'https://porksbun.neocities.org/games',
'https://frgmnt.neocities.org/links',
'https://ashenlotus.neocities.org/',
'https://pukebucket.neocities.org',
'https://joycestick.moe/',
'https://intothesinx.neocities.org/',
'https://pltn.neocities.org/',
'https://ppilotco.faith/',
'https://mimidoshima.neocities.org/',
'https://tangledvirus.bearblog.dev/about',
'https://melonkid.neocities.org/',
'https://bigbadoneechan.neocities.org/',
'https://imcoffeecats.neocities.org/home',
'https://kyou.systems/external-links/',
'https://hamaonoverdrive.online/',
'https://snekremiliaketter.nekoweb.org/index.html',
'https://ilu-beato.neocities.org/',
'https://fawxplus.neocities.org/games/piersbays',
'https://aokoro.neocities.org/',
'https://cutwithsalt.neocities.org/',
'https://slitherbop.neocities.org/rainjoke',
'https://23noko.neocities.org/nmih',
'https://solflo.neocities.org/works/egg-tooth/',
'https://frogfriends.neocities.org/garbage_doll',
'https://games.birdwrongs.sh/',
'https://howling-angel-games.com/',
'https://azalin.nekoweb.org/dipara',
'https://www.lexie.land/dist/index.html',
'https://kirinkoumori.neocities.org/project_pages/ph',
'https://hund666.neocities.org/',
'https://telltaletypist.neocities.org/',
//'https://ruemilley.neocities.org/',
'https://cowboy-starshine.neocities.org/',
'https://ophanimkei.com/neighborhood'
]

//the name of the ring
var ringName = 'Toxic Yuri VN Jam';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'tyvnjam';

//should the widget include a link to an index page?
var useIndex = true;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://www.kazehai.com/else/tyvnjam.html';

//should the widget include a random button?
var useRandom = true;

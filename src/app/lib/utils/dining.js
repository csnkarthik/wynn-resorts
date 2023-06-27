import { deflate } from "zlib"
import { type } from "os";
const dininglist = [
  {
    category_title: 'Fine Dining',
    restaurants: [
      {
        dine_id: 'casaplaya',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgIDk-6r93AkM',
        title: 'Casa Playa',
        description: 'Inspired by the fresh coastal cuisine found in hidden enclaves along the shores of Mexico, Casa Playa marries the flavors of the land and the sea in a delectable tapestry of shared plates.',
        short_description: 'Authentic Mexican coastal cuisine',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Fine%20Dining/CasaPlaya/1-Casa%20Playa-Entry-Kraft-RGB%20-%20Copy-828x466',
        mobile_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Fine%20Dining/CasaPlaya/2_828x466_Casa%20Playa-Banquette%20LIFESTYLE-Myriam%20Santos-RGB'
      },
      {
        dine_id: '',
        account_id: "ddgadffasdvsdageasdfgdplodsfkpBfVmVudWUYgIDk-6r93AkM",
        title: 'Cipriani',
        description: 'The Italian icon brings its carpaccio alla Cipriani, baked tagliolini, vanilla meringue, and world-famous Bellini to Wynn Plaza Shops.\r\n',
        short_description: 'The icon’s first West Coast location',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Dining%20Teaser%20Cards/1024-WLV-Cipriani%203',
        mobile_hero_image: ''
      },
      {
        dine_id: 'delilahwlv',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgIDY7IyztwgM',
        title: 'Delilah',
        description: 'An homage to the glamorous age of Hollywood and Las Vegas, Delilah is a modern-day supper club with a vintage aesthetic.',
        short_description: 'Entertainment Lounge',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Fine%20Dining/Delilah/1_Wynn_Delilah_Ceiling%20Sweep_Robert%20Miller-828x466',
        mobile_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Fine%20Dining/Delilah/1_Wynn_Delilah_Ceiling%20Sweep_Robert%20Miller-828x466'
      },
      {
        dine_id: 'lakesidewlv',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgICYyYT8tggM',
        title: 'Lakeside',
        description: 'Seafood-focused with stunning views of the Lake of Dreams, Lakeside features sustainably sourced, line-caught fish from around the world.',
        short_description: 'Sustainably sourced, line-caught fish',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Dining%20Teaser%20Cards/312_Lakeside_Exterior_Barbara_Kraft',
        mobile_hero_image: ''
      },
      {
        dine_id: 'mizumiwlv',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgICY4ZSw3AkM',
        title: 'Mizumi',
        description: 'Set amid exotic gardens and waterfalls, Mizumi serves pristine sushi and sashimi, robatayaki bar specialties and modern Japanese cuisine.',
        short_description: 'Idyllic gardens, pristine Japanese fare',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Fine%20Dining/Mizumi/Mizumi-Outdoor_Dining-828x466',
        mobile_hero_image: ''
      },
      {
        dine_id: 'mizumiteppanwlv',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgIDYjqOWnQkM',
        title: 'Mizumi Teppanyaki',
        description: "Dinner is theatre at Mizumi's teppanyaki room, where chefs dazzle with their tableside cooking flair. ",
        short_description: 'Idyllic gardens, pristine Japanese fare',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Fine%20Dining/MizumiTeppanyaki-828',
        mobile_hero_image: ''
      },
      {
        dine_id: 'sinatrawlv',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgICYns2qoAgM',
        title: 'Sinatra',
        description: 'From osso buco to spaghetti and clams, our tribute to Ol’ Blue Eyes serves modern twists on the classic Italian cooking Frank loved.',
        short_description: 'Italian favorites of Ol’ Blue Eyes',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Fine%20Dining/Sinatra/Sinatra-Outdoor_Dining-828x466',
        mobile_hero_image: ''
      },
      {
        dine_id: 'swsteakhousewlv',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgICYvrDhoAkM',
        title: 'SW Steakhouse',
        description: 'Exceptional steaks, including certified Kobe, are served in a refined dining room and patio with prime views of Wynn’s Lake of Dreams.',
        short_description: 'Certified Kobe with a prime view',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Dining%20Teaser%20Cards/390_SW_Steakhouse_Patio_Barbara_Kraft',
        mobile_hero_image: ''
      },
      {
        dine_id: 'tableauwlv',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgICYvv_84QoM',
        title: 'Tableau',
        description: 'This chic indoor and outdoor restaurant with pool views serves breakfast, lunch and brunch adjacent to Wynn’s Tower Suites lobby.',
        short_description: 'Chic indoor/outdoor dining, pool views',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Fine%20Dining/Tableau/Tableau-Outdoor_Dining-828x466',
        mobile_hero_image: ''
      },
      {
        dine_id: 'wingleiwlv',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgICYgbuBjAsM',
        title: 'Wing Lei',
        description: 'The first Chinese restaurant in the U.S. to earn a Michelin star serves Cantonese, Shanghai and Szechuan dishes in a dramatic room.',
        short_description: 'Michelin-starred Chinese specialties',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Dining%20Teaser%20Cards/363_Wing_Lei_Dining_Room_Barbara_Kraft',
        mobile_hero_image: ''
      }
    ]
  },
  {
    category_title: 'Casual Dining',
    restaurants: [
      {
        dine_id: 'allegrowlv',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgICY_ti-1wgM',
        title: 'Allegro',
        description: 'Pizzas fired in the wood-burning oven, handmade pastas and classics like lasagna Napoletana are the draws in this relaxed setting.',
        short_description: 'Relaxed, central Neapolitan spot',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Dining%20Teaser%20Cards/1057_Allegro_Exterior_Barbara_Kraft',
        mobile_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Dining%20Teaser%20Cards/1057_Allegro_Exterior_Barbara_Kraft'
      },
      {
        dine_id: 'buffetwlv',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgICkj565gwgM',
        title: 'The Buffet at Wynn Las Vegas',
        description: 'Featuring a stunning redesigned interior and expansive all-you-can-eat menu, The Buffet at Wynn Las Vegas is back and better than ever.',
        short_description: 'A culinary extravagance in a sunlit atrium',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Casual%20Dining/The%20Buffet/1_Wynn_TheBuffet_Atrium_Douglas%20Friedman-828x466',
        mobile_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Casual%20Dining/The%20Buffet/1_Wynn_TheBuffet_Atrium_Douglas%20Friedman-828x466'
      },
      {
        dine_id: '',
        account_id: "ahNzfnNldmVugbdasfsafsdafeawhfraWdodGxvb3BfVmVudWUYgIDk-6r93AkM",
        title: 'Caffè Al Teatro',
        description: 'An ornate European cafe featuring 24-hour express gourmet dining—breakfast selections, all-day savory fare and late-night sweet treats headline alongside fresh roasted coffees, local beers, and wellness beverages',
        short_description: 'Grab-and-go breakfast favorites',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Casual%20Dining/Caffe%20Al%20Teatro/caffe-al-teatro-Pastry-Display-Case-Miller-828x466',
        mobile_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Casual%20Dining/Caffe%20Al%20Teatro/eclairs-at-caffe-al-teatro-las-vegas'
      },
      {
        dine_id: 'charlieswlv',
        account_id: "ahNzfnNldmVucm9vbXMtc2VjdXJlchwLdfasdfasdfsdfVudWUYgIDk-6r93AkM",
        title: 'Charlie’s Bar + Grill',
        description: 'Find crowd-pleasing American fare like burgers, sandwiches and shareable appetizers in the heart of Wynn’s Race & Sports Book.  ',
        short_description: 'American classics in the Sports Book',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Casual%20Dining/Charlies%20Bar%20Grill/Charlies-Image3-828x466',
        mobile_hero_image: ''
      },
      {
        dine_id: '',
        account_id: "ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVuduuitydsdsfbvf",
        title: 'Espresso',
        description: 'Artisan market meets casual quick-serve café. Espresso serves dine-in and take-out bites near hotel registration at Encore.',
        short_description: 'Quick-serve artisan market',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Dining%20Teaser%20Cards/1060_Goodies_Exterior_Barbara_Kraft',
        mobile_hero_image: ''
      },
      {
        dine_id: 'jardinwlv',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgICY9cWB5woM',
        title: 'Jardin',
        description: 'Farm-fresh dishes, from virtuous to indulgent, are served in an airy conservatory setting.',
        short_description: 'Farm-fresh fare, conservatory setting',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Casual%20Dining/Jardin/Jardin-Interior%20WEB-Barbara%20Kraft_02-24_828x466',
        mobile_hero_image: ''
      },
      {
        dine_id: 'lacavewlv',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgICY3tu6rAgM',
        title: 'La Cave',
        description: 'This intimate indoor/outdoor space with a stunning wine list and artisanal draft beers serves small plates perfect for sharing.',
        short_description: 'Small plates, stunning wine offerings',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Casual%20Dining/La%20Cave/La-Cave-Patio-1-at-Wynn-Las-Vegas_828x466',
        mobile_hero_image: ''
      },
      {
        dine_id: '',
        account_id: "ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgIDk-ykdjfkjdfkne",
        title: "Min's Test Kitchen",
        description: 'Take a creative culinary journey with Michelin-recognized Chef Min Kim. This limited-time test kitchen lets diners experience Chef Kim’s diverse culinary background through authentic Asian cuisine, fashion, art and music.',
        short_description: 'Authentic Asian Cuisine',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Casual%20Dining/Mins%20Test%20Kitchen/Cod-Karaage-at-mins-test-kitchen-las-vegas-828x466',
        mobile_hero_image: ''
      },
      {
        dine_id: 'red8wlv',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgICYmfWmnQsM',
        title: 'Red 8',
        description: 'Cantonese noodle dishes, Hong Kong-style barbecue and specialties from Thailand, Vietnam and Korea are served in this dynamic room.',
        short_description: 'Diverse specialties from across Asia',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Dining%20Teaser%20Cards/486_Red_8_Interior_Barbara_Kraft',
        mobile_hero_image: ''
      },
      {
        dine_id: 'terracepointewlv',
        account_id: "ahNzfasdfasdfhbfavcbbbbbbbbbbbbbbbyfdgsasfaWdodGxvb3BfVmVudWUYgIDk-6r93AkM",
        title: 'Terrace Pointe Café',
        description: 'This airy indoor/outdoor restaurant serves breakfast, lunch and brunch with views of Wynn’s manicured gardens and sparkling pool.',
        short_description: 'Indoor/outdoor spot for every meal',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Dining%20Teaser%20Cards/416_Terrace_Pointe_Cafe_Patio_Wynn_Mag_Barbara_Kraft',
        mobile_hero_image: ''
      },
      {
        dine_id: '',
        account_id: "ahNzfnNldmVucm9vbXMasdfasdhrrrrrasc463452349uaWdodGxvb3BfVmVudWUYgIDk-6r93AkM",
        title: 'Urth Caffé',
        description: 'Organic, heirloom coffee and healthy cuisine have a devoted following, now in its first U.S. location outside Southern California.',
        short_description: 'A healthy SoCal heirloom coffee icon',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Shops/Teaser%20Cards/1026-WLV-Urth%20Caffe%201',
        mobile_hero_image: ''
      },
      {
        dine_id: 'wazuzuwlv',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgICY8f2_uQoM',
        title: 'Wazuzu',
        description: 'Inspired by Chinese, Japanese and Thai cuisine, this Pan-Asian eatery serves lunch, dinner and late-night choices adjacent to Encore’s casino.',
        short_description: 'Pan-Asian dining near Encore’s casino',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Dining%20Teaser%20Cards/333_Wazuzu_Interior_Barbara_Kraft',
        mobile_hero_image: ''
      }
    ]
  },
  {
    category_title: 'Bars & Lounges',
    restaurants: [
      {
        dine_id: '',
        account_id: "ahNzfnNldmVucm9adsfasdfewrsdac655666wfcvvvb5455UYgIDk-6r93AkM",
        title: 'Aft Cocktail Deck',
        description: 'Set out on a cocktail journey on the Lake of Dreams. Enjoy cocktails on the deck late into the night. ',
        short_description: 'Set out on a cocktail journey on the Lake of Dreams. Enjoy cocktails on the deck late into the night. ',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Bars%20And%20Lounges/1_Wynn_AFT%20Day_Hero_Barbara%20Kraft-828x466',
        mobile_hero_image: ''
      },
      {
        dine_id: '',
        account_id: "ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3sadfsdnnnnfasfdgerr3393AkM",
        title: 'Bar Parasol',
        description: 'An oasis of Champagnes, caviar-centric small bites and views galore.',
        short_description: 'An oasis of Champagnes, caviar-centric small bites and views galore.',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Bars%20And%20Lounges/1_Bar%20Parasol_828x466',
        mobile_hero_image: ''
      },
      {
        dine_id: 'casaplaya',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgIDY7IyztwgM',
        title: 'The Lounge at Casa Playa',
        description: 'New adventures await the bold at this vibrant lounge dedicated to the love of agave spirits.',
        short_description: 'Vibrant lounge dedicated to the love of agave spirits',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Fine%20Dining/CasaPlaya/casaplaya-mezcal-828x466',
        mobile_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Fine%20Dining/CasaPlaya/casaplaya-mezcal-828x466'
      },
      {
        dine_id: '',
        account_id: 'ahNzfnNldmVfdasdfg9uaWdodGxvb3BfVmVudWUYgIDY7IyztwgM',
        title: 'Eastside Lounge',
        description: "This intimate ultra-lounge overlooking Encore's pools is a swanky spot for hand-crafted cocktails. ",
        short_description: 'Handcrafted cocktails, a swanky vibe',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Dining%20Teaser%20Cards/426_Eastside_Lounge_Barbara_Kraft',
        mobile_hero_image: ''
      },
      {
        dine_id: '',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWYgIDY7IyztwgM',
        title: 'Little Bubble Bar at Delilah',
        description: 'A whimsical nod to the golden age of Hollywood, Delilah’s Little Bubble Bar and lounge is the ideal spot for retro-inspired craft cocktails and canapes.',
        short_description: 'Retro-inspired craft cocktails and canapes.',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Bars%20And%20Lounges/LittleBubbleBar-828x466',
        mobile_hero_image: ''
      },
      {
        dine_id: '',
        account_id: 'Vucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgIDY7IyztwgM',
        title: 'Lobby Bar',
        description: 'Start (or end) the evening with small plates, wine and spirits in this cleverly positioned lounge near Encore’s main entrance.',
        short_description: 'Small plates, spirits in Encore lobby ',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Dining%20Teaser%20Cards/427_Lobby_Bar_Cafe_Barbara_Kraft',
        mobile_hero_image: ''
      },
      {
        dine_id: '',
        account_id: 'ahNzfnNldmVucm9vbXMtcddddd4441232saszCBfVmVudWUYgIDY7IyztwgM',
        title: 'Overlook Lounge, Aperitifs & Spirits',
        description: 'A newly designed cocktail destination with a distinctive personality, Overlook Lounge is an opulent and cozy haven for aperitifs, cocktails and spirits.',
        short_description: 'Cozy haven for aperitifs, cocktails and spirits',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Bars%20And%20Lounges/OverlookCafe1-828x466',
        mobile_hero_image: ''
      },
      {
        dine_id: '',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXdfsdfsdfdsf545d5f41c1sd5s5dmVudWUYgIDY7IyztwgM',
        title: 'Tower Suite Bar',
        description: 'Elegant and low-key, Wynn’s Tower Suites lobby is a relaxing meeting place for cocktails, savory small plates and specialties after a day of meetings or fun.',
        short_description: 'Serene, elegant lobby meeting place',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Dining%20Teaser%20Cards/1014_Tower_Suite_Bar_Lounge_View_Barbara_Kraft',
        mobile_hero_image: ''
      }
    ]
  },
  {
    category_title: 'Outdoor Patio Dining',
    restaurants: [
      {
        dine_id: 'jardinwlv',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgICY9cWB5woM',
        title: 'Jardin',
        description: 'Farm-fresh dishes, from virtuous to indulgent, are served in an airy conservatory setting.',
        short_description: 'Farm-fresh fare, conservatory setting',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Casual%20Dining/Jardin/Jardin-Interior%20WEB-Barbara%20Kraft_02-24_828x466',
        mobile_hero_image: ''
      },
      {
        dine_id: 'lakesidewlv',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgICYyYT8tggM',
        title: 'Lakeside',
        description: 'Seafood-focused with stunning views of the Lake of Dreams, Lakeside features sustainably sourced, line-caught fish from around the world.',
        short_description: 'Sustainably sourced, line-caught fish',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Dining%20Teaser%20Cards/312_Lakeside_Exterior_Barbara_Kraft',
        mobile_hero_image: ''
      },
      {
        dine_id: 'mizumiwlv',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgICY4ZSw3AkM',
        title: 'Mizumi',
        description: 'Set amid exotic gardens and waterfalls, Mizumi serves pristine sushi and sashimi, robatayaki bar specialties and modern Japanese cuisine.',
        short_description: 'Idyllic gardens, pristine Japanese fare',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Fine%20Dining/Mizumi/Mizumi-Outdoor_Dining-828x466',
        mobile_hero_image: ''
      },
      {
        dine_id: 'sinatrawlv',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgICYns2qoAgM',
        title: 'Sinatra',
        description: 'From osso buco to spaghetti and clams, our tribute to Ol’ Blue Eyes serves modern twists on the classic Italian cooking Frank loved.',
        short_description: 'Italian favorites of Ol’ Blue Eyes',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Fine%20Dining/Sinatra/Sinatra-Outdoor_Dining-828x466',
        mobile_hero_image: ''
      },
      {
        dine_id: 'swsteakhousewlv',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgICYvrDhoAkM',
        title: 'SW Steakhouse',
        description: 'Exceptional steaks, including certified Kobe, are served in a refined dining room and patio with prime views of Wynn’s Lake of Dreams.',
        short_description: 'Certified Kobe with a prime view',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Dining%20Teaser%20Cards/390_SW_Steakhouse_Patio_Barbara_Kraft',
        mobile_hero_image: ''
      },
      {
        dine_id: 'tableauwlv',
        account_id: 'ahNzfnNldmVucm9vbXMtc2VjdXJlchwLEg9uaWdodGxvb3BfVmVudWUYgICYvv_84QoM',
        title: 'Tableau',
        description: 'This chic indoor and outdoor restaurant with pool views serves breakfast, lunch and brunch adjacent to Wynn’s Tower Suites lobby.',
        short_description: 'Chic indoor/outdoor dining, pool views',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Fine%20Dining/Tableau/Tableau-Outdoor_Dining-828x466',
        mobile_hero_image: ''
      },
      {
        dine_id: 'terracepointewlv',
        account_id: '',
        title: 'Terrace Pointe Café',
        description: 'This airy indoor/outdoor restaurant serves breakfast, lunch and brunch with views of Wynn’s manicured gardens and sparkling pool.',
        short_description: 'Indoor/outdoor spot for every meal',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Dining%20Teaser%20Cards/416_Terrace_Pointe_Cafe_Patio_Wynn_Mag_Barbara_Kraft',
        mobile_hero_image: ''
      }
    ]
  },
  {
    category_title: 'Dining Experiences',
    restaurants: [
      {
        dine_id: undefined,
        account_id: 'ahNzfnNldmVucm9vbXMtc2Vasdfsadfasdf22323574sa4df564sa63BfVmVudWUYgIDY7IyztwgM',
        title: 'Group Dining',
        description: 'The restaurants at Wynn and Encore offer exceptional group and private dining events available by calling our restaurant events team.',
        short_description: 'Call our events team for private dining',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Casual%20Dining/La%20Cave/La-Cave-Patio-1-at-Wynn-Las-Vegas_828x466',
        mobile_hero_image: ''
      },
      {
        dine_id: undefined,
        account_id: 'ahNzfnNldmVucm9vbXMtc2Vjd5555555558dddf8a4sf54sd4sd6f4b3BfVmVudWUYgIDY7IyztwgM',
        title: 'Small Plates, Big Flavors',
        description: 'Choose from a daily menu of savory bites and sweet treats as you enjoy the stunning views and cocktails of Parasol Down.',
        short_description: 'Sweet and savory bites, Parasol Down',
        desktop_hero_image: 'https://prod-sc10-cd.azurewebsites.net/-/media/images/Wynn%20Las%20Vegas/Dining/Dining%20Teaser%20Cards/1012_Parasol_Down_Main_Barbara_Kraft',
        mobile_hero_image: ''
      }
    ]
  }
]
export const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  swipeToSlide: true, // Enable swiping on touch devices  
  touchThreshold: 10, // Adjust touch sensitivity    
  draggable: true, // Enable dragging the carousel    
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)", // Use CSS easing for smoother transitions
  responsive: [
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.5,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

export default dininglist;
import { createStore } from 'vuex'

let cart = window.localStorage.getItem('cart');
let cartCount = window.localStorage.getItem('cartCount');

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'hydrating-mist',
        title: 'Hydrating Mist 75ml',
        add: 'Refreshing Face Mist',
        price: 23.38,
        val: '€',
        quantity: 0,
        final: 0,
        isAdded: false,
        img: require('../assets/products/MistPackshot.jpg'),
        description: `Saltee Hydrating Mist is a refreshing and cooling 
        treat for the face that soothes and rejuvenates the skin. Hyaluronic 
        Acid works to provide intense moisture and Vitamin C will help brighten 
        and rejuvenate. Protects against everyday environmental factors and keeps 
        your skin looking and feeling beautiful. Perfect to use alongside your 
        Saltee suncare. Hand luggage-worthy and the perfect quick spritz to refresh on-the-go.`
      },
      {
        id: 2,
        name: 'daily-protection',
        title: 'Daily Protection Formula 50ml',
        add: 'SPF 50',
        price: 37.41,
        val: '€',
        quantity: 0,
        final: 0,
        isAdded: false,
        img: require('../assets/products/DailyProtection.jpg'),
        description: `Saltee knows only too well the need for multi-tasking products 
        which have become a daily necessity rather than a holiday only purchase. The SPF50 
        Face Daily Protection Formula being one of them. A skin and suncare hybrid that offers 
        UVA, UVB and infra-red radiation protection as well as being a lightweight daily moisturiser.`
      },
      {
        id: 3,
        name: 'active-sun-lotion',
        title: 'Active Sun Lotion 150ml',
        add: 'SPF 30',
        price: 40.91,
        val: '€',
        quantity: 0,
        final: 0,
        isAdded: false,
        img: require('../assets/products/BodySunLotion.jpg'),
        description: `An active lifestyle requires SPF30 Body Active Sun Lotion.  Whether you’re at 
        home or away protect and nourish your skin with our ultra-high UVA and UVB sun care.  Natural 
        essential oils work to soothe and calm tired aching muscles, perfect for any day outside.  
        Includes MelinOil that stimulates your skin’s natural sun defences and prevents photo ageing and 
        helps achieve beautiful glowing skin.`
      },
      {
        id: 4,
        name: 'sun-essentials-after-sun',
        title: 'Sun Essentials Collection',
        add: 'After-sun & SPF30',
        price: 54.18,
        val: '€',
        quantity: 0,
        final: 0,
        isAdded: false,
        img: require('../assets/products/ActiveSunCollection.jpg'),
        description: `No sunny getaway would be complete without the Sea & Sun Essentials Collection. 
        Including our Tan Enhance Formula, a soothing and calming body and face after-sun formula that 
        works to prolong a healthy glow. Plus, our best-selling SPF30 Body Sea & Sun Lotion. Formulated with 
        velvety soft, ultra-high UVA and UVB protection that smells wonderfully like summer holidays.`
      },
      {
        id: 5,
        name: 'sun-heroes-trio-after-sun',
        title: 'Sun Heroes Trio',
        add: 'After-sun, SPF30 & SPF50',
        price: 87.16,
        val: '€',
        quantity: 0,
        final: 0,
        isAdded: false,
        img: require('../assets/products/SunHeroesTrio.jpg'),
        description: `Everything you need for your next sunny getaway.  Including our Tan Enhance Formula 
        200ml, a soothing and calming body and face after-sun formula that works to prolong a healthy glow, 
        our best-selling SPF30 Body Sea & Sun Lotion 150ml. Formulated with velvety soft, ultra-high UVA and 
        UVB protection that smells wonderfully like summer holidays. Plus, SPF50 Face Sea & Sun Formula 50ml 
        which includes Cucumber extract to cool and soothe leaving your skin protected, hydrated and nourished. 
        Our Sun Heroes Trio is presented our beautiful NEW and exclusive Saltee canvas travel bag, perfect to 
        take with you on your next adventure.`
      },
      {
        id: 6,
        name: 'city-serum-SPF50',
        title: 'City Serum',
        add: 'SPF 50',
        price: 44.76,
        val: '€',
        quantity: 0,
        final: 0,
        isAdded: false,
        img: require('../assets/products/CitySerum.jpg'),
        description: `An indulgent SPF 50 serum for daily life unlike any other on the market. The lightest ever 
        SPF 50. A delight to apply with a stunning natural light fragrance with a delicate texture and scent. 
        Perfect as a base under makeup or worn on its own for a sheer fresh-faced radiance, City Serum SPF+ 
        absorbs immediately yet provides SPF 50 UVA and UVB protection. `
      },
      {
        id: 7,
        name: 'weekend-duo-SPF50',
        title: 'Weekend Duo',
        add: 'SPF 50 / 30',
        price: 47.11,
        val: '€',
        quantity: 0,
        final: 0,
        isAdded: false,
        img: require('../assets/products/WeekendDuo.jpg'),
        description: `Our Saltee Weekend Duo has your city break suncare needs covered.
        This collection has a Sea & Sun Formula SPF 50 for your face; alongside Sea & Sun Lotion SPF30 for your body. 
        
        The mini duo comes in a beautiful travel bag. 
        
        Sea & Sun Formula is super light absorbing in seconds making it perfect for those warm summer days and combats 
        hyper-pigmentation. Ultra-hydrating SPF30 Body Sea & Sun Lotion with unique tan accelerator, MelinOil, boosts 
        your natural glow as well as providing ultra-high UVA and UVB protection.`
      },
      {
        id: 8,
        name: 'everyday-essentials-trio',
        title: 'Everyday Essentials Trio',
        add: 'SPF50, Face Mist & Hands',
        price: 56.53,
        val: '€',
        quantity: 0,
        final: 0,
        isAdded: false,
        img: require('../assets/products/EverydayEssentialsTrio.jpg'),
        description: `Our NEW Everyday Essentials Trio includes best-selling SPF50 Face Daily Protection Formula, 
        ultra-high UVA and UVB protection light enough for daily wear and strong enough to protect in all weather, 
        Saltee hands, sanitising hand gel which is infused with 70% alcohol, to ensure refreshing luxurious protection 
        to take with you wherever you go.  Plus, Hydrating Mist with Hyaluronic Acid that works to provide intense 
        moisture and Vitamin C that will help brighten and rejuvenate.  The Everyday Essentials Trio is presented in our 
        beautiful NEW, exclusive Saltee canvas travel bag, perfect for your daily skincare products.`
      },
      {
        id: 9,
        name: 'face&body-daily-sun-collection',
        title: `Face & Body Daily Sun Collection`,
        add: 'SPF50 & SPF30',
        price: 62.42,
        val: '€',
        quantity: 0,
        final: 0,
        isAdded: false,
        img: require('../assets/products/Face&BodyActiveCollection.jpg'),
        description: `Our Saltee face and body collection includes best-selling SPF50 Face Daily Protection Formula, 
        light enough for daily wear when you’re still dreaming of your next trip and strong enough to protect in the hot 
        sun.  Plus, ultra-hydrating SPF30 Body Sea & Sun Lotion with unique tan accelerator, MelinOil, that boost your 
        natural glow and ultra-high UVA and UVB protection.`
      },
      {
        id: 10,
        name: 'sea&sun-lotion',
        title: 'Sea & Sun Lotion 150ml',
        add: 'SPF 30',
        price: 41.22,
        val: '€',
        quantity: 0,
        final: 0,
        isAdded: false,
        img: require('../assets/products/BodySea&SunLotion.jpg'),
        description: `Sun exposure requires an extra dose of moisture.  Saltee’s hydrating SPF30 Body Sea & Sun Lotion 
        is formulated with ultra-high UVA and UVB protection and is specially blended with a unique tan accelerator 
        ingredient, MelinOil, that works to boost your natural glow.  Extra Coconut Oil and Aloe will leave your skin 
        feeling healthy, smooth and quenched. Packaged beautifully in Saltee’s easy-to-use pump style bottle, it wouldn’t 
        be a beach day without it.`
      },
      {
        id: 11,
        name: 'hydrating-daily-face-collection',
        title: 'Hydrating Daily Face Collection',
        add: 'Hydrating Mist & SPF50',
        price: 49.47,
        val: '€',
        quantity: 0,
        final: 0,
        isAdded: false,
        img: require('../assets/products/DailyEssentialsCollection.jpg'),
        description: `Our Saltee hands and Face Daily Protection Collection includes best-selling SPF50 Face Daily 
        Protection Formula, light enough for daily wear when you’re still dreaming of your next trip and strong enough to 
        protect in the hot sun.  Plus, Saltee Hydrating Mist, our refreshing and cooling treat for the face that soothes and 
        rejuvenates the skin. Hyaluronic Acid works to provide intense moisture and Vitamin C will help brighten and rejuvenate.`
      },
      {
        id: 12,
        name: 'sea&sun-formula',
        title: 'Sea & Sun Formula 50ml',
        add: 'SPF 50',
        price: 37.69,
        val: '€',
        quantity: 0,
        final: 0,
        isAdded: false,
        img: require('../assets/products/FaceSea&SunFormula.jpg'),
        description: `SPF50 Face Sea & Sun Formula is ultra-high, naturally derived UVA and UVB protection for the face. Its 
        super light formula absorbs in seconds which makes it perfect for those warm summer days and it helps to combat 
        hyper-pigmentation.  Get your extra dose of hydration from Cucumber extract which cools and soothes the skin leaving your 
        skin protected, hydrated and nourished.`
      },
      {
        id: 13,
        name: 'saltee-hands-30ml',
        title: 'Saltee hands 30ml',
        add: 'Sanitising Hand Gel',
        price: 11.19,
        val: '€',
        quantity: 0,
        final: 0,
        isAdded: false,
        img: require('../assets/products/SalteeHands30mlwbag.jpg'),
        description: `Now you can take Saltee hands with you wherever you go.  Our NEW compact size is the perfect addition to 
        your everyday essentials.  Infused with 70% alcohol it combats 99.9% of bacteria and viruses to ensure refreshing 
        protection that feels luxurious.  Delicately scented with Neroli oil which also works to hydrate, nourish, calm and 
        soothe the senses.`
      },
      {
        id: 14,
        name: 'saltee-hands-50ml',
        title: 'Saltee hands 50ml Duo',
        add: 'Sanitising Hand Gel x 2',
        price: 25.91,
        val: '€',
        quantity: 0,
        final: 0,
        isAdded: false,
        img: require('../assets/products/50mlDuo.jpg'),
        description: `Saltee hands is infused with 70% alcohol, to ensure refreshing luxurious protection to take with you 
        wherever you go.  Delicately scented, it includes a special blend of natural essential oils including Neroli which 
        works to hydrate, nourish and smooth the skin. Double up with our Saltee hands 50ml duo.`
      },
      {
        id: 15,
        name: 'daily-protection-collection',
        title: 'Daily Protection Collection',
        add: 'SPF 50 & Sanitising Gel',
        price: 43.58,
        val: '€',
        quantity: 0,
        final: 0,
        isAdded: false,
        img: require('../assets/products/DailyProtectionCollection.jpg'),
        description: `Our Saltee hands and face Daily Protection Collection includes best-selling SPF50 Face Daily Protection 
        Formula, ultra-high UVA and UVB protection light enough for daily wear and strong enough to protect in all weather. 
        Plus, Saltee hands, infused with 70% alcohol, to ensure refreshing luxurious protection to take with you wherever you go. 
        Delicately scented, it includes a special blend of natural essential oils including Neroli which works to hydrate, 
        nourish and smooth the skin.`
      },
      {
        id: 16,
        name: 'saltee-hands-refill-duo',
        title: 'Saltee hands Refill Duo',
        add: '30ml & 200ml',
        price: 32.98,
        val: '€',
        quantity: 0,
        final: 0,
        isAdded: false,
        img: require('../assets/products/RefillDuo.jpg'),
        description: `Saltee hands is infused with 70% alcohol, to ensure refreshing luxurious protection. Delicately scented, 
        it includes a special blend of natural essential oils including Neroli which works to hydrate, nourish, calm and soothe 
        the senses. Our Saltee hands Refill Duo combines the NEW 30ml compact size, the perfect addition to your handbag.  Plus, 
        the 200ml top-up size which allows you to refill your Saltee hands 30ml bottle.`
      },
      {
        id: 17,
        name: 'saltee-hands-50ml-sanitising-gel',
        title: 'Saltee Hands 50ml',
        add: 'Sanitising Hand Gel',
        price: 15.31,
        val: '€',
        quantity: 0,
        final: 0,
        isAdded: false,
        img: require('../assets/products/SalteeHands50.jpg'),
        description: `Saltee hands is infused with 70% alcohol, it combats 99.9% of bacteria and visruses to ensure refreshing 
        luxurious protection. Delicately scented, it includes a special blend of natural essential oils including Neroli which 
        works to hydrate, nourish, calm and soothe the senses.`
      },
      {
        id: 18,
        name: 'tan-enhance-formula',
        title: 'Tan Enhance Formula 200ml',
        add: 'Prolong your glow',
        price: 30.62,
        val: '€',
        quantity: 0,
        final: 0,
        isAdded: false,
        img: require('../assets/products/TanEnhanceFormula200ml.jpg'),
        description: `Tan Enhance Formula is a soothing and calming body and face after-sun formula that works to prolong a healthy 
        glow. Delicately scented, Shea butter provides powerful hydration whilst MelinOil makes it perfect for those post-sunny days 
        at home or away. Achieve a long-lasting tan and beautiful, healthy bronzed skin.`
      },
      {
        id: 19,
        name: 'saltee-hands-200ml-sanitising-gel',
        title: 'Saltee hands 200ml',
        add: 'Sanitising Hand Gel Refill',
        price: 27.09,
        val: '€',
        quantity: 0,
        final: 0,
        isAdded: false,
        img: require('../assets/products/SalteeHands200ml.jpg'),
        description: `Our 200ml top-up pack, made entirely from recycled plastic, allows you to refill your Saltee hands 30ml or 
        50ml bottles. This sustainable refill turns routine to ritual and you will never run dry. Saltee hands your everyday essential 
        infused with 70% alcohol and protects against 99.9% of bacteria and viruses to ensure luxurious protection and delicately scented 
        with Neroli oil which works to hydrate, nourish, calm and soothe the senses.`
      },
      {
        id: 20,
        name: 'e-gift-card',
        title: 'E-Gift Card',
        add: 'Digital Saltee gift card',
        price: 50,
        val: '€',
        quantity: 0,
        final: 0,
        isAdded: false,
        img: require('../assets/products/E-GiftCard.jpg'),
        description: `Let your loved ones experience luxury SPF.  They can choose their favourite Saltee gift, with a code delivered 
        straight to their inbox.  Whether heading off on a sunny getaway or everyday essentials, you’ll find something for everyone 
        with our Saltee e-gift card.`
      },
    ],
    cart: cart ? JSON.parse(cart) : [],
    cartCount: cartCount ? parseInt(cartCount) : 0,
    articles: [
      {
        id: 1,
        date: '27th June 2022',
        name: 'french-riviera',
        title: 'Awakening on the French Riviera, With Tonya',
        img: require('../assets/pics/french-riviera.jpg'),
        text: `Today’s transformative travel story takes us to the French Riviera with Tonya Kidd-Beggs, Founder of global fragrance brand, Stories Parfum. 

        Expert Travel Tip – If you’re interested in fragrance, I highly recommend visiting the world-renowned  perfumeries in Grasse, France.  Most importantly, be sure to book your visit in advance – especially in the busier spring and summer months!
        
        A story told in scent
        
        The historic town of Grasse, on the French Riviera, is home to the International Fragrance Museum and is known the world over as the heart and soul of the global fragrance industry. Unsurprisingly, Stories Parfum Founder and fragrance guru Tonya Kidds-Beggs has made many a pilgrimage to this captivating part of the world. She told us with rapturous delight of Grasse, an ancient town just off the south coast of France, nestled in the hillside like a rustic, sweetly scented bouquet of orange blossom, jasmine and lavender. 
        
        By far the most momentous of Tonya’s trips to Grasse was the first, made alone, in 2017. Tonya – who has always believed in the transformative magic of scent – made the journey to mark the start of a new chapter in her life, and to learn the art of perfumery. She had no idea that her intended “hobby” would grow to become a life-changing career, nor that she’d come away having relearned her own, long-forgotten, secrets, thanks to the healing power of scent.
        
        “Fragrance has always helped me connect to who I am, and to those who matter most to me. I was never able to meet my maternal Grandmother, but as a child I grew up feeling I knew her through the scent of her favourite perfume.” – Tonya Kidds-Beggs 
        
        Childhood trauma sadly left Tonya with no memories prior to 12 years of age. She found peace through counselling but had still never managed to unlock her forgotten memories – until her time in France, in 2017. Here, she was able to revisit and work through parts of her history she’d long believed to be lost, to complete her healing journey.
        
        Tonya says she felt her new beginning start to take shape the very moment she arrived in Nice. She recalls driving along the Côte d’Azur in a rented Fiat 500 with the top down and the sun smiling gently on her shoulders, sensing truth just over the horizon. Her days were spent at the perfumery in Grasse; her nights, unwinding in the mediaeval clifftop village of Èze, exploring ancient alleys and taking in breathtaking vistas of the Mediterranean coastline. 
        
        Tonya remarked that her trip coincided with Expo Rose – Grasse’s annual celebration of roses. She told us how the heady fragrance of a million delicate blooms cascaded down cobbled paths, through weathered archways, and beneath the sun blanched cafe doors of Grasse. This symphony of musk, myrrh, honey and tea mingled enticingly with the aroma of freshly ground coffee. It’s said there is no scent in the world quite so seductive as the streets of Grasse during Expo Rose.
        
        Tonya credits her transformative trip to the south of France with the rediscovery of lost memories, the formation of new ones, and the start of her new personal story. She says, “I never, ever imagined, or dreamed it was possible to find myself in one place – but I did.”`
      },
      { id: 2,
        date: '22nd March 2022',
        name: 'travel-stories-albany-NY-africa',
        title: 'Saltee’s Transformative Travel Stories: Albany, NY & Central Africa',
        img: require('../assets/pics/ocean-afrika.jpeg'),
        text: `Saltee was born from a shared passion for cultural exchange and life-changing holiday experiences. We call these experiences transformative travel, for their ability to make us see the world – and ourselves – in a different light.

        Saltee team members Eleanor and Sam share their personal experiences, which could not be more different in setting and in nature, they’re equal in poignancy and in the perspective-shifting effect they had on our intrepid travellers.
      

        A Road to Nowhere with Eleanor, in Albany
        
        Our Head of Sales, Eleanor, set off on a post-graduation backpacking trip across the USA. Young, hopeful, and alive with excitement, Eleanor and her partner boarded a train from NYC to journey two hours upstate, to Albany, NY. They disembarked at Albany-Rensselaer, to a relatively familiar setting – an understated four-platform station with a polished-floor lobby, and a smattering of vaguely preoccupied commuters – it could easily have been a station back home.
        
        This false sense of familiarity soon dissipated as they stepped outside. Late afternoon sun poured, in ambient rays, over an alien skyline; somewhere in this foreign concrete jungle were small hotels and hostels a plenty – comfortable safe havens designed for budget-conscious travellers hoping to rest their weary heads for a night, or two.
        
        Eleanor followed an instinctive path toward the inner city. They passed three-story brownstones on quaint tree-lined streets, weaving their way toward the wider brick-paved sidewalks, manicured greenery and monolithic public buildings of downtown Albany – but still, no sign of a place to stay.
        
        The day faded rapidly, as downtown Albany gave way to no man’s land – the outlying districts. Eleanor’s mission to find a place to stay grew ever more pressing, as they trekked, with burdened bodies and blistered feet, down a road to nowhere. 
        
        “It was scary and getting dark and at that point – we started to feel like we just wanted to go home.”
        
        They came upon local eateries – identifiable only by the italicized lettering scrawled across narrow doors (Jack’s Place… TJ’s Diner… Madison’s…), which were cushioned by, and hidden between, vast warehouses, and empty office buildings. Any hope offered by the faint light radiating from within was quickly quashed, as the owners – oblivious to passing strangers – turned signs from “open” to “closed” with a well-practiced flip of the wrist.
        
        Just as the reality of their situation began to hit home, they were approached by a friendly local who directed them to a budget hotel. To this day Eleanor can vividly recall the sense of urgency, followed by exquisite relief. 
        
        “Traveling as a newly independent grad is incredibly transformative as you often come across stressful situations that you have to solve together – it forces you to grow as a person.”
        
        
        An African Adventure with Sam
        
        During a two-month trip across Central and Eastern Africa, Saltee’s Co-Founder Sam and five university friends shared a few intense transformative travel moments – some of which were more welcome than others.
        
        Journeying west across the Democratic Republic of the Congo, Sam’s group embarked on a life-changing expedition to see mountain gorillas in their natural habitat. Their adventure took them deep into the Congo – a dense patchwork of jungle, rivers, mountains and flooded forestry – untamed and impenetrable, yet teeming with life.
        
        Sam recalls witnessing mountain gorillas in the wild as a magical and humbling experience. These reclusive, endangered creatures are still only seen in their natural environment by a handful of people each year. Despite this, it was on the trip back to Kenya that Sam’s most profound moment of transformative travel occurred.
        
        The group hitched a rather bumpy ride to the Ugandan border, on the back of a dented and dust-blasted truck. They had no idea – when setting out – that their return journey would involve an unexpected stop off at a Rwandan refugee camp. 
        
        Sam and his friends – like the rest of the world – were aware of the recent atrocities that had led millions of Rwandans to flee their home country, but this awareness did nothing to prepare them for what they saw. Sam remembers the disillusionment, tension, and pervading sense of unrest in the camp. 
        
        “It really brought home the things most people would only see on TV –  you felt genuinely scared for your own safety.” 
 
        What struck Sam most about the experience was the abrasive contrast between the tranquility of the Congolese mountains, and the war-torn landscape in which they now found themselves. He describes the experience as “incredibly unsettling”, yet says he wouldn’t take a different route home to avoid the camp, if he could turn back the clock.
        
        “It was a rare window into an inaccessible part of the world,” Sam says, “at a time and place of huge historical significance.”`
      },
      { id: 3,
        date: '8th March 2022',
        name: 'travel-stories-croatia-buenos-aires',
        title: 'Saltee’s Transformative Travel Stories: Croatia & Buenos Aires',
        img: require('../assets/pics/croatian-coast.webp'),
        text: `Saltee was born from a shared passion for cultural exchange and life-changing holiday experiences. We call these experiences transformative travel, for their ability to make us see the world – and ourselves – in a different light.

        This journal marks the first in a new series, exploring the Saltee team’s own life-defining holiday experiences. These stories shaped who we are as people, and Saltee’s identity today.
        
        We believe transformative travel stories are meant to be shared. With your partner over dinner and your children at bedtime, with your dearest friends around a campfire, and with the person sitting beside you on your morning commute.
        
        Telling travel stories opens windows to unexplored landscapes and undiscovered cultures, through which others can glimpse something fleeting, and beautiful – an experience, never to be repeated – of somewhere entirely different, in place and time. 
        
       
        Adrift on the Adriatic Sea with Anna
        
        Anna – Saltee’s Brand Director – experienced a defining travel moment during a family trip to Croatia and its surrounding islands, during the aftermath of the Balkan War.
        
        It was on a mild August morning, blissfully adrift in a sailboat on the Adriatic Sea, that Anna found herself reflecting on her journey. Gazing across tranquil waters to the craggy coastline beyond, she realised that being in the midst of such unimaginable serenity – a lifetime away from her fast-paced London life – was a transformative experience in itself.
        
        Croatia – with its sensational coastline, unspoiled nature, and incredible history – is a country that attracts culture-seeking tourists in their many thousands every year. It’s also, as Anna observed, a country with an evocative old-world feel – especially among its coastal communities and island settlements.  
        
        With a long, tragic, history of internal conflict, Croatia is a country held fast in time, and in many ways suppressed by a near constant cycle of destruction and rebirth. Despite, and perhaps because of this, Anna found the country to be astoundingly beautiful.
        
        “It was evident that the small islands and villages were still piecing themselves back together, in the aftermath of war.”
        
        In the eastern towns and cities, stunningly restored Romanesque and Renaissance architecture stood just metres away from bullet-battered ruins. Unblemished, creamy-white rendering was harshly juxtaposed against peeled paint and broken brickwork – a crumbling tapestry of decay.
        
        Touring some of the country’s many islands, Anna explored picturesque fishing villages, lush vineyards, and historic monuments. These thriving, peaceful communities were still peppered with the remnants of traditional stone cottages, which were yet to be rebuilt. Haunting, threadbare structures had been gradually reclaimed by nature, and made beautiful by mossy, tumbling growths spilling from their windowless frames.
        
        Anna’s journey in Croatia was one of stepping into a different time and place, embracing a simpler way of life, and immersing herself in a history so remarkably different to her own that it forever broadened her view of the world. 
        
         
        Beneath the Surface of Buenos Aires with Patrick
        
        Saltee’s Co-Founder Patrick and his partner set off for Buenos Aires, hoping from the outset to subvert the traditional tourist experience. They were hungry for a true taste of the city, eager to explore Argentinian culture, and to discover something new. 
        
        Patrick remembers Buenos Aires as a culturally-colourful melting pot, quite unlike any other place he’s visited. The city was alive, with its own alluring but somewhat duplicitous personality. Laid back, yet bristling with energy, different hour by hour, and from one street corner to the next. 
       
        Buenos Aires – the eighth most densely populated city in the world – is a vibrant and ever-changing metropolis, home to approximately one third of the country’s total population. The inner city is a seductive sprawl of neoclassical, art deco and art nouveau architecture stretching beyond the horizon. It’s Argentina’s beating heart, through which the fiery blood of Latin America flows.
        
        Keen to dive beneath the surface of the city and discover the real Buenos Aires, Patrick and his partner enrolled in a two-week intensive Spanish programme. During this course, they had the privilege of being warmly welcomed and hosted by an Argentinian family – an experience Patrick vividly remembers and holds dear to this day.
        
        “Becoming fully immersed in Argentinian home life was the best way to learn. It was also a great way to connect with our hosts, and with each other. We often found ourselves competing as we learned the language – it was a fantastic shared experience.” 
        
        Having this gateway into Argentinian life made the trip to Buenos Aires so much more than a sightseeing experience. The journey sparked within Patrick a passion for cultural exchange and a love of adventure that endures to this day. He now nurtures this same passion in his children, and relishes seeing transformative travel experiences through their eyes.`
      },
      { id: 4,
        date: '1st December 2021',
        name: 'saltee-city-escapes',
        title: 'Saltee City Escapes to add to your list',
        img: require('../assets/pics/sea-holiday.jpg'),
        text: `We’ve been dreaming about the perfect city getaway.  We want to inspire you to do the same; time to start planning your next dreamy city break.
 
        San Francisco, U.S.A. Laid-back San Fran within the hilly terrain of the west coast.  Golden hour beauty, magical misty mornings, stunning American backdrops. Add so many attractions to have on your list from ‘sail the bay’ under the glow of the Golden Gate Bridge to exploring the city by foot. We’re energised to soak up this unique and sometimes eccentric culture.
        
        Singapore, South East Asia The original melting pot of cultures, known for its glistening futuristic skyscrapers whilst thriving as one of the world’s most sustainable cities. Think roof gardens, treetop bridges and stunning walking trails amidst contemporary art and high-tech architecture.  Perfect for fanatical foodies with a huge choice of fusion restaurants and bars.
        
        Kuala Lumpur, Malaysia Get ready to embrace the colour, culture and sensational scenery of KL.  We were pulled in by the perfect blend of old and new, fabulous shopping, world-class cuisine, vibrant nightlife and the chance to both recharge and explore all at the same time. Many years ago Saltee enjoyed Christmas in Kuala Lumpa and it didn’t disappoint with Cantonese Christmas dinner more than matching any turkey we’ve suffered.
        
        Nice, France Take a trip to the French Riviera and experience bustling bars and restaurants. You’ll have been but time for a refresh based around amazing views and sensational beaches.  The ideal blend of real-city grit, old-world opulence, year-round sunshine, vibrant street life and glamourous beach days.
        Athens, Greece Jammed packed with history and culture, Athens is a Saltee must. This city has something for everyone from the ancient ruins to stylish cafes and restaurants that mix western and eastern cuisine.  With all-year-round sunshine and a plethora of stunning photo-ops, we recommend you add it to your bucket list.Start planning your next escape with us.  There’s nothing better than pencilling in something to look forward to and when the time comes make sure you take us with you! Our Saltee face products offer ultra-high UVA and UVB protection, perfect when you’re exploring new places in the sunshine. All Saltee products are vegan friendly, cruelty free, gluten free, paraben free and dermatologically tested.`
      },
      { id: 5,
        date: '8th November 2021',
        name: 'saltee-winter-hand-care-guide',
        title: 'Saltee Winter Hand Care Guide',
        img: require('../assets/pics/winter.jpg'),
        text: `As the days get a little colder and we start thinking about making changes to our everyday skincare routine, it’s also worthwhile spending some time looking after your hands.  The skin on our hands is a little thinner and therefore prone to problems such as dryness, itchiness, cracking and peeling during winter.  It’s also the first area of skin to show signs of ageing.  
        Here are our recommendations on how you can look after your hands during winter.
        
        
        Use SPF
        
        Give your hands the same treatment as you give your face.  Our hands are often just as exposed as our face during the winter.  Where you can’t wear gloves to protect them make sure you use a protective hand cream.  Moisturise using SPF50 Sea & Sun Formula.  This will provide ultra-high UVA and UVB protection plus, Nordic Pine Bark will help moisturise and reduce hyper-pigmentation.
        
        
        Wear gloves
        
        We recommend investing in a good pair of warm gloves to keep your hands warm and protected in the cold.  This will avoid chapping and cracking which can often be sore.  Treat yourself to a regular hand mask for a boost of intense hydration.
        
        
        Don’t over-wash
        
        We find ourselves washing our hands much more often than we used to.  This can leave hands a little worn at times, especially if you’re using harsh products.  Keep washing your hands but we also recommend, Saltee hands luxury sanitising hand gel.  With ingredients so nourishing, it feels like a moisturisers and smells like your favourite perfume.  Infused with 70% alcohol, it gently but thoroughly combats 99.9% of bacteria and viruses.
        
        Neroli oil will calm and soothe the senses, helping to eliminate the stresses and strains of everyday life.  A must-have for the winter months.
        
        
        Add a dose of moisture
        
        Did you think our Tan Enhance Formula was just for your legs and arms?! This intense moisturiser contains Shea Butter which is one of the best and most effective ingredients to add hydration to your skin.  What’s more it also includes pomegranate extract which gives the skin that extra sun-kissed glow by stimulating outer layer cells.  It will do your hands wonders.
        

        Gentle exfoliation
        
        A gentle exfoliator on dry hands will calm and soothe irritated skin.  It will remove dry skin cells and keep the skin soft and supple.  We recommend twice a week.  Exfoliation also improves the effectiveness of your moisturiser as the dead cells block moisture from the layers of live skin cells that actually need it.  
        
        How do you look after your hands during the cold wintery season?`
      },
      { id: 6,
        date: '3rd October 2021',
        name: 'SPF-all-year-round',
        title: 'The Importance of SPF, all year round',
        img: require('../assets/pics/summer-day-off.jpg'),
        text: `Gone are the days where cloudy skies meant we could leave our SPF behind.  UVB rays might be weaker during the colder months but UVA rays are the ones we need to be aware of.  Your skin is prone to wrinkles, premature ageing and damage just as much now as they were when you were soaking up the sun on holiday during the summer.
        If you’re heading slopeside, stock up on your SPF. Snow actually reflects UVA rays, doubling your exposure! Other common spaces to think of are through your car windows whilst driving and shorter bursts of exposure.  Even popping out for an Autumn stroll.
        
        The best way to shield yourself from these harmful rays is by ensuring your skin is never exposed without daily protection. Saltee products are all broad-spectrum SPF. That means they provide protection against both UVA and UVB rays making them the ideal products for daily use all year round.
        

        Everyday SPF for your face
        
        We recommend SPF50 Face Daily Protection Formula which is our ultra-light everyday suncream. Not only will it provide that essential protection but its suncare as skincare formula means you can double up as your day cream. Packed with Vitamin E, it’ll leave your skin feeling and looking healthy and nourished. A skin and suncare hybrid that offers UVA, UVB and infra-red radiation protection as well as being a lightweight daily moisturiser.
        
        
        Boosting your daily steps?
        
        Try our SPF30 Body Active Sun Lotion. An active lifestyle requires SPF30 Body Active Sun Lotion.  Whether you’re at home or away protect and nourish your skin with our ultra-high UVA and UVB sun care.  Natural essential oils work to soothe and calm tired aching muscles, perfect for any day outside.  Includes MelinOil that stimulates your skin’s natural sun defences and prevents photo ageing and helps achieve beautiful glowing skin.
        
        
        Keep your hands healthy
        
        Give your hands the same treatment as you give your face.  Our hands are the first part of the body to show ageing and with all the extra washing and protection we’ve been using, your hands will be feeling it.  Moisturise using SPF30 Face Sea & Sun Formula.  This will provide ultra-high UVA and UVB protection plus, Nordic Pine Bark will help moisturise and reduce hyper-pigmentation.
        
        This doesn’t mean you need to skip out on your sanitising hand gel though.  Saltee hands pairs perfectly with our Sea & Sun Formula.  A luxury cleansing gel that feels like a moisturiser.  It’s infused with 70% alcohol so it effectively combats 99.9% of viruses and bacteria.  But, like no other, has a scent so divine, it’ll remind you of your favourite perfume.  Neroli oil will calm and soothe the senses, helping to eliminate the stresses and strains of everyday life.
        
        
        Maintain a winter glow
        
        Our Tan Enhance Formula is pretty special.  It contains MelinOil which makes it perfect for those post-sunny days, winter or summer. It helps you to achieve a long-lasting tan and beautiful, healthy bronzed skin by stimulating the natural skin sun defence system in order to better protect cell from UV damage and premature ageing.  This makes it ideal for use all year round as after-care for any sun exposure, come rain or shine.
        
        
        All Saltee products are vegan friendly, cruelty free, gluten free, paraben free and dermatologically tested.`
      },
      { id: 7,
        date: '1st October 2021',
        name: 'bleisure-travel-with-saltee',
        title: 'Bleisure travel with Saltee',
        img: require('../assets/pics/caffee.jpg'),
        text: `Once-upon-a-time BS (before Saltee) life was neatly split – work and holiday. No more. Travel no longer merely means booking a holiday. Seeing the world can be about combining the two – for some lucky ones, extending the work trip to take in a new city or country.
        But the balance isn’t easy and there are some good hacks to ensure you combine ‘travel for work’ with ‘travel for rest’.
        
        Know what’s allowed: First things first, make sure you know your company’s policies on travel. Before you leave town, read through the guidelines so you know what can and cannot be charged back to the company.
        
        Be open about it: Tell your other half that it’s bleisure trip and also share your plan with colleagues and your boss. Don’t let them find out about it from social media first! Full transparency is always the way to go.
        
        Flex accomodation: Late check out and early check-ins can be a saviour. Always contact the hotel or apartment before your trip – as with some warning, most will be pretty flexible. A good combined trip can be as simple as a late lunch and stroll around a new city before catching a later flight home.
        
        Bars and restaurants: be creative and avoid going to the hotel restaurant like every other dull business traveller. Do 5 minutes research before you travel and find that local restaurant that you’ll be Instagram Storying the hell out of.
        
        Sign up for rewards and loyalty programmes: Earning points and miles is a no-brainer. Join loyalty programs for airlines and rental cars so you can start accumulating rewards and perks. If your credit card doesn’t earn you similar travel perks, it might be worth looking into
        
        Pack versatile clothes: The best bleisure outfits are ones that can easily translate from morning to night. They’re work-appropriate for daytime but can also transition into evening with minimal changes. Pack clothes that you can mix and match, as well as ones that are comfortable enough to wear on your free time.
        
        Work time and down time: Social media rules and the rise of content-related professions means that, like it or not, we are almost always “on”. Have your own rules and keep to them – at Saltee we like to signify ‘down-time’ with a sundowner.
        
        Best combined destinations: you rarely get to determine the destination when combining work and holiday but…Saltee co-Founder Patrick’s two favourites have been Cape Town: “the best beaches and bars are just 10 minutes from the city” and Paris: “not original but wherever you’re doing business there’s a really cool area of the city to explore and a brasserie that beats anything back home.”
        
        Don’t forget your Saltee: Daily Protection Formula is the perfect travel pal for a bleisure trip. Small enough for hand luggage, light enough to wear as a primer but SPF 50 to protect however sunny it gets.
        
        
        Whatever your next adventure, be sure to take Saltee with you.  Poolside, seaside, slopeside or city escape, Saltee offers a cleaner life essential ready for any getaway.`
      },
      { id: 8,
        date: '26th May 2021',
        name: 'saltee-guide-to-summer-skincare',
        title: 'The Saltee Guide to Summer Skincare',
        img: require('../assets/pics/SPF-guide.jpg'),
        text: `There’s nothing better than a healthy glow, beaming sun-kissed skin and a good dose of Vitamin D during the warm summer months. It feels good to be out in the sun, whether at home or away so it’s essential to take care of your skin in the warmer months.

        These are our Saltee top tips for staying safe in the sun and looking after your skin in the heat…
        
        Lighten up your skincare routine
       
        When the weathers warmer, let your skin breathe.  There’s nothing better than feeling fresh faced and cool when the sun is shining.  Cut down your skincare routine each morning with just the essentials (don’t forget your SPF!) and swap out some of your usual make-up products for lightweight, BB creams and oil-free primers.
        

        Top up on Vitamin C
        
        A daily dose of Vitamin C does the skin wonders. What’s more is that it helps prevent hyper-pigmentation and helps with collagen production.  Our Saltee Hydrating Mist is packed with Vitamin C, an easy solution for taking care of your skin in the summer.
        
        
        Hydrate throughout the day
        
        Drinking plenty of H2O is key to keeping skin healthy and hydrated when the sun is shining. Avoid dehydration by drinking at least 3 litres of water a day.
        
        
        Don’t forget your body
        
        We always feel better with a healthy glow – Saltee Tan Enhance Formula is our NEW cooling after-sun with a soothing and calming formula that works to prolong a healthy glow. Shea butter provides intense moisture whilst MelinOil makes it perfect for those post-sunny days at home or away. Achieve a long-lasting tan and beautiful, healthy bronzed skin. Our suncare body products also have tan accelerators that will help you achieve a ‘summer sun look’ without compromising your safety. Apart from safe sun exposure (with high SPF sunscreen) we’d also recommend a regular exfoliation to get you skin looking your best.
        
        
        Understand UV rays
        
        UV radiation from the sun is transmitted in three wavelengths – UVA, UVB and UVC. UVC does not penetrate the earth’s atmosphere, so we only really need to protect against UVA and UVB.
        
        UV irradiation in the form of UVA is associated with skin ageing. UVA affects the elastin in the skin and leads to wrinkles and sun-induced skin ageing as well as skin cancer. UVA can penetrate window glass and penetrates the skin more deeply than UVB. UVA protection in a sunscreen helps defend the skin against photo ageing and potentially skin cancer.
        
        UVB is the form of UV irradiation most responsible for sunburn and has strong links to malignant melanoma and basal cell carcinoma risk (types of skin cancer). A sunscreen with a high SPF (Sun Protection Factor) will help block UVB rays and prevent the skin from burning, and by extension damage that can cause skin cancer.
        
        All Saltee products provide broad spectrum ultra-protection against UVA & UVB rays for optimum protection when you’re out enjoying the sun.
        
        
        Know your SPF
        
        This can be confusing, so let us help clear it up! SPF stands for Sun Protection Factor. It is a measure of how well a sunscreen will protect skin from UVB rays, the kind of radiation that causes sunburn, damages skin, and can contribute to skin cancer.
        
        It is important to note that a sunscreen SPF rating is only indicative of its protection from UVB rays. A sunscreen with an SPF of 30 will protect you against 97% of UVB rays and will protect you 30 times longer than if you did not use sunscreen
        
        All Saltee products are a minimum 30 SPF. And our face formulas are SPF 50. We care about ensuring the best sun protection allowing you reconnect with your sun confidence.
        
        
        Re apply when you should
        
        There is no exact rule on how often you should apply sunscreen as it depends on skin type and UV intensity. You should also be aware that what you’re doing that might reduce the effectiveness of the sunscreen you’re using. Broadly, you should reapply at least every 2 hrs and more regularly if you’re getting wet or sweaty.
        
        Saltee Active Sun Lotion (SPF 30) is specifically formulated for those times when you are active – be that a yoga class, run on the beach or swim in the azure sea.
        
        
        Protect your eyes
        
        The sun is damaging to your eyes.  Protect your eyes with sunglasses and a hat to filter the light and help block out damaging rays. These important accessories aren’t just a fashion statement!
        
        Suncare is often made to feel complicated. At Saltee we want to inspire sun confidence. It’s about getting outside and enjoying yourself whilst having peace of mind that your skin is properly protected.  Understand which Saltee product is right for you here.
        
        
        Wherever you’re headed this year, remember to take Saltee with you on your next adventure. With formulations suitable for the whole family, you can protect your skin with ultra-high UVA and UVA suncare for the face and body.
        
        Saltee products are vegan friendly, cruelty free, paraben free, gluten free and oxybenzone free, making them safer for our oceans.  Each product has also been dermatologically tested, so it’s suitable for even the most sensitive skin and our packaging is made from responsibly sourced materials.`
      },
      { id: 9,
        date: '6th April 2021',
        name: 'patrick-california-adventure',
        title: 'Co-Founder Patrick’s Californian Adventure',
        img: require('../assets/pics/pool-shot.webp'),
        text: `Have you ever tried to crowd-source ideas for a holiday? Instagram images inspire us all with incredible scenery and places that we would love to visit. But Saltee co-Founder, Patrick, recently took to Facebook to seek some tips for his planned October holiday to California. As he shares here, what came back more than matched any guidebook.
        Patrick: We have decided a family holiday to California in October is possible and the lift we need right now. Flights booked, I wanted some personalised tips.
        
        I started by asking for beach recommendations that would allow for some adventure but which are also be suitable for all the family. What came back loud and clear was that Monterey is “must visit”. Coca-Cola marketing sage Paul Grace enthused about this beachie destination, Uzma Stamp is adamant that we visit the aquarium whilst Emma Pell has us salivating at the prospect of staying at the Jabber Wock Inn. I couldn’t have asked for much more from the Saltee Tribe – Monterey is now firmly on our itinerary and I will be booking our accommodation at the end of August when likely Covid restrictions are clearer.
        
        Claire Rooks-Byron is adamant that we head to Palm Springs and also then enjoy the drive to San Diego through the mountains. No Californian holiday is complete without a road trip and she has made the case for some serious drivetime gawping at the scenery.
        
        We love wildlife adventures on our family holidays, so Suzy Farthing’s recommendation of a stopover at Morro Bay to spot the wild sea otters has me very interested. Another great insider recommendation – thanks Suzy.
        
        The parks were always going to be on our itinerary but Pete Bowyer made the case for Yosemite. Unmissable says Pete. Especially given it is the shoulder season in early autumn and we should avoid the crowds of high summer – we’re in. The Dome of Yosemite looks a truly Saltee destination.
        
        A good holiday also demands great food and a recommendation from Audley Travel’s Adam Kemp has me intrigued. He championed LA eater https://la.eater.com for finding the hippest new eat out destinations. I’ve already downloaded the app. Thank you Adam.
        
        And a specific recommendation was incoming from Fi Harold for Mels Drive Ins – where she enjoyed the quintessential American drive through meal on her honeymoon. We will definitely be heading that way for a Californian drive-in experience https://melsdrive-in.com
        
        The planning of a holiday is a Saltee obsession. My California break is taking shape and the social chat on Facebook has me excited, even though I’ve not yet left my desk or my Mac.
        
        What’s missing off the Cali list Saltee Tribe? I’m crowd sourcing for more inspiration and there’s definitely a Saltee prize for the best recommendations…`
      }
    ]
  },
  getters: {
  },
  mutations: {
    saveCart(state) {
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
      window.localStorage.setItem('cartCount', state.cartCount);
    },
    addToCart(state, item){
      let found = state.cart.find(product => product.id == item.id);
      if (found) {
        found.quantity++;
        found.final = found.quantity * found.price;
        found.final = Math.round(found.final * 100) / 100
      }
      else {
        state.cart.push(item)
        item.quantity += 1
        item.final += item.price;
      }
      item.isAdded = true;
      setTimeout(() => {
        item.isAdded = false;
      }, 2000);

      state.cartCount++;
      this.commit('saveCart'); 
    },
    removeFromCart(state, item){
      state.cartCount -= item.quantity;
      state.cart.splice(state.cart.indexOf(item), 1)
      
      this.commit('saveCart'); 
    },
    removeItem(state, item) {
      if (item.quantity < 2) {
        item.quantity--;
        state.cart.splice(state.cart.indexOf(item), 1)
      }
      else {
        item.quantity--;
        item.final -= item.price
        item.final = Math.round(item.final * 100) / 100
      } 
      state.cartCount--;
      this.commit('saveCart');
    }
  },
  actions: {

  },
  modules: {
    
  }
});


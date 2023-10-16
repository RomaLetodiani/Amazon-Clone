//banner slider images
import book from '../assets/images/HomeBanner/Books.jpg';
import beauty from '../assets/images/HomeBanner/beauty.jpg';
import gaming from '../assets/images/HomeBanner/Gaming.jpg';
import kitchen from '../assets/images/HomeBanner/kitchen.jpg';
import toys from '../assets/images/HomeBanner/toys.jpg';
import bestSelling from '../assets/images/HomeBanner/bestSelling.jpg';
//ProductsTop single images
import toy from '../assets/images/HomeTop/toys.jpg';
import electronics from '../assets/images/HomeTop/electronics.jpg';
import home_kitchen from '../assets/images/HomeTop/kitchen.jpg';
import beautyPicks from '../assets/images/HomeTop/beauty.jpg';
import tv from '../assets/images/HomeTop/tv.jpg';
import health from '../assets/images/HomeTop/health.jpg';
//gaming images
import headset from '../assets/images/HomeTop/Gaming/headphones.jpg';
import keyboard from '../assets/images/HomeTop/Gaming/Keyboard.jpg';
import mouse from '../assets/images/HomeTop/Gaming/Mouse.jpg';
import chair from '../assets/images/HomeTop/Gaming/Chair.jpg';
//refresh images
import dining from '../assets/images/HomeTop/refresh/1.jpg';
import home from '../assets/images/HomeTop/refresh/2.jpg';
import kit from '../assets/images/HomeTop/refresh/3.jpg';
import HaB from '../assets/images/HomeTop/refresh/4.jpg';
//fashion images
import jeans from '../assets/images/HomeTop/Fashion/1.jpg';
import tops from '../assets/images/HomeTop/Fashion/2.jpg';
import dresses from '../assets/images/HomeTop/Fashion/3.jpg';
import shoes from '../assets/images/HomeTop/Fashion/4.jpg';
//homePageBottom images
import watches from '../assets/images/HomeBottom/watches.jpg';
import girls from '../assets/images/HomeBottom/girls.jpg';
import pets from '../assets/images/HomeBottom/pets.jpg';
import tools from '../assets/images/HomeBottom/tools.jpg';

const slideImages = [book, beauty, gaming, kitchen, toys, bestSelling];

const ProductsTopImages = [
  [
    {
      title: 'Toys Under $30',
      img: toy,
      text: 'Shop Now',
    },
    {
      title: 'Electronics',
      img: electronics,
      text: 'See More',
    },
    {
      title: 'Home stuff Under $30',
      img: home_kitchen,
      text: 'Shop Now',
    },
  ],
  [
    {
      title: 'Gaming accessories',
      images: [
        { name: 'Headsets', img: headset },
        { name: 'Keyboards', img: keyboard },
        { name: 'Computer mice', img: mouse },
        { name: 'Chairs', img: chair },
      ],
      text: 'See More',
    },
    {
      title: 'Shop deals in Fashion',
      images: [
        { name: 'Jeans under $50', img: jeans },
        { name: 'Tops under $25', img: tops },
        { name: 'Dresses under $30', img: dresses },
        { name: 'Shoes under $50', img: shoes },
      ],
      text: 'See All Deals',
    },
    {
      title: 'Refresh your space',
      images: [
        { name: 'Dining', img: dining },
        { name: 'Home', img: home },
        { name: 'Kitchen', img: kit },
        { name: 'Health and Beauty', img: HaB },
      ],
      text: 'See More',
    },
  ],
  [
    {
      title: 'Beauty picks',
      img: beautyPicks,
      text: 'Shop Now',
    },
    {
      title: 'Find your ideal TV',
      img: tv,
      text: 'See More',
    },
    {
      title: 'Health Care',
      img: health,
      text: 'Shop Now',
    },
  ],
];

const ProductsBottomImages = [
  {
    title: 'Smartwatches',
    img: watches,
    text: 'See More',
  },
  {
    title: 'Fashion trends',
    img: girls,
    text: 'Shop Now',
  },
  {
    title: 'Pet supplies',
    img: pets,
    text: 'See More',
  },
  {
    title: 'Deals in Tools',
    img: tools,
    text: 'Shop Now',
  },
];

const HeaderLi = [
  { name: 'All', url: '/' },
  { name: "Today's Deals", url: '/shop' },
  {
    name: 'Customer Service',
    url: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice',
  },
  {
    name: 'Registry',
    url: 'https://www.amazon.com/registries?ref_=nav_cs_registry&ref_=nav_cs_registry',
  },
  {
    name: 'Gift Cards',
    url: 'https://www.amazon.com/gift-cards/b/?ie=UTF8&node=2238192011&ref_=nav_cs_gc',
  },
  {
    name: 'Sell',
    url: 'https://www.amazon.com/b/?_encoding=UTF8&ld=AZUSSOA-sell&node=12766669011&ref_=nav_cs_sell',
  },
];

const FooterTopLis = [
  {
    title: 'Get to Know Us',
    list: [
      'Careers',
      'Blog',
      'About Amazon',
      'Investor Relations',
      'Amazon Devices',
      'Amazon Science',
    ],
  },
  {
    title: 'Make Money with Us',
    list: [
      'Sell products on Amazon',
      'Sell on Amazon Business',
      'Sell apps on Amazon',
      'Become an Affiliate',
      'Advertise Your Products',
      'Self-Publish with Us',
      'Host an Amazon Hub',
      '› See More Make Money with Us',
    ],
  },
  {
    title: 'Amazon Payment Products',
    list: [
      'Amazon Business Card',
      'Shop with Points',
      'Reload Your Balance',
      'Amazon Currency Converter',
    ],
  },
  {
    title: 'Let Us Help You',
    list: [
      'Amazon and COVID-19',
      'Your Account',
      'Your Orders',
      'Shipping Rates & Policies',
      'Returns & Replacements',
      'Manage Your Content and Devices',
      'Amazon Assistant',
      'Help',
    ],
  },
];

const FooterMobileLis = [
  ['Amazon.com', 'Your Lists', 'Find a Gift', 'Browsing History', 'Returns'],
  [
    'Your orders',
    'Gift Cards & Registry',
    'Your Account',
    'Start Selling with Amazon',
    'Your Recalls and Product Safety Alerts',
    'Customer Service',
  ],
];

const FooterBottomLis = [
  [
    {
      title: 'Amazon Music',
      text: 'Streams millions of songs',
    },
    {
      title: 'Amazon Advertising',
      text: 'Find, attract, and engage customers',
    },
    {
      title: '6PM',
      text: 'Score deals on fashion brands',
    },
    {
      title: 'AbeBooks',
      text: 'Books, art & collectibles',
    },
    {
      title: 'ACX',
      text: 'Audiobook Publishing Made Easy',
    },
    {
      title: 'Sell on Amazon',
      text: 'Start a Selling Account',
    },
    {
      title: 'Amazon Business',
      text: 'Everything For Your Business',
    },
  ],
  [
    {
      title: 'Amp',
      text: 'Host your own live radio show with music you love',
    },
    {
      title: 'AmazonGlobal',
      text: 'Ship Orders Internationally',
    },
    {
      title: 'Home Services',
      text: 'Experienced Pros Happiness Guarantee',
    },
    {
      title: 'Amazon Web Services',
      text: 'Scalable Cloud Computing Services',
    },
    {
      title: 'Audible',
      text: 'Listen to Books & Original Audio Performances',
    },
    {
      title: 'Box Office Mojo',
      text: 'Find Movie Box Office Data',
    },
    {
      title: 'Goodreads',
      text: 'Book reviews & recommendations',
    },
  ],
  [
    {
      title: 'IMDb',
      text: 'Movies, TV & Celebrities',
    },
    {
      title: 'IMDbPro',
      text: 'Get Info Entertainment Professionals Need',
    },
    {
      title: 'Kindle Direct Publishing',
      text: 'Indie Digital & Print Publishing Made Easy',
    },
    {
      title: 'Prime Video Direct',
      text: 'Video Distribution Made Easy',
    },
    {
      title: 'Shopbop',
      text: 'Designer Fashion Brands',
    },
    {
      title: 'Woot!',
      text: 'Deals and Shenanigans',
    },
    {
      title: 'Zappos',
      text: 'Shoes & Clothing',
    },
  ],
  [
    {
      title: 'Ring',
      text: 'Smart Home Security Systems',
    },
    {
      title: 'eero WiFi',
      text: 'Stream 4K Video in Every Room',
    },
    {
      title: 'Blink',
      text: 'Smart Security for Every Home',
    },
    {
      title: 'Neighbors App',
      text: 'Real-Time Crime & Safety Alerts',
    },
    {
      title: 'Amazon Subscription Boxes',
      text: 'Top subscription boxes - right to your door',
    },
    {
      title: 'PillPack',
      text: 'Pharmacy Simplified',
    },
  ],
];

export {
  slideImages,
  ProductsTopImages,
  HeaderLi,
  FooterTopLis,
  FooterBottomLis,
  FooterMobileLis,
  ProductsBottomImages,
};

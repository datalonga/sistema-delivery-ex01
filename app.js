/**
 * DATA & CONSTANTS
 */
// Categories removed from UI, but kept here if needed for data structure compatibility or future use
const CATEGORIES = [
    { id: 'all', name: 'All', icon: 'lunch_dining' },
    { id: 'pizza', name: 'Pizza', icon: 'local_pizza' },
    { id: 'burger', name: 'Burgers', icon: 'lunch_dining' },
    { id: 'drinks', name: 'Drinks', icon: 'local_drink' },
    { id: 'dessert', name: 'Desserts', icon: 'icecream' },
    { id: 'sushi', name: 'Sushi', icon: 'set_meal' },
];
  
const ADDONS = [
    { id: 'cheese', name: 'Extra Melted Cheese', price: 1.50 },
    { id: 'bacon', name: 'Smoked Bacon Strips', price: 2.00 },
    { id: 'pickles', name: 'Pickles', price: 0 },
    { id: 'sauce', name: 'Extra Sauce', price: 0.50 },
];
  
const MOCK_PRODUCTS = [
    {
      id: '1',
      name: 'Classic Pepperoni',
      description: 'Extra cheese, tomato base, spicy pepperoni slices on a thin crust.',
      price: 12.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2YN6A2dJGEBpZWfq1oFUhqhe-Z0NaOfGXOH7kRJgrF9-gLbPSi5EMaeKNLrlCRi9KEPm7zMiZGOJpopAh7NYz1r233QrUFKBI2f9BuVkdoGIpFpCEpj4UTkqT5ImmHbJ_fuVczD40KOQSsGpzbH_fzgJzrzHm8diBwaydU_R3e0pzP0FOafVvbDGYnWlZWa4XTxwwIOILAcngCBGnwHEkl10wTbT0eb9bCIuvbtVzw-rTEssb-3Q8TauyRxHdBeevo50A5Nh1AVE',
      category: 'pizza',
      rating: 4.7,
      reviews: 128
    },
    {
      id: '2',
      name: 'Double Stack Burger',
      description: 'Two juicy beef patties with special house sauce, lettuce and cheddar.',
      price: 9.50,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4vlCvaAlK55o-7VtRWZBufXJoPzzU2Kk-zuaIjzusdhBYjyWHVc9nxzuLVGR24mYVxAFEA343Olx2K1oyAIekH7v6dJ6juKeuUWpm9m9XQQxfmCSIYimcPdp9XMU3OPbezXHyHvT3Der5kxWXgjGJuCdrBnYWNablB6SeHiUOYINP5UXwt62pUa4HnZkA-MboV0vtDUIBTLL_cTpGV5BEAfaq2-l8ByxVt-mbZh1NDsuoW9jwN72ytC5JyPD6kb4BH5g4GcnqcYU',
      category: 'burger',
      rating: 4.8,
      reviews: 240
    },
    {
      id: '3',
      name: 'Chocolate Glazed',
      description: 'Soft donut with rich chocolate glaze and sugar sprinkles topping.',
      price: 3.25,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAncVNLhJy9Wngor45Mh0rM9dOsWbjpdAnWcuYrD0hioVuF_qh2Rt_FlUnb8VL9Dn35_d4hfl3s8wOhZmiy1UPqtZ8ZTSKbqG1YiLMgZ42qT798Dt0mU8BY52KU3BoQo3oiqqYatRNwGs324V7Bsci4Mg-3Zx_uj1W69ccTUVPuE1zG-uZ1wXmxUMK9ZCK2m8ETNTYCdMQTm-JdHKWus4rC9Z5uo9pjUPzTy0xG7bOjuFJmjLjNFb9zjGHleVC-Tzy5E1vRXcpp2bk',
      category: 'dessert',
      rating: 4.9,
      reviews: 85
    },
    {
      id: '4',
      name: 'Spicy Arrabiata',
      description: 'Penne pasta tossed in a spicy tomato sauce with chili & fresh basil.',
      price: 11.20,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxzE1IrRB64AQtOjy7ASGFCDjncQbqBJLE64h-2SZyTdiLGILEOjDVtOyWRMZsI-RSb_jHT8saZ6IsZscL3oUvH79yz1B9ZjiBYbDiyV9YPuJlHWGsuLl1_cV-UTuCZN_56BD3VeakcBpwUlliPKtazUjbaJ9ECv-oIeIhGaAshGrflrqlBaHcc7P4Kjj81gj8V-84EAiXA7ydaiv72qkM6Ieqvr8D_-3yMUcnVppKGvLpyRe4a8jfoVj3DWlrkWM3dd7iBRPKlWs',
      category: 'pizza',
      rating: 4.5,
      reviews: 64
    },
    {
      id: '5',
      name: 'Classic Angus Beef',
      description: 'A juicy, flame-grilled Angus beef patty topped with fresh lettuce, vine-ripened tomatoes, red onions.',
      price: 12.50,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCXCDdRgovotl8-rAlCrm3-47zWh_PHbmBvzGP-9hQnWOioOjFPN2GkCsL0pIqmMAhX9mZDCxB9RyaMbbNzlySzNtZDONvwgRPxKyM8xtEcz1ceGxpStn3I9LD6S4qQPUBoFKfcRG8Iq5peojbFzt6hkvkoYZ5HmJhv3ZwoHJhtEB69ujLMHD57GObt__45HlU7IM9mattKcx461RdEFmabL0X5kunx6zTd4v1qRnmc4T69O-VImM3ioc7zjWARPFzSgaqItS-0ro',
      category: 'burger',
      rating: 4.8,
      reviews: 120
    },
    {
      id: '6',
      name: 'Vanilla Milkshake',
      description: 'Creamy vanilla milkshake with whipped cream topping.',
      price: 6.20,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFosDjisIamdfL9Vaj67V6Md3SSg_yQm-y8Z-MZBOunLwFx_toarMzoMuJ5CjZce9ASwXQ1DDlWSaMczr47DO0Kyb8yiYFCOesc2f0asPX6LJoAYbkR0cMDfcPthzN6I10ac0OWlargBKizkjS8kM-Bp1kU_LLF52DxJzVG-Ep0UmvqwIcTEN6yi-R2GqClAaehbLCoK41uxWRn5L6xee8e_K2N-1ANWQF3AJsJcHu53IJfXYfKQQ7kKJRHiiurLox3oTlH9c0BSE',
      category: 'drinks',
      rating: 4.6,
      reviews: 45
    },
    {
      id: '7',
      name: 'French Fries',
      description: 'Crispy golden fries with sea salt.',
      price: 4.90,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiPVXlowj6LHpb29xKMJn3IouBziO5YwM9xKr02HjYqiGnLOemspiwPvf2GdHbWUiZBFPNvRojWKX8QHqG47HJgfhdt5C9ASeMXGcrtQxiA9IK4XOMdjZCzEovjxaasAGj4kSjkzgyK8crmE8_ueMb1WpBIo83dmInB61aaao6fiJ85vQc0oDzHrH3f7kEo5tUgk1hueF4jdKoRBIV06TUaiz3dU8d1dqJL200X3nYHtPlvASCHmvzQdv2a38NbgBGgTtHSFQEUTA',
      category: 'burger',
      rating: 4.7,
      reviews: 210
    }
];

/**
 * STATE MANAGEMENT
 */
const state = {
    view: 'HOME', // 'HOME' | 'CART'
    cart: [],
    activeCategory: 'all', // Kept for logic compatibility, though UI removed
    searchTerm: '',
    // Modal State
    selectedProduct: null,
    modalQuantity: 1,
    modalAddons: [], // IDs of selected addons
    modalNotes: '',
    isModalClosing: false
};

// Derived State Helpers
const getCartCount = () => state.cart.reduce((acc, item) => acc + item.quantity, 0);

const getCartTotal = () => {
    return state.cart.reduce((acc, item) => {
        const addonsCost = item.selectedAddons.reduce((sum, addon) => sum + addon.price, 0);
        return acc + (item.product.price + addonsCost) * item.quantity;
    }, 0);
};

const getFilteredProducts = () => {
    return MOCK_PRODUCTS.filter((product) => {
        // Categories removed from UI, so we ignore category filter or assume 'all'
        // const matchesCategory = state.activeCategory === 'all' || product.category === state.activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(state.searchTerm.toLowerCase());
        return matchesSearch;
    });
};

/**
 * RENDER FUNCTIONS (Components)
 */

function renderHeader() {
    // Removed cart button
    return `
      <header class="px-5 py-3 flex justify-between items-center bg-background-light dark:bg-background-dark sticky top-0 z-10">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
            <span class="material-icons-round text-slate-500">person</span>
          </div>
          <div class="flex flex-col">
            <span class="text-xs text-slate-500 dark:text-slate-400">Deliver to</span>
            <div class="flex items-center text-primary font-semibold text-sm cursor-pointer">
              Home, Maple St 123
              <span class="material-icons-round text-sm ml-0.5">expand_more</span>
            </div>
          </div>
        </div>
      </header>
    `;
}

function renderSearch() {
    return `
      <section class="px-5 py-4">
        <div class="relative flex items-center">
          <span class="material-icons-round absolute left-4 text-slate-400">search</span>
          <input
            id="search-input"
            value="${state.searchTerm}"
            class="w-full h-12 pl-12 pr-14 bg-white dark:bg-slate-800 border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-primary/20 dark:text-white placeholder-slate-400 text-sm"
            placeholder="Search for food, groceries..."
            type="text"
          />
          <button class="absolute right-0 mr-1 w-11 h-11 flex items-center justify-center bg-primary rounded-xl text-white shadow-lg shadow-primary/20">
            <span class="material-icons-round text-xl">tune</span>
          </button>
        </div>
      </section>
    `;
}

// renderCategories Removed

function renderProductList() {
    const products = getFilteredProducts();
    const productsHtml = products.map(product => `
        <div
          data-action="open-product"
          data-id="${product.id}"
          class="bg-white dark:bg-slate-800 rounded-[24px] p-3 shadow-sm border border-slate-100 dark:border-slate-700 relative flex flex-col cursor-pointer hover:shadow-md transition-all active:scale-[0.98]"
        >
          <div class="h-32 w-full rounded-[18px] bg-slate-100 dark:bg-slate-700 overflow-hidden mb-3 pointer-events-none">
            <img
              alt="${product.name}"
              class="w-full h-full object-cover"
              src="${product.image}"
              loading="lazy"
            />
          </div>
          <h3 class="font-semibold text-sm line-clamp-1 text-slate-900 dark:text-white pointer-events-none">
            ${product.name}
          </h3>
          <p class="text-[10px] text-slate-400 mt-0.5 line-clamp-1 pointer-events-none">${product.description}</p>
          <div class="mt-4 flex justify-between items-center pointer-events-none">
            <span class="font-bold text-primary">$${product.price.toFixed(2)}</span>
            <button class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-md shadow-primary/20">
              <span class="material-icons-round text-lg">add</span>
            </button>
          </div>
        </div>
    `).join('');

    return `
      <section class="px-5 pt-4 pb-24">
        <div class="flex justify-between items-center mb-5">
          <h2 class="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Popular Near You</h2>
          <button class="text-primary text-sm font-semibold">View All</button>
        </div>
        <div class="grid grid-cols-2 gap-4">
            ${productsHtml}
        </div>
      </section>
    `;
}

// renderFab Removed

// renderBottomNav Removed

function renderFloatingCart() {
    const cartCount = getCartCount();
    if (cartCount === 0) return '';
    
    const subtotal = getCartTotal();

    return `
      <div class="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-100 dark:border-slate-800 z-20 flex justify-center">
         <div class="w-full max-w-[480px]">
           <button
              data-action="view-cart"
              class="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-red-500/30 hover:bg-red-700 active:scale-[0.98] transition-all flex items-center justify-between px-6"
            >
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center pointer-events-none">
                  <span class="font-bold text-sm pointer-events-none">${cartCount}</span>
                </div>
                <span class="pointer-events-none">View Cart</span>
              </div>
              <span class="pointer-events-none">$${subtotal.toFixed(2)}</span>
            </button>
         </div>
      </div>
    `;
}

function renderHomeScreen() {
    return `
        <div>
            ${renderHeader()}
            ${renderSearch()}
            ${renderProductList()}
            ${renderFloatingCart()}
        </div>
    `;
}

function renderCartScreen() {
    if (state.cart.length === 0) {
        return `
            <div class="min-h-screen bg-background-light dark:bg-background-dark flex flex-col items-center justify-center p-6 text-center">
                <div class="w-20 h-20 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                    <span class="material-icons-round text-4xl text-slate-400">shopping_cart</span>
                </div>
                <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Your Cart is Empty</h2>
                <p class="text-slate-500 mb-8">Looks like you haven't added anything yet.</p>
                <button 
                    data-action="view-home"
                    class="bg-primary text-white px-8 py-3 rounded-2xl font-semibold shadow-lg shadow-primary/20"
                >
                    Start Shopping
                </button>
            </div>
        `;
    }

    const deliveryFee = 2.50;
    const subtotal = getCartTotal();
    const total = subtotal + deliveryFee;

    const cartItemsHtml = state.cart.map(item => {
        const addonsCost = item.selectedAddons.reduce((sum, a) => sum + a.price, 0);
        const itemTotal = (item.product.price + addonsCost) * item.quantity;
        const addonText = item.selectedAddons.length > 0 
            ? item.selectedAddons.map(a => a.name).join(', ') 
            : item.product.description;

        return `
            <div class="bg-white dark:bg-slate-800 p-3 rounded-2xl flex items-center gap-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-slate-700">
              <div class="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700 flex-shrink-0">
                <img alt="${item.product.name}" class="w-full h-full object-cover" src="${item.product.image}" />
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="font-semibold text-slate-800 dark:text-slate-100 truncate">${item.product.name}</h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 mb-2 truncate">
                  ${addonText}
                </p>
                <div class="flex items-center justify-between">
                  <span class="font-bold text-primary">$${itemTotal.toFixed(2)}</span>
                  <div class="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 rounded-lg p-1">
                    <button 
                      data-action="update-quantity"
                      data-id="${item.id}"
                      data-delta="-1"
                      class="w-7 h-7 flex items-center justify-center rounded-md bg-white dark:bg-slate-800 shadow-sm text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                    >
                      <span class="material-icons-round text-sm pointer-events-none">remove</span>
                    </button>
                    <span class="text-sm font-bold w-4 text-center dark:text-white">${item.quantity}</span>
                    <button 
                      data-action="update-quantity"
                      data-id="${item.id}"
                      data-delta="1"
                      class="w-7 h-7 flex items-center justify-center rounded-md bg-primary text-white shadow-sm hover:bg-red-700 transition-colors"
                    >
                      <span class="material-icons-round text-sm pointer-events-none">add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        `;
    }).join('');

    return `
    <div class="min-h-screen bg-background-light dark:bg-background-dark flex flex-col">
      <header class="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-4 flex items-center justify-between">
        <button 
          data-action="view-home"
          class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <span class="material-icons-round text-slate-600 dark:text-slate-400 pointer-events-none">arrow_back_ios_new</span>
        </button>
        <h1 class="text-lg font-semibold dark:text-white">Your Cart</h1>
        <button 
          data-action="clear-cart"
          class="text-sm font-medium text-primary hover:text-red-700 transition-colors"
        >
          Clear
        </button>
      </header>

      <main class="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        <section class="space-y-4">
            ${cartItemsHtml}
        </section>

        <section class="bg-white dark:bg-slate-800 p-5 rounded-2xl space-y-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-slate-700">
          <h2 class="font-bold text-slate-800 dark:text-slate-100 text-lg mb-4">Order Summary</h2>
          <div class="flex justify-between items-center text-slate-500 dark:text-slate-400">
            <span>Subtotal</span>
            <span class="font-medium text-slate-800 dark:text-slate-200">$${subtotal.toFixed(2)}</span>
          </div>
          <div class="flex justify-between items-center text-slate-500 dark:text-slate-400">
            <span>Delivery Fee</span>
            <span class="font-medium text-slate-800 dark:text-slate-200">$${deliveryFee.toFixed(2)}</span>
          </div>
          <div class="pt-3 mt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
            <span class="text-lg font-bold dark:text-white">Total</span>
            <span class="text-xl font-bold text-primary">$${total.toFixed(2)}</span>
          </div>
        </section>

        <section class="flex items-center gap-4 p-4 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50">
          <div class="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-primary">
            <span class="material-icons-round">location_on</span>
          </div>
          <div class="flex-1 overflow-hidden">
            <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Deliver to</p>
            <p class="text-sm font-medium truncate dark:text-slate-200">123 Design Street, Creative District, NY</p>
          </div>
          <button class="text-primary font-bold text-sm">Edit</button>
        </section>
      </main>

      <footer class="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pb-8 sticky bottom-0">
        <button 
          data-action="checkout"
          class="w-full bg-primary hover:bg-red-700 active:scale-[0.98] transition-all text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-red-500/20"
        >
            <svg class="w-6 h-6 fill-current pointer-events-none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
            </svg>
            Send Order via WhatsApp
        </button>
      </footer>
    </div>
    `;
}

function renderModal() {
    if (!state.selectedProduct) return '';

    const product = state.selectedProduct;
    const addonsCost = state.modalAddons.reduce((sum, id) => {
        const addon = ADDONS.find(a => a.id === id);
        return sum + (addon ? addon.price : 0);
    }, 0);
    const total = (product.price + addonsCost) * state.modalQuantity;

    const addonsHtml = ADDONS.map(addon => {
        const isChecked = state.modalAddons.includes(addon.id);
        return `
            <label class="flex items-center justify-between group cursor-pointer p-2 -mx-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div class="flex items-center gap-3">
                <div class="relative flex items-center">
                  <input 
                    type="checkbox"
                    data-action="toggle-addon"
                    data-id="${addon.id}"
                    ${isChecked ? 'checked' : ''}
                    class="w-5 h-5 rounded-md border-slate-300 dark:border-slate-700 text-primary focus:ring-primary focus:ring-offset-0 bg-transparent" 
                  />
                </div>
                <span class="text-sm dark:text-slate-300 font-medium pointer-events-none">${addon.name}</span>
              </div>
              <span class="text-xs font-medium text-slate-500 dark:text-slate-400 pointer-events-none">
                ${addon.price === 0 ? 'Free' : `+$${addon.price.toFixed(2)}`}
              </span>
            </label>
        `;
    }).join('');

    const animationClass = state.isModalClosing ? 'modal-exit' : 'modal-enter';
    const backdropClass = state.isModalClosing ? 'backdrop-exit' : 'backdrop-enter';

    return `
    <div class="fixed inset-0 z-50 flex items-end justify-center">
      <!-- Backdrop -->
      <div 
        data-action="close-modal"
        class="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${backdropClass}" 
      ></div>
      
      <!-- Modal Content -->
      <div 
        class="relative w-full max-w-[500px] h-[92%] bg-white dark:bg-slate-900 rounded-t-[40px] shadow-2xl flex flex-col ${animationClass}"
      >
        <!-- Drag Handle -->
        <div class="w-full flex justify-center py-4 shrink-0" data-action="close-modal">
          <div class="w-10 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full pointer-events-none"></div>
        </div>

        <!-- Scrollable Content -->
        <div class="flex-1 overflow-y-auto no-scrollbar pb-32">
          <!-- Image -->
          <div class="px-5 mb-6">
            <div class="relative w-full aspect-[4/3] rounded-[30px] overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-inner">
              <img 
                alt="${product.name}" 
                class="w-full h-full object-cover" 
                src="${product.image}" 
              />
              <button class="absolute top-4 right-4 w-10 h-10 bg-white/80 dark:bg-slate-900/80 ios-blur rounded-full flex items-center justify-center text-slate-800 dark:text-white hover:scale-105 transition-transform">
                <span class="material-icons-round text-xl">favorite_border</span>
              </button>
            </div>
          </div>

          <!-- Details -->
          <div class="px-6 space-y-4">
            <div class="flex justify-between items-start">
              <div>
                <h1 class="text-2xl font-bold text-slate-900 dark:text-white leading-tight">${product.name}</h1>
                <div class="flex items-center gap-1 mt-1">
                  <span class="material-icons-round text-yellow-500 text-sm">star</span>
                  <span class="text-sm font-semibold text-slate-800 dark:text-slate-100">${product.rating}</span>
                  <span class="text-xs text-slate-500 dark:text-slate-400 font-normal ml-1">(${product.reviews}+ reviews)</span>
                </div>
              </div>
              <span class="text-xl font-bold text-primary">$${product.price.toFixed(2)}</span>
            </div>

            <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              ${product.description}
            </p>

            <!-- Add-ons -->
            <div class="pt-2">
              <h3 class="font-bold text-slate-900 dark:text-white mb-3">Add-ons</h3>
              <div class="space-y-3">
                ${addonsHtml}
              </div>
            </div>

            <!-- Special Instructions -->
            <div class="pt-2">
              <h3 class="font-bold text-slate-900 dark:text-white mb-3">Special Instructions</h3>
              <textarea 
                id="modal-notes"
                class="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-3 px-4 text-sm focus:ring-primary focus:ring-offset-0 min-h-[80px] placeholder:text-slate-400 dark:text-white" 
                placeholder="e.g. No onions, please!"
              >${state.modalNotes}</textarea>
            </div>
          </div>
        </div>

        <!-- Bottom Actions -->
        <div class="absolute bottom-0 inset-x-0 p-6 bg-white/90 dark:bg-slate-900/90 ios-blur border-t border-slate-100 dark:border-slate-800 flex items-center gap-4 pb-8">
          <div class="flex items-center bg-slate-100 dark:bg-slate-800 rounded-2xl p-1 shrink-0">
            <button 
              data-action="modal-dec-qty"
              class="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-primary transition-colors disabled:opacity-50"
            >
              <span class="material-icons-round text-lg pointer-events-none">remove</span>
            </button>
            <span class="w-8 text-center font-bold text-sm dark:text-white">${state.modalQuantity}</span>
            <button 
              data-action="modal-inc-qty"
              class="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-primary transition-colors"
            >
              <span class="material-icons-round text-lg pointer-events-none">add</span>
            </button>
          </div>
          
          <button 
            data-action="add-to-cart"
            class="flex-1 bg-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-red-500/30 hover:bg-red-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span class="material-icons-round text-lg pointer-events-none">shopping_basket</span>
            Add to Cart - $${total.toFixed(2)}
          </button>
        </div>
      </div>
    </div>
    `;
}

/**
 * MAIN RENDER LOOOP
 */
function renderApp() {
    const app = document.getElementById('app');
    
    // Determine Main Content
    let content = '';
    if (state.view === 'HOME') {
        content = renderHomeScreen();
    } else if (state.view === 'CART') {
        content = renderCartScreen();
    }

    // Append Modal if active
    const modal = renderModal();
    
    // Inject
    app.innerHTML = content + modal;

    // Attach Search Listener manually (input event)
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            state.searchTerm = e.target.value;
            renderApp();
            // Refocus after render (simple hack for vanilla js rerendering)
            const newInput = document.getElementById('search-input');
            newInput.focus();
            newInput.setSelectionRange(newInput.value.length, newInput.value.length);
        });
    }

    // Attach Notes Listener (textarea in modal)
    const notesInput = document.getElementById('modal-notes');
    if (notesInput) {
        notesInput.addEventListener('input', (e) => {
            state.modalNotes = e.target.value;
        });
    }
}

/**
 * EVENT DELEGATION
 */
document.getElementById('app').addEventListener('click', (e) => {
    // Traverse up to find element with data-action
    const target = e.target.closest('[data-action]');
    if (!target) return;

    const action = target.dataset.action;
    const id = target.dataset.id;

    switch (action) {
        case 'set-category':
            state.activeCategory = id;
            renderApp();
            break;
        
        case 'open-product':
            const product = MOCK_PRODUCTS.find(p => p.id === id);
            state.selectedProduct = product;
            state.modalQuantity = 1;
            state.modalAddons = [];
            state.modalNotes = '';
            state.isModalClosing = false;
            renderApp();
            break;

        case 'close-modal':
            state.isModalClosing = true;
            renderApp();
            setTimeout(() => {
                state.selectedProduct = null;
                state.isModalClosing = false;
                renderApp();
            }, 280); // Slightly less than CSS animation to avoid flicker
            break;

        case 'toggle-addon':
            // Checkbox logic is handled mostly by render, but we need to update state
            // The click event happens on the input.
            if (state.modalAddons.includes(id)) {
                state.modalAddons = state.modalAddons.filter(aid => aid !== id);
            } else {
                state.modalAddons.push(id);
            }
            renderApp();
            break;

        case 'modal-inc-qty':
            state.modalQuantity++;
            renderApp();
            break;
        
        case 'modal-dec-qty':
            state.modalQuantity = Math.max(1, state.modalQuantity - 1);
            renderApp();
            break;

        case 'add-to-cart':
            // Map selected addon IDs back to objects
            const selectedAddonObjs = state.modalAddons
                .map(id => ADDONS.find(a => a.id === id))
                .filter(Boolean);

            const newItem = {
                id: Date.now().toString() + Math.random().toString(),
                product: state.selectedProduct,
                quantity: state.modalQuantity,
                selectedAddons: selectedAddonObjs,
                notes: state.modalNotes
            };

            state.cart.push(newItem);
            
            // Close modal logic
            state.isModalClosing = true;
            renderApp();
            setTimeout(() => {
                state.selectedProduct = null;
                state.isModalClosing = false;
                renderApp();
            }, 280);
            break;

        case 'view-cart':
            state.view = 'CART';
            state.selectedProduct = null; // Ensure modal is closed
            renderApp();
            break;

        case 'view-home':
            state.view = 'HOME';
            renderApp();
            break;

        case 'update-quantity':
            const delta = parseInt(target.dataset.delta);
            const cartItem = state.cart.find(item => item.id === id);
            if (cartItem) {
                if (cartItem.quantity === 1 && delta === -1) {
                    state.cart = state.cart.filter(item => item.id !== id);
                } else {
                    cartItem.quantity = Math.max(1, cartItem.quantity + delta);
                }
                renderApp();
            }
            break;
        
        case 'clear-cart':
            state.cart = [];
            renderApp();
            break;

        case 'checkout':
            handleCheckout();
            break;
    }
});

function handleCheckout() {
    let message = "*New Order via TastyDelivery*\n\n";
    state.cart.forEach((item) => {
        message += `*${item.quantity}x ${item.product.name}*\n`;
        if (item.selectedAddons.length > 0) {
            const addons = item.selectedAddons.map(a => a.name).join(', ');
            message += `_Add-ons: ${addons}_\n`;
        }
        if (item.notes) {
            message += `_Note: ${item.notes}_\n`;
        }
        message += `Price: $${((item.product.price + item.selectedAddons.reduce((s, a) => s + a.price, 0)) * item.quantity).toFixed(2)}\n\n`;
    });
    
    const subtotal = getCartTotal();
    const deliveryFee = 2.50;
    const total = subtotal + deliveryFee;

    message += `Subtotal: $${subtotal.toFixed(2)}\n`;
    message += `Delivery Fee: $${deliveryFee.toFixed(2)}\n`;
    message += `*Total: $${total.toFixed(2)}*\n\n`;
    message += "Address: 123 Design Street, Creative District, NY";

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
}

// Initial Render
renderApp();
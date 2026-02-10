/**
 * Data & Constants
 */
const DATA = {
    establishment: {
        name: "Tasty Burger & Pizza",
        address: "Rua das Delícias, 42 - Centro",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4vlCvaAlK55o-7VtRWZBufXJoPzzU2Kk-zuaIjzusdhBYjyWHVc9nxzuLVGR24mYVxAFEA343Olx2K1oyAIekH7v6dJ6juKeuUWpm9m9XQQxfmCSIYimcPdp9XMU3OPbezXHyHvT3Der5kxWXgjGJuCdrBnYWNablB6SeHiUOYINP5UXwt62pUa4HnZkA-MboV0vtDUIBTLL_cTpGV5BEAfaq2-l8ByxVt-mbZh1NDsuoW9jwN72ytC5JyPD6kb4BH5g4GcnqcYU"
    },
    categories: [
        { id: 'all', name: 'Todos', icon: 'lunch_dining' },
        { id: 'pizza', name: 'Pizzas', icon: 'local_pizza' },
        { id: 'burger', name: 'Hambúrgueres', icon: 'lunch_dining' },
        { id: 'drinks', name: 'Bebidas', icon: 'local_drink' },
        { id: 'dessert', name: 'Sobremesas', icon: 'icecream' },
        { id: 'sushi', name: 'Japonesa', icon: 'set_meal' },
    ],
    addons: [
        { id: 'cheese', name: 'Queijo Extra', price: 1.50 },
        { id: 'bacon', name: 'Bacon Crocante', price: 2.00 },
        { id: 'pickles', name: 'Picles', price: 0 },
        { id: 'sauce', name: 'Molho Extra', price: 0.50 },
    ],
    products: [
        {
            id: '1',
            name: 'Pepperoni Clássica',
            description: 'Queijo extra, molho de tomate, fatias de pepperoni picante em massa fina.',
            price: 39.90,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2YN6A2dJGEBpZWfq1oFUhqhe-Z0NaOfGXOH7kRJgrF9-gLbPSi5EMaeKNLrlCRi9KEPm7zMiZGOJpopAh7NYz1r233QrUFKBI2f9BuVkdoGIpFpCEpj4UTkqT5ImmHbJ_fuVczD40KOQSsGpzbH_fzgJzrzHm8diBwaydU_R3e0pzP0FOafVvbDGYnWlZWa4XTxwwIOILAcngCBGnwHEkl10wTbT0eb9bCIuvbtVzw-rTEssb-3Q8TauyRxHdBeevo50A5Nh1AVE',
            category: 'pizza',
            rating: 4.7,
            reviews: 128
        },
        {
            id: '2',
            name: 'Duplo Burger Stack',
            description: 'Dois hambúrgueres suculentos com molho especial, alface e cheddar.',
            price: 28.50,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4vlCvaAlK55o-7VtRWZBufXJoPzzU2Kk-zuaIjzusdhBYjyWHVc9nxzuLVGR24mYVxAFEA343Olx2K1oyAIekH7v6dJ6juKeuUWpm9m9XQQxfmCSIYimcPdp9XMU3OPbezXHyHvT3Der5kxWXgjGJuCdrBnYWNablB6SeHiUOYINP5UXwt62pUa4HnZkA-MboV0vtDUIBTLL_cTpGV5BEAfaq2-l8ByxVt-mbZh1NDsuoW9jwN72ytC5JyPD6kb4BH5g4GcnqcYU',
            category: 'burger',
            rating: 4.8,
            reviews: 240
        },
        {
            id: '3',
            name: 'Donut de Chocolate',
            description: 'Donut macio com cobertura rica de chocolate e granulado.',
            price: 8.50,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAncVNLhJy9Wngor45Mh0rM9dOsWbjpdAnWcuYrD0hioVuF_qh2Rt_FlUnb8VL9Dn35_d4hfl3s8wOhZmiy1UPqtZ8ZTSKbqG1YiLMgZ42qT798Dt0mU8BY52KU3BoQo3oiqqYatRNwGs324V7Bsci4Mg-3Zx_uj1W69ccTUVPuE1zG-uZ1wXmxUMK9ZCK2m8ETNTYCdMQTm-JdHKWus4rC9Z5uo9pjUPzTy0xG7bOjuFJmjLjNFb9zjGHleVC-Tzy5E1vRXcpp2bk',
            category: 'dessert',
            rating: 4.9,
            reviews: 85
        },
        {
            id: '4',
            name: 'Penne Arrabiata',
            description: 'Massa penne ao molho de tomate picante com chili e manjericão fresco.',
            price: 32.00,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxzE1IrRB64AQtOjy7ASGFCDjncQbqBJLE64h-2SZyTdiLGILEOjDVtOyWRMZsI-RSb_jHT8saZ6IsZscL3oUvH79yz1B9ZjiBYbDiyV9YPuJlHWGsuLl1_cV-UTuCZN_56BD3VeakcBpwUlliPKtazUjbaJ9ECv-oIeIhGaAshGrflrqlBaHcc7P4Kjj81gj8V-84EAiXA7ydaiv72qkM6Ieqvr8D_-3yMUcnVppKGvLpyRe4a8jfoVj3DWlrkWM3dd7iBRPKlWs',
            category: 'pizza',
            rating: 4.5,
            reviews: 64
        },
        {
            id: '5',
            name: 'Angus Beef Clássico',
            description: 'Hambúrguer de Angus grelhado no fogo, alface fresca, tomate e cebola roxa.',
            price: 34.50,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCXCDdRgovotl8-rAlCrm3-47zWh_PHbmBvzGP-9hQnWOioOjFPN2GkCsL0pIqmMAhX9mZDCxB9RyaMbbNzlySzNtZDONvwgRPxKyM8xtEcz1ceGxpStn3I9LD6S4qQPUBoFKfcRG8Iq5peojbFzt6hkvkoYZ5HmJhv3ZwoHJhtEB69ujLMHD57GObt__45HlU7IM9mattKcx461RdEFmabL0X5kunx6zTd4v1qRnmc4T69O-VImM3ioc7zjWARPFzSgaqItS-0ro',
            category: 'burger',
            rating: 4.8,
            reviews: 120
        },
        {
            id: '6',
            name: 'Milkshake de Baunilha',
            description: 'Milkshake cremoso de baunilha com chantilly.',
            price: 18.00,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFosDjisIamdfL9Vaj67V6Md3SSg_yQm-y8Z-MZBOunLwFx_toarMzoMuJ5CjZce9ASwXQ1DDlWSaMczr47DO0Kyb8yiYFCOesc2f0asPX6LJoAYbkR0cMDfcPthzN6I10ac0OWlargBKizkjS8kM-Bp1kU_LLF52DxJzVG-Ep0UmvqwIcTEN6yi-R2GqClAaehbLCoK41uxWRn5L6xee8e_K2N-1ANWQF3AJsJcHu53IJfXYfKQQ7kKJRHiiurLox3oTlH9c0BSE',
            category: 'drinks',
            rating: 4.6,
            reviews: 45
        },
        {
            id: '7',
            name: 'Batatas Fritas',
            description: 'Batatas fritas douradas e crocantes com sal marinho.',
            price: 12.00,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiPVXlowj6LHpb29xKMJn3IouBziO5YwM9xKr02HjYqiGnLOemspiwPvf2GdHbWUiZBFPNvRojWKX8QHqG47HJgfhdt5C9ASeMXGcrtQxiA9IK4XOMdjZCzEovjxaasAGj4kSjkzgyK8crmE8_ueMb1WpBIo83dmInB61aaao6fiJ85vQc0oDzHrH3f7kEo5tUgk1hueF4jdKoRBIV06TUaiz3dU8d1dqJL200X3nYHtPlvASCHmvzQdv2a38NbgBGgTtHSFQEUTA',
            category: 'burger',
            rating: 4.7,
            reviews: 210
        }
    ]
};

/**
 * App State Management
 */
const State = {
    view: 'HOME', // 'HOME' | 'CART'
    cart: [],
    searchTerm: '',
    selectedCategory: 'all',
    selectedProduct: null, // Product object or null
    modalState: {
        quantity: 1,
        selectedAddonIds: [],
        notes: ''
    },
    checkout: {
        address: '',
        number: '',
        neighborhood: '',
        paymentMethod: 'card', // 'money', 'card', 'pix'
        changeFor: ''
    }
};

/**
 * Controller / Actions
 */
const App = {
    init: () => {
        App.render();
    },

    setSearchTerm: (term) => {
        State.searchTerm = term;
        App.render(); 
    },

    setCategory: (id) => {
        State.selectedCategory = id;
        App.render();
    },

    toggleView: (viewName) => {
        State.view = viewName;
        window.scrollTo(0,0);
        App.render();
    },

    openProductModal: (productId) => {
        const product = DATA.products.find(p => p.id === productId);
        if (product) {
            State.selectedProduct = product;
            State.modalState = {
                quantity: 1,
                selectedAddonIds: [],
                notes: ''
            };
            App.render();
        }
    },

    closeProductModal: () => {
        State.selectedProduct = null;
        App.render();
    },

    modalIncreaseQty: () => {
        State.modalState.quantity++;
        App.updateModalPrice();
    },

    modalDecreaseQty: () => {
        if (State.modalState.quantity > 1) {
            State.modalState.quantity--;
            App.updateModalPrice();
        }
    },

    modalToggleAddon: (addonId) => {
        const index = State.modalState.selectedAddonIds.indexOf(addonId);
        if (index > -1) {
            State.modalState.selectedAddonIds.splice(index, 1);
        } else {
            State.modalState.selectedAddonIds.push(addonId);
        }
        App.updateModalPrice();
    },

    modalUpdateNotes: (text) => {
        State.modalState.notes = text;
    },

    updateModalPrice: () => {
        const btn = document.getElementById('modal-add-btn');
        const qtyDisplay = document.getElementById('modal-qty-display');
        
        if (btn && qtyDisplay && State.selectedProduct) {
             const addonsCost = State.modalState.selectedAddonIds
                .map(id => DATA.addons.find(a => a.id === id))
                .reduce((sum, a) => sum + (a ? a.price : 0), 0);
            
            const total = (State.selectedProduct.price + addonsCost) * State.modalState.quantity;
            
            btn.innerHTML = `
                <span class="material-icons-round text-lg">shopping_basket</span>
                Adicionar - R$ ${total.toFixed(2)}
            `;
            qtyDisplay.innerText = State.modalState.quantity;
        }
    },

    addToCart: () => {
        if (!State.selectedProduct) return;

        const addons = State.modalState.selectedAddonIds
            .map(id => DATA.addons.find(a => a.id === id))
            .filter(Boolean);

        const newItem = {
            id: Date.now().toString() + Math.random().toString(),
            product: State.selectedProduct,
            quantity: State.modalState.quantity,
            selectedAddons: addons,
            notes: State.modalState.notes
        };

        State.cart.push(newItem);
        State.selectedProduct = null;
        App.render();
    },

    cartUpdateQty: (itemId, delta) => {
        const item = State.cart.find(i => i.id === itemId);
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) {
                State.cart = State.cart.filter(i => i.id !== itemId);
            }
        }
        App.render();
    },

    clearCart: () => {
        State.cart = [];
        App.render();
    },

    // Checkout Logic
    updateCheckoutField: (field, value) => {
        State.checkout[field] = value;
    },

    setPaymentMethod: (method) => {
        State.checkout.paymentMethod = method;
        App.render(); // Re-render to show/hide change input
    },

    checkout: () => {
        const { address, number, neighborhood, paymentMethod, changeFor } = State.checkout;
        if (!address || !number || !neighborhood) {
            alert("Por favor preencha o endereço de entrega.");
            return;
        }

        const deliveryFee = 5.00;
        let subtotal = 0;
        
        let message = "*Novo Pedido via TastyDelivery*\n\n";
        State.cart.forEach((item) => {
            const addonsCost = item.selectedAddons.reduce((sum, a) => sum + a.price, 0);
            const itemPrice = (item.product.price + addonsCost) * item.quantity;
            subtotal += itemPrice;

            message += `*${item.quantity}x ${item.product.name}*\n`;
            if (item.selectedAddons.length > 0) {
                const addons = item.selectedAddons.map((a) => a.name).join(', ');
                message += `_Adicionais: ${addons}_\n`;
            }
            if (item.notes) {
                message += `_Obs: ${item.notes}_\n`;
            }
            message += `Preço: R$ ${itemPrice.toFixed(2)}\n\n`;
        });

        const total = subtotal + deliveryFee;

        message += `Subtotal: R$ ${subtotal.toFixed(2)}\n`;
        message += `Taxa de Entrega: R$ ${deliveryFee.toFixed(2)}\n`;
        message += `*Total: R$ ${total.toFixed(2)}*\n\n`;

        message += `------------------\n`;
        message += `*Detalhes da Entrega:*\n`;
        message += `Endereço: ${address}, ${number}\n`;
        message += `Bairro: ${neighborhood}\n\n`;
        
        message += `*Pagamento:*\n`;
        const paymentLabels = { money: "Dinheiro", card: "Cartão", pix: "PIX" };
        message += `Forma: ${paymentLabels[paymentMethod]}\n`;
        if (paymentMethod === 'money' && changeFor) {
          message += `Troco para: R$ ${changeFor}\n`;
        }

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
    },

    /**
     * DOM Rendering
     */
    render: () => {
        const app = document.getElementById('app');
        if (!app) return;

        let html = '';

        if (State.view === 'HOME') {
            html += Views.Home();
        } else if (State.view === 'CART') {
            html += Views.Cart();
        }

        if (State.selectedProduct) {
            html += Views.Modal();
        }

        app.innerHTML = html;
        
        // Inputs lose focus on re-render, so restore focus if simple text inputs
        if (State.view === 'HOME') {
            const input = document.getElementById('search-input');
            if (input && document.activeElement && document.activeElement.id === 'search-input') {
                input.value = State.searchTerm;
                input.focus();
            }
        }
    }
};

/**
 * HTML Templates (Components)
 */
const Views = {
    Home: () => {
        const productsBySearch = DATA.products.filter(p => {
             return p.name.toLowerCase().includes(State.searchTerm.toLowerCase());
        });

        const categoriesToShow = State.selectedCategory === 'all'
            ? DATA.categories.filter(c => c.id !== 'all')
            : DATA.categories.filter(c => c.id === State.selectedCategory);

        const cartCount = State.cart.reduce((acc, item) => acc + item.quantity, 0);
        const cartTotal = State.cart.reduce((acc, item) => {
            const addonsCost = item.selectedAddons.reduce((sum, a) => sum + a.price, 0);
            return acc + (item.product.price + addonsCost) * item.quantity;
        }, 0);

        return `
            <div class="pb-24 fade-in">
                <!-- Header (Establishment Info) -->
                <header class="px-5 py-4 bg-background-light dark:bg-background-dark sticky top-0 z-10">
                    <div class="flex items-center gap-4">
                        <div class="w-14 h-14 rounded-2xl overflow-hidden shadow-sm shrink-0">
                            <img src="${DATA.establishment.logo}" alt="Logo" class="w-full h-full object-cover" />
                        </div>
                        <div class="flex flex-col">
                            <h1 class="text-lg font-bold text-slate-900 dark:text-white leading-tight">${DATA.establishment.name}</h1>
                            <p class="text-xs text-slate-500 dark:text-slate-400">${DATA.establishment.address}</p>
                        </div>
                    </div>
                </header>

                <!-- Search -->
                <section class="px-5 py-2">
                    <div class="relative flex items-center">
                        <span class="material-icons-round absolute left-4 text-slate-400 pointer-events-none">search</span>
                        <input
                            id="search-input"
                            oninput="App.setSearchTerm(this.value)"
                            value="${State.searchTerm}"
                            class="w-full h-12 pl-12 pr-4 bg-white dark:bg-slate-800 border-none rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-white placeholder-slate-400 text-sm"
                            placeholder="Buscar por pratos, ingredientes..."
                            type="text"
                        />
                    </div>
                </section>

                <!-- Categories -->
                <section class="px-5 py-4">
                    <div class="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                        ${DATA.categories.map(cat => `
                            <button
                                onclick="App.setCategory('${cat.id}')"
                                class="flex items-center gap-2 px-6 py-2.5 rounded-full whitespace-nowrap transition-all text-sm font-medium ${State.selectedCategory === cat.id ? 'bg-primary text-white shadow-lg shadow-primary/25' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'}"
                            >
                                ${cat.name}
                            </button>
                        `).join('')}
                    </div>
                </section>

                <!-- Product Lists by Category -->
                <div class="px-5 space-y-8">
                    ${categoriesToShow.map(category => {
                        const categoryProducts = productsBySearch.filter(p => p.category === category.id);
                        if (categoryProducts.length === 0) return '';
                        
                        return `
                        <section>
                            <div class="flex justify-between items-center mb-4">
                                <h2 class="text-lg font-bold tracking-tight text-slate-900 dark:text-white">${category.name}</h2>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                ${categoryProducts.map(p => `
                                    <div
                                        onclick="App.openProductModal('${p.id}')"
                                        class="bg-white dark:bg-slate-800 rounded-[24px] p-3 shadow-sm border border-slate-100 dark:border-slate-700 relative flex flex-col cursor-pointer hover:shadow-md transition-all active:scale-[0.98]"
                                    >
                                        <div class="h-32 w-full rounded-[18px] bg-slate-100 dark:bg-slate-700 overflow-hidden mb-3">
                                            <img alt="${p.name}" class="w-full h-full object-cover" src="${p.image}" loading="lazy" />
                                        </div>
                                        <h3 class="font-semibold text-sm line-clamp-1 text-slate-900 dark:text-white">${p.name}</h3>
                                        <p class="text-[10px] text-slate-400 mt-0.5 line-clamp-1">${p.description}</p>
                                        <div class="mt-4 flex justify-between items-center">
                                            <span class="font-bold text-primary">R$ ${p.price.toFixed(2)}</span>
                                            <div class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-md shadow-primary/20 hover:bg-red-700 transition-colors">
                                                <span class="material-icons-round text-lg">add</span>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </section>
                        `;
                    }).join('')}
                </div>

                <!-- Floating Cart Button -->
                ${cartCount > 0 ? `
                <div class="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-100 dark:border-slate-800 z-20 flex justify-center fade-in">
                    <div class="w-full max-w-[480px]">
                        <button
                            onclick="App.toggleView('CART')"
                            class="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-red-500/30 hover:bg-red-700 active:scale-[0.98] transition-all flex items-center justify-between px-6"
                        >
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                    <span class="font-bold text-sm">${cartCount}</span>
                                </div>
                                <span>Ver Carrinho</span>
                            </div>
                            <span>R$ ${cartTotal.toFixed(2)}</span>
                        </button>
                    </div>
                </div>
                ` : ''}
            </div>
        `;
    },

    Cart: () => {
        const deliveryFee = 5.00;
        let subtotal = 0;
        State.cart.forEach(item => {
             const addonsCost = item.selectedAddons.reduce((sum, a) => sum + a.price, 0);
             subtotal += (item.product.price + addonsCost) * item.quantity;
        });
        const total = subtotal + deliveryFee;

        if (State.cart.length === 0) {
            return `
                <div class="min-h-screen bg-background-light dark:bg-background-dark flex flex-col items-center justify-center p-6 text-center fade-in">
                    <div class="w-20 h-20 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                        <span class="material-icons-round text-4xl text-slate-400">shopping_cart</span>
                    </div>
                    <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Seu Carrinho está Vazio</h2>
                    <p class="text-slate-500 mb-8">Parece que você ainda não adicionou nada.</p>
                    <button onclick="App.toggleView('HOME')" class="bg-primary text-white px-8 py-3 rounded-2xl font-semibold shadow-lg shadow-primary/20 hover:bg-red-700 transition-colors">Começar a Comprar</button>
                </div>
            `;
        }

        return `
            <div class="min-h-screen bg-background-light dark:bg-background-dark flex flex-col fade-in">
                <header class="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-4 flex items-center justify-between">
                    <button onclick="App.toggleView('HOME')" class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <span class="material-icons-round text-slate-600 dark:text-slate-400">arrow_back_ios_new</span>
                    </button>
                    <h1 class="text-lg font-semibold dark:text-white">Seu Carrinho</h1>
                    <button onclick="App.clearCart()" class="text-sm font-medium text-primary hover:text-red-700 transition-colors">Limpar</button>
                </header>

                <main class="flex-1 overflow-y-auto px-4 py-6 space-y-6">
                    <section class="space-y-4">
                        ${State.cart.map(item => {
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
                                        <p class="text-xs text-slate-500 dark:text-slate-400 mb-2 truncate">${addonText}</p>
                                        <div class="flex items-center justify-between">
                                            <span class="font-bold text-primary">R$ ${itemTotal.toFixed(2)}</span>
                                            <div class="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 rounded-lg p-1">
                                                <button onclick="App.cartUpdateQty('${item.id}', -1)" class="w-7 h-7 flex items-center justify-center rounded-md bg-white dark:bg-slate-800 shadow-sm text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                                                    <span class="material-icons-round text-sm">remove</span>
                                                </button>
                                                <span class="text-sm font-bold w-4 text-center dark:text-white">${item.quantity}</span>
                                                <button onclick="App.cartUpdateQty('${item.id}', 1)" class="w-7 h-7 flex items-center justify-center rounded-md bg-primary text-white shadow-sm hover:bg-red-700 transition-colors">
                                                    <span class="material-icons-round text-sm">add</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </section>

                    <section class="bg-white dark:bg-slate-800 p-5 rounded-2xl space-y-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-slate-700">
                        <h2 class="font-bold text-slate-800 dark:text-slate-100 text-lg mb-4">Resumo do Pedido</h2>
                        <div class="flex justify-between items-center text-slate-500 dark:text-slate-400">
                            <span>Subtotal</span>
                            <span class="font-medium text-slate-800 dark:text-slate-200">R$ ${subtotal.toFixed(2)}</span>
                        </div>
                        <div class="flex justify-between items-center text-slate-500 dark:text-slate-400">
                            <span>Taxa de Entrega</span>
                            <span class="font-medium text-slate-800 dark:text-slate-200">R$ ${deliveryFee.toFixed(2)}</span>
                        </div>
                        <div class="pt-3 mt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                            <span class="text-lg font-bold dark:text-white">Total</span>
                            <span class="text-xl font-bold text-primary">R$ ${total.toFixed(2)}</span>
                        </div>
                    </section>

                    <!-- Delivery Details -->
                    <section class="bg-white dark:bg-slate-800 p-5 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-primary">
                                <span class="material-icons-round text-sm">location_on</span>
                            </div>
                            <h2 class="font-bold text-slate-800 dark:text-slate-100 text-lg">Endereço de Entrega</h2>
                        </div>
                        <div class="space-y-3">
                            <div>
                                <label class="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-1">Rua / Avenida</label>
                                <input type="text" value="${State.checkout.address}" oninput="App.updateCheckoutField('address', this.value)" placeholder="Nome da rua" class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-primary dark:text-white">
                            </div>
                            <div class="grid grid-cols-3 gap-3">
                                <div class="col-span-1">
                                    <label class="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-1">Número</label>
                                    <input type="text" value="${State.checkout.number}" oninput="App.updateCheckoutField('number', this.value)" placeholder="123" class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-primary dark:text-white">
                                </div>
                                <div class="col-span-2">
                                    <label class="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-1">Bairro</label>
                                    <input type="text" value="${State.checkout.neighborhood}" oninput="App.updateCheckoutField('neighborhood', this.value)" placeholder="Centro" class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-primary dark:text-white">
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Payment Methods -->
                    <section class="bg-white dark:bg-slate-800 p-5 rounded-2xl border-slate-100 dark:border-slate-700 shadow-sm">
                        <h2 class="font-bold text-slate-800 dark:text-slate-100 text-lg mb-4">Forma de Pagamento</h2>
                        <div class="grid grid-cols-3 gap-2 mb-4">
                            <button onclick="App.setPaymentMethod('money')" class="flex flex-col items-center justify-center gap-1 py-3 rounded-xl border transition-all ${State.checkout.paymentMethod === 'money' ? 'border-primary bg-red-50 dark:bg-red-900/20 text-primary' : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700'}">
                                <span class="material-icons-round">payments</span>
                                <span class="text-xs font-semibold">Dinheiro</span>
                            </button>
                            <button onclick="App.setPaymentMethod('card')" class="flex flex-col items-center justify-center gap-1 py-3 rounded-xl border transition-all ${State.checkout.paymentMethod === 'card' ? 'border-primary bg-red-50 dark:bg-red-900/20 text-primary' : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700'}">
                                <span class="material-icons-round">credit_card</span>
                                <span class="text-xs font-semibold">Cartão</span>
                            </button>
                            <button onclick="App.setPaymentMethod('pix')" class="flex flex-col items-center justify-center gap-1 py-3 rounded-xl border transition-all ${State.checkout.paymentMethod === 'pix' ? 'border-primary bg-red-50 dark:bg-red-900/20 text-primary' : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700'}">
                                <span class="material-icons-round">qr_code</span>
                                <span class="text-xs font-semibold">PIX</span>
                            </button>
                        </div>
                        ${State.checkout.paymentMethod === 'money' ? `
                            <div class="fade-in">
                                <label class="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-1">Troco para</label>
                                <div class="relative">
                                    <span class="absolute left-3 top-3 text-slate-400">R$</span>
                                    <input type="number" value="${State.checkout.changeFor}" oninput="App.updateCheckoutField('changeFor', this.value)" placeholder="0.00" class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-3 py-3 text-sm focus:outline-none focus:border-primary dark:text-white">
                                </div>
                            </div>
                        ` : ''}
                    </section>
                </main>

                <footer class="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pb-8 sticky bottom-0">
                    <button onclick="App.checkout()" class="w-full bg-primary hover:bg-red-700 active:scale-[0.98] transition-all text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-red-500/20">
                         <span class="material-icons-round">whatsapp</span>
                        Enviar Pedido no WhatsApp
                    </button>
                </footer>
            </div>
        `;
    },

    Modal: () => {
        const p = State.selectedProduct;
        const addonsCost = State.modalState.selectedAddonIds
            .map(id => DATA.addons.find(a => a.id === id))
            .reduce((sum, a) => sum + (a ? a.price : 0), 0);
        const total = (p.price + addonsCost) * State.modalState.quantity;

        return `
            <div class="fixed inset-0 z-50 flex items-end justify-center fade-in">
                <!-- Backdrop -->
                <div onclick="App.closeProductModal()" class="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

                <!-- Modal Content -->
                <div class="slide-up relative w-full max-w-[500px] h-[92%] bg-white dark:bg-slate-900 rounded-t-[40px] shadow-2xl flex flex-col overflow-hidden">
                    <!-- Drag Handle -->
                    <div class="w-full flex justify-center py-4 shrink-0 cursor-pointer" onclick="App.closeProductModal()">
                        <div class="w-10 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
                    </div>

                    <div class="flex-1 overflow-y-auto no-scrollbar pb-32">
                        <!-- Image -->
                        <div class="px-5 mb-6">
                            <div class="relative w-full aspect-[4/3] rounded-[30px] overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-inner">
                                <img alt="${p.name}" class="w-full h-full object-cover" src="${p.image}" />
                                <button onclick="App.closeProductModal()" class="absolute top-4 right-4 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform shadow-lg">
                                    <span class="material-icons-round text-xl">close</span>
                                </button>
                            </div>
                        </div>

                        <!-- Details -->
                        <div class="px-6 space-y-4">
                            <div class="flex justify-between items-start">
                                <div>
                                    <h1 class="text-2xl font-bold text-slate-900 dark:text-white leading-tight">${p.name}</h1>
                                    <div class="flex items-center gap-1 mt-1">
                                        <span class="material-icons-round text-yellow-500 text-sm">star</span>
                                        <span class="text-sm font-semibold text-slate-800 dark:text-slate-100">${p.rating}</span>
                                        <span class="text-xs text-slate-500 dark:text-slate-400 font-normal ml-1">(${p.reviews}+ avaliações)</span>
                                    </div>
                                </div>
                                <span class="text-xl font-bold text-primary">R$ ${p.price.toFixed(2)}</span>
                            </div>

                            <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">${p.description}</p>

                            <!-- Add-ons -->
                            <div class="pt-2">
                                <h3 class="font-bold text-slate-900 dark:text-white mb-3">Adicionais</h3>
                                <div class="space-y-3">
                                    ${DATA.addons.map(addon => {
                                        const isChecked = State.modalState.selectedAddonIds.includes(addon.id);
                                        return `
                                            <label class="flex items-center justify-between group cursor-pointer p-2 -mx-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                                <div class="flex items-center gap-3">
                                                    <input 
                                                        type="checkbox" 
                                                        ${isChecked ? 'checked' : ''} 
                                                        onchange="App.modalToggleAddon('${addon.id}')"
                                                        class="w-5 h-5 rounded-md border-slate-300 dark:border-slate-700 text-primary focus:ring-primary focus:ring-offset-0 bg-transparent"
                                                    />
                                                    <span class="text-sm dark:text-slate-300 font-medium pointer-events-none">${addon.name}</span>
                                                </div>
                                                <span class="text-xs font-medium text-slate-500 dark:text-slate-400 pointer-events-none">
                                                    ${addon.price === 0 ? 'Grátis' : `+R$ ${addon.price.toFixed(2)}`}
                                                </span>
                                            </label>
                                        `;
                                    }).join('')}
                                </div>
                            </div>

                            <!-- Notes -->
                            <div class="pt-2">
                                <h3 class="font-bold text-slate-900 dark:text-white mb-3">Instruções Especiais</h3>
                                <textarea
                                    oninput="App.modalUpdateNotes(this.value)"
                                    class="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-3 px-4 text-sm focus:ring-primary focus:ring-offset-0 min-h-[80px] placeholder:text-slate-400 dark:text-white resize-none"
                                    placeholder="ex: Sem cebola, por favor!"
                                >${State.modalState.notes}</textarea>
                            </div>
                        </div>
                    </div>

                    <!-- Bottom Actions -->
                    <div class="absolute bottom-0 inset-x-0 p-6 bg-white/90 dark:bg-slate-900/90 ios-blur border-t border-slate-100 dark:border-slate-800 flex items-center gap-4 pb-8 z-20">
                        <div class="flex items-center bg-slate-100 dark:bg-slate-800 rounded-2xl p-1 shrink-0">
                            <button onclick="App.modalDecreaseQty()" class="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-primary transition-colors">
                                <span class="material-icons-round text-lg">remove</span>
                            </button>
                            <span id="modal-qty-display" class="w-8 text-center font-bold text-sm dark:text-white">${State.modalState.quantity}</span>
                            <button onclick="App.modalIncreaseQty()" class="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-primary transition-colors">
                                <span class="material-icons-round text-lg">add</span>
                            </button>
                        </div>

                        <button
                            id="modal-add-btn"
                            onclick="App.addToCart()"
                            class="flex-1 bg-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-red-500/30 hover:bg-red-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                        >
                            <span class="material-icons-round text-lg">shopping_basket</span>
                            Adicionar - R$ ${total.toFixed(2)}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
};

// Initialize App on Load
window.addEventListener('DOMContentLoaded', App.init);
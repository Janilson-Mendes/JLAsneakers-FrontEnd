/* ============================================================
   JLASNEAKERS - script.js
   Funcionalidades: Carrinho, Filtros, Modal, Toast, Menu Mobile
   ============================================================ */

'use strict';

/* ============================================================
   1. DADOS DOS PRODUTOS
   ============================================================ */

/**
 * Catálogo completo de produtos.
 * Cada produto contém: id, name, brand, category, price, oldPrice,
 * rating, reviews, emoji (substitui imagem), badge, isNew, isSale
 */
const PRODUCTS = [
  // ── NIKE ──────────────────────────────────────────────────
  { id: 1,  name: 'Air Force 1',    
    brand: 'Nike',   
    category: 'Lifestyle', 
    price: 529.99,  
    oldPrice: null, 
    rating: 4.8, 
    reviews: 1284, 
     image: 'img/airforce1.jpg',
    badge: 'Mais Vendido', 
    isNew: false, 
    isSale: true  },

  { id: 2,  
    name: 'Air Max 270',    
    brand: 'Nike',   
    category: 'Running',   
    price:529.99,  
    oldPrice: null, 
    rating: 4.7, 
    reviews: 892,  
    image: 'img/airmax270.jpg',
    badge: 'Hot',         
    isNew: false, 
    isSale: true  },

  { id: 3,  
    name: 'Air Max Plus',   
    brand: 'Nike',   
    category: 'Running',   
    price:529.99,  
    oldPrice: null,   
    rating: 4.6, 
    reviews: 547,  
    image: 'img/air max plus.jpg', 
    badge: null,          
    isNew: true,  
    isSale: false },
  
  { id: 4,  
    name: 'Dunk Low',       
    brand: 'Nike',   
    category: 'Lifestyle', 
    price: 529.99,  
    oldPrice: null, 
    rating: 4.9, 
    reviews: 2341, 
    image: 'img/dunk low.webp', 
    badge: 'Top',         
    isNew: false, 
    isSale: true  },

  { id: 5,  
    name: 'Court Vision',   
    brand: 'Nike',   
    category: 'Lifestyle', 
    price: 449.90,  
    oldPrice: null,   
    rating: 4.4, 
    reviews: 312,  
   image: 'img/-court-vision-.jpg', 
    badge: null,          
    isNew: true,  
    isSale: false },

  // ── ADIDAS ────────────────────────────────────────────────
  { id: 6,  name: 'Ultraboost 23', 
     brand: 'Adidas', category: 'Running',  
     price: 529.99, 
     oldPrice:null, 
     rating: 4.8,
     reviews: 1753,
    image: 'img/TENIS-ULTRABOOST-.webp',
     badge: 'Mais Vendido',
     isNew: false, isSale: true  },
  { id: 7,  name: 'Forum Low',   
     brand: 'Adidas',
     category: 'Lifestyle',
     price: 549.90, 
     oldPrice: null,  
     rating: 4.5,
     reviews: 634, 
     image: 'img/Tenis_Forum_Low_.avif',
     badge: null,       
     isNew: true,  isSale: false },
  { id: 8,
     name: 'Superstar',  
      brand: 'Adidas',
     category: 'Lifestyle',
     price: 499.90, 
     oldPrice: null,
     rating: 4.7,
     reviews: 2187,
     image: 'img/superstar.webp',
     badge: 'Clássico',   
     isNew: false, isSale: true  },
  { id: 9,  name: 'Grand Court',
      brand: 'Adidas',
     category: 'Lifestyle',
     price: 379.90, 
     oldPrice: null, 
      rating: 4.3,
     reviews: 421, 
    image: 'img/grand court.webp',
     badge: null,    
     isNew: false,
     isSale: false },
  { id: 10, name: 'Runfalcon 3.0', 
   brand: 'Adidas',
   category: 'Running', 
    price: 299.90, 
   oldPrice:null,
   rating: 4.2,
   reviews: 289, 
   image: 'img/falcon 3.0.webp',
   badge: null,       
   isNew: false,
   isSale: true  },

  // ── PUMA ──────────────────────────────────────────────────
  { id: 11, name: 'RS-X',        
   brand: 'Puma', 
   category: 'Lifestyle',
   price: 529.90,
   oldPrice: 629.90,
   rating: 4.5,
   reviews: 567, 
   image: 'img/rsx.webp',
   badge: null,     
   isNew: false,
   isSale: true  },
  { id: 12, name: 'Smash V2', 
   brand: 'Puma', 
   category: 'Lifestyle',
   price: 249.90, 
   oldPrice: null,  
   rating: 4.1,
   reviews: 198, 
   image: 'img/v2.avif',
   badge: null,   
    isNew: false,
   isSale: false },
  { id: 13, name: 'Carina 2.0',   
    brand: 'Puma',
    category: 
   'Lifestyle',
   price: 329.90,
    oldPrice: 399.90,
    rating: 4.3,
    reviews: 312,
    image: 'img/carina.webp',
    badge: null,    
   isNew: false,
   isSale: true  },
  { id: 14, name: 'Flyer Runner', 
   brand: 'Puma',
   category: 'Running',
    price: 289.90, 
   oldPrice: null, 
   rating: 4.0,
   reviews: 145, 
   image: 'img/runner.avif',
   badge: null,  
   isNew: true, 
   isSale: false },
  { id: 15, name: 'X-Ray Speed',
    brand: 'Puma',  
   category: 'Lifestyle',
   price: 449.90, 
   oldPrice: null,
   rating: 4.4,
   reviews: 387, 
   image: 'img/X-Ray-Speed-Sneakers.avif',
   badge: null,  
   isNew: false,
   isSale: true  },

  // ── JORDAN ────────────────────────────────────────────────
  { id: 16, name: 'Air Jordan 1', 
    brand: 'Jordan',
   category: 'Lifestyle',
   price: 529.99,
   oldPrice: null,
   rating: 5.0,
   reviews: 4521,
   image: 'img/jd1.jpg',
   badge: 'Ícone',   
   isNew: false, 
   isSale: true  },
  { id: 17, name: 'Air Jordan 4',
   brand: 'Jordan',
    category: 'Lifestyle',
    price: 529.99,
   oldPrice: null, 
    rating: 4.9,
    reviews: 2834,
   image: 'img/jd4.avif',
    badge: 'Premium',  
   isNew: true, 
    isSale: false },
  { id: 18, name: 'Air Jordan 11', 
   brand: 'Jordan',
   category: 'Lifestyle',
   price: 529.99,
   oldPrice:null, 
   rating: 4.9,
   reviews: 3102,
    image: 'img/jd11.webp',
   badge: 'Lenda',    
    isNew: false,
   isSale: true  },
  { id: 19, name: 'Jordan Max Aura', 
   brand: 'Jordan',
   category: 'Lifestyle',
   price: 529.99, 
   oldPrice: null, 
   rating: 4.6,
   reviews: 712,
   image: 'img/aura.avif',
   badge: null,   
   isNew: true, 
   isSale: false },
  { id: 20, name: 'Jordan Stay Loyal', 
   brand:'Jordan',
   category: 'Lifestyle',
   price: 529.99, 
   oldPrice: null,
   rating: 4.5,
   reviews: 534, 
   image: 'img/loyal.jpg',
   badge: null,    
   isNew: false,
   isSale: true  },
  // ── BASQUETE ──────────────────────────────────────────────
  { id: 21, name: 'LeBron 21', 
   brand: 'Nike',  
   category: 'Basquete',
   price: 529.99,
   oldPrice: null,
   rating: 4.9,
   reviews: 1823,
   image: 'img/tenis-nike-lebron-20-pink21-65b5df5d462b44b77b16741123464662-640-0.webp',
   badge: 'Exclusivo',
   isNew: true,
   isSale: true  },
  { id: 22, name: 'KD 16',
   brand: 'Nike',  
   category: 'Basquete', 
   price: 529.99,
   oldPrice: null, 
   rating: 4.8,
   reviews: 934, 
  image: 'img/kd16.webp',
   badge: null,
   isNew: true, 
   isSale: false },
  { id: 23, name: 'Giannis Freak 6', 
   brand: 'Nike',
   category: 'Basquete', 
   price: 529.99, 
   oldPrice: null,
   rating: 4.7,
   reviews: 678,
    image: 'img/6.jpg',
   badge: null,
   isNew:false,
   isSale: true  },
  { id: 24, name: 'Jordan Luka 3',
   brand: 'Jordan',
   category: 'Basquete',
    price: 529.99,
   oldPrice: null,
   rating: 4.8,
   reviews: 1102,
  image: 'img/luka 3.webp',
   badge: 'Novo',
   isNew: true,
   isSale: false },
  { id: 25, name: 'Harden Vol. 8',
   brand: 'Adidas',
   category: 'Basquete',
   price: 529.99,
   oldPrice: null, 
   rating: 4.6,
   reviews: 523,
   image: 'img/vol 8.webp',
    badge: null,
   isNew: false,
   isSale: true  },
  // ── FUTEBOL ───────────────────────────────────────────────
  { id: 26, name: 'Mercurial Vapor',
   brand: 'Nike',
   category: 'Futebol', 
   price: 529.99,
   oldPrice: null,
   rating: 4.9,
   reviews: 2341,
   image: 'img/vapor.avif',
   badge: 'Pro',
   isNew: false,
   isSale: true  },
  { id: 27, name: 'Tiempo Legend',
   brand: 'Nike',  
   category: 'Futebol',
   price: 529.99,
   oldPrice: null,
   rating: 4.7,
   reviews: 876,
   image: 'img/tiempo.jpg',
   badge: null,
   isNew: true,
   isSale: false },
  { id: 28, name: 'Predator Elite',
   brand: 'Adidas',
   category: 'Futebol',
   price: 529.99,
   oldPrice: null,
   rating: 4.8,
   reviews: 1567,
    image: 'img/elite.webp',
   badge: 'Elite',
   isNew: false,
   isSale: true  },
  { id: 29, name: 'Copa Pure.1',
   brand: 'Adidas',
   category: 'Futebol',
   price: 529.99,
   oldPrice: null,
   rating: 4.6,
   reviews: 734,
   image: 'img/pure.webp',
   badge: null,
   isNew: true,
   isSale: false },
  { id: 30, name: 'Puma Future 7',
   brand: 'Puma',
   category: 'Futebol',
   price: 529.99,
   oldPrice: null,
   rating: 4.5,
   reviews: 445,
  image: 'img/7.jpg',
   badge: null,
   isNew: false,
   isSale: true  },
];

/* ============================================================
   2. ESTADO DA APLICAÇÃO
   ============================================================ */
const state = {
  cart: [],           // [ { product, qty } ]
  wishlist: new Set(),
  filterBrand: 'all',
  filterCategory: 'all',
  searchQuery: '',
};

/* ============================================================
   3. UTILITÁRIOS
   ============================================================ */

/** Formata valor em BRL */
function formatPrice(val) {
  return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

/** Gera estrelas HTML */
function starsHTML(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

/** Desconto percentual */
function discountPct(price, old) {
  if (!old) return 0;
  return Math.round((1 - price / old) * 100);
}

/* ============================================================
   4. TOAST NOTIFICATION
   ============================================================ */
let toastTimer = null;

/**
 * Exibe uma notificação toast na tela.
 * @param {string} msg  - Mensagem a exibir
 * @param {string} type - 'success' | 'error' | 'info'
 * @param {string} icon - Emoji ícone
 */
function showToast(msg, type = 'success', icon = '✅') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${msg}</span>`;

  clearTimeout(toastTimer);
  // Pequeno delay para re-triggerar a animação
  requestAnimationFrame(() => {
    toast.classList.add('show');
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
  });
}

/* ============================================================
   5. CARRINHO
   ============================================================ */

/** Calcula total de itens no carrinho */
function cartCount() {
  return state.cart.reduce((sum, i) => sum + i.qty, 0);
}

/** Calcula subtotal do carrinho */
function cartTotal() {
  return state.cart.reduce((sum, i) => sum + i.product.price * i.qty, 0);
}

/** Atualiza badge do carrinho no header */
function updateCartBadge() {
  document.querySelectorAll('.cart-badge').forEach(el => {
    const count = cartCount();
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

/**
 * Adiciona produto ao carrinho.
 * @param {Object} product - Objeto do produto
 */
function addToCart(product) {
  const existing = state.cart.find(i => i.product.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    state.cart.push({ product, qty: 1 });
  }
  updateCartBadge();
  renderCartSidebar();
  showToast(`${product.name} adicionado!`, 'success', '🛒');
}

/**
 * Remove item do carrinho.
 * @param {number} id - ID do produto
 */
function removeFromCart(id) {
  state.cart = state.cart.filter(i => i.product.id !== id);
  updateCartBadge();
  renderCartSidebar();
}

/**
 * Altera quantidade de um item.
 * @param {number} id    - ID do produto
 * @param {number} delta - +1 ou -1
 */
function changeQty(id, delta) {
  const item = state.cart.find(i => i.product.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else {
    updateCartBadge();
    renderCartSidebar();
  }
}

/** Renderiza o conteúdo do carrinho lateral */
function renderCartSidebar() {
  const itemsWrap = document.getElementById('cart-items');
  if (!itemsWrap) return;

  if (state.cart.length === 0) {
    itemsWrap.innerHTML = `
      <div class="cart-empty">
        <div class="emoji">🛒</div>
        <p>Seu carrinho está vazio.</p>
        <p>Explore nossos produtos!</p>
      </div>`;
  } else {
    itemsWrap.innerHTML = state.cart.map(({ product: p, qty }) => `
      <div class="cart-item">
        <div class="cart-item-img">${p.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-brand">${p.brand}</div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="changeQty(${p.id}, -1)">−</button>
            <span class="qty-num">${qty}</span>
            <button class="qty-btn" onclick="changeQty(${p.id}, +1)">+</button>
          </div>
        </div>
        <div class="cart-item-price">${formatPrice(p.price * qty)}</div>
        <button class="cart-item-remove" onclick="removeFromCart(${p.id})" title="Remover">✕</button>
      </div>`).join('');
  }

  // Atualiza subtotal
  const subtotalEl = document.getElementById('cart-subtotal-price');
  if (subtotalEl) subtotalEl.textContent = formatPrice(cartTotal());
}

/** Abre/fecha o carrinho lateral */
function toggleCart(open) {
  const overlay = document.getElementById('cart-overlay');
  const sidebar = document.getElementById('cart-sidebar');
  if (!overlay || !sidebar) return;

  const isOpen = open !== undefined ? open : !sidebar.classList.contains('open');
  overlay.classList.toggle('open', isOpen);
  sidebar.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}
/* ============================================================
   7. CARD DE PRODUTO
   ============================================================ */

/**
 * Gera o HTML de um card de produto.
 * @param {Object} p - Produto
 * @returns {string} HTML string
 */
function productCardHTML(p) {
  const discount = discountPct(p.price, p.oldPrice);
  const isWished = state.wishlist.has(p.id);

  // Badges
  let badgesHTML = '';
  if (p.isNew)         badgesHTML += `<span class="tag tag-black">Novo</span>`;
  if (p.isSale && p.oldPrice) badgesHTML += `<span class="tag tag-red">-${discount}%</span>`;
  if (p.badge && !p.isSale)   badgesHTML += `<span class="tag tag-gray">${p.badge}</span>`;
  else if (p.badge)            badgesHTML += `<span class="tag tag-gray">${p.badge}</span>`;

  const oldPriceHTML = p.oldPrice
    ? `<span class="card-price-old">${formatPrice(p.oldPrice)}</span>`
    : '';

  return `
    <article class="product-card" data-id="${p.id}" data-brand="${p.brand}" data-category="${p.category}">
      <div class="card-img-wrap">
    <img src="${p.image}" alt="${p.name}">
    <div class="card-badges">${badgesHTML}</div>
      </div>
      <div class="card-body">
        <div class="card-brand">${p.brand}</div>
        <div class="card-name">${p.name}</div>
        <div class="card-cat">${p.category}</div>
        <div class="card-stars">
          <span class="stars" aria-label="${p.rating} estrelas">${starsHTML(p.rating)}</span>
          <span class="rating-count">(${p.reviews.toLocaleString('pt-BR')})</span>
        </div>
        <div class="card-price-row">
          <div>
            ${oldPriceHTML}
            <div class="card-price">${formatPrice(p.price)}</div>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn btn-add-cart" onclick="addToCart(PRODUCTS.find(x=>x.id===${p.id}))">
          🛒 Adicionar
        </button>
      </div>
    </article>`;
}

/* ============================================================
   8. FILTROS E PESQUISA (página de produtos)
   ============================================================ */

/** Aplica filtros e renderiza produtos filtrados */
function applyFilters() {
  const grid = document.getElementById('products-grid-main');
  if (!grid) return;

  const q     = state.searchQuery.toLowerCase().trim();
  const brand = state.filterBrand;
  const cat   = state.filterCategory;

  const filtered = PRODUCTS.filter(p => {
    const matchBrand = brand === 'all' || p.brand === brand;
    const matchCat   = cat   === 'all' || p.category === cat;
    const matchQ     = !q || p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    return matchBrand && matchCat && matchQ;
  });

  // Atualiza contador
  const countEl = document.getElementById('results-count');
  if (countEl) countEl.textContent = `${filtered.length} produto${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="emoji">🔍</div>
        <h3>Nenhum produto encontrado</h3>
        <p>Tente outro filtro ou termo de busca.</p>
      </div>`;
  } else {
    grid.innerHTML = filtered.map(productCardHTML).join('');
  }
}

/** Inicializa filtros na página de produtos */
function initFilters() {
  // Brand filters
  document.querySelectorAll('[data-brand]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-brand]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filterBrand = btn.dataset.brand;
      applyFilters();
    });
  });

  // Category filters
  document.querySelectorAll('[data-category]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-category]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filterCategory = btn.dataset.category;
      applyFilters();
    });
  });

  // Search input
  const searchInput = document.getElementById('products-search');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      state.searchQuery = e.target.value;
      applyFilters();
    });
  }
}

/* ============================================================
   9. MODAL DE PRODUTO
   ============================================================ */

/**
 * Abre o modal com detalhes do produto.
 * @param {number} id - ID do produto
 */
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;

  const discount = discountPct(p.price, p.oldPrice);

  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-label="${p.name}">
      <button class="modal-close" onclick="closeModal()" aria-label="Fechar">✕</button>
      <div class="modal-inner">
        <div class="modal-img-side" style="font-size:9rem;">${p.emoji}</div>
        <div class="modal-info">
          <div class="modal-brand">${p.brand} · ${p.category}</div>
          <h2 class="modal-name">${p.name}</h2>
          <div class="modal-stars">
            <span class="stars">${starsHTML(p.rating)}</span>
            <span class="rating-count" style="margin-left:6px;">${p.reviews.toLocaleString('pt-BR')} avaliações</span>
          </div>
          <div class="modal-price">${formatPrice(p.price)}</div>
          ${p.oldPrice ? `<div class="modal-price-old">${formatPrice(p.oldPrice)} • Você economiza ${formatPrice(p.oldPrice - p.price)} (-${discount}%)</div>` : ''}
          <p class="modal-desc">
            O ${p.name} é um dos modelos mais icônicos da ${p.brand}, combinando design moderno com tecnologia de ponta. Perfeito para o dia a dia, oferece conforto, estilo e durabilidade. Disponível em várias cores e tamanhos para se adaptar ao seu estilo único.
          </p>
          <div class="modal-size-label">Tamanho (BR)</div>
          <div class="modal-sizes">
            ${[38,39,40,41,42,43,44,45].map(s =>
              `<button class="size-btn" onclick="selectSize(this)">${s}</button>`
            ).join('')}
          </div>
          <div class="modal-actions">
            <button class="btn btn-primary" onclick="addToCart(PRODUCTS.find(x=>x.id===${p.id}));closeModal()">
              🛒 Adicionar ao Carrinho
            </button>
            <button class="btn btn-outline wish-btn ${state.wishlist.has(p.id) ? 'active' : ''}"
              data-id="${p.id}"
              onclick="toggleWishlist(${p.id})">
              ${state.wishlist.has(p.id) ? '❤️' : '🤍'}
            </button>
          </div>
        </div>
      </div>
    </div>`;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/** Fecha o modal */
function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

/**
 * Seleciona um tamanho no modal.
 * @param {HTMLElement} btn - Botão de tamanho
 */
function selectSize(btn) {
  btn.closest('.modal-sizes').querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

/* ============================================================
   10. MENU MOBILE
   ============================================================ */

/** Inicializa menu hamburguer */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Fecha ao clicar em link
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
}

/* ============================================================
   11. BUSCA NO HEADER (index.html)
   ============================================================ */

/** Inicializa a barra de busca do header na home */
function initHeaderSearch() {
  const form = document.getElementById('header-search-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const q = form.querySelector('input').value.trim();
    if (q) {
      window.location.href = `produtos.html?q=${encodeURIComponent(q)}`;
    }
  });
}

/* ============================================================
   12. NEWSLETTER
   ============================================================ */

/** Inicializa formulário de newsletter */
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    if (email) {
      showToast('Cadastro realizado! Obrigado 🎉', 'success', '📧');
      form.reset();
    }
  });
}

/* ============================================================
   13. FEATURED PRODUCTS (index.html)
   ============================================================ */

/** Renderiza produtos em destaque na home */
function renderFeatured() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;

  // Seleciona 8 produtos variados
  const featured = [
    PRODUCTS.find(p => p.id === 1),
    PRODUCTS.find(p => p.id === 4),
    PRODUCTS.find(p => p.id === 6),
    PRODUCTS.find(p => p.id === 16),
    PRODUCTS.find(p => p.id === 17),
    PRODUCTS.find(p => p.id === 8),
    PRODUCTS.find(p => p.id === 11),
    PRODUCTS.find(p => p.id === 21),
  ].filter(Boolean);

  grid.innerHTML = featured.map(productCardHTML).join('');
}

/* ============================================================
   14. CATEGORIA BASQUETE E FUTEBOL
   ============================================================ */

/** Renderiza produtos de uma categoria específica */
function renderCategory(categoryName, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const items = PRODUCTS.filter(p => p.category === categoryName);
  container.innerHTML = items.map(productCardHTML).join('');
}

/* ============================================================
   15. LER QUERY PARAMS (produtos.html)
   ============================================================ */

/** Lê ?q= da URL e pré-preenche busca */
function readQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const q = params.get('q');
  if (q) {
    const searchInput = document.getElementById('products-search');
    if (searchInput) {
      searchInput.value = q;
      state.searchQuery = q;
    }
  }

  const brand = params.get('brand');
  if (brand) {
    state.filterBrand = brand;
    const btn = document.querySelector(`[data-brand="${brand}"]`);
    if (btn) {
      document.querySelectorAll('[data-brand]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
  }
}

/* ============================================================
   16. SCROLL SUAVE PARA ÂNCORAS
   ============================================================ */

/** Inicializa scroll suave para links com âncoras internas */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ============================================================
   17. ANIMAÇÕES DE SCROLL (Intersection Observer)
   ============================================================ */

/** Adiciona animação fade-in ao rolar */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  // Elementos para animar
  document.querySelectorAll('.product-card, .testimonial-card, .benefit-item, .promo-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });
}

/* ============================================================
   18. STICKY HEADER SHADOW
   ============================================================ */

/** Adiciona sombra ao header ao rolar */
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10
      ? '0 4px 30px rgba(0,0,0,.4)'
      : '0 2px 20px rgba(0,0,0,.3)';
  }, { passive: true });
}

/* ============================================================
   19. BOTÃO VOLTAR AO TOPO
   ============================================================ */

/** Cria e gerencia botão "voltar ao topo" */
function initBackToTop() {
  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.innerHTML = '↑';
  btn.setAttribute('aria-label', 'Voltar ao topo');
  btn.style.cssText = `
    position:fixed;bottom:90px;right:28px;width:44px;height:44px;
    background:var(--black);color:var(--white);border-radius:50%;
    font-size:1.2rem;font-weight:700;z-index:999;
    box-shadow:0 4px 16px rgba(0,0,0,.25);
    opacity:0;transform:translateY(20px);
    transition:.3s ease;cursor:pointer;border:none;
  `;
  document.body.appendChild(btn);

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  window.addEventListener('scroll', () => {
    const visible = window.scrollY > 400;
    btn.style.opacity = visible ? '1' : '0';
    btn.style.transform = visible ? 'translateY(0)' : 'translateY(20px)';
    btn.style.pointerEvents = visible ? 'all' : 'none';
  }, { passive: true });
}

/* ============================================================
   20. INICIALIZAÇÃO
   ============================================================ */

/** Ponto de entrada — executado quando o DOM está pronto */
document.addEventListener('DOMContentLoaded', () => {

  // Carrinho
  updateCartBadge();
  renderCartSidebar();

  // Fechar carrinho ao clicar no overlay
  const cartOverlay = document.getElementById('cart-overlay');
  if (cartOverlay) cartOverlay.addEventListener('click', () => toggleCart(false));

  // Fechar modal ao clicar fora
  const modalOverlay = document.getElementById('modal-overlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', e => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // ESC fecha modal e carrinho
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal();
      toggleCart(false);
    }
  });

  // Menu mobile
  initMobileMenu();

  // Busca no header
  initHeaderSearch();

  // Newsletter
  initNewsletter();

  // Smooth scroll
  initSmoothScroll();

  // Animações de scroll
  initScrollAnimations();

  // Header scroll
  initHeaderScroll();

  // Voltar ao topo
  initBackToTop();

  // HOME: produtos em destaque
  renderFeatured();

  // PRODUTOS.HTML: filtros + grid
  if (document.getElementById('products-grid-main')) {
    readQueryParams();
    initFilters();
    applyFilters();
  }

  // PRODUTOS.HTML: categorias especiais
  renderCategory('Basquete', 'grid-basquete');
  renderCategory('Futebol', 'grid-futebol');

  // Marca activa no nav
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#main-nav a, .mobile-nav a').forEach(a => {
    if (a.getAttribute('href') === currentPage) a.classList.add('active');
  });
});

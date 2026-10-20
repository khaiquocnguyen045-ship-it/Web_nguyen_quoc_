const PRODUCTS = [
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro 128GB',
    brand: 'Apple',
    group: 'hot',
    condition: 'new',
    basePrice: 24990000,
    originalPrice: 28990000,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
    colors: ['Titan Tự Nhiên', 'Titan Xanh', 'Titan Đen', 'Titan Trắng'],
    storageVariants: [
      { capacity: '128GB', priceDiff: 0 },
      { capacity: '256GB', priceDiff: 2500000 },
      { capacity: '512GB', priceDiff: 7500000 }
    ],
    chip: 'Apple A17 Pro (3nm)',
    ram: '8 GB',
    storage: '128 GB',
    screen: '6.1" Super Retina XDR OLED 120Hz',
    battery: '3.274 mAh, Sạc nhanh 20W, MagSafe',
    camera: 'Chính 48MP + 12MP Tele 3x + 12MP OIS',
    rating: 4.9,
    reviewsCount: 142,
    badgeText: 'Bán chạy nhất'
  },
  {
    id: 'samsung-s24',
    name: 'Samsung Galaxy S24 5G 256GB',
    brand: 'Samsung',
    group: 'new',
    condition: 'new',
    basePrice: 17490000,
    originalPrice: 22990000,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80',
    colors: ['Đen Onyx', 'Xám Titan', 'Tím Coban', 'Vàng Amber'],
    storageVariants: [
      { capacity: '256GB', priceDiff: 0 },
      { capacity: '512GB', priceDiff: 3200000 }
    ],
    chip: 'Exynos 2400 10 nhân (4nm)',
    ram: '8 GB',
    storage: '256 GB',
    screen: '6.2" Dynamic AMOLED 2X 120Hz',
    battery: '4.000 mAh, Sạc nhanh 25W',
    camera: '50MP OIS + 10MP Tele 3x + 12MP Siêu rộng',
    rating: 4.8,
    reviewsCount: 98,
    badgeText: 'Mẫu mới 2024'
  },
  {
    id: 'iphone-13-likenew',
    name: 'iPhone 13 128GB (Like New 99%)',
    brand: 'Apple',
    group: 'sale',
    condition: 'likenew',
    basePrice: 11490000,
    originalPrice: 13990000,
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
    colors: ['Xanh Midnight', 'Trắng Starlight', 'Xanh Blue', 'Hồng Pink'],
    storageVariants: [
      { capacity: '128GB', priceDiff: 0 },
      { capacity: '256GB', priceDiff: 1800000 }
    ],
    chip: 'Apple A15 Bionic',
    ram: '4 GB',
    storage: '128 GB',
    screen: '6.1" Super Retina XDR OLED',
    battery: '3.227 mAh, Sạc nhanh 20W',
    camera: 'Kép 12MP OIS cảm biến dịch chuyển',
    rating: 4.9,
    reviewsCount: 310,
    badgeText: 'Giảm 2.500.000đ'
  },
  {
    id: 'xiaomi-redmi-note-13-pro',
    name: 'Xiaomi Redmi Note 13 Pro 5G',
    brand: 'Xiaomi',
    group: 'hot',
    condition: 'new',
    basePrice: 7990000,
    originalPrice: 9490000,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    colors: ['Đen Bán Dạ', 'Xanh Biển Bắc', 'Tím Cực Quang'],
    storageVariants: [
      { capacity: '8GB/128GB', priceDiff: 0 },
      { capacity: '8GB/256GB', priceDiff: 700000 }
    ],
    chip: 'Snapdragon 7s Gen 2 (4nm)',
    ram: '8 GB',
    storage: '128 GB',
    screen: '6.67" AMOLED 1.5K 120Hz',
    battery: '5.100 mAh, Sạc siêu nhanh 67W',
    camera: '200MP OIS siêu nét + 8MP + 2MP',
    rating: 4.8,
    reviewsCount: 85,
    badgeText: 'Camera 200MP'
  },
  {
    id: 'samsung-galaxy-a55',
    name: 'Samsung Galaxy A55 5G 128GB',
    brand: 'Samsung',
    group: 'new',
    condition: 'new',
    basePrice: 8990000,
    originalPrice: 10490000,
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
    colors: ['Xanh Iceblue', 'Xanh Đen Navy', 'Tím Lilac'],
    storageVariants: [
      { capacity: '8GB/128GB', priceDiff: 0 },
      { capacity: '8GB/256GB', priceDiff: 800000 }
    ],
    chip: 'Exynos 1480 GPU AMD Xclipse',
    ram: '8 GB',
    storage: '128 GB',
    screen: '6.6" Super AMOLED 120Hz',
    battery: '5.000 mAh, Sạc nhanh 25W',
    camera: '50MP OIS + 12MP + 5MP, Selfie 32MP',
    rating: 4.7,
    reviewsCount: 64,
    badgeText: 'Mới ra mắt'
  },
  {
    id: 'iphone-11-likenew',
    name: 'iPhone 11 64GB (Like New 99%)',
    brand: 'Apple',
    group: 'sale',
    condition: 'likenew',
    basePrice: 5990000,
    originalPrice: 7290000,
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=800&q=80',
    colors: ['Đen Black', 'Trắng White', 'Tím Purple', 'Xanh Mint'],
    storageVariants: [
      { capacity: '64GB', priceDiff: 0 },
      { capacity: '128GB', priceDiff: 1100000 }
    ],
    chip: 'Apple A13 Bionic',
    ram: '4 GB',
    storage: '64 GB',
    screen: '6.1" Liquid Retina IPS LCD',
    battery: '3.110 mAh, Hỗ trợ sạc 18W',
    camera: 'Kép 12MP Góc rộng & Siêu rộng',
    rating: 4.7,
    reviewsCount: 220,
    badgeText: 'Giá sinh viên'
  },
  {
    id: 'xiaomi-poco-x6-pro',
    name: 'POCO X6 Pro 5G 8GB/256GB',
    brand: 'Xiaomi',
    group: 'hot',
    condition: 'new',
    basePrice: 8490000,
    originalPrice: 9990000,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02560?auto=format&fit=crop&w=800&q=80',
    colors: ['Vàng POCO Yellow', 'Đen Black', 'Xám Grey'],
    storageVariants: [
      { capacity: '8GB/256GB', priceDiff: 0 },
      { capacity: '12GB/512GB', priceDiff: 1200000 }
    ],
    chip: 'Dimensity 8300-Ultra (4nm)',
    ram: '8 GB',
    storage: '256 GB',
    screen: '6.67" Flow AMOLED 1.5K 120Hz',
    battery: '5.000 mAh, Sạc Turbo 67W',
    camera: '64MP OIS + 8MP + 2MP Macro',
    rating: 4.9,
    reviewsCount: 112,
    badgeText: 'Chiến game đỉnh'
  },
  {
    id: 'oppo-reno11-f',
    name: 'OPPO Reno11 F 5G 8GB/256GB',
    brand: 'OPPO',
    group: 'new',
    condition: 'new',
    basePrice: 7690000,
    originalPrice: 8990000,
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
    colors: ['Xanh Đại Dương', 'Xanh Lá Cọ', 'Tím San Hô'],
    storageVariants: [
      { capacity: '8GB/256GB', priceDiff: 0 }
    ],
    chip: 'Dimensity 7050 5G',
    ram: '8 GB',
    storage: '256 GB',
    screen: '6.7" AMOLED FHD+ 120Hz',
    battery: '5.000 mAh, Sạc nhanh 67W',
    camera: '64MP Chân dung + 8MP + 2MP',
    rating: 4.6,
    reviewsCount: 42,
    badgeText: 'Chuyên gia chân dung'
  },
  {
    id: 'samsung-galaxy-a15',
    name: 'Samsung Galaxy A15 LTE 128GB',
    brand: 'Samsung',
    group: 'sale',
    condition: 'new',
    basePrice: 3890000,
    originalPrice: 4690000,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80',
    colors: ['Xanh Lơ', 'Đen Bản Lĩnh', 'Vàng Cá Tính'],
    storageVariants: [
      { capacity: '8GB/128GB', priceDiff: 0 },
      { capacity: '8GB/256GB', priceDiff: 500000 }
    ],
    chip: 'Helio G99 8 nhân',
    ram: '8 GB',
    storage: '128 GB',
    screen: '6.5" Super AMOLED 90Hz',
    battery: '5.000 mAh, Sạc 25W',
    camera: '50MP + 5MP + 2MP',
    rating: 4.6,
    reviewsCount: 77,
    badgeText: 'Khuyến mãi sốc'
  },
  {
    id: 'realme-11',
    name: 'Realme 11 4G 8GB/128GB',
    brand: 'Realme',
    group: 'sale',
    condition: 'new',
    basePrice: 4790000,
    originalPrice: 5990000,
    image: 'https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&w=800&q=80',
    colors: ['Vàng Hào Quang', 'Đen Vinh Quang'],
    storageVariants: [
      { capacity: '8GB/128GB', priceDiff: 0 }
    ],
    chip: 'MediaTek Helio G99 (6nm)',
    ram: '8 GB',
    storage: '128 GB',
    screen: '6.4" Super AMOLED 90Hz',
    battery: '5.000 mAh, Sạc SuperVOOC 67W',
    camera: '108MP ProLight Siêu Nét',
    rating: 4.5,
    reviewsCount: 39,
    badgeText: 'Giảm 1.200.000đ'
  }
];

const SHOWROOMS = [
  {
    id: 1,
    name: 'Showroom 1 - Quận 10, TP.HCM',
    address: '123 Đường Ba Tháng Hai, Phường 11, Quận 10, TP.HCM',
    lat: 10.7719,
    lng: 106.6717,
    phone: '1800 6868'
  },
  {
    id: 2,
    name: 'Showroom 2 - Cầu Giấy, Hà Nội',
    address: '456 Đường Cầu Giấy, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội',
    lat: 21.0345,
    lng: 105.7952,
    phone: '1900 6886'
  },
  {
    id: 3,
    name: 'Showroom 3 - Làng Đại Học, TP. Thủ Đức',
    address: 'Khu Đô Thị ĐHQG, Phường Linh Trung, TP. Thủ Đức, TP.HCM',
    lat: 10.8700,
    lng: 106.8030,
    phone: '0909 123 456'
  }
];

let cart = [];
let filters = {
  group: 'all',
  brand: 'Tất cả',
  condition: 'all',
  price: 'all',
  sort: 'default',
  search: ''
};

let currentSlide = 0;
let slideInterval = null;
let selectedProduct = null;
let currentDetailColor = '';
let currentDetailStorageVariant = null;
let voucherDiscount = 0;

function formatVND(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const text = document.getElementById('toastText');
  if (!toast || !text) return;
  text.innerText = message;
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 2600);
}

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem('khai_mobile_cart');
    if (raw) {
      cart = JSON.parse(raw);
    }
  } catch (err) {
    cart = [];
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem('khai_mobile_cart', JSON.stringify(cart));
  } catch (err) {}
}

function initSlider() {
  const slides = document.querySelectorAll('.slider-slide');
  const dots = document.querySelectorAll('.slider-dot');
  if (!slides.length) return;

  function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides.forEach((s, idx) => {
      if (idx === currentSlide) {
        s.classList.remove('opacity-0', 'pointer-events-none');
        s.classList.add('opacity-100', 'z-10');
      } else {
        s.classList.remove('opacity-100', 'z-10');
        s.classList.add('opacity-0', 'pointer-events-none');
      }
    });

    dots.forEach((d, idx) => {
      if (idx === currentSlide) {
        d.classList.remove('bg-white/40');
        d.classList.add('bg-white', 'w-8');
      } else {
        d.classList.remove('bg-white', 'w-8');
        d.classList.add('bg-white/40', 'w-2.5');
      }
    });
  }

  function startAutoSlide() {
    stopAutoSlide();
    slideInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 4500);
  }

  function stopAutoSlide() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  const prevBtn = document.getElementById('sliderPrevBtn');
  const nextBtn = document.getElementById('sliderNextBtn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(currentSlide - 1);
      startAutoSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(currentSlide + 1);
      startAutoSlide();
    });
  }

  dots.forEach(d => {
    d.addEventListener('click', () => {
      const idx = parseInt(d.dataset.index, 10);
      showSlide(idx);
      startAutoSlide();
    });
  });

  const sliderWrap = document.getElementById('mainSliderContainer');
  if (sliderWrap) {
    sliderWrap.addEventListener('mouseenter', stopAutoSlide);
    sliderWrap.addEventListener('mouseleave', startAutoSlide);
  }

  showSlide(0);
  startAutoSlide();
}

function initCountdown() {
  const hoursEl = document.getElementById('cdHours');
  const minsEl = document.getElementById('cdMins');
  const secsEl = document.getElementById('cdSecs');
  if (!hoursEl || !minsEl || !secsEl) return;

  const targetDate = new Date();
  targetDate.setHours(23, 59, 59, 999);

  function update() {
    const now = new Date();
    let diff = targetDate.getTime() - now.getTime();
    if (diff <= 0) {
      diff = 24 * 60 * 60 * 1000;
    }

    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    hoursEl.innerText = h.toString().padStart(2, '0');
    minsEl.innerText = m.toString().padStart(2, '0');
    secsEl.innerText = s.toString().padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

function initMediaControls() {
  const video = document.getElementById('promoVideo');
  const playBtn = document.getElementById('videoPlayToggleBtn');
  const muteBtn = document.getElementById('videoMuteToggleBtn');
  const playIcon = document.getElementById('videoPlayIcon');
  const pauseIcon = document.getElementById('videoPauseIcon');
  if (!video || !playBtn) return;

  playBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      if (playIcon) playIcon.classList.add('hidden');
      if (pauseIcon) pauseIcon.classList.remove('hidden');
    } else {
      video.pause();
      if (playIcon) playIcon.classList.remove('hidden');
      if (pauseIcon) pauseIcon.classList.add('hidden');
    }
  });

  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      muteBtn.innerText = video.muted ? 'Bật âm thanh' : 'Tắt tiếng';
    });
  }
}

function initGeolocation() {
  const geoBtn = document.getElementById('geoFindBtn');
  const geoResult = document.getElementById('geoResultBox');
  if (!geoBtn || !geoResult) return;

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(1);
  }

  geoBtn.addEventListener('click', () => {
    geoResult.innerHTML = `
      <div class="flex items-center gap-2 text-indigo-600 font-bold text-xs py-2">
        <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
        <span>Đang định vị toạ độ của bạn qua GPS...</span>
      </div>
    `;

    if (!navigator.geolocation) {
      geoResult.innerHTML = `
        <div class="p-3 bg-red-50 text-red-600 rounded-xl text-xs font-semibold">
          Trình duyệt của bạn không hỗ trợ Geolocation. Showroom gợi ý: 123 Ba Tháng Hai, Quận 10, TP.HCM
        </div>
      `;
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userLat = pos.coords.latitude;
        const userLng = pos.coords.longitude;

        let closest = null;
        let minDistance = Infinity;

        SHOWROOMS.forEach(store => {
          const d = parseFloat(calculateDistance(userLat, userLng, store.lat, store.lng));
          if (d < minDistance) {
            minDistance = d;
            closest = { ...store, distance: d };
          }
        });

        geoResult.innerHTML = `
          <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-left space-y-1.5 animate-fade-in">
            <div class="flex items-center justify-between">
              <span class="text-xs font-extrabold text-emerald-800 uppercase tracking-wide">Showroom gần bạn nhất:</span>
              <span class="text-xs font-bold bg-emerald-200/60 text-emerald-900 px-2 py-0.5 rounded-full">Cách ~${closest.distance} km</span>
            </div>
            <h4 class="font-bold text-slate-900 text-sm">${closest.name}</h4>
            <p class="text-xs text-slate-600">${closest.address}</p>
            <div class="pt-2 flex items-center justify-between text-xs">
              <span class="text-slate-500">Hotline: <strong class="text-indigo-600">${closest.phone}</strong></span>
              <a href="https://maps.google.com/?q=${closest.lat},${closest.lng}" target="_blank" class="text-indigo-600 font-bold hover:underline flex items-center gap-1">
                Xem đường đi
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </div>
        `;
      },
      (err) => {
        geoResult.innerHTML = `
          <div class="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 text-left space-y-1">
            <p class="font-bold">Không thể lấy toạ độ tự động (Quyền truy cập vị trí chưa được cấp).</p>
            <p>Showroom trung tâm gợi ý: <strong>123 Ba Tháng Hai, Quận 10, TP.HCM</strong> (Hotline: 1800 6868).</p>
          </div>
        `;
      },
      { timeout: 7000 }
    );
  });
}

function getFilteredProducts() {
  return PRODUCTS.filter(p => {
    if (filters.group !== 'all' && p.group !== filters.group) return false;
    if (filters.brand !== 'Tất cả' && p.brand !== filters.brand) return false;
    if (filters.condition !== 'all' && p.condition !== filters.condition) return false;
    if (filters.price === 'under-5m' && p.basePrice >= 5000000) return false;
    if (filters.price === '5m-10m' && (p.basePrice < 5000000 || p.basePrice > 10000000)) return false;
    if (filters.price === '10m-18m' && (p.basePrice < 10000000 || p.basePrice > 18000000)) return false;
    if (filters.price === 'over-18m' && p.basePrice <= 18000000) return false;

    if (filters.search) {
      const q = filters.search.toLowerCase().trim();
      const matchName = p.name.toLowerCase().includes(q);
      const matchBrand = p.brand.toLowerCase().includes(q);
      const matchChip = p.chip.toLowerCase().includes(q);
      if (!matchName && !matchBrand && !matchChip) return false;
    }
    return true;
  }).sort((a, b) => {
    if (filters.sort === 'price-asc') return a.basePrice - b.basePrice;
    if (filters.sort === 'price-desc') return b.basePrice - a.basePrice;
    if (filters.sort === 'rating') return b.rating - a.rating;
    return 0;
  });
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  const countEl = document.getElementById('productCount');
  if (!grid) return;

  const list = getFilteredProducts();
  if (countEl) countEl.innerText = list.length;

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-slate-200">
        <p class="text-sm font-bold text-slate-800 mb-1">Không tìm thấy sản phẩm phù hợp</p>
        <p class="text-xs text-slate-400 mb-4">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
        <button onclick="resetFilters()" class="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-bold hover:bg-indigo-100 transition">Xem tất cả sản phẩm</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map(item => {
    const discount = Math.round(((item.originalPrice - item.basePrice) / item.originalPrice) * 100);
    return `
      <div class="product-card group relative bg-white rounded-2xl border border-slate-200/90 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
        <div class="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 flex-wrap">
          ${item.condition === 'likenew' 
            ? '<span class="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">Like New 99%</span>'
            : '<span class="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">Mới 100% Seal</span>'
          }
          ${item.badgeText ? `<span class="text-[11px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-md">${item.badgeText}</span>` : ''}
        </div>

        <div onclick="openDetailModal('${item.id}')" class="relative pt-[75%] bg-slate-50 cursor-pointer overflow-hidden flex items-center justify-center p-5">
          <img 
            src="${item.image}" 
            alt="${item.name}" 
            class="product-img absolute inset-0 w-full h-full object-contain p-5"
            onerror="this.src='https://placehold.co/400x400/f8fafc/4f46e5?text=Khai-Mobile'"
          />
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs text-slate-500 mb-1.5">
              <span class="font-bold uppercase tracking-wider text-slate-400">${item.brand}</span>
              <div class="flex items-center gap-1 text-slate-600">
                <span class="text-amber-500 font-bold">★ ${item.rating}</span>
                <span class="text-slate-400">(${item.reviewsCount})</span>
              </div>
            </div>

            <h3 onclick="openDetailModal('${item.id}')" class="font-bold text-slate-900 text-base hover:text-indigo-600 transition-colors cursor-pointer line-clamp-1 mb-2.5" title="${item.name}">
              ${item.name}
            </h3>

            <div class="grid grid-cols-2 gap-1.5 text-xs text-slate-600 mb-4 bg-slate-50 p-2.5 rounded-xl group-hover:bg-indigo-50/40 transition-colors">
              <div class="truncate">⚙️ ${item.chip.split('(')[0]}</div>
              <div class="truncate">💾 ${item.ram} · ${item.storage}</div>
              <div class="truncate col-span-2">🔋 ${item.battery.split(',')[0]}</div>
            </div>
          </div>

          <div class="pt-3 border-t border-slate-100">
            <div class="flex items-baseline gap-2 mb-2">
              <span class="text-lg sm:text-xl font-black text-indigo-700 tabular-nums">${formatVND(item.basePrice)}</span>
              ${item.originalPrice > item.basePrice ? `<span class="text-xs text-slate-400 line-through tabular-nums">${formatVND(item.originalPrice)}</span>` : ''}
              ${discount > 0 ? `<span class="text-xs font-bold text-red-600 tabular-nums">-${discount}%</span>` : ''}
            </div>

            <div class="grid grid-cols-2 gap-2 mt-2">
              <button onclick="openDetailModal('${item.id}')" class="px-3 py-2.5 text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition text-center cursor-pointer">
                Chi tiết
              </button>
              <button onclick="quickAddToCart('${item.id}')" class="px-3 py-2.5 text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition text-center cursor-pointer shadow-md shadow-indigo-100">
                Thêm giỏ
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openDetailModal(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  selectedProduct = p;
  currentDetailColor = p.colors[0];
  currentDetailStorageVariant = p.storageVariants[0];

  const modal = document.getElementById('detailModal');
  const body = document.getElementById('detailModalBody');
  if (!modal || !body) return;

  const finalPrice = p.basePrice + currentDetailStorageVariant.priceDiff;

  body.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
      <div class="bg-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center border border-slate-100">
        <img src="${p.image}" alt="${p.name}" class="max-h-72 object-contain" onerror="this.src='https://placehold.co/400x400/f8fafc/4f46e5?text=Khai-Mobile'" />
        <div class="mt-4 text-center">
          <span class="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">
            Bảo hành 12 tháng - 1 đổi 1 trong 30 ngày
          </span>
        </div>
      </div>

      <div class="flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 mb-1.5">
            <span class="uppercase text-xs font-bold text-indigo-600 tracking-wider">${p.brand}</span>
            <span class="text-xs text-amber-500 font-bold">★ ${p.rating} (${p.reviewsCount} đánh giá)</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-slate-900 mb-2 leading-tight">${p.name}</h2>

          <div class="flex items-baseline gap-3 mb-4">
            <span id="detailPriceDisplay" class="text-2xl font-extrabold text-indigo-600 tabular-nums">${formatVND(finalPrice)}</span>
            <span class="text-xs text-slate-400 line-through tabular-nums">${formatVND(p.originalPrice)}</span>
          </div>

          <div class="mb-4">
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Màu sắc lựa chọn:</label>
            <div class="flex flex-wrap gap-2" id="detailColorList">
              ${p.colors.map((c, i) => `
                <button type="button" onclick="selectDetailColor('${c}', this)" class="detail-color-btn px-3 py-1.5 text-xs font-semibold rounded-lg border transition ${i === 0 ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-bold' : 'border-slate-200 text-slate-700 hover:bg-slate-50'}">
                  ${c}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="mb-4">
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Dung lượng bộ nhớ:</label>
            <div class="flex flex-wrap gap-2" id="detailStorageList">
              ${p.storageVariants.map((sv, i) => `
                <button type="button" onclick="selectDetailStorage('${sv.capacity}', ${sv.priceDiff}, this)" class="detail-storage-btn px-3 py-1.5 text-xs font-semibold rounded-lg border transition ${i === 0 ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-bold' : 'border-slate-200 text-slate-700 hover:bg-slate-50'}">
                  ${sv.capacity} ${sv.priceDiff > 0 ? `(+${formatVND(sv.priceDiff)})` : ''}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="bg-slate-50 rounded-xl p-3.5 text-xs space-y-1.5 text-slate-600 mb-6 border border-slate-100">
            <div class="flex justify-between"><span>Màn hình:</span> <strong class="text-slate-800">${p.screen}</strong></div>
            <div class="flex justify-between"><span>Vi xử lý:</span> <strong class="text-slate-800">${p.chip}</strong></div>
            <div class="flex justify-between"><span>RAM / ROM:</span> <strong class="text-slate-800">${p.ram} / ${p.storage}</strong></div>
            <div class="flex justify-between"><span>Camera:</span> <strong class="text-slate-800">${p.camera}</strong></div>
            <div class="flex justify-between"><span>Pin / Sạc:</span> <strong class="text-slate-800">${p.battery}</strong></div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
          <button onclick="addSelectedToCart(false)" class="w-full py-3 bg-slate-900 hover:bg-black text-white text-xs font-bold rounded-xl transition cursor-pointer">
            Thêm vào giỏ
          </button>
          <button onclick="addSelectedToCart(true)" class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition shadow-lg shadow-indigo-200 cursor-pointer">
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeDetailModal() {
  const modal = document.getElementById('detailModal');
  if (modal) modal.classList.add('hidden');
}

function selectDetailColor(color, btn) {
  currentDetailColor = color;
  document.querySelectorAll('#detailColorList .detail-color-btn').forEach(b => {
    b.className = 'detail-color-btn px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition';
  });
  btn.className = 'detail-color-btn px-3 py-1.5 text-xs font-semibold rounded-lg border border-indigo-600 bg-indigo-50 text-indigo-700 font-bold transition';
}

function selectDetailStorage(capacity, priceDiff, btn) {
  currentDetailStorageVariant = { capacity, priceDiff };
  document.querySelectorAll('#detailStorageList .detail-storage-btn').forEach(b => {
    b.className = 'detail-storage-btn px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition';
  });
  btn.className = 'detail-storage-btn px-3 py-1.5 text-xs font-semibold rounded-lg border border-indigo-600 bg-indigo-50 text-indigo-700 font-bold transition';

  const finalPrice = selectedProduct.basePrice + priceDiff;
  const priceDisplay = document.getElementById('detailPriceDisplay');
  if (priceDisplay) priceDisplay.innerText = formatVND(finalPrice);
}

function quickAddToCart(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  addItemToCart(p, p.colors[0], p.storageVariants[0].capacity, p.basePrice);
  showToast(`Đã thêm ${p.name} vào giỏ hàng`);
}

function addSelectedToCart(goToCheckout) {
  if (!selectedProduct) return;
  const price = selectedProduct.basePrice + currentDetailStorageVariant.priceDiff;
  addItemToCart(selectedProduct, currentDetailColor, currentDetailStorageVariant.capacity, price);
  closeDetailModal();
  if (goToCheckout) {
    openCheckoutModal();
  } else {
    showToast(`Đã thêm ${selectedProduct.name} vào giỏ hàng`);
    openCartDrawer();
  }
}

function addItemToCart(product, color, capacity, price) {
  const itemId = `${product.id}-${color}-${capacity}`;
  const existing = cart.find(item => item.id === itemId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: itemId,
      productId: product.id,
      name: product.name,
      price: price,
      image: product.image,
      color: color,
      capacity: capacity,
      quantity: 1
    });
  }
  saveCartToStorage();
  updateCartBadge();
  renderCartDrawer();
}

function updateCartBadge() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.innerText = totalCount;
    if (totalCount > 0) {
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }
}

function openCartDrawer() {
  renderCartDrawer();
  const drawer = document.getElementById('cartDrawer');
  if (drawer) drawer.classList.remove('hidden');
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  if (drawer) drawer.classList.add('hidden');
}

function renderCartDrawer() {
  const container = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const discountEl = document.getElementById('cartDiscountAmount');
  const finalEl = document.getElementById('cartFinalTotal');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center p-6 text-center text-slate-500">
        <svg class="w-12 h-12 text-slate-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
        <p class="font-bold text-slate-700 text-sm">Giỏ hàng của bạn đang trống</p>
        <p class="text-xs text-slate-400 mt-1">Hãy chọn sản phẩm bạn yêu thích nhé!</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.innerText = formatVND(0);
    if (discountEl) discountEl.innerText = '-0 ₫';
    if (finalEl) finalEl.innerText = formatVND(0);
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const finalTotal = Math.max(0, subtotal - voucherDiscount);

  if (subtotalEl) subtotalEl.innerText = formatVND(subtotal);
  if (discountEl) discountEl.innerText = '-' + formatVND(voucherDiscount);
  if (finalEl) finalEl.innerText = formatVND(finalTotal);

  container.innerHTML = cart.map((item, index) => `
    <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
      <img src="${item.image}" alt="${item.name}" class="w-14 h-14 object-contain bg-white rounded-lg p-1 border border-slate-200" onerror="this.src='https://placehold.co/100x100/f8fafc/4f46e5?text=KM'" />
      <div class="flex-1 min-w-0">
        <h4 class="text-xs font-bold text-slate-900 truncate">${item.name}</h4>
        <div class="text-[11px] text-slate-500">${item.color} · ${item.capacity}</div>
        <div class="text-xs font-bold text-indigo-600 mt-0.5">${formatVND(item.price)}</div>
      </div>
      <div class="flex flex-col items-end gap-1.5">
        <button onclick="removeFromCart(${index})" class="text-slate-400 hover:text-red-500 text-xs cursor-pointer">✕</button>
        <div class="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden">
          <button onclick="changeQty(${index}, -1)" class="px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-100 cursor-pointer">-</button>
          <span class="px-2 text-xs font-bold text-slate-800">${item.quantity}</span>
          <button onclick="changeQty(${index}, 1)" class="px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-100 cursor-pointer">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

function changeQty(index, delta) {
  if (cart[index]) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCartToStorage();
    updateCartBadge();
    renderCartDrawer();
  }
}

function removeFromCart(index) {
  if (cart[index]) {
    cart.splice(index, 1);
    saveCartToStorage();
    updateCartBadge();
    renderCartDrawer();
    showToast('Đã xóa sản phẩm khỏi giỏ hàng');
  }
}

function applyCoupon() {
  const code = (document.getElementById('couponInput')?.value || '').trim().toUpperCase();
  const msgEl = document.getElementById('couponMessage');
  if (code === 'KHAIMOBILE' || code === 'SINHVIEN' || code === 'FPT2026') {
    voucherDiscount = 200000;
    if (msgEl) {
      msgEl.innerText = `Áp dụng mã ${code} thành công (-200.000đ)`;
      msgEl.className = 'text-xs text-emerald-600 font-bold block';
    }
    showToast(`Đã áp dụng mã giảm giá 200.000đ`);
  } else {
    voucherDiscount = 0;
    if (msgEl) {
      msgEl.innerText = 'Mã voucher không hợp lệ (Thử: KHAIMOBILE)';
      msgEl.className = 'text-xs text-red-500 font-medium block';
    }
  }
  renderCartDrawer();
}

function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Giỏ hàng đang trống!');
    return;
  }
  closeCartDrawer();
  calculateCheckout();
  const modal = document.getElementById('checkoutModal');
  if (modal) modal.classList.remove('hidden');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  if (modal) modal.classList.add('hidden');
}

function calculateCheckout() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const finalTotal = Math.max(0, subtotal - voucherDiscount);

  const rawEl = document.getElementById('checkoutRawTotal');
  const discountEl = document.getElementById('checkoutDiscount');
  const finalEl = document.getElementById('checkoutFinalTotal');

  if (rawEl) rawEl.innerText = formatVND(subtotal);
  if (discountEl) discountEl.innerText = '-' + formatVND(voucherDiscount);
  if (finalEl) finalEl.innerText = formatVND(finalTotal);

  const qrImg = document.getElementById('vietQrImage');
  if (qrImg) {
    qrImg.src = `https://api.vietqr.io/image/970422-0909123456-compact2.jpg?amount=${Math.round(finalTotal)}&addInfo=KHAI-MOBILE%20DH${Date.now().toString().slice(-4)}`;
  }
}

function validateField(input, errorEl, validatorFn, errorMsg) {
  const val = input.value.trim();
  const isValid = validatorFn(val);
  if (!isValid) {
    errorEl.innerText = errorMsg;
    errorEl.classList.remove('hidden');
    input.classList.add('border-red-500');
    return false;
  } else {
    errorEl.innerText = '';
    errorEl.classList.add('hidden');
    input.classList.remove('border-red-500');
    return true;
  }
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById('customerName');
  const phoneInput = document.getElementById('customerPhone');
  const emailInput = document.getElementById('customerEmail');
  const addressInput = document.getElementById('customerAddress');

  const nameError = document.getElementById('customerNameError');
  const phoneError = document.getElementById('customerPhoneError');
  const emailError = document.getElementById('customerEmailError');
  const addressError = document.getElementById('customerAddressError');

  const isNameValid = validateField(
    nameInput,
    nameError,
    val => val.length >= 3,
    'Họ tên không được để trống và phải từ 3 ký tự'
  );

  const isPhoneValid = validateField(
    phoneInput,
    phoneError,
    val => /^(0[3|5|7|8|9])+([0-9]{8})$/.test(val),
    'Số điện thoại không đúng định dạng (ví dụ: 0909123456)'
  );

  const isEmailValid = validateField(
    emailInput,
    emailError,
    val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    'Email không hợp lệ (ví dụ: khachhang@gmail.com)'
  );

  const isAddressValid = validateField(
    addressInput,
    addressError,
    val => val.length >= 6,
    'Địa chỉ nhận hàng không được để trống và phải chi tiết'
  );

  if (!isNameValid || !isPhoneValid || !isEmailValid || !isAddressValid) {
    return;
  }

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();
  const address = addressInput.value.trim();
  const note = document.getElementById('orderNote')?.value.trim() || 'Không có ghi chú';

  closeCheckoutModal();

  const successModal = document.getElementById('orderSuccessModal');
  const successDetails = document.getElementById('successDetails');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const finalTotal = Math.max(0, subtotal - voucherDiscount);

  if (successDetails) {
    successDetails.innerHTML = `
      <p><strong>Người nhận:</strong> ${name}</p>
      <p><strong>Số điện thoại:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Địa chỉ nhận hàng:</strong> ${address}</p>
      <p><strong>Ghi chú:</strong> ${note}</p>
      <p class="mt-2 pt-2 border-t border-slate-200 text-indigo-600 font-bold text-sm">
        Tổng số tiền thanh toán: ${formatVND(finalTotal)}
      </p>
    `;
  }

  cart = [];
  voucherDiscount = 0;
  saveCartToStorage();
  updateCartBadge();
  if (successModal) successModal.classList.remove('hidden');
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  const emailInput = document.getElementById('newsletterEmail');
  const errorEl = document.getElementById('newsletterError');
  const successEl = document.getElementById('newsletterSuccess');
  if (!emailInput || !errorEl || !successEl) return;

  const emailVal = emailInput.value.trim();
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);

  if (!isValid) {
    errorEl.innerText = 'Vui lòng nhập địa chỉ email hợp lệ';
    errorEl.classList.remove('hidden');
    successEl.classList.add('hidden');
    return;
  }

  errorEl.classList.add('hidden');
  successEl.innerText = 'Đăng ký nhận tin thành công! Mã voucher KHAIMOBILE đã gửi đến email của bạn.';
  successEl.classList.remove('hidden');
  emailInput.value = '';
}

function resetFilters() {
  filters = {
    group: 'all',
    brand: 'Tất cả',
    condition: 'all',
    price: 'all',
    sort: 'default',
    search: ''
  };

  const gSearch = document.getElementById('globalSearch');
  if (gSearch) gSearch.value = '';

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.value = 'default';

  document.querySelectorAll('.group-filter-btn').forEach(btn => {
    btn.className = btn.dataset.group === 'all'
      ? 'group-filter-btn px-4 py-2 text-xs sm:text-sm font-bold rounded-xl border bg-indigo-600 text-white'
      : 'group-filter-btn px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50';
  });

  document.querySelectorAll('.brand-filter-btn').forEach(btn => {
    btn.className = btn.dataset.brand === 'Tất cả'
      ? 'brand-filter-btn px-4 py-2 text-xs sm:text-sm font-bold rounded-xl border bg-indigo-50 border-indigo-300 text-indigo-700'
      : 'brand-filter-btn px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50';
  });

  document.querySelectorAll('.condition-filter-btn').forEach(btn => {
    btn.className = btn.dataset.condition === 'all'
      ? 'condition-filter-btn px-4 py-2 text-xs sm:text-sm font-bold rounded-xl border bg-indigo-50 border-indigo-300 text-indigo-700'
      : 'condition-filter-btn px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50';
  });

  document.querySelectorAll('.price-filter-btn').forEach(btn => {
    btn.className = btn.dataset.price === 'all'
      ? 'price-filter-btn px-4 py-2 text-xs sm:text-sm font-bold rounded-xl border bg-indigo-50 border-indigo-300 text-indigo-700'
      : 'price-filter-btn px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50';
  });

  renderProducts();
}

function setupEventListeners() {
  document.querySelectorAll('.group-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.group-filter-btn').forEach(b => {
        b.className = 'group-filter-btn px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50';
      });
      btn.className = 'group-filter-btn px-4 py-2 text-xs sm:text-sm font-bold rounded-xl border bg-indigo-600 text-white';
      filters.group = btn.dataset.group;
      renderProducts();
    });
  });

  document.querySelectorAll('.brand-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.brand-filter-btn').forEach(b => {
        b.className = 'brand-filter-btn px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50';
      });
      btn.className = 'brand-filter-btn px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border bg-indigo-50 border-indigo-300 text-indigo-700';
      filters.brand = btn.dataset.brand;
      renderProducts();
    });
  });

  document.querySelectorAll('.condition-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.condition-filter-btn').forEach(b => {
        b.className = 'condition-filter-btn px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50';
      });
      btn.className = 'condition-filter-btn px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50';
      filters.condition = btn.dataset.condition;
      renderProducts();
    });
  });

  document.querySelectorAll('.price-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.price-filter-btn').forEach(b => {
        b.className = 'price-filter-btn px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50';
      });
      btn.className = 'price-filter-btn px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50';
      filters.price = btn.dataset.price;
      renderProducts();
    });
  });

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      filters.sort = e.target.value;
      renderProducts();
    });
  }

  const gSearch = document.getElementById('globalSearch');
  if (gSearch) {
    gSearch.addEventListener('input', (e) => {
      filters.search = e.target.value;
      renderProducts();
    });
  }

  document.querySelectorAll('input[name="paymentMethod"]').forEach(r => {
    r.addEventListener('change', (e) => {
      const qrBox = document.getElementById('vietQrContainer');
      if (qrBox) {
        if (e.target.value === 'qr') {
          qrBox.classList.remove('hidden');
        } else {
          qrBox.classList.add('hidden');
        }
      }
    });
  });

  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);
  }

  const newsForm = document.getElementById('newsletterForm');
  if (newsForm) {
    newsForm.addEventListener('submit', handleNewsletterSubmit);
  }

  const detailModal = document.getElementById('detailModal');
  if (detailModal) {
    detailModal.addEventListener('click', closeDetailModal);
  }

  const cartDrawer = document.getElementById('cartDrawer');
  if (cartDrawer) {
    cartDrawer.addEventListener('click', closeCartDrawer);
  }
}

function initApp() {
  loadCartFromStorage();
  renderProducts();
  updateCartBadge();
  initSlider();
  initCountdown();
  initMediaControls();
  initGeolocation();
  setupEventListeners();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

window.openDetailModal = openDetailModal;
window.closeDetailModal = closeDetailModal;
window.selectDetailColor = selectDetailColor;
window.selectDetailStorage = selectDetailStorage;
window.quickAddToCart = quickAddToCart;
window.addSelectedToCart = addSelectedToCart;
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.removeFromCart = removeFromCart;
window.changeQty = changeQty;
window.applyCoupon = applyCoupon;
window.openCheckoutModal = openCheckoutModal;
window.closeCheckoutModal = closeCheckoutModal;
window.resetFilters = resetFilters;
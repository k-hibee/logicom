/**
 * ロジコムグループ - Main JavaScript (Universal Version)
 * GSAP Animations & Truck Road Animation
 */

// GSAPプラグインの登録
gsap.registerPlugin(ScrollTrigger);

/**
 * 1. ページ読み込み時のメイン初期化
 */
document.addEventListener('DOMContentLoaded', async () => {
  // 共通パーツ（ヘッダー・フッター）の読み込み
  await loadCommonParts();
  
  // 共通機能の初期化
  initLoading();
  initSmoothScroll();
  initHoverEffects();

  // ページに応じた機能の振り分け
  // index.html にのみ存在する要素（truck-animation等）がある場合のみ実行
  if (document.getElementById('truck-animation')) {
    initNews(); // ニュース取得
  }
});

/**
 * 2. 共通パーツのフェッチ
 * 現在のページの深さを自動判定し、適切なパスで取得・パス補正を行います。
 */
async function loadCommonParts() {
  const headerElem = document.getElementById('header-include');
  const footerElem = document.getElementById('footer-include');

  // --- 階層判定ロジック ---
  // GitHub Pages (/logicom/) か 独自ドメイン (/) かを自動で判別してルートまでのパスを作成
  const pathArray = window.location.pathname.split('/').filter(p => p !== "");
  const isGitHub = window.location.hostname.includes('github.io');
  
  // GitHub Pagesの場合はリポジトリ名(/logicom/)を無視して深さを計算
  const actualDepth = isGitHub ? pathArray.length - 1 : pathArray.length;
  
  // 深さに応じて "../" を生成（トップなら空文字、1段下なら "../"）
  const relPath = actualDepth > 0 ? "../".repeat(actualDepth) : "./";

  try {
    // Headerの読み込み
    if (headerElem) {
      const hRes = await fetch(`${relPath}parts/header.html`);
      if (hRes.ok) {
        let hHtml = await hRes.text();
        headerElem.innerHTML = hHtml;
        // 読み込み後にパスを補正
        adjustPaths(headerElem, relPath);
        initMobileMenu(); 
      }
    }

    // Footerの読み込み
    if (footerElem) {
      const fRes = await fetch(`${relPath}parts/footer.html`);
      if (fRes.ok) {
        let fHtml = await fRes.text();
        footerElem.innerHTML = fHtml;
        // 読み込み後にパスを補正
        adjustPaths(footerElem, relPath);
      }
    }
  } catch (error) {
    console.error("共通パーツの読み込みに失敗しました:", error);
  }
}

/**
 * 共通パーツ内の画像・リンクパスを現在の階層に合わせて強制補正する関数
 */
function adjustPaths(container, relPath) {
  // 画像のsrc属性を補正
  container.querySelectorAll('img').forEach(img => {
    const src = img.getAttribute('src');
    // 外部URL(http)や既に調整済みのパス以外を対象に relPath を付与
    if (src && !src.startsWith('http') && !src.startsWith('data:')) {
      // 一旦、記述されている "../" などを削除して純粋なパスにしてから relPath をつける
      const cleanPath = src.replace(/^(\.\.\/)+/, "");
      img.src = relPath + cleanPath;
    }
  });

  // リンクのhref属性を補正
  container.querySelectorAll('a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
      const cleanPath = href.replace(/^(\.\.\/)+/, "");
      a.href = relPath + cleanPath;
    }
  });
}

/**
 * 3. モバイルメニューの制御
 */
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-list a');
  
  if (!menuToggle || !mobileMenu) return;
  
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/**
 * 4. ローディングアニメーション（ガード付き）
 */
const initLoading = () => {
  const loadingScreen = document.getElementById('loading');
  if (!loadingScreen) {
    // ローディング画面がないページ（個社ページ等）は即座にアニメーション開始
    initPageAnimations();
    return;
  }

  const loadingLogo = document.querySelector('.loading-logo');
  const loadingBar = document.querySelector('.loading-bar-inner');
  
  const tl = gsap.timeline({
    onComplete: () => {
      gsap.to(loadingScreen, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          loadingScreen.style.display = 'none';
          initPageAnimations();
        }
      });
    }
  });
  
  if (loadingLogo) {
    tl.to(loadingLogo, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
  }
  if (loadingBar) {
    tl.to(loadingBar, { width: '100%', duration: 1.2, ease: 'power2.inOut' }, 0.3);
  }
  if (loadingLogo) {
    tl.to(loadingLogo, { opacity: 0, y: -20, duration: 0.4, ease: 'power3.in' }, '+=0.2');
  }
};

/**
 * 5. ページ全体のアニメーション開始
 */
const initPageAnimations = () => {
  const header = document.querySelector('.header');
  if (header) {
    gsap.to(header, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      onStart: () => { header.style.pointerEvents = 'auto'; }
    });
  }

  // 要素が存在する場合のみ各アニメーションを実行
  if (document.getElementById('hero')) initHeroAnimations();
  if (document.getElementById('heroBalloon')) initBalloonAnimation();
  initScrollAnimations();
  if (document.getElementById('truck-animation')) initTruckAnimation();
};



const initScrollAnimations = () => {
  // 汎用的なセレクタチェック
  const targets = ['.section-title-en', '.section-title-ja', '.reveal-text', '.reveal-item', '.reveal-card'];
  targets.forEach(s => {
    gsap.utils.toArray(s).forEach(el => {
      gsap.to(el, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
      });
    });
  });
};

/**
 * 8. ニュース取得 (microCMS)
 */
async function initNews() {
  const newsList = document.getElementById('news-list');
  const featuredArea = document.getElementById('featured-area');
  if (!newsList) return;

  const SERVICE_DOMAIN = "logicom-group";
  const API_KEY = "4AMLMkODPu5ZfrKlUpHFwkmDFshWj81IAsjS";

  try {
    const response = await fetch(`https://${SERVICE_DOMAIN}.microcms.io/api/v1/news?orders=-date&limit=4`, {
      headers: { "X-MICROCMS-API-KEY": API_KEY }
    });
    if (!response.ok) return;
    const data = await response.json();
    const articles = data.contents;
    if (articles.length === 0) return;

    // 注目記事
    // 注目記事の生成部分を修正
    if (articles.length > 0 && featuredArea) {
      const first = articles[0];
      featuredArea.innerHTML = `
        <a href="./news/detail.html?id=${first.id}" class="featured-link">
          <div class="featured-image-wrapper">
            <img src="${first.thumbnail?.url || './assets/images/no-image.jpg'}" alt="">
          </div>
          <div class="featured-info">
            <div class="news-meta">
              <span class="news-date">${formatDate(first.date)}</span>
              <span class="category-tag">お知らせ</span>
            </div>
            <h3 class="featured-title">${first.title}</h3>
          </div>
        </a>`;
    }
  
    if (articles.length > 1 && newsList) {
      newsList.innerHTML = articles.slice(1).map(item => `
        <li class="news-item">
          <a href="./news/detail.html?id=${item.id}" class="news-link">
            <div class="news-meta">
              <span class="news-date">${formatDate(item.date)}</span>
              <span class="category-tag">お知らせ</span>
            </div>
            <p class="news-title-text">${item.title}</p>
          </a>
        </li>`).join('');
    }
  } catch (e) { console.error(e); }
}

function formatDate(ds) {
  const d = new Date(ds);
  return `${d.getFullYear()}/${(d.getMonth()+1).toString().padStart(2,'0')}/${d.getDate().toString().padStart(2,'0')}`;
}

/**
 * 9. その他ユーティリティ
 */
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = document.querySelector('.header')?.offsetHeight || 0;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });
};

const initHoverEffects = () => {
  gsap.utils.toArray('.btn').forEach(btn => {
    btn.addEventListener('mouseleave', () => gsap.to(btn, { x: 0, y: 0, duration: 0.5 }));
  });
};

window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
});
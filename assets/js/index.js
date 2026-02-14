/**
 * 6. トラックアニメーション関連 (クラス・初期化)
 */
class Truck {
  constructor(truckImg, delay, id) {
    this.truck = truckImg;
    this.delay = delay;
    this.id = id;
  }
  move() {
    const keyframes = [
      { transform: `translate(-70%, 0%)`},
      { transform: `translate(-70%, 150%)`},
      { transform: `translate(-70%, 300%)`},
      { transform: `translate(-70%, 450%)`},
      { transform: `translate(-70%, 520%)`},
      // カーブ
      { transform: "translate(-60%, 545%) rotate(-12deg)"},
      { transform: "translate(-45%, 575%) rotate(-25deg)"},
      { transform: "translate(-30%, 600%) rotate(-40deg)"},
      { transform: "translate(-15%, 625%) rotate(-55deg)"},
      { transform: "translate(0%, 645%) rotate(-70deg)"},
      { transform: "translate(20%, 655%) rotate(-82deg)"},
      { transform: "translate(53%, 660%) rotate(-90deg)"},
      // 右
      { transform: "translate(300%, 665%) rotate(-90deg)"},
      { transform: "translate(480%, 665%) rotate(-90deg)"},
      { transform: "translate(570%, 665%) rotate(-90deg)"},
      // カーブ
      { transform: "translate(610%, 670%) rotate(-85deg)"},
      { transform: "translate(640%, 675%) rotate(-75deg)"},
      { transform: "translate(670%, 685%) rotate(-65deg)"},
      { transform: "translate(695%, 695%) rotate(-55deg)"},
      { transform: "translate(720%, 710%) rotate(-45deg)"},
      { transform: "translate(740%, 725%) rotate(-35deg)"},
      { transform: "translate(755%, 745%) rotate(-25deg)"},
      { transform: "translate(770%, 765%) rotate(-15deg)"},
      { transform: "translate(785%, 795%)"},
      // 下
      { transform: "translate(790%, 980%)"},
      { transform: "translate(790%, 1030%)"},
      // カーブ
      { transform: "translate(790%, 1040%) rotate(10deg)"},
      { transform: "translate(780%, 1080%) rotate(20deg)"},
      { transform: "translate(770%, 1100%) rotate(30deg)"},
      { transform: "translate(760%, 1120%) rotate(40deg)"},
      { transform: "translate(750%, 1135%) rotate(45deg)"},
      { transform: "translate(730%, 1160%) rotate(60deg)"},
      { transform: "translate(700%, 1180%) rotate(70deg)"},
      { transform: "translate(670%, 1195%) rotate(80deg)"},
      { transform: "translate(640%, 1205%) rotate(90deg)"},
      // 左
      { transform: "translate(560%, 1210%) rotate(90deg)"},
      { transform: "translate(440%, 1210%) rotate(90deg)"},
      { transform: "translate(280%, 1210%) rotate(90deg)"},
      { transform: "translate(160%, 1210%) rotate(90deg)"},
      // カーブ
      { transform: "translate(60%, 1210%) rotate(80deg)" },
      { transform: "translate(35%, 1218%) rotate(70deg)" },
      { transform: "translate(12%, 1228%) rotate(60deg)" },
      { transform: "translate(-8%, 1242%) rotate(50deg)" },
      { transform: "translate(-26%, 1258%) rotate(40deg)" },
      { transform: "translate(-42%, 1278%) rotate(30deg)" },
      { transform: "translate(-55%, 1300%) rotate(20deg)" },
      { transform: "translate(-65%, 1325%) rotate(10deg)" },
      { transform: "translate(-70%, 1350%) rotate(0deg)" },
      // 下
      { transform: "translate(-70%, 1430%)"},
      { transform: "translate(-70%, 1540%)"},
      // カーブ
      { transform: "translate(-65%, 1580%) rotate(-10deg)"},
      { transform: "translate(-55%, 1610%) rotate(-20deg)"},
      { transform: "translate(-45%, 1630%) rotate(-30deg)"},
      { transform: "translate(-35%, 1650%) rotate(-40deg)"},
      { transform: "translate(-25%, 1670%) rotate(-50deg)"},
      { transform: "translate(-15%, 1695%) rotate(-60deg)"},
      { transform: "translate(0%, 1710%) rotate(-70deg)"},
      { transform: "translate(20%, 1720%) rotate(-80deg)"},
      { transform: "translate(50%, 1730%) rotate(-90deg)"},
      // 右
      { transform: "translate(300%, 1730%) rotate(-90deg)"},
      { transform: "translate(480%, 1730%) rotate(-90deg)"},
      { transform: "translate(570%, 1730%) rotate(-90deg)"},
      // カーブ
      { transform: "translate(610%, 1735%) rotate(-85deg)"},
      { transform: "translate(640%, 1740%) rotate(-75deg)"},
      { transform: "translate(670%, 1750%) rotate(-65deg)"},
      { transform: "translate(695%, 1760%) rotate(-55deg)"},
      { transform: "translate(720%, 1775%) rotate(-45deg)"},
      { transform: "translate(740%, 1790%) rotate(-35deg)"},
      { transform: "translate(755%, 1810%) rotate(-25deg)"},
      { transform: "translate(770%, 1830%) rotate(-15deg)"},
      { transform: "translate(785%, 1860%)"},
      // 下
      { transform: "translate(790%, 1960%)"},
      { transform: "translate(790%, 2060%)"},
      // カーブ
      { transform: "translate(780%, 2110%) rotate(10deg)"},
      { transform: "translate(770%, 2150%) rotate(20deg)"},
      { transform: "translate(760%, 2170%) rotate(30deg)"},
      { transform: "translate(750%, 2190%) rotate(40deg)"},
      { transform: "translate(740%, 2205%) rotate(45deg)"},
      { transform: "translate(720%, 2225%) rotate(60deg)"},
      { transform: "translate(700%, 2245%) rotate(70deg)"},
      { transform: "translate(670%, 2255%) rotate(80deg)"},
      { transform: "translate(640%, 2265%) rotate(90deg)"},
      // 左
      { transform: "translate(560%, 2270%) rotate(90deg)"},
      { transform: "translate(440%, 2270%) rotate(90deg)"},
      { transform: "translate(280%, 2270%) rotate(90deg)"},
      { transform: "translate(160%, 2270%) rotate(90deg)"},
      // カーブ
      { transform: "translate(60%, 2280%) rotate(80deg)" },
      { transform: "translate(35%, 2288%) rotate(70deg)" },
      { transform: "translate(12%, 2298%) rotate(60deg)" },
      { transform: "translate(-8%, 2312%) rotate(50deg)" },
      { transform: "translate(-26%, 2328%) rotate(40deg)" },
      { transform: "translate(-42%, 2348%) rotate(30deg)" },
      { transform: "translate(-55%, 2370%) rotate(20deg)" },
      { transform: "translate(-65%, 2395%) rotate(10deg)" },
      { transform: "translate(-70%, 2420%) rotate(0deg)" },
      // 下
      { transform: "translate(-70%, 2450%)"},
      { transform: "translate(-70%, 2670%)"},
      // カーブ
      { transform: "translate(-65%, 2690%) rotate(-10deg)"},
      { transform: "translate(-55%, 2730%) rotate(-20deg)"},
      { transform: "translate(-45%, 2750%) rotate(-30deg)"},
      { transform: "translate(-35%, 2770%) rotate(-40deg)"},
      { transform: "translate(-20%, 2790%) rotate(-45deg)"},
      { transform: "translate(10%, 2820%) rotate(-45deg)"},
      { transform: "translate(30%, 2840%) rotate(-60deg)"},
      { transform: "translate(70%, 2855%) rotate(-75deg)"},
      { transform: "translate(130%, 2870%) rotate(-90deg)"},
      // 右
      { transform: "translate(300%, 2870%) rotate(-90deg)"},
      { transform: "translate(500%, 2870%) rotate(-90deg)"},
      { transform: "translate(600%, 2870%) rotate(-90deg)"},
      { transform: "translate(700%, 2870%) rotate(-90deg)"},
      { transform: "translate(750%, 2870%) rotate(-90deg)"},
      // 駐車
      { transform: "translate(740%, 2865%) rotate(-80deg)"},
      { transform: "translate(710%, 2855%) rotate(-70deg)"},
      { transform: "translate(690%, 2840%) rotate(-55deg)"},
      { transform: "translate(670%, 2820%) rotate(-40deg)"},
      { transform: "translate(660%, 2790%) rotate(-20deg)"},
      { transform: "translate(655%, 2750%)"},
      { transform: "translate(655%, 2710%)"},
      // 停止
      { transform: "translate(655%, 2710%)"},
      { transform: "translate(655%, 2710%)"},
      { transform: "translate(655%, 2710%)"},
      { transform: "translate(655%, 2710%)"},
      // 出発（駐車スペースから左車線へ：大きく回って下のラインへ）
      { transform: "translate(655%, 2710%) rotate(0deg)"},
      { transform: "translate(670%, 2780%) rotate(30deg)"},
      { transform: "translate(700%, 2840%) rotate(60deg)"},
      { transform: "translate(730%, 2880%) rotate(80deg)"},
      { transform: "translate(740%, 2900%) rotate(90deg)"},

      // 左（一番下の直線：行きの2870%より下の2920%を走行）
      { transform: "translate(600%, 2920%) rotate(90deg)"},
      { transform: "translate(300%, 2920%) rotate(90deg)"},
      { transform: "translate(100%, 2920%) rotate(90deg)"},

      // カーブ（左下から上へ：大外回り）
      { transform: "translate(0%, 2910%) rotate(105deg)"},
      { transform: "translate(-50%, 2880%) rotate(120deg)"},
      { transform: "translate(-80%, 2840%) rotate(135deg)"},
      { transform: "translate(-100%, 2790%) rotate(150deg)"},
      { transform: "translate(-115%, 2730%) rotate(165deg)"},
      
      // 上（左端の直線：行きの-70%より左の-120%を走行）
      { transform: "translate(-120%, 2670%) rotate(180deg)"},
      { transform: "translate(-120%, 2420%) rotate(180deg)"},

      // カーブ（左から右へ：大外回り）
      { transform: "translate(-115%, 2350%) rotate(195deg)" },
      { transform: "translate(-90%, 2290%) rotate(210deg)" },
      { transform: "translate(-50%, 2250%) rotate(225deg)" },
      { transform: "translate(0%, 2230%) rotate(240deg)" },
      { transform: "translate(60%, 2220%) rotate(255deg)" },

      // 右（中央の直線：行きの2270%より上の2220%を走行）
      { transform: "translate(160%, 2220%) rotate(270deg)"},
      { transform: "translate(440%, 2220%) rotate(270deg)"},
      { transform: "translate(560%, 2220%) rotate(270deg)"},
      
      // カーブ（右から上へ：内回り）
      { transform: "translate(640%, 2215%) rotate(270deg)"},
      { transform: "translate(680%, 2205%) rotate(255deg)"},
      { transform: "translate(710%, 2185%) rotate(240deg)"},
      { transform: "translate(730%, 2155%) rotate(220deg)"},
      { transform: "translate(740%, 2110%) rotate(195deg)"},

      // 上（右端の直線：行きの790%より左の740%を走行 ※ここは前回通り）
      { transform: "translate(740%, 2060%) rotate(180deg)"},
      { transform: "translate(740%, 1960%) rotate(180deg)"},

      // カーブ（右から左へ：内回り）
      { transform: "translate(735%, 1880%) rotate(165deg)"},
      { transform: "translate(715%, 1830%) rotate(145deg)"},
      { transform: "translate(680%, 1800%) rotate(125deg)"},
      { transform: "translate(630%, 1780%) rotate(105deg)"},

      // 左（中央の直線：行きの1730%より下の1780%を走行）
      { transform: "translate(570%, 1780%) rotate(90deg)"},
      { transform: "translate(480%, 1780%) rotate(90deg)"},
      { transform: "translate(300%, 1780%) rotate(90deg)"},

      // カーブ（左から上へ：大外回り）
      { transform: "translate(100%, 1780%) rotate(90deg)"},
      { transform: "translate(0%, 1770%) rotate(105deg)"},
      { transform: "translate(-60%, 1740%) rotate(125deg)"},
      { transform: "translate(-90%, 1690%) rotate(145deg)"},
      { transform: "translate(-110%, 1630%) rotate(165deg)"},

      // 上（左端の直線：-120%）
      { transform: "translate(-120%, 1540%) rotate(180deg)"},
      { transform: "translate(-120%, 1430%) rotate(180deg)"},

      // カーブ（左から右へ：大外回り）
      { transform: "translate(-115%, 1350%) rotate(195deg)" },
      { transform: "translate(-90%, 1280%) rotate(215deg)" },
      { transform: "translate(-40%, 1230%) rotate(235deg)" },
      { transform: "translate(20%, 1190%) rotate(250deg)" },
      { transform: "translate(80%, 1165%) rotate(260deg)" },

      // 右（中央の直線：行きの1210%より上の1160%）
      { transform: "translate(160%, 1160%) rotate(270deg)"},
      { transform: "translate(280%, 1160%) rotate(270deg)"},
      { transform: "translate(440%, 1160%) rotate(270deg)"},
      { transform: "translate(560%, 1160%) rotate(270deg)"},

      // カーブ（右から上へ：内回り）
      { transform: "translate(640%, 1155%) rotate(270deg)"},
      { transform: "translate(690%, 1140%) rotate(250deg)"},
      { transform: "translate(720%, 1110%) rotate(230deg)"},
      { transform: "translate(735%, 1070%) rotate(210deg)"},
      { transform: "translate(740%, 1020%) rotate(190deg)"},

      // 上（右端の直線：740%）
      { transform: "translate(740%, 980%) rotate(180deg)"},
      { transform: "translate(740%, 900%) rotate(180deg)"},

      // カーブ（右から左へ：内回り）
      { transform: "translate(735%, 820%) rotate(165deg)"},
      { transform: "translate(710%, 770%) rotate(145deg)"},
      { transform: "translate(670%, 730%) rotate(125deg)"},
      { transform: "translate(610%, 715%) rotate(105deg)"},
      
      // 左（中央の直線：行きの665%より下の715%）
      { transform: "translate(570%, 715%) rotate(90deg)"},
      { transform: "translate(480%, 715%) rotate(90deg)"},
      { transform: "translate(300%, 715%) rotate(90deg)"},

      // カーブ（左から上へ：最後のカーブ、大外回り）
      { transform: "translate(100%, 715%) rotate(90deg)"},
      { transform: "translate(0%, 705%) rotate(105deg)"},
      { transform: "translate(-60%, 670%) rotate(125deg)"},
      { transform: "translate(-100%, 610%) rotate(145deg)"},
      { transform: "translate(-115%, 550%) rotate(165deg)"},

      // ゴール（スタート地点へ：-120%のラインで戻る）
      { transform: "translate(-120%, 520%) rotate(180deg)"},
      { transform: "translate(-120%, 300%) rotate(180deg)"},
      { transform: "translate(-120%, 0%) rotate(180deg)"},
      // 停止
      { transform: "translate(-70%, -1000%) rotate(180deg)", offset: 0.92},
    ];

    const options = { duration: 73200, delay: this.delay, iterations: Infinity };
    const animation = this.truck.animate(keyframes, options);

    // 画像切り替え処理
    const imageChangeTimes = [1000, 5800, 7000, 12500, 13500, 19500, 20000, 26200, 27000, 33000, 35000, 39500, 40500, 46500, 47300, 53200, 54000, 60200, 61200];
    const images = [
      // 0: logi フォルダ
      [
        './assets/truck/logi/logi_d2.png', './assets/truck/logi/logi_d1.png', './assets/truck/logi/logi_d0.png', 
        './assets/truck/logi/logi_d1.png', './assets/truck/logi/logi_d2.png', './assets/truck/logi/logi_d1.png', 
        './assets/truck/logi/logi_d0.png', './assets/truck/logi/logi_d1.png', './assets/truck/logi/logi_d2.png', 
        './assets/truck/logi/logi_d1.png', './assets/truck/logi/logi_d0.png', 
        './assets/truck/logi/logi_u1.png', './assets/truck/logi/logi_u2.png', './assets/truck/logi/logi_u1.png', 
        './assets/truck/logi/logi_u0.png', './assets/truck/logi/logi_u1.png', './assets/truck/logi/logi_u2.png', 
        './assets/truck/logi/logi_u1.png', './assets/truck/logi/logi_u0.png'
      ],

      // 1: lc フォルダ
      [
        './assets/truck/lc/lc_d2.png', './assets/truck/lc/lc_d1.png', './assets/truck/lc/lc_d0.png', 
        './assets/truck/lc/lc_d1.png', './assets/truck/lc/lc_d2.png', './assets/truck/lc/lc_d1.png', 
        './assets/truck/lc/lc_d0.png', './assets/truck/lc/lc_d1.png', './assets/truck/lc/lc_d2.png', 
        './assets/truck/lc/lc_d1.png', './assets/truck/lc/lc_d0.png', 
        './assets/truck/lc/lc_u1.png', './assets/truck/lc/lc_u2.png', './assets/truck/lc/lc_u1.png', 
        './assets/truck/lc/lc_u0.png', './assets/truck/lc/lc_u1.png', './assets/truck/lc/lc_u2.png', 
        './assets/truck/lc/lc_u1.png', './assets/truck/lc/lc_u0.png'
      ],

      // 2: mk フォルダ
      [
        './assets/truck/mk/mk_d2.png', './assets/truck/mk/mk_d1.png', './assets/truck/mk/mk_d0.png', 
        './assets/truck/mk/mk_d1.png', './assets/truck/mk/mk_d2.png', './assets/truck/mk/mk_d1.png', 
        './assets/truck/mk/mk_d0.png', './assets/truck/mk/mk_d1.png', './assets/truck/mk/mk_d2.png', 
        './assets/truck/mk/mk_d1.png', './assets/truck/mk/mk_d0.png', 
        './assets/truck/mk/mk_u1.png', './assets/truck/mk/mk_u2.png', './assets/truck/mk/mk_u1.png', 
        './assets/truck/mk/mk_u0.png', './assets/truck/mk/mk_u1.png', './assets/truck/mk/mk_u2.png', 
        './assets/truck/mk/mk_u1.png', './assets/truck/mk/mk_u0.png'
      ],

      // 3: nosan フォルダ
      [
        './assets/truck/nosan/nosan_d2.png', './assets/truck/nosan/nosan_d1.png', './assets/truck/nosan/nosan_d0.png', 
        './assets/truck/nosan/nosan_d1.png', './assets/truck/nosan/nosan_d2.png', './assets/truck/nosan/nosan_d1.png', 
        './assets/truck/nosan/nosan_d0.png', './assets/truck/nosan/nosan_d1.png', './assets/truck/nosan/nosan_d2.png', 
        './assets/truck/nosan/nosan_d1.png', './assets/truck/nosan/nosan_d0.png', 
        './assets/truck/nosan/nosan_u1.png', './assets/truck/nosan/nosan_u2.png', './assets/truck/nosan/nosan_u1.png', 
        './assets/truck/nosan/nosan_u0.png', './assets/truck/nosan/nosan_u1.png', './assets/truck/nosan/nosan_u2.png', 
        './assets/truck/nosan/nosan_u1.png', './assets/truck/nosan/nosan_u0.png'
      ],

      // 4: shoei フォルダ
      [
        './assets/truck/shoei/shoei_d2.png', './assets/truck/shoei/shoei_d1.png', './assets/truck/shoei/shoei_d0.png', 
        './assets/truck/shoei/shoei_d1.png', './assets/truck/shoei/shoei_d2.png', './assets/truck/shoei/shoei_d1.png', 
        './assets/truck/shoei/shoei_d0.png', './assets/truck/shoei/shoei_d1.png', './assets/truck/shoei/shoei_d2.png', 
        './assets/truck/shoei/shoei_d1.png', './assets/truck/shoei/shoei_d0.png', 
        './assets/truck/shoei/shoei_u1.png', './assets/truck/shoei/shoei_u2.png', './assets/truck/shoei/shoei_u1.png', 
        './assets/truck/shoei/shoei_u0.png', './assets/truck/shoei/shoei_u1.png', './assets/truck/shoei/shoei_u2.png', 
        './assets/truck/shoei/shoei_u1.png', './assets/truck/shoei/shoei_u0.png'
      ],

      // 5: lip フォルダ
      [
        './assets/truck/lip/lip_d2.png', './assets/truck/lip/lip_d1.png', './assets/truck/lip/lip_d0.png', 
        './assets/truck/lip/lip_d1.png', './assets/truck/lip/lip_d2.png', './assets/truck/lip/lip_d1.png', 
        './assets/truck/lip/lip_d0.png', './assets/truck/lip/lip_d1.png', './assets/truck/lip/lip_d2.png', 
        './assets/truck/lip/lip_d1.png', './assets/truck/lip/lip_d0.png', 
        './assets/truck/lip/lip_u1.png', './assets/truck/lip/lip_u2.png', './assets/truck/lip/lip_u1.png', 
        './assets/truck/lip/lip_u0.png', './assets/truck/lip/lip_u1.png', './assets/truck/lip/lip_u2.png', 
        './assets/truck/lip/lip_u1.png', './assets/truck/lip/lip_u0.png'
      ]
    ];

    const id = this.id;
    const delay = this.delay;
    let nextImageIndex = 0;
    
    const updateImage = () => {
      const currentTime = (animation.currentTime - delay) % animation.effect.getComputedTiming().duration;
      let currentIndex = 0;
      for (let i = 0; i < imageChangeTimes.length; i++) {
        if (currentTime >= imageChangeTimes[i]) currentIndex = i;
      }
      if (this.truck.src !== images[id][currentIndex]) {
        this.truck.src = images[id][currentIndex];
      }
      requestAnimationFrame(updateImage);
    };
    requestAnimationFrame(updateImage);
  }
}

const initTruckAnimation = () => {
  const trucks = [];
  for (let i = 0; i <= 5; i++) {
    const el = document.getElementById(`truck${i}`);
    if (el) trucks.push(el);
  }
  if (trucks.length < 6) return;

  const delays = [3000, -10000, -23000, -36000, -49000, -62000];
  trucks.forEach((img, i) => {
    new Truck(img, delays[i], i).move();
  });
};

/**
 * 7. 各種セクションアニメーション
 */
const initBalloonAnimation = () => {
  const balloon = document.getElementById('heroBalloon');
  if (!balloon) return;
  gsap.to(balloon, { y: -20, duration: 2, ease: 'sine.inOut', repeat: -1, yoyo: true });
};

const initHeroAnimations = () => {
  const heroTl = gsap.timeline({ delay: 0.3 });
  if (document.querySelector('.hero-title-line')) {
    heroTl.to('.hero-title-line', { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }, 0);
  }
  if (document.querySelector('.hero-subtitle')) {
    heroTl.to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 0.6);
  }
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

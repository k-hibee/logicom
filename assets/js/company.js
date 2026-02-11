document.addEventListener('DOMContentLoaded', function() {
  const viewMoreBtn = document.getElementById('view-more-btn');

  // ボタンが存在する場合のみ実行（エラー防止）
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', function() {
      const hiddenItems = document.querySelectorAll('.history-item.is-hidden');
      
      hiddenItems.forEach(item => {
        // CSSのdisplay: noneを解除して表示
        item.style.display = 'flex';
        
        // アニメーション (GSAPが読み込まれている場合)
        if (typeof gsap !== 'undefined') {
          item.style.opacity = 0;
          gsap.to(item, { opacity: 1, duration: 0.5 });
        } else {
          // GSAPがない場合のフォールバック
          item.style.opacity = 1;
        }
      });

      // ボタン自体を非表示にする
      this.style.display = 'none';
    });
  }
});
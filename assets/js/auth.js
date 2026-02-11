(function() {

  const HASH = "Y29tLWxvZ2ljb20tcHJldmlldw=="; 
  const STORAGE_KEY = "logicom_auth_success";

  // すでに現在のタブで認証済みなら何もしない
  if (sessionStorage.getItem(STORAGE_KEY) === "true") return;

  // 認証が終わるまで画面をスクロール不可にする
  document.documentElement.style.overflow = 'hidden';

  window.addEventListener('DOMContentLoaded', () => {
    const lockScreen = document.createElement('div');
    lockScreen.id = 'auth-lock-screen';
    lockScreen.innerHTML = `
      <div class="auth-box">
        <h3 style="color:#FF5C00; margin-bottom:10px;">RELATION ONLY</h3>
        <p style="font-size:14px; color:#666;">関係者専用ページです</p>
        <input type="password" id="auth-password" placeholder="Password" autofocus>
        <button id="auth-submit">ENTER</button>
      </div>
    `;
    document.body.appendChild(lockScreen);

    const checkAuth = () => {
      const input = document.getElementById('auth-password').value;
      // 入力をBase64変換して比較（逆算しない限りバレにくい）
      if (btoa("com-" + input) === HASH) { 
        sessionStorage.setItem(STORAGE_KEY, "true");
        lockScreen.remove();
        document.documentElement.style.overflow = '';
      } else {
        alert("パスワードが正しくありません。");
      }
    };

    document.getElementById('auth-submit').addEventListener('click', checkAuth);
    document.getElementById('auth-password').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') checkAuth();
    });
  });
})();
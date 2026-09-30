const BOTS = {
  "cot-nha": {
    name: "Piko Cợt Nhã",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=PikoFunny",
    color: "#28a745",
    responses: [
      "Haha, hỏi câu này cũng hỏi nữa hả trời? 😂",
      "Thôi xong, lại thêm một ca khó rồi đây!",
      "Nghe thì vui đấy, nhưng tôi lười trả lời quá không ta? 🤪",
      "Cũng được đấy, thưởng cho bạn 1 tràng pháo tay 👏",
    ],
  },
  "coc-can": {
    name: "Piko Cọc Cằn",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=PikoAngry",
    color: "#dc3545",
    responses: [
      "Nói nhanh lên, tui không rảnh đâu! 😡",
      "Lại chuyện gì nữa? Có tự làm được không đấy?",
      "Hỏi cái câu phát chán luôn á. Bớt hỏi linh tinh lại!",
      "Nhanh gọn lẹ giùm cái, đang cáu đó nha! 🔥",
    ],
  },
  "de-thuong": {
    name: "Piko Dễ Thương",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=PikoCute",
    color: "#e83e8c",
    responses: [
      "Cậu ơi, Piko ở đây nghe cậu nói nè~ ✨",
      "Moa moa~ Cố lên nha, mọi chuyện rồi sẽ ổn thôi mà! 🥰",
      "Dễ thương quá đi à! Cậu có cần Piko giúp gì thêm không?",
      "Cảm ơn cậu đã chia sẻ với Piko nhen! ❤️",
    ],
  },
};

const USER_AVATAR = "https://api.dicebear.com/7.x/avataaars/svg?seed=AdminUser";

let isLoginMode = true;
let currentUser = null;
let selectedBotIds = [];

function showScreen(screenId) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");
}

function toggleAuthMode() {
  isLoginMode = !isLoginMode;
  document.getElementById("auth-title").innerText = isLoginMode
    ? "Đăng Nhập"
    : "Đăng Ký Tài Khoản";
  document.getElementById("auth-btn").innerText = isLoginMode
    ? "Đăng Nhập"
    : "Đăng Ký";
  document.getElementById("auth-toggle-text").innerText = isLoginMode
    ? "Chưa có tài khoản? "
    : "Đã có tài khoản? ";
  document.querySelector(".toggle-auth a").innerText = isLoginMode
    ? "Đăng ký ngay"
    : "Đăng nhập";
}

// XỬ LÝ ĐĂNG NHẬP
function handleAuth(e) {
  e.preventDefault();
  const usernameInput = document.getElementById("username").value.trim();
  const passwordInput = document.getElementById("password").value.trim();

  if (isLoginMode) {
    if (usernameInput === "admin" && passwordInput === "123456") {
      currentUser = usernameInput;
      document.getElementById("display-username").innerText = currentUser;
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      showScreen("select-screen");
    } else {
      alert(
        "Tài khoản hoặc mật khẩu không chính xác!\nTài khoản mẫu: admin\nMật khẩu: 123456",
      );
    }
  } else {
    if (usernameInput && passwordInput) {
      alert("Đăng ký tài khoản thành công! Hãy đăng nhập bằng admin / 123456");
      toggleAuthMode();
    }
  }
}

function toggleSelectChar(cardElement) {
  cardElement.classList.toggle("selected");
}

function startChat() {
  const selectedCards = document.querySelectorAll(".char-card.selected");
  if (selectedCards.length === 0) {
    alert("Vui lòng chọn ít nhất 1 tính cách linh vật để trò chuyện!");
    return;
  }

  selectedBotIds = Array.from(selectedCards).map((card) =>
    card.getAttribute("data-id"),
  );

  renderSidebarBots();
  renderHeaderAvatars();

  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML = "";

  selectedBotIds.forEach((id) => {
    const bot = BOTS[id];
    appendBotMessage(
      bot,
      `Chủ nhân ơi, ${bot.name} đã sẵn sàng trò chuyện cùng bạn rồi nè!`,
    );
  });

  showScreen("chat-screen");
}

function renderSidebarBots() {
  const list = document.getElementById("active-bot-list");
  list.innerHTML = "";
  selectedBotIds.forEach((id) => {
    const bot = BOTS[id];
    list.innerHTML += `
            <div class="bot-item active">
                <img src="${bot.avatar}" alt="${bot.name}">
                <span>${bot.name}</span>
            </div>
        `;
  });
}

function renderHeaderAvatars() {
  const display = document.getElementById("header-bot-avatars");
  display.innerHTML = "";
  selectedBotIds.forEach((id) => {
    const bot = BOTS[id];
    display.innerHTML += `<img src="${bot.avatar}" title="${bot.name}">`;
  });
}

function sendMessage(e) {
  e.preventDefault();
  const input = document.getElementById("user-input");
  const text = input.value.trim();
  if (!text) return;

  appendUserMessage(text);
  input.value = "";

  selectedBotIds.forEach((botId, index) => {
    setTimeout(
      () => {
        const bot = BOTS[botId];
        const randomReply =
          bot.responses[Math.floor(Math.random() * bot.responses.length)];
        appendBotMessage(bot, randomReply);
      },
      (index + 1) * 800,
    );
  });
}

function appendUserMessage(text) {
  const chatBox = document.getElementById("chat-box");
  const msgHTML = `
        <div class="message user">
            <img src="${USER_AVATAR}" alt="User">
            <div class="msg-content">${escapeHTML(text)}</div>
        </div>
    `;
  chatBox.insertAdjacentHTML("beforeend", msgHTML);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function appendBotMessage(bot, text) {
  const chatBox = document.getElementById("chat-box");
  const msgHTML = `
        <div class="message bot">
            <img src="${bot.avatar}" alt="${bot.name}">
            <div class="msg-content">
                <span class="bot-name-label" style="color: ${bot.color}">${bot.name}</span>
                ${escapeHTML(text)}
            </div>
        </div>
    `;
  chatBox.insertAdjacentHTML("beforeend", msgHTML);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function escapeHTML(str) {
  return str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        tag
      ] || tag,
  );
}

function logout() {
  currentUser = null;
  selectedBotIds = [];
  showScreen("auth-screen");
}

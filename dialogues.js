// ===================================================
// FILE: dialogues.js
// QUẢN LÝ CÂU THOẠI, TỪ KHÓA VÀ BỘ LỌC NỘI DUNG XẤU
// ===================================================

// 1. DANH SÁCH TỪ KHÓA BỊ CẤM (NẾU CHỨA CÁC TỪ NÀY SẼ BỊ CHẶN)
const BANNED_WORDS = [
  "giết",
  "đâm",
  "chém",
  "hành hung",
  "bạo lực",
  "đánh nhau",
  "máu",
  "súng",
  "dao",
  "kéo",
  "tự tử",
  "chết",
  "chửi",
  "đánh",
  "móc mắt",
];

// 2. KỊCH BẢN PHẢN HỒI THEO TỪ KHÓA CHO TỪNG LINH VẬT
const DIALOGUES = {
  "cot-nha": [
    {
      keywords: ["chào", "hi", "hello", "alo"],
      answers: [
        "Hí anh em! Nay gió đâu thổi quý khách ghé qua đây vậy? 🤪",
        "Chàooo! Lại tìm trùm tấu hài đúng hông? 😂",
      ],
    },
    {
      keywords: ["ăn", "đói", "cơm", "bún", "phở"],
      answers: [
        "Ăn gì cũng được nhưng ai trả tiền mới là vấn đề! 💸",
        "Đói quá thì tự lăn vô bếp đi nè 🍲",
      ],
    },
    {
      keywords: ["vui", "kể chuyện", "hài"],
      answers: [
        "Có một con mèo đi vào quán nước... rớt xuống ly nước! 😸",
        "Muốn nghe chuyện cười thì chuyển khoản 5k trước nà 😜",
      ],
    },
    {
      keywords: ["yêu", "thích"],
      answers: [
        "Yêu đương gì tầm này, lo đi làm kiếm tiền đi bạn ơi! 💰🤪",
        "Tui chỉ yêu đồ ăn thui nha! 🍔",
      ],
    },
  ],

  "coc-can": [
    {
      keywords: ["chào", "hi", "hello", "alo"],
      answers: [
        "Chào chào cái gì! Có việc gì nói lẹ để tui còn đi ngủ! 😡",
        "Hỏi gì hỏi nhanh, hết 5 giây tui quạo đó! ⏱️",
      ],
    },
    {
      keywords: ["ăn", "đói", "cơm"],
      answers: ["Đói thì tự tìm đồ ăn, tui có phải hầu bàn đâu mà hỏi?! 🥩🔥"],
    },
    {
      keywords: ["ghét", "tức", "bực", "quạo"],
      answers: [
        "Nói ít thôi, nhức cả cái đầu! 😤",
        "Tránh xa tui ra 3 mét! 💣",
      ],
    },
    {
      keywords: ["yêu", "thích"],
      answers: [
        "Sến xúa quá! Tránh ra cho tui nhờ! 🛑",
        "Đừng có nịnh hót vô ích! ❌",
      ],
    },
  ],

  "de-thuong": [
    {
      keywords: ["chào", "hi", "hello", "alo"],
      answers: [
        "Piko chào cậu nè~ Chúc cậu một ngày thật ngọt ngào nhe! ✨🥰",
        "Híii cậu! Hôm nay của cậu thế nào rồi? 🤗",
      ],
    },
    {
      keywords: ["ăn", "đói", "cơm"],
      answers: [
        "Cậu nhớ ăn uống đúng giờ nha, đừng bỏ bữa Piko xót lắm đó! 🍎🌸",
      ],
    },
    {
      keywords: ["buồn", "mệt", "chán", "áp lực"],
      answers: [
        "Thương cậu lắm! Có Piko ở đây nghe cậu tâm sự nè 💖",
        "Ôm cậu một cái thật chặt nè~ Mọi chuyện rồi sẽ tốt thôi! 🤗",
      ],
    },
    {
      keywords: ["yêu", "thích"],
      answers: [
        "Piko cũng yêu cậu nhiều lắm luôn! ✨💖",
        "Cậu làm Piko ngại quá nè~ 🥰",
      ],
    },
  ],
};

// 3. CÂU TRẢ LỜI MẶC ĐỊNH KHI KHÔNG TÌM THẤY TỪ KHÓA
const DEFAULT_RESPONSES = {
  "cot-nha": [
    "Haha nghe ảo thật đấy 🤪",
    "Gửi 5k tiền tư vấn đi rồi trả lời kĩ cho 😜",
    "Ủa rồi liên quan gì tới tui hông nè? 👀",
  ],
  "coc-can": [
    "Nói nhanh lên, đang bận! 😡",
    "Tự đi mà tìm hiểu! 🙄",
    "Không biết! Không nghe! Không thấy! 🙈",
  ],
  "de-thuong": [
    "Piko ở đây nghe cậu nói nè~ 🥰",
    "Cậu nhắn gì Piko cũng thấy dễ thương hết! ✨",
  ],
};

// 4. HÀM KIỂM TRA XEM ĐOẠN PHÁT NGÔN CÓ CHỨA TỪ CẤM HAY KHÔNG
function containsBannedWords(text) {
  const lowerText = text.toLowerCase();
  return BANNED_WORDS.some((bannedWord) => lowerText.includes(bannedWord));
}

// 5. HÀM TÌM CÂU TRẢ LỜI CHO BỐT (ĐÃ QUA LỌC AN TOÀN)
function getMascotResponse(botId, inputMessage) {
  // BƯỚC A: Kiểm tra nếu người dùng gõ từ bạo lực / từ cấm
  if (containsBannedWords(inputMessage)) {
    return "⚠️ Cảnh báo: Vui lòng nói chuyện văn minh! Piko không trả lời các câu hỏi chứa từ ngữ bạo lực hay độc hại.";
  }

  const botRules = DIALOGUES[botId] || [];
  const lowerInput = inputMessage.toLowerCase();

  // BƯỚC B: Tìm câu trả lời theo từ khóa
  for (let rule of botRules) {
    if (rule.keywords.some((kw) => lowerInput.includes(kw))) {
      // Lấy ngẫu nhiên 1 câu trả lời khớp từ khóa
      const chosenAnswer =
        rule.answers[Math.floor(Math.random() * rule.answers.length)];

      // Kiểm tra an toàn câu trả lời trước khi gửi ra
      if (!containsBannedWords(chosenAnswer)) {
        return chosenAnswer;
      }
    }
  }

  // BƯỚC C: Nếu không dính từ khóa nào, chọn câu phản hồi mặc định
  const defaults = DEFAULT_RESPONSES[botId] || ["Piko nghe nè!"];
  let defaultAnswer = defaults[Math.floor(Math.random() * defaults.length)];

  if (containsBannedWords(defaultAnswer)) {
    return "Piko không hiểu ý cậu lắm, mình nói chuyện khác vui hơn nhé! 😊";
  }

  return defaultAnswer;
}

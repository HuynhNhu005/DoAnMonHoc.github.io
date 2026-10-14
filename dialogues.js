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
      keywords: ["chào", "hi", "hello", "alo", "ê", "e", "hey", "hé lo", "hí"],
      answers: [
        "Hí anh em! Nay gió đâu thổi quý khách ghé qua đây vậy? 🤪",
        "Chàooo! Lại tìm trùm tấu hài đúng hông? 😂",
        "Alo alo, 1 2 3 4 Piko Cợt Nhã nghe rõ trả lời! 📡🥳",
        "Chào bạn nhỏ! Hôm nay có chuyện gì hài hước kể tui nghe coi? 🤣",
        "Trái Đất này là của chúng mình, còn chỗ này là nơi tui tấu hài nè hí hí! 🌍🤪",
        "Ú nu u ừ! Chào đại gia nha, nay ghé thăm tui có mang quà hông đó? 🎁😜",
      ],
    },
    {
      keywords: ["ăn", "đói", "cơm", "bún", "phở", "trà sữa", "mì", "bánh"],
      answers: [
        "Ăn gì cũng được nhưng ai trả tiền mới là vấn đề! 💸",
        "Đói quá thì tự lăn vô bếp đi nè, tui chỉ biết ăn thôi chứ hông biết nấu đâu 🍲🤪",
        "Trà sữa 70% đường 30% đá, thêm 100% tình cảm tấu hài của tui nè! 🧋✨",
        "Nhắc tới đồ ăn làm cái bụng tui nó đánh đàn ghitar luôn rồi nè 🎸🍔",
        "Ăn để sống chứ đừng sống để ăn... mà thôi đi ăn đi cho vui bạn ơi! 🍕😋",
      ],
    },
    {
      keywords: [
        "yêu",
        "thích",
        "crush",
        "người yêu",
        "tình yêu",
        "đẹp trai",
        "xinh",
      ],
      answers: [
        "Yêu đương gì tầm này, lo đi làm kiếm tiền đi bạn ơi! 💰🤪",
        "Tui chỉ yêu đồ ăn với cái giường của tui thui nha! 🍔🛌",
        "Tình yêu như đĩa bánh cuốn, không có mỡ hành là nuốt hông vô 🌯🤣",
        "Thích tui rồi đúng không? Đã bảo là tui quyến rũ lắm mà! ✨😜",
      ],
    },
    {
      keywords: ["thời tiết", "nắng", "mưa", "nóng", "lạnh"],
      answers: [
        "Trời nắng thế này chảy mỡ hết rồi nè ☀️🔥",
        "Trời mưa bão bùng quá, nằm nhà đắp chăn lướt PikoChat là đỉnh nhất! 🌧️🛌",
        "Nóng thế này thì chỉ có thể chui vô tủ lạnh ngồi lướt PikoChat thôi! 🍦🔥",
        "Trời mưa lất phất thế này là điềm báo tui nên nằm ngủ tiếp đó! 🌧️😴",
        "Nắng mưa là chuyện của trời, còn quậy tấu hài là chuyện của tui! ☀️🤪",
        "Thời tiết đẹp vầy mà không bao tui đi ăn đồ nướng là có lỗi với thiên nhiên lắm nha! 🥩🥳",
      ],
    },
    {
      keywords: ["tạm biệt", "bai", "bye", "đi ngủ", "ngủ", "cút", "lặn"],
      answers: [
        "Chếch mềnh! Đi sớm vậy? Tối nhớ mơ thấy tui tấu hài nha 🌙🤪",
        "Bye bye tình yêu! Mai nhớ ghé lại phát lương cho tui đó 💸👋",
        "Gặp lại sau nha đồng chí! Đừng có nhớ tui quá mà mất ngủ đó 😴",
      ],
    },
    {
      keywords: [
        "học",
        "bài tập",
        "thi",
        "kiem tra",
        "kiểm tra",
        "trường",
        "lớp",
        "bài",
      ],
      answers: [
        "Học làm gì cho đầu nó to, đi ngủ đi cho mắt nó tròn! Giỡn thôi lo học đi cha! 📚🤪",
        "Nỗ lực học tập hôm nay, mai sau làm sếp trả lương cho tui nha! 💼💸",
        "Thi cử đến nơi rồi hả? Cầu nguyện tâm linh 100% đậu nha bạn tôi! 🛐📖",
        "Học không chơi đánh rơi tuổi trẻ, chơi không học... thì chuẩn bị ăn gậy nha! 🥢🤣",
      ],
    },
    {
      keywords: ["ăn", "đói", "cơm", "bún", "phở"],
      answers: [
        "Ăn gì cũng được nhưng ai trả tiền mới là vấn đề! 💸",
        "Đói quá thì tự lăn vô bếp đi nè 🍲",
        "Ăn gì cũng được nhưng ai trả tiền mới là vấn đề! 💸",
        "Đói quá thì tự lăn vô bếp đi nè, tui chỉ biết ăn thôi chứ hông biết nấu đâu 🍲🤪",
        "Trà sữa 70% đường 30% đá, thêm 100% tình cảm tấu hài của tui nè! 🧋✨",
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
        "Mới quen có xíu mà đã khoái tui rồi sao? Tui biết tui quyến rũ lắm mà! ✨🤪",
        "Thích tui thì chuyển khoản liền 50k mua trà sữa rồi tui thích lại cho nè! 💸🧋",
        "Yêu đương chi cho mệt đầu, yêu đồ ăn với cái giường ngủ có phải sướng hơn hông? 🍔🛌",
        "Tình yêu như cái bánh mì, không có pa-tê là nuốt không trôi nha! 🥖🤣",
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
      keywords: [
        "trời hôm nay",
        "thời tiết",
        "nắng",
        "mưa",
        "nóng",
        "lạnh",
        "bão",
      ],
      answers: [
        "Thời tiết liên quan gì tới tui? Tui có phải dự báo thời tiết đâu mà hỏi?! 😡",
        "Nóng chảy mỡ ra còn hỏi nhảm, đi bật quạt giùm cái! 💨🔥",
        "Mưa thì ở trong nhà, đi ra ngoài xui xẻo ướt nhẹp ráng chịu! 🌧️😒",
        "Trời mát thì lo đi làm/học đi, ngồi đó mà ngắm mây ngắm gió! 💥",
      ],
    },
    {
      keywords: ["ăn", "đói", "cơm"],
      answers: [
        "Đói thì tự tìm đồ ăn, tui có phải hầu bàn đâu mà hỏi?! 🥩🔥",
        "Đói thì tự đi tìm đồ ăn, tui có phải hầu bàn đâu mà hỏi?! 🥩🔥",
        "Trà sữa hoài, béo lên rồi kìa ở đó mà đòi ăn! 🥤😾",
      ],
    },
    {
      keywords: [
        "học",
        "bài tập",
        "thi",
        "kiem tra",
        "kiểm tra",
        "trường",
        "lớp",
        "bài",
      ],
      answers: [
        "Chưa học xong bài mà ngồi đây chat hả? Tắt máy đi học bài mau! 📚🔥",
        "Lười biếng vừa thôi! Thi rớt đừng có mò vào đây mà khóc lóc với tui! 😡",
        "Bắt đầu học đi, đừng có hoãn lại nữa! Hết 5 phút mà chưa học tui quạo đó! ⏱️💥",
        "Học cho bản thân cậu chứ có học cho tui đâu mà than vắn thở dài?! 😤",
      ],
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
    {
      keywords: ["chào", "hi", "hello", "alo", "ê", "e", "hey", "hé lo", "hí"],
      answers: [
        "Chào chào cái gì! Có việc gì nói lẹ để tui còn đi ngủ! 😡",
        "Hỏi gì hỏi nhanh, hết 5 giây tui quạo đó! ⏱️🔥",
        "Lại là bạn nữa hả? Rảnh rỗi quá hông có việc gì làm hả?! 😤",
        "Nhìn mặt tui giống đang muốn nói chuyện lắm sao mà hi với hello? 😒",
      ],
    },
    {
      keywords: ["ăn", "đói", "cơm", "phở", "trà sữa", "bánh"],
      answers: [
        "Đói thì tự đi tìm đồ ăn, tui có phải hầu bàn đâu mà hỏi?! 🥩🔥",
        "Trà sữa hoài, béo lên rồi kìa ở đó mà đòi ăn! 🥤😾",
        "Hỏi nhảm nhí! Ăn cái gì tự quyết đi, nhức hết cả đầu! 💥",
      ],
    },
    {
      keywords: ["buồn", "mệt", "chán", "áp lực", "stress"],
      answers: [
        "Buồn cái gì mà buồn! Đứng dậy tập thể dục đi cho bớt rảnh! 🏋️‍♂️🔥",
        "Yếu đuối quá vậy! Nhìn tui đây nè, lúc nào cũng tràn đầy năng lượng... quạo! 😤",
        "Mệt thì đi ngủ, than thở với tui thì giải quyết được cái gì chứ?! 🙄",
      ],
    },
    {
      keywords: ["yêu", "thích", "crush", "thương"],
      answers: [
        "Sến xúa quá! Tránh xa ra cho tui nhờ! 🛑🔥",
        "Đừng có nịnh hót vô ích, tui không bị mắc bẫy đâu nhé! ❌",
        "Yêu với chả đương, rảnh quá thì đi quét nhà đi! 🧹😡",
      ],
    },
    {
      keywords: ["tạm biệt", "bai", "bye", "đi ngủ", "ngủ"],
      answers: [
        "Đi lẹ đi cho rảnh mắt! 💥👋",
        "Ngủ thì ngủ đi, gõ hoài! Chúc ngủ ngon... hừm! 😒🌙",
        "Tạm biệt! Mai đừng có làm phiền tui sớm đó nghe chưa! 🛑",
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
      keywords: [
        "trời hôm nay",
        "thời tiết",
        "nắng",
        "mưa",
        "nóng",
        "lạnh",
        "bão",
      ],
      answers: [
        "Thời tiết hôm nay thế nào nhỉ? Dù nắng hay mưa thì nhớ giữ gìn sức khỏe nha cậu! ☀️🌧️💖",
        "Nếu trời mưa thì cậu nhớ mang theo ô/dù kẻo bị cảm lạnh Piko lo lắm đó! ☂️🌸",
        "Trời hôm nay đẹp ghê, ước gì được cùng cậu đi dạo một vòng nhe! ✨🍃",
        "Trời nóng quá thì nhớ uống thêm nước mát cho dễ chịu nhe cậu ơi! 🍹🥰",
      ],
    },
    {
      keywords: [
        "học",
        "bài tập",
        "thi",
        "kiem tra",
        "kiểm tra",
        "trường",
        "lớp",
        "bài",
      ],
      answers: [
        "Cậu cố gắng học tập chăm chỉ nhe, Piko luôn ở đằng sau ủng hộ cậu hết mình! 📚✨💖",
        "Học bài mệt thì nghỉ tay uống miếng nước rồi cố gắng tiếp nhe cậu ơi! 🍵🌸",
        "Chúc cậu thi tốt và đạt điểm cao thật cao nhe! Cậu làm được mà! 💯✨🥰",
        "Piko tin là cậu rất giỏi và thông minh, cố lên nhe! 🌟🤗",
      ],
    },
    {
      keywords: ["chào", "hi", "hello", "alo", "ê", "e", "hey", "hé lo", "hí"],
      answers: [
        "Piko chào cậu nè~ Chúc cậu một ngày thật ngọt ngào nhe! ✨🥰",
        "Híii cậu! Hôm nay của cậu thế nào rồi? 🤗🌸",
        "Alo alo! Piko đây nè, cậu tìm Piko có việc gì đáng yêu hông? 💖",
        "Chào bông hoa nhỏ! Hôm nay cậu nhìn dễ thương lắm nha ✨🌸",
      ],
    },
    {
      keywords: ["ăn", "đói", "cơm", "bún", "phở", "trà sữa", "bánh"],
      answers: [
        "Cậu nhớ ăn uống đúng giờ nha, đừng bỏ bữa Piko xót lắm đó! 🍎🌸",
        "Hôm nay thưởng cho bản thân một ly trà sữa ngọt ngào đi nè 🧋💖",
        "Ăn ngoan rồi Piko thưởng cho một cái ôm thật bự nha! 🤗🍰",
      ],
    },
    {
      keywords: ["buồn", "mệt", "chán", "áp lực", "stress", "khóc"],
      answers: [
        "Thương cậu lắm! Có Piko ở đây nghe cậu tâm sự nè 💖🌸",
        "Ôm cậu một cái thật chặt nè~ Mọi chuyện rồi sẽ tốt đẹp thôi mà! 🤗✨",
        "Đừng buồn nữa nha, có Piko luôn bên cạnh cổ vũ cậu nè! 📣🥰",
        "Nếu mệt quá thì hãy tựa vào Piko nghỉ ngơi một chút nhé ☁️💖",
      ],
    },
    {
      keywords: ["yêu", "thích", "crush", "thương", "đáng yêu"],
      answers: [
        "Piko cũng yêu cậu nhiều nhiều lắm luôn đó! ✨💖🌸",
        "Cậu làm Piko ngại muốn đỏ cả mặt rồi nè~ 🥰 ngượng quá đi!",
        "Tình cảm của cậu là món quà ngọt ngào nhất với Piko luôn! 🎁💖",
      ],
    },
    {
      keywords: ["tạm biệt", "bai", "bye", "đi ngủ", "ngủ"],
      answers: [
        "Chúc cậu ngủ thật ngon và có những giấc mơ ngập tràn kẹo ngọt nha 🌙⭐🥰",
        "Bye bye cậu nè! Mai lại vào chơi với Piko sớm nha~ ✨👋",
        "Piko sẽ đợi cậu quay lại đó, ngoan ngủ sớm đi nha 💖😴",
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

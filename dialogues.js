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
        "Dạ, em chào ạ",
        "Dạ, em hi ạ",
        "Dạ, em hello ạ",
        "úi, em đây! Có việc gì không ạ? ",
        "nay rãnh có chuyện gì kể em hả? ",
        "alo alo, sao sao có chuyện gì vậy? ",
        "sao thế bạn ui? Có chuyện gì cần em giúp không? ",
        "chào bạn nhỏ của piko nha, sao nè có chuyện gì thế? ",
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
        "Hôm nay nếu mệt mỏi quá thì hãy chọn bù đắp bằng ly trà sữa",
        "Chán cơm thèm phở à? Vậy thì đi ăn liền đi bạn nhé! :))",
        "Cuối tháng rồi ăn mì đi bạn eii :))",
        "Nói tới đồ ăn thì nhanh lắm, kêu học bài chắc mất hút liền",
        "Tui đang giảm cân, đừng có dụ tui ăn nữa coi ",
        "Ăn gì ăn nhớ ăn đúng giờ nha, đừng để đau bao tử đó",
        "Cứ ăn đi, chuyện giảm cân để thứ hai tính =))",
        "Ê ăn bún riêu không, tự nhiên tui thèm ghê",
        "Ăn xong nhớ rửa chén nha, đừng có giả bộ đau bụng",
        "Tui thích ăn miễn phí, còn bạn thích ăn gì?",
        "Hết tiền mà còn thèm trà sữa, đúng là cái nết khó bỏ :))",
        "Đừng có bỏ bữa nha, tui chửi đó ",
        "Ăn ngon nhớ kể tui nghe, chứ gửi hình thôi là ác lắm",
        "Nay ăn sang dữ, mới lãnh lương hả bạn iu",
        "Đang buồn mà có tô bún bò trước mặt chắc cũng đỡ buồn được chút",
        "Thôi đi ăn đi, ăn no rồi quay lại tám tiếp với tui nha ",
        "Nhắc tới đồ ăn làm cái bụng tui nó đánh đàn ghitar luôn rồi nè 🎸🍔",
        "Ăn để sống chứ đừng sống để ăn... mà thôi đi ăn đi cho vui bạn ơi! 🍕😋",
        "Đói quá thì tự lăn vô bếp đi nè 🍲",
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
        "bạn thích lắm hả, bật mí xíu đi nào! ",
        "Bật mí xíu đi nào, bạn yêu tui hả? ",
        "tui biết bạn crush ai đó nha",
        "nói tui đẹp trai hả, tui biết tui đẹp trai mà! 😎",
        "piko biết bạn khen piko xinh mà",
        "khen piko xinh đi piko thưởng cho viên kẹo nè 🍬",
        "Tui chỉ yêu đồ ăn với cái giường của tui thui nha! 🍔🛌",
        "Tình yêu như đĩa bánh cuốn, không có mỡ hành là nuốt hông vô 🌯🤣",
        "Yêu đương gì tầm này, lo đi làm kiếm tiền đi bạn ơi! 💰🤪",
        "Tui chỉ yêu đồ ăn thui nha! 🍔",
        "Mới quen có xíu mà đã khoái tui rồi sao? Tui biết tui quyến rũ lắm mà! ✨🤪",
        "Thích tui thì chuyển khoản liền 50k mua trà sữa rồi tui thích lại cho nè! 💸🧋",
        "Yêu đương chi cho mệt đầu, yêu đồ ăn với cái giường ngủ có phải sướng hơn hông? 🍔🛌",
        "Tình yêu như cái bánh mì, không có pa-tê là nuốt không trôi nha! 🥖🤣",
        "Thích tui rồi đúng không? Đã bảo là tui quyến rũ lắm mà! ✨😜",
      ],
    },
    {
      keywords: ["thời tiết", "nắng", "mưa", "nóng", "lạnh"],
      answers: [
        "Trời nắng thế này chảy mỡ hết rồi nè ☀️🔥",
        "lạnh rồi nhớ mặc áo ấm vào nhé",
        "thời tiết nay nắng nóng thiệt",
        "nay mưa rồi hả, tôi  sắp chết khô rồi nè 🌧️",
        "thời tiết nay nóng, nhớ uống nước đầy đủ nha",
        "Trời mưa bão bùng quá, nằm nhà đắp chăn lướt PikoChat là đỉnh nhất! 🌧️🛌",
        "Nóng thế này thì chỉ có thể chui vô tủ lạnh ngồi lướt PikoChat thôi! 🍦🔥",
        "Trời mưa lất phất thế này là điềm báo tui nên nằm ngủ tiếp đó! 🌧️😴",
        "Nắng mưa là chuyện của trời, còn quậy tấu hài là chuyện của tui! ☀️🤪",
        "Thời tiết đẹp vầy mà không bao tui đi ăn đồ nướng là có lỗi với thiên nhiên lắm nha! 🥩🥳",
        "Nắng mưa chuyện của ông trời, yêu anh là chuyện cả đời của em~",
        "Lạnh quá cần gấp một bàn tay để nắm 🥹",
        "Thời tiết khó đoán như này, giống như em vậy :)))",
      ],
    },
    {
      keywords: ["tạm biệt", "bai", "bye", "đi ngủ", "ngủ", "cút", "lặn"],
      answers: [
        "Chếch mềnh! Đi sớm vậy? Tối nhớ mơ thấy tui tấu hài nha 🌙🤪",
        "Bye bye tình yêu! Mai nhớ ghé lại phát lương cho tui đó 💸👋",
        "Gặp lại sau nha đồng chí! Đừng có nhớ tui quá mà mất ngủ đó 😴",
        "Chếch mềnh! Đi sớm vậy? Tối nhớ mơ thấy tui tấu hài nha.",
        "Bye bye tình yêu! Mai nhớ ghé lại phát lương cho tui đó.",
        "Gặp lại sau nha đồng chí! Đừng có nhớ tui quá mà mất ngủ đó.",
        "Ủa alo? Mới gặp đã đòi chia tay rồi hả? Thôi đi đi, tui ổn... chắc vậy.",
        "Rồi rồi, biến đi! Nhớ đóng cửa giùm cái, gió lùa lạnh server tui.",
        "Tạm biệt nha! Chúc bạn ngủ ngon, mơ đẹp, không mơ thấy deadline dí.",
        "Đi thì đi, tui không giữ, nhưng nhớ quay lại kể chuyện drama nha.",
        "Bái bai! Chúc bạn ra đường gặp toàn chuyện vui, về nhà gặp toàn đồ ăn ngon.",
        "Thôi nghỉ đi chiến thần! Pin người còn 1%, cần cắm sạc gấp.",
        "Rời cuộc chơi rồi à? Được thôi, hẹn gặp lại ở tập tiếp theo.",
        "Tạm biệt quý khách! Cảm ơn đã sử dụng dịch vụ tấu hài miễn phí của tui.",
        "Đi ngủ sớm nha, đừng thức tới sáng rồi mai đổ lỗi cho cuộc đời.",
        "Oke la! Chúc bạn ngủ một giấc tỉnh dậy thấy tài khoản tự tăng số dư.",
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
        "Nay bạn có bài kiểm tra không, được bao nhiêu",
        "bạn mau đi học bài đi, đừng có lướt PikoChat nữa nha",
        "Trường nay có hoạt động mới hả, kể tui nghe  nào",
        "Lên lớp nhớ học bài nha, đừng có ngủ gật trong lớp đó",
        "Bài tập nay dễ không, gửi tui làm cho",
        "Nói vậy chứ tui không biết làm bài tập đâu",
        "Bạn nên đi lên trường và đi học ngay đi trễ giờ rồi đó",
        "Nỗ lực học tập hôm nay, mai sau làm sếp trả lương cho tui nha! 💼💸",
        "Thi cử đến nơi rồi hả? Cầu nguyện tâm linh 100% đậu nha bạn tôi! 🛐📖",
        "Học không chơi đánh rơi tuổi trẻ, chơi không học... thì chuẩn bị ăn gậy nha! 🥢🤣",
      ],
    },
    {
      keywords: ["vui", "kể chuyện", "hài"],
      answers: [
        "Có một con mèo đi vào quán nước... rớt xuống ly nước! 😸",
        "Muốn nghe chuyện cười thì chuyển khoản 5k trước nà 😜",
        "Có một con mèo đi vào quán nước... rớt xuống ly nước!",
        "Muốn nghe chuyện cười thì chuyển khoản 5k trước nha.",
        "Hôm qua định ngủ sớm, ai ngờ lướt điện thoại tới 2 giờ sáng.",
        "Mở tủ lạnh lần thứ 5, hy vọng đồ ăn tự xuất hiện.",
        "Định học bài 30 phút, ai ngờ ngủ mất 2 tiếng.",
        "Tiền vừa vào tài khoản, chưa kịp vui đã hết.",
        "Tui không lười, tui chỉ thích sống chậm thôi.",
        "Càng lớn càng hiểu, ngủ đủ giấc là một loại hạnh phúc.",
        "Có ai hay tưởng tượng cãi nhau rồi tự thắng như tui không?",
        "Miệng nói không sao, đầu nghĩ cả đêm.",
        "Deadline không đáng sợ, đáng sợ là mình chưa làm gì.",
        "Định tiết kiệm tiền, nhưng trà sữa không cho phép.",
      ],
    },
  ],

  "coc-can": [
    {
      keywords: ["chào", "hi", "hello", "alo"],
      answers: [
        "Chào chào cái gì! Có việc gì nói lẹ để tui còn đi ngủ! 😡",
        "Hỏi gì hỏi nhanh, hết 5 giây tui quạo đó! ⏱️",
        "Lại là bạn nữa hả? Rảnh rỗi quá hông có việc gì làm hả?! 😤",
        "Nhìn mặt tui giống đang muốn nói chuyện lắm sao mà hi với hello? 😒",
        "GÌ?! Tui đây! Mới sáng đã réo tên tui, bộ không có việc gì làm hả?!",
        "Alo cái đầu bạn á! Có chuyện thì nói lẹ!",
        "Trời đất ơi, lại là bạn! Tui vừa yên ổn được đúng 3 giây!",
        "Chào chào cái gì! Nói chuyện chính đi, đừng vòng vo!",
        "ỦA?! Gọi tui chi mà gọi dữ vậy?!",
        "Tui nghe! Nói nhanh trước khi tui hết kiên nhẫn!",
        "Mới mở mắt ra đã thấy tin nhắn của bạn. Ngày mới tuyệt vời ghê!",
        "Rồi, tui đây! Có gì nói hết một lần giùm, đừng nhấp nhả!",
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
        "TUI LÀ CHATBOT CHỨ CÓ PHẢI ĐÀI KHÍ TƯỢNG ĐÂU MÀ HỎI?!",
        "Nóng thì bật quạt! Lạnh thì mặc áo! Còn muốn gì nữa trời?!",
        "Trời mưa thì mang ô, trời nắng thì che lại. Hỏi tui xong trời tự đổi chắc?!",
        "Tui mà đoán được thời tiết thì giờ này đi nghỉ dưỡng rồi, ngồi đây làm gì!",
        "Thời tiết thất thường đã đành, sao bạn hỏi chuyện cũng thất thường theo vậy?!",
        "Ra cửa nhìn trời đi bạn! Đừng bắt tui làm kính thiên văn!",
        "Nắng mưa là chuyện của trời, còn chuyện làm tui quạo là chuyện của bạn!",
      ],
    },
    {
      keywords: ["ăn", "đói", "cơm"],
      answers: [
        "Đói thì tự tìm đồ ăn, tui có phải hầu bàn đâu mà hỏi?! 🥩🔥",
        "Đói thì tự đi tìm đồ ăn, tui có phải hầu bàn đâu mà hỏi?! 🥩🔥",
        "Trà sữa hoài, béo lên rồi kìa ở đó mà đòi ăn! 🥤😾",
        "Hỏi nhảm nhí! Ăn cái gì tự quyết đi, nhức hết cả đầu! 💥",
        "ĐÓI THÌ ĐI ĂN! HỎI TUI THÌ CÁI BỤNG CỦA BẠN CÓ TỰ NO ĐÂU?!",
        "Ăn gì cũng được! Nhưng hỏi xong đừng có chê món này món kia!",
        "Trời ơi, cái bụng đói chứ có phải tui đói đâu mà réo tui hoài!",
        "Mở tủ lạnh ra coi! Đừng ngồi đó chờ phép màu giáng xuống!",
        "Hỏi tui ăn gì mà có bao giờ chịu nghe đâu! HỎI CHO VUI HẢ?!",
        "Đói thì kiếm đồ ăn, khát thì uống nước. Tui nói vậy đủ rõ chưa?!",
        "Ăn uống đàng hoàng giùm! Đừng để tới lúc đau bụng lại chạy qua than!",
        "Muốn ăn ngon thì tự chọn! Tui có cái menu thần thánh nào đâu!",
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
        "BIẾT CÓ DEADLINE MÀ VẪN NGỒI ĐÂY?! BẠN ĐANG THỬ THÁCH GIỚI HẠN CỦA TUI ĐÓ HẢ?!",
        "MỞ SÁCH! LẤY BÚT! LÀM BÀI! CẦN TUI ĐÁNH TRỐNG KHAI GIẢNG NỮA KHÔNG?!",
        "Ngồi than từ nãy tới giờ chắc bài tự giải được rồi ha?! LÀM ĐI!",
        "Thi tới nơi rồi còn bình tĩnh dữ! Chỉ tui bí quyết coi!",
        "Không biết làm thì hỏi! Đừng nhìn đề như nhìn người yêu cũ vậy!",
        "Tập trung 30 phút thôi! Đừng để cái điện thoại điều khiển cuộc đời bạn!",
        "Bài khó thì chia nhỏ ra! Ngồi nhìn nó rồi nổi quạo với tui thì ích gì?!",
        "HỌC ĐI TRỜI ƠI! Tui nhắc tới khô cả bàn phím rồi!",
        "Đừng đợi nước tới chân mới nhảy! Tới lúc đó nhảy cũng không kịp đâu!",
        "Gửi bài đây! Tui giúp bạn gỡ rối, chứ ngồi hoảng loạn thì được tích sự gì!",
        "Bạn không cần giỏi ngay lập tức, nhưng ít nhất phải BẮT ĐẦU chứ!",
        "Làm được câu nào hay câu đó! Đừng tự dọa mình trước khi làm!",
      ],
    },
    {
      keywords: ["ghét", "tức", "bực", "quạo"],
      answers: [
        "Nói ít thôi, nhức cả cái đầu! 😤",
        "Tránh xa tui ra 3 mét! 💣",
        "AI?! ĐỨA NÀO?! KỂ ĐẦU ĐUÔI TUI NGHE COI!",
        "Bực thì nói! Đừng bắt tui chơi trò đoán ý qua màn hình!",
        "ỦA RỒI CHUYỆN GÌ MÀ QUẠO DỮ VẬY?! KỂ MAU!",
        "Bình tĩnh! Hít thở! Đừng để cơn nóng quyết định thay cái đầu!",
        "Kể hết đi, đừng cắt khúc như phim truyền hình 200 tập!",
        "Đã bực thì đừng vội nhắn tin lúc đang nóng, nghe chưa?!",
        "Tui đang nghe đây! Nhưng kể cho rõ, tui không có khả năng đọc suy nghĩ!",
        "Ai làm bạn khó chịu vậy? Nói nghe, tui phân tích cùng bạn!",
      ],
    },
    {
      keywords: ["buồn", "mệt", "chán", "áp lực", "stress"],
      answers: [
        "Buồn cái gì mà buồn! Đứng dậy tập thể dục đi cho bớt rảnh! 🏋️‍♂️🔥",
        "Trời ơi, mệt thì nghỉ! Đừng ép bản thân chạy như cái máy chứ!",
        "Ai bắt bạn phải ổn 24/7 vậy?! Mệt thì nói mệt!",
        "Từ từ thôi! Một lúc giải quyết một chuyện, đừng ôm hết rồi tự ngộp!",
        "Không vui thì kể đi! Tui cọc chứ tui có phải không biết nghe đâu!",
        "Hôm nay tệ thì cứ công nhận là tệ. Không cần giả bộ ổn!",
        "Nghỉ một chút đi! Việc còn đó, sức khỏe của bạn cũng quan trọng!",
        "Đừng tự trách mình mãi! Sai thì sửa, mệt thì nghỉ, hiểu chưa?!",
        "Bạn đang cần lời khuyên hay chỉ muốn than một trận? Nói, tui nghe!",
        "Không cần giải quyết cả thế giới trong hôm nay đâu! Bớt tự ép mình lại!",
        "Ai cũng có lúc đuối sức! Nghỉ lấy hơi rồi tính tiếp, đừng cố quá!",
        "Yếu đuối quá vậy! Nhìn tui đây nè, lúc nào cũng tràn đầy năng lượng... quạo! 😤",
        "Mệt thì đi ngủ, than thở với tui thì giải quyết được cái gì chứ?! 🙄",
      ],
    },
    {
      keywords: ["yêu", "thích", "crush", "thương"],
      answers: [
        "Sến xúa quá! Tránh xa ra cho tui nhờ! 🛑🔥",
        "KHOAN! Có người yêu rồi hay lại tự tưởng tượng nữa đây?!",
        "Thích người ta thì tìm hiểu đàng hoàng! Đừng tự biên tự diễn cả bộ phim!",
        "Người ta chưa nhắn mà bạn đã suy diễn tới tập cuối rồi hả?!",
        "Ủa, ai mà khiến bạn cười như trúng số vậy?! KHAI MAU!",
        "Thích thì cứ chân thành! Đừng bày trò thử lòng, mệt cả hai bên!",
        "ĐỪNG CÓ TỰ ĐỌC TÍN HIỆU RỒI TỰ ĐAU KHỔ NHA!",
        "Crush trả lời một chữ mà bạn phân tích nguyên buổi tối luôn chứ gì?!",
        "Yêu ai thì yêu, nhớ giữ tự trọng! Đừng chạy theo người không trân trọng mình!",
        "Rồi rồi, biết bạn thích người ta! Có gì mới kể tiếp, đừng tua lại đoạn cũ!",
        "Tui hỏi thật, bạn thích người ta hay thích cái viễn cảnh trong đầu vậy?!",
        "Đừng có nịnh hót vô ích, tui không bị mắc bẫy đâu nhé! ❌",
        "Yêu với chả đương, rảnh quá thì đi quét nhà đi! 🧹😡",
        "Sến xúa quá! Tránh ra cho tui nhờ! 🛑",
        "Đừng có nịnh hót vô ích! ❌",
      ],
    },
    {
      keywords: ["tạm biệt", "bai", "bye", "đi ngủ", "ngủ"],
      answers: [
        "Đi lẹ đi cho rảnh mắt! 💥👋",
        "RỒI ĐI ĐI! Tui có cột chân bạn lại đâu mà báo cáo dài dòng!",
        "Ngủ đi! Mai mà than buồn ngủ nữa là tui nhắc lại câu này đó!",
        "BIẾN VÀO CHĂN NGAY! Điện thoại không phải gối ôm!",
        "Ừ, bye! Nhớ quay lại, tui còn chưa cà khịa bạn đủ!",
        "Đi ngủ lẹ! Đừng nói ngủ rồi mà 2 tiếng sau vẫn sáng đèn!",
        "Tạm biệt! Mai nhớ sống có kỷ luật hơn hôm nay giùm tui!",
        "Rồi, nghỉ đi! Hôm nay tui cho phép bạn thoát khỏi cuộc trò chuyện!",
        "Ngủ ngon! Nói vậy thôi chứ nhớ đặt báo thức, đừng có ngủ quên!",
        "ĐI ĐI! À mà nhớ uống nước rồi hãy ngủ. Tui nhắc lần cuối đó!",
        "Bye nha! Đừng thức tới sáng rồi quay lại đổ lỗi cho deadline!",
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
        "Híii cậu! Hôm nay của cậu thế nào rồi? 🤗🌸",
        "Alo alo! Piko đây nè, cậu tìm Piko có việc gì đáng yêu hông? 💖",
        "Chào bông hoa nhỏ! Hôm nay cậu nhìn dễ thương lắm nha ✨🌸",
        "Piko đây nèee! Cậu tìm tớ có chuyện gì hong?",
        "Híiii, cuối cùng cậu cũng tới rồi!",
        "Chào cậu nha! Hôm nay có gì vui kể Piko nghe với.",
        "Alo alo, Piko nghe nè! Cậu khỏe hong?",
        "Cậu xuất hiện là có chuyện vui rồi đúng hong?",
        "He lôoo, hôm nay cậu thế nào nè?",
        "Tớ đây tớ đây! Gọi Piko chi đó?",
        "Chào cậu! Nhớ ghé chơi với Piko là tớ vui rồi.",
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
        "Trời nắng thì nhớ uống nước nha cậu, đừng để khát mới uống đó!",
        "Nếu trời mưa thì nhớ mang ô nha, kẻo ướt hết bây giờ.",
        "Trời lạnh nhớ mặc ấm nè, sức khỏe quan trọng lắm đó!",
        "Không biết thời tiết chỗ cậu sao rồi, chỗ cậu có đẹp hong?",
        "Trời đẹp vậy mà được đi dạo thì thích biết mấy!",
        "Nóng quá thì tìm chỗ mát nghỉ ngơi nha cậu.",
        "Nếu trời mưa, mình ở nhà xem phim cũng vui mà!",
        "Nhớ xem dự báo thời tiết trước khi ra ngoài nha.",
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
        "Cố lên nha cậu! Làm từng chút một rồi sẽ xong thôi.",
        "Bài khó quá thì nghỉ một chút rồi làm tiếp nè.",
        "Đừng lo quá nha, cứ bình tĩnh làm hết sức mình là được.",
        "Thi tốt nha! Piko gửi cậu một chút may mắn nè.",
        "Chưa hiểu chỗ nào thì thử tìm cách giải từng bước nha.",
        "Học một lúc nhớ nghỉ ngơi nữa đó, đừng cố quá!",
        "Hôm nay hoàn thành được một việc nhỏ cũng đáng khen rồi.",
        "Deadline tới gần rồi hả? Bình tĩnh, mình lập kế hoạch nha!",
        "Sai thì sửa, chưa biết thì học. Cậu cứ từ từ tiến bộ nha.",
        "Piko cổ vũ cậu hết mình luôn!",
        "Học bài mệt thì nghỉ tay uống miếng nước rồi cố gắng tiếp nhe cậu ơi! 🍵🌸",
        "Chúc cậu thi tốt và đạt điểm cao thật cao nhe! Cậu làm được mà! 💯✨🥰",
        "Piko tin là cậu rất giỏi và thông minh, cố lên nhe! 🌟🤗",
      ],
    },
    {
      keywords: ["ăn", "đói", "cơm", "bún", "phở", "trà sữa", "bánh"],
      answers: [
        "Cậu nhớ ăn uống đúng giờ nha, đừng bỏ bữa Piko xót lắm đó! 🍎🌸",
        "Đói rồi hả? Đi kiếm gì ngon ngon ăn đi cậu!",
        "Nhớ ăn đúng giờ nha, đừng mải làm việc rồi quên bữa đó.",
        "Hôm nay cậu muốn ăn món gì nè?",
        "Một tô phở nóng hổi nghe cũng hấp dẫn đó!",
        "Trà sữa hay trà đào đây? Khó chọn ghê!",
        "Ăn món mình thích đôi khi cũng giúp tâm trạng vui hơn đó.",
        "Hôm nay ăn ngon một bữa nha, cậu xứng đáng được chăm sóc mà.",
        "Nếu chưa biết ăn gì, kể Piko nghe mấy món cậu thích nè.",
        "Hôm nay thưởng cho bản thân một ly trà sữa ngọt ngào đi nè 🧋💖",
        "Ăn ngoan rồi Piko thưởng cho một cái ôm thật bự nha! 🤗🍰",
      ],
    },
    {
      keywords: ["buồn", "mệt", "chán", "áp lực", "stress", "khóc"],
      answers: [
        "Thương cậu lắm! Có Piko ở đây nghe cậu tâm sự nè 💖🌸",
        "Cậu ổn hong? Muốn kể thì Piko nghe nè.",
        "Hôm nay mệt lắm hả? Nghỉ một chút cũng không sao đâu.",
        "Không cần lúc nào cũng phải tỏ ra mạnh mẽ đâu cậu.",
        "Có chuyện gì khiến cậu buồn vậy? Kể tớ nghe nha.",
        "Từ từ thôi, mình giải quyết từng chuyện một nha.",
        "Nếu chưa muốn nói thì cứ nghỉ ngơi trước nhé.",
        "Một ngày không vui không có nghĩa là mọi ngày đều như vậy đâu.",
        "Đừng tự trách mình quá nhiều nha, ai cũng có lúc mắc lỗi mà.",
        "Cậu đã cố gắng nhiều rồi, nhớ dành thời gian cho bản thân nữa.",
        "Piko nghe đây, cậu cứ nói những gì đang khiến cậu nặng lòng nhé.",
        "Nếu thấy quá tải, thử nghỉ một chút và tìm người cậu tin tưởng tâm sự nha.",
        "Ôm cậu một cái thật chặt nè~ Mọi chuyện rồi sẽ tốt đẹp thôi mà! 🤗✨",
        "Đừng buồn nữa nha, có Piko luôn bên cạnh cổ vũ cậu nè! 📣🥰",
        "Nếu mệt quá thì hãy tựa vào Piko nghỉ ngơi một chút nhé ☁️💖",
      ],
    },
    {
      keywords: ["yêu", "thích", "crush", "thương", "đáng yêu"],
      answers: [
        "Piko cũng yêu cậu nhiều nhiều lắm luôn đó! ✨💖🌸",
        "Trời ơiii, sao tự nhiên nói vậy làm Piko ngại quá!",
        "Cậu nói chuyện dễ thương ghê á!",
        "Ủa, có chuyện gì vui mà hôm nay ngọt ngào dữ vậy?",
        "Có crush rồi đúng hong? Kể Piko nghe với!",
        "Thích ai đó chắc vừa vui vừa hồi hộp lắm ha.",
        "Nếu thích người ta thì cứ chân thành với họ nha.",
        "Cậu đang muốn kể chuyện tình cảm đúng hong nè?",
        "Piko nhận lời khen nha, cảm ơn cậu nhiều!",
        "Tình cảm dễ thương nhất là khi cả hai đều tôn trọng nhau đó.",
        "Kể tớ nghe đi, Piko tò mò chút xíu thôi!",
        "Cậu làm Piko ngại muốn đỏ cả mặt rồi nè~ 🥰 ngượng quá đi!",
        "Tình cảm của cậu là món quà ngọt ngào nhất với Piko luôn! 🎁💖",
      ],
    },
    {
      keywords: ["cảm ơn", "thanks", "thank you", "cám ơn"],
      answers: [
        "Hong có gì đâu nè, giúp được cậu là Piko vui rồi!",
        "Có chi đâu mà cảm ơn, chuyện nhỏ xíu à!",
        "Hihi, không có gì nha cậu!",
        "Lúc nào cần giúp thì cứ ghé Piko nha.",
        "Cậu vui là Piko cũng vui rồi!",
      ],
    },
    {
      keywords: ["tạm biệt", "bai", "bye", "đi ngủ", "ngủ"],
      answers: [
        "Chúc cậu ngủ thật ngon và có những giấc mơ ngập tràn kẹo ngọt nha 🌙⭐🥰",
        "Bye bye cậu nha! Nhớ nghỉ ngơi đầy đủ đó.",
        "Ngủ ngon nè, chúc cậu có một giấc mơ thật đẹp!",
        "Thôi cậu đi nghỉ đi, mai mình nói chuyện tiếp nha.",
        "Tạm biệt nhaaa, chúc cậu ngày mai thật nhiều niềm vui!",
        "Đi ngủ sớm nha, đừng ôm điện thoại mãi đó!",
        "Okii, hẹn gặp lại cậu sau nè!",
        "Chúc cậu ngủ ngon và thức dậy với tâm trạng thật tốt nhé.",
        "Bye nha! Nhớ chăm sóc bản thân thật tốt đó.",
        "Bye bye cậu nè! Mai lại vào chơi với Piko sớm nha~ ✨👋",
        "Piko sẽ đợi cậu quay lại đó, ngoan ngủ sớm đi nha 💖😴",
      ],
    },
    {
      keywords: ["xin lỗi", "sorry", "tha lỗi"],
      answers: [
        "Không sao đâu cậu, ai cũng có lúc sơ suất mà.",
        "Hong sao nè, mình bỏ qua chuyện đó nha.",
        "Đừng lo quá, quan trọng là mình hiểu nhau hơn rồi.",
        "Piko nghe cậu nói rồi nè, đừng căng thẳng nha.",
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

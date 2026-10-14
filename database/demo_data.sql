-- 1. XÓA DỮ LIỆU CŨ VÀ RESET ID TỰ ĐỘNG TĂNG
DELETE FROM FEEDBACK;
DELETE FROM CONSULTATION_SESSION;
DELETE FROM MESSAGE;
DELETE FROM CONVERSATION;
DELETE FROM USER;

ALTER TABLE FEEDBACK AUTO_INCREMENT = 1;
ALTER TABLE CONSULTATION_SESSION AUTO_INCREMENT = 1;
ALTER TABLE MESSAGE AUTO_INCREMENT = 1;
ALTER TABLE CONVERSATION AUTO_INCREMENT = 1;
ALTER TABLE USER AUTO_INCREMENT = 1;

-- 2. NẠP DỮ LIỆU TÀI KHOẢN
INSERT INTO USER (email, password_hash, role, full_name, created_at) VALUES 
('admin@pikochat.com', '123456', 'ADMIN', 'Piko Admin', CURRENT_TIMESTAMP),
('nghia.dang@student.vn', '123456', 'USER', 'Đặng Hữu Nghĩa', CURRENT_TIMESTAMP),
('bot_cotnha@pikochat.com', '123456', 'CONSULTANT', 'Piko Cợt Nhã', CURRENT_TIMESTAMP),
('bot_coccan@pikochat.com', '123456', 'CONSULTANT', 'Piko Cọc Cằn', CURRENT_TIMESTAMP),
('bot_dethuong@pikochat.com', '123456', 'CONSULTANT', 'Piko Dễ Thương', CURRENT_TIMESTAMP);

-- 3. NẠP DỮ LIỆU HỘI THOẠI
INSERT INTO CONVERSATION (user_id, title, status) VALUES 
(2, 'Cuộc chiến trà sữa với Cọc Cằn', 'OPEN'),
(2, 'Tâm sự cùng Dễ Thương', 'CLOSED'),
(2, 'Tấu hài cùng Cợt Nhã', 'OPEN');

-- 4. NẠP DỮ LIỆU TIN NHẮN (Đúng chuẩn tính cách Bot trong index.html)

-- Hội thoại 1: Nghĩa trò chuyện với Piko Cọc Cằn
INSERT INTO MESSAGE (conversation_id, sender_id, content, is_read) VALUES 
(1, 2, 'Ê Cọc Cằn, đi uống trà sữa hông?', TRUE),
(1, 4, 'Nhìn mặt tui giống cái quán nước lắm hả mà đòi uống?! 🧋💢', TRUE),
(1, 2, 'Gắt vậy, rủ đi uống thôi mà làm gì quạo?', TRUE),
(1, 4, 'Ai quạo? TUI ĐANG RẤT BÌNH THƯỜNG NHÉ! 🤬 Nói thêm câu nữa là ăn đấm đó!', FALSE);

-- Hội thoại 2: Nghĩa tâm sự với Piko Dễ Thương
INSERT INTO MESSAGE (conversation_id, sender_id, content, is_read) VALUES 
(2, 2, 'Piko ơi, hôm nay tớ thấy hơi mệt...', TRUE),
(2, 5, 'Cậu mệt hả? Mau nghỉ ngơi thôi nào, nhớ đắp chăn cẩn thận nha! 🛌🧸 Piko gửi ngàn nụ hôn chữa lành đến cho cậu nè~ 💋✨', TRUE),
(2, 2, 'Cảm ơn Piko nha, cậu dễ thương quá đi.', TRUE),
(2, 5, 'Thương cậu nhất trên đời! Piko luôn bên cạnh cậu nè! 🌸❤️', TRUE);

-- Hội thoại 3: Nghĩa tấu hài với Piko Cợt Nhã
INSERT INTO MESSAGE (conversation_id, sender_id, content, is_read) VALUES 
(3, 2, 'Alo Piko Cợt Nhã, nay trời đẹp quá nè!', TRUE),
(3, 3, 'Hí anh em! Nay gió đâu thổi quý khách ghé qua đây vậy? Đẹp trời để đi quậy đó! 🥳', TRUE),
(3, 2, 'Dạo này tao đang đói quá, thèm ăn sườn bì chả.', TRUE),
(3, 3, 'Nói tới ăn là sáng mắt lên liền, bao tui dĩa cơm tấm đi! 🥩💸', TRUE);

-- 5. NẠP DỮ LIỆU ĐÁNH GIÁ
INSERT INTO FEEDBACK (user_id, conversation_id, content, score) VALUES 
(2, 2, 'Piko Dễ Thương đáng yêu quá, chữa lành tâm hồn 10/10.', 5),
(2, 1, 'Cọc Cằn gắt quá làm tui giật mình, nhưng mà trải nghiệm khá mặn mòi.', 4);
SELECT * FROM MESSAGE;


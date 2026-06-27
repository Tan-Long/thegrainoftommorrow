# Demo Revision Plan

## Trạng thái hiện tại

Đã bổ sung vào demo:

- Section Toolkit & phân quyền.
- Section Pilot 12 tháng.
- Mock Partner Pro report trong dashboard.
- Nav item Pilot.
- Responsive desktop/mobile cho các section mới.

## Mục tiêu sửa demo tiếp theo

Demo cần cho giám khảo thấy sản phẩm có đường đi rõ:

**Public Free -> Registered Free -> Partner Pro -> Lab verification**

Không cần build backend thanh toán hoặc auth thật trong giai đoạn này. Cần prototype đủ rõ để thuyết trình.

## P0 - Cần làm trước khi quay video

### 1. Thêm CTA "Xem gói Partner Pro"

Vị trí:

- Trong section dashboard.
- Trong section toolkit/access.

Mục tiêu:

- Giám khảo thấy rõ phần kiếm tiền nằm ở đâu.
- Không phải kéo sâu mới thấy Partner Pro.

### 2. Làm rõ "Pro không phải chứng nhận"

Vị trí:

- Partner Pro mock panel.
- Tooltip hoặc note dưới nút export.

Copy:

**Partner Pro là quyền truy cập báo cáo và lập kế hoạch lấy mẫu, không phải chứng nhận an toàn thực phẩm.**

### 3. Thêm mock trạng thái lab verification

Trạng thái đề xuất:

- Chưa lấy mẫu.
- Cần ưu tiên lấy mẫu.
- Lab chưa xác nhận.
- Lab đã xác nhận.

Mục tiêu:

- Trả lời phản biện "không có thẩm quyền" ngay trong demo.

### 4. Thêm một màn hình/section "Báo cáo PDF/CSV"

Nội dung report mock:

- Vùng nguyên liệu.
- Kịch bản.
- Tín hiệu rủi ro.
- Dải bất định.
- Khuyến nghị lấy mẫu.
- Dòng bắt buộc: "Cần xác minh phòng lab trước khi kết luận."

## P1 - Nên làm nếu còn thời gian

### 1. Thêm role selector rõ hơn

Các role:

- Public/Người dân.
- HTX/Doanh nghiệp.
- Cán bộ địa phương.
- Nhà nghiên cứu/lab.

Mục tiêu:

- Gắn trực tiếp với permission và chatbot.

### 2. Thêm usage/quota visual

Ví dụ:

- Public Free: 3-5 câu/ngày.
- Registered Free: 20-50 câu/tháng.
- Partner Pro: 300-1.000 câu/tháng/tổ chức.
- Research/Admin: theo thỏa thuận dữ liệu.

### 3. Thêm "Assisted access" cho nông dân

Visual:

HTX/khuyến nông -> Zalo/checklist/workshop -> nông dân.

Mục tiêu:

- Trả lời phản biện nông dân khó tiếp cận công nghệ.

## P2 - Để sau chung kết

- Auth thật.
- Payment/subscription thật.
- Dashboard quản trị tổ chức.
- Upload dữ liệu mẫu mới.
- Audit log cho lab/đối tác.
- Export PDF thật.

## Kịch bản demo 3 phút

1. Mở trang chủ, đọc tagline.
2. Vào dashboard, đổi kịch bản RCP8.5.
3. Click vùng/tỉnh, xem popup và bất định.
4. Mở chatbot, hỏi "Khu vực này nên làm gì tiếp?".
5. Kéo xuống Toolkit & phân quyền, nói nông dân dùng assisted access.
6. Chỉ Partner Pro mock, nói 15 triệu/năm/tổ chức.
7. Kéo tới Pilot 12 tháng, nói 5 Partner Pro hòa vốn.
8. Kết: không thay lab, ưu tiên kiểm tra đúng nơi.


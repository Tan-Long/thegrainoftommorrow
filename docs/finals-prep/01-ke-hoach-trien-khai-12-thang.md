# Kế Hoạch Triển Khai Và Vận Hành 12 Tháng

## Mục tiêu

Chứng minh dự án có khả năng vận hành sau cuộc thi ở quy mô pilot, không phụ thuộc hoàn toàn vào giải thưởng. Pilot tập trung vào đồng bằng sông Hồng, nơi có nhiều vùng trồng lúa, nhiều HTX và doanh nghiệp thu mua/xuất khẩu cần quản trị rủi ro vùng nguyên liệu.

## Phạm vi pilot

| Hạng mục | Phạm vi hợp lý |
|---|---:|
| Khu vực | Hưng Yên, Ninh Bình, Hải Phòng, vùng ven Hà Nội |
| Vùng/tỉnh pilot | 3-5 |
| Đối tác thử nghiệm | 5-10 HTX, doanh nghiệp, địa phương, nhóm nghiên cứu/lab |
| Người dùng pilot | 300-500 |
| Thời gian | 12 tháng |
| Chi phí lab | Không tính vào chi phí cố định nền tảng; tính riêng theo từng chiến dịch lấy mẫu |

## 4 pha triển khai

### Pha 1 - Xác thực nhu cầu và dữ liệu pilot (Tháng 1-2)

- Phỏng vấn 15 bên liên quan: HTX, doanh nghiệp thu mua, cán bộ khuyến nông, nông dân, nhà nghiên cứu/lab.
- Chốt 3-5 khu vực pilot ở đồng bằng sông Hồng.
- Chuẩn hóa thông điệp: cảnh báo sớm, ưu tiên lấy mẫu, không thay lab.
- Chuẩn bị quy trình nhập dữ liệu mẫu mới và ghi log phiên bản model.

### Pha 2 - Pilot dashboard và toolkit (Tháng 3-5)

- Mở tài khoản thử nghiệm cho 5-10 tổ chức.
- Cung cấp Public Free, Registered Free, Partner Pro, Research/Admin.
- Đưa toolkit vào thực địa thông qua HTX, khuyến nông, Zalo nhóm, checklist in/QR.
- Ghi nhận câu hỏi chatbot để cải thiện RAG theo vai trò.

### Pha 3 - Chuẩn hóa sản phẩm Pro (Tháng 6-8)

- Hoàn thiện báo cáo PDF/CSV vùng nguyên liệu.
- Thêm trạng thái: cần lấy mẫu, lab chưa xác nhận, đã xác nhận, cần theo dõi mùa vụ.
- Tối ưu quota API và chi phí chatbot.
- Thu feedback định kỳ từ HTX/doanh nghiệp/địa phương.

### Pha 4 - Mở rộng đối tác và tài chính (Tháng 9-12)

- Chuyển 5 tổ chức pilot thành Partner Pro trả phí.
- Tìm 1 gói tài trợ vùng pilot từ CSR/ESG/NGO hoặc doanh nghiệp trong chuỗi lúa gạo.
- Chuẩn bị mở rộng chỉ số ngoài arsenic: cadmium, dư lượng thuốc BVTV, mặn, nước tưới.
- Công bố báo cáo tác động pilot: số lượt dùng, số khu vực được ưu tiên kiểm tra, số đối tác xác thực.

## Dự toán chi phí vận hành cố định

Tổng dự toán hợp lý: **75 triệu VND/12 tháng**.

| Hạng mục | Ước tính/năm | Ghi chú |
|---|---:|---|
| Tên miền, email, cấu hình cơ bản | 1.200.000 VND | Domain, DNS, email liên hệ dự án |
| Hosting/serverless, storage, logs | 12.000.000 VND | Vercel/serverless hoặc cloud tương đương cho pilot |
| API chatbot RAG/LLM | 18.000.000 VND | Khoảng 1,5 triệu/tháng, quota kiểm soát |
| Database, backup, monitoring | 6.000.000 VND | Lưu dữ liệu người dùng pilot, log, backup |
| Bảo trì, sửa lỗi, cập nhật bảo mật | 24.000.000 VND | Khoảng 2 triệu/tháng cho maintenance tối thiểu |
| Cập nhật dữ liệu, retraining nhẹ | 8.000.000 VND | Chuẩn hóa dữ liệu mới, kiểm tra version model |
| Hỗ trợ đối tác, tài liệu toolkit | 5.800.000 VND | Form, checklist, hướng dẫn, buổi onboarding nhỏ |
| **Tổng** | **75.000.000 VND** | Chưa gồm chi phí xét nghiệm lab theo chiến dịch |

## Mô hình doanh thu

### 1. Partner Pro

Giá đề xuất: **15 triệu VND/năm/tổ chức**.

Đối tượng phù hợp:

- HTX lớn.
- Doanh nghiệp thu mua/xuất khẩu.
- Địa phương/cán bộ khuyến nông cần dashboard nội bộ.

Quyền lợi:

- Dashboard vùng nguyên liệu.
- Báo cáo PDF/CSV.
- Quota chatbot 300-1.000 câu/tháng/tổ chức.
- Toolkit hướng dẫn lấy mẫu và truyền thông rủi ro.
- Không phải chứng nhận an toàn thực phẩm.

Điểm hòa vốn pilot:

**5 Partner Pro x 15 triệu VND/năm = 75 triệu VND/năm**.

### 2. Tài trợ vùng pilot

Giá đề xuất: **50 triệu VND/năm/gói tài trợ vùng**.

Nguyên tắc:

- Sponsor được xuất hiện trong toolkit/community page.
- Sponsor không được can thiệp dữ liệu, model, màu rủi ro hoặc khuyến nghị.
- Không đặt quảng cáo trong bản đồ rủi ro, chatbot hoặc báo cáo kỹ thuật.

### 3. Báo cáo dữ liệu theo chiến dịch

Giá tham khảo: **2-5 triệu VND/báo cáo**, tùy phạm vi.

Phù hợp khi doanh nghiệp/địa phương cần:

- Tổng hợp khu vực ưu tiên lấy mẫu.
- Báo cáo trước mùa vụ.
- Báo cáo sau khi có dữ liệu lab xác nhận.

### 4. Affiliate/CSR có kiểm soát

Chỉ đặt ở toolkit, không đặt trong bản đồ hoặc kết luận rủi ro.

Ví dụ sản phẩm/đối tác có thể cân nhắc sau khi xác minh:

- Giống lúa ít hấp thụ arsenic/cadmium.
- Chế phẩm xử lý đất/nước.
- Dịch vụ xét nghiệm mẫu.
- Vật tư canh tác bền vững.

## Ma trận người dùng và người hưởng lợi

| Nhóm | Vai trò | Lợi ích chính | Có trả tiền không? |
|---|---|---|---|
| HTX lớn | Người dùng trực tiếp | Theo dõi vùng nguyên liệu, ưu tiên lấy mẫu, giảm rủi ro sau thu hoạch | Có thể trả Partner Pro |
| Doanh nghiệp thu mua/xuất khẩu | Người dùng trực tiếp | Quản trị chất lượng đầu vào, chuẩn bị hồ sơ vùng trồng | Có thể trả Partner Pro |
| Địa phương/khuyến nông | Người dùng trực tiếp | Phân bổ nguồn lực giám sát, truyền thông đúng nơi | Có thể qua ngân sách/tài trợ |
| Nhà khoa học/lab | Đối tác xác nhận | Xem bất định, SHAP, đề xuất điểm lấy mẫu bổ sung | Không chính, có thể là partner |
| Nông dân | Người hưởng lợi trung tâm | Nhận cảnh báo qua HTX/khuyến nông, tránh bị đánh đồng rủi ro khi chưa có dữ liệu | Không phải nhóm trả tiền chính |
| Người tiêu dùng | Hưởng lợi gián tiếp | Chuỗi dữ liệu minh bạch hơn | Không |

## Rủi ro và cách xử lý

| Phản biện | Cách trả lời |
|---|---|
| "Dự án không có thẩm quyền/công nhận" | Đúng. Dự án không cấp chứng nhận. AI chỉ hỗ trợ ưu tiên lấy mẫu; lab và cơ quan có thẩm quyền mới xác nhận. |
| "Người ta ăn gạo mãi có sao đâu" | Đây là rủi ro tích lũy dài hạn và rủi ro chất lượng vùng nguyên liệu, không phải ngộ độc tức thời. Mục tiêu là quản trị rủi ro, không gây hoang mang. |
| "Đất có từng đấy, chuyển đi đâu?" | Không yêu cầu chuyển đất hay bỏ trồng. Hệ thống giúp kiểm tra đúng nơi, quản lý nước/mùa vụ tốt hơn và truyền thông có dữ liệu. |
| "Nông dân không dùng công nghệ" | Nông dân không cần tự dùng dashboard. Thông tin đi qua HTX, khuyến nông, Zalo nhóm, workshop và checklist. |
| "Dữ liệu quá ít" | Vì vậy hệ thống hiển thị bất định và ưu tiên lấy mẫu bổ sung. Model không kết luận thay lab. |

## Chỉ số thành công sau 12 tháng

- 5 Partner Pro hoặc tương đương tài trợ đủ 75 triệu VND/năm.
- 5-10 tổ chức dùng thử có feedback.
- 15-30 cuộc phỏng vấn/xác thực stakeholder.
- 300-500 người dùng pilot tiếp cận dashboard/toolkit.
- Ít nhất 3 báo cáo vùng nguyên liệu mẫu.
- Ít nhất 1 quy trình lab-verification được thiết kế với đối tác.


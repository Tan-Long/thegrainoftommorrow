# Kế Hoạch Triển Khai Dự Án Hạt Gạo Ngày Mai

## 1. Cách bám tiêu chí chấm chung kết

Theo thang điểm dự kiến, dự án cần chứng minh được bốn nhóm nội dung: sự cần thiết và khả năng ứng dụng thực tế, tính khả thi và mức độ hoàn thiện demo, tính đổi mới/khác biệt, và năng lực phát triển của đội ngũ.

Với định hướng hiện tại, phần trình bày nên bám vào các điểm sau:

| Nhóm tiêu chí | Cách dự án cần chứng minh |
|---|---|
| Nhu cầu thị trường | Không trình bày chung chung là "asen nguy hiểm", mà chứng minh nhu cầu cụ thể: HTX, doanh nghiệp thu mua/xuất khẩu và địa phương cần biết nơi nào nên kiểm tra trước khi nguồn lực lấy mẫu có hạn. |
| Tác động bền vững | Gắn với SDG 2 (nông nghiệp bền vững), SDG 3 (sức khỏe), SDG 12 (sản xuất - tiêu dùng có trách nhiệm) và SDG 13 (thích ứng biến đổi khí hậu). Tác động chính là giúp giám sát đúng nơi, giảm truyền thông cảm tính và bảo vệ vùng nguyên liệu. |
| Giá trị từ AI | AI là lõi vì bài toán cần kết hợp dữ liệu mẫu, biến đất - nước - khí hậu, kịch bản tương lai và dải bất định để ưu tiên lấy mẫu. Nếu không có AI, việc chọn điểm kiểm tra dễ dựa vào kinh nghiệm rời rạc hoặc lấy mẫu dàn trải. |
| Tính khả thi | Cần tách rõ hai mức ngân sách: khoản 500 bảng dùng để hoàn thiện demo chung kết; ngân sách 75 triệu VND/năm là cho vận hành pilot sau cuộc thi. |
| Demo sản phẩm | Demo phải có đầu ra nhìn thấy được: dashboard bản đồ, chatbot giải thích theo vai trò, toolkit/phân quyền và mock báo cáo vùng nguyên liệu. |
| Tính đổi mới | Điểm mới nằm ở việc nối kịch bản biến đổi khí hậu với bản đồ ưu tiên lấy mẫu, dải bất định và luồng xác nhận bằng lab; không chỉ là chatbot hoặc bản đồ đơn lẻ. |
| Lợi thế khác biệt | Khác với bản đồ dữ liệu tĩnh hoặc tư vấn chung, hệ thống tập trung vào quyết định thực tế: vùng nào cần lấy mẫu trước, ai nhận thông tin, trạng thái lab là gì. |
| Phát triển so với vòng 1 | Sau vòng 1, dự án cần thể hiện đã chuyển từ demo kỹ thuật sang kế hoạch sản phẩm: có nhóm dùng trực tiếp, người hưởng lợi, mô hình pilot, chi phí, rủi ro và kiểm chứng nhu cầu. |

## 2. Bối cảnh và vấn đề cần giải quyết

Gạo là thực phẩm thiết yếu và là một phần quan trọng của chuỗi giá trị nông nghiệp Việt Nam. Tuy nhiên, một số rủi ro môi trường trong vùng trồng lúa không thể quan sát trực tiếp bằng mắt thường. Trong đó, arsenic là một ví dụ phù hợp để bắt đầu vì đây là rủi ro tích lũy dài hạn, có liên quan đến điều kiện đất, nước tưới, chế độ ngập và quá trình canh tác.

Điểm quan trọng của dự án không phải là tạo cảm giác lo ngại về việc ăn gạo hằng ngày. Vấn đề thực tế hơn là: khi nguồn lực xét nghiệm và giám sát có hạn, HTX, doanh nghiệp thu mua/xuất khẩu và địa phương cần biết khu vực nào nên được ưu tiên kiểm tra trước.

Dưới tác động của biến đổi khí hậu, điều kiện đất - nước trong ruộng lúa có thể thay đổi. Nhiệt độ, CO2, mưa cực đoan, ngập úng và chế độ nước trong ruộng có thể ảnh hưởng đến quá trình hóa học trong đất lúa, từ đó làm thay đổi khả năng di động của các chất như arsenic. Vì vậy, chỉ nhìn vào dữ liệu quá khứ là chưa đủ; cần có công cụ hỗ trợ dự báo sớm để xác định vùng cần theo dõi và lấy mẫu bổ sung.

Khoảng trống mà dự án hướng tới không phải là thay thế xét nghiệm hoặc thay cơ quan quản lý. Khoảng trống là bước trước đó: hỗ trợ các bên chọn đúng khu vực cần kiểm tra khi chưa thể xét nghiệm tất cả mọi nơi.

## 3. Định vị giải pháp

**Hạt Gạo Ngày Mai** là nền tảng AI hỗ trợ cảnh báo sớm và ưu tiên lấy mẫu vùng trồng lúa, bắt đầu với rủi ro arsenic.

Arsenic nên được trình bày là **metric đầu tiên** chứ không phải giới hạn cuối cùng của sản phẩm. Lý do chọn arsenic là vì có câu chuyện khoa học rõ, có dữ liệu nền và có nhu cầu giám sát dài hạn. Khi pilot có thêm dữ liệu và đối tác, nền tảng có thể mở rộng thành một bộ chỉ số rủi ro vùng nguyên liệu như cadmium, dư lượng thuốc bảo vệ thực vật, mặn, chất lượng nước tưới và chỉ số khí hậu/canh tác liên quan.

Thông điệp cốt lõi:

- Không thay phòng lab.
- Không cấm trồng.
- Không kết luận một vùng/hộ dân là an toàn hay không an toàn khi chưa có dữ liệu xác nhận.
- Ưu tiên kiểm tra đúng nơi để sử dụng nguồn lực giám sát hiệu quả hơn.

"Dự báo sớm" trong dự án này không có nghĩa là dự báo chính xác từng hạt gạo có bao nhiêu arsenic. Dự báo sớm được hiểu là:

1. Kết hợp dữ liệu mẫu hiện có với các biến liên quan đến đất, nước, khí hậu và vùng trồng.
2. Mô phỏng rủi ro theo kịch bản hiện tại và kịch bản khí hậu tương lai.
3. Hiển thị vùng có tín hiệu rủi ro hoặc độ bất định cao hơn.
4. Đề xuất vùng nên ưu tiên lấy mẫu.
5. Cập nhật lại hệ thống khi có dữ liệu lab mới.

Nói ngắn gọn: **AI không thay phòng lab; AI giúp chọn nơi cần phòng lab kiểm tra trước.**

## 4. Đối tượng sử dụng và hưởng lợi

### Nhóm sử dụng trực tiếp

- **HTX lớn:** theo dõi vùng nguyên liệu, phối hợp lấy mẫu, truyền thông lại cho nông dân.
- **Doanh nghiệp thu mua/xuất khẩu:** quản trị chất lượng đầu vào, giảm rủi ro vùng nguyên liệu trước mùa vụ.
- **Nhà máy chế biến/công ty lớn:** sàng lọc rủi ro vùng nguyên liệu trước khi nhập kho, đưa vào sản xuất hoặc chuẩn bị hồ sơ xuất khẩu.
- **Cán bộ khuyến nông/địa phương:** theo dõi vùng cần giám sát, phân bổ nguồn lực kiểm tra, hỗ trợ truyền thông cộng đồng.
- **Nhà nghiên cứu/lab:** xem dải bất định, đề xuất điểm lấy mẫu bổ sung, xác nhận dữ liệu thực nghiệm.

### Nhóm hưởng lợi

- **Nông dân:** nhận thông tin qua HTX, khuyến nông, nhóm Zalo, workshop hoặc checklist; không bị yêu cầu tự dùng dashboard phức tạp.
- **HTX và doanh nghiệp:** có công cụ hỗ trợ quản trị rủi ro vùng nguyên liệu.
- **Địa phương:** có thêm cơ sở để ưu tiên nguồn lực giám sát.
- **Người tiêu dùng:** hưởng lợi gián tiếp từ chuỗi dữ liệu minh bạch hơn.

## 5. Bản demo và hướng hoàn thiện sản phẩm

Bản demo hiện tại cần chứng minh một quy trình sử dụng thực tế, không chỉ là bản đồ trực quan.

Luồng sản phẩm đề xuất:

1. Người dùng chọn vùng trồng và kịch bản khí hậu.
2. Dashboard hiển thị tín hiệu rủi ro, dải bất định và vùng cần ưu tiên lấy mẫu.
3. Chatbot giải thích kết quả theo vai trò: HTX/doanh nghiệp, địa phương, nhà nghiên cứu hoặc người dân.
4. Toolkit hướng dẫn cách truyền thông rủi ro, cách phối hợp lấy mẫu và cách hiểu trạng thái dữ liệu.
5. Với đối tác có nhu cầu sâu hơn, hệ thống cung cấp báo cáo vùng nguyên liệu, export PDF/CSV và trạng thái lab verification.

Các trạng thái dữ liệu nên được thể hiện rõ trong demo:

- Dự báo từ mô hình.
- Cần ưu tiên lấy mẫu.
- Lab chưa xác nhận.
- Lab đã xác nhận.
- Cần tiếp tục theo dõi theo mùa vụ.

Điểm cần tránh là để người xem hiểu nhầm dashboard đang chứng nhận một vùng là an toàn hoặc không an toàn. Mọi kết luận chính thức vẫn cần dữ liệu phòng lab và đơn vị có thẩm quyền.

Để phù hợp tiêu chí chấm về mức độ hoàn thiện demo, đầu ra ở chung kết nên gồm:

- Dashboard tương tác có bản đồ và kịch bản khí hậu.
- Chatbot giải thích theo vai trò.
- Toolkit hướng dẫn truyền thông/lấy mẫu.
- Mock báo cáo vùng nguyên liệu cho đối tác.
- Video demo ngắn đề phòng lỗi mạng hoặc lỗi trình chiếu.

## 6. Kế hoạch kiểm chứng trước chung kết

Trong giai đoạn chuẩn bị chung kết, nhóm dự án cần kiểm chứng giả định với các bên liên quan thay vì chỉ trình bày ý tưởng từ góc nhìn kỹ thuật.

Mục tiêu kiểm chứng trong 2 tuần:

| Nhóm phỏng vấn | Số lượng mục tiêu | Mục tiêu kiểm chứng |
|---|---:|---|
| HTX/doanh nghiệp thu mua | 4 | Nhu cầu quản trị vùng nguyên liệu, nhu cầu báo cáo, khả năng trả phí |
| Khuyến nông/địa phương | 3 | Cách dùng dashboard để ưu tiên giám sát và truyền thông |
| Nông dân | 6 | Kênh tiếp nhận thông tin, mức độ dễ hiểu của cảnh báo, lo ngại khi bị đánh đồng rủi ro |
| Nhà nghiên cứu/lab | 2 | Cách trình bày bất định, quy trình lấy mẫu, giới hạn của mô hình |

Kết quả cần có trước chung kết:

- Tối thiểu 8 phản hồi thực tế.
- 3 trích dẫn ẩn danh có thể đưa vào slide kiểm chứng nhu cầu.
- Danh sách điểm cần sửa trong demo sau khi phỏng vấn.
- Kết luận sơ bộ về việc ai có khả năng dùng và ai có khả năng trả tiền.

## 7. Kế hoạch pilot 12 tháng sau cuộc thi

Pilot không được thiết kế như một hệ thống quốc gia ngay từ đầu. Phạm vi hợp lý là thử nghiệm ở đồng bằng sông Hồng, nơi có vùng trồng lúa, HTX, doanh nghiệp thu mua và hệ thống khuyến nông tương đối phù hợp để tiếp cận.

Phạm vi đề xuất:

- Khu vực: Hưng Yên, Ninh Bình, Hải Phòng, vùng ven Hà Nội.
- Quy mô: 3-5 vùng/tỉnh.
- Đối tác thử nghiệm: 5-10 HTX, doanh nghiệp, địa phương hoặc nhóm nghiên cứu/lab.
- Người dùng tiếp cận dashboard/toolkit: 300-500.
- Thời gian: 12 tháng.
- Chi phí lab: tính riêng theo từng chiến dịch, không đưa vào chi phí cố định nền tảng.

### Giai đoạn 1: Xác thực nhu cầu và chuẩn hóa dữ liệu (Tháng 1-2)

- Hoàn thành phỏng vấn stakeholder.
- Chọn 3-5 khu vực pilot.
- Chuẩn hóa thông điệp truyền thông: cảnh báo sớm, ưu tiên lấy mẫu, không thay lab.
- Thiết kế quy trình nhập dữ liệu mẫu mới và ghi log phiên bản mô hình.

Output: danh sách vùng pilot, interview notes, quy trình dữ liệu mẫu, messaging guide.

### Giai đoạn 2: Pilot dashboard và toolkit (Tháng 3-5)

- Mở tài khoản thử nghiệm cho 5-10 tổ chức.
- Triển khai dashboard, chatbot và toolkit.
- Đưa thông tin đến nông dân thông qua HTX, khuyến nông, nhóm Zalo, workshop và checklist.
- Ghi nhận câu hỏi chatbot và phản hồi sử dụng.

Output: dashboard pilot, toolkit thực địa, feedback log.

### Giai đoạn 3: Chuẩn hóa báo cáo và lab verification (Tháng 6-8)

- Hoàn thiện báo cáo PDF/CSV vùng nguyên liệu.
- Thêm trạng thái cần lấy mẫu/lab chưa xác nhận/lab đã xác nhận.
- Thiết kế quy trình phối hợp với lab hoặc nhóm nghiên cứu.
- Tối ưu quota chatbot và chi phí vận hành.

Output: mẫu báo cáo Pro, quy trình xác nhận bằng lab, chính sách quota.

### Giai đoạn 4: Chuyển đổi đối tác và mở rộng chỉ số (Tháng 9-12)

- Đánh giá đối tác pilot có nhu cầu chuyển sang gói trả phí.
- Tìm tài trợ vùng pilot từ CSR/ESG/NGO hoặc doanh nghiệp trong chuỗi lúa gạo.
- Chuẩn bị mở rộng chỉ số ngoài arsenic như cadmium, dư lượng thuốc bảo vệ thực vật, mặn hoặc chất lượng nước tưới.
- Công bố báo cáo tác động pilot.

Output: Partner Pro/tài trợ vùng, báo cáo tác động, roadmap năm tiếp theo.

## 8. Dự toán triển khai và mô hình tài chính

### 8.1. Chi phí hoàn thiện demo theo khoản tài trợ 500 bảng

Theo tiêu chí chấm, nhóm cần chứng minh việc sử dụng khoản tài trợ khoảng **500 bảng, tương đương khoảng 17,35 triệu VND**, là hợp lý cho giai đoạn hoàn thiện demo chung kết. Khoản này không nên trình bày như ngân sách vận hành cả năm, mà nên dùng cho các phần trực tiếp giúp sản phẩm đầu ra rõ hơn.

| Hạng mục | Ước tính | Mục đích |
|---|---:|---|
| Hosting/deploy, domain phụ, backup demo | 2.000.000 VND | Đảm bảo có bản demo online và phương án dự phòng |
| API chatbot và test quota trước chung kết | 2.500.000 VND | Kiểm tra chatbot theo vai trò, tránh lỗi khi demo |
| Hoàn thiện giao diện dashboard/toolkit/report mock | 4.000.000 VND | Làm demo đủ rõ theo tiêu chí sản phẩm đầu ra |
| Thiết kế poster/standee và tài sản pitch | 3.000.000 VND | Phục vụ trình bày chung kết |
| Dựng video truyền thông/demo 90-120 giây | 3.500.000 VND | Có video dự phòng và tài sản truyền thông |
| Phỏng vấn/đi lại/in checklist nhỏ | 2.000.000 VND | Lấy phản hồi thực tế từ HTX, nông dân, địa phương |
| Dự phòng | 350.000 VND | Phát sinh nhỏ |
| **Tổng** | **17.350.000 VND** | Phục vụ hoàn thiện demo và hồ sơ chung kết |

### 8.2. Chi phí vận hành pilot 12 tháng

Tổng chi phí cố định dự kiến cho 12 tháng pilot là **75 triệu VND**, chưa bao gồm chi phí xét nghiệm lab theo từng chiến dịch.

| Hạng mục | Ước tính/năm | Ghi chú |
|---|---:|---|
| Tên miền, email, cấu hình cơ bản | 1.200.000 VND | Domain, DNS, email liên hệ dự án |
| Hosting/serverless, storage, logs | 12.000.000 VND | Hạ tầng cho pilot |
| API chatbot RAG/LLM | 18.000.000 VND | Có quota theo vai trò/tổ chức |
| Database, backup, monitoring | 6.000.000 VND | Lưu log, dữ liệu người dùng pilot, backup |
| Bảo trì, sửa lỗi, cập nhật bảo mật | 24.000.000 VND | Maintenance tối thiểu |
| Cập nhật dữ liệu và retraining nhẹ | 8.000.000 VND | Chuẩn hóa dữ liệu mới, kiểm tra version model |
| Hỗ trợ đối tác và tài liệu toolkit | 5.800.000 VND | Checklist, onboarding, hướng dẫn |
| **Tổng** | **75.000.000 VND** | Chưa gồm lab theo chiến dịch |

Mô hình tài chính thử nghiệm:

- **Partner Pro:** 15 triệu VND/năm/tổ chức.
- **Điểm hòa vốn pilot:** 5 Partner Pro x 15 triệu VND = 75 triệu VND/năm.
- **Export/Procurement Risk Layer:** 50-120 triệu VND/năm/doanh nghiệp, tùy số vùng nguyên liệu, số báo cáo và mức tích hợp dữ liệu.
- **Tài trợ vùng pilot:** khoảng 50 triệu VND/năm/gói, với điều kiện sponsor không can thiệp dữ liệu, model hoặc kết luận rủi ro.
- **Báo cáo dữ liệu theo chiến dịch:** 2-5 triệu VND/báo cáo, tùy phạm vi.
- **Đối tác bảo hiểm nông nghiệp/khí hậu:** chỉ để ở roadmap hợp tác dữ liệu, không tính là nguồn thu chính trong 12 tháng đầu.

Các mức giá này là giả định để kiểm chứng, chưa được coi là mức thị trường đã chấp nhận.

Với mục tiêu xuất khẩu hoặc kiểm soát đầu vào của nhà máy/công ty lớn, dự án nên định vị là lớp quản trị rủi ro vùng nguyên liệu trước khi thu mua/chế biến, không phải chứng nhận đạt chuẩn xuất khẩu. Giá trị nằm ở việc chọn vùng/lô cần lấy mẫu trước, ghi nhận trạng thái lab, giảm lấy mẫu dàn trải và tạo báo cáo nội bộ cho bộ phận QA/QC, thu mua hoặc ESG.

Với bảo hiểm nông nghiệp, dự án không nên định vị là bên bán hoặc tư vấn bảo hiểm. Vai trò phù hợp hơn là cung cấp tín hiệu rủi ro vùng trồng, dữ liệu khí hậu và bằng chứng ưu tiên giám sát cho các đối tác tài chính/bảo hiểm nếu họ muốn nghiên cứu sản phẩm. Rủi ro arsenic không nên được trình bày như một quyền lợi bảo hiểm trực tiếp trong giai đoạn này.

## 9. Tính đổi mới và lợi thế khác biệt

Điểm mới của dự án không nằm ở việc dùng AI để trả lời câu hỏi chung chung. Điểm mới nằm ở việc kết nối bốn lớp trong cùng một quy trình:

1. Kịch bản biến đổi khí hậu và điều kiện vùng trồng.
2. Mô hình dự báo có dải bất định.
3. Bản đồ ưu tiên lấy mẫu cho HTX, doanh nghiệp và địa phương.
4. Quy trình xác nhận bằng lab trước khi đưa ra kết luận chính thức.

Lợi thế khác biệt của dự án là tập trung vào quyết định thực địa: **nên kiểm tra ở đâu trước, ai cần nhận thông tin, trạng thái xác nhận đang ở mức nào**. Cách tiếp cận này khác với bản đồ dữ liệu tĩnh, chatbot tư vấn chung hoặc các báo cáo khoa học khó dùng trực tiếp trong vận hành vùng nguyên liệu.

Nếu dữ liệu thực tế tăng lên sau pilot, mô hình có thể được cập nhật theo mùa vụ và mở rộng sang các chỉ số khác ngoài arsenic như cadmium, dư lượng thuốc bảo vệ thực vật, mặn hoặc chất lượng nước tưới. Đây là cơ sở để chứng minh tiềm năng phát triển sau cuộc thi.

## 10. Kế hoạch phát triển vòng chung kết

Trong giai đoạn chuẩn bị chung kết, dự án cần chuyển từ một demo kỹ thuật sang phương án có thể triển khai thử nghiệm:

- Có nhóm người dùng trực tiếp và nhóm hưởng lợi rõ hơn.
- Có cách xử lý phản biện về thẩm quyền: AI không thay lab.
- Có kế hoạch tiếp cận nông dân qua HTX/khuyến nông thay vì yêu cầu nông dân tự dùng dashboard.
- Có mô hình tài chính tách riêng ngân sách demo chung kết và ngân sách vận hành pilot.
- Có kế hoạch kiểm chứng nhu cầu bằng phỏng vấn thực tế.
- Có hướng mở rộng dữ liệu và mô hình khi lượng dữ liệu lớn hơn.

## 11. Cơ sở khoa học và tài liệu tham khảo

Phần cơ sở khoa học không nên trình bày quá dài trong pitch, nhưng cần có đủ nguồn để chứng minh ba ý: arsenic là rủi ro tích lũy dài hạn; biến đổi khí hậu có thể làm điều kiện đất - nước trong ruộng lúa thay đổi; và đồng bằng sông Hồng là phạm vi pilot có cơ sở địa phương, không phải chọn ngẫu nhiên.

| Luận điểm cần chứng minh | Nguồn tham chiếu phù hợp | Cách dùng trong hồ sơ |
|---|---|---|
| Arsenic không phải câu chuyện ngộ độc tức thời, mà là rủi ro phơi nhiễm dài hạn qua nước và thực phẩm | WHO arsenic fact sheet | Dùng cho slide vấn đề và câu trả lời khi bị hỏi "ăn gạo bao lâu có sao đâu" |
| Điều kiện khí hậu tương lai có thể làm thay đổi hành vi arsenic trong đất lúa và làm tăng arsenic vô cơ trong hạt gạo | Muehe et al. (2019), Nature Communications | Dùng như bằng chứng cơ chế cho luận điểm "dữ liệu quá khứ chưa đủ" |
| Biến đổi khí hậu có thể làm tăng arsenic trong lúa gạo và rủi ro sức khỏe liên quan tại châu Á đến năm 2050 | Wang et al. (2025), The Lancet Planetary Health | Dùng để củng cố trục climate scenario và mốc 2050 |
| Đồng bằng sông Hồng có bối cảnh nghiên cứu arsenic trong hệ thống lúa gạo, đặc biệt ở vùng ruộng ven biển/đất thấp | Nguyen et al. (2022), Applied Geochemistry; Tran et al. (2020), Land Degradation & Development | Dùng để giải thích vì sao pilot ở đồng bằng sông Hồng là hợp lý |
| Quản lý nước và điều kiện canh tác có thể ảnh hưởng đến hấp thụ arsenic trong cây lúa | Cao et al. (2020), Ecotoxicology and Environmental Safety; Price et al. (2013), Food and Energy Security | Dùng ở mức nguyên tắc trong toolkit, không biến thành khuyến nghị kỹ thuật cụ thể trong demo v1 |
| Bảo hiểm nông nghiệp có thể là cơ chế tài chính rủi ro, nhưng cần khung pháp lý, dữ liệu, đối tác bảo hiểm và hỗ trợ công | FAO agricultural insurance review; Nghị định 58/2018/NĐ-CP; Quyết định 13/2022/QĐ-TTg | Chỉ dùng để mở hướng partnership dài hạn, không nói dự án sẽ tự bán bảo hiểm |

Lưu ý khi dùng nguồn: Nature Communications 2019 là bằng chứng cơ chế từ thí nghiệm kiểm soát, không nên nói như dự báo trực tiếp cho từng tỉnh Việt Nam. Các nguồn về đồng bằng sông Hồng dùng để neo bối cảnh địa phương. Mọi kết luận thực địa vẫn cần dữ liệu mẫu mới và xác nhận phòng lab.

## 12. Rủi ro và cách kiểm soát

| Rủi ro/phản biện | Cách kiểm soát |
|---|---|
| Dự án bị hiểu là công cụ chứng nhận | Luôn ghi rõ: AI chỉ ưu tiên lấy mẫu; lab/cơ quan có thẩm quyền mới xác nhận |
| Gây hoang mang cho nông dân/người tiêu dùng | Trình bày là quản trị rủi ro dài hạn, không phải cảnh báo nguy hiểm tức thời |
| Dữ liệu quá khứ chưa đủ | Hiển thị bất định, giải thích tác động biến đổi khí hậu, dùng dữ liệu mới để cập nhật mô hình |
| Nông dân khó tiếp cận công nghệ | Dùng assisted access qua HTX, khuyến nông, Zalo, workshop và checklist |
| Không có đối tác trả phí | Kiểm chứng sớm với HTX lớn, doanh nghiệp thu mua/xuất khẩu, địa phương; chuẩn bị phương án tài trợ vùng |
| Chi phí lab cao | Không tính lab vào chi phí cố định; lab được thiết kế theo từng chiến dịch lấy mẫu |

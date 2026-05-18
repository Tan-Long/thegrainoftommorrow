import type {
  DistrictStat,
  ExpertCard,
  FaqItem,
  FeatureCard,
  FeedbackStep,
  LocalizedText,
  LogoCard,
  NavItem,
  TextSection,
} from "@/types/greenfarming";
import { publicAsset } from "@/lib/public-path";

export const assets = {
  logo: publicAsset("/images/greenfarming/logo.svg"),
  logoPng: publicAsset("/images/greenfarming/logo.png"),
  hero: publicAsset("/images/greenfarming/grapes1.webp"),
  flagVi: publicAsset("/images/greenfarming/assets-flags-vi.png"),
  flagEn: publicAsset("/images/greenfarming/assets-flags-en.png"),
  icons: {
    land: publicAsset("/images/greenfarming/land-1.png"),
    cow: publicAsset("/images/greenfarming/cow-2.png"),
    grass: publicAsset("/images/greenfarming/grass-1.png"),
    pear: publicAsset("/images/greenfarming/pear-1.png"),
    fertilizer: publicAsset("/images/greenfarming/grass.png"),
    watering: publicAsset("/images/greenfarming/watering-plants-1.png"),
    person: publicAsset("/images/greenfarming/person.png"),
    mail: publicAsset("/images/greenfarming/mail.png"),
    call: publicAsset("/images/greenfarming/call.png"),
    encrypted: publicAsset("/images/greenfarming/encrypted.png"),
  },
  architecture: {
    national: publicAsset("/images/greenfarming/system-architecture-1.png"),
    onsite: publicAsset("/images/greenfarming/system-architecture-2.png"),
  },
  sponsors: {
    aus4innovation: publicAsset(
      "/images/greenfarming/images-about-us-sponsors-aus4innovation.webp",
    ),
    australianAid: publicAsset(
      "/images/greenfarming/images-about-us-sponsors-australian-aid.png",
    ),
    csiro: publicAsset("/images/greenfarming/images-about-us-sponsors-csiro.png"),
    bkhcn: publicAsset("/images/greenfarming/images-about-us-sponsors-bkhcn.png"),
  },
  partners: {
    griffith: publicAsset("/images/greenfarming/images-about-us-partners-griffith.png"),
    hust: publicAsset("/images/greenfarming/images-about-us-partners-hust.png"),
    thanhHoa: publicAsset(
      "/images/greenfarming/images-about-us-partners-thanh-hoa-doard.png",
    ),
    mismart: publicAsset("/images/greenfarming/images-about-us-partners-mismart.png"),
    miagri: publicAsset("/images/greenfarming/images-about-us-partners-miagri.png"),
    aimesoft: publicAsset("/images/greenfarming/images-about-us-partners-aimesoft.png"),
  },
  experts: {
    henry: publicAsset("/images/greenfarming/images-about-us-experts-henry-nguyen.jpg"),
    jun: publicAsset("/images/greenfarming/images-about-us-experts-jun-jo.jpg"),
    dieuAnh: publicAsset(
      "/images/greenfarming/images-about-us-experts-dieu-anh-van.jpg",
    ),
    yongsheng: publicAsset(
      "/images/greenfarming/images-about-us-experts-yongsheng-gao.jpg",
    ),
    phiLe: publicAsset("/images/greenfarming/images-about-us-experts-phi-le-nguyen.jpg"),
    quyetThang: publicAsset(
      "/images/greenfarming/images-about-us-experts-quyet-thang-huynh.jpg",
    ),
  },
};

export const navItems: NavItem[] = [
  {
    href: "/app",
    label: { vi: "Ứng dụng nông trại", en: "Farm Application" },
  },
  { href: "/", label: { vi: "Thống Kê", en: "Statistics" } },
  { href: "/about-us", label: { vi: "Về Chúng Tôi", en: "About Us" } },
  { href: "/architecture", label: { vi: "Công Nghệ", en: "Technology" } },
  {
    href: "/frequently-asked-questions",
    label: { vi: "Đặt Câu Hỏi", en: "Ask A Question" },
  },
  { href: "/feedback", label: { vi: "Góp Ý", en: "Feedback" } },
];

export const commonText = {
  login: { vi: "Đăng nhập", en: "Login" },
  signup: { vi: "Đăng ký", en: "Sign up" },
  roleInProject: { vi: "Vai trò trong dự án", en: "Role in the project" },
  compare: { vi: "Compare", en: "Compare" },
  next: { vi: "Tiếp theo", en: "Next" },
  back: { vi: "Quay lại", en: "Back" },
  submit: { vi: "Gửi góp ý", en: "Submit feedback" },
};

export const homeHero = {
  title: {
    vi: "TRUNG TÂM DỮ LIỆU\nVỀ NÔNG NGHIỆP SINH THÁI\nTỈNH THANH HÓA",
    en: "CARBON FARMING DATA HUB\nIN THANH HOA PROVINCE",
  },
  description: {
    vi: "Nhiều người vẫn sống bằng nghề nông tự cung tự cấp, trên một trang trại nhỏ. Họ chỉ có thể trồng đủ lương thực để nuôi người bản thân, gia đình và gia súc. Năng suất là lượng lương thực được trồng trên một diện tích đất nhất định và thường thấp. Điều này là do nông dân tự cung tự cấp thường có trình độ học vấn thấp hơn và họ có ít tiền hơn để mua trang thiết bị nhằm nâng cao năng suất. Hạn hán và các vấn đề khác đôi khi gây ra thiếu hụt, suy giảm năng suất cây trồng. Việc khai hoang có thể cung cấp thêm đất trồng, nâng năng suất. Điều này cung cấp nhiều thu nhập hơn cho gia đình nông dân, nhưng có thể gây hại cho đất nước và môi trường xung quanh trong nhiều năm.",
    en: "Many people still live by subsistence farming, on a small farm. They can only grow enough food to feed themselves, their families, and their livestock. The yield is the amount of food grown on a given amount of land, and it is often low. This is because subsistence farmers are generally less educated, and they have less money to buy equipment. Drought and other problems sometimes cause famines. Where yields are low, deforestation can provide new land to grow more food. This provides more nutrition for the farmer's family, but can be bad for the country and the surrounding environment over many years.",
  },
  cta: { vi: "KHÁM PHÁ NGAY", en: "EXPLORE NOW" },
};

export const features: FeatureCard[] = [
  {
    title: { vi: "Bản đồ nông trại", en: "Farm Mapping" },
    description: {
      vi: "Hiển thị nông trại của bạn trên bản đồ của chúng tôi để theo dõi chúng một cách dễ dàng. Bạn có thể thuận tiện theo dõi lượng khí nhà kính mà nông trại của bạn phát thải, vị trí của động vật, và nhiều thông tin khác.",
      en: "Display your farm on our map for easy tracking. You can conveniently track the amount of greenhouse gas your farms emit, animal locations, and more.",
    },
    icon: assets.icons.land,
    alt: "Land",
  },
  {
    title: {
      vi: "Quản lý cá nhân và động vật",
      en: "Individual And Mob Management",
    },
    description: {
      vi: "Cung cấp kiến thức về loại động vật nào phát thải khí nhà kính nhiều nhất, những hoạt động nào gây hại cho môi trường.",
      en: "Provides information on which animals emit the most greenhouse gases and which activities harm the environment.",
    },
    icon: assets.icons.cow,
    alt: "Cow",
  },
  {
    title: { vi: "Tác động của chăn nuôi", en: "Grazing Impacts" },
    description: {
      vi: "Xem xét cách chiến lược chăn nuôi và quản lý của bạn, quyết định về phân bón, quản lý phân bón, loại hình tưới tiêu ảnh hưởng đến lượng khí nhà kính phát thải.",
      en: "See how your grazing strategies, fertilizer use, manure management, and watering methods affect greenhouse gas emissions.",
    },
    icon: assets.icons.grass,
    alt: "Grass",
  },
  {
    title: { vi: "Hồ sơ thu hoạch", en: "Harvest Record" },
    description: {
      vi: "Ghi lại các thông tin liên quan đến việc thu hoạch các cánh đồng/cỏ.",
      en: "Record the details related to harvesting your paddocks/pastures.",
    },
    icon: assets.icons.pear,
    alt: "Pear",
  },
  {
    title: { vi: "Hồ sơ phân Bón", en: "Fertilizer Record" },
    description: {
      vi: "Tuân thủ quy định về dữ liệu phân bón. Ghi lại ngày, giờ, điều kiện thời tiết và các hóa chất được áp dụng cho từng cánh đồng.",
      en: "Stay compliant with fertiliser records. Record the date, time, weather conditions and chemicals applied to each paddock.",
    },
    icon: assets.icons.fertilizer,
    alt: "Grass",
  },
  {
    title: {
      vi: "Hồ sơ tưới tiêu và bón phân",
      en: "Watering And Soil Enrichment Records",
    },
    description: {
      vi: "Theo dõi các hoạt động tưới tiêu và bón phân đất như việc tạo kiềm và chúng tôi sẽ cung cấp thông tin về tác động của hoạt động đó đối với môi trường.",
      en: "Track the watering activities and soil enrichment activities such as liming and we will give insights about the impact of that activity to the environment.",
    },
    icon: assets.icons.watering,
    alt: "Watering Plants",
  },
];

export const homeIntro: TextSection = {
  title: {
    vi: "Phát thải khí nhà kính trên toàn tỉnh Thanh Hóa",
    en: "Green House Gas Emission Across Thanh Hoa Province",
  },
  body: [
    {
      vi: "Tỉnh Thanh Hóa đang có mức phát thải khí nhà kính cao. Một trong những tác nhân chính gây ra lượng khí thải này là các hoạt động nông nghiệp. Tỷ lệ phát thải đã tăng lên trong thập kỷ qua, ảnh hưởng đến môi trường địa phương và góp phần gây ra biến đổi khí hậu. Những nỗ lực như canh tác xanh, trao đổi, mua bán tín chỉ carbon đang được thực hiện để giảm thiểu lượng khí thải và cũng là 1 nguồn thu nhập mới đáng kể cho người nông dân. Dưới đây là bản đồ thể hiện lượng khí thải nhà kính phất thải ra môi trường bởi các hoạt động nông nghiệp của các xã trong địa bàn tỉnh Thanh Hóa",
      en: "Thanh Hóa Province is experiencing a high level of greenhouse gas emissions. One of the major contributors to these emissions is agricultural activities. The emission rate has increased over the last decade, impacting local environments and contributing to climate change. Efforts such as green farming and carbon credit trading are being implemented to mitigate the emissions and also become a substantial income for farmers.",
    },
  ],
};

export const districts: DistrictStat[] = [
  { name: "BÁ THƯỚC", emissions: "184.598t", area: "889,0km2" },
  { name: "BỈM SƠN", emissions: "33.055t", area: "72,0km2" },
  { name: "CẨM THỦY", emissions: "223.313t", area: "482,7km2" },
  { name: "HOẰNG HÓA", emissions: "296.079t", area: "255,3km2" },
  { name: "HÀ TRUNG", emissions: "213.009t", area: "279,2km2" },
  { name: "HẬU LỘC", emissions: "205.522t", area: "159,9km2" },
  { name: "LANG CHÁNH", emissions: "85.445t", area: "667,2km2" },
  { name: "MƯỜNG LÁT", emissions: "106.208t", area: "929,8km2" },
  { name: "NGA SƠN", emissions: "228.212t", area: "172,5km2" },
  { name: "NGHI SƠN", emissions: "258.569t", area: "515,2km2" },
  { name: "NGỌC LẶC", emissions: "198.854t", area: "562,2km2" },
  { name: "NHƯ THANH", emissions: "159.505t", area: "675,5km2" },
  { name: "NHƯ XUÂN", emissions: "125.048t", area: "800,6km2" },
  { name: "NÔNG CỐNG", emissions: "381.561t", area: "324,1km2" },
  { name: "QUAN HÓA", emissions: "109.531t", area: "1.132,1km2" },
  { name: "QUAN SƠN", emissions: "70.206t", area: "1.061,4km2" },
  { name: "QUẢNG XƯƠNG", emissions: "257.575t", area: "261,5km2" },
  { name: "YÊN ĐỊNH", emissions: "420.413t", area: "246,2km2" },
];

export const emissionsNarratives: TextSection[] = [
  {
    title: {
      vi: "Các chất thải phát thải nhiều nhất trong nông nghiệp ở Thanh Hóa",
      en: "Major Agricultural Emissions In Thanh Hoa",
    },
    body: [
      {
        vi: "Tại Thanh Hóa, nông nghiệp là một trong những ngành góp phần lớn vào việc phát thải các chất thải khí nhà kính. Các chất thải phát thải nhiều nhất bao gồm methane (CH₄) từ chăn nuôi, quản lý phân hữu cơ và canh tác lúa nước; nitrous oxide (N₂O) chủ yếu từ phân bón nitơ và quản lý đất.",
        en: "In Thanh Hóa, agriculture is a major contributor to greenhouse gas emissions. The most emitted pollutants include methane (CH₄) from livestock digestion, organic manure management, wet rice cultivation, and nitrous oxide (N₂O) from nitrogen fertilizers and soil management.",
      },
      {
        vi: "Các biện pháp đang được triển khai để giảm thiểu lượng phát thải này bao gồm việc sử dụng các phương pháp canh tác bền vững, quản lý chất thải và tái chế chất thải nông nghiệp.",
        en: "Measures are being implemented to reduce these emissions, including sustainable farming methods, waste management, and agricultural waste recycling.",
      },
    ],
  },
  {
    title: {
      vi: "Phát thải CO₂ hàng năm trong Nông nghiệp Thanh Hóa là bao nhiêu?",
      en: "What Is The Annual CO₂ Emission From Agriculture In Thanh Hoa?",
    },
    body: [
      {
        vi: "Tỉnh Thanh Hóa, nằm ở miền bắc Việt Nam, là một khu vực có ý nghĩa ngày càng tăng trong bối cảnh biến đổi khí hậu và bền vững môi trường. Phát thải khí nhà kính của tỉnh này, bao gồm khí carbon dioxide (CO₂), methane (CH₄) và nitrous oxide (N₂O), đã trở thành một đề tài quan trọng.",
        en: "Thanh Hoa Province, located in northern Vietnam, is an area of growing significance in the context of climate change and environmental sustainability. The province's greenhouse gas emissions, including CO₂, CH₄, and N₂O, have become a subject of paramount importance.",
      },
    ],
  },
  {
    title: {
      vi: "Nông nghiệp Thanh Hóa đóng góp bao nhiêu phần trăm phát thải CO₂ toàn cầu?",
      en: "How Much Does Agriculture In Thanh Hoa Contribute To Global CO₂ Emissions?",
    },
    body: [
      {
        vi: "Cuộc nghiên cứu nhấn mạnh các tác động môi trường của phát thải khí nhà kính của tỉnh Thanh Hóa. Nó khám phá cách những phát thải này đóng góp vào biến đổi khí hậu toàn cầu, cũng như các tác động cục bộ như làm giảm chất lượng không khí, tác động lên hệ sinh thái và các rủi ro tiềm ẩn đối với sức khỏe công chúng.",
        en: "The study emphasizes the environmental implications of Thanh Hoa Province's greenhouse gas emissions. It explores how these emissions contribute to global climate change and local effects such as air quality degradation, ecosystem impacts, and potential public health risks.",
      },
    ],
  },
  {
    title: {
      vi: "Mỗi người ở Thanh Hóa trung bình phát thải bao nhiêu CO₂?",
      en: "Per Capita: How Much CO2 Does The Average Person In Thanh Hoa Emit?",
    },
    body: [
      {
        vi: "Con số phát thải hàng năm thường được sử dụng để đánh giá tác động biến đổi khí hậu của trung bình mỗi con người lên môi trường. Biểu đồ cho thấy xu hướng tăng của phát thải trung bình trên mỗi người trong tỉnh Thanh Hoá.",
        en: "This annual emissions figure is employed to assess the climate change impact of people in Thanh Hoa. The trend shows that per capita greenhouse gas emissions are increasing, reaching about 1.227 tons of CO₂ per person per month in 2024.",
      },
    ],
  },
  {
    title: {
      vi: "Phát thải CO₂ do các loài động vật khác nhau được nuôi ở Thanh Hóa gây ra là bao nhiêu?",
      en: "How Much CO2 Emissions Are Caused By Different Animals Raised In Thanh Hoa?",
    },
    body: [
      {
        vi: "Biểu đồ là một cách thú vị để mô tả sự phân bố của phát thải carbon dioxide (CO₂) được ghi cho các loài động vật khác nhau. Dữ liệu từ năm 2018 đến năm 2022 cho thấy trâu có mức phát thải cao nhất, tiếp theo là bò, trong khi dê và lợn thấp hơn.",
        en: "The area chart depicts the distribution of CO₂ emissions attributed to various animal species. Based on data from 2018 to 2022, buffalo have the highest emissions, followed by dairy cow, while pigs and goat have lower emissions.",
      },
    ],
  },
  {
    title: {
      vi: "Tương quan lượng phát thải giữa động vật và thực vật được nuôi trồng trên các trang trại",
      en: "Emission Correlation Between Animals And Plants Grown On Farms",
    },
    body: [
      {
        vi: "Theo dữ liệu chúng tôi thu thập được từ các nông trại, lượng khí phát thải trung bình trong 1 tháng giữa các loại cây trồng và vật nuôi có tỷ lệ như biểu đồ đang thể hiện.",
        en: "According to the data we collected from farms, the average monthly emissions between crops and livestock have the ratio shown in the chart.",
      },
    ],
  },
  {
    title: {
      vi: "Top 10 huyện phát thải và hấp thu nhiều nhất trong tỉnh Thanh Hóa?",
      en: "Top 10 Districts With The Highest Emissions And Absorptions In Thanh Hoa Province",
    },
    body: [
      {
        vi: "Thanh Hóa đối mặt với những thách thức liên quan đến phát thải khí nhà kính và cần các chiến lược hiệu quả để hấp thu và làm giảm chúng. Tỉnh đang kết hợp nông nghiệp bền vững, năng lượng tái tạo, tái trồng cây và tương tác với công chúng.",
        en: "Thanh Hoa faces challenges related to greenhouse gas emissions and the need for effective removal and mitigation strategies. The province is combining sustainable agriculture, renewable energy adoption, reforestation, and public engagement.",
      },
    ],
  },
];

export const sponsors = [
  {
    label: { vi: "TÀI TRỢ BỞI", en: "FUNDED BY" },
    images: [assets.sponsors.aus4innovation, assets.sponsors.australianAid],
  },
  {
    label: { vi: "QUẢN LÝ BỞI", en: "MANAGED BY" },
    images: [assets.sponsors.csiro],
  },
  {
    label: { vi: "HỢP TÁC VỚI", en: "IN PARTNERSHIP WITH" },
    images: [assets.sponsors.bkhcn],
  },
];

export const partnerCards: LogoCard[] = [
  {
    name: "Đại học Griffith",
    tag: { vi: "Đơn vị dẫn dắt tại Úc", en: "Australian lead" },
    image: assets.partners.griffith,
    description: {
      vi: "Trường đại học hàng đầu về đổi mới với trọng tâm hành động khí hậu và nghiên cứu ứng dụng",
      en: "A leading university in innovation with a focus on climate action and applied research",
    },
    role: {
      vi: "Quản lý dự án, kết nối các bên liên quan và lãnh đạo nhóm AI",
      en: "Project management, stakeholder connection and AI team leadership",
    },
  },
  {
    name: "Đại học Bách Khoa Hà Nội",
    tag: { vi: "Đơn vị dẫn dắt tại Việt Nam", en: "Vietnam lead" },
    image: assets.partners.hust,
    description: {
      vi: "Trường đại học kỹ thuật danh tiếng, dẫn đầu về đào tạo khoa học, kỹ thuật và công nghệ",
      en: "A prestigious technical university leading science, engineering and technology education",
    },
    role: {
      vi: "Lãnh đạo nhóm nông nghiệp carbon, hệ thống đo lường carbon và đào tạo nông dân",
      en: "Carbon farming leadership, carbon measurement systems and farmer training",
    },
  },
  {
    name: "Sở Nông nghiệp và Môi trường Thanh Hóa",
    tag: { vi: "Đối tác chính phủ", en: "Government partner" },
    image: assets.partners.thanhHoa,
    description: {
      vi: "Sở Nông nghiệp và Môi trường điều phối hơn 50 hợp tác xã",
      en: "The provincial department coordinates more than 50 cooperatives",
    },
    role: {
      vi: "Đối tác triển khai, xác định yêu cầu người dùng và thử nghiệm nền tảng",
      en: "Implementation partner, user requirements and platform testing",
    },
  },
  {
    name: "MiSmart",
    tag: { vi: "Đối tác công nghệ", en: "Technology partner" },
    image: assets.partners.mismart,
    description: {
      vi: "Chuyên gia sản xuất máy bay nông nghiệp với chứng nhận ISO 9001:2015",
      en: "Agricultural drone production specialist with ISO 9001:2015 certification",
    },
    role: {
      vi: "Công nghệ drone, thu thập dữ liệu tự động và tích hợp cảm biến",
      en: "Drone technology, automated data collection and sensor integration",
    },
  },
  {
    name: "MiAgri",
    tag: { vi: "Đối tác thương mại", en: "Commercial partner" },
    image: assets.partners.miagri,
    description: {
      vi: "Xây dựng hệ sinh thái nông nghiệp phygital và nền tảng số cho nông dân Việt Nam",
      en: "Building a phygital agricultural ecosystem and digital platform for Vietnamese farmers",
    },
    role: {
      vi: "Kiếm tiền từ IP, thương mại hóa nền tảng và tích hợp thị trường",
      en: "IP monetization, platform commercialization and market integration",
    },
  },
  {
    name: "Aimesoft",
    tag: { vi: "Đối tác công nghệ", en: "Technology partner" },
    image: assets.partners.aimesoft,
    description: {
      vi: "Nhà cung cấp dịch vụ AI hàng đầu với tầm nhìn dẫn đầu công nghệ số hóa bản sao toàn cầu",
      en: "A leading AI service provider with a vision for global digital twin technology",
    },
    role: {
      vi: "Phát triển theo tiêu chuẩn công nghiệp, tích hợp nền tảng và thương mại hóa dài hạn",
      en: "Industrial-grade development, platform integration and long-term commercialization",
    },
  },
];

export const experts: ExpertCard[] = [
  {
    name: "PGS. Henry Nguyễn",
    role: { vi: "Quản lý dự án, Trưởng nhóm WP2", en: "Project manager, WP2 lead" },
    organization: { vi: "Đại học Griffith", en: "Griffith University" },
    description: {
      vi: "Phó Giáo sư và Nghiên cứu sinh ARC DECRA chuyên ngành AI và khoa học dữ liệu",
      en: "Associate Professor and ARC DECRA Fellow specializing in AI and data science",
    },
    image: assets.experts.henry,
  },
  {
    name: "PGS. Jun Jo",
    role: { vi: "Trưởng nhóm WP1", en: "WP1 lead" },
    organization: { vi: "Đại học Griffith", en: "Griffith University" },
    description: {
      vi: "Chủ tịch Ủy ban Olympic Robot Quốc tế và Giám đốc Phòng thí nghiệm Robot Griffith",
      en: "Chair of the International Robot Olympiad Committee and Director of Griffith Robotics Lab",
    },
    image: assets.experts.jun,
  },
  {
    name: "PGS. Văn Diệu Anh",
    role: { vi: "Trưởng nhóm WP3", en: "WP3 lead" },
    organization: { vi: "Đại học Bách Khoa Hà Nội", en: "Hanoi University of Science and Technology" },
    description: {
      vi: "Phó Trưởng khoa Quản lý Môi trường, chuyên gia về ô nhiễm môi trường",
      en: "Vice Dean of Environmental Management and environmental pollution specialist",
    },
    image: assets.experts.dieuAnh,
  },
  {
    name: "GS. Yongsheng Gao",
    role: { vi: "Đồng Trưởng nhóm WP1", en: "Co-lead WP1" },
    organization: { vi: "Đại học Griffith", en: "Griffith University" },
    description: {
      vi: "Giám đốc ARC Farming Hub và IIIS, chuyên gia về tin học môi trường và thị giác máy tính",
      en: "Director of ARC Farming Hub and IIIS, expert in environmental informatics and computer vision",
    },
    image: assets.experts.yongsheng,
  },
  {
    name: "PGS. Nguyễn Phi Lê",
    role: { vi: "Thành viên nhóm WP2", en: "WP2 member" },
    organization: { vi: "Đại học Bách Khoa Hà Nội", en: "Hanoi University of Science and Technology" },
    description: {
      vi: "Giám đốc Điều hành BKAI, lãnh đạo hơn 30 nhà nghiên cứu trong AI ứng dụng cho nông nghiệp",
      en: "Executive Director of BKAI, leading more than 30 researchers in agricultural AI",
    },
    image: assets.experts.phiLe,
  },
  {
    name: "PGS. Huỳnh Quyết Thắng",
    role: { vi: "Thành viên nhóm WP2", en: "WP2 member" },
    organization: { vi: "Đại học Bách Khoa Hà Nội", en: "Hanoi University of Science and Technology" },
    description: {
      vi: "Giám đốc HUST, chuyên gia về chất lượng phần mềm và phân tích dữ liệu lớn",
      en: "HUST director, expert in software quality and big data analytics",
    },
    image: assets.experts.quyetThang,
  },
];

export const architectureSections = {
  hero: {
    title: { vi: "Kiến Trúc Dự Án", en: "Project Architecture" },
    subtitle: {
      vi: "Hệ thống AI và Digital Twins cho nông nghiệp carbon bền vững tại tỉnh Thanh Hóa",
      en: "AI and Digital Twins system for sustainable carbon farming in Thanh Hoa",
    },
    stats: [
      { value: "2", label: { vi: "Hệ thống con", en: "Subsystems" } },
      { value: "50", label: { vi: "Hợp tác xã", en: "Cooperatives" } },
      { value: "IoT & AI", label: { vi: "Cảm biến và AI", en: "Sensors and AI" } },
    ],
  },
  overview: {
    title: { vi: "Tổng Quan Dự Án", en: "Project Overview" },
    body: {
      vi: "Dự án nhằm triển khai nền tảng digital twin được hỗ trợ bởi AI để quản lý phát thải và hấp thụ carbon nông nghiệp tại tỉnh Thanh Hóa, Việt Nam. Hệ thống hoạt động trên hai hệ thống con bổ sung cho nhau.",
      en: "The project deploys an AI-supported digital twin platform to manage agricultural carbon emissions and sequestration in Thanh Hoa, Vietnam. The platform operates through two complementary subsystems.",
    },
    cards: [
      {
        title: { vi: "Khả năng mở rộng", en: "Scalability" },
        body: {
          vi: "Các tổ chức có thể điều chỉnh chiến lược giám sát dựa trên ngân sách và hồ sơ phát thải",
          en: "Organizations can tune monitoring strategies based on budget and emission profiles",
        },
      },
      {
        title: { vi: "Hiệu quả chi phí", en: "Cost effective" },
        body: {
          vi: "Hệ thống tuân thủ quốc gia chi phí thấp cho giám sát rộng rãi",
          en: "A low-cost national compliance system for broad monitoring",
        },
      },
      {
        title: { vi: "Độ chính xác cao", en: "High accuracy" },
        body: {
          vi: "Hệ thống giám sát tại chỗ cung cấp đo lường chính xác với sai số nhỏ",
          en: "On-site monitoring provides precise measurement with small error margins",
        },
      },
    ],
  },
};

export const faqItems: FaqItem[] = [
  {
    question: { vi: "Canh tác carbon là gì?", en: "What is carbon farming?" },
    answer: {
      vi: "Canh tác carbon là một tập hợp các thực hành nông nghiệp giúp lưu trữ carbon trong đất, giảm lượng carbon trong khí quyển. Các phương pháp này bao gồm trồng cây che phủ, giảm cày xới và trồng cây xanh.",
      en: "Carbon farming is a set of agricultural practices that store carbon in soil and reduce atmospheric carbon. Methods include cover crops, reduced tillage and planting trees.",
    },
  },
  {
    question: { vi: "Bù trừ carbon là gì?", en: "What is carbon offsetting?" },
    answer: {
      vi: "Bù trừ carbon là sự giảm phát thải khí nhà kính được sử dụng để bù đắp cho lượng phát thải ở nơi khác. Ví dụ, một công ty phát thải nhiều carbon dioxide có thể mua tín chỉ bù trừ carbon để bù đắp lượng phát thải của họ.",
      en: "Carbon offsetting is a greenhouse gas reduction used to compensate for emissions elsewhere. A company with high emissions can buy carbon credits to offset them.",
    },
  },
  {
    question: {
      vi: "Chương trình ACCU & Cơ quan quản lý năng lượng sạch là gì?",
      en: "What are the ACCU Scheme and Clean Energy Regulator?",
    },
    answer: {
      vi: "Chương trình ACCU cho phép các chủ đất kiếm được Đơn vị tín chỉ carbon Úc bằng cách lưu trữ carbon trong đất. Cơ quan Quản lý Năng lượng Sạch là cơ quan chính phủ giám sát chương trình ACCU.",
      en: "The ACCU Scheme allows landholders to earn Australian Carbon Credit Units by storing carbon in soil. The Clean Energy Regulator oversees the program.",
    },
  },
  {
    question: { vi: "Quỹ Giảm Phát Thải là gì?", en: "What is the Emissions Reduction Fund?" },
    answer: {
      vi: "Quỹ Giảm Phát Thải là một quỹ của chính phủ cung cấp các ưu đãi tài chính cho doanh nghiệp để giảm phát thải khí nhà kính. Quỹ này được sử dụng để mua tín chỉ bù trừ carbon từ các doanh nghiệp đã giảm phát thải của họ.",
      en: "The Emissions Reduction Fund provides financial incentives for businesses to reduce greenhouse gas emissions and purchases carbon credits from eligible projects.",
    },
  },
];

export const feedbackSteps: FeedbackStep[] = [
  {
    title: { vi: "Vai trò & sử dụng", en: "Role & usage" },
    description: {
      vi: "Giúp chúng tôi hiểu bối cảnh sử dụng của bạn.",
      en: "Help us understand how you use the product.",
    },
    fields: [
      {
        label: { vi: "Vai trò", en: "Role" },
        type: "select",
        required: true,
        options: [
          { vi: "Nông dân", en: "Farmer" },
          { vi: "Hợp tác xã", en: "Cooperative" },
          { vi: "Cán bộ nhà nước", en: "Government officer" },
          { vi: "Khác", en: "Other" },
        ],
      },
      {
        label: { vi: "Địa điểm (huyện, xã, ...)", en: "Location (district, commune, ...)" },
        type: "textarea",
        required: true,
      },
      {
        label: { vi: "Tần suất sử dụng", en: "Usage frequency" },
        type: "select",
        required: true,
        options: [
          { vi: "Hàng ngày", en: "Daily" },
          { vi: "Hàng tuần", en: "Weekly" },
          { vi: "Thỉnh thoảng", en: "Sometimes" },
          { vi: "Lần đầu sử dụng", en: "First time" },
        ],
      },
    ],
  },
  {
    title: { vi: "Tính năng đã dùng", en: "Used features" },
    description: {
      vi: "Chọn các tính năng bạn đã trải nghiệm.",
      en: "Select the features you have tried.",
    },
    fields: [
      {
        label: { vi: "Tính năng", en: "Features" },
        type: "checkbox",
        options: [
          { vi: "Bản đồ nông trại", en: "Farm map" },
          { vi: "Biểu đồ phát thải", en: "Emission charts" },
          { vi: "Hồ sơ vật nuôi", en: "Livestock records" },
          { vi: "Khuyến nghị canh tác", en: "Farming recommendations" },
        ],
      },
    ],
  },
  {
    title: { vi: "Đánh giá gợi ý", en: "Recommendation quality" },
    description: {
      vi: "Đánh giá mức hữu ích của các gợi ý từ hệ thống.",
      en: "Rate the usefulness of system suggestions.",
    },
    fields: [
      {
        label: { vi: "Mức độ hữu ích", en: "Usefulness" },
        type: "radio",
        options: [
          { vi: "Rất hữu ích", en: "Very useful" },
          { vi: "Hữu ích", en: "Useful" },
          { vi: "Cần cải thiện", en: "Needs improvement" },
        ],
      },
    ],
  },
  {
    title: { vi: "Áp dụng kiến nghị", en: "Applying recommendations" },
    description: {
      vi: "Cho biết khả năng bạn áp dụng các kiến nghị.",
      en: "Tell us how likely you are to apply recommendations.",
    },
    fields: [
      {
        label: { vi: "Khả năng áp dụng", en: "Likelihood" },
        type: "select",
        options: [
          { vi: "Sẵn sàng áp dụng", en: "Ready to apply" },
          { vi: "Cần hỗ trợ thêm", en: "Need more support" },
          { vi: "Chưa phù hợp", en: "Not suitable yet" },
        ],
      },
    ],
  },
  {
    title: { vi: "Hỗ trợ canh tác", en: "Farming support" },
    description: {
      vi: "Bạn cần hỗ trợ gì để canh tác carbon hiệu quả hơn?",
      en: "What support would help carbon farming work better?",
    },
    fields: [
      {
        label: { vi: "Nhu cầu hỗ trợ", en: "Support needs" },
        type: "textarea",
      },
    ],
  },
  {
    title: { vi: "Trải nghiệm", en: "Experience" },
    description: {
      vi: "Đánh giá trải nghiệm sử dụng tổng thể.",
      en: "Rate the overall experience.",
    },
    fields: [
      {
        label: { vi: "Mức hài lòng", en: "Satisfaction" },
        type: "radio",
        options: [
          { vi: "Tốt", en: "Good" },
          { vi: "Bình thường", en: "Average" },
          { vi: "Khó sử dụng", en: "Hard to use" },
        ],
      },
    ],
  },
  {
    title: { vi: "Ý kiến chung", en: "General comments" },
    description: {
      vi: "Chia sẻ thêm ý kiến của bạn.",
      en: "Share any additional comments.",
    },
    fields: [
      {
        label: { vi: "Ý kiến", en: "Comments" },
        type: "textarea",
      },
    ],
  },
];

export const chartLineClasses = [
  "chart-point-a",
  "chart-point-b",
  "chart-point-c",
  "chart-point-d",
  "chart-point-e",
  "chart-point-f",
  "chart-point-g",
  "chart-point-h",
];

export function text(value: LocalizedText, locale: "vi" | "en") {
  return value[locale];
}

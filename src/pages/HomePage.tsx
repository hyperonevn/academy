import React from 'react';
import { Link } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import MagicSystemFlow from '../components/MagicSystemFlow';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* HEADER */}
      <Topbar />
      <Navbar showAnchors={true} />

      {/* HERO */}
      <section id="overview" className="pt-20 pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-cyan-50 to-amber-50 z-0 animate-gradient-x" />
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-indigo-600 to-amber-500 animate-text-gradient">
            AI-first nhưng Con Người là Trung Tâm.
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Khi thế giới chạy theo FOMO công nghệ, chúng tôi chọn hướng đi ngược lại:  
            đặt con người làm trọng tâm và để AI phục vụ con người.  
            Chúng tôi không dạy code — chúng tôi trao tư duy để bạn tạo ra <strong>hệ thống tự vận hành</strong>.
          </p>

          <p className="text-md md:text-lg text-gray-700 mb-10 leading-relaxed">
            Học AI thực chiến cho <strong>Trẻ 4–17 tuổi</strong>, <strong>Người đi làm</strong> và <strong>Doanh nghiệp</strong>.<br />
            Tư duy hệ thống + tư duy kinh doanh + AI = <strong>Kết quả thật</strong> 🚀  
            Học qua Zoom ở bất kỳ đâu; có <em>coaching 1:1</em> cho doanh nghiệp.
          </p>

          {/* Magic Animation */}
          <div className="relative my-16">
            <MagicSystemFlow />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <p className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600 animate-float">
                System → Business → AI → Result
              </p>
              <p className="text-sm text-gray-500 mt-2 animate-pulse">Tư duy kết nối — Tạo hệ thống bền vững</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-cyan-50/30 to-transparent" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-600">
            Vì Sao Chọn Hyper ONE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Ship Project Có KPI',
                description: 'Mọi khoá học kết thúc bằng dự án thực tế có chỉ số đo lường cụ thể – không lý thuyết suông.',
              },
              {
                title: 'System / Business First',
                description: 'Tư duy hệ thống và kinh doanh là nền tảng của mọi hành động công nghệ.',
              },
              {
                title: 'AI-first, Human-centered',
                description: 'AI là công cụ. Con người mới là người ra quyết định.',
              },
              {
                title: 'Mentor Thực Chiến',
                description: 'Học với người đang thật sự vận hành doanh nghiệp, không chỉ giảng viên học thuật.',
              },
              {
                title: 'Kỷ Luật 30 Ngày',
                description: 'Tạo thói quen làm việc với AI có kết quả thật, không FOMO, không bỏ dở.',
              },
              {
                title: 'Cohort Zoom + Coaching 1:1',
                description: 'Học nhóm tương tác, mentor theo sát từng người để ra kết quả thực.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 card-luxury">
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-cyan-50 to-amber-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 via-cyan-400 to-amber-400 animate-slide-x"></div>
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Tầm Nhìn & Sứ Mệnh</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Tầm nhìn:</strong> Trở thành nền tảng công nghệ AI tiên phong của Việt Nam — nơi mỗi cá nhân, mỗi doanh nghiệp đều có thể ứng dụng AI đạo đức, an toàn và hiệu quả.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Sứ mệnh:</strong> Kết nối giữa công nghệ và con người.  
            Hyper ONE tạo môi trường học – làm – phát triển, nơi công nghệ trở thành phần tự nhiên của cuộc sống.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-50/40 to-transparent animate-pulse-slow"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Về Chúng Tôi</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>HYPER ONE TEAM</strong> gồm các kỹ sư, nhà thiết kế, chuyên gia AI và cố vấn kinh doanh đang xây dựng hệ sinh thái công nghệ phục vụ con người.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Chúng tôi không chỉ tạo sản phẩm — mà định hình tư duy mới về cách con người tương tác với AI.  
            Hyper ONE là công ty công nghệ tiên phong trong <strong>AI, Automation, và Smart home</strong>.
          </p>
          <img
            src="https://raw.githubusercontent.com/hyperonevn/hyperonevn/main/cty.jpg"
            alt="Hyper One Team"
            className="mx-auto mt-10 rounded-xl shadow-lg w-2/3 opacity-90 hover:opacity-100 transition"
          />
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-20 px-4 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-cyan-50/50 to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Chương Trình Đào Tạo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Trẻ 4–17 tuổi', description: 'Học logic, tư duy và sáng tạo AI từ sớm — xây dựng thế hệ hiểu công nghệ.', color: 'amber', link: '/kids' },
              { title: 'Người đi làm', description: 'AI thực chiến — từ tư duy đến triển khai quy trình tự động có KPI rõ ràng.', color: 'cyan', link: '/professionals' },
              { title: 'Doanh nghiệp', description: 'Đào tạo & cố vấn chuyển đổi số/AI — từ audit đến triển khai với bảo mật tối đa.', color: 'indigo', link: '/enterprise' },
            ].map((program, i) => (
              <Link key={i} to={program.link} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 card-glow">
                <div className={`h-2 bg-${program.color}-500`}></div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <div className="flex justify-end">
                    <span className={`inline-flex items-center text-${program.color}-600 font-medium`}>
                      Tìm hiểu thêm
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section id="method" className="relative py-20 px-4 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 via-white to-indigo-50 animate-pulse-slow"></div>
        <div className="relative z-10 container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Phương Pháp Của Chúng Tôi</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { title: 'System-first', description: 'Tư duy hệ thống là nền tảng của mọi giải pháp công nghệ. Học cách nhìn tổng thể, không manh mún.' },
              { title: 'Business-first', description: 'Mọi giải pháp phải phục vụ kết quả kinh doanh cụ thể. Học cách nói chuyện với CEO, không chỉ với máy tính.' },
              { title: 'AI as a Partner', description: 'Xây dựng mối quan hệ cộng tác với AI — bạn ra chiến lược, AI thực thi, không ngược lại.' },
              { title: 'Learn – Do – Ship', description: 'Mỗi bài học đều có hành động thật và sản phẩm hoàn thiện. Không “biết” mà phải “ra được”.' },
              { title: 'Human-in-the-loop', description: 'AI mạnh nhất khi có con người định hướng và phản hồi. Học cách quản trị AI như quản trị nhân sự.' },
              { title: 'Ethical & Responsible AI', description: 'Chúng tôi dạy cách triển khai AI có đạo đức, bảo vệ dữ liệu, và phục vụ con người.' },
              { title: 'Measure Everything', description: 'Không có “ước lượng cảm tính” — mọi dự án đều có KPI đo được, từ productivity đến growth.' },
              { title: 'Mentor thực chiến', description: 'Người hướng dẫn đều từng triển khai dự án AI thật cho doanh nghiệp Việt, không chỉ “dạy lại từ YouTube”.' },
            ].map((pillar, i) => (
              <div key={i} className="glass-effect rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold mb-2 gradient-text">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-xl p-10 text-white text-center shadow-xl animate-pulse-slow">
            <blockquote className="text-xl italic mb-4">
              “Chúng tôi không chỉ dạy công nghệ, mà trao tư duy để bạn làm chủ công nghệ —  
              để AI làm việc cho bạn, chứ không phải thay bạn.”
            </blockquote>
            <p className="font-medium">— HYPER ONE Academy</p>
          </div>
        </div>
      </section>

      {/* === LINKS SECTION === */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-white to-cyan-50 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
          Xem thêm về chúng tôi tại
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href="https://hyperonevn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-indigo-700 hover:text-indigo-900 hover:underline transition-all"
          >
            hyperonevn.com
          </a>
          <span className="hidden md:block text-gray-400">•</span>
          <a
            href="https://blog.hyperonevn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-cyan-700 hover:text-cyan-900 hover:underline transition-all"
          >
            blog.hyperonevn.com
          </a>
          <span className="hidden md:block text-gray-400">•</span>
          <a
            href="https://smarthome.hyperonevn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-amber-700 hover:text-amber-900 hover:underline transition-all"
          >
            smarthome.hyperonevn.com
          </a>
        </div>
        <p className="mt-8 text-gray-600 text-sm">
          HYPER ONE – AI, Automation & Smart Living for the Next Vietnam.
        </p>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;

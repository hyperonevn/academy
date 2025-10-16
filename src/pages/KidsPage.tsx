import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const KidsPage = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-pink-50 to-sky-50">
      <Topbar />
      <Navbar />

      {/* 🌈 Hero Section */}
      <section className="pt-20 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 animate-pulse opacity-30 bg-[url('https://raw.githubusercontent.com/hyperonevn/hyperonevn/main/bg-stars.png')] bg-cover"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-amber-500 to-sky-500">
            🤖 Học AI vui như chơi – Dành cho Trẻ 4–17 tuổi 🎨
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            👧🧑‍🚀 Không chỉ dạy code – mà giúp trẻ <strong>tư duy như nhà sáng tạo</strong>, 
            tự tin sử dụng AI để tạo ra thế giới của riêng mình! ✨
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setOpenForm(true)}
              className="bg-gradient-to-r from-pink-500 to-amber-400 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              🎯 Khám phá lộ trình học
            </button>
            <a
              href="tel:0352608068"
              className="bg-red-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-red-600 transition-colors inline-block"
            >
              ☎️ Gọi ngay 0352608068 <br />
              <span className="text-sm">(Hotline 24/7)</span>
            </a>
          </div>
        </div>
      </section>

      {/* 😅 Nỗi lo phụ huynh */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500">
            😅 Nỗi lo của phụ huynh hôm nay
          </h2>
          <div className="bg-amber-50 rounded-2xl p-6 shadow-md mb-12">
            <ul className="space-y-4 text-left text-gray-700">
              <li>❌ Các lớp chỉ dạy gõ code, không dạy tư duy và sáng tạo.</li>
              <li>😕 Trẻ học xong không có sản phẩm cụ thể để tự hào.</li>
              <li>⚠️ Lo con bị tụt hậu trong kỷ nguyên AI bùng nổ.</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-500">
            🥰 Niềm tự hào sau khóa học
          </h2>
          <div className="bg-gradient-to-r from-amber-400 to-pink-500 rounded-2xl p-6 text-white">
            <ul className="space-y-4 text-left">
              <li>🌟 Con tự tạo chatbot kể chuyện với giọng riêng!</li>
              <li>📸 Con xây camera AI đếm đồ vật trong nhà!</li>
              <li>🧩 Con hiểu cách AI suy nghĩ và hoạt động ra sao!</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🚀 Lộ trình */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-50 via-pink-50 to-sky-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-500">
            🚀 Lộ trình học theo độ tuổi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                age: '🐣 4–7 tuổi',
                title: 'Logic vui nhộn No/Low-code',
                color: 'from-pink-400 to-amber-400',
                desc: 'Học tư duy logic qua trò chơi và kể chuyện bằng khối lệnh.',
                emoji: '🎲🧩🎨',
                features: [
                  'Trò chơi logic & kể chuyện',
                  'Lập trình kéo thả dễ hiểu',
                  'Tạo nhân vật hoạt hình nói chuyện',
                ],
              },
              {
                age: '🦄 8–12 tuổi',
                title: 'Python + AI cơ bản',
                color: 'from-sky-400 to-pink-400',
                desc: 'Làm quen Python, học cách dạy máy nhận diện và phản hồi!',
                emoji: '💡💻🤖',
                features: [
                  'Viết Python siêu dễ',
                  'Tạo chatbot vui nhộn',
                  'Nhận diện ảnh & giọng nói',
                ],
              },
              {
                age: '🚀 13–17 tuổi',
                title: 'AI Builder: API & Workflow',
                color: 'from-amber-400 to-sky-400',
                desc: 'Xây ứng dụng AI thật, tích hợp API, tự động hoá và sáng tạo dự án cá nhân.',
                emoji: '🧠⚙️📱',
                features: [
                  'Kết nối GPT & API',
                  'Tạo ứng dụng web AI',
                  'Dự án cá nhân showcase',
                ],
              },
            ].map((track, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white shadow-md border border-amber-100 p-6 hover:shadow-xl hover:scale-105 transition-transform"
              >
                <div
                  className={`text-lg font-semibold bg-gradient-to-r ${track.color} text-white py-1 rounded-full inline-block px-4 mb-4`}
                >
                  {track.age}
                </div>
                <h3 className="text-xl font-bold mb-2">{track.title}</h3>
                <p className="text-gray-600 mb-3">{track.desc}</p>
                <p className="text-2xl mb-4">{track.emoji}</p>
                <ul className="space-y-2 text-left text-gray-600">
                  {track.features.map((f, j) => (
                    <li key={j}>✅ {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💻 Zoom Learning */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto rounded-2xl p-8 shadow-lg bg-gradient-to-br from-amber-50 to-pink-50">
            <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500">
              💻 Học qua Zoom siêu linh hoạt!
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>🕒 Lịch học linh hoạt, phù hợp giờ học chính khoá.</li>
              <li>🧠 70% thời lượng dành cho thực hành và dự án thật.</li>
              <li>🏆 Mỗi khóa đều có sản phẩm để con tự hào khoe bố mẹ!</li>
            </ul>
            <div className="mt-10 text-center">
              <button
                onClick={() => setOpenForm(true)}
                className="bg-gradient-to-r from-pink-500 to-amber-400 text-white font-semibold py-3 px-8 rounded-full hover:scale-105 transition-transform inline-block"
              >
                ✨ Đăng ký đánh giá độ phù hợp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 📩 Form Popup */}
      {openForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
            <button
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-600"
              onClick={() => setOpenForm(false)}
            >
              ✖
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-500">
              🎯 Đăng ký khám phá lộ trình học
            </h3>
            <form
              action="mailto:info@hyperonevn.com"
              method="POST"
              encType="text/plain"
              className="space-y-4"
            >
              <input
                type="text"
                name="Phụ huynh"
                placeholder="Họ tên phụ huynh"
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="tel"
                name="Số điện thoại"
                placeholder="Số điện thoại liên hệ"
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
              <textarea
                name="Nội dung"
                placeholder="Thông tin về bé hoặc câu hỏi của bạn"
                className="w-full px-4 py-2 border rounded-lg h-24"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-amber-400 text-white py-2 rounded-lg font-medium hover:scale-105 transition-transform"
              >
                📩 Gửi yêu cầu tư vấn
              </button>
              <a
                href="tel:0352608068"
                className="block text-center text-sm text-amber-600 hover:underline"
              >
                ☎️ Hoặc gọi ngay 0352608068 (Hotline 24/7)
              </a>
            </form>
          </div>
        </div>
      )}

      <ContactSection />
      <Footer />
    </div>
  );
};

export default KidsPage;

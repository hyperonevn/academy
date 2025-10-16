import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const ProfessionalsPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: 'Xin chào 👋 Tôi là HyperBot – trợ lý AI học tập của bạn. Bạn muốn hỏi gì về AI hôm nay?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsg: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, newMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const lower = input.toLowerCase();
      let replyText = '';

      if (lower.includes('bắt đầu') || lower.includes('doanh nghiệp')) {
        replyText =
          '💡 Cách tốt nhất để bắt đầu là học **khóa AI thực chiến cho người đi làm** tại Hyper ONE. ' +
          'Bạn sẽ được hướng dẫn từng bước để tự động hóa công việc, tạo workflow và đo lường hiệu quả thật. 🚀<br/><br/>' +
          '👉 Đặt lịch tư vấn ngay qua hotline **0352608068** hoặc nhấn “Học ngay” bên dưới.';
      } else if (lower.includes('tại sao ai') || lower.includes('trả lời khác')) {
        replyText =
          '🤖 Mỗi lần AI trả lời, nó sẽ “suy nghĩ” lại từ đầu dựa trên xác suất — nên hai câu có thể khác nhau dù cùng một câu hỏi! ' +
          'Nếu bạn muốn hiểu sâu cơ chế này, hãy học phần *Prompt Engineering & AI Literacy* trong khóa học của Hyper ONE nhé.';
      } else {
        const replies = [
          'AI trả lời khác nhau vì ngữ cảnh thay đổi mỗi lần, giống như con người nhìn cùng vấn đề ở hai góc khác nhau 🔁',
          'Vì AI không có ký ức thật — nếu bạn không cung cấp lại ngữ cảnh, nó sẽ tạo phản hồi mới 🎯',
          'AI không “toàn bộ”, mà là hệ thống dự đoán có điều kiện. Nhưng nếu biết cách dẫn dắt, bạn có thể khiến AI ổn định hơn 🤝',
        ];
        replyText = replies[Math.floor(Math.random() * replies.length)];
      }

      const botReply: Message = { sender: 'bot', text: replyText };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 1000);

    setInput('');
  };

  const samplePrompts = [
    'AI có thể thay thế con người trong công việc không?',
    'Làm sao để bắt đầu ứng dụng AI vào doanh nghiệp?',
    'Tại sao AI lại trả lời 2 câu hoàn toàn khác nhau?',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      <Topbar />
      <Navbar />

      {/* HERO */}
      <section className="pt-20 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 z-0"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-500 to-cyan-600 animate-gradient-x">
            Người đi làm — AI thực chiến 💼
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Học AI thật sự mang lại kết quả. Nâng năng suất, tự động hóa công việc, 
            và mở ra cấp độ nghề nghiệp mới cùng Hyper ONE Academy.
          </p>
        </div>
      </section>

      {/* 💎 CAM KẾT DUY NHẤT */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-600">
            Cam kết duy nhất tại Việt Nam 🇻🇳
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Không có khóa học nào khác được dạy bởi những **người đang trực tiếp vận hành doanh nghiệp thật**.  
            Hyper ONE là nơi duy nhất nơi bạn học AI <strong>từ tư duy kinh doanh đến hành động</strong> –  
            từ “Follow ra Product” đến “Build Business nhỏ của chính bạn”.  
          </p>
          <p className="text-gray-600 italic">
            Đây không phải là khóa học lý thuyết, mà là hành trình thật – nơi bạn tạo ra sản phẩm, 
            áp dụng AI vào công việc, và thấy kết quả thực tế.
          </p>
        </div>
      </section>

      {/* 💬 CHATBOT */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-600">
            Trải nghiệm Chatbot AI mô phỏng 🤖
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Hỏi thử HyperBot về các câu gợi ý bên dưới 👇
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {samplePrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => setInput(prompt)}
                className="bg-cyan-100 hover:bg-cyan-200 text-cyan-800 px-4 py-2 rounded-full text-sm transition"
              >
                💡 {prompt}
              </button>
            ))}
          </div>

          <div className="relative border border-cyan-200 rounded-2xl p-4 h-[400px] overflow-y-auto bg-gradient-to-br from-white to-cyan-50 shadow-inner animate-pulse-light">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-3 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl max-w-[80%] ${
                    msg.sender === 'user'
                      ? 'bg-cyan-500 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br/>') }} />
                  {msg.text.includes('Học ngay') && (
                    <div className="mt-3">
                      <a
                        href="tel:0352608068"
                        className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-4 py-2 rounded-lg text-sm shadow-md hover:scale-105 transition-transform inline-block"
                      >
                        HỌC NGAY 🚀
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start mb-3">
                <div className="bg-gray-100 text-gray-500 rounded-2xl px-4 py-2">
                  <span className="animate-bounce">●</span>
                  <span className="animate-bounce delay-150">●</span>
                  <span className="animate-bounce delay-300">●</span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="mt-4 flex">
            <input
              type="text"
              placeholder="Nhập câu hỏi của bạn..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-2 border border-cyan-300 rounded-l-lg focus:outline-none"
            />
            <button
              type="submit"
              className="bg-cyan-500 text-white px-5 rounded-r-lg hover:bg-cyan-600 transition"
            >
              Gửi
            </button>
          </form>
        </div>
      </section>

      {/* 🚀 LỘ TRÌNH */}
      <section className="py-16 px-4 bg-cyan-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-600">
            Lộ trình học tập chuyên sâu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'AI Literacy → Action',
                subtitle: 'Workflow cá nhân',
                description:
                  'Làm chủ công cụ AI và xây dựng quy trình làm việc cá nhân hiệu quả.',
                features: [
                  'Prompt Engineering nâng cao',
                  'Tự động hóa tác vụ lặp lại',
                  'Xây dựng workflow cá nhân',
                  'Đo lường năng suất',
                ],
              },
              {
                title: 'Dev thực chiến',
                subtitle: 'API / Agent',
                description:
                  'Phát triển ứng dụng AI qua API & Agent tự động, kết nối hệ thống thực tế.',
                features: [
                  'Tích hợp mô hình AI vào app',
                  'Xây dựng agent tự động',
                  'Ứng dụng web/mobile có AI',
                  'Tối ưu hiệu suất & chi phí',
                ],
              },
              {
                title: 'AI for Growth',
                subtitle: 'Funnel & Content Pipeline',
                description:
                  'Ứng dụng AI để tăng trưởng doanh nghiệp bằng automation marketing & dữ liệu.',
                features: [
                  'Xây dựng funnel marketing',
                  'Tự động hóa nội dung',
                  'Phân tích dữ liệu khách hàng',
                  'Tối ưu chiến lược tăng trưởng',
                ],
              },
            ].map((track, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl border border-cyan-100 transition-transform hover:scale-105"
              >
                <div className="h-2 bg-cyan-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-cyan-700">{track.title}</h3>
                  <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium mb-3">
                    {track.subtitle}
                  </div>
                  <p className="text-gray-600 mb-4">{track.description}</p>
                  <ul className="space-y-2 text-left">
                    {track.features.map((f, j) => (
                      <li key={j} className="flex items-center">
                        <span className="text-cyan-500 mr-2">✓</span>
                        <span className="text-sm text-gray-600">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <p className="text-gray-700 mb-6 font-medium">
            📌 Dành riêng cho người đi làm — học linh hoạt, đo được hiệu quả.
          </p>
          <a
            href="tel:0352608068"
            className="bg-cyan-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-cyan-600 transition inline-block"
          >
            ☎️ Gọi tư vấn ngay 0352608068 (Hotline 24/7)
          </a>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default ProfessionalsPage;

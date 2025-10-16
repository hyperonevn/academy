import React from 'react';
import { Link } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const EnterprisePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50">
      <Topbar />
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-24 pb-32 text-center text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          src="https://cdn.jsdelivr.net/gh/hyperonevn/assets/ai-wave.mp4"
        />
        <div className="relative z-10 container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-500 to-purple-600 animate-gradient-x">
            Doanh nghiệp — Tái cấu trúc với AI & Chuyển đổi số toàn diện
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-100">
            Từ hỗn loạn đến tự động hóa. Từ dữ liệu rời rạc đến hệ thống thông minh.  
            Hyper ONE đồng hành cùng bạn trên hành trình đó.
          </p>
        </div>
      </section>

      {/* 🔄 MÔ PHỎNG HAI THẾ GIỚI */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* RỐI BỜI */}
          <div className="bg-red-50 p-8 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://cdn.jsdelivr.net/gh/hyperonevn/assets/noise.png')]"></div>
            <h3 className="text-2xl font-bold text-red-600 mb-4">Trước khi có AI 🤯</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• 5 nền tảng khác nhau, dữ liệu không đồng bộ</li>
              <li>• Nhân viên nhập tay và báo cáo bằng Excel mỗi tuần</li>
              <li>• Khách hàng phản hồi chậm, mất cơ hội bán hàng</li>
              <li>• Không biết chính xác chi phí hay hiệu suất theo thời gian</li>
            </ul>
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-200 blur-3xl animate-pulse"></div>
          </div>

          {/* AI TỰ ĐỘNG */}
          <div className="bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[url('https://cdn.jsdelivr.net/gh/hyperonevn/assets/grid.svg')]"></div>
            <h3 className="text-2xl font-bold mb-4">Sau khi ứng dụng AI 🚀</h3>
            <ul className="space-y-3">
              <li>✓ Dashboard thời gian thực cho toàn bộ doanh nghiệp</li>
              <li>✓ Email & báo cáo tự động từ Hyper Bot</li>
              <li>✓ Dự đoán doanh thu và tối ưu chi phí với AI Forecast</li>
              <li>✓ Khách hàng được chăm sóc qua chatbot 24/7</li>
            </ul>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 blur-2xl animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* ⚙️ QUY TRÌNH */}
      <section className="py-20 px-6 bg-indigo-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
            Quy trình triển khai chuyển đổi AI
          </h2>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-200"></div>
            {[
              { title: 'Audit 3 tuần', desc: 'Đánh giá hiện trạng & xác định cơ hội chuyển đổi số.' },
              { title: 'Đề án 90 ngày', desc: 'Lộ trình cụ thể với KPI và chi phí rõ ràng.' },
              { title: 'Pilot 1–3 quy trình', desc: 'Thí điểm và đo lường hiệu quả trước khi nhân rộng.' },
              { title: 'Playbook bảo mật', desc: 'Chuẩn hóa và hướng dẫn vận hành AI an toàn.' },
              { title: 'Coaching 1:1 lãnh đạo', desc: 'Cố vấn quyết sách và quản trị thay đổi.' },
            ].map((s, i) => (
              <div
                key={i}
                className={`flex items-center mb-12 ${i % 2 ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className="w-1/2 px-6">
                  <h3 className="text-xl font-semibold text-indigo-600">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white shadow-lg">
                  <span className="font-bold text-lg">{i + 1}</span>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📈 LỢI ÍCH & CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto glass-effect p-10 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              Lợi ích doanh nghiệp nhận được
            </h3>
            <ul className="text-left space-y-3 mb-8">
              <li>✓ Bảo mật và kiểm soát dữ liệu tập trung</li>
              <li>✓ Tự động hóa quy trình và giảm chi phí 20–40 %</li>
              <li>✓ Đào tạo đội ngũ nội bộ vận hành AI</li>
              <li>✓ ROI rõ ràng theo từng giai đoạn</li>
            </ul>
            <a
              href="tel:0352608068"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-10 rounded-lg shadow-md hover:scale-105 transition-transform inline-block font-semibold"
            >
              ☎️ Gọi Hotline 0352608068 – Nhận đề án 90 ngày miễn phí
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default EnterprisePage;

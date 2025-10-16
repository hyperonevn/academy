import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
          Liên Hệ
        </h2>

        <div className="max-w-4xl mx-auto glass-effect rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ==== THÔNG TIN LIÊN HỆ ==== */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Thông Tin Liên Hệ</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>68 Nguyễn Huệ, P. Sài Gòn, TP.HCM (Q.1 cũ)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>383 Nguyễn Duy Trinh, P. Bình Trưng, TP.HCM (Q.2 cũ)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📞</span>
                  <span>
                    <a href="tel:0352608068" className="text-indigo-600 hover:underline">
                      0352 608068
                    </a>{' '}
                    –{' '}
                    <a href="tel:0342608068" className="text-indigo-600 hover:underline">
                      0342 608068
                    </a>
                    <br />
                    <span className="text-sm text-gray-600">(Hotline 24/7)</span>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✉️</span>
                  <a
                    href="mailto:info@hyperonevn.com"
                    className="text-indigo-600 hover:underline"
                  >
                    info@hyperonevn.com
                  </a>
                </li>
                <li className="mt-4 pt-4 border-t border-gray-200">
                  <p className="font-semibold">CÔNG TY TNHH HYPER ONE</p>
                  <p>Mã số thuế: 0318921926 – Sở KHĐT TP.HCM</p>
                </li>
              </ul>
            </div>

            {/* ==== FORM LIÊN HỆ ==== */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Gửi Yêu Cầu / Hỗ Trợ</h3>

              <form
                action="mailto:info@hyperonevn.com"
                method="POST"
                encType="text/plain"
                className="space-y-4"
              >
                <div>
                  <input
                    type="text"
                    name="Họ tên"
                    placeholder="Họ tên"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="Số điện thoại"
                    placeholder="Số điện thoại"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <textarea
                    name="Nội dung"
                    placeholder="Nội dung"
                    rows="4"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-1/2 bg-black text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Gửi yêu cầu
                  </button>

                  <a
                    href="tel:0352608068"
                    className="w-full sm:w-1/2 bg-red-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-center"
                  >
                    📞 Gọi ngay 0352608068 <br />
                    <span className="text-sm">(Hotline 24/7)</span>
                  </a>
                </div>
              </form>

              {/* ==== THÔNG TIN THANH TOÁN ==== */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h4 className="text-lg font-semibold mb-2">Thông Tin Thanh Toán</h4>
                <p>
                  <span className="font-medium">Ngân hàng:</span> MB Bank
                </p>
                <p>
                  <span className="font-medium">Số tài khoản:</span> 624 68 68 68 68
                </p>
                <p>
                  <span className="font-medium">Chủ tài khoản:</span> CÔNG TY TNHH HYPER ONE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

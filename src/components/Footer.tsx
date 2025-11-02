import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0C0C0F] text-gray-400 py-10 border-t border-gray-800 text-center">
      <div className="max-w-4xl mx-auto px-6 space-y-3 text-sm leading-relaxed">
        {/* Giới thiệu hệ sinh thái */}
        <p className="uppercase tracking-wide text-[11px] text-gray-500">
          Một sản phẩm trong hệ sinh thái{' '}
          <strong className="text-[#00B8FF]">HYPER</strong>
          <span className="text-white"> ONE</span>
        </p>

        {/* Thông tin công ty */}
        <p className="font-medium text-gray-200">
         HYPER ONE CO., LTD
        </p>
        <p>68 Nguyễn Huệ, phường Sài Gòn, TP. Hồ Chí Minh, Việt Nam</p>

        {/* Liên hệ */}
        <p className="text-gray-400">
          <a
            href="mailto:info@hyperonevn.com"
            className="text-[#00B8FF] hover:underline"
          >
            info@hyperonevn.com
          </a>{' '}
          ·{' '}
          <a href="tel:+84352608068" className="text-[#8B5CF6] hover:underline">
            +84 352 608 068
          </a>{' '}
          ·{' '}
          <a
            href="https://hyperonevn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EC4899] hover:underline"
          >
            hyperonevn.com
          </a>
        </p>

        {/* Gạch ngăn */}
        <div className="w-3/4 max-w-md mx-auto h-px bg-gray-700 opacity-60 my-4" />

        {/* Bản quyền */}
        <p className="text-xs text-gray-500">
          © {year} HYPER ONE CO., LTD · All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

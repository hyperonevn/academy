import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
interface NavItem {
  label: string;
  href: string;
}
interface NavbarProps {
  items?: NavItem[];
  showAnchors?: boolean;
}
const Navbar = ({
  items = [],
  showAnchors = false
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const defaultItems: NavItem[] = [{
    label: 'Trang chủ',
    href: '/'
  }, {
    label: 'Trẻ 4-17 tuổi',
    href: '/kids'
  }, {
    label: 'Người đi làm',
    href: '/professionals'
  }, {
    label: 'Doanh nghiệp',
    href: '/enterprise'
  }];
  const anchorItems: NavItem[] = [{
    label: 'Tổng quan',
    href: '#overview'
  }, {
    label: 'Tại sao chọn chúng tôi',
    href: '#why'
  }, {
    label: 'Chương trình',
    href: '#programs'
  }, {
    label: 'Phương pháp',
    href: '#method'
  }, {
    label: 'Liên hệ',
    href: '#contact'
  }];
  const navItems = showAnchors ? anchorItems : defaultItems;
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth'
        });
        setIsMenuOpen(false);
      }
    }
  };
  return <nav className={`sticky top-6 z-40 w-full px-4 py-3 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-md' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold gradient-text">
          academy.hyperonevn.com
        </Link>
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => <a key={index} href={item.href} onClick={e => scrollToSection(e, item.href)} className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              {item.label}
            </a>)}
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden glass-effect mt-2 py-3 px-4 rounded-lg shadow-lg">
          {navItems.map((item, index) => <a key={index} href={item.href} onClick={e => scrollToSection(e, item.href)} className="block py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              {item.label}
            </a>)}
        </div>}
    </nav>;
};
export default Navbar;
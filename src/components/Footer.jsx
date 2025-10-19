// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = ({
  t,
  isDarkMode,
  scrollToSection
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentLang, setCurrentLang] = useState('zh');

  // 监听全局语言切换事件
  useEffect(() => {
    const handleLanguageChangeEvent = event => {
      setCurrentLang(event.detail.language);
    };
    window.addEventListener('languageChange', handleLanguageChangeEvent);

    // 获取当前语言设置
    const savedLang = localStorage.getItem('ecosyn_language') || 'zh';
    setCurrentLang(savedLang);
    return () => {
      window.removeEventListener('languageChange', handleLanguageChangeEvent);
    };
  }, []);

  // 监听滚动显示返回顶部按钮
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0D7E9C] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#01847E] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div className="space-y-4">
            {/* 更换为HILLSEA logo */}
            <img src="https://ecosyn-1259516302.cos.ap-singapore.myqcloud.com/Hillsea/LOGO/HILLSEAAA.png" alt="HILLSEA Logo" className="h-12 w-auto" />
            <p className="text-gray-300 text-sm leading-relaxed">
              {currentLang === 'zh' ? '专注于新能源商用车电驱系统研发与制造，为全球客户提供绿色、智能、高效的运输解决方案。' : 'Focusing on R&D and manufacturing of electric drive systems for new energy commercial vehicles, providing green, intelligent, and efficient transportation solutions for global customers.'}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#0D7E9C] transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0D7E9C] transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0D7E9C] transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0D7E9C] transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* 产品服务 */}
          <div className="space-y-4">
            {/* 小标题颜色改为品牌绿 */}
            <h3 className="text-lg font-semibold text-[#01847E]">
              {currentLang === 'zh' ? '产品服务' : 'Products & Services'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-300 hover:text-[#0D7E9C] transition-colors duration-200 text-sm">
                  {currentLang === 'zh' ? 'ECOSYN 电驱系统' : 'ECOSYN Drive System'}
                </a>
              </li>
              <li>
                <a href="#tech" className="text-gray-300 hover:text-[#0D7E9C] transition-colors duration-200 text-sm">
                  {currentLang === 'zh' ? '智能控制模块' : 'Smart Control Module'}
                </a>
              </li>
              <li>
                <a href="#tech" className="text-gray-300 hover:text-[#0D7E9C] transition-colors duration-200 text-sm">
                  {currentLang === 'zh' ? '电池管理系统' : 'Battery Management System'}
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-300 hover:text-[#0D7E9C] transition-colors duration-200 text-sm">
                  {currentLang === 'zh' ? '解决方案' : 'Solutions'}
                </a>
              </li>
            </ul>
          </div>

          {/* 快速链接 */}
          <div className="space-y-4">
            {/* 小标题颜色改为品牌绿 */}
            <h3 className="text-lg font-semibold text-[#01847E]">
              {currentLang === 'zh' ? '快速链接' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" onClick={e => {
                e.preventDefault();
                scrollToSection('about');
              }} className="text-gray-300 hover:text-[#0D7E9C] transition-colors duration-200 text-sm">
                  {currentLang === 'zh' ? '关于我们' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="#milestones" className="text-gray-300 hover:text-[#0D7E9C] transition-colors duration-200 text-sm">
                  {currentLang === 'zh' ? '发展历程' : 'Milestones'}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#0D7E9C] transition-colors duration-200 text-sm">
                  {currentLang === 'zh' ? '联系我们' : 'Contact Us'}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#0D7E9C] transition-colors duration-200 text-sm">
                  {currentLang === 'zh' ? '技术支持' : 'Technical Support'}
                </a>
              </li>
            </ul>
          </div>

          {/* 联系信息 */}
          <div className="space-y-4">
            {/* 小标题颜色改为品牌绿 */}
            <h3 className="text-lg font-semibold text-[#01847E]">
              {currentLang === 'zh' ? '联系我们' : 'Contact Us'}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#0D7E9C]" />
                <span className="text-gray-300 text-sm">
                  {/* 更新公司地址 */}
                  {currentLang === 'zh' ? '上海市闵行区剑川路955号' : 'No. 955 Jianchuan Road, Minhang District, Shanghai'}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#0D7E9C]" />
                <span className="text-gray-300 text-sm">+86 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#0D7E9C]" />
                <span className="text-gray-300 text-sm">info@hillsea.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                {/* 更新公司名称 */}
                © 2024 {currentLang === 'zh' ? '上海汉势新能源科技有限公司' : 'Shanghai Hillsea New Energy Technology Co., Ltd.'}. 
                {currentLang === 'zh' ? '保留所有权利。' : 'All rights reserved.'}
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#0D7E9C] transition-colors duration-200 text-sm">
                {currentLang === 'zh' ? '隐私政策' : 'Privacy Policy'}
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0D7E9C] transition-colors duration-200 text-sm">
                {currentLang === 'zh' ? '服务条款' : 'Terms of Service'}
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0D7E9C] transition-colors duration-200 text-sm">
                {currentLang === 'zh' ? '网站地图' : 'Sitemap'}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 返回顶部按钮 */}
      {showBackToTop && <button onClick={handleBackToTop} className="fixed bottom-8 right-8 bg-[#0D7E9C] hover:bg-[#0D7E9C]/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40">
          <ArrowUp className="h-5 w-5" />
        </button>}
    </footer>;
};
export default Footer;
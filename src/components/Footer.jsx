// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react';

const Footer = ({
  t,
  isDarkMode,
  setIsDarkMode,
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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const footerContent = {
    zh: {
      company: '上海汉势新能源科技有限公司',
      description: '专注于新能源智能重卡研发与制造，为全球客户提供绿色、智能、高效的运输解决方案。',
      contact: {
        title: '联系我们',
        address: '上海市闵行区剑川路955号',
        phone: '+86 755-8888-9999',
        email: 'info@hillsea.com'
      },
      follow: {
        title: '关注我们'
      },
      copyright: '© 2024 上海汉势新能源科技有限公司。保留所有权利。'
    },
    en: {
      company: 'Shanghai Hillsea New Energy Technology Co., Ltd.',
      description: 'Focusing on the research, development and manufacturing of new energy intelligent heavy trucks, providing green, intelligent and efficient transportation solutions for global customers.',
      contact: {
        title: 'Contact Us',
        address: 'No. 955 Jianchuan Road, Minhang District, Shanghai, China',
        phone: '+86 755-8888-9999',
        email: 'info@hillsea.com'
      },
      follow: {
        title: 'Follow Us'
      },
      copyright: '© 2024 Shanghai Hillsea New Energy Technology Co., Ltd. All rights reserved.'
    }
  };
  const content = footerContent[currentLang];
  return <footer className="bg-gray-900 text-white">
      {/* 主要内容区域 - 优化布局 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 三列布局：公司信息 | 联系信息 | 社交媒体 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* 公司信息 - 左侧 */}
          <div className="lg:col-span-1">
            {/* 公司LOGO */}
            <img src="https://ecosyn-1259516302.cos.ap-singapore.myqcloud.com/Hillsea/LOGO/HILLSEAAAw.png?q-sign-algorithm=sha1&q-ak=AKIDp2UwjoezujR-4ORz63H6M3Z_FzNlbWqzRX2t0rL591mV4TtwN2NkIVpV40atCgQ-&q-sign-time=1760922231;1760925831&q-key-time=1760922231;1760925831&q-header-list=host&q-url-param-list=ci-process&q-signature=1f1fe0205e84693a2bb81f10a4f879f285af6c76&x-cos-security-token=JPXNoaYDJYj28gNcQ4kkS5aQHY1Y7UXadce6f50d421a9db930a644b7fb8756b4etc1BOYkLGiesCSZnVQ7h-HrbY-dO-T3jGp4hrPIVKCBCoOmRAXdwxUwXhkS2YLz2ybudkG3LbsOy1q6H4KIV8enldhvNcLKv6xiQSuVBbrLKmBmO6P868DQ-1ZRC4eKgQsozpDjw8PJ_dylcwQB1YHshjJN9a0UzrPUxLFaUgWKpkucPMZUlKoUa0hp6TVDS3ISS3LvvK28fRgVgwr9RuxoN22qIv01mo71uo-hKbYnAhsn2ZaezMi_itqoqpCwJUaYIxycKkcVhbqsf42n0Q&ci-process=originImage" alt="HILLSEA Logo" className="h-14 w-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#01847E]">{content.company}</h3>
            <p className="text-gray-300 mb-8 leading-relaxed text-sm lg:text-base">{content.description}</p>
          </div>

          {/* 联系信息 - 中间 */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-white">{content.contact.title}</h4>
            <div className="space-y-5">
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-[#01847E]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#01847E]/20 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-[#01847E]" />
                </div>
                <span className="text-gray-300 leading-relaxed">{content.contact.address}</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-[#01847E]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#01847E]/20 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-[#01847E]" />
                </div>
                <span className="text-gray-300">{content.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-[#01847E]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#01847E]/20 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-[#01847E]" />
                </div>
                <span className="text-gray-300">{content.contact.email}</span>
              </div>
            </div>
          </div>

          {/* 社交媒体链接 - 右侧 */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-white">{content.follow.title}</h4>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="w-12 h-12 border-2 border-[#01847E] rounded-full flex items-center justify-center hover:bg-[#01847E] transition-all duration-300 group hover:scale-110">
                <Facebook className="h-6 w-6 text-[#01847E] group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="w-12 h-12 border-2 border-[#01847E] rounded-full flex items-center justify-center hover:bg-[#01847E] transition-all duration-300 group hover:scale-110">
                <Twitter className="h-6 w-6 text-[#01847E] group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="w-12 h-12 border-2 border-[#01847E] rounded-full flex items-center justify-center hover:bg-[#01847E] transition-all duration-300 group hover:scale-110">
                <Linkedin className="h-6 w-6 text-[#01847E] group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="w-12 h-12 border-2 border-[#01847E] rounded-full flex items-center justify-center hover:bg-[#01847E] transition-all duration-300 group hover:scale-110">
                <Instagram className="h-6 w-6 text-[#01847E] group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="w-12 h-12 border-2 border-[#01847E] rounded-full flex items-center justify-center hover:bg-[#01847E] transition-all duration-300 group hover:scale-110">
                <Youtube className="h-6 w-6 text-[#01847E] group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 底部版权信息 - 优化布局 */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-gray-400 text-sm">{content.copyright}</p>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-8 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#01847E] transition-colors duration-300">
                {currentLang === 'zh' ? '隐私政策' : 'Privacy Policy'}
              </a>
              <a href="#" className="text-gray-400 hover:text-[#01847E] transition-colors duration-300">
                {currentLang === 'zh' ? '服务条款' : 'Terms of Service'}
              </a>
              <a href="#" className="text-gray-400 hover:text-[#01847E] transition-colors duration-300">
                {currentLang === 'zh' ? '网站地图' : 'Sitemap'}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 返回顶部按钮 - 优化样式 */}
      {showBackToTop && <button onClick={scrollToTop} className="fixed bottom-8 right-8 w-14 h-14 bg-[#01847E] hover:bg-[#0D7E9C] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-40 hover:scale-110 hover:shadow-2xl">
          <ArrowUp className="h-6 w-6" />
        </button>}
    </footer>;
};
export default Footer;
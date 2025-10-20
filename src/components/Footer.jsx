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
      company: '上海汉势新能源科技有限公司（简称"HILLSEA"）',
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
      {/* 主要内容区域 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 公司信息 */}
          <div className="md:col-span-1">
            {/* 公司LOGO */}
            <img src="https://ecosyn-1259516302.cos.ap-singapore.myqcloud.com/Hillsea/LOGO/HILLSEAAAw.png?q-sign-algorithm=sha1&q-ak=AKIDp2UwjoezujR-4ORz63H6M3Z_FzNlbWqzRX2t0rL591mV4TtwN2NkIVpV40atCgQ-&q-sign-time=1760922231;1760925831&q-key-time=1760922231;1760925831&q-header-list=host&q-url-param-list=ci-process&q-signature=1f1fe0205e84693a2bb81f10a4f879f285af6c76&x-cos-security-token=JPXNoaYDJYj28gNcQ4kkS5aQHY1Y7UXadce6f50d421a9db930a644b7fb8756b4etc1BOYkLGiesCSZnVQ7h-HrbY-dO-T3jGp4hrPIVKCBCoOmRAXdwxUwXhkS2YLz2ybudkG3LbsOy1q6H4KIV8enldhvNcLKv6xiQSuVBbrLKmBmO6P868DQ-1ZRC4eKgQsozpDjw8PJ_dylcwQB1YHshjJN9a0UzrPUxLFaUgWKpkucPMZUlKoUa0hp6TVDS3ISS3LvvK28fRgVgwr9RuxoN22qIv01mo71uo-hKbYnAhsn2ZaezMi_itqoqpCwJUaYIxycKkcVhbqsf42n0Q&ci-process=originImage" alt="HILLSEA Logo" className="h-12 w-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-[#0D7E9C]">{content.company}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">{content.description}</p>
            
            {/* 社交媒体链接 */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{content.follow.title}</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 border-2 border-[#01847E] rounded-full flex items-center justify-center hover:bg-[#01847E] transition-all duration-300 group">
                  <Facebook className="h-5 w-5 text-[#01847E] group-hover:text-white transition-colors duration-300" />
                </a>
                <a href="#" className="w-10 h-10 border-2 border-[#01847E] rounded-full flex items-center justify-center hover:bg-[#01847E] transition-all duration-300 group">
                  <Twitter className="h-5 w-5 text-[#01847E] group-hover:text-white transition-colors duration-300" />
                </a>
                <a href="#" className="w-10 h-10 border-2 border-[#01847E] rounded-full flex items-center justify-center hover:bg-[#01847E] transition-all duration-300 group">
                  <Linkedin className="h-5 w-5 text-[#01847E] group-hover:text-white transition-colors duration-300" />
                </a>
                <a href="#" className="w-10 h-10 border-2 border-[#01847E] rounded-full flex items-center justify-center hover:bg-[#01847E] transition-all duration-300 group">
                  <Instagram className="h-5 w-5 text-[#01847E] group-hover:text-white transition-colors duration-300" />
                </a>
                <a href="#" className="w-10 h-10 border-2 border-[#01847E] rounded-full flex items-center justify-center hover:bg-[#01847E] transition-all duration-300 group">
                  <Youtube className="h-5 w-5 text-[#01847E] group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* 联系信息 */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-6">{content.contact.title}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#0D7E9C] mt-1 flex-shrink-0" />
                <span className="text-gray-300">{content.contact.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#0D7E9C] flex-shrink-0" />
                <span className="text-gray-300">{content.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#0D7E9C] flex-shrink-0" />
                <span className="text-gray-300">{content.contact.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部版权信息 */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">{content.copyright}</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#0D7E9C] transition-colors duration-300">
                {currentLang === 'zh' ? '隐私政策' : 'Privacy Policy'}
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0D7E9C] transition-colors duration-300">
                {currentLang === 'zh' ? '服务条款' : 'Terms of Service'}
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0D7E9C] transition-colors duration-300">
                {currentLang === 'zh' ? '网站地图' : 'Sitemap'}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 返回顶部按钮 */}
      {showBackToTop && <button onClick={scrollToTop} className="fixed bottom-8 right-8 w-12 h-12 bg-[#0D7E9C] hover:bg-[#01847E] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-40 hover:scale-110">
          <ArrowUp className="h-6 w-6" />
        </button>}
    </footer>;
};
export default Footer;
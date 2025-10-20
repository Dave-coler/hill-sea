// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp, ChevronRight } from 'lucide-react';

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
      company: '海希尔新能源科技（深圳）有限公司',
      description: '专注于新能源智能重卡研发与制造，为全球客户提供绿色、智能、高效的运输解决方案。',
      quickLinks: {
        title: '快速链接',
        links: ['首页', '产品中心', '解决方案', '关于我们', '新闻资讯', '联系我们']
      },
      products: {
        title: '产品服务',
        items: ['智能重卡', '电池系统', '充电设施', '车联网平台', '金融服务', '售后支持']
      },
      contact: {
        title: '联系我们',
        address: '深圳市南山区科技园南区',
        phone: '+86 755-8888-9999',
        email: 'info@hillsea.com'
      },
      follow: {
        title: '关注我们'
      },
      copyright: '© 2024 海希尔新能源科技（深圳）有限公司。保留所有权利。'
    },
    en: {
      company: 'Hillsea New Energy Technology (Shenzhen) Co., Ltd.',
      description: 'Focusing on the research, development and manufacturing of new energy intelligent heavy trucks, providing green, intelligent and efficient transportation solutions for global customers.',
      quickLinks: {
        title: 'Quick Links',
        links: ['Home', 'Products', 'Solutions', 'About Us', 'News', 'Contact Us']
      },
      products: {
        title: 'Products & Services',
        items: ['Smart Heavy Truck', 'Battery System', 'Charging Facilities', 'IoT Platform', 'Financial Services', 'After-sales Support']
      },
      contact: {
        title: 'Contact Us',
        address: 'Nanshan District, Shenzhen, China',
        phone: '+86 755-8888-9999',
        email: 'info@hillsea.com'
      },
      follow: {
        title: 'Follow Us'
      },
      copyright: '© 2024 Hillsea New Energy Technology (Shenzhen) Co., Ltd. All rights reserved.'
    }
  };
  const content = footerContent[currentLang];
  return <footer className="bg-gray-900 text-white">
      {/* 主要内容区域 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div className="lg:col-span-1">
            {/* 更新公司LOGO */}
            <img src="https://ecosyn-1259516302.cos.ap-singapore.myqcloud.com/Hillsea/LOGO/HILLSEAAAw.png?q-sign-algorithm=sha1&q-ak=AKIDp2UwjoezujR-4ORz63H6M3Z_FzNlbWqzRX2t0rL591mV4TtwN2NkIVpV40atCgQ-&q-sign-time=1760922231;1760925831&q-key-time=1760922231;1760925831&q-header-list=host&q-url-param-list=ci-process&q-signature=1f1fe0205e84693a2bb81f10a4f879f285af6c76&x-cos-security-token=JPXNoaYDJYj28gNcQ4kkS5aQHY1Y7UXadce6f50d421a9db930a644b7fb8756b4etc1BOYkLGiesCSZnVQ7h-HrbY-dO-T3jGp4hrPIVKCBCoOmRAXdwxUwXhkS2YLz2ybudkG3LbsOy1q6H4KIV8enldhvNcLKv6xiQSuVBbrLKmBmO6P868DQ-1ZRC4eKgQsozpDjw8PJ_dylcwQB1YHshjJN9a0UzrPUxLFaUgWKpkucPMZUlKoUa0hp6TVDS3ISS3LvvK28fRgVgwr9RuxoN22qIv01mo71uo-hKbYnAhsn2ZaezMi_itqoqpCwJUaYIxycKkcVhbqsf42n0Q&ci-process=originImage" alt="HILLSEA Logo" className="h-12 w-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-[#0D7E9C]">{content.company}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">{content.description}</p>
            
            {/* 社交媒体链接 */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{content.follow.title}</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0D7E9C] transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0D7E9C] transition-colors duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0D7E9C] transition-colors duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0D7E9C] transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0D7E9C] transition-colors duration-300">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{content.quickLinks.title}</h4>
            <ul className="space-y-3">
              {content.quickLinks.links.map((link, index) => <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-[#0D7E9C] transition-colors duration-300 flex items-center group">
                    <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* 产品服务 */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{content.products.title}</h4>
            <ul className="space-y-3">
              {content.products.items.map((item, index) => <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-[#0D7E9C] transition-colors duration-300 flex items-center group">
                    <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* 联系信息 */}
          <div>
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

            {/* 订阅表单 */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">{currentLang === 'zh' ? '订阅我们的资讯' : 'Subscribe to Our Newsletter'}</h5>
              <div className="flex">
                <input type="email" placeholder={currentLang === 'zh' ? '您的邮箱' : 'Your email'} className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:border-[#0D7E9C] text-white placeholder-gray-400" />
                <Button className="bg-[#0D7E9C] hover:bg-[#01847E] text-white px-4 py-2 rounded-r-md transition-colors duration-300">
                  {currentLang === 'zh' ? '订阅' : 'Subscribe'}
                </Button>
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
// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp, Globe, Clock, Award, Users } from 'lucide-react';

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
        email: 'info@hillsea.com',
        workTime: '周一至周五 9:00-18:00'
      },
      follow: {
        title: '关注我们',
        desc: '获取最新产品资讯和技术动态'
      },
      services: {
        title: '产品服务',
        items: ['智能电驱系统', '新能源重卡', '技术支持', '售后服务']
      },
      about: {
        title: '关于我们',
        items: ['公司简介', '发展历程', '荣誉资质', '合作伙伴']
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
        email: 'info@hillsea.com',
        workTime: 'Monday to Friday 9:00-18:00'
      },
      follow: {
        title: 'Follow Us',
        desc: 'Get the latest product news and technology updates'
      },
      services: {
        title: 'Products & Services',
        items: ['Smart Drive System', 'Electric Trucks', 'Technical Support', 'After-sales Service']
      },
      about: {
        title: 'About Us',
        items: ['Company Profile', 'History', 'Certifications', 'Partners']
      },
      copyright: '© 2024 Shanghai Hillsea New Energy Technology Co., Ltd. All rights reserved.'
    }
  };
  const content = footerContent[currentLang];
  return <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#01847E]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0D7E9C]/5 rounded-full blur-3xl" />
      
      {/* 主要内容区域 - 四列布局 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* 公司信息 - 第一列 */}
          <div className="lg:col-span-1">
            <img src="https://ecosyn-1259516302.cos.ap-singapore.myqcloud.com/Hillsea/LOGO/HILLSEAAAw.png?q-sign-algorithm=sha1&q-ak=AKIDp2UwjoezujR-4ORz63H6M3Z_FzNlbWqzRX2t0rL591mV4TtwN2NkIVpV40atCgQ-&q-sign-time=1760922231;1760925831&q-key-time=1760922231;1760925831&q-header-list=host&q-url-param-list=ci-process&q-signature=1f1fe0205e84693a2bb81f10a4f879f285af6c76&x-cos-security-token=JPXNoaYDJYj28gNcQ4kkS5aQHY1Y7UXadce6f50d421a9db930a644b7fb8756b4etc1BOYkLGiesCSZnVQ7h-HrbY-dO-T3jGp4hrPIVKCBCoOmRAXdwxUwXhkS2YLz2ybudkG3LbsOy1q6H4KIV8enldhvNcLKv6xiQSuVBbrLKmBmO6P868DQ-1ZRC4eKgQsozpDjw8PJ_dylcwQB1YHshjJN9a0UzrPUxLFaUgWKpkucPMZUlKoUa0hp6TVDS3ISS3LvvK28fRgVgwr9RuxoN22qIv01mo71uo-hKbYnAhsn2ZaezMi_itqoqpCwJUaYIxycKkcVhbqsf42n0Q&ci-process=originImage" alt="HILLSEA Logo" className="h-14 w-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#01847E]">{content.company}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">{content.description}</p>
            
            {/* 公司统计信息 */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-[#01847E]">10+</div>
                <div className="text-xs text-gray-400">{currentLang === 'zh' ? '年经验' : 'Years Experience'}</div>
              </div>
              <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-[#01847E]">50+</div>
                <div className="text-xs text-gray-400">{currentLang === 'zh' ? '合作伙伴' : 'Partners'}</div>
              </div>
            </div>
          </div>

          {/* 产品服务 - 第二列 */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-white flex items-center">
              <Globe className="h-5 w-5 mr-2 text-[#01847E]" />
              {content.services.title}
            </h4>
            <ul className="space-y-3">
              {content.services.items.map((item, index) => <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-[#01847E] transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-[#01847E] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* 联系信息 - 第三列 */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-white flex items-center">
              <Mail className="h-5 w-5 mr-2 text-[#01847E]" />
              {content.contact.title}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-[#01847E]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#01847E]/20 transition-colors duration-300 mt-0.5">
                  <MapPin className="h-4 w-4 text-[#01847E]" />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">{content.contact.address}</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-[#01847E]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#01847E]/20 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-[#01847E]" />
                </div>
                <span className="text-gray-300 text-sm">{content.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-[#01847E]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#01847E]/20 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-[#01847E]" />
                </div>
                <span className="text-gray-300 text-sm">{content.contact.email}</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-[#01847E]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#01847E]/20 transition-colors duration-300">
                  <Clock className="h-4 w-4 text-[#01847E]" />
                </div>
                <span className="text-gray-300 text-sm">{content.contact.workTime}</span>
              </div>
            </div>
          </div>

          {/* 社交媒体和关于我们 - 第四列 */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-white flex items-center">
              <Users className="h-5 w-5 mr-2 text-[#01847E]" />
              {content.follow.title}
            </h4>
            <p className="text-gray-400 text-sm mb-4">{content.follow.desc}</p>
            
            {/* 社交媒体链接 */}
            <div className="flex flex-wrap gap-3 mb-6">
              <a href="#" className="w-10 h-10 border-2 border-[#01847E] rounded-full flex items-center justify-center hover:bg-[#01847E] transition-all duration-300 group hover:scale-110">
                <Facebook className="h-5 w-5 text-[#01847E] group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="w-10 h-10 border-2 border-[#01847E] rounded-full flex items-center justify-center hover:bg-[#01847E] transition-all duration-300 group hover:scale-110">
                <Twitter className="h-5 w-5 text-[#01847E] group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="w-10 h-10 border-2 border-[#01847E] rounded-full flex items-center justify-center hover:bg-[#01847E] transition-all duration-300 group hover:scale-110">
                <Linkedin className="h-5 w-5 text-[#01847E] group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="w-10 h-10 border-2 border-[#01847E] rounded-full flex items-center justify-center hover:bg-[#01847E] transition-all duration-300 group hover:scale-110">
                <Instagram className="h-5 w-5 text-[#01847E] group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="w-10 h-10 border-2 border-[#01847E] rounded-full flex items-center justify-center hover:bg-[#01847E] transition-all duration-300 group hover:scale-110">
                <Youtube className="h-5 w-5 text-[#01847E] group-hover:text-white transition-colors duration-300" />
              </a>
            </div>

            {/* 关于我们快速链接 */}
            <div>
              <h5 className="text-sm font-semibold text-white mb-3">{content.about.title}</h5>
              <ul className="space-y-2">
                {content.about.items.map((item, index) => <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-[#01847E] transition-colors duration-300 text-sm flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#01847E] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item}
                    </a>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 底部版权信息 - 增强版 */}
      <div className="relative z-10 border-t border-gray-800 bg-gray-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* 版权信息 */}
            <div className="flex flex-col items-center lg:items-start space-y-2">
              <p className="text-gray-400 text-sm">{content.copyright}</p>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Award className="h-3 w-3" />
                <span>{currentLang === 'zh' ? 'ISO 9001:2015 认证企业' : 'ISO 9001:2015 Certified'}</span>
              </div>
            </div>
            
            {/* 法律链接 */}
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#01847E] transition-colors duration-300">
                {currentLang === 'zh' ? '隐私政策' : 'Privacy Policy'}
              </a>
              <a href="#" className="text-gray-400 hover:text-[#01847E] transition-colors duration-300">
                {currentLang === 'zh' ? '服务条款' : 'Terms of Service'}
              </a>
              <a href="#" className="text-gray-400 hover:text-[#01847E] transition-colors duration-300">
                {currentLang === 'zh' ? '网站地图' : 'Sitemap'}
              </a>
              <a href="#" className="text-gray-400 hover:text-[#01847E] transition-colors duration-300">
                {currentLang === 'zh' ? '法律声明' : 'Legal Notice'}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 返回顶部按钮 - 增强版 */}
      {showBackToTop && <button onClick={scrollToTop} className="fixed bottom-8 right-8 w-14 h-14 bg-[#01847E] hover:bg-[#0D7E9C] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-40 hover:scale-110 hover:shadow-2xl group">
          <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>}
    </footer>;
};
export default Footer;
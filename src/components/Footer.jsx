// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { Mail, Phone, MapPin, Send, ChevronUp, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer = ({
  t,
  isDarkMode,
  scrollToSection
}) => {
  const [currentLang, setCurrentLang] = useState('zh');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

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

  // 返回顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // 订阅处理
  const handleSubscribe = e => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  // 快速链接与头部导航一致
  const quickLinks = currentLang === 'zh' ? [{
    name: 'ECOSYN',
    href: '#ecosyn'
  }, {
    name: '解决方案',
    href: '#solutions'
  }, {
    name: '服务',
    href: '#services'
  }, {
    name: '关于我们',
    href: '#about'
  }] : [{
    name: 'ECOSYN',
    href: '#ecosyn'
  }, {
    name: 'Solutions',
    href: '#solutions'
  }, {
    name: 'Services',
    href: '#services'
  }, {
    name: 'About Us',
    href: '#about'
  }];
  const services = currentLang === 'zh' ? [{
    name: '电驱系统集成',
    description: '提供完整的电驱系统解决方案'
  }, {
    name: '智能控制模块',
    description: '先进的控制算法和硬件设计'
  }, {
    name: '电池管理系统',
    description: '安全可靠的电池监控和管理'
  }, {
    name: '技术咨询服务',
    description: '专业的技术支持和咨询服务'
  }] : [{
    name: 'Electric Drive Integration',
    description: 'Complete electric drive system solutions'
  }, {
    name: 'Smart Control Modules',
    description: 'Advanced control algorithms and hardware design'
  }, {
    name: 'Battery Management Systems',
    description: 'Safe and reliable battery monitoring and management'
  }, {
    name: 'Technical Consulting',
    description: 'Professional technical support and consulting services'
  }];
  const legalLinks = currentLang === 'zh' ? [{
    name: '隐私政策',
    href: '#privacy'
  }, {
    name: '使用条款',
    href: '#terms'
  }, {
    name: 'Cookie政策',
    href: '#cookies'
  }, {
    name: '法律声明',
    href: '#legal'
  }] : [{
    name: 'Privacy Policy',
    href: '#privacy'
  }, {
    name: 'Terms of Service',
    href: '#terms'
  }, {
    name: 'Cookie Policy',
    href: '#cookies'
  }, {
    name: 'Legal Notice',
    href: '#legal'
  }];
  return <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      {/* 主要内容区域 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* 公司信息 */}
          <div className="lg:col-span-2">
            {/* Logo和公司名称 */}
            <div className="flex items-center space-x-3 mb-6">
              <img src="https://ecosyn-1259516302.cos.ap-singapore.myqcloud.com/Hillsea/LOGO/HILLSEAAA.png" alt="HILLSEA Logo" className="h-10 w-auto" />
              <div>
                <h3 className="text-xl font-bold text-[#01847E]">HILLSEA</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">上海汉势新能源科技有限公司</p>
              </div>
            </div>

            {/* 公司描述 */}
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {currentLang === 'zh' ? '专注于新能源商用车电驱系统研发与制造，为全球客户提供高效、可靠、环保的电动化解决方案。' : 'Focusing on the research and development of electric drive systems for new energy commercial vehicles, providing efficient, reliable, and environmentally friendly electrification solutions for global customers.'}
            </p>

            {/* 联系信息 */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <MapPin className="h-5 w-5 text-[#01847E]" />
                <span className="text-sm">上海市闵行区剑川路955号</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <Phone className="h-5 w-5 text-[#01847E]" />
                <span className="text-sm">+86 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <Mail className="h-5 w-5 text-[#01847E]" />
                <span className="text-sm">info@hillsea.com</span>
              </div>
            </div>

            {/* 社交媒体 */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-[#01847E] transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#01847E] transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#01847E] transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#01847E] transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#01847E] transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-lg font-semibold text-[#01847E] mb-4">
              {currentLang === 'zh' ? '快速链接' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => <li key={index}>
                  <a href={link.href} onClick={e => {
                if (link.href.startsWith('#')) {
                  e.preventDefault();
                  const targetId = link.href.substring(1);
                  const element = document.getElementById(targetId);
                  if (element) {
                    element.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }
                }
              }} className="text-gray-600 dark:text-gray-300 hover:text-[#01847E] transition-colors duration-200 text-sm">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* 服务项目 */}
          <div>
            <h4 className="text-lg font-semibold text-[#01847E] mb-4">
              {currentLang === 'zh' ? '服务项目' : 'Services'}
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => <li key={index}>
                  <a href="#" className="block group">
                    <p className="text-gray-600 dark:text-gray-300 hover:text-[#01847E] transition-colors duration-200 text-sm font-medium group-hover:font-semibold">
                      {service.name}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                      {service.description}
                    </p>
                  </a>
                </li>)}
            </ul>
          </div>

          {/* 订阅 */}
          <div>
            <h4 className="text-lg font-semibold text-[#01847E] mb-4">
              {currentLang === 'zh' ? '订阅资讯' : 'Newsletter'}
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {currentLang === 'zh' ? '获取最新的产品信息和技术资讯' : 'Get the latest product information and technology news'}
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={currentLang === 'zh' ? '您的邮箱' : 'Your email'} className="w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#01847E] focus:border-transparent" required />
              </div>
              <Button type="submit" className="w-full bg-[#01847E] hover:bg-[#01847E]/90 text-white px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <Send className="h-4 w-4" />
                <span>{currentLang === 'zh' ? '订阅' : 'Subscribe'}</span>
              </Button>
            </form>
            {isSubscribed && <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-green-700 dark:text-green-300 text-sm">
                  {currentLang === 'zh' ? '订阅成功！感谢您的关注。' : 'Subscription successful! Thank you for your interest.'}
                </p>
              </div>}
          </div>
        </div>
      </div>

      {/* 底部版权信息 */}
      <div className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* 版权信息 */}
            <div className="text-gray-600 dark:text-gray-300 text-sm">
              <p>&copy; 2024 上海汉势新能源科技有限公司（HILLSEA）. {currentLang === 'zh' ? '保留所有权利。' : 'All rights reserved.'}</p>
            </div>

            {/* 法律链接 */}
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              {legalLinks.map((link, index) => <a key={index} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-[#01847E] transition-colors duration-200">
                  {link.name}
                </a>)}
            </div>
          </div>
        </div>
      </div>

      {/* 返回顶部按钮 */}
      {showBackToTop && <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-[#01847E] hover:bg-[#01847E]/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40">
          <ChevronUp className="h-6 w-6" />
        </button>}
    </footer>;
};
export default Footer;
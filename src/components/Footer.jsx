// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp, Globe, Clock, Award, Zap, Shield, Cpu } from 'lucide-react';

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
      features: {
        title: '核心优势',
        items: [{
          icon: Zap,
          text: '高效节能'
        }, {
          icon: Shield,
          text: '安全可靠'
        }, {
          icon: Cpu,
          text: '智能控制'
        }]
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
      features: {
        title: 'Core Advantages',
        items: [{
          icon: Zap,
          text: 'High Efficiency'
        }, {
          icon: Shield,
          text: 'Safety & Reliability'
        }, {
          icon: Cpu,
          text: 'Smart Control'
        }]
      },
      copyright: '© 2024 Shanghai Hillsea New Energy Technology Co., Ltd. All rights reserved.'
    }
  };
  const content = footerContent[currentLang];
  return <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* 科技感背景装饰 */}
      <div className="absolute inset-0">
        {/* 网格背景 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* 动态光效 */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#01847E]/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-[#0D7E9C]/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* 扫描线效果 */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#01847E]/5 to-transparent animate-pulse" />
      </div>

      {/* 主要内容区域 - 简洁三列布局 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 公司信息 - 左侧 */}
          <div className="space-y-6">
            {/* Logo和公司名 */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img src="https://ecosyn-1259516302.cos.ap-singapore.myqcloud.com/Hillsea/LOGO/HILLSEAAAw.png?q-sign-algorithm=sha1&q-ak=AKIDp2UwjoezujR-4ORz63H6M3Z_FzNlbWqzRX2t0rL591mV4TtwN2NkIVpV40atCgQ-&q-sign-time=1760922231;1760925831&q-key-time=1760922231;1760925831&q-header-list=host&q-url-param-list=ci-process&q-signature=1f1fe0205e84693a2bb81f10a4f879f285af6c76&x-cos-security-token=JPXNoaYDJYj28gNcQ4kkS5aQHY1Y7UXadce6f50d421a9db930a644b7fb8756b4etc1BOYkLGiesCSZnVQ7h-HrbY-dO-T3jGp4hrPIVKCBCoOmRAXdwxUwXhkS2YLz2ybudkG3LbsOy1q6H4KIV8enldhvNcLKv6xiQSuVBbrLKmBmO6P868DQ-1ZRC4eKgQsozpDjw8PJ_dylcwQB1YHshjJN9a0UzrPUxLFaUgWKpkucPMZUlKoUa0hp6TVDS3ISS3LvvK28fRgVgwr9RuxoN22qIv01mo71uo-hKbYnAhsn2ZaezMi_itqoqpCwJUaYIxycKkcVhbqsf42n0Q&ci-process=originImage" alt="HILLSEA Logo" className="h-12 w-auto" />
                <div className="absolute -inset-1 bg-gradient-to-r from-[#01847E] to-[#0D7E9C] rounded-lg opacity-20 blur-sm" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gradient-company">{content.company}</h3>
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <Award className="h-3 w-3" />
                  <span>ISO 9001:2015</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">{content.description}</p>
            
            {/* 核心优势 - 科技感展示 */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider">{content.features.title}</h4>
              <div className="space-y-2">
                {content.features.items.map((feature, index) => {
                const Icon = feature.icon;
                return <div key={index} className="flex items-center space-x-3 group">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#01847E]/20 to-[#0D7E9C]/20 rounded-lg flex items-center justify-center border border-[#01847E]/30 group-hover:border-[#01847E]/60 transition-all duration-300">
                        <Icon className="h-4 w-4 text-[#01847E]" />
                      </div>
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{feature.text}</span>
                    </div>;
              })}
              </div>
            </div>
          </div>

          {/* 产品服务 - 中间 */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white flex items-center">
              <Globe className="h-5 w-5 mr-2 text-[#01847E]" />
              {content.services.title}
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {content.services.items.map((item, index) => <a key={index} href="#" className="group relative p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-[#01847E]/50 hover:bg-gray-800/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#01847E]/5 to-[#0D7E9C]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#01847E] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{item}</span>
                  </div>
                </a>)}
            </div>
          </div>

          {/* 联系信息和社交媒体 - 右侧 */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white flex items-center">
              <Mail className="h-5 w-5 mr-2 text-[#01847E]" />
              {content.contact.title}
            </h4>
            
            {/* 联系信息 - 简洁卡片式 */}
            <div className="space-y-3">
              <div className="group p-3 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-[#01847E]/30 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-[#01847E]" />
                  <span className="text-sm text-gray-300">{content.contact.address}</span>
                </div>
              </div>
              <div className="group p-3 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-[#01847E]/30 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-[#01847E]" />
                  <span className="text-sm text-gray-300">{content.contact.phone}</span>
                </div>
              </div>
              <div className="group p-3 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-[#01847E]/30 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-[#01847E]" />
                  <span className="text-sm text-gray-300">{content.contact.email}</span>
                </div>
              </div>
            </div>

            {/* 社交媒体 - 简洁图标行 */}
            <div className="space-y-3">
              <p className="text-xs text-gray-400 uppercase tracking-wider">{content.follow.title}</p>
              <div className="flex space-x-2">
                {[{
                icon: Facebook,
                href: '#'
              }, {
                icon: Twitter,
                href: '#'
              }, {
                icon: Linkedin,
                href: '#'
              }, {
                icon: Instagram,
                href: '#'
              }, {
                icon: Youtube,
                href: '#'
              }].map((social, index) => {
                const Icon = social.icon;
                return <a key={index} href={social.href} className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center border border-gray-700/50 hover:border-[#01847E]/50 hover:bg-[#01847E]/20 transition-all duration-300 group">
                      <Icon className="h-5 w-5 text-gray-400 group-hover:text-[#01847E] transition-colors duration-300" />
                    </a>;
              })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部版权信息 - 极简设计 */}
      <div className="relative z-10 border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-gray-400">{content.copyright}</p>
            <div className="flex space-x-6 text-xs">
              <a href="#" className="text-gray-400 hover:text-[#01847E] transition-colors duration-300">
                {currentLang === 'zh' ? '隐私政策' : 'Privacy Policy'}
              </a>
              <a href="#" className="text-gray-400 hover:text-[#01847E] transition-colors duration-300">
                {currentLang === 'zh' ? '服务条款' : 'Terms of Service'}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 返回顶部按钮 - 科技感设计 */}
      {showBackToTop && <button onClick={scrollToTop} className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#01847E] to-[#0D7E9C] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-40 hover:scale-110 hover:shadow-2xl group">
          <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#01847E] to-[#0D7E9C] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
        </button>}
    </footer>;
};
export default Footer;
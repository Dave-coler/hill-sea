// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp, Globe, Clock, Award, Zap, Shield, Cpu, ExternalLink } from 'lucide-react';

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
      links: {
        title: '相关链接',
        items: [{
          name: '澳大利亚公路与交通局',
          nameEn: 'Austroads',
          url: 'https://austroads.com.au/',
          focus: '道路标准与基础设施：负责制定澳新道路管理标准，其研究直接影响重型车质量限制和电动车对路面影响。'
        }, {
          name: '国家重型车辆监管局',
          nameEn: 'NHVR',
          url: 'https://www.nhvr.gov.au/',
          focus: '重型车辆法规：监管澳大利亚所有重型车辆（包括公路列车）的合规性、安全和生产力，发布重卡电气化政策和研究。'
        }, {
          name: '澳大利亚卡车协会',
          nameEn: 'ATA',
          url: 'https://www.truck.net.au/',
          focus: '行业倡导与政策：代表澳大利亚卡车行业，积极推动电动卡车和增加公路列车质量限制的政策。'
        }, {
          name: '国家交通研究组织',
          nameEn: 'NTRO',
          url: 'https://www.ntro.org.au/',
          focus: '应用交通研究：前身为 ARRB，提供路面工程、未来交通和可持续基础设施的咨询和报告。'
        }, {
          name: '电动汽车理事会',
          nameEn: 'EVC',
          url: 'https://electricvehiclecouncil.com.au/',
          focus: '电动车推广：发布电动车（包括卡车）市场现状、政策建议和消费者信息。'
        }, {
          name: '中国汽车工程学会',
          nameEn: 'SAE-China',
          url: 'https://www.sae-china.org/',
          focus: '技术标准与研究：中国汽车行业的技术权威，发布新能源商用车技术路线图和行业标准。'
        }, {
          name: '中国汽车工业协会',
          nameEn: 'CAAM',
          url: 'http://www.caam.org.cn/',
          focus: '产业统计与市场：发布中国新能源汽车（包括重卡）的官方产销数据和市场分析。'
        }, {
          name: '中国电动汽车百人会',
          nameEn: 'China EV100',
          url: 'https://www.chinaev100.org/',
          focus: '高端智库与论坛：汇集产业、学术和政策资源，发布新能源汽车发展趋势和政策建议。'
        }, {
          name: '清华大学苏州汽车研究院',
          nameEn: 'Tsinghua Auto Institute',
          url: 'http://www.tsinghua-auto.com/',
          focus: '学术研究：依托清华大学，在新能源汽车技术、智能交通和重卡电气化方面进行深入研究。'
        }, {
          name: '国际能源署',
          nameEn: 'IEA',
          url: 'https://www.iea.org/',
          focus: '全球能源与交通分析：发布权威的《全球电动汽车展望》，涵盖全球重型电动车趋势、TCO 和减排路径。'
        }, {
          name: '国际清洁交通委员会',
          nameEn: 'ICCT',
          url: 'https://theicct.org/',
          focus: '政策与法规分析：专注于交通排放和政策研究，对全球重型车零排放政策和技术发展进行深度分析。'
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
      links: {
        title: 'Related Links',
        items: [{
          name: '澳大利亚公路与交通局',
          nameEn: 'Austroads',
          url: 'https://austroads.com.au/',
          focus: 'Road Standards & Infrastructure: Responsible for developing Australia-New Zealand road management standards, research directly impacts heavy vehicle mass limits and electric vehicle road effects.'
        }, {
          name: '国家重型车辆监管局',
          nameEn: 'NHVR',
          url: 'https://www.nhvr.gov.au/',
          focus: 'Heavy Vehicle Regulation: Regulates compliance, safety and productivity of all heavy vehicles in Australia, publishes electric truck policies and research.'
        }, {
          name: '澳大利亚卡车协会',
          nameEn: 'ATA',
          url: 'https://www.truck.net.au/',
          focus: 'Industry Advocacy & Policy: Represents Australian trucking industry, actively promotes electric trucks and increased road train mass limit policies.'
        }, {
          name: '国家交通研究组织',
          nameEn: 'NTRO',
          url: 'https://www.ntro.org.au/',
          focus: 'Applied Transport Research: Formerly ARRB, provides consulting and reports on road engineering, future transport and sustainable infrastructure.'
        }, {
          name: '电动汽车理事会',
          nameEn: 'EVC',
          url: 'https://electricvehiclecouncil.com.au/',
          focus: 'EV Promotion: Publishes electric vehicle market status, policy recommendations and consumer information.'
        }, {
          name: '中国汽车工程学会',
          nameEn: 'SAE-China',
          url: 'https://www.sae-china.org/',
          focus: 'Technical Standards & Research: Technical authority in Chinese automotive industry, publishes new energy commercial vehicle technology roadmaps and industry standards.'
        }, {
          name: '中国汽车工业协会',
          nameEn: 'CAAM',
          url: 'http://www.caam.org.cn/',
          focus: 'Industry Statistics & Market: Publishes official production and sales data and market analysis for Chinese new energy vehicles.'
        }, {
          name: '中国电动汽车百人会',
          nameEn: 'China EV100',
          url: 'https://www.chinaev100.org/',
          focus: 'High-end Think Tank & Forum: Gathers industry, academic and policy resources, publishes new energy vehicle development trends and policy recommendations.'
        }, {
          name: '清华大学苏州汽车研究院',
          nameEn: 'Tsinghua Auto Institute',
          url: 'http://www.tsinghua-auto.com/',
          focus: 'Academic Research: Based on Tsinghua University, conducts deep research in new energy vehicle technology, intelligent transport and heavy truck electrification.'
        }, {
          name: '国际能源署',
          nameEn: 'IEA',
          url: 'https://www.iea.org/',
          focus: 'Global Energy & Transport Analysis: Publishes authoritative "Global EV Outlook", covering global heavy-duty electric vehicle trends, TCO and emission reduction pathways.'
        }, {
          name: '国际清洁交通委员会',
          nameEn: 'ICCT',
          url: 'https://theicct.org/',
          focus: 'Policy & Regulation Analysis: Focuses on transport emissions and policy research, conducts in-depth analysis of global heavy-duty vehicle zero-emission policies and technology development.'
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
            {/* Logo和公司名 - 简化版 */}
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <img src="https://ecosyn-1259516302.cos.ap-singapore.myqcloud.com/Hillsea/LOGO/HILLSEAAAw.png?q-sign-algorithm=sha1&q-ak=AKIDp2UwjoezujR-4ORz63H6M3Z_FzNlbWqzRX2t0rL591mV4TtwN2NkIVpV40atCgQ-&q-sign-time=1760922231;1760925831&q-key-time=1760922231;1760925831&q-header-list=host&q-url-param-list=ci-process&q-signature=1f1fe0205e84693a2bb81f10a4f879f285af6c76&x-cos-security-token=JPXNoaYDJYj28gNcQ4kkS5aQHY1Y7UXadce6f50d421a9db930a644b7fb8756b4etc1BOYkLGiesCSZnVQ7h-HrbY-dO-T3jGp4hrPIVKCBCoOmRAXdwxUwXhkS2YLz2ybudkG3LbsOy1q6H4KIV8enldhvNcLKv6xiQSuVBbrLKmBmO6P868DQ-1ZRC4eKgQsozpDjw8PJ_dylcwQB1YHshjJN9a0UzrPUxLFaUgWKpkucPMZUlKoUa0hp6TVDS3ISS3LvvK28fRgVgwr9RuxoN22qIv01mo71uo-hKbYnAhsn2ZaezMi_itqoqpCwJUaYIxycKkcVhbqsf42n0Q&ci-process=originImage" alt="HILLSEA Logo" className="h-16 w-auto" />
              <h3 className="text-xl font-bold text-gradient-company text-center lg:text-left">{content.company}</h3>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">{content.description}</p>
          </div>

          {/* 相关链接 - 中间 */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white flex items-center">
              <Globe className="h-5 w-5 mr-2 text-[#01847E]" />
              {content.links.title}
            </h4>
            <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
              {content.links.items.map((item, index) => <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="group relative p-3 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-[#01847E]/50 hover:bg-gray-800/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#01847E]/5 to-[#0D7E9C]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#01847E] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                          {currentLang === 'zh' ? item.name : item.nameEn}
                        </span>
                      </div>
                      <ExternalLink className="h-3 w-3 text-gray-500 group-hover:text-[#01847E] transition-colors duration-300" />
                    </div>
                    <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300 line-clamp-2">
                      {currentLang === 'zh' ? item.nameEn : item.name}
                    </div>
                    {/* 悬停时显示的重点领域 */}
                    <div className="absolute left-0 right-0 bottom-full mb-2 p-3 bg-gray-900 border border-[#01847E]/30 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 transform translate-y-2 group-hover:translate-y-0">
                      <div className="text-xs text-gray-300 leading-relaxed max-w-xs">
                        {item.focus}
                      </div>
                      <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
                    </div>
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
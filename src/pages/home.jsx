// @ts-ignore;
import React, { useState, useEffect, useRef } from 'react';
// @ts-ignore;
import { Button, useToast } from '@/components/ui';
// @ts-ignore;
import { ArrowRight, Play, CheckCircle, BarChart3, Zap, Shield, Globe, Users, TrendingUp, Award, Menu, X, ChevronDown, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react';

// @ts-ignore;
import ROICalculator from '@/components/ROICalculator';
// @ts-ignore;
import ContactForm from '@/components/ContactForm';
// @ts-ignore;
import FloatingNavigation from '@/components/FloatingNavigation';
// @ts-ignore;
import ParticleBackground from '@/components/ParticleBackground';
// @ts-ignore;
import AnimatedSection from '@/components/AnimatedSection';
// @ts-ignore;
import HoverCard from '@/components/HoverCard';
// @ts-ignore;
import MilestoneTimeline from '@/components/MilestoneTimeline';
// @ts-ignore;
import Navigation from '@/components/Navigation';
// @ts-ignore;
import HeroSection from '@/components/HeroSection';
// @ts-ignore;
import Footer from '@/components/Footer';
const Home = props => {
  const {
    $w,
    style
  } = props;
  const {
    toast
  } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('zh');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  // 监听鼠标移动
  useEffect(() => {
    const handleMouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      setShowBackToTop(scrollPosition > 300);
      setIsScrolled(scrollPosition > 50);

      // 更新活跃section
      const sections = ['home', 'products', 'advantages', 'roi', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 语言切换
  const handleLanguageChange = lang => {
    setCurrentLang(lang);
    // 触发全局语言切换事件
    window.dispatchEvent(new CustomEvent('languageChange', {
      detail: {
        language: lang
      }
    }));
  };

  // 滚动到指定部分
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // 滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // 多语言内容
  const content = {
    zh: {
      nav: {
        home: '首页',
        products: '产品',
        advantages: '优势',
        roi: '投资回报',
        contact: '联系我们'
      },
      hero: {
        title: '新能源智能重卡',
        subtitle: '引领绿色运输革命',
        description: '融合尖端科技与环保理念，打造高效、智能、零排放的重卡解决方案',
        cta1: '了解产品',
        cta2: '联系我们',
        videoTitle: '观看产品演示'
      },
      products: {
        title: '智能电驱系统',
        subtitle: '高效动力，绿色未来',
        features: ['高效节能', '智能控制', '可靠耐用', '维护便捷'],
        specs: {
          power: '最大功率',
          powerValue: '400kW',
          torque: '最大扭矩',
          torqueValue: '2500Nm',
          range: '续航里程',
          rangeValue: '500km',
          charge: '快充时间',
          chargeValue: '30min'
        }
      },
      advantages: {
        title: '核心优势',
        subtitle: '技术领先，品质卓越',
        items: [{
          icon: 'zap',
          title: '高效节能',
          description: '采用最新能源管理技术，能耗降低30%，续航提升20%'
        }, {
          icon: 'shield',
          title: '安全可靠',
          description: '多重安全防护系统，通过国际权威认证，保障行车安全'
        }, {
          icon: 'cpu',
          title: '智能控制',
          description: 'AI智能驾驶辅助系统，实时优化路线，提升运输效率'
        }, {
          icon: 'globe',
          title: '环保零排',
          description: '零排放设计，符合全球最严环保标准，助力碳中和'
        }]
      },
      roi: {
        title: '投资回报分析',
        subtitle: '经济效益显著，投资回报快速',
        benefits: [{
          title: '燃料成本节省',
          value: '40%',
          description: '相比传统燃油车，燃料成本大幅降低'
        }, {
          title: '维护成本降低',
          value: '50%',
          description: '电动化设计，维护更简单，成本更低'
        }, {
          title: '投资回收期',
          value: '2-3年',
          description: '快速收回投资成本，长期收益可观'
        }, {
          title: '政府补贴',
          value: '最高30万',
          description: '享受国家新能源政策补贴，进一步降低成本'
        }]
      },
      contact: {
        title: '联系我们',
        subtitle: '专业团队为您提供定制化解决方案',
        form: {
          name: '姓名',
          phone: '电话',
          email: '邮箱',
          company: '公司',
          message: '留言',
          submit: '发送消息'
        },
        info: {
          address: '上海市闵行区剑川路955号',
          phone: '+86 755-8888-9999',
          email: 'info@hillsea.com'
        }
      }
    },
    en: {
      nav: {
        home: 'Home',
        products: 'Products',
        advantages: 'Advantages',
        roi: 'ROI',
        contact: 'Contact'
      },
      hero: {
        title: 'New Energy Smart Truck',
        subtitle: 'Leading Green Transportation Revolution',
        description: 'Integrating cutting-edge technology with environmental protection to create efficient, intelligent, zero-emission truck solutions',
        cta1: 'Learn More',
        cta2: 'Contact Us',
        videoTitle: 'Watch Product Demo'
      },
      products: {
        title: 'Smart Electric Drive System',
        subtitle: 'Efficient Power, Green Future',
        features: ['High Efficiency', 'Smart Control', 'Reliable & Durable', 'Easy Maintenance'],
        specs: {
          power: 'Max Power',
          powerValue: '400kW',
          torque: 'Max Torque',
          torqueValue: '2500Nm',
          range: 'Range',
          rangeValue: '500km',
          charge: 'Fast Charge',
          chargeValue: '30min'
        }
      },
      advantages: {
        title: 'Core Advantages',
        subtitle: 'Leading Technology, Excellent Quality',
        items: [{
          icon: 'zap',
          title: 'High Efficiency',
          description: 'Latest energy management technology, 30% less energy consumption, 20% longer range'
        }, {
          icon: 'shield',
          title: 'Safety & Reliability',
          description: 'Multiple safety protection systems, internationally certified for driving safety'
        }, {
          icon: 'cpu',
          title: 'Smart Control',
          description: 'AI intelligent driving assistance system, real-time route optimization, improved transport efficiency'
        }, {
          icon: 'globe',
          title: 'Zero Emission',
          description: 'Zero emission design, meets the world\'s strictest environmental standards, contributes to carbon neutrality'
        }]
      },
      roi: {
        title: 'Return on Investment Analysis',
        subtitle: 'Significant Economic Benefits, Quick ROI',
        benefits: [{
          title: 'Fuel Cost Savings',
          value: '40%',
          description: 'Significantly lower fuel costs compared to traditional fuel vehicles'
        }, {
          title: 'Maintenance Cost Reduction',
          value: '50%',
          description: 'Electric design, simpler maintenance, lower costs'
        }, {
          title: 'Payback Period',
          value: '2-3 years',
          description: 'Quick investment recovery, considerable long-term returns'
        }, {
          title: 'Government Subsidies',
          value: 'Up to ¥300K',
          description: 'Enjoy national new energy policy subsidies to further reduce costs'
        }]
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Professional team provides customized solutions',
        form: {
          name: 'Name',
          phone: 'Phone',
          email: 'Email',
          company: 'Company',
          message: 'Message',
          submit: 'Send Message'
        },
        info: {
          address: 'No. 955 Jianchuan Road, Minhang District, Shanghai',
          phone: '+86 755-8888-9999',
          email: 'info@hillsea.com'
        }
      }
    }
  };
  const t = content[currentLang];

  // 获取图标组件
  const getIcon = iconName => {
    const icons = {
      zap: Zap,
      shield: Shield,
      cpu: Cpu,
      globe: Globe
    };
    return icons[iconName] || Zap;
  };
  return <div style={style} className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 overflow-x-hidden">
      {/* 导航栏 */}
      <Navigation currentLang={currentLang} setCurrentLang={handleLanguageChange} isScrolled={isScrolled} activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <HeroSection currentLang={currentLang} scrollToSection={scrollToSection} />

      {/* 产品展示部分 */}
      <AnimatedSection id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.products.title}</h2>
            <p className="text-xl text-gray-600">{t.products.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {t.products.features.map((feature, index) => <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>)}
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#01847E]">{t.products.specs.powerValue}</div>
                  <div className="text-sm text-gray-600">{t.products.specs.power}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#01847E]">{t.products.specs.torqueValue}</div>
                  <div className="text-sm text-gray-600">{t.products.specs.torque}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#01847E]">{t.products.specs.rangeValue}</div>
                  <div className="text-sm text-gray-600">{t.products.specs.range}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#01847E]">{t.products.specs.chargeValue}</div>
                  <div className="text-sm text-gray-600">{t.products.specs.charge}</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img src="https://picsum.photos/seed/electric-truck/600/400.jpg" alt="Electric Truck" className="rounded-lg shadow-lg" />
              <div className="absolute -bottom-6 -right-6 bg-[#01847E] text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 统一背景部分：核心优势到投资回报 */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* 背景装饰 */}
        <div className="absolute inset-0">
          {/* 网格背景 */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          
          {/* 动态光效 */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#01847E]/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-[#0D7E9C]/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
          
          {/* 扫描线效果 */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#01847E]/5 to-transparent animate-pulse" />
        </div>

        {/* 核心优势部分 */}
        <AnimatedSection id="advantages" className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">{t.advantages.title}</h2>
              <p className="text-xl text-gray-300">{t.advantages.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.advantages.items.map((item, index) => {
              const Icon = getIcon(item.icon);
              return <HoverCard key={index} icon={Icon} title={item.title} description={item.description} />;
            })}
            </div>
          </div>
        </AnimatedSection>

        {/* 投资回报分析部分 */}
        <AnimatedSection id="roi" className="relative z-10 py-20 border-t border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">{t.roi.title}</h2>
              <p className="text-xl text-gray-300">{t.roi.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                {t.roi.benefits.map((benefit, index) => <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-[#01847E]/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                      <span className="text-3xl font-bold text-[#01847E]">{benefit.value}</span>
                    </div>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>)}
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50">
                <ROICalculator currentLang={currentLang} />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* 联系我们部分 */}
      <AnimatedSection id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
            <p className="text-xl text-gray-600">{t.contact.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm currentLang={currentLang} />
            
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">联系信息</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#01847E]" />
                    <span className="text-gray-700">{t.contact.info.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#01847E]" />
                    <span className="text-gray-700">{t.contact.info.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#01847E]" />
                    <span className="text-gray-700">{t.contact.info.email}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">关注我们</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-[#01847E] text-white rounded-full flex items-center justify-center hover:bg-[#0D7E9C] transition-colors duration-300">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#01847E] text-white rounded-full flex items-center justify-center hover:bg-[#0D7E9C] transition-colors duration-300">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#01847E] text-white rounded-full flex items-center justify-center hover:bg-[#0D7E9C] transition-colors duration-300">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#01847E] text-white rounded-full flex items-center justify-center hover:bg-[#0D7E9C] transition-colors duration-300">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#01847E] text-white rounded-full flex items-center justify-center hover:bg-[#0D7E9C] transition-colors duration-300">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 页脚 */}
      <Footer currentLang={currentLang} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} scrollToSection={scrollToSection} />

      {/* 返回顶部按钮 */}
      {showBackToTop && <button onClick={scrollToTop} className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#01847E] to-[#0D7E9C] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-40 hover:scale-110 hover:shadow-2xl group">
          <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#01847E] to-[#0D7E9C] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
        </button>}
    </div>;
};
export default Home;
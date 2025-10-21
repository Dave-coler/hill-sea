// @ts-ignore;
import React, { useState, useEffect, useRef } from 'react';
// @ts-ignore;
import { Button, Input } from '@/components/ui';
// @ts-ignore;
import { Zap, DollarSign, Shield, Plug, Brain, Cog, Truck, Wind, Calculator, Check, Play, ArrowRight, Mail, Battery } from 'lucide-react';

// 导入组件
import ParticleBackground from '@/components/ParticleBackground';
import AnimatedSection from '@/components/AnimatedSection';
import HoverCard from '@/components/HoverCard';
import MilestoneTimeline from '@/components/MilestoneTimeline';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import ROICalculator from '@/components/ROICalculator';
import ContactForm from '@/components/ContactForm';
import FloatingNavigation from '@/components/FloatingNavigation';

// 语言配置
const translations = {
  zh: {
    navigation: {
      home: '首页',
      value: '核心优势',
      tech: '技术参数',
      apps: '应用场景',
      roi: '投资回报',
      brand: '联系我们'
    },
    hero: {
      title: '⚡ ECOSYN：为百吨级公路列车重塑低碳未来',
      subtitle: '全球首个为公路列车量身定制的智能电驱系统。\n即插即用，立减80%燃料成本，零改装即可上路。',
      features: [{
        title: '≥80% 燃料成本立减',
        desc: '智能能量管理优化'
      }, {
        title: '2400 kWh 超大能量存储',
        desc: '模块化储能架构'
      }, {
        title: '0% 现有车队改装需求',
        desc: '即插即用设计'
      }],
      cta1: '🔢 立即计算 ROI',
      cta2: '🎥 预约技术演示'
    },
    value: {
      title: 'ECOSYN 架构：驱动未来的智能能源系统',
      subtitle: '以成本削减、智能兼容与安全稳定三大核心优势，定义新能源公路列车的下一代标准。',
      cards: [{
        title: '成本削减引擎',
        subtitle: '成本效益的革命，从80%开始。',
        description: 'ECOSYN 的电驱动系统承担了牵引车的大部分功率负载，通过 AI 优化能量管理 (VIS)，最大化制动能量回收与能耗效率。在典型干线运输场景下，燃油成本削减可超过 80%。',
        features: ['AI 能量优化', '制动能量回收', '80% 成本削减']
      }, {
        title: '智能兼容集成',
        subtitle: '即插即用，零改装上线。',
        description: '革命性的 VIS 智能感应系统让 ECOSYN 能与任何主流牵引车毫秒级响应协同。无需车头改装、无需调试、加挂即走。',
        features: ['毫秒级响应', '零改装设计', '智能传感器']
      }, {
        title: '增强安全稳定性',
        subtitle: '更安全的智能电驱控制。',
        description: 'ECOSYN 集成了 EASR 防滑系统与 IESS 车身稳定控制系统，搭载 EDC 电子差速控制算法，实时横摆阻尼调整。',
        features: ['EASR 防滑系统', 'IESS 稳定控制', 'EDC 差速控制']
      }]
    },
    tech: {
      title: '技术的力量：四大系统协同定义新能源标准',
      subtitle: '从智能识别到分布式驱动，每一处设计都源自对极限工况的理解。',
      systems: [{
        title: 'VIS — Versatile Integration System',
        description: '让传统柴油车头与领头挂车ECOSYN实现毫秒级协同。',
        features: ['Intelligent Sensor 智能感知系统', 'Driver Intention Recognition 驾驶意图识别', 'Torque Control 扭矩分配', 'Vehicle Status Recognition & Fault Handling 状态监测和故障处理']
      }, {
        title: 'EDC — Electronic Differential Controller',
        description: '实时动态分配扭矩，让安全性与能效并行。',
        features: ['EASR 防滑控制', 'IESS 车身稳定系统', 'MEDS 多轴差速控制', 'IRBS 智能制动能量回收']
      }, {
        title: 'DDS — Distributed Driveaxle System',
        description: '支持双电驱桥 /三电驱桥布局，澎湃动力输出，助力高速重载、高效爬坡。',
        features: ['双电驱桥 / 三电驱桥配置', '峰值扭矩 80,000 Nm / 120,000 Nm', '额定功率 700kW / 1050 kW']
      }, {
        title: 'ESS — Energy Storage System',
        description: 'Drop-and-Hook 快速更换模式，充电时间与装卸时间同步，续航焦虑终结。',
        features: ['800 kWh / 1600 kWh / 2400 kWh', '模块化储能架构', '兼容快换方案']
      }],
      table: {
        title: '产品配置表',
        headers: ['型号', '电驱桥配置', '储能容量', '峰值扭矩', '额定功率', '标配系统'],
        rows: [{
          model: 'EcoSyn One',
          axles: '双电驱桥',
          battery: '800 kWh',
          torque: '80000Nm',
          power: '700kW',
          systems: 'VIS'
        }, {
          model: 'EcoSyn Pro',
          axles: '双电驱桥',
          battery: '1600kWh',
          torque: '80000Nm',
          power: '700kW',
          systems: 'VIS + EDC'
        }, {
          model: 'EcoSyn Max',
          axles: '三电驱桥',
          battery: '2400kWh',
          torque: '120000Nm',
          power: '1050kW',
          systems: 'VIS + EDC'
        }]
      }
    },
    apps: {
      title: '让能源转型发生在每一公里。',
      scenarios: [{
        title: '公路列车场景',
        description: '在长距离高载运输中，ECOSYN 以分布式电驱承担主牵引力，有效削减柴油消耗 80% 以上，大幅提升运营效率与利润空间。',
        highlights: ['80% 燃料削减', '提升运营效率', '增加利润空间']
      }, {
        title: '电能配送场景',
        description: 'ECOSYN 支持绿色能源的灵活运输，将风电、光伏或富余电能从电厂送往负载边缘。在电网不足或离网地区，提供高效的电能移动方案。',
        highlights: ['绿色能源运输', '离网解决方案', '灵活配送']
      }]
    },
    roi: {
      title: '看见回报，计算未来。',
      subtitle: '通过简单输入，即可量化节能收益与回本周期。',
      description: '我们的智能ROI计算器将根据您的运营情况，为您提供详细的投资回报分析，包括成本节省、投资回收期和环保效益。',
      features: ['智能推荐最适合的ECOSYN型号', '精准计算年节省成本和投资回收期', '对比购买与租赁两种合作方式', '量化CO₂减排贡献'],
      cta1: '📊 开始计算投资回报',
      cta2: '🤝 定制化财务分析'
    },
    brand: {
      title: 'HILLSEA：高能耗场景新能源科技先驱。',
      intro: {
        title: '品牌介绍',
        description: 'HILLSEA 专注于为公路、矿山、港口等高能耗场景提供整体新能源解决方案。以智能算法与电驱技术驱动能源转型，让每一吨能量都更高效、更清洁、更可持续。'
      },
      milestones: {
        title: '产品发展里程碑',
        subtitle: '从创新理念到行业标杆，ECOSYN 不断突破技术边界，重新定义新能源运输标准。',
        events: [{
          year: '2022',
          title: 'ECOSYN 1.0 美国市场发布',
          description: '成功在美国市场推出首款ECOSYN 1.0产品，开启新能源公路列车商业化进程。',
          icon: 'rocket'
        }, {
          year: '2023',
          title: 'ECOSYN 1.5 研发完成',
          description: '完成ECOSYN 1.5版本研发，在能量效率和系统集成方面取得重大突破。',
          icon: 'gear'
        }, {
          year: '2024',
          title: 'ECOSYN 1.0 完成10万公里测试',
          description: 'ECOSYN 1.0成功完成10万公里实地测试，验证了产品在极端工况下的可靠性和耐久性。',
          icon: 'check'
        }, {
          year: '2025',
          title: 'ECOSYN 2.0 研发完成',
          description: '全新ECOSYN 2.0研发完成，在智能化、能效和可靠性方面实现全面升级。',
          icon: 'star'
        }]
      },
      mission: {
        title: '品牌使命',
        description: '加速高能耗场景向可持续能源转型。我们的目标：帮助客户实现 ESG 合规与零排放目标。'
      },
      contact: {
        title: '联系我们获取定制方案',
        name: '姓名',
        company: '公司名称',
        email: '邮箱',
        message: '留言/需求说明',
        submit: '📧 提交咨询'
      }
    },
    footer: {
      company: 'HILLSEA 新能源科技有限公司',
      contact: '联系方式',
      quickLinks: '快速链接',
      followUs: '关注我们',
      links: ['产品介绍', '技术支持', '案例研究', '新闻动态'],
      copyright: '© 2025 HILLSEA All Rights Reserved'
    }
  },
  en: {
    navigation: {
      home: 'Home',
      value: 'Advantages',
      tech: 'Technology',
      apps: 'Applications',
      roi: 'ROI',
      brand: 'Contact Us'
    },
    hero: {
      title: '⚡ ECOSYN: Reshaping the Low-Carbon Future for Heavy-Duty Road Trains',
      subtitle: 'The world\'s first intelligent electric drive system tailored for road trains.\nPlug-and-play, instant 80% fuel cost reduction, zero modification required.',
      features: [{
        title: '≥80% Fuel Cost Reduction',
        desc: 'Smart energy management optimization'
      }, {
        title: '2400 kWh Ultra-Large Energy Storage',
        desc: 'Modular energy storage architecture'
      }, {
        title: '0% Fleet Modification Required',
        desc: 'Plug-and-play design'
      }],
      cta1: '🔢 Calculate ROI Now',
      cta2: '🎥 Schedule Technical Demo'
    },
    value: {
      title: 'ECOSYN Architecture: Intelligent Energy System Driving the Future',
      subtitle: 'Defining the next generation standard for new energy road trains with three core advantages: cost reduction, intelligent compatibility, and safety stability.',
      cards: [{
        title: 'Cost Reduction Engine',
        subtitle: 'The cost-effectiveness revolution starts at 80%.',
        description: 'ECOSYN\'s electric drive system handles most of the power load of the tractor, maximizing braking energy recovery and energy efficiency through AI-optimized energy management (VIS). In typical long-distance transport scenarios, fuel cost reduction can exceed 80%.',
        features: ['AI Energy Optimization', 'Braking Energy Recovery', '80% Cost Reduction']
      }, {
        title: 'Intelligent Compatibility Integration',
        subtitle: 'Plug-and-play, zero modification deployment.',
        description: 'The revolutionary VIS intelligent sensing system enables ECOSYN to achieve millisecond-level response coordination with any mainstream tractor. No tractor modification, no debugging, hook-up and go.',
        features: ['Millisecond Response', 'Zero Modification Design', 'Smart Sensors']
      }, {
        title: 'Enhanced Safety Stability',
        subtitle: 'Safer intelligent electric drive control.',
        description: 'ECOSYN integrates EASR anti-skid system and IESS vehicle stability control system, equipped with EDC electronic differential control algorithm for real-time yaw damping adjustment.',
        features: ['EASR Anti-skid System', 'IESS Stability Control', 'EDC Differential Control']
      }]
    },
    tech: {
      title: 'The Power of Technology: Four Systems Collaboratively Defining New Energy Standards',
      subtitle: 'From intelligent recognition to distributed drive, every design originates from understanding extreme operating conditions.',
      systems: [{
        title: 'VIS — Versatile Integration System',
        description: 'Enabling millisecond-level coordination between traditional diesel tractors and leading ECOSYN trailers.',
        features: ['Intelligent Sensor System', 'Driver Intention Recognition', 'Torque Control', 'Vehicle Status Recognition & Fault Handling']
      }, {
        title: 'EDC — Electronic Differential Controller',
        description: 'Real-time dynamic torque distribution, enabling parallel safety and energy efficiency.',
        features: ['EASR Anti-skid Control', 'IESS Vehicle Stability System', 'MEDS Multi-axle Differential Control', 'IRBS Intelligent Braking Energy Recovery']
      }, {
        title: 'DDS — Distributed Driveaxle System',
        description: 'Supporting dual/triple drive axle configurations, delivering powerful output for high-speed heavy-load and efficient climbing.',
        features: ['Dual/Triple Drive Axle Configuration', 'Peak Torque 80,000 Nm / 120,000 Nm', 'Rated Power 700kW / 1050 kW']
      }, {
        title: 'ESS — Energy Storage System',
        description: 'Drop-and-Hook quick replacement mode, charging time synchronized with loading/unloading time, ending range anxiety.',
        features: ['800 kWh / 1600 kWh / 2400 kWh', 'Modular Energy Storage Architecture', 'Compatible with Quick Swap']
      }],
      table: {
        title: 'Product Configuration Table',
        headers: ['Model', 'Drive Axle Config', 'Energy Storage', 'Peak Torque', 'Rated Power', 'Standard Systems'],
        rows: [{
          model: 'EcoSyn One',
          axles: 'Dual Drive Axle',
          battery: '800 kWh',
          torque: '80000Nm',
          power: '700kW',
          systems: 'VIS'
        }, {
          model: 'EcoSyn Pro',
          axles: 'Dual Drive Axle',
          battery: '1600kWh',
          torque: '80000Nm',
          power: '700kW',
          systems: 'VIS + EDC'
        }, {
          model: 'EcoSyn Max',
          axles: 'Triple Drive Axle',
          battery: '2400kWh',
          torque: '120000Nm',
          power: '1050kW',
          systems: 'VIS + EDC'
        }]
      }
    },
    apps: {
      title: 'Making Energy Transition Happen Every Kilometer.',
      scenarios: [{
        title: 'Road Train Scenario',
        description: 'In long-distance high-load transportation, ECOSYN uses distributed electric drive to handle main traction, effectively reducing diesel consumption by over 80%, significantly improving operational efficiency and profit margins.',
        highlights: ['80% Fuel Reduction', 'Improved Operational Efficiency', 'Increased Profit Margins']
      }, {
        title: 'Power Distribution Scenario',
        description: 'ECOSYN supports flexible transportation of green energy, delivering wind, solar, or surplus electricity from power plants to load edges. Providing efficient mobile power solutions in areas with insufficient or off-grid power.',
        highlights: ['Green Energy Transport', 'Off-grid Solutions', 'Flexible Distribution']
      }]
    },
    roi: {
      title: 'See Returns, Calculate the Future.',
      subtitle: 'Quantify energy savings and payback period through simple inputs.',
      description: 'Our intelligent ROI calculator provides detailed investment return analysis based on your operational conditions, including cost savings, payback period, and environmental benefits.',
      features: ['Smart recommendation of the most suitable ECOSYN model', 'Precise calculation of annual savings and payback period', 'Comparison of purchase and leasing options', 'Quantification of CO₂ reduction contribution'],
      cta1: '📊 Start ROI Calculation',
      cta2: '🤝 Customized Financial Analysis'
    },
    brand: {
      title: 'HILLSEA: Pioneer in New Energy Technology for High-Energy Consumption Scenarios.',
      intro: {
        title: 'Brand Introduction',
        description: 'HILLSEA specializes in providing integrated new energy solutions for high-energy consumption scenarios such as highways, mines, and ports. Driving energy transition with intelligent algorithms and electric drive technology, making every ton of energy more efficient, cleaner, and more sustainable.'
      },
      milestones: {
        title: 'Product Development Milestones',
        subtitle: 'From innovative concept to industry benchmark, ECOSYN continuously breaks technological boundaries, redefining new energy transportation standards.',
        events: [{
          year: '2022',
          title: 'ECOSYN 1.0 Launched in U.S. Market',
          description: 'Successfully launched the first ECOSYN 1.0 product in the U.S. market, initiating the commercialization process of new energy road trains.',
          icon: 'rocket'
        }, {
          year: '2023',
          title: 'ECOSYN 1.5 Development Completed',
          description: 'Completed development of ECOSYN 1.5 version, achieving major breakthroughs in energy efficiency and system integration.',
          icon: 'gear'
        }, {
          year: '2024',
          title: 'ECOSYN 1.0 Completed 100,000 km Testing',
          description: 'ECOSYN 1.0 successfully completed 100,000 km of field testing, verifying product reliability and durability under extreme operating conditions.',
          icon: 'check'
        }, {
          year: '2025',
          title: 'ECOSYN 2.0 Development Completed',
          description: 'All-new ECOSYN 2.0 development completed, achieving comprehensive upgrades in intelligence, energy efficiency, and reliability.',
          icon: 'star'
        }]
      },
      mission: {
        title: 'Brand Mission',
        description: 'Accelerating the transition to sustainable energy in high-energy consumption scenarios. Our goal: helping clients achieve ESG compliance and zero-emission targets.'
      },
      contact: {
        title: 'Contact Us for Custom Solutions',
        name: 'Name',
        company: 'Company Name',
        email: 'Email',
        message: 'Message/Requirements',
        submit: '📧 Submit Consultation'
      }
    },
    footer: {
      company: 'HILLSEA New Energy Technology Co., Ltd.',
      contact: 'Contact Information',
      quickLinks: 'Quick Links',
      followUs: 'Follow Us',
      links: ['Products', 'Technical Support', 'Case Studies', 'News'],
      copyright: '© 2025 HILLSEA All Rights Reserved'
    }
  }
};
export default function HomePage(props) {
  const {
    $w
  } = props;
  const [language, setLanguage] = useState('zh');
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [showContactForm, setShowContactForm] = useState(false);
  const [showROICalculator, setShowROICalculator] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const t = translations[language];

  // Refs for sections
  const heroRef = useRef(null);
  const valueRef = useRef(null);
  const techRef = useRef(null);
  const appsRef = useRef(null);
  const milestonesRef = useRef(null);
  const roiRef = useRef(null);
  const brandRef = useRef(null);

  // 可用页面部分
  const availableSections = ['hero', 'value', 'tech', 'apps', 'milestones', 'roi', 'brand'];

  // 滚动视差效果
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      const scrollPosition = currentScrollY + 100;
      if (heroRef.current && scrollPosition >= heroRef.current.offsetTop && scrollPosition < valueRef.current.offsetTop) {
        setActiveSection('hero');
      } else if (valueRef.current && scrollPosition >= valueRef.current.offsetTop && scrollPosition < techRef.current.offsetTop) {
        setActiveSection('value');
      } else if (techRef.current && scrollPosition >= techRef.current.offsetTop && scrollPosition < appsRef.current.offsetTop) {
        setActiveSection('tech');
      } else if (appsRef.current && scrollPosition >= appsRef.current.offsetTop && scrollPosition < milestonesRef.current.offsetTop) {
        setActiveSection('apps');
      } else if (milestonesRef.current && scrollPosition >= milestonesRef.current.offsetTop && scrollPosition < roiRef.current.offsetTop) {
        setActiveSection('milestones');
      } else if (roiRef.current && scrollPosition >= roiRef.current.offsetTop && scrollPosition < brandRef.current.offsetTop) {
        setActiveSection('roi');
      } else if (brandRef.current) {
        setActiveSection('brand');
      }
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = ref => {
    ref.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const handleContactSubmit = contactData => {
    alert(language === 'zh' ? '感谢您的联系，我们的顾问将在 24 小时内回复。' : 'Thank you for contacting us. Our consultant will reply within 24 hours.');
  };
  const handleBrandContactSubmit = e => {
    e.preventDefault();
    alert(language === 'zh' ? '感谢您的联系，我们的顾问将在 24 小时内回复。' : 'Thank you for contacting us. Our consultant will reply within 24 hours.');
    setFormData({
      name: '',
      company: '',
      email: '',
      message: ''
    });
  };

  // 处理悬浮导航点击
  const handleFloatingNavClick = sectionId => {
    const refs = {
      hero: heroRef,
      value: valueRef,
      tech: techRef,
      apps: appsRef,
      milestones: milestonesRef,
      roi: roiRef,
      brand: brandRef
    };
    scrollToSection(refs[sectionId]);
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0D7E9C] to-[#01847E] text-white overflow-x-hidden">
      {/* 增强粒子动画背景 */}
      <ParticleBackground />

      {/* 增强导航栏 */}
      <Navigation language={language} setLanguage={setLanguage} activeSection={activeSection} scrollToSection={scrollToSection} heroRef={heroRef} valueRef={valueRef} techRef={techRef} appsRef={appsRef} roiRef={roiRef} brandRef={brandRef} scrollY={scrollY} t={t} />

      {/* Enhanced Hero Section */}
      <section ref={heroRef}>
        <HeroSection t={t} scrollY={scrollY} setShowROICalculator={setShowROICalculator} setShowContactForm={setShowContactForm} />
      </section>

      {/* Enhanced Value Section */}
      <section ref={valueRef} className="py-16 sm:py-20 lg:py-24 px-4 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-white">
              {t.value.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
              {t.value.subtitle}
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {t.value.cards.map((item, index) => <AnimatedSection key={index} delay={index * 150}>
                <HoverCard className="group" childrenClassName="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${index === 0 ? 'bg-gradient-to-r from-[#01847E] to-[#0D7E9C]' : 'bg-gradient-to-r from-[#0D7E9C] to-[#01847E]'}`}>
                    {index === 0 && <DollarSign className="h-8 w-8 text-white" />}
                    {index === 1 && <Plug className="h-8 w-8 text-white" />}
                    {index === 2 && <Shield className="h-8 w-8 text-white" />}
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300 ${index === 0 ? 'text-[#01847E] group-hover:text-[#0D7E9C]' : 'text-[#0D7E9C] group-hover:text-[#01847E]'}`}>{item.title}</h3>
                  <h4 className="text-lg font-semibold text-white mb-4">{item.subtitle}</h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => <li key={idx} className="flex items-center text-gray-200 transition-all duration-300 group-hover:translate-x-1">
                        <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>)}
                  </ul>
                </HoverCard>
              </AnimatedSection>)}
          </div>
        </div>
      </section>

      {/* Enhanced Technology Section */}
      <section ref={techRef} className="py-16 sm:py-20 lg:py-24 px-4 bg-black/60">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-white">
              {t.tech.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
              {t.tech.subtitle}
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {t.tech.systems.slice(0, 2).map((item, index) => <AnimatedSection key={index} delay={index * 200}>
                <HoverCard childrenClassName="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#0D7E9C] to-[#01847E] rounded-xl flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      {index === 0 ? <Brain className="h-6 w-6 text-white" /> : <Cog className="h-6 w-6 text-white" />}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0D7E9C] mb-3 transition-colors duration-300 group-hover:text-[#01847E]">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => <li key={idx} className="flex items-start text-gray-200 transition-all duration-300 group-hover:translate-x-1">
                        <div className="w-2 h-2 bg-[#0D7E9C] rounded-full mt-2 mr-3 flex-shrink-0 transition-colors duration-300 group-hover:bg-[#01847E]" />
                        {feature}
                      </li>)}
                  </ul>
                </HoverCard>
              </AnimatedSection>)}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {t.tech.systems.slice(2).map((item, index) => <AnimatedSection key={index} delay={index * 200}>
                <HoverCard childrenClassName="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#0D7E9C] to-[#01847E] rounded-xl flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      {index === 0 ? <Zap className="h-6 w-6 text-white" /> : <Battery className="h-6 w-6 text-white" />}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0D7E9C] mb-3 transition-colors duration-300 group-hover:text-[#01847E]">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => <li key={idx} className="flex items-start text-gray-200 transition-all duration-300 group-hover:translate-x-1">
                        <div className="w-2 h-2 bg-[#0D7E9C] rounded-full mt-2 mr-3 flex-shrink-0 transition-colors duration-300 group-hover:bg-[#01847E]" />
                        {feature}
                      </li>)}
                  </ul>
                </HoverCard>
              </AnimatedSection>)}
          </div>
          
          {/* Enhanced Product Configuration Table */}
          <AnimatedSection delay={300}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 overflow-hidden">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0D7E9C] mb-8 text-center">{t.tech.table.title}</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/20">
                      {t.tech.table.headers.map((header, idx) => <th key={idx} className="pb-4 text-sm sm:text-base font-semibold text-[#0D7E9C]">
                          {header}
                        </th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {t.tech.table.rows.map((product, index) => <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-all duration-300 group">
                        <td className="py-4 font-semibold text-[#01847E] transition-colors duration-300 group-hover:text-[#0D7E9C]">{product.model}</td>
                        <td className="py-4 text-gray-200">{product.axles}</td>
                        <td className="py-4 text-gray-200">{product.battery}</td>
                        <td className="py-4 text-gray-200">{product.torque}</td>
                        <td className="py-4 text-gray-200">{product.power}</td>
                        <td className="py-4 text-gray-200">{product.systems}</td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced Applications Section */}
      <section ref={appsRef} className="py-16 sm:py-20 lg:py-24 px-4 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-white">
              {t.apps.title}
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {t.apps.scenarios.map((item, index) => <AnimatedSection key={index} delay={index * 200}>
                <HoverCard childrenClassName="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#01847E] to-[#0D7E9C] rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    {index === 0 ? <Truck className="h-8 w-8 text-white" /> : <Wind className="h-8 w-8 text-white" />}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#01847E] mb-4 transition-colors duration-300 group-hover:text-[#0D7E9C]">{item.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight, idx) => <span key={idx} className="px-3 py-1 bg-[#01847E]/20 text-[#01847E] rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#01847E]/30 hover:scale-105">
                        {highlight}
                      </span>)}
                  </div>
                </HoverCard>
              </AnimatedSection>)}
          </div>
        </div>
      </section>

      {/* Product Milestones Section */}
      <section ref={milestonesRef} className="py-16 sm:py-20 lg:py-24 px-4 bg-black/60">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-white">
              {t.brand.milestones.title}
            </h3>
            <p className="text-lg text-gray-200 text-center mb-12 max-w-3xl mx-auto">
              {t.brand.milestones.subtitle}
            </p>
          </AnimatedSection>
          <MilestoneTimeline milestones={t.brand.milestones.events} language={language} />
        </div>
      </section>

      {/* Enhanced ROI Section */}
      <section ref={roiRef} className="py-16 sm:py-20 lg:py-24 px-4 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-white">
              {t.roi.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
              {t.roi.subtitle}
            </p>
          </AnimatedSection>
          
          {/* ROI Calculator Features */}
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0D7E9C] to-[#01847E] rounded-2xl flex items-center justify-center mb-6">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0D7E9C] mb-4">{t.roi.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {t.roi.description}
                </p>
                <ul className="space-y-3">
                  {t.roi.features.map((feature, idx) => <li key={idx} className="flex items-start text-gray-200">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>)}
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-[#0D7E9C]/10 to-[#01847E]/10 border border-[#0D7E9C]/30 rounded-2xl p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#0D7E9C] mb-6">
                  {language === 'zh' ? '准备好计算您的投资回报了吗？' : 'Ready to Calculate Your ROI?'}
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  {language === 'zh' ? '只需几分钟，即可获得详细的投资回报分析报告，帮助您做出明智的商业决策。' : 'Get a detailed investment return analysis in just a few minutes to help you make informed business decisions.'}
                </p>
                <div className="space-y-4">
                  <Button onClick={() => setShowROICalculator(true)} className="w-full bg-[#0D7E9C] hover:bg-[#0D7E9C]/90 text-white px-6 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl group">
                    <span className="flex items-center justify-center">
                      <Calculator className="mr-3 h-5 w-5" />
                      {t.roi.cta1}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Button>
                  <Button onClick={() => setShowContactForm(true)} variant="outline" className="w-full border-2 border-[#0D7E9C] text-[#0D7E9C] hover:bg-[#0D7E9C]/10 px-6 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                    {t.roi.cta2}
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced Brand Section */}
      <section ref={brandRef} className="py-16 sm:py-20 lg:py-24 px-4 bg-black/60">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-white">
              {t.brand.title}
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <AnimatedSection delay={200}>
              <div>
                <h3 className="text-2xl font-bold text-[#0D7E9C] mb-6 transition-colors duration-300 hover:text-[#01847E]">{t.brand.intro.title}</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  {t.brand.intro.description}
                </p>
                <h4 className="text-xl font-semibold text-[#01847E] mb-4 transition-colors duration-300 hover:text-[#0D7E9C]">{t.brand.mission.title}</h4>
                <p className="text-gray-300 leading-relaxed">
                  {t.brand.mission.description}
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <div>
                <h3 className="text-2xl font-bold text-[#0D7E9C] mb-6">{t.brand.contact.title}</h3>
                <form onSubmit={handleBrandContactSubmit} className="space-y-4">
                  <Input type="text" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#0D7E9C] transition-all duration-300 focus:bg-white/15" placeholder={t.brand.contact.name} required />
                  <Input type="text" value={formData.company} onChange={e => setFormData({
                  ...formData,
                  company: e.target.value
                })} className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#0D7E9C] transition-all duration-300 focus:bg-white/15" placeholder={t.brand.contact.company} required />
                  <Input type="email" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#0D7E9C] transition-all duration-300 focus:bg-white/15" placeholder={t.brand.contact.email} required />
                  <textarea value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} className="w-full bg-white/10 border-white/20 text-white placeholder-gray-400 rounded-lg p-3 h-24 resize-none focus:border-[#0D7E9C] transition-all duration-300 focus:bg-white/15" placeholder={t.brand.contact.message} required />
                  <Button type="submit" className="w-full bg-[#0D7E9C] hover:bg-[#0D7E9C]/90 text-white py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl group">
                    <span className="flex items-center justify-center">
                      {t.brand.contact.submit}
                      <Mail className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                    </span>
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <Footer t={t} />

      {/* 悬浮导航 */}
      <FloatingNavigation sections={availableSections} activeSection={activeSection} onSectionClick={handleFloatingNavClick} language={language} />

      {/* ROI Calculator Modal */}
      <ROICalculator isOpen={showROICalculator} onClose={() => setShowROICalculator(false)} language={language} />

      {/* Contact Form Modal */}
      <ContactForm isOpen={showContactForm} onClose={() => setShowContactForm(false)} onSubmit={handleContactSubmit} language={language} />
    </div>;
}
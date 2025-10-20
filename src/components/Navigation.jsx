// @ts-ignore;
import React, { useState, useEffect, useRef } from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { Menu, X, ChevronDown, Languages } from 'lucide-react';

const Navigation = ({
  t,
  isDarkMode,
  setIsDarkMode,
  isScrolled,
  activeSection,
  scrollToSection,
  currentPage = 'ecosyn'
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isLogoLight, setIsLogoLight] = useState(false);
  const [currentLang, setCurrentLang] = useState('zh');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const solutionsRef = useRef(null);
  const langRef = useRef(null);

  // 检测用户IP地址并设置默认语言
  useEffect(() => {
    const detectUserLanguage = async () => {
      try {
        // 检测用户地理位置
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        // 如果是中国IP则默认中文，其他默认英文
        const isChina = data.country === 'CN';
        const defaultLang = isChina ? 'zh' : 'en';

        // 从localStorage获取用户之前设置的语言，如果没有则使用默认语言
        const savedLang = localStorage.getItem('ecosyn_language') || defaultLang;
        setCurrentLang(savedLang);

        // 触发全局语言切换事件
        window.dispatchEvent(new CustomEvent('languageChange', {
          detail: {
            language: savedLang
          }
        }));
      } catch (error) {
        // 如果检测失败，默认使用英文
        const savedLang = localStorage.getItem('ecosyn_language') || 'en';
        setCurrentLang(savedLang);
        window.dispatchEvent(new CustomEvent('languageChange', {
          detail: {
            language: savedLang
          }
        }));
      }
    };
    detectUserLanguage();
  }, []);

  // 检测背景颜色并切换LOGO
  useEffect(() => {
    const checkBackgroundBrightness = () => {
      // 检查当前滚动位置和活动区域
      const heroSection = document.getElementById('hero');
      const featuresSection = document.getElementById('features');
      const techSection = document.getElementById('tech');
      const solutionsSection = document.getElementById('solutions');
      const milestonesSection = document.getElementById('milestones');
      const contactSection = document.getElementById('contact');
      let currentSection = null;
      const scrollPosition = window.scrollY + 100;
      if (heroSection && scrollPosition < heroSection.offsetTop + heroSection.offsetHeight) {
        currentSection = heroSection;
      } else if (featuresSection && scrollPosition >= featuresSection.offsetTop && scrollPosition < featuresSection.offsetTop + featuresSection.offsetHeight) {
        currentSection = featuresSection;
      } else if (techSection && scrollPosition >= techSection.offsetTop && scrollPosition < techSection.offsetTop + techSection.offsetHeight) {
        currentSection = techSection;
      } else if (solutionsSection && scrollPosition >= solutionsSection.offsetTop && scrollPosition < solutionsSection.offsetTop + solutionsSection.offsetHeight) {
        currentSection = solutionsSection;
      } else if (milestonesSection && scrollPosition >= milestonesSection.offsetTop && scrollPosition < milestonesSection.offsetTop + milestonesSection.offsetHeight) {
        currentSection = milestonesSection;
      } else if (contactSection && scrollPosition >= contactSection.offsetTop) {
        currentSection = contactSection;
      }
      if (currentSection) {
        // 检查当前区域的背景颜色
        const computedStyle = window.getComputedStyle(currentSection);
        const backgroundColor = computedStyle.backgroundColor;

        // 判断背景颜色是深色还是浅色
        const isDarkBackground = isDarkColor(backgroundColor);
        setIsLogoLight(!isDarkBackground);
      }
    };
    const isDarkColor = color => {
      // 将RGB颜色转换为亮度值
      const rgb = color.match(/\d+/g);
      if (rgb && rgb.length >= 3) {
        const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
        return brightness < 128; // 亮度小于128认为是深色背景
      }
      return false;
    };
    checkBackgroundBrightness();
    window.addEventListener('scroll', checkBackgroundBrightness);
    window.addEventListener('resize', checkBackgroundBrightness);
    return () => {
      window.removeEventListener('scroll', checkBackgroundBrightness);
      window.removeEventListener('resize', checkBackgroundBrightness);
    };
  }, [activeSection]);

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = event => {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target)) {
        setIsSolutionsOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 全局语言切换功能
  const handleLanguageChange = lang => {
    setCurrentLang(lang);
    setIsLangDropdownOpen(false);

    // 保存到localStorage
    localStorage.setItem('ecosyn_language', lang);

    // 触发全局语言切换事件
    window.dispatchEvent(new CustomEvent('languageChange', {
      detail: {
        language: lang
      }
    }));
    console.log('Language changed to:', lang);
  };

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

  // 更新导航项数据结构
  const getNavItems = () => {
    return [{
      name: 'ECOSYN',
      hasDropdown: false,
      page: 'ecosyn'
    }, {
      name: currentLang === 'zh' ? '解决方案' : 'Solutions',
      hasDropdown: true,
      dropdownItems: currentLang === 'zh' ? [{
        label: '物流运输',
        href: '#solutions'
      }, {
        label: '矿山作业',
        href: '#solutions'
      }, {
        label: '港口码头',
        href: '#solutions'
      }] : [{
        label: 'Logistics Transport',
        href: '#solutions'
      }, {
        label: 'Mining Operations',
        href: '#solutions'
      }, {
        label: 'Port Terminals',
        href: '#solutions'
      }],
      isOpen: isSolutionsOpen,
      setIsOpen: setIsSolutionsOpen,
      ref: solutionsRef
    }, {
      name: currentLang === 'zh' ? '服务' : 'Services',
      hasDropdown: false,
      page: 'services'
    }, {
      name: currentLang === 'zh' ? '关于我们' : 'About Us',
      hasDropdown: false,
      page: 'about'
    }];
  };
  const navItems = getNavItems();
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      {/* 顶部通知栏 */}
      <div className="bg-gradient-to-r from-[#0D7E9C] to-[#01847E] text-white py-2 px-4 text-center text-sm">
        <span className="animate-pulse">🎯 {currentLang === 'zh' ? '开启绿色运输新时代' : 'Opening a New Era of Green Transportation'}</span>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - 左对齐，修正LOGO显示逻辑 */}
          <div className="flex items-center flex-shrink-0">
            <img src={isLogoLight ? "https://ecosyn-1259516302.cos.ap-singapore.myqcloud.com/Hillsea/LOGO/HILLSEAAAw.png?q-sign-algorithm=sha1&q-ak=AKIDp2UwjoezujR-4ORz63H6M3Z_FzNlbWqzRX2t0rL591mV4TtwN2NkIVpV40atCgQ-&q-sign-time=1760922231;1760925831&q-key-time=1760922231;1760925831&q-header-list=host&q-url-param-list=ci-process&q-signature=1f1fe0205e84693a2bb81f10a4f879f285af6c76&x-cos-security-token=JPXNoaYDJYj28gNcQ4kkS5aQHY1Y7UXadce6f50d421a9db930a644b7fb8756b4etc1BOYkLGiesCSZnVQ7h-HrbY-dO-T3jGp4hrPIVKCBCoOmRAXdwxUwXhkS2YLz2ybudkG3LbsOy1q6H4KIV8enldhvNcLKv6xiQSuVBbrLKmBmO6P868DQ-1ZRC4eKgQsozpDjw8PJ_dylcwQB1YHshjJN9a0UzrPUxLFaUgWKpkucPMZUlKoUa0hp6TVDS3ISS3LvvK28fRgVgwr9RuxoN22qIv01mo71uo-hKbYnAhsn2ZaezMi_itqoqpCwJUaYIxycKkcVhbqsf42n0Q&ci-process=originImage" : "https://ecosyn-1259516302.cos.ap-singapore.myqcloud.com/Hillsea/LOGO/HILLSEAAA.png?q-sign-algorithm=sha1&q-ak=AKIDgVJhZQmCS7iucVopCr1bycIxPtKe3Phf9-etCl9EUWNHE3UPlV8jX3Jb9Vmwi-R8&q-sign-time=1760922312;1760925912&q-key-time=1760922312;1760925912&q-header-list=host&q-url-param-list=ci-process&q-signature=d829d9a1df2fecd6e7416516682dc0bb41f4026d&x-cos-security-token=JPXNoaYDJYj28gNcQ4kkS5aQHY1Y7UXa62f214d66095d5489a97ce92f6b6d00fetc1BOYkLGiesCSZnVQ7h808gq5QrBtz4rSTWzMAdJUumIGrYEZTHhgt1slHQbr-vfQ1fSJAhjUNgM33xraDt7q7ScxoXHilIyE0aZ0bMyZfH6X6gqiea-eIh-K6tZjj-ko5ExIxZCY8MYvI1CWPGsuhZ9okAX_Hx9aCwGuw4vvnAfWjbMaaSwdZ-F4ZaQcPizqDioWrvFJusfSEVtca_PSPINYmdcL6ddsqyvtM0ByEILZehO7hbvEJnBtGfz07Jfei71y5IcJR5Z4vUm6f-g&ci-process=originImage"} alt="HILLSEA Logo" className="h-8 w-auto transition-all duration-300" />
          </div>

          {/* Desktop Navigation - 右对齐 */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            {navItems.map((item, index) => <div key={index} className="relative" ref={item.ref}>
                {item.hasDropdown ? <>
                    <button onClick={() => item.setIsOpen(!item.isOpen)} className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-[#0D7E9C] ${isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white'}`}>
                      <span>{item.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${item.isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {item.isOpen && <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => <a key={dropdownIndex} href={dropdownItem.href} className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-[#0D7E9C] transition-colors duration-200">
                            {dropdownItem.label}
                          </a>)}
                      </div>}
                  </> : <a href={item.page === 'about' ? '#about' : '#'} onClick={e => {
              if (item.page === 'about') {
                e.preventDefault();
                scrollToSection('about');
              } else if (item.page && item.page !== currentPage) {
                e.preventDefault();
                // 这里可以添加页面跳转逻辑
                console.log('Navigate to:', item.page);
              }
            }} className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-[#0D7E9C] ${item.page === currentPage ? 'text-[#0D7E9C] border-b-2 border-[#0D7E9C]' : ''} ${isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white'}`}>
                    {item.name}
                  </a>}
              </div>)}

            {/* Language Selector - 使用更简洁的图标 */}
            <div className="relative" ref={langRef}>
              <button onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)} className={`flex items-center space-x-1 text-sm border rounded-md px-3 py-1.5 transition-colors duration-200 ${isScrolled ? 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800' : 'border-white/30 text-white hover:bg-white/10'}`}>
                <Languages className="h-4 w-4" />
                <span>{currentLang === 'zh' ? '中文' : 'EN'}</span>
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isLangDropdownOpen && <div className="absolute top-full right-0 mt-1 w-24 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
                  <button onClick={() => handleLanguageChange('zh')} className={`block w-full text-left px-3 py-2 text-sm ${currentLang === 'zh' ? 'bg-[#0D7E9C] text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'} transition-colors duration-200`}>
                    中文
                  </button>
                  <button onClick={() => handleLanguageChange('en')} className={`block w-full text-left px-3 py-2 text-sm ${currentLang === 'en' ? 'bg-[#0D7E9C] text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'} transition-colors duration-200`}>
                    English
                  </button>
                </div>}
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`md:hidden p-2 rounded-md transition-colors duration-200 ${isScrolled ? 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white hover:bg-white/10'}`}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => <div key={index}>
                  {item.hasDropdown ? <>
                      <button onClick={() => item.setIsOpen(!item.isOpen)} className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">
                        <span>{item.name}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${item.isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {item.isOpen && <div className="pl-6 pr-2 py-2 space-y-1">
                          {item.dropdownItems.map((dropdownItem, dropdownIndex) => <a key={dropdownIndex} href={dropdownItem.href} className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#0D7E9C] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">
                              {dropdownItem.label}
                            </a>)}
                        </div>}
                    </> : <a href={item.page === 'about' ? '#about' : '#'} onClick={e => {
              if (item.page === 'about') {
                e.preventDefault();
                scrollToSection('about');
              } else if (item.page && item.page !== currentPage) {
                e.preventDefault();
                console.log('Navigate to:', item.page);
              }
              setIsMobileMenuOpen(false);
            }} className={`block px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-[#0D7E9C] ${item.page === currentPage ? 'text-[#0D7E9C] border-l-4 border-[#0D7E9C]' : 'text-gray-700 dark:text-gray-200'} hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md`}>
                      {item.name}
                    </a>}
                </div>)}
              
              {/* 移动端语言选择器 */}
              <div className="px-3 py-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Languages className="h-4 w-4" />
                  <span>{currentLang === 'zh' ? '语言' : 'Language'}:</span>
                </div>
                <div className="flex space-x-2 mt-2">
                  <button onClick={() => handleLanguageChange('zh')} className={`px-3 py-1 text-sm rounded-md transition-colors duration-200 ${currentLang === 'zh' ? 'bg-[#0D7E9C] text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}>
                    中文
                  </button>
                  <button onClick={() => handleLanguageChange('en')} className={`px-3 py-1 text-sm rounded-md transition-colors duration-200 ${currentLang === 'en' ? 'bg-[#0D7E9C] text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}>
                    English
                  </button>
                </div>
              </div>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Navigation;
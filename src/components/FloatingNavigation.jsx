// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { ChevronLeft, ChevronRight, Home, Zap, Shield, Truck, Calculator, Award, Building } from 'lucide-react';

const FloatingNavigation = ({
  sections,
  activeSection,
  onSectionClick,
  language = 'zh'
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // 图标映射
  const getIcon = sectionId => {
    const iconMap = {
      hero: Home,
      value: Zap,
      tech: Shield,
      apps: Truck,
      milestones: Award,
      roi: Calculator,
      brand: Building
    };
    return iconMap[sectionId] || Home;
  };

  // 导航标题映射
  const getSectionTitle = sectionId => {
    const titles = {
      zh: {
        hero: '首页',
        value: '核心优势',
        tech: '技术参数',
        apps: '应用场景',
        milestones: '发展历程',
        roi: '投资回报',
        brand: '联系我们'
      },
      en: {
        hero: 'Home',
        value: 'Advantages',
        tech: 'Technology',
        apps: 'Applications',
        milestones: 'Milestones',
        roi: 'ROI',
        brand: 'Contact Us'
      }
    };
    return titles[language]?.[sectionId] || sectionId;
  };

  // 处理折叠状态
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // 鼠标进入/离开处理
  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsCollapsed(false);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsCollapsed(true);
  };
  return <div className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-500 ease-in-out ${isCollapsed ? 'translate-x-0' : 'translate-x-0'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* 导航主体 */}
      <div className={`relative transition-all duration-500 ease-in-out ${isCollapsed ? 'w-12' : 'w-48'} ${isHovered && !isCollapsed ? 'w-52' : ''}`}>
        {/* 背景面板 - 增加透明度 */}
        <div className={`absolute inset-0 bg-black/40 backdrop-blur-md border-l border-white/10 rounded-l-2xl transition-all duration-500 ${isHovered && !isCollapsed ? 'bg-black/50 border-white/20' : ''}`} />
        
        {/* 导航内容 */}
        <div className="relative h-full py-4">
          {/* 折叠按钮 */}
          <button onClick={toggleCollapse} className={`absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-12 bg-black/40 backdrop-blur-md border border-white/10 rounded-l-lg flex items-center justify-center transition-all duration-300 hover:bg-black/60 hover:border-white/20 z-10 ${isCollapsed ? 'rotate-180' : ''}`}>
            <ChevronLeft className="w-4 h-4 text-cyan-400" />
          </button>
          
          {/* 导航项 */}
          <div className="space-y-2 px-2">
            {sections.map((section, index) => {
            const Icon = getIcon(section);
            const isActive = activeSection === section;
            return <button key={section} onClick={() => onSectionClick(section)} className={`w-full group relative transition-all duration-300 ${isCollapsed ? 'justify-center' : 'justify-start'} flex items-center p-2 rounded-lg hover:bg-white/10 ${isActive ? 'bg-cyan-400/20 text-cyan-400' : 'text-gray-400 hover:text-cyan-400'}`} style={{
              animationDelay: `${index * 50}ms`
            }}>
                {/* 图标 */}
                <Icon className={`w-5 h-5 transition-all duration-300 ${isActive ? 'text-cyan-400 scale-110' : 'group-hover:scale-110'}`} />
                
                {/* 标题 - 折叠时隐藏 */}
                {!isCollapsed && <span className={`ml-3 text-sm font-medium transition-all duration-300 whitespace-nowrap ${isActive ? 'text-cyan-400' : 'group-hover:text-cyan-400'}`}>
                    {getSectionTitle(section)}
                  </span>}
                
                {/* 激活指示器 */}
                {isActive && <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-cyan-400 rounded-r-full" />}
                
                {/* 悬浮提示 - 折叠时显示 */}
                {isCollapsed && <div className={`absolute left-full ml-2 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${isActive ? 'bg-cyan-400/80' : ''}`}>
                    {getSectionTitle(section)}
                  </div>}
              </button>;
          })}
          </div>
        </div>
      </div>
    </div>;
};
export default FloatingNavigation;
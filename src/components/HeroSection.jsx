// @ts-ignore;
import React, { useState, useEffect, useRef } from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { Play, ArrowRight, Battery, DollarSign, Shield } from 'lucide-react';

const HeroSection = ({
  t,
  scrollY,
  setShowROICalculator,
  setShowContactForm
}) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const heroRef = useRef(null);

  // 鼠标移动效果
  // 鼠标移动效果
  useEffect(() => {
    const handleMouseMove = e => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 视频背景层 */}
      <div className="absolute inset-0">
        {/* 视频背景 - 调整为覆盖整个视口 */}
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline style={{
        objectFit: 'cover',
        objectPosition: 'center'
      }}>
          <source src="https://ecosyn-1259516302.cos.ap-singapore.myqcloud.com/Ecosyn/Product/20250808-150908.mp4?q-sign-algorithm=sha1&q-ak=AKID5z_zNG4Cf58sDBi80J3Drv3VdWOqF5FGTOYgvCX50zS95b44f8eDWz6RwQu2YheT&q-sign-time=1760885578;1760889178&q-key-time=1760885578;1760889178&q-header-list=host&q-url-param-list=&q-signature=9e4ccea249c8da507e9ab11d3059dff5f79ed55d&x-cos-security-token=K2U9y0AkDHTnoevI0GfT2YrM48AuMrca4a649e0148ca521c2dc1c1befad745c92plASiX_0FIOdtnSeU3LhZNzFJQ1FU3VkWxLUfw2xpukqZ5ANs7wjsCqb1eXyV6CgyVaaK1gwWQI3eRhKMh87KpHUAAJyKpUzZkQmX_TIu6Al7PeJghuDZVNgbmG0qiTOBIDYnYNW-KxaOQzihW2vUuUrpdp4XX4iXQKTGs3wW3Z0hjCgfuG1iaIn9cqCV89gAY4c-9MtUEXrPCijbeXO0qzB8RLqZnQWzABZJCwhrmlXVBIl1h2qxsLk-RJ5PzChhX0r9ASOT1Zp_3DxHIHbw&" type="video/mp4" />
        </video>
        
        {/* 深色遮罩层 */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* 渐变叠加层 */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-[#0D7E9C]/40 to-[#01847E]/40" />
        
        {/* 动态光效 */}
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 rounded-full blur-3xl" style={{
          left: `${20 + mousePosition.x * 10}%`,
          top: `${30 + mousePosition.y * 10}%`,
          transition: 'all 0.3s ease-out'
        }} />

          <div className="absolute w-80 h-80 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl" style={{
          right: `${15 - mousePosition.x * 5}%`,
          bottom: `${40 - mousePosition.y * 5}%`,
          transition: 'all 0.3s ease-out'
        }} />

        </div>
      </div>

      {/* 主要内容 - 调整布局避免遮挡视频中心 */}
      <div className="relative z-10 h-full flex flex-col justify-between py-12">
        {/* 顶部标题区域 - 添加上边距下移100px */}
        <div className="text-center px-4 sm:px-6 lg:px-8 mt-[100px]">
          <div className="max-w-4xl mx-auto space-y-6" style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: 1 - scrollY * 0.001
        }}>
            {/* 主标题 - 删除⚡图标，改为白色 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white block">
                ECOSYN：为百吨级公路列车重塑低碳未来
              </span>
            </h1>

            {/* 副标题 */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              全球首个为公路列车量身定制的智能电驱系统。<br />
              即插即用，立减80%燃料成本，零改装即可上路。
            </p>
          </div>
        </div>

        {/* 中间留空区域 - 让视频中的车辆显示 */}
        <div className="flex-1" />

        {/* 底部特性卡片和按钮区域 */}
        <div className="px-4 sm:px-6 lg:px-8 space-y-8">
          {/* 核心特性 - 调整为横向布局，减少垂直空间占用 */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 gap-4">
              {t.hero.features.map((feature, index) => <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto transition-all duration-300 group-hover:scale-110 ${index === 0 ? 'bg-gradient-to-r from-[#01847E] to-[#0D7E9C]' : index === 1 ? 'bg-gradient-to-r from-[#0D7E9C] to-[#01847E]' : 'bg-gradient-to-r from-[#01847E] to-[#0D7E9C]'}`}>
                    {index === 0 && <DollarSign className="h-5 w-5 text-white" />}
                    {index === 1 && <Battery className="h-5 w-5 text-white" />}
                    {index === 2 && <Shield className="h-5 w-5 text-white" />}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1 text-center">{feature.title}</h3>
                  <p className="text-xs text-gray-300 text-center">{feature.desc}</p>
                </div>)}
            </div>
          </div>

          {/* CTA 按钮组 - 调整大小和间距 */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button onClick={() => setShowROICalculator(true)} className="bg-[#0D7E9C] hover:bg-[#0D7E9C]/90 text-white px-6 py-3 text-base font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl group">
              <span className="flex items-center">
                {t.hero.cta1}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
            <Button onClick={() => setShowContactForm(true)} variant="outline" className="border-2 border-[#0D7E9C] text-[#0D7E9C] hover:bg-[#0D7E9C]/10 px-6 py-3 text-base font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              <span className="flex items-center">
                <Play className="mr-2 h-4 w-4" />
                {t.hero.cta2}
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* 装饰性元素 */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-white/10 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-white/10 rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/10 rounded-lg animate-spin-slow" />
    </section>;
};
export default HeroSection;
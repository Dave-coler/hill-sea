// @ts-ignore;
import React, { useState, useEffect, useRef, useCallback } from 'react';

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);
  const [connections, setConnections] = useState([]);
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({
    x: 0,
    y: 0
  });

  // 生成粒子数据
  const generateParticles = useCallback(() => {
    const newParticles = [];
    const particleCount = window.innerWidth < 768 ? 40 : 60;
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.02,
        vy: (Math.random() - 0.5) * 0.02,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01
      });
    }
    return newParticles;
  }, []);

  // 计算粒子之间的连线
  const calculateConnections = useCallback(particles => {
    const newConnections = [];
    const maxDistance = 15; // 最大连线距离（百分比）

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.2; // 根据距离计算透明度
          newConnections.push({
            from: i,
            to: j,
            opacity: opacity
          });
        }
      }
    }
    return newConnections;
  }, []);

  // 动画循环
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // 清空画布
    ctx.clearRect(0, 0, width, height);

    // 更新粒子位置
    const updatedParticles = particlesRef.current.map(particle => {
      let newX = particle.x + particle.vx;
      let newY = particle.y + particle.vy;
      let newVx = particle.vx;
      let newVy = particle.vy;

      // 边界反弹
      if (newX <= 0 || newX >= 100) {
        newVx = -newVx;
        newX = Math.max(0, Math.min(100, newX));
      }
      if (newY <= 0 || newY >= 100) {
        newVy = -newVy;
        newY = Math.max(0, Math.min(100, newY));
      }

      // 鼠标交互
      const mouseDistance = Math.sqrt(Math.pow(newX - mouseRef.current.x, 2) + Math.pow(newY - mouseRef.current.y, 2));
      if (mouseDistance < 10) {
        const angle = Math.atan2(newY - mouseRef.current.y, newX - mouseRef.current.x);
        newVx += Math.cos(angle) * 0.01;
        newVy += Math.sin(angle) * 0.01;
      }

      // 速度衰减
      newVx *= 0.999;
      newVy *= 0.999;

      // 脉冲效果
      const pulseOpacity = particle.opacity + Math.sin(Date.now() * particle.pulseSpeed + particle.pulsePhase) * 0.05;
      return {
        ...particle,
        x: newX,
        y: newY,
        vx: newVx,
        vy: newVy,
        currentOpacity: Math.max(0.05, Math.min(0.4, pulseOpacity))
      };
    });
    particlesRef.current = updatedParticles;

    // 绘制连线
    const connections = calculateConnections(updatedParticles);
    connections.forEach(connection => {
      const fromParticle = updatedParticles[connection.from];
      const toParticle = updatedParticles[connection.to];
      ctx.beginPath();
      ctx.moveTo(fromParticle.x / 100 * width, fromParticle.y / 100 * height);
      ctx.lineTo(toParticle.x / 100 * width, toParticle.y / 100 * height);

      // 创建渐变
      const gradient = ctx.createLinearGradient(fromParticle.x / 100 * width, fromParticle.y / 100 * height, toParticle.x / 100 * width, toParticle.y / 100 * height);
      gradient.addColorStop(0, `rgba(6, 182, 212, ${connection.opacity * 0.5})`);
      gradient.addColorStop(0.5, `rgba(20, 184, 166, ${connection.opacity * 0.7})`);
      gradient.addColorStop(1, `rgba(6, 182, 212, ${connection.opacity * 0.5})`);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    });

    // 绘制粒子
    updatedParticles.forEach(particle => {
      const x = particle.x / 100 * width;
      const y = particle.y / 100 * height;
      const size = particle.size;

      // 创建径向渐变
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
      gradient.addColorStop(0, `rgba(6, 182, 212, ${particle.currentOpacity})`);
      gradient.addColorStop(0.5, `rgba(20, 184, 166, ${particle.currentOpacity * 0.7})`);
      gradient.addColorStop(1, `rgba(6, 182, 212, 0)`);
      ctx.beginPath();
      ctx.arc(x, y, size * 2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // 中心亮点
      ctx.beginPath();
      ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${particle.currentOpacity * 0.8})`;
      ctx.fill();
    });
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [calculateConnections]);

  // 初始化
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    const handleMouseMove = e => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth * 100,
        y: e.clientY / window.innerHeight * 100
      };
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    const particles = generateParticles();
    particlesRef.current = particles;
    setParticles(particles);
    animate();
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [generateParticles, animate]);
  return <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Canvas 层 - 用于高性能粒子动画 */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{
      opacity: 0.6
    }} />
      
      {/* 背景光效层 */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 rounded-full blur-3xl" style={{
        left: '20%',
        top: '30%',
        animation: 'float 20s ease-in-out infinite'
      }} />
        <div className="absolute w-80 h-80 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl" style={{
        right: '15%',
        bottom: '40%',
        animation: 'float 25s ease-in-out infinite reverse'
      }} />
        <div className="absolute w-64 h-64 bg-gradient-to-r from-cyan-400/8 to-teal-400/8 rounded-full blur-2xl" style={{
        left: '60%',
        top: '60%',
        animation: 'float 30s ease-in-out infinite'
      }} />
      </div>
      
      {/* 流动粒子效果 - CSS 动画 */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => <div key={`flow-${i}`} className="absolute w-1 h-1 bg-gradient-to-r from-cyan-300/20 to-teal-300/20 rounded-full" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `flow ${20 + Math.random() * 15}s linear infinite`,
        animationDelay: `${Math.random() * 20}s`
      }} />)}
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.1;
          }
          25% { 
            transform: translateY(-40px) translateX(30px) scale(1.1); 
            opacity: 0.15;
          }
          50% { 
            transform: translateY(30px) translateX(-40px) scale(0.9); 
            opacity: 0.12;
          }
          75% { 
            transform: translateY(-30px) translateX(40px) scale(1.05); 
            opacity: 0.14;
          }
        }
        
        @keyframes flow {
          0% {
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          10% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(1);
            opacity: 0.3;
          }
          90% {
            transform: translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px) scale(1);
            opacity: 0.3;
          }
          100% {
            transform: translate(${Math.random() * 600 - 300}px, ${Math.random() * 600 - 300}px) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>;
};
export default ParticleBackground;
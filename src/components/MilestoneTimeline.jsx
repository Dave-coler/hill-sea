// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Target, Cog, Award, Calendar } from 'lucide-react';

import AnimatedSection from './AnimatedSection';
import HoverCard from './HoverCard';
const MilestoneTimeline = ({
  milestones,
  language
}) => {
  const getIcon = iconType => {
    switch (iconType) {
      case 'rocket':
        return <Target className="h-6 w-6" />;
      case 'gear':
        return <Cog className="h-6 w-6" />;
      case 'check':
        return <Award className="h-6 w-6" />;
      case 'star':
        return <Calendar className="h-6 w-6" />;
      default:
        return <Calendar className="h-6 w-6" />;
    }
  };
  return <div className="relative">
      {/* 时间线 */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-teal-400 md:block hidden" />
      
      {/* 里程碑事件 */}
      <div className="space-y-8">
        {milestones.map((milestone, index) => <AnimatedSection key={index} delay={index * 200}>
            <div className="relative flex items-start space-x-6">
              {/* 时间节点 */}
              <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full border-4 border-gray-900 shadow-xl">
                <div className="text-white">
                  {getIcon(milestone.icon)}
                </div>
              </div>
              
              {/* 内容卡片 */}
              <div className="flex-1 min-w-0">
                <HoverCard childrenClassName="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <span className="text-2xl font-bold text-cyan-400 mb-2 sm:mb-0">
                      {milestone.year}
                    </span>
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-lg flex items-center justify-center sm:hidden">
                      <div className="text-cyan-400">
                        {getIcon(milestone.icon)}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {milestone.description}
                  </p>
                </HoverCard>
              </div>
            </div>
          </AnimatedSection>)}
      </div>
    </div>;
};
export default MilestoneTimeline;
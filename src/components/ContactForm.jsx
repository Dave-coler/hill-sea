// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Button, Input } from '@/components/ui';
// @ts-ignore;
import { Mail, X } from 'lucide-react';

const ContactForm = ({
  isOpen,
  onClose,
  language,
  onSubmit
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  // 多语言配置
  const t = {
    zh: {
      title: '预约技术演示',
      name: '姓名',
      company: '公司名称',
      email: '邮箱',
      message: '留言/需求说明',
      submit: '提交',
      cancel: '取消'
    },
    en: {
      title: 'Schedule Technical Demo',
      name: 'Name',
      company: 'Company Name',
      email: 'Email',
      message: 'Message/Requirements',
      submit: 'Submit',
      cancel: 'Cancel'
    }
  };
  const translations = t[language];
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      company: '',
      email: '',
      message: ''
    });
    onClose();
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-white/20 rounded-2xl p-6 sm:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <h3 className="text-2xl font-bold text-cyan-400 mb-6">{translations.title}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input type="text" value={formData.name} onChange={e => setFormData({
          ...formData,
          name: e.target.value
        })} className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 transition-all duration-300 focus:bg-white/15" placeholder={translations.name} required />
          <Input type="text" value={formData.company} onChange={e => setFormData({
          ...formData,
          company: e.target.value
        })} className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 transition-all duration-300 focus:bg-white/15" placeholder={translations.company} required />
          <Input type="email" value={formData.email} onChange={e => setFormData({
          ...formData,
          email: e.target.value
        })} className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 transition-all duration-300 focus:bg-white/15" placeholder={translations.email} required />
          <textarea value={formData.message} onChange={e => setFormData({
          ...formData,
          message: e.target.value
        })} className="w-full bg-white/10 border-white/20 text-white placeholder-gray-400 rounded-lg p-3 h-24 resize-none focus:border-cyan-400 transition-all duration-300 focus:bg-white/15" placeholder={translations.message} required />
          <div className="flex gap-4">
            <Button type="submit" className="flex-1 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105">
              <span className="flex items-center justify-center">
                {translations.submit}
                <Mail className="ml-2 h-4 w-4" />
              </span>
            </Button>
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 border-white/20 text-gray-300 hover:bg-white/10 transition-all duration-300">
              {translations.cancel}
            </Button>
          </div>
        </form>
      </div>
    </div>;
};
export default ContactForm;
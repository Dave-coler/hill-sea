// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Mail, Phone, MapPin, Linkedin, Youtube, Zap } from 'lucide-react';

const Footer = ({
  t
}) => {
  return <footer className="bg-gradient-to-br from-gray-900 to-black border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4 group">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold transition-all duration-300 group-hover:scale-105">ECOSYN</span>
            </div>
            <p className="text-gray-400">{t.footer.company}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-cyan-400">{t.footer.contact}</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center transition-colors duration-300 hover:text-cyan-400">
                <Mail className="h-4 w-4 mr-2" />
                sales@hill-sea.com
              </div>
              <div className="flex items-center transition-colors duration-300 hover:text-cyan-400">
                <Phone className="h-4 w-4 mr-2" />
                (+86) 000 0000 0000
              </div>
              <div className="flex items-center transition-colors duration-300 hover:text-cyan-400">
                <MapPin className="h-4 w-4 mr-2" />
                中国
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-cyan-400">{t.footer.quickLinks}</h4>
            <div className="space-y-2">
              {t.footer.links.map(link => <a key={link} href="#" className="block text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:translate-x-1">
                  {link}
                </a>)}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-cyan-400">{t.footer.followUs}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                <div className="w-6 h-6 bg-gray-400 rounded" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
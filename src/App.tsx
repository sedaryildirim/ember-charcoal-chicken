import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Facebook, X } from 'lucide-react';
import Countdown from './components/Countdown';

export default function App() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-matte-red overflow-hidden selection:bg-white selection:text-matte-red p-6 relative">
      {/* Animated Background Gradient Shift */}
      <motion.div 
        animate={{ 
          backgroundColor: ["#A65454", "#8E4444", "#A65454"] 
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute inset-0 z-0 opacity-70"
      />

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ 
            x: [-40, 40, -40],
            y: [-40, 40, -40],
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-white rounded-full blur-[180px] opacity-10" 
        />
        <motion.div 
          animate={{ 
            x: [40, -40, 40],
            y: [40, -40, 40],
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-black rounded-full blur-[180px] opacity-20" 
        />
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.15, 0.05],
            scale: [0.8, 1.1, 0.8]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-orange-900 rounded-full blur-[200px]" 
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full"
      >
        {/* Logo Area */}
        <div className="mb-2 w-full flex justify-center">
          <motion.img 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ 
              delay: 0.2, 
              duration: 1, 
              ease: [0.22, 1, 0.36, 1],
              scale: { type: "spring", stiffness: 300, damping: 20 }
            }}
            src="/assets/images/ember-logo-2.png" 
            alt="EMBER Logo" 
            className="w-[75vw] h-auto brightness-0 invert cursor-pointer"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Countdown Area */}
        <div className="space-y-10 w-full">
          <div className="flex flex-col items-center gap-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-base sm:text-lg font-display font-black uppercase tracking-[0.4em] text-white/90 mb-2"
            >
              Charcoal Flame Grilled Chicken
            </motion.h1>
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "1em", y: 10 }}
              animate={{ opacity: 0.8, letterSpacing: "0.6em", y: 0 }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
              className="text-[10px] sm:text-xs font-bold uppercase text-white/60"
            >
              Coming Soon to Thonglor
            </motion.span>
            <div className="pt-8">
              <Countdown />
            </div>
          </div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center gap-8 pt-4"
          >
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-white transition-all hover:scale-110"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-white transition-all hover:scale-110"
            >
              <Facebook size={24} />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
          >
            <a 
              href="https://cdc-group-landing-page.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 hover:tracking-[0.5em] inline-block"
            >
              A part of the CDC Hospitality Group
            </a>
            <button 
              onClick={() => setIsPrivacyModalOpen(true)}
              className="text-white/40 hover:text-white text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 hover:tracking-[0.5em] inline-block cursor-pointer"
            >
              Privacy Policy
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {isPrivacyModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-zinc-900 border border-white/10 w-full max-w-lg max-h-[80vh] overflow-hidden rounded-2xl flex flex-col shadow-2xl"
            >
              <div className="p-6 border-bottom border-white/5 flex justify-between items-center">
                <h2 className="text-white font-bold uppercase tracking-[0.3em] text-sm">Privacy Policy</h2>
                <button 
                  onClick={() => setIsPrivacyModalOpen(false)}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8 overflow-y-auto text-white/60 text-xs leading-relaxed space-y-4 font-sans text-left">
                <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit our website.</p>
                <h3 className="text-white font-bold uppercase tracking-wider text-[10px] pt-2">Information We Collect</h3>
                <p>We automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.</p>
                <h3 className="text-white font-bold uppercase tracking-wider text-[10px] pt-2">How We Use Your Information</h3>
                <p>We use the information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).</p>
                <h3 className="text-white font-bold uppercase tracking-wider text-[10px] pt-2">Sharing Your Information</h3>
                <p>We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Google Analytics to help us understand how our customers use the Site.</p>
                <h3 className="text-white font-bold uppercase tracking-wider text-[10px] pt-2">Your Rights</h3>
                <p>If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted.</p>
                <h3 className="text-white font-bold uppercase tracking-wider text-[10px] pt-2">Changes</h3>
                <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>
                <p className="pt-4 border-t border-white/5 text-[10px]">Last Updated: March 2024</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

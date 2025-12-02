import { Mail, MessageSquare, Instagram } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-6">
           <span className="relative flex h-2 w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
           </span>
           24/7 Support
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
          Still Have Questions?
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
          Our team is here to help you start your reselling journey. We typically respond within minutes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {/* Email Card */}
          <a 
            href="mailto:support@dochyvendors.com" 
            className="group p-6 rounded-2xl bg-[#0f0f13] border border-white/5 hover:border-primary/20 transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/10 group-hover:text-primary transition-colors">
               <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold mb-1">Email Support</h3>
            <p className="text-gray-500 text-xs">support@dochyvendors.com</p>
          </a>

          {/* Discord Card */}
          <button className="group p-6 rounded-2xl bg-[#0f0f13] border border-white/5 hover:border-[#5865F2]/20 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 mx-auto group-hover:bg-[#5865F2]/10 group-hover:text-[#5865F2] transition-colors">
               <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold mb-1">Community</h3>
            <p className="text-gray-500 text-xs">Join our Discord</p>
          </button>

          {/* Instagram Card */}
          <button className="group p-6 rounded-2xl bg-[#0f0f13] border border-white/5 hover:border-[#E1306C]/20 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 mx-auto group-hover:bg-[#E1306C]/10 group-hover:text-[#E1306C] transition-colors">
               <Instagram className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold mb-1">Instagram</h3>
            <p className="text-gray-500 text-xs">@dochyvendors</p>
          </button>
        </div>
      </div>
    </section>
  );
}

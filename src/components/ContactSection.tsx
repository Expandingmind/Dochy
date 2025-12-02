import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 border-t border-white/5 bg-black/40">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Need Help Before You Buy?
        </h2>
        <p className="text-gray-400 mb-8">
          Reach out and we’ll help you pick the right bundle for your situation.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="mailto:support@dochyvendors.com" 
            className="flex items-center gap-3 px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
          >
            <Mail className="w-5 h-5 text-primary" />
            support@dochyvendors.com
          </a>
          {/* Placeholder for Discord/Insta */}
          <button className="flex items-center gap-3 px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white">
            <span>Discord</span>
          </button>
          <button className="flex items-center gap-3 px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white">
            <span>Instagram</span>
          </button>
        </div>
      </div>
    </section>
  );
}


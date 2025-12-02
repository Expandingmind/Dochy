import Link from "next/link";
import { Send, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#050509] pt-24 pb-12 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-6">
               <h2 className="text-4xl font-anton text-white tracking-wide uppercase">DOCHY</h2>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              The #1 resource for high-converting vendor lists and reselling bundles. Turn your hustle into profit with trusted suppliers today.
            </p>
            
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center transition-colors group">
                  <Send className="w-4 h-4 text-gray-400 group-hover:text-white" />
               </a>
               <a href="mailto:support@dochyvendors.com" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center transition-colors group">
                  <Mail className="w-4 h-4 text-gray-400 group-hover:text-white" />
               </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2 md:col-start-8">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider font-anton">Navigate</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/items" className="hover:text-white transition-colors">Catalog</Link></li>
              <li><Link href="/items" className="hover:text-white transition-colors">Items</Link></li>
              <li><Link href="/vendors" className="hover:text-white transition-colors">Vendors</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider font-anton">Support</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/items" className="hover:text-white transition-colors">Find Order</Link></li>
              <li><Link href="/items" className="hover:text-white transition-colors">Track Order</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider font-anton">Legal</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><span className="text-gray-600 cursor-default">All Sales Final</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600 font-medium">
            © {new Date().getFullYear()} DOCHY. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-xs text-gray-500 font-medium">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

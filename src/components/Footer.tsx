import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 */}
          <div>
            <Link href="/" className="inline-block mb-6">
               <h2 className="text-2xl font-bold text-white neon-text">DOCHY</h2>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              DOCHY connects you with trusted suppliers and vendor lists so you can start reselling faster.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-bold mb-6">Support</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="mailto:support@dochyvendors.com" className="hover:text-primary transition-colors">
                  support@dochyvendors.com
                </a>
              </li>
              <li className="pt-2">
                <div className="flex gap-4">
                    {/* Social Icons */}
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                        <span className="text-xs">IG</span>
                    </div>
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                        <span className="text-xs">DC</span>
                    </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} DOCHY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


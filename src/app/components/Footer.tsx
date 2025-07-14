import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Clonify</h2>
          <p className="text-sm text-stone-400 leading-relaxed">
            Crafting delightful digital experiences with performance, beauty, and innovation.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-yellow-400 transition">About</a></li>
            <li><a href="/features" className="hover:text-yellow-400 transition">Features</a></li>
            <li><a href="/pricing" className="hover:text-yellow-400 transition">Pricing</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Status</a></li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-3 mb-6">
            <a className="bg-yellow-400 p-2 rounded-full text-black hover:scale-110 transition"><Facebook size={18} /></a>
            <a className="bg-yellow-400 p-2 rounded-full text-black hover:scale-110 transition"><Instagram size={18} /></a>
            <a className="bg-yellow-400 p-2 rounded-full text-black hover:scale-110 transition"><Linkedin size={18} /></a>
            <a className="bg-yellow-400 p-2 rounded-full text-black hover:scale-110 transition"><Twitter size={18} /></a>
          </div>
          <p className="text-sm text-stone-400 mb-2">Subscribe to our newsletter</p>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-md bg-stone-900 text-white placeholder:text-stone-500 text-sm focus:outline-none border border-stone-800"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-yellow-300 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-16 border-t border-stone-800 pt-6 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} Clonify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

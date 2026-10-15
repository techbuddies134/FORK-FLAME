"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu as MenuIcon, X, ArrowRight, Phone, Mail, MapPin,
  Clock, Utensils, Coffee, Pizza, Beef, IceCream, Star,
  MessageCircle, Send, ChevronUp
} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("desi");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const categories = [
    { id: "desi", name: "Desi Food", icon: <Utensils size={22} /> },
    { id: "fastfood", name: "Fast Food", icon: <Pizza size={22} /> },
    { id: "bbq", name: "BBQ", icon: <Beef size={22} /> },
    { id: "drinks", name: "Drinks", icon: <Coffee size={22} /> },
    { id: "dessert", name: "Desserts", icon: <IceCream size={22} /> },
  ];

  const menuItems: any = {
    desi: [
      { name: "Chicken Biryani", price: "Rs. 350", desc: "Aromatic basmati rice with tender chicken", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80" },
      { name: "Mutton Karahi", price: "Rs. 1200", desc: "Traditional karahi with fresh mutton", img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80" },
      { name: "Nihari", price: "Rs. 450", desc: "Slow-cooked beef shank stew", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80" },
      { name: "Haleem", price: "Rs. 300", desc: "Wheat, lentils & meat porridge", img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80" },
      { name: "Chicken Pulao", price: "Rs. 320", desc: "Fragrant rice with chicken", img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&q=80" },
      { name: "Daal Makhani", price: "Rs. 280", desc: "Creamy black lentils", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80" },
    ],
    fastfood: [
      { name: "Zinger Burger", price: "Rs. 450", desc: "Crispy chicken fillet burger", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80" },
      { name: "Pizza Large", price: "Rs. 1200", desc: "Loaded with cheese & toppings", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" },
      { name: "Loaded Fries", price: "Rs. 350", desc: "Fries with cheese & chicken", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80" },
      { name: "Chicken Shawarma", price: "Rs. 250", desc: "Arabian style wrap", img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80" },
      { name: "Hot Wings", price: "Rs. 400", desc: "Spicy fried chicken wings", img: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=600&q=80" },
      { name: "Club Sandwich", price: "Rs. 380", desc: "Triple layer sandwich", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80" },
    ],
    bbq: [
      { name: "Chicken Tikka", price: "Rs. 400", desc: "Charcoal grilled tikka", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80" },
      { name: "Seekh Kabab", price: "Rs. 500", desc: "Beef seekh kababs", img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80" },
      { name: "Malai Boti", price: "Rs. 550", desc: "Creamy chicken boti", img: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=600&q=80" },
      { name: "Beef Steak", price: "Rs. 900", desc: "Grilled beef steak", img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80" },
      { name: "Fish Tikka", price: "Rs. 700", desc: "Grilled fish with spices", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80" },
      { name: "Mixed BBQ Platter", price: "Rs. 1500", desc: "Assorted BBQ items", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80" },
    ],
    drinks: [
      { name: "Fresh Lime", price: "Rs. 150", desc: "Fresh lemon juice", img: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=80" },
      { name: "Mango Shake", price: "Rs. 250", desc: "Fresh mango milkshake", img: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&q=80" },
      { name: "Cold Coffee", price: "Rs. 300", desc: "Iced coffee with cream", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80" },
      { name: "Soft Drink", price: "Rs. 100", desc: "Chilled soft drinks", img: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=600&q=80" },
      { name: "Lassi", price: "Rs. 200", desc: "Traditional sweet lassi", img: "https://www.bing.com/th/id/OIP.pvntRRl7Xy3R8xEiHjdeegHaD5?w=313&h=200&c=8&rs=1&qlt=90&o=6&pid=ImgMagVNext&rm=2" },
      { name: "Green Tea", price: "Rs. 200", desc: "Refreshing green tea", img: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=600&q=80" },
    ],
    dessert: [
      { name: "Gulab Jamun", price: "Rs. 200", desc: "Sweet milk dumplings", img: "https://th.bing.com/th/id/OIP.dluRtowiRWM9gcQXEwIEuAHaG9?w=189&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
      { name: "Cake", price: "Rs. 180", desc: "sweet and tasty", img: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?w=600&q=80" },
      { name: "Chocolate Cake", price: "Rs. 350", desc: "Rich chocolate slice", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80" },
      { name: "Ice Cream", price: "Rs. 150", desc: "Assorted flavors", img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&q=80" },
      { name: "Samosa", price: "Rs. 250", desc: "Crispy", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80" },
      { name: "Ice Cream", price: "Rs. 300", desc: "Ice cream with vermicelli", img: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=600&q=80" },
    ],
  };

  const emojiFallback: any = {
    "Chicken Biryani": "🍛",
    "Mutton Karahi": "🍲",
    "Nihari": "🥘",
    "Haleem": "🍜",
    "Chicken Pulao": "🍚",
    "Daal Makhani": "🥣",
    "Zinger Burger": "🍔",
    "Pizza Large": "🍕",
    "Loaded Fries": "🍟",
    "Chicken Shawarma": "🌯",
    "Hot Wings": "🍗",
    "Club Sandwich": "🥪",
    "Chicken Tikka": "🍖",
    "Seekh Kabab": "🍢",
    "Malai Boti": "🍗",
    "Beef Steak": "🥩",
    "Fish Tikka": "🐟",
    "Mixed BBQ Platter": "🍽️",
    "Fresh Lime": "🍋",
    "Mango Shake": "🥭",
    "Cold Coffee": "☕",
    "Soft Drink": "🥤",
    "Lassi": "🥛",
    "Green Tea": "🍵",
    "Gulab Jamun": "🍮",
    "Kheer": "🍚",
    "Chocolate Cake": "🍰",
    "Ice Cream": "🍨",
    "Jalebi": "🍯",
    "Falooda": "🍧",
  };

  const handleImageError = (e: any, itemName: string) => {
    const target = e.target as HTMLImageElement;
    target.style.display = "none";
    const parent = target.parentElement;
    if (parent) {
      const fallback = document.createElement("div");
      fallback.className = "w-full h-full flex items-center justify-center text-8xl bg-gradient-to-br from-red-100 to-orange-100";
      fallback.innerText = emojiFallback[itemName] || "🍽️";
      parent.appendChild(fallback);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">

      {/* ===== NAVBAR ===== */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-white/80 backdrop-blur py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="relative flex items-center cursor-pointer"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-red-400 blur-2xl rounded-full -z-10"
            />
            <div className="relative h-12 w-12 md:h-14 md:w-14">
              <Image
                src="/logo.png"
                alt="Fork & Flame Cafe Logo"
                fill
                sizes="60px"
                className="object-contain mix-blend-multiply"
                priority
              />
            </div>
            <div className="ml-2 hidden sm:block">
              <span className="text-xl md:text-2xl font-bold">
                <span className="text-red-600">Fork</span>
                <span className="text-gray-900"> &amp; Flame</span>
              </span>
              <p className="text-[10px] md:text-xs text-gray-500 font-medium tracking-widest -mt-1">
                C A F E
              </p>
            </div>
          </motion.a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <a
                  href={link.href}
                  className="relative text-gray-700 font-medium hover:text-red-600 transition group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </motion.li>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+923000000000"
              className="bg-red-600 text-white px-5 py-2 rounded-full font-medium hover:bg-red-700 transition shadow-lg shadow-red-600/30 flex items-center gap-2"
            >
              <Phone size={16} /> Order Now
            </motion.a>
          </ul>

          <button className="md:hidden text-gray-900" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white shadow-lg overflow-hidden"
            >
              <ul className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-gray-700 font-medium hover:text-red-600 transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <a
                  href="tel:+923000000000"
                  className="bg-red-600 text-white px-5 py-2 rounded-full font-medium text-center"
                >
                  📞 Order Now
                </a>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ===== HERO SECTION ===== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50 pt-24 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none overflow-hidden">
          <div className="grid grid-cols-8 gap-8 p-8 text-6xl">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                {["🍽️", "🍴", "🥄", "🍕", "🍔", "🍛", "☕", "🍰"][i % 8]}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-32 left-10 w-72 h-72 bg-red-200 rounded-full blur-3xl opacity-40"
        />
        <motion.div
          animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-30"
        />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex justify-center mb-6"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-40 w-40 md:h-52 md:w-52 rounded-full bg-white shadow-2xl border-4 border-red-500 p-3 flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/logo.png"
                  alt="Fork & Flame Cafe"
                  fill
                  sizes="200px"
                  className="object-contain mix-blend-multiply"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block bg-white/80 backdrop-blur-sm text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg border border-red-100"
          >
            ⭐ Best Restaurant in Daska
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-sm"
          >
            Delicious Food, <br />
            <span className="text-red-600">Delivered Fresh</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
          >
            Desi, Fast Food, BBQ aur Drinks — sab kuch ek hi jagah. Ghar baithe order karein!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#menu"
              className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg shadow-red-600/40 hover:bg-red-700 transition"
            >
              View Menu <ArrowRight size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/923000000000"
              target="_blank"
              className="bg-white border-2 border-red-600 text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-red-600 hover:text-white transition flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle size={20} /> WhatsApp Order
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-red-100"
          >
            {[
              { num: "50+", label: "Menu Items" },
              { num: "10K+", label: "Happy Customers" },
              { num: "30 min", label: "Fast Delivery" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-red-600">{s.num}</p>
                <p className="text-gray-700 text-sm mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-red-600">Us</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Fork &amp; Flame Cafe ek premium restaurant hai jahan aapko milega authentic desi khana,
              crispy fast food, smoky BBQ aur refreshing drinks.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Hum fresh ingredients use karte hain aur har dish ko love ke saath banate hain.
              Aapki satisfaction hamari priority hai.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Clock size={20} />, text: "Open 11 AM - 12 AM" },
                { icon: <Star size={20} />, text: "5 Star Rated" },
                { icon: <Utensils size={20} />, text: "Fresh Ingredients" },
                { icon: <Phone size={20} />, text: "Fast Delivery" },
              ].map((f) => (
                <div key={f.text} className="flex items-center gap-2 text-gray-700">
                  <span className="text-red-600">{f.icon}</span>
                  <span className="text-sm font-medium">{f.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
              alt="Restaurant Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-2">5+ Years of Taste</h3>
                <p className="text-white/90">
                  Serving delicious food with love since 2019.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== MENU SECTION ===== */}
      <section id="menu" className="py-24 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-red-600">Menu</span>
            </h2>
            <p className="text-gray-600 text-lg">Choose your favorite category</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === cat.id
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/40"
                    : "bg-white text-gray-700 hover:bg-red-50 border border-gray-200"
                }`}
              >
                {cat.icon} {cat.name}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {menuItems[activeCategory].map((item: any, i: number) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all border border-gray-100 cursor-pointer group"
                >
                  <div className="relative h-48 w-full mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 absolute inset-0"
                      loading="lazy"
                      onError={(e) => handleImageError(e, item.name)}
                    />
                    <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg z-10">
                      {item.price}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                  <button className="w-full bg-red-600 text-white py-2 rounded-full font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2">
                    <Phone size={16} /> Order Now
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-red-600">Gallery</span>
            </h2>
            <p className="text-gray-600 text-lg">A glimpse of our delicious food</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80",
              "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
              "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
              "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80",
              "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
              "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
              "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
              "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
              "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer group"
              >
                <img
                  src={img}
                  alt={`Food ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-24 bg-red-600 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hungry? Order Now!
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Call karein ya WhatsApp par order dein. 30 minute mein delivery!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+923000000000"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
            >
              <Phone size={20} /> Call Now
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/923000000000"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition"
            >
              <MessageCircle size={20} /> WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Contact <span className="text-red-600">Us</span>
            </h2>
            <p className="text-gray-600 text-lg">Get in touch with us</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { icon: <MapPin size={24} />, title: "Location", text: "Fork & Flame Cafe, Circular Rd, Daska, 51010, Pakistan" },
                { icon: <Phone size={24} />, title: "Phone", text: "+92 300 0000000" },
                { icon: <Mail size={24} />, title: "Email", text: "info@forkflame.com" },
                { icon: <Clock size={24} />, title: "Hours", text: "Mon-Sun: 11:00 AM - 12:00 AM" },
              ].map((c) => (
                <div key={c.title} className="flex items-start gap-4 p-5 bg-red-50 rounded-2xl hover:bg-red-100 transition">
                  <div className="text-red-600 mt-1">{c.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{c.title}</h4>
                    <p className="text-gray-600">{c.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-600 focus:outline-none transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-600 focus:outline-none transition"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-600 focus:outline-none transition"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-600 focus:outline-none transition resize-none"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2"
              >
                <Send size={18} /> Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER WITH MAP ===== */}
      <footer className="bg-gray-900 text-white pt-16">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border-4 border-red-600"
          >
            <iframe
              src="https://www.google.com/maps?q=Fork+and+Flame+Cafe+Daska&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fork & Flame Cafe Location - Daska"
            ></iframe>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 pb-12">
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative flex items-center gap-3 mb-4 cursor-pointer w-fit"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -inset-2 bg-red-500 blur-lg rounded-full -z-10"
              />
              <div className="relative h-14 w-14">
                <Image
                  src="/logo.png"
                  alt="Fork & Flame Cafe"
                  fill
                  sizes="60px"
                  className="object-contain mix-blend-multiply"
                />
              </div>
              <div>
                <span className="text-xl font-bold">
                  <span className="text-red-500">Fork</span>
                  <span className="text-white"> &amp; Flame</span>
                </span>
                <p className="text-[10px] text-gray-400 font-medium tracking-widest">C A F E</p>
              </div>
            </motion.div>
            <p className="text-gray-400 mb-4">
              Serving delicious food with love in Daska. Your satisfaction is our priority.
            </p>
            <div className="flex gap-3">
              {[
                { name: "f", href: "#" },
                { name: "📷", href: "#" },
                { name: "𝕏", href: "#" },
                { name: "▶", href: "#" },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.2, y: -3 }}
                  href={s.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition text-white font-bold text-lg"
                >
                  {s.name}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-red-500">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-red-500 transition">
                    → {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-red-500">Our Menu</h4>
            <ul className="space-y-2 text-gray-400">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <a href="#menu" className="hover:text-red-500 transition">
                    → {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-red-500">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-red-500 mt-1 flex-shrink-0" />
                <span>Fork &amp; Flame Cafe, Circular Rd, Daska</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-red-500 flex-shrink-0" />
                <a href="tel:+923000000000" className="hover:text-red-500">+92 300 0000000</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-red-500 flex-shrink-0" />
                <a href="mailto:info@forkflame.com" className="hover:text-red-500">info@forkflame.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} className="text-red-500 mt-1 flex-shrink-0" />
                <span>Daily: 11:00 AM - 12:00 AM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ===== FOOTER BOTTOM WITH PORTFOLIO LINK ===== */}
        <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
          © 2026 Fork &amp; Flame Cafe. All rights reserved. | Made by{" "}
          <a
            href="https://portfolio-self-nine-93.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-300 font-semibold transition"
          >
            Tech Buddies
          </a>{" "}
          ❤️
        </div>
      </footer>

      {/* ===== FLOATING WHATSAPP BUTTON ===== */}
      <motion.a
        href="https://wa.me/923000000000"
        target="_blank"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl z-40 hover:bg-green-600"
      >
        <MessageCircle size={26} />
      </motion.a>

      {/* ===== SCROLL TO TOP ===== */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 left-6 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl z-40 hover:bg-red-700"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
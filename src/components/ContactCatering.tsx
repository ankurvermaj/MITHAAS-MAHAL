import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactCatering = () => {
  return (
    <section id="contact" className="py-24 bg-secondary-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary-deep">Visit Our Store</h2>
              <p className="text-primary-deep/60 text-lg">We would love to welcome you to our traditional mithai mahal.</p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-primary-gold/20 text-primary-deep"><MapPin size={24} /></div>
                <div>
                  <p className="font-bold text-primary-deep">Mithaas Mahal</p>
                  <p className="text-gray-500">MG Road, Bengaluru, Karnataka, India</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-primary-gold/20 text-primary-deep"><Phone size={24} /></div>
                <div>
                  <p className="font-bold text-primary-deep">+91 98765 43210</p>
                  <p className="text-gray-500">Available for bulk inquiries</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-primary-gold/20 text-primary-deep"><Mail size={24} /></div>
                <div>
                  <p className="font-bold text-primary-deep">hello@mithaasmahal.in</p>
                  <p className="text-gray-500">Corporate & Wedding orders</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-primary-gold/20 text-primary-deep"><Clock size={24} /></div>
                <div>
                  <p className="font-bold text-primary-deep">Opening Hours</p>
                  <p className="text-gray-500">Mon - Sun: 9:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-gray-200 rounded-3xl overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                Google Maps Placeholder
              </div>
              <div className="absolute inset-0 bg-primary-deep/10 group-hover:bg-transparent transition-colors" />
              <button className="absolute bottom-4 right-4 btn-premium bg-primary-deep text-secondary-cream px-4 py-2 text-xs">
                Get Directions
              </button>
            </div>
          </div>

          {/* Catering Form */}
          <div id="catering" className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-primary-deep/5">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-serif font-bold text-primary-deep mb-2">Big Celebrations</h3>
              <p className="text-gray-500">Request a quote for weddings or corporate events.</p>
            </div>

            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input placeholder="Your Name" className="p-4 rounded-xl border border-gray-100 outline-none focus:border-primary-gold" />
                <input placeholder="Phone Number" className="p-4 rounded-xl border border-gray-100 outline-none focus:border-primary-gold" />
              </div>
              <input placeholder="Email Address" className="w-full p-4 rounded-xl border border-gray-100 outline-none focus:border-primary-gold" />
              <select className="w-full p-4 rounded-xl border border-gray-100 outline-none focus:border-primary-gold text-gray-500">
                <option>Select Event Type</option>
                <option>Wedding</option>
                <option>Corporate Event</option>
                <option>Birthday / Anniversary</option>
                <option>Other</option>
              </select>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="date" className="p-4 rounded-xl border border-gray-100 outline-none focus:border-primary-gold" />
                <input placeholder="Approx Guests" className="p-4 rounded-xl border border-gray-100 outline-none focus:border-primary-gold" />
              </div>
              <textarea placeholder="Special Requirements" rows={4} className="w-full p-4 rounded-xl border border-gray-100 outline-none focus:border-primary-gold"></textarea>
              <button className="btn-premium bg-primary-deep text-secondary-cream w-full py-4 font-bold flex items-center justify-center gap-2 group">
                Request a Quote <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCatering;

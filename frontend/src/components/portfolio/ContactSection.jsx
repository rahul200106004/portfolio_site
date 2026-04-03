import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { toast } from 'sonner';
import { personalInfo } from '../../data/mock';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personalInfo.location,
    href: null,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: personalInfo.linkedin,
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }
    setSending(true);

    // Mock: save to localStorage
    const messages = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
    messages.push({ ...form, timestamp: new Date().toISOString() });
    localStorage.setItem('portfolio_messages', JSON.stringify(messages));

    setTimeout(() => {
      setSending(false);
      setForm({ name: '', email: '', message: '' });
      toast.success("Message sent! I'll get back to you soon.");
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-zinc-900/30" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <p className="text-teal-500 font-mono text-sm tracking-wider uppercase mb-3">
            Let's Connect
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-zinc-50 tracking-tight">
            Get in Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-zinc-400 leading-relaxed text-lg">
              Whether you have a project in mind, want to discuss AI/ML, or just
              want to chat about chess strategies &mdash; I'm always up for a good
              conversation.
            </p>

            <div className="space-y-4">
              {contactLinks.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800/80 flex items-center justify-center group-hover:bg-teal-500/10 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-zinc-500 group-hover:text-teal-400 transition-colors duration-200" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600 uppercase tracking-wider">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-zinc-300 hover:text-teal-400 transition-colors duration-200 flex items-center gap-1"
                      >
                        {value}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <p className="text-zinc-300">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8 space-y-6"
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="text-zinc-400 text-sm">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange('name')}
                className="bg-zinc-800/50 border-zinc-700/50 text-zinc-50 placeholder:text-zinc-600 focus:border-teal-500/50 focus:ring-teal-500/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-400 text-sm">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange('email')}
                className="bg-zinc-800/50 border-zinc-700/50 text-zinc-50 placeholder:text-zinc-600 focus:border-teal-500/50 focus:ring-teal-500/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-zinc-400 text-sm">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project or just say hello..."
                rows={5}
                value={form.message}
                onChange={handleChange('message')}
                className="bg-zinc-800/50 border-zinc-700/50 text-zinc-50 placeholder:text-zinc-600 focus:border-teal-500/50 focus:ring-teal-500/20 resize-none"
              />
            </div>
            <Button
              type="submit"
              disabled={sending}
              className="w-full bg-teal-600 hover:bg-teal-500 text-white transition-colors duration-200"
            >
              {sending ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </span>
              )}
            </Button>
            <p className="text-xs text-zinc-600 text-center">
              Contact form is currently in demo mode.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

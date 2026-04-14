import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RetroWindow from '../components/RetroWindow';

const EMPTY = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm]       = useState(EMPTY);
  const [status, setStatus]   = useState('idle'); // idle, sending, success, error
  const [errMsg, setErrMsg]   = useState('');

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrMsg(data.error || 'Something went wrong.');
        setStatus('error');
        return;
      }

      setStatus('success');
      setForm(EMPTY);
    } catch (err) {
      setErrMsg('Could not reach the server. Is it running?');
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8">
        <h1 className="font-pixel-heading text-retro-blue text-lg md:text-2xl leading-relaxed">
          CONTACT
        </h1>
        <p className="font-pixel text-retro-blue/60 text-base mt-2">
          Let's create something together ✦
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-xl">

        <RetroWindow title="contact.txt">

          {/* ── Success state ── */}
          {status === 'success' ? (
            <div className="flex flex-col items-center py-10 gap-4">
              <span className="text-4xl">✉️</span>
              <p className="font-pixel-heading text-[10px] text-retro-blue text-center leading-relaxed">
                MESSAGE SAVED!
              </p>
              <p className="font-pixel text-sm text-retro-blue/60 text-center">
                Your message was stored. I'll get back to you soon!
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="font-pixel text-sm px-6 py-2 bg-retro-pink text-retro-blue border-2 border-retro-blue pixel-btn hover:bg-retro-pink/80 mt-2">
                Send Another
              </button>
            </div>

          ) : (
            /* ── Form ── */
            <form onSubmit={handleSubmit} className="space-y-4">

              {[
                { name: 'name',    label: 'Name',    type: 'text',  placeholder: 'Your name' },
                { name: 'email',   label: 'Email',   type: 'email', placeholder: 'your@email.com' },
                { name: 'subject', label: 'Subject', type: 'text',  placeholder: 'Project inquiry...' },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name}>
                  <label className="font-pixel text-xs text-retro-blue block mb-1">
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    required
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full bg-retro-white border-2 border-retro-blue font-pixel text-sm text-retro-blue placeholder:text-retro-blue/40 px-3 py-2 window-inset focus:outline-none"
                  />
                </div>
              ))}

              <div>
                <label className="font-pixel text-xs text-retro-blue block mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  className="w-full bg-retro-white border-2 border-retro-blue font-pixel text-sm text-retro-blue placeholder:text-retro-blue/40 px-3 py-2 window-inset focus:outline-none resize-none"
                />
              </div>

              {/* Error message */}
              {status === 'error' && (
                <p className="font-pixel text-xs text-red-500 border border-red-300 bg-red-50 px-3 py-2">
                  ⚠ {errMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full font-pixel text-sm py-2.5 bg-retro-blue text-retro-white border-2 border-retro-blue pixel-btn hover:bg-retro-blue/90 disabled:opacity-60">
                {status === 'sending' ? 'Saving...' : '✦ Send Message'}
              </button>
            </form>
          )}

        </RetroWindow>
      </motion.div>
    </div>
  );
}

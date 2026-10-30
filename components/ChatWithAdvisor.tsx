const WHATSAPP_URL = `https://wa.me/919995067188?text=${encodeURIComponent(
  "Hello, I would like to chat with an advisor about health insurance plans."
)}`;

export default function ChatWithAdvisor() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Advisor on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-[#25d366] px-5 py-3.5 text-[15px] font-bold text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition hover:bg-[#1fb857]"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 3C6.5 3 2 6.9 2 11.7c0 2.4 1.1 4.6 3 6.2L4 22l4.4-2.2c1.1.3 2.3.5 3.6.5 5.5 0 10-3.9 10-8.7S17.5 3 12 3z" />
      </svg>
      <span className="hidden sm:inline">Chat with Advisor</span>
    </a>
  );
}

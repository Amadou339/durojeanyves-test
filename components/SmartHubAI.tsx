
import React, { useState, useRef, useEffect } from 'react';
import { askCampaignAI } from '../services/geminiService';
import { ICONS, CANDIDATE_NAME } from '../constants';
import { ChatMessage } from '../types';

const SmartHubAI: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: `Bonjour ! Je suis l'assistant intelligent de ${CANDIDATE_NAME}. Posez-moi vos questions sur notre programme pour Sainte-Anne.` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = { role: 'user' as const, text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const answer = await askCampaignAI(input);
    setMessages(prev => [...prev, { role: 'model', text: answer }]);
    setIsLoading(false);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={`fixed bottom-24 right-6 z-50 transition-all duration-300 ${isExpanded ? 'w-[350px] sm:w-[400px]' : 'w-auto'}`}>
      {!isExpanded ? (
        <button 
          onClick={() => setIsExpanded(true)}
          className="bg-campaign-navy text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center gap-3 border-4 border-campaign-accent"
        >
          <div className="w-8 h-8 rounded-full bg-campaign-accent flex items-center justify-center text-campaign-navy">
            <span className="font-black text-xs">AI</span>
          </div>
          <span className="font-bold pr-2 hidden sm:inline">Posez une question</span>
        </button>
      ) : (
        <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[500px]">
          <div className="bg-campaign-navy p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-campaign-accent flex items-center justify-center text-campaign-navy font-black">AI</div>
              <div>
                <p className="text-white font-bold text-sm">SmartHub 2026</p>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-blue-200 text-[10px] uppercase font-bold tracking-widest">En ligne</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsExpanded(false)} className="text-white hover:text-campaign-accent">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm text-sm ${
                  msg.role === 'user' 
                    ? 'bg-campaign-navy text-white rounded-br-none' 
                    : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-gray-100 flex gap-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Votre question sur le programme..." 
                className="flex-1 px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-campaign-accent text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-campaign-accent text-campaign-navy p-3 rounded-xl hover:scale-105 transition-transform disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
            <p className="text-[9px] text-gray-400 mt-2 text-center">IA entraînée sur le programme Sentann@vantou</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartHubAI;

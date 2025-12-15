import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { COMPANY_NAME, SERVICES } from '../constants';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: `Hello! I'm the ${COMPANY_NAME} AI Assistant. How can I help you today?` }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        throw new Error("API Key not found");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const systemContext = `
        You are the helpful, professional, and sophisticated AI assistant for ${COMPANY_NAME}, a premium integrated services company in Abuja, Nigeria.
        
        Our services include:
        ${SERVICES.map(s => `- ${s.title}: ${s.shortDescription}`).join('\n')}
        
        Tone: Professional, luxurious, confident, and helpful.
        If asked about prices, suggest they request a quote via the Contact page.
        If asked about location, we are in Abuja.
        Keep answers concise (under 100 words) unless detailed info is requested.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            { role: 'user', parts: [{ text: systemContext + "\n\nUser Question: " + userMessage.text }] }
        ],
      });

      const aiText = response.text || "I apologize, I couldn't process that request right now. Please try again or contact our support.";

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: aiText
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        text: "I'm having trouble connecting to the server. Please try again later or visit our Contact page." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-belfort-red text-white p-4 rounded-full shadow-2xl hover:bg-[#a01d27] transition-transform duration-300 hover:scale-110 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open Chat"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 z-50 w-full max-w-sm bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right border border-gray-100 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`} style={{ height: '500px' }}>
        
        {/* Header */}
        <div className="bg-black text-white p-4 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-sm">Belfort Assistant</h3>
            <span className="text-xs text-green-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Online
            </span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                msg.role === 'user' 
                  ? 'bg-belfort-red text-white rounded-br-none' 
                  : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-200 shadow-sm">
                <Loader2 size={16} className="animate-spin text-belfort-red" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 bg-gray-100 border-0 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-belfort-red focus:bg-white transition-all outline-none"
            />
            <button 
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="p-2 bg-belfort-red text-white rounded-full hover:bg-[#a01d27] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
          <div className="text-[10px] text-center text-gray-400 mt-2">
            Powered by Gemini AI
          </div>
        </div>
      </div>
    </>
  );
};
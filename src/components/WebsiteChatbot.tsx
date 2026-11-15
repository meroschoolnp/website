import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { X, Send, Bot, ArrowRight, RotateCcw } from "lucide-react";
import {
  matchWebsiteKnowledge,
  ChatbotEntry,
} from "@/src/data/chatbotKnowledge";
import { useLanguage } from "@/src/context/LanguageContext";

interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
  fullText: string;
  isTyping?: boolean;
  suggestedFollowUps?: string[];
  actionLink?: {
    label: string;
    path: string;
  };
  queryUsed?: string;
  timestamp: string;
}

const buildInitialWelcome = (isNepali: boolean): Message => ({
  id: "msg-welcome",
  sender: "assistant",
  text: "",
  fullText: isNepali
    ? `नमस्ते! म **MeroSchool ज्ञान सहायक** हुँ।\n\nम तपाईंको ब्राउजरमै **कुनै बाह्य सर्भर जडान बिना १००% स्थानीय रूपमा** चल्छु र MeroSchool अफलाइन डेस्कटप ERP बारे पूर्ण जानकारी दिन्छु।\n\nतलका प्रश्नहरूमा क्लिक गर्नुहोस् वा सिधै सोध्नुहोस्!`
    : `Hello! I am the **MeroSchool Knowledge Assistant**.\n\nI run 100% locally in your browser with **zero external server calls** and have complete knowledge of our offline desktop school ERP.\n\nFeel free to ask any question or click a suggestion below!`,
  isTyping: false,
  suggestedFollowUps: isNepali
    ? [
        "के यो १००% अफलाइन चल्छ?",
        "कुन–कुन अपरेटिङ सिस्टम सपोर्ट गर्छ?",
        "विद्यार्थी शुल्क खाता कसरी काम गर्छ?",
        "के MeroSchool ले बारकोड स्क्यानर र थर्मल रसिद प्रिन्टर सपोर्ट गर्छ?",
        "हामी डेटा ब्याकअप कसरी गर्ने?",
      ]
    : [
        "Is MeroSchool 100% offline?",
        "Which operating systems are supported?",
        "How does student fee ledger work?",
        "Does it work with barcode scanners?",
        "How do we back up our data to USB?",
      ],
  timestamp: isNepali ? "अहिले" : "Just now",
});

// Formatter to render bold (**text**), bullet points (• or -), and markdown links ([text](url))
const FormattedMessage: React.FC<{ content: string; isTyping?: boolean }> = ({
  content,
  isTyping,
}) => {
  const lines = content.split("\n");

  return (
    <div className="space-y-2 text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200">
      {lines.map((line, idx) => {
        if (!line.trim()) return <div key={idx} className="h-1.5" />;

        // Bullet points
        const isBullet = line.startsWith("• ") || line.startsWith("- ");
        const displayLine = isBullet ? line.slice(2) : line;

        // Simple bold parser
        const parts = displayLine.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);

        const renderedLine = parts.map((part, pIdx) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong
                key={pIdx}
                className="font-bold text-slate-900 dark:text-white"
              >
                {part.slice(2, -2)}
              </strong>
            );
          }
          const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
          if (linkMatch) {
            const [, linkText, href] = linkMatch;
            return (
              <a
                key={pIdx}
                href={href}
                className="text-indigo-600 dark:text-indigo-400 font-semibold underline hover:text-indigo-700"
              >
                {linkText}
              </a>
            );
          }
          return part;
        });

        if (isBullet) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-1">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold shrink-0 mt-0.5">
                •
              </span>
              <span className="flex-1">{renderedLine}</span>
            </div>
          );
        }

        return <p key={idx}>{renderedLine}</p>;
      })}

      {/* Blinking cursor while writing */}
      {isTyping && (
        <span
          className="inline-block w-2 h-4 ml-1 bg-indigo-600 dark:bg-indigo-400 align-middle animate-pulse"
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export const WebsiteChatbot: React.FC = () => {
  const navigate = useNavigate();
  const { lang, isNepali, pick } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(() => [
    buildInitialWelcome(isNepali),
  ]);
  const [activeTypingId, setActiveTypingId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Keep welcome and existing assistant responses synchronized when language changes
  useEffect(() => {
    setMessages((prev) =>
      prev.map((m) => {
        if (m.sender !== "assistant" || m.isTyping) return m;
        if (m.id === "msg-welcome" || m.id.startsWith("welcome-")) {
          const updatedWelcome = buildInitialWelcome(isNepali);
          return {
            ...updatedWelcome,
            id: m.id,
            timestamp: m.timestamp,
          };
        }
        if (m.queryUsed) {
          const localized = matchWebsiteKnowledge(m.queryUsed, lang);
          if (localized) {
            return {
              ...m,
              text: localized.answer,
              fullText: localized.answer,
              suggestedFollowUps: localized.suggestedFollowUps,
              actionLink: localized.actionLink,
            };
          }
        }
        return m;
      }),
    );
  }, [lang, isNepali]);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    };
  }, []);

  // Typewriter streaming effect implementation
  const streamTypingEffect = (msgId: string, fullText: string) => {
    if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    setActiveTypingId(msgId);

    let charIndex = 0;
    // Adapt step size to total length so long responses don't take forever (max ~1.5s)
    const chunkSize = fullText.length > 300 ? 3 : fullText.length > 150 ? 2 : 1;
    const intervalDelay = 14; // ms

    typingIntervalRef.current = setInterval(() => {
      charIndex += chunkSize;
      if (charIndex >= fullText.length) {
        // Typing finished
        charIndex = fullText.length;
        if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
        setActiveTypingId(null);

        setMessages((prev) =>
          prev.map((m) =>
            m.id === msgId ? { ...m, text: fullText, isTyping: false } : m,
          ),
        );
      } else {
        const partial = fullText.slice(0, charIndex);
        setMessages((prev) =>
          prev.map((m) =>
            m.id === msgId ? { ...m, text: partial, isTyping: true } : m,
          ),
        );
      }
    }, intervalDelay);
  };

  // Immediate completion if user skips
  const skipTyping = () => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }
    if (activeTypingId) {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === activeTypingId
            ? { ...m, text: m.fullText, isTyping: false }
            : m,
        ),
      );
      setActiveTypingId(null);
    }
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    skipTyping();

    const userMsgId = `user-${Date.now()}`;
    const userMsg: Message = {
      id: userMsgId,
      sender: "user",
      text: query,
      fullText: query,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // Match local website knowledge base with pure client-side NLP in active language
    const matchedEntry: ChatbotEntry | null = matchWebsiteKnowledge(
      query,
      lang,
    );

    const assistantMsgId = `assistant-${Date.now() + 1}`;
    const assistantMsg: Message = {
      id: assistantMsgId,
      sender: "assistant",
      text: "", // starts empty for typing effect
      fullText: matchedEntry
        ? matchedEntry.answer
        : pick(
            "I am here to help answer questions about the MeroSchool offline desktop ERP.",
            "म MeroSchool अफलाइन डेस्कटप ERP बारे तपाईंको प्रश्नहरूको जवाफ दिन मद्दत गर्न तयार छु।",
          ),
      isTyping: true,
      suggestedFollowUps: matchedEntry?.suggestedFollowUps,
      actionLink: matchedEntry?.actionLink,
      queryUsed: query,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setInput("");

    // Trigger typewriter writing effect
    setTimeout(() => {
      streamTypingEffect(assistantMsgId, assistantMsg.fullText);
    }, 120);
  };

  const handleReset = () => {
    skipTyping();
    setMessages([
      {
        ...buildInitialWelcome(isNepali),
        id: `welcome-${Date.now()}`,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  };

  return (
    <>
      {/* 1. Floating Launcher Icon Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center border border-indigo-400/40 group"
          aria-label={pick(
            "Open MeroSchool Assistant",
            "MeroSchool सहायक खोल्नुहोस्",
          )}
          title={pick(
            "Ask MeroSchool Knowledge Assistant",
            "MeroSchool ज्ञान सहायकलाई सोध्नुहोस्",
          )}
        >
          <div className="relative flex items-center justify-center">
            <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-indigo-600" />
          </div>
        </button>
      )}

      {/* 2. Floating Chatbot Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={pick(
            "MeroSchool Website Knowledge Assistant",
            "MeroSchool वेबसाइट ज्ञान सहायक",
          )}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[410px] md:w-[440px] h-[580px] max-h-[86vh] rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden animate-page-enter"
        >
          {/* Header */}
          <div className="px-4 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white flex items-center justify-between shrink-0 shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-xs flex items-center justify-center text-white font-bold border border-white/20">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs sm:text-sm font-bold leading-tight">
                    {pick("MeroSchool Assistant", "MeroSchool सहायक")}
                  </h3>
                  <span className="px-1.5 py-0.2 rounded-md bg-white/20 text-[10px] font-mono font-medium">
                    {pick("100% Offline", "१००% अफलाइन")}
                  </span>
                </div>
                <p className="text-[10px] text-indigo-100 flex items-center gap-1">
                  <span>
                    {pick(
                      "Website knowledge · 100% local",
                      "वेबसाइट जानकारी · १००% स्थानीय",
                    )}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-white/80">
              <button
                type="button"
                onClick={handleReset}
                className="p-1.5 rounded-lg hover:bg-white/15 hover:text-white transition-colors cursor-pointer"
                title={pick("Reset conversation", "वार्तालाप रिसेट गर्नुहोस्")}
                aria-label={pick(
                  "Reset conversation",
                  "वार्तालाप रिसेट गर्नुहोस्",
                )}
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/15 hover:text-white transition-colors cursor-pointer"
                title={pick("Close chat", "च्याट बन्द गर्नुहोस्")}
                aria-label={pick("Close assistant", "सहायक बन्द गर्नुहोस्")}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/60 dark:bg-slate-950/40">
            {messages.map((m) => {
              const isUser = m.sender === "user";
              return (
                <div
                  key={m.id}
                  className={`flex gap-2.5 ${isUser ? "justify-end" : "justify-start"}`}
                >
                  {!isUser && (
                    <div className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 border border-indigo-200 dark:border-indigo-900">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 space-y-2.5 shadow-xs ${
                      isUser
                        ? "bg-indigo-600 text-white rounded-tr-xs"
                        : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-tl-xs"
                    }`}
                  >
                    {/* Message Header */}
                    <div
                      className={`text-[10px] font-mono flex items-center justify-between gap-4 ${
                        isUser ? "text-indigo-200" : "text-slate-400"
                      }`}
                    >
                      <span>
                        {isUser
                          ? pick("You", "तपाईं")
                          : pick("MeroSchool Assistant", "MeroSchool सहायक")}
                      </span>
                      <span>{m.timestamp}</span>
                    </div>

                    {/* Content */}
                    {isUser ? (
                      <p className="text-xs sm:text-sm whitespace-pre-wrap leading-relaxed">
                        {m.text}
                      </p>
                    ) : (
                      <div onClick={skipTyping} className="cursor-text">
                        <FormattedMessage
                          content={m.text || (m.isTyping ? "" : m.fullText)}
                          isTyping={m.isTyping}
                        />
                      </div>
                    )}

                    {/* Action Link button */}
                    {!isUser && m.actionLink && !m.isTyping && (
                      <div className="pt-1.5 border-t border-slate-100 dark:border-slate-800">
                        <button
                          type="button"
                          onClick={() => {
                            setIsOpen(false);
                            navigate(m.actionLink!.path);
                          }}
                          className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-colors flex items-center justify-between cursor-pointer"
                        >
                          <span>{m.actionLink.label}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    {/* Suggested follow-up prompt pills */}
                    {!isUser &&
                      m.suggestedFollowUps &&
                      m.suggestedFollowUps.length > 0 &&
                      !m.isTyping && (
                        <div className="pt-2 space-y-1.5 border-t border-slate-100 dark:border-slate-800">
                          <div className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400">
                            {pick("Related Questions", "सम्बन्धित प्रश्नहरू")}
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {m.suggestedFollowUps.map((prompt, pIdx) => (
                              <button
                                key={pIdx}
                                type="button"
                                onClick={() => handleSend(prompt)}
                                className="text-[11px] text-left px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-950 dark:hover:text-indigo-300 border border-slate-200/60 dark:border-slate-700 transition-colors cursor-pointer"
                              >
                                {prompt}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Typing Skip banner */}
          {activeTypingId && (
            <div className="px-4 py-1.5 bg-indigo-50 dark:bg-indigo-950/40 border-t border-indigo-100 dark:border-indigo-900/50 flex items-center justify-between text-[11px] text-indigo-700 dark:text-indigo-300 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
                {pick("Writing response...", "जवाफ लेखिँदैछ...")}
              </span>
              <button
                type="button"
                onClick={skipTyping}
                className="hover:underline cursor-pointer font-bold"
              >
                {pick("Skip typing", "छिटो देखाउनुहोस्")}
              </button>
            </div>
          )}

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              placeholder={pick(
                "Ask anything about MeroSchool ERP...",
                "MeroSchool ERP बारे जे पनि सोध्नुहोस्...",
              )}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 shadow-xs"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:hover:bg-indigo-600 text-white transition-colors cursor-pointer shrink-0 shadow-xs flex items-center justify-center min-w-[40px] min-h-[40px]"
              aria-label={pick("Send message", "सन्देश पठाउनुहोस्")}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

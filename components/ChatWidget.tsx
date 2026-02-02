'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './ChatWidget.module.css';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { portfolioData } from '@/lib/portfolioData';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

const suggestedQuestions = [
    "What are your main skills?",
    "Tell me about your projects",
    "What's your experience?",
    "Are you available for work?",
];

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const { personal } = portfolioData;

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const sendMessage = async (content: string) => {
        if (!content.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: content.trim(),
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setShowSuggestions(false);
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: content.trim(),
                    history: messages.map(m => ({ role: m.role, content: m.content }))
                }),
            });

            const data = await response.json();

            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: data.response || "I'm having trouble connecting. Please try again or email me directly!",
                timestamp: new Date(),
            };

            setMessages(prev => [...prev, assistantMessage]);
        } catch {
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: `I'm having trouble connecting right now. Feel free to reach out directly at ${personal.email}!`,
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(input);
    };

    const handleSuggestionClick = (question: string) => {
        sendMessage(question);
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <button
                className={`${styles.toggleBtn} ${isOpen ? styles.hidden : ''}`}
                onClick={() => setIsOpen(true)}
                aria-label="Open chat with AI assistant"
                aria-expanded={isOpen}
            >
                <MessageCircle size={24} />
                <span className={styles.toggleLabel}>Chat with my AI</span>
                <span className={styles.pulse}></span>
            </button>

            {/* Chat Window */}
            <div
                className={`${styles.chatWindow} ${isOpen ? styles.open : ''}`}
                role="dialog"
                aria-label="AI Chat Assistant"
                aria-hidden={!isOpen}
            >
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.headerInfo}>
                        <div className={styles.avatar}>
                            <Sparkles size={20} />
                        </div>
                        <div>
                            <h3 className={styles.headerTitle}>AI Digital Twin</h3>
                            <span className={styles.headerStatus}>
                                <span className={styles.statusDot}></span>
                                Online
                            </span>
                        </div>
                    </div>
                    <button
                        className={styles.closeBtn}
                        onClick={() => setIsOpen(false)}
                        aria-label="Close chat"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Messages */}
                <div className={styles.messages}>
                    {messages.length === 0 && (
                        <div className={styles.welcome}>
                            <div className={styles.welcomeIcon}>
                                <Sparkles size={32} />
                            </div>
                            <h4>Hi! I&apos;m {personal.name}&apos;s AI</h4>
                            <p>Ask me anything about my skills, projects, or experience!</p>
                        </div>
                    )}

                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`${styles.message} ${styles[message.role]}`}
                        >
                            {message.role === 'assistant' && (
                                <div className={styles.messageAvatar}>
                                    <Sparkles size={14} />
                                </div>
                            )}
                            <div className={styles.messageContent}>
                                <p>{message.content}</p>
                                <span className={styles.messageTime}>
                                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </div>
                    ))}

                    {isLoading && (
                        <div className={`${styles.message} ${styles.assistant}`}>
                            <div className={styles.messageAvatar}>
                                <Sparkles size={14} />
                            </div>
                            <div className={styles.messageContent}>
                                <div className={styles.typing}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Suggestions */}
                {showSuggestions && messages.length === 0 && (
                    <div className={styles.suggestions}>
                        {suggestedQuestions.map((question) => (
                            <button
                                key={question}
                                className={styles.suggestionBtn}
                                onClick={() => handleSuggestionClick(question)}
                            >
                                {question}
                            </button>
                        ))}
                    </div>
                )}

                {/* Input */}
                <form className={styles.inputForm} onSubmit={handleSubmit}>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        className={styles.input}
                        disabled={isLoading}
                        aria-label="Chat message input"
                    />
                    <button
                        type="submit"
                        className={styles.sendBtn}
                        disabled={!input.trim() || isLoading}
                        aria-label="Send message"
                    >
                        {isLoading ? <Loader2 size={20} className={styles.spinner} /> : <Send size={20} />}
                    </button>
                </form>
            </div>
        </>
    );
}

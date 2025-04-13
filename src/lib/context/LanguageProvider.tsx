"use client";

import type React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import { LANGUAGE_OPTIONS } from '../constants';
import { enMessages } from '../translations/en';
import { frMessages } from '../translations/fr';

type Language = 'fr' | 'en';
type Messages = typeof enMessages;

// Define a recursive type without circular reference
type MessageValue = string | { [key: string]: MessageValue };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const defaultLanguage: Language = 'fr';

const getNestedValue = (obj: Record<string, MessageValue>, path: string): string => {
  const keys = path.split('.');
  let result: MessageValue = obj;

  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      return path; // Key not found, return original path
    }
  }

  return typeof result === 'string' ? result : path;
};

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [messages, setMessages] = useState<Messages>(frMessages);

  useEffect(() => {
    // Load language preference from localStorage if available
    const savedLanguage = typeof window !== 'undefined'
      ? localStorage.getItem('language') as Language
      : null;

    if (savedLanguage && LANGUAGE_OPTIONS.some(opt => opt.value === savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Update messages when language changes
    if (language === 'en') {
      setMessages(enMessages);
    } else {
      setMessages(frMessages);
    }

    // Save language preference to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  const t = (key: string): string => {
    try {
      return getNestedValue(messages as Record<string, MessageValue>, key);
    } catch (error) {
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

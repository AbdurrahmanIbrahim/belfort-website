import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  children: React.ReactNode;
  to?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, to, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-belfort-red text-white hover:bg-[#a01d27] shadow-lg",
    secondary: "bg-belfort-black text-white hover:bg-gray-900 shadow-md",
    outline: "border-2 border-belfort-white text-white hover:bg-white hover:text-belfort-black",
    white: "bg-white text-belfort-red hover:bg-gray-100 shadow-lg"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

// Section Wrapper
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => (
  <section id={id} className={`py-20 md:py-28 px-6 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

// Card Component
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => (
  <div className={`bg-white p-8 shadow-sm border border-gray-100 ${hoverEffect ? 'transition-all duration-300 hover:-translate-y-2 hover:shadow-xl' : ''} ${className}`}>
    {children}
  </div>
);

// Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => (
  <div className="mb-6">
    <label className="block text-belfort-grey text-sm font-bold mb-2 uppercase tracking-wide">
      {label}
    </label>
    <input
      className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-belfort-red focus:ring-1 focus:ring-belfort-red transition-colors ${className}`}
      {...props}
    />
  </div>
);

// TextArea Component
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, className = '', ...props }) => (
  <div className="mb-6">
    <label className="block text-belfort-grey text-sm font-bold mb-2 uppercase tracking-wide">
      {label}
    </label>
    <textarea
      className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-belfort-red focus:ring-1 focus:ring-belfort-red transition-colors h-32 ${className}`}
      {...props}
    />
  </div>
);

// Select Component
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({ label, options, className = '', ...props }) => (
  <div className="mb-6">
    <label className="block text-belfort-grey text-sm font-bold mb-2 uppercase tracking-wide">
      {label}
    </label>
    <div className="relative">
      <select
        className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-belfort-red focus:ring-1 focus:ring-belfort-red transition-colors appearance-none ${className}`}
        {...props}
      >
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  </div>
);

export const CheckListItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start space-x-3 mb-3">
    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-belfort-red/10 flex items-center justify-center mt-1">
      <Check size={12} className="text-belfort-red" />
    </span>
    <span className="text-belfort-grey">{text}</span>
  </li>
);
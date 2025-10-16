import React from 'react';
interface SystemFlowSVGProps {
  className?: string;
}
const SystemFlowSVG: React.FC<SystemFlowSVGProps> = ({
  className = ''
}) => {
  return <svg className={`w-full h-auto ${className}`} viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* System Flow Diagram */}
      <rect x="50" y="120" width="100" height="60" rx="10" fill="url(#gradient1)" opacity="0.9" />
      <text x="100" y="155" textAnchor="middle" fill="white" fontWeight="500">
        Tư Duy
      </text>
      <rect x="250" y="120" width="100" height="60" rx="10" fill="url(#gradient2)" opacity="0.9" />
      <text x="300" y="155" textAnchor="middle" fill="white" fontWeight="500">
        Hệ Thống
      </text>
      <rect x="450" y="120" width="100" height="60" rx="10" fill="url(#gradient3)" opacity="0.9" />
      <text x="500" y="155" textAnchor="middle" fill="white" fontWeight="500">
        Kết Quả
      </text>
      {/* Arrows */}
      <path d="M150 150 L250 150" stroke="#6366f1" strokeWidth="3" markerEnd="url(#arrowhead)" />
      <path d="M350 150 L450 150" stroke="#6366f1" strokeWidth="3" markerEnd="url(#arrowhead)" />
      {/* Data Flow */}
      <circle cx="200" cy="130" r="5" fill="#06b6d4" opacity="0.8">
        <animate attributeName="cy" values="130;140;130" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="220" cy="170" r="5" fill="#06b6d4" opacity="0.8">
        <animate attributeName="cy" values="170;160;170" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="400" cy="130" r="5" fill="#f59e0b" opacity="0.8">
        <animate attributeName="cy" values="130;140;130" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="420" cy="170" r="5" fill="#f59e0b" opacity="0.8">
        <animate attributeName="cy" values="170;160;170" dur="2s" repeatCount="indefinite" />
      </circle>
      {/* Definitions */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#7e22ce" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#6366f1" />
        </marker>
      </defs>
    </svg>;
};
export default SystemFlowSVG;
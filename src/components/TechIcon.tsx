import React from "react";
import { Code2, Gauge } from "lucide-react";

interface TechIconProps {
  name: string;
  className?: string;
}

const iconMap: Record<string, string | React.ElementType> = {
  "react": "https://skillicons.dev/icons?i=react",
  "react.js": "https://skillicons.dev/icons?i=react",
  "next.js": "https://skillicons.dev/icons?i=nextjs",
  "next": "https://skillicons.dev/icons?i=nextjs",
  "tailwind": "https://skillicons.dev/icons?i=tailwind",
  "tailwindcss": "https://skillicons.dev/icons?i=tailwind",
  "node.js": "https://skillicons.dev/icons?i=nodejs",
  "node": "https://skillicons.dev/icons?i=nodejs",
  "express.js": "https://cdn.simpleicons.org/express/white",
  "express": "https://cdn.simpleicons.org/express/white",
  "mongodb": "https://skillicons.dev/icons?i=mongodb",
  "html": "https://skillicons.dev/icons?i=html",
  "html5": "https://skillicons.dev/icons?i=html",
  "css": "https://skillicons.dev/icons?i=css",
  "css3": "https://skillicons.dev/icons?i=css",
  "javascript": "https://skillicons.dev/icons?i=js",
  "js": "https://skillicons.dev/icons?i=js",
  "typescript": "https://skillicons.dev/icons?i=ts",
  "ts": "https://skillicons.dev/icons?i=ts",
  "websockets": "https://cdn.simpleicons.org/socketdotio/white",
  "socket.io": "https://cdn.simpleicons.org/socketdotio/white",
  "socketio": "https://cdn.simpleicons.org/socketdotio/white",
  "rest apis": "https://skillicons.dev/icons?i=postman",
  "api": "https://skillicons.dev/icons?i=postman",
  "framer motion": "https://skillicons.dev/icons?i=framer",
  "performance optimization": Gauge,
  "optimization": Gauge,
};

export default function TechIcon({ name, className = "w-4 h-4" }: TechIconProps) {
  const IconData = iconMap[name.toLowerCase()];
  
  if (!IconData) {
    return <Code2 className={className} />;
  }
  
  if (typeof IconData === 'string') {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img 
        src={IconData} 
        alt={name} 
        className={`${className} object-contain`}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
    );
  }

  const Icon = IconData;
  return <Icon className={`${className} text-accent`} />;
}

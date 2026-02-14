"use client";

interface MobileScreenProps {
  children: React.ReactNode;
  className?: string;
}

export function MobileScreen({ children, className = "" }: MobileScreenProps) {
  return (
    <div className={`relative mx-auto ${className}`}>
      {/* Phone Frame */}
      <div className="relative w-[285px] rounded-[3rem] border-[6px] border-gray-800 bg-gray-900 p-2 shadow-2xl">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-gray-900"></div>
        
        {/* Status Bar Area */}
        <div className="absolute left-1/2 top-2 z-10 flex -translate-x-1/2 items-center gap-1 text-[10px] text-white">
          <span>9:41</span>
          <div className="ml-2 flex gap-0.5">
            <div className="h-1 w-1 rounded-full bg-white"></div>
            <div className="h-1 w-1 rounded-full bg-white"></div>
            <div className="h-1 w-1 rounded-full bg-white"></div>
            <div className="h-1 w-1 rounded-full bg-white"></div>
          </div>
        </div>
        
        {/* Screen */}
        <div className="mt-8 rounded-[2rem] bg-white p-1">
          <div className="min-h-[500px] overflow-y-auto rounded-[1.75rem] bg-background p-4">
            {children}
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-1 w-32 rounded-full bg-gray-700"></div>
      </div>
    </div>
  );
}

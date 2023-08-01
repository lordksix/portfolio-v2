'use client';

import { ReactNode } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export default function Tooltipsimple({
  children,
  content,
}: {
  children: ReactNode;
  content: ReactNode | string;
}) {
  return (
    <TooltipPrimitive.Provider delayDuration={100}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger className="inline-flex" asChild>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          sideOffset={4}
          side="top"
          className="z-30 items-center block overflow-hidden bg-white border border-gray-200 rounded-md animate-slide-up-fade drop-shadow-lg"
        >
          <TooltipPrimitive.Arrow className="text-white fill-current" />
          {typeof content === "string" ? (
            <div className="p-2">
              <span className="block max-w-xs text-sm text-center text-gray-700">
                {content}
              </span>
            </div>
          ) : (
            content
          )}
          <TooltipPrimitive.Arrow className="text-white fill-current" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

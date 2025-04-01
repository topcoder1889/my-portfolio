"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";
import * as React from "react";
import { Button, ButtonHandle } from "@progress/kendo-react-buttons";
import { arrowsMoveIcon } from "@progress/kendo-svg-icons";

import {
  useDraggable,
  SvgIcon,
  NormalizedDragEvent,
} from "@progress/kendo-react-common";

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSpanProps) => (
  <motion.div
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: delay / 1000 }}
    className={cn("grid sm:text-sm text-xs font-normal tracking-tight ", className)}
    {...props}
  >
    {children}
  </motion.div>
);

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
}

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  ...props
}: TypingAnimationProps) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string. Received:");
  }

  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
};

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
  setTerminalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isTerminalOpen?: boolean;
}

export const Terminal = ({
  children,
  className,
  setTerminalOpen,
  isTerminalOpen,
}: TerminalProps) => {
  const preRef = useRef<HTMLPreElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [pressed, setPressed] = React.useState<boolean>(false);
  const [dragged, setDragged] = React.useState<boolean>(false);
  const [initial, setInitial] = React.useState<{ x: number; y: number } | null>(
    null
  );
  const dragHandle = React.useRef<HTMLDivElement | null>(null);

  const handlePress = React.useCallback(() => {
    setPressed(true);
  }, []);

  const handleDragStart = React.useCallback(
    (event: NormalizedDragEvent) => {
      setDragged(true);
      setInitial({
        x: event.clientX - position.x,
        y: event.clientY - position.y,
      });
    },
    [position.x, position.y]
  );

  const handleDrag = React.useCallback(
    (event: NormalizedDragEvent) => {
      if (!initial) {
        return;
      }

      setPosition({
        x: event.clientX - initial.x,
        y: event.clientY - initial.y,
      });
    },
    [initial]
  );

  const handleDragEnd = React.useCallback(() => {
    setDragged(false);
    setInitial(null);
  }, []);

  const handleRelease = React.useCallback(() => {
    setPressed(false);
  }, []);

  useDraggable(dragHandle, {
    onPress: handlePress,
    onDragStart: handleDragStart,
    onDrag: handleDrag,
    onDragEnd: handleDragEnd,
    onRelease: handleRelease,
  });

  useEffect(() => {
    const initialScrollTimeout = setTimeout(() => {
      const intervalId = setInterval(() => {
        if (preRef.current) {
          const { scrollHeight, scrollTop, clientHeight } = preRef.current;
          const isAtBottom = scrollHeight - scrollTop === clientHeight;
          if (!isAtBottom) {
            preRef.current.scrollTo({
              top: preRef.current.scrollHeight,
              behavior: "smooth",
            });
          }
          return () => {
            clearInterval(intervalId);
          };
        }
      }, 2000);
    }, 7000);

    return () => {
      clearTimeout(initialScrollTimeout);
    };
  }, [children]);

  // Calculate center position on mount and window resize
  useEffect(() => {
    const calculateCenter = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const elementWidth = width < 640 ? 300 : 512; // 300px for mobile, 512px for desktop
      const elementHeight = width < 640 ? 500 : 700; // 200px for mobile, 700px for desktop
      
      const centerX = (width - elementWidth) / 2;
      const centerY = (height - elementHeight) / 2;
      
      setPosition({ x: centerX, y: centerY });
    };

    calculateCenter();
    window.addEventListener('resize', calculateCenter);
    return () => window.removeEventListener('resize', calculateCenter);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        userSelect: "none",
      }}
      className={cn(
        "z-0 h-[500px] sm:w-full w-[300px] mx-auto sm:mx-0 text-sm sm:max-w-lg rounded-xl border border-border bg-background",
        className
      )}
    >
      <div
        ref={dragHandle}
        className="flex flex-col gap-y-2 border-b border-border p-4 cursor-pointer"
      >
        <div className="flex flex-row gap-x-2">
          <div
            className="h-3 w-3 rounded-full bg-red-500 cursor-pointer"
            onClick={() => setTerminalOpen && setTerminalOpen(!isTerminalOpen)}
          ></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500 cursor-pointer"></div>
          <div className="h-3 w-3 rounded-full bg-green-500 cursor-pointer"></div>
        </div>
      </div>
      <pre ref={preRef} className="p-4 h-[450px] overflow-y-auto scroll-smooth sm:overflow-x-hidden overflow-visible whitespace-pre-wrap break-words">
        <code className="grid gap-y-1 px-3 text-xs sm:text-base ">{children}</code>
      </pre>
    </div>
  );
};

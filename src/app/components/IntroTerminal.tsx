import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import { Input } from "@/components/ui/input";
import { useEffect, useRef } from "react";
interface TerminalDemoProps {
  setTerminalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isTerminalOpen?: boolean;
}

export function TerminalDemo({
  setTerminalOpen,
  isTerminalOpen,
}: TerminalDemoProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const focusInput = () => inputRef.current?.focus();
    focusInput();
    inputRef.current?.addEventListener("blur", focusInput);
    return () => {
      inputRef.current?.removeEventListener("blur", focusInput);
    };
  }, []);
  return (
    <Terminal setTerminalOpen={setTerminalOpen} isTerminalOpen={isTerminalOpen}>
      <TypingAnimation>
        &gt; sudo find awesome-developer --location "Melbourne - Australia"
      </TypingAnimation>

      <AnimatedSpan delay={3900} className="text-yellow-500">
        <span>🔍 Developer found! Initializing Quang Huy.exe...</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4900} className="text-green-500">
        <span>🎮 Loading player stats:</span>
        <span className="pl-2">- Level 21 Full-Stack Developer</span>
        <span className="pl-2">- Class: Code Wizard 🧙‍♂️</span>
        <span className="pl-2">
          - Special Power: Turning coffee into code ☕
        </span>
      </AnimatedSpan>

      <AnimatedSpan delay={5900} className="text-blue-500">
        <span>📚 Education Quest Progress:</span>
        <span className="pl-2">- Swinburne University: 75% completed</span>
        <span className="pl-2">- Achievement Unlocked: GPA 3.65 🌟</span>
      </AnimatedSpan>

      <AnimatedSpan delay={6900} className="text-purple-500">
        <span>🎯 Skill Tree Unlocked:</span>
        <span className="pl-2">- Next.js Ninja 🥷</span>
        <span className="pl-2">- TypeScript Tamer 🐯</span>
        <span className="pl-2">- CSS Sorcerer 🔮</span>
        <span className="pl-2">- Database Whisperer 🗃️</span>
      </AnimatedSpan>

      <AnimatedSpan delay={7900} className="text-yellow-500">
        <span>🏆 Side Quest Achievements:</span>
        <span className="pl-2">
          - Survived International Science Fair Boss Battle
        </span>
        <span className="pl-2">- Defeated Vietnam Science Fair Final Boss</span>
        <span className="pl-2">- Earned "Emerging Leader" Badge</span>
      </AnimatedSpan>

      <AnimatedSpan delay={8900} className="text-green-500">
        <span>🚀 Prev Mission:</span>
        <span className="pl-2">
          Crafting digital wonders @ Lyra Technologies
        </span>
        <span className="pl-2">Status: Turning bugs into features</span>
      </AnimatedSpan>

      <AnimatedSpan delay={9900} className="text-red-500">
        <span>⚠️ WARNING: High levels of creativity detected!</span>
        <span className="pl-2">Side effects may include: </span>
        <span className="pl-2">- Spontaneous problem-solving</span>
        <span className="pl-2">- Excessive innovation</span>
        <span className="pl-2">- Uncontrollable desire to optimize code</span>
      </AnimatedSpan>

      <TypingAnimation
        delay={10900}
        className="text-muted-foreground whitespace-pre-wrap break-words"
      >
        Player profile loaded! Ready to tackle new coding adventures...
      </TypingAnimation>

      <TypingAnimation
        delay={15000}
        className="text-muted-foreground whitespace-pre-wrap break-words"
      >
        Type 'hire --dev quanghuy --mode beast' to recruit this legendary
        developer...
      </TypingAnimation>
      {/* <code>
        <Input
          ref={inputRef}
          className="border-none p-0 caret-black cursor-default"
          autoFocus
        />
      </code> */}
    </Terminal>
  );
}

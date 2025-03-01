import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from "@/components";
import { FC, ReactNode } from "react";

type ISpeechBubbleProps = {
  message: string;
  trigger: ReactNode;
  side?: "top" | "bottom" | "left" | "right";
};

export const SpeechBubble: FC<ISpeechBubbleProps> = ({
  message,
  trigger,
  side = "top",
}) => {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger>{trigger}</TooltipTrigger>
        <TooltipContent
          side={side}
          className="rounded-lg border border-gray-500 bg-gray-800/90 px-4 py-2 text-sm text-white shadow-xl transition-opacity duration-300"
        >
          <TooltipArrow className="fill-gray-500" />
          <div className="relative group w-full max-w-[250px] sm:w-fit">
            <p className="text-base font-medium">{message}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

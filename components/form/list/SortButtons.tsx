import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown } from "lucide-react";

interface SortButtonsProps {
  index: number;
  totalCount: number;
  onMove: (from: number, to: number) => void;
}

export function SortButtons({ index, totalCount, onMove }: SortButtonsProps) {
  if (totalCount <= 1) return null;

  return (
    <div className="ml-auto flex items-center gap-1">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        disabled={index === 0}
        onClick={() => onMove(index, index - 1)}
        title="Move Up"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        disabled={index === totalCount - 1}
        onClick={() => onMove(index, index + 1)}
        title="Move Down"
      >
        <ArrowDown className="h-4 w-4" />
      </Button>
    </div>
  );
}

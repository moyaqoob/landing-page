import { useCallback, useEffect, useRef, useState, type ReactElement } from "react";
import {ArrowBigLeft, ArrowBigRight, ArrowLeftSquare, ArrowRightSquare} from "lucide-react"
type SlideShowProps = {
  slides: ReactElement[]; // accept React elements, not just images
  interval?: number;
  height?: string | number;
};

export default function SlideShow({
  slides,
  interval = 4000,
  height = 400,
}: SlideShowProps) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // autoplay
//   useEffect(()=>{
//     if (timerRef.current) clearTimeout(timerRef.current);
//     timerRef.current = window.setTimeout(next, interval);
//     return () => timerRef.current && clearTimeout(timerRef.current);
//   }, [index, next, interval]);

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  // swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(diff) > 50) diff > 0 ? prev() : next();
    touchStartX.current = null;
  };

  return (
    <div
      className="relative overflow-hidden "
      onMouseEnter={handleMouseEnter}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 mx-2 h-[1000px]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-full flex-shrink-0 h-full">
            {slide}
          </div>
        ))}
      </div>

      {/* Prev */}
      <span
        onClick={prev}
        aria-label="Previous"
        className="absolute top-1/3 -left-3 -translate-y-1/2   px-3 py-2 rounded-full"
      >
       <ArrowLeftSquare width={30} height={25} />
      </span>

      {/* Next */}
      <span
        onClick={next}
        aria-label="Next"
        className="absolute top-1/3 right-2 -translate-y-1/2  px-3 py-2 rounded-full"
      >
       <ArrowRightSquare  />
      </span>

      <div className="absolute flex gap-2 bottom-32 left-1/2 -translate-x-1/3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full  transition ${
              i === index ? "bg-white" : "bg-white/50  hover:bg-orange-600/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

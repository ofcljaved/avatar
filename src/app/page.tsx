'use client';

import { getUniqueRandomArray } from "@/lib/unique-ramdom-array";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const count = 8;
  const imageIds = getUniqueRandomArray(count);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="grid h-full place-items-center">
      <ul className={cn(
        "grid transition-all duration-500 ease-in-out delay-300 hover:delay-0",
        `[--avatar-size:100px] [--col-size:calc(var(--avatar-size)/1.5)] [--count:${count}]`,
        "grid-cols-[repeat(8,var(--col-size))]",
        "hover:[--col-size:calc(var(--avatar-size)/1.4)]",
      )}>
        {imageIds.map((id) => (
          <li
            key={id}
            className={cn(
              "rounded-full border-5 border-background overflow-hidden w-(--avatar-size) aspect-square transition-all duration-500 ease-in-out",
              "hover:scale-150 [&:hover+*]:scale-120 has-[+*:hover]:scale-120",
              "hover:z-20 [&:hover+*]:z-10 has-[+*:hover]:z-10",
              "delay-100 hover:delay-0",
            )}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Image
              key={id}
              src={`https://i.pravatar.cc/200?img=${id}`}
              width={200}
              height={200}
              alt={`Avatar ${id}`}
              className="aspect-square object-cover"
            />
            <AnimatePresence>
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </section>
  );
}

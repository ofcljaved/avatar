'use client';

import { AvatarTitle } from "@/components/avatar-title";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";


export function Avatar({ id }: { id: number }) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <li
      key={id}
      className={cn(
        "rounded-full border-5 border-background w-(--avatar-size) aspect-square transition-all duration-500 ease-in-out",
        "hover:scale-150 [&:hover+*]:scale-120 has-[+*:hover]:scale-120",
        "hover:z-20 [&:hover+*]:z-10 has-[+*:hover]:z-10",
        "delay-100 hover:delay-0",
      )}
      onMouseEnter={() => setHoveredId(id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      <Image
        priority={true}
        key={id}
        src={`https://i.pravatar.cc/200?img=${id}`}
        width={200}
        height={200}
        alt={`Avatar ${id}`}
        className="aspect-square object-cover w-(--avatar-size) rounded-full"
      />
      <AvatarTitle id={id} hoveredId={hoveredId} />
    </li>
  );
}


'use client';

import { AvatarTitle } from "@/components/avatar-title";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export function Avatar({ id }: { id: number }) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <li
      className={cn(
        "rounded-full border-5 border-background w-(--avatar-size) aspect-square transition-all duration-500 ease-in-out",
        "hover:scale-150 [&:hover+*]:scale-120 has-[+*:hover]:scale-120",
        "hover:z-20 [&:hover+*]:z-10 has-[+*:hover]:z-10",
        "delay-100 hover:delay-0",
      )}
      role="listitem"
      onMouseEnter={() => setHoveredId(id)}
      onMouseLeave={() => setHoveredId(null)}
      onFocus={() => setHoveredId(id)}
      onBlur={() => setHoveredId(null)}
      tabIndex={0}
      aria-label={`Avatar ${id} - Click or press Enter to view details`}
    >
      <Image
        priority={true}
        src={`https://i.pravatar.cc/200?img=${id}`}
        width={200}
        height={200}
        alt={`Profile picture for user ${id}`}
        className="aspect-square object-cover w-(--avatar-size) rounded-full"
        role="img"
        aria-hidden="true"
      />
      <AvatarTitle id={id} hoveredId={hoveredId} />
    </li>
  );
}


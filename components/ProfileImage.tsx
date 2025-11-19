"use client";

import Image from "next/image";
import { useState } from "react";

interface ProfileImageProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
}

export function ProfileImage({
  imageUrl,
  firstName,
  lastName,
}: ProfileImageProps) {
  const [_isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      className="relative aspect-square rounded-2xl overflow-hidden border-4 border-primary/20 block group cursor-pointer w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Toggle AI Chat Sidebar"
    >
      <Image
        src={imageUrl}
        alt={`${firstName} ${lastName}`}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        priority
      />
    </button>
  );
}

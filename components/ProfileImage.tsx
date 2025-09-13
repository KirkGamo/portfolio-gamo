'use client'

import React from 'react'

interface ProfileImageProps {
  src: string
  alt: string
  className?: string
}

export const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        // Fallback to a placeholder if image doesn't exist
        e.currentTarget.src = "https://via.placeholder.com/400x400/6366f1/ffffff?text=KG"
      }}
    />
  )
}

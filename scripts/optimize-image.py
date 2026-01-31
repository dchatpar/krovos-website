#!/usr/bin/env python3
from PIL import Image
import sys
import os

def optimize_image(image_path, max_width=2560, quality=85):
    """Optimize images by resizing and converting to WebP."""
    try:
        img = Image.open(image_path)
        
        if img.mode == 'RGBA':
            background = Image.new('RGB', img.size, (255, 255, 255))
            background.paste(img, mask=img.split()[3])
            img = background
        
        if img.width > max_width:
            ratio = max_width / img.width
            new_height = int(img.height * ratio)
            img = img.resize((max_width, new_height), Image.LANCZOS)
        
        img.save(image_path, 'JPEG', quality=quality, optimize=True, progressive=True)
        
        webp_path = os.path.splitext(image_path)[0] + '.webp'
        img.save(webp_path, 'WEBP', quality=quality, method=6)
        
        print(f"Optimized: {image_path}")
        return True
        
    except Exception as e:
        print(f"Error optimizing {image_path}: {e}")
        return False

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python optimize-image.py <image_path>")
        sys.exit(1)
    
    optimize_image(sys.argv[1])
#!/usr/bin/env python3
import cv2
import numpy as np
import sys
import os

def detect_watermark(image_path):
    """Detect watermarks in images using edge detection and corner analysis."""
    try:
        img = cv2.imread(image_path)
        if img is None:
            print(f"Error: Could not read image {image_path}")
            return False
        
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        
        edges = cv2.Canny(gray, 100, 200)
        edge_density = np.sum(edges > 0) / edges.size
        
        h, w = gray.shape
        corners = [
            gray[0:int(h*0.1), 0:int(w*0.3)],
            gray[0:int(h*0.1), int(w*0.7):w],
            gray[int(h*0.9):h, 0:int(w*0.3)],
            gray[int(h*0.9):h, int(w*0.7):w],
        ]
        corner_density = sum(np.std(corner) > 50 for corner in corners)
        
        has_watermark = edge_density > 0.15 or corner_density >= 2
        
        if has_watermark:
            rejected_dir = os.path.join(os.path.dirname(image_path), '_rejected')
            os.makedirs(rejected_dir, exist_ok=True)
            new_path = os.path.join(rejected_dir, os.path.basename(image_path))
            os.rename(image_path, new_path)
            print(f"Watermark detected: Moved {image_path} to {new_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {image_path}: {e}")
        return False

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python watermark-check.py <image_path>")
        sys.exit(1)
    
    image_path = sys.argv[1]
    if detect_watermark(image_path):
        sys.exit(1)
    sys.exit(0)
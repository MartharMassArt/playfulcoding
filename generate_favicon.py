#!/usr/bin/env python3
import subprocess
import os
from pathlib import Path

def generate_favicon():
    """Generate favicon.ico from SVG using ImageMagick"""
    
    svg_path = Path("src/app/icon.svg")
    ico_path = Path("src/app/favicon.ico")
    
    if not svg_path.exists():
        print(f"Error: {svg_path} not found")
        return False
    
    # Try using ImageMagick's convert command
    try:
        # Generate multiple sizes for the ICO file
        sizes = ["16x16", "32x32", "48x48", "64x64"]
        png_files = []
        
        for size in sizes:
            png_file = f"/tmp/favicon_{size}.png"
            png_files.append(png_file)
            
            # Convert SVG to PNG at specific size
            cmd = [
                "convert",
                "-background", "none",
                "-resize", size,
                str(svg_path),
                png_file
            ]
            subprocess.run(cmd, check=True, capture_output=True)
            print(f"Generated {size} PNG")
        
        # Combine PNGs into ICO
        cmd = ["convert"] + png_files + [str(ico_path)]
        subprocess.run(cmd, check=True, capture_output=True)
        
        # Clean up temporary files
        for png_file in png_files:
            os.remove(png_file)
        
        print(f"Successfully generated {ico_path}")
        return True
        
    except subprocess.CalledProcessError as e:
        print(f"ImageMagick error: {e}")
        return False
    
    except FileNotFoundError:
        print("ImageMagick not found. Please install it:")
        print("  brew install imagemagick")
        return False

if __name__ == "__main__":
    generate_favicon()
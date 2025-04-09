#!/bin/bash

# Create the images directory if it doesn't exist
mkdir -p public/images

# Clear existing images 
rm -f public/images/*.jpg

# Download high-quality royalty-free images
echo "Downloading hero-tennis.jpg..."
curl -s -L "https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?q=80&w=1800&auto=format&fit=crop" -o "public/images/hero-tennis.jpg"

echo "Downloading club-house.jpg..."
curl -s -L "https://images.unsplash.com/photo-1620735692151-26a8233877b6?q=80&w=1600&auto=format&fit=crop" -o "public/images/club-house.jpg"

echo "Downloading tennis-courts.jpg..."
curl -s -L "https://images.unsplash.com/photo-1526307616774-60d0098f7642?q=80&w=1600&auto=format&fit=crop" -o "public/images/tennis-courts.jpg"

echo "Downloading squash-courts.jpg..."
curl -s -L "https://images.pexels.com/photos/6121074/pexels-photo-6121074.jpeg?w=1600&auto=format&fit=crop" -o "public/images/squash-courts.jpg"

echo "Downloading clubhouse-interior.jpg..."
curl -s -L "https://images.unsplash.com/photo-1584653059760-b5b02d81c3c3?q=80&w=1600&auto=format&fit=crop" -o "public/images/clubhouse-interior.jpg"

echo "Downloading tennis-courts-wide.jpg..."
curl -s -L "https://images.unsplash.com/photo-1533561052604-c3beb1a4bb42?q=80&w=1800&auto=format&fit=crop" -o "public/images/tennis-courts-wide.jpg"

echo "Downloading tennis-coaching.jpg..."
curl -s -L "https://images.unsplash.com/photo-1590171602045-a0d11b0b4b6a?q=80&w=1600&auto=format&fit=crop" -o "public/images/tennis-coaching.jpg"

echo "Downloading tennis-coach.jpg..."
curl -s -L "https://images.unsplash.com/photo-1627149533428-d435ab89b35c?q=80&w=1600&auto=format&fit=crop" -o "public/images/tennis-coach.jpg"

echo "Downloading junior-tennis.jpg..."
curl -s -L "https://images.unsplash.com/photo-1551773188-0801e8dd1c48?q=80&w=1600&auto=format&fit=crop" -o "public/images/junior-tennis.jpg"

echo "Downloading adult-tennis.jpg..."
curl -s -L "https://images.unsplash.com/photo-1647637658942-315e21941bc5?q=80&w=1600&auto=format&fit=crop" -o "public/images/adult-tennis.jpg"

echo "Downloading private-coaching.jpg..."
curl -s -L "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1600&auto=format&fit=crop" -o "public/images/private-coaching.jpg"

echo "Downloading coach-1.jpg..."
curl -s -L "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1600&auto=format&fit=crop" -o "public/images/coach-1.jpg"

echo "Downloading coach-2.jpg..."
curl -s -L "https://images.unsplash.com/photo-1507398941835-3c827a4ab889?q=80&w=1600&auto=format&fit=crop" -o "public/images/coach-2.jpg"

echo "Downloading coach-3.jpg..."
curl -s -L "https://images.unsplash.com/photo-1628891890377-57dba2715fdd?q=80&w=1600&auto=format&fit=crop" -o "public/images/coach-3.jpg"

echo "Downloading news-1.jpg..."
curl -s -L "https://images.unsplash.com/photo-1622279488067-a1cd992fcd2c?q=80&w=1600&auto=format&fit=crop" -o "public/images/news-1.jpg"

echo "Downloading news-2.jpg..."
curl -s -L "https://images.unsplash.com/photo-1600679472489-3c397b0e976c?q=80&w=1600&auto=format&fit=crop" -o "public/images/news-2.jpg"

echo "Downloading news-3.jpg..."
curl -s -L "https://images.unsplash.com/photo-1629901925121-8a141c2a42fa?q=80&w=1600&auto=format&fit=crop" -o "public/images/news-3.jpg"

# Verify downloaded images
echo "Verifying images..."
for image in public/images/*.jpg; do
  if [ -s "$image" ]; then
    echo "✅ $(basename "$image") downloaded successfully"
  else
    echo "❌ Failed to download $(basename "$image")"
  fi
done

echo "All downloads completed." 
#!/bin/bash

# Create the images directory if it doesn't exist
mkdir -p public/images

# List of required images
IMAGES=(
  "hero-tennis.jpg"
  "club-house.jpg"
  "tennis-courts.jpg"
  "squash-courts.jpg"
  "clubhouse-interior.jpg"
  "tennis-courts-wide.jpg"
  "tennis-coaching.jpg"
  "tennis-coach.jpg"
  "junior-tennis.jpg"
  "adult-tennis.jpg"
  "private-coaching.jpg"
  "coach-1.jpg"
  "coach-2.jpg"
  "coach-3.jpg"
  "news-1.jpg"
  "news-2.jpg"
  "news-3.jpg"
)

# Download placeholder images
for img in "${IMAGES[@]}"
do
  # Extract the name without extension
  name="${img%.*}"
  
  # Create a caption based on the filename
  caption="${name//-/ }"
  
  # Generate a placeholder image with caption
  echo "Creating $img..."
  curl -s "https://via.placeholder.com/1200x800/305742/FFFFFF?text=Grafton+${caption}" > "public/images/$img"
done

echo "All images created successfully in public/images/" 
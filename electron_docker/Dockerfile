FROM node:20-bullseye

# Install Wine for Windows builds
RUN dpkg --add-architecture i386 \
  && apt-get update \
  && apt-get install -y --no-install-recommends \
    wine64 \
    wine32 \
    libfuse2 \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY ../ .

# Install dependencies
RUN npm install

# Build for Windows and Linux
CMD ["npm", "run", "build:win", "&&", "npm", "run", "build:linux"]
# Base Image
FROM python:3.13-slim

# Prevent Python from writing .pyc files
ENV PYTHONDONTWRITEBYTECODE=1

# Ensure Python output is sent straight to the terminal
ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /app

# Copy dependency file first (better Docker layer caching)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application source
COPY src/ ./src/

# Expose application port
EXPOSE 5000

# Start the application
CMD ["python", "src/app.py"]
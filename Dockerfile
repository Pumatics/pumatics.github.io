FROM ruby:3.2

# Install essential Linux packages
RUN apt-get update -qq && apt-get install -y nodejs

# Set working directory
WORKDIR /app

# Copy Gemfile and Gemfile.lock
COPY Gemfile Gemfile.lock ./

# Install dependencies
RUN bundle install

# Copy the rest of the application
COPY . .

# Expose port 4000
EXPOSE 4000

# Start the server
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"] 
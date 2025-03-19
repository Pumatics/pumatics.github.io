source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Add these gems to resolve the warnings:
gem 'bigdecimal'
gem 'faraday-retry'
gem 'wdm', '>= 0.1.0' if Gem.win_platform?
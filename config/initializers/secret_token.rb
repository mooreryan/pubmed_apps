# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
PubmedApps::Application.config.secret_key_base = 'c48d5f060c2bf3e16a79bc7284f3b15fa906f010fd08cc97957a92af7c803028fb20acd3aebfe751faae6d29224062f75b32aab57fbcfc0d7c5fa977fcf57f74'

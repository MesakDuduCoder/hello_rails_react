greetings = [
  "Hello, world!",
  "Welcome to our application!",
  "Good morning, everyone!",
  "Greetings from our team!",
  "Have a great day!"
]

greetings.each do |greeting|
  Message.create(content: greeting)
end

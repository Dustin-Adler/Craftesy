# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all 
Product.delete_all 

DemoUser = User.create({
    email: 'demo@account.id',
    password: 'password',
    first_name: 'Demo'
})

product1 = Product.create({
    name: "Deku Stick",
    description: "Wooden stick used as a torch, be careful you don't get burned",
    price: 3.00,
    seller_id: 1,
})
img1 = URI.open("https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/deku-stick.png")
product1.images.attach(io: img1, filename: 'deku-stick.png')

product2 = Product.create({
    name: 'Fire Arrow',
    description: 'An arrow that is set ablaze to shoot at enemies',
    price: 6.00,
    seller_id: 1,
})
img2 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/fire-arrow.png')
product2.images.attach(io: img2, filename: 'fire-arrow.png')

product3 = Product.create({
    name: 'Hylian Shield',
    description: 'Be as cool as a knight of Hyrule with this sheild! It\'s dangerous to go alone',
    price: 7.00,
    seller_id: 1,
})
img3 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/hylianshield.jpg')
product3.images.attach(io: img3, filename: 'hylianshield.jpg')

product4 = Product.create({
    name: 'Heart Container',
    description: 'Gives you life, Literally',
    price: 8.00,
    seller_id: 1,
})
img4 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/zelda-heart-container.jpg')
product4.images.attach(io: img4, filename: 'kWWUepAMRFycKakBGYyqQ39A')

product5 = Product.create({
    name: 'Star',
    description: 'Flashing star that makes invisible and you go fast',
    price: 6.00,
    seller_id: 1,
})
img5 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/mario-star.jpg')
product5.images.attach(io: img5, filename: 'mario-star.jpg')

product6 = Product.create({
    name: 'Ocarina',
    description: 'An instrument used for music, you may travel through time',
    price: 20.00,
    seller_id: 1,
})
img6 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/ocarina.png')
product6.images.attach(io: img6, filename: 'ocarina.png')

product7 = Product.create({
    name: 'Mushroom',
    description: 'Makes you grow into Super Mario, like regular Mario wasn\'t cool enough',
    price: 3.00,
    seller_id: 1,
})
img7 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/mario-mushroom.jpg')
product7.images.attach(io: img7, filename: 'mario-mushroom.jpg')

product8 = Product.create({
    name: 'Fire Flower',
    description: 'Let\'s you spit fire balls, kinda of like a dragon',
    price: 7.00,
    seller_id: 1,
})
img8 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/fireflower.png')
product8.images.attach(io: img8, filename: 'fireflower.png')

product9 = Product.create({
    name: 'Warp Whistle',
    description: 'Lets you travel, like Dorothy in Wizard of Oz style',
    price: 20.00,
    seller_id: 1,
})
img9 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/super-mario-bros-warp-whistle.jpg')
product9.images.attach(io: img9, filename: 'super-mario-bros-warp-whistle.jpg')

product10 = Product.create({
    name: 'Frog Suit',
    description: 'Turns you into a frog to swim in the water, when you look that cute why would you ever take it off?',
    price: 8.00,
    seller_id: 1,
})
img10 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/frog-suit.jpg')
product10.images.attach(io: img10, filename: 'frog-suit.jpg')

product11 = Product.create({
    name: 'Phoenix Down',
    description: 'Did you get knocked down fighting that boss?  Use this to revive',
    price: 6.00,
    seller_id: 1,
})
img11a = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/pheonix-down1.png')
img11b = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/phoenix-down2.jpg')
img11c = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/phoenix-down3.png')
product11.images.attach(io: img11a, filename: 'pheonix-down1.png')
product11.images.attach(io: img11b, filename: 'pheonix-down2.png')
product11.images.attach(io: img11c, filename: 'pheonix-down3.png')

product12 = Product.create({
    name: 'Cloud\'s Buster Sword',
    description: 'Look like a lesser version of Cloud with this',
    price: 8.00,
    seller_id: 1,
})
img12 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/clouds-buster-sword.png')
product12.images.attach(io: img12, filename: 'clouds-buster-sword.png')

product13 = Product.create({
    name: 'Ultima Materia',
    description: 'Want to feel like a genie? This is the most powerful spell in the game',
    price: 10.00,
    seller_id: 1,
})
img13 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/ffvii-ultima.png')
product13.images.attach(io: img13, filename: 'ffvii-ultima.png')

product14 = Product.create({
    name: 'Knights of the Round',
    description: 'Feel like an actual Knight of the Round table like Arthur with this Summon',
    price: 20.00,
    seller_id: 1,
})
img14 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/knights-of-the-round-ffvii.png')
product14.images.attach(io: img14, filename: 'knights-of-the-round-ffvii.png')

product15 = Product.create({
    name: 'Chocobo ',
    description: 'Fighting one is the equivelant to fighting a goose',
    price: 3.00,
    seller_id: 1,
})
img15 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/chocobo.png')
product15.images.attach(io: img15, filename: 'chocobo.png')

product16 = Product.create({
    name: 'Masterball',
    description: 'If you\'re smart you\'ll save this for the end',
    price: 20.00,
    seller_id: 1,
})
img16 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/masterball.png')
product16.images.attach(io: img16, filename: 'masterball.png')

product17 = Product.create({
    name: '"Lucky" Magikarp',
    description: 'Team Rockets\'s real foe...they were always "lucky" weren\'t they?',
    price: 7.00,
    seller_id: 1,
})
img17 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/magikarp.png')
product17.images.attach(io: img17, filename: 'magikarp.png')

product18 = Product.create({
    name: 'Potion',
    description: 'Don\'t get frustrated when your pokemon is damaged, top it off with this!',
    price: 3.00,
    seller_id: 1,
})
img18 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/potion.jpg')
product18.images.attach(io: img18, filename: 'potion.jpg')

product19 = Product.create({
    name: 'Thunderstone',
    description: 'Did you buy a pikachu? Evolve him with this',
    price: 8.00,
    seller_id: 1,
})
img19a = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/thunderstone1.png')
img19b = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/thunderstone2.png')
product19.images.attach(io: img19a, filename: 'thunderstone1.png')
product19.images.attach(io: img19b, filename: 'thunderstone2.png')

product20 = Product.create({
    name: 'Pikachu',
    description: 'Your favorite pokemon, don\'t lie',
    price: 6.00,
    seller_id: 1,
})
img20 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/pikachu.jpg')
product20.images.attach(io: img20, filename: 'pikachu.jpg')

product21 = Product.create({
    name: 'Trinity Force',
    description: 'Has the most stats for a reason...don\'t skip out on this',
    price: 5.00,
    seller_id: 1,
})
img21 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/tri-force.png')
product21.images.attach(io: img21, filename: 'tri-force.png')

product22 = Product.create({
    name: 'Cape Feather',
    description: 'It\'s a bird it\'s a plane... it\'s a plumber ???',
    price: 5.00,
    seller_id: 1,
})
img22a = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/super-cape-feather-mario.png')
img22b = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/cape-feather-mario.jpg')
product22.images.attach(io: img22a, filename: 'super-cape-feather-mario.png')
product22.images.attach(io: img22b, filename: 'cape-feather-mario.jpg')

product23 = Product.create({
    name: 'Heart of Gold',
    description: 'This Overpowered item was removed from the game, but it\'s still a fun momento to have!',
    price: 20.00,
    seller_id: 1,
})
img23 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/heart-of-gold.jpg')
product23.images.attach(io: img23, filename: 'heart-of-gold.jpg')

product24 = Product.create({
    name: 'Kraken Slayer',
    description: 'Cut down your foes with this, you know what they say? Release the Kraken',
    price: 7.00,
    seller_id: 1,
})
img24 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/kraken-slayer.png')
product24.images.attach(io: img24, filename: 'kraken-slayer.png')

product25 = Product.create({
    name: 'Bloodthirster',
    description: 'Shield, Heal, and taste your enemies fear with this item. Unless that\'s too EWWEY...',
    price: 8.00,
    seller_id: 1,
})
img25 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/bloodthirster.jpg')
product25.images.attach(io: img25, filename: 'bloodthirster.jpg')

product26 = Product.create({
    name: 'Rabadon\'s Death Cap',
    description: 'Play AP?  This is a must have item',
    price: 10.00,
    seller_id: 1,
})
img26 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/rabadons-deathcap.png')
product26.images.attach(io: img26, filename: 'rabadons-deathcap.png')

product27 = Product.create({
    name: 'Furry Woodland Creatures',
    description: 'The cute creatures that Dr. Robotnik takes for his evil bidding, can be yours!',
    price: 6.00,
    seller_id: 1,
})
img27 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/woodland-creatures.jpg')
product27.images.attach(io: img27, filename: 'woodland-creatures.jpg')

product28 = Product.create({
    name: 'Lightning Bubble',
    description: 'Want to be attractive to coins? Use this to make that dream come true',
    price: 7.00,
    seller_id: 1,
})
img28 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/lightning-bubble.jpg')
product28.images.attach(io: img28, filename: 'lightning-bubble.jpg')


product29 = Product.create({
    name: '500 Rings',
    description: 'Fun Item to collect, they add up and can give you extra lives',
    price: 3.00,
    seller_id: 1,
})
img29 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/sonicrings.jpg')
product29.images.attach(io: img29, filename: 'sonicrings.jpg')

product30 = Product.create({
    name: 'Chaos Emerald',
    description: 'A gem in which Dr. Robotnik enjoys stealing, but they\'re quite powerful when united together',
    price: 20.00,
    seller_id: 1,
})
img30 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/chaos-emerald.jpg')
product30.images.attach(io: img30, filename: 'chaos-emerald.jpg')

product31 = Product.create({
    name: 'Speed Boots',
    description: 'Makes Sonic go faster than light travels',
    price: 10.00,
    seller_id: 1,
})
img31 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/super-speed-shoes.png')
product31.images.attach(io: img31, filename: 'super-speed-shoes.png')

product32 = Product.create({
    name: 'Gotcha Yoshis',
    description: 'Random Yoshi egg. Didn\'t get the one you wanted? Try again!',
    price: 10.00,
    seller_id: 1,
})
img32a = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/grown-yoshis.jpg')
img32b = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/super-mario-world-baby-yoshis.png')
img32c = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/yoshi-eggs.png')
product32.images.attach(io: img32a, filename: 'grown-yoshis.jpg')
product32.images.attach(io: img32b, filename: 'super-mario-world-baby-yoshis.png')
product32.images.attach(io: img32c, filename: 'yoshi-eggs.png')

product33 = Product.create({
    name: 'Infinity blade',
    description: 'Weapon with High Damage, and increased HP, look regal',
    price: 20.00,
    seller_id: 1,
})
img33 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/infinity-blade-fortnite.png')
product33.images.attach(io: img33, filename: 'infinity-blade-fortnite.png')

product34 = Product.create({
    name: 'Llama Pinata',
    description: 'Want loot? Beat this guy to death',
    price: 7.00,
    seller_id: 1,
})
img34 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/fortnite-llama-pinata.png')
product34.images.attach(io: img34, filename: 'fortnite-llama-pinata.png')

product35 = Product.create({
    name: 'Rocket Launcher',
    description: 'A weapon to beat all the noobs, or use because you\'re a noob',
    price: 8.00,
    seller_id: 1,
})
img35 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/fortnite-rocket-launcher.jpg')
product35.images.attach(io: img35, filename: 'fortnite-rocket-launcher.jpg')

product36 = Product.create({
    name: 'Balloon',
    description: 'We all float up here',
    price: 3.00,
    seller_id: 1,
})
img36 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/fortniteballoons.jpg')
product36.images.attach(io: img36, filename: 'fortniteballoons.jpg')

product37 = Product.create({
    name: 'Present',
    description: 'Want Free stuff? Put this down and get free stuff',
    price: 6.00,
    seller_id: 1,
})
img37 = URI.open('https://craftesy-seeds.s3.us-east-2.amazonaws.com/fullstack_project_assets/fortnite-present.png')
product37.images.attach(io: img37, filename: 'fortnite-present.png')
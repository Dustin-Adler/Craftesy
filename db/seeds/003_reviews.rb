# frozen_string_literal: true

puts 'Seeding Reviews...'

any_reviews = Review.first

Review.delete_all if any_reviews

users = {}
User.find_each do |user|
  users[user.first_name.downcase.to_sym] = user
end

reviews = {
  infinity_blade: {
    peely: {
      rating: 4,
      body: 'Whoever grabs this basically wins the fight.'
    },
    midas: {
      rating: 5,
      body: '@Peely Power like this changes the entire match.'
    },
    link: {
      rating: 4,
      body: 'This blade looks powerful enough to challenge legendary weapons.'
    }
  },

  deku_stick: {
    link: {
      rating: 5,
      body: 'Simple but effective. I used these constantly when exploring dark caves around Kokiri Forest.'
    },
    zelda: {
      rating: 4,
      body: '@Link And yet you always managed to burn them up in seconds.'
    },
    mario: {
      rating: 3,
      body: "Not bad! If these existed in the Mushroom Kingdom I'd use them to light torches in ghost houses."
    },
    demo: {
      rating: 5,
      body: 'The first time I lit a Deku Stick in Ocarina of Time is burned into my brain. Absolute classic item.'
    }
  },

  fire_arrow: {
    link: {
      rating: 5,
      body: 'One of the most satisfying upgrades. Watching ice enemies melt instantly never gets old.'
    },
    zelda: {
      rating: 5,
      body: '@Link Just try not to set Hyrule Field on fire.'
    },
    sonic: {
      rating: 4,
      body: "Explosive speed AND fire? If I had these in Green Hill Zone Dr. Robotnik wouldn't last long."
    }
  },

  hylian_shield: {
    link: {
      rating: 5,
      body: 'Reliable. Durable. Iconic. This shield has saved me more times than I can count.'
    },
    zelda: {
      rating: 5,
      body: "@Link The royal crest represents Hyrule's courage."
    },
    mario: {
      rating: 4,
      body: "Mama mia that looks strong. Bowser's fire wouldn't stand a chance."
    },
    ezreal: {
      rating: 4,
      body: '@Mario If I brought this relic back from an expedition it would belong in a museum.'
    }
  },

  heart_container: {
    link: {
      rating: 5,
      body: 'Nothing beats the feeling of gaining another heart after defeating a dungeon boss.'
    },
    zelda: {
      rating: 5,
      body: '@Link Each one represents the hero growing stronger.'
    },
    ash: {
      rating: 4,
      body: "If trainers had these after gym battles we'd never need Pokémon Centers."
    },
    demo: {
      rating: 5,
      body: 'That moment when the boss explodes and a Heart Container drops… peak childhood gaming.'
    }
  },

  star: {
    mario: {
      rating: 5,
      body: 'Wahoo! Invincibility AND the best music in gaming!'
    },
    luigi: {
      rating: 5,
      body: '@Mario You always grab them before I can!'
    },
    sonic: {
      rating: 4,
      body: 'Speed and invincibility? I respect that combo.'
    }
  },

  mushroom: {
    mario: {
      rating: 5,
      body: 'The power-up that started it all!'
    },
    luigi: {
      rating: 4,
      body: '@Mario You still run into enemies even after grabbing one.'
    },
    link: {
      rating: 3,
      body: 'Growing twice your size from eating a mushroom sounds… risky.'
    }
  },

  masterball: {
    ash: {
      rating: 5,
      body: 'The most reliable Poké Ball ever created.'
    },
    misty: {
      rating: 4,
      body: "@Ash Just don't waste it on a Magikarp again."
    },
    mario: {
      rating: 4,
      body: 'If Bowser fit inside one of these my adventures would be much shorter.'
    },
    demo: {
      rating: 5,
      body: 'Every Pokémon player remembers saving the Master Ball for that ONE legendary.'
    }
  },

  trinity_force: {
    ezreal: {
      rating: 5,
      body: "An adventurer's dream item. It enhances practically everything."
    },
    lux: {
      rating: 4,
      body: '@Ezreal Demacia would consider this artifact extremely powerful.'
    },
    link: {
      rating: 4,
      body: 'If heroes in Hyrule had gear like this, Ganondorf would be in serious trouble.'
    }
  },

  chaos_emerald: {
    sonic: {
      rating: 5,
      body: 'These gems power incredible transformations.'
    },
    tails: {
      rating: 5,
      body: "@Sonic I've studied them extensively. The energy output is enormous!"
    },
    mario: {
      rating: 4,
      body: 'Seven magic gems that unlock ultimate power? Sounds like a Bowser plan waiting to happen.'
    }
  },

  fire_flower: {
    mario: {
      rating: 5,
      body: 'Classic power-up! Nothing beats tossing fireballs at Goombas.'
    },
    luigi: {
      rating: 4,
      body: '@Mario You say that until you bounce one off a wall and hit yourself.'
    },
    link: {
      rating: 4,
      body: 'Interesting… In Hyrule we use Fire Arrows, but throwing fireballs by hand would be useful.'
    }
  },

  warp_whistle: {
    mario: {
      rating: 5,
      body: 'A secret every explorer should know about!'
    },
    luigi: {
      rating: 4,
      body: '@Mario You skipped half the adventure with these.'
    },
    sonic: {
      rating: 4,
      body: 'Teleporting across the world? Could save me a lot of running.'
    },
    demo: {
      rating: 5,
      body: 'Finding the Warp Whistle as a kid felt like discovering forbidden knowledge.'
    }
  },

  frog_suit: {
    mario: {
      rating: 4,
      body: 'Finally! Swimming levels become fun instead of frustrating.'
    },
    luigi: {
      rating: 5,
      body: '@Mario Speak for yourself. I look fantastic in this suit.'
    },
    misty: {
      rating: 4,
      body: 'If trainers had these, surfing across water routes would be effortless.'
    }
  },

  ocarina: {
    link: {
      rating: 5,
      body: 'A magical instrument capable of altering time itself.'
    },
    zelda: {
      rating: 5,
      body: '@Link Music carries more power than most realize.'
    },
    lux: {
      rating: 4,
      body: 'An instrument that channels magic through song? Fascinating.'
    },
    demo: {
      rating: 5,
      body: 'Learning all the songs on the Ocarina was one of the most magical parts of gaming.'
    }
  },

  phoenix_down: {
    tifa: {
      rating: 5,
      body: 'These things have saved the team more times than I can count.'
    },
    cloud: {
      rating: 4,
      body: "@Tifa Yeah… though I'd rather not need one."
    },
    link: {
      rating: 4,
      body: "A revival item like this would make exploring Hyrule's dungeons far less dangerous."
    },
    demo: {
      rating: 5,
      body: 'Every Final Fantasy player knows the comfort of keeping a Phoenix Down in the inventory.'
    }
  },

  clouds_buster_sword: {
    mario: {
      rating: 4,
      body: 'Mama mia that sword is huge!'
    },
    cloud: {
      rating: 5,
      body: "It's heavier than it looks. But it gets the job done."
    },
    tifa: {
      rating: 5,
      body: "@Cloud You say that like you're not showing off every time you swing it."
    },
    link: {
      rating: 4,
      body: 'A blade like that would rival even the Master Sword.'
    }
  },

  ultima_materia: {
    lux: {
      rating: 5,
      body: 'The magical energy inside this is incredible!'
    },
    cloud: {
      rating: 4,
      body: "Ultima isn't something you use lightly."
    },
    ezreal: {
      rating: 4,
      body: "@Lux If I found something like this in a ruin I'd never stop talking about it."
    },
    mario: {
      rating: 3,
      body: "If Bowser ever got his hands on something like this we'd all be in trouble."
    }
  },

  knights_of_the_round: {
    cloud: {
      rating: 5,
      body: 'The most powerful summon we ever found.'
    },
    tifa: {
      rating: 4,
      body: '@Cloud And the longest attack animation imaginable.'
    },
    link: {
      rating: 4,
      body: 'Summoning legendary knights to fight beside you would be invaluable in Hyrule.'
    }
  },

  chocobo: {
    tifa: {
      rating: 5,
      body: 'Reliable, fast, and surprisingly smart.'
    },
    sonic: {
      rating: 4,
      body: "Looks quick… but I'm still faster."
    },
    cloud: {
      rating: 4,
      body: '@Sonic Depends on the terrain.'
    },
    mario: {
      rating: 4,
      body: 'Reminds me a lot of riding Yoshi!'
    }
  },

  lucky_magikarp: {
    ash: {
      rating: 3,
      body: 'Magikarp might seem weak… but just wait.'
    },
    misty: {
      rating: 4,
      body: '@Ash Eventually it becomes Gyarados, remember?'
    },
    mario: {
      rating: 3,
      body: "Looks harmless… but something tells me it's hiding potential."
    }
  },

  potion: {
    ash: {
      rating: 5,
      body: "Every trainer carries potions. They're essential."
    },
    misty: {
      rating: 4,
      body: '@Ash Especially when you forget to visit a Pokémon Center.'
    },
    demo: {
      rating: 5,
      body: 'Potions were the safety net of every long Pokémon adventure.'
    }
  },

  thunderstone: {
    ash: {
      rating: 4,
      body: 'A powerful evolution stone.'
    },
    misty: {
      rating: 4,
      body: '@Ash Just make sure your Pokémon is ready before evolving.'
    },
    lux: {
      rating: 4,
      body: 'Harnessing lightning to trigger evolution? Fascinating.'
    }
  },

  pikachu: {
    ash: {
      rating: 5,
      body: 'My partner and best friend!'
    },
    misty: {
      rating: 4,
      body: '@Ash We know, you mention it every day.'
    },
    mario: {
      rating: 4,
      body: 'Electric mouse with lightning powers? I like it!'
    }
  },

  cape_feather: {
    mario: {
      rating: 5,
      body: 'Flying through the sky never gets old!'
    },
    luigi: {
      rating: 4,
      body: "@Mario Just don't dive into enemies again."
    },
    sonic: {
      rating: 4,
      body: 'Flying is cool… but running is faster.'
    }
  },

  heart_of_gold: {
    lux: {
      rating: 4,
      body: "A relic from the Rift's past."
    },
    ezreal: {
      rating: 4,
      body: "@Lux Some artifacts are removed because they're just too powerful."
    },
    demo: {
      rating: 5,
      body: 'Old League players remember when Heart of Gold was part of every build.'
    }
  },

  kraken_slayer: {
    link: {
      rating: 4,
      body: 'A weapon like this would make defeating giant monsters much easier.'
    },
    ezreal: {
      rating: 5,
      body: 'Perfect for dealing with the toughest opponents.'
    },
    lux: {
      rating: 4,
      body: "@Ezreal Tanks don't stand a chance against it."
    }
  },

  bloodthirster: {
    sonic: {
      rating: 3,
      body: 'I prefer speed over lifesteal.'
    },
    ezreal: {
      rating: 4,
      body: 'Still, sustaining yourself mid-fight has its advantages.'
    },
    lux: {
      rating: 4,
      body: '@Ezreal It certainly makes prolonged battles easier.'
    }
  },

  rabadons_death_cap: {
    ezreal: {
      rating: 4,
      body: "That's a lot of magical amplification."
    },
    lux: {
      rating: 5,
      body: '@Ezreal The kind every mage dreams about.'
    },
    zelda: {
      rating: 4,
      body: 'Artifacts that amplify magic should always be handled carefully.'
    }
  },

  furry_woodland_creatures: {
    sonic: {
      rating: 5,
      body: 'Robotnik better stay away from these little guys.'
    },
    tails: {
      rating: 4,
      body: '@Sonic They deserve protection.'
    },
    mario: {
      rating: 4,
      body: 'Reminds me of the animals we rescue in my adventures.'
    }
  },

  lightning_bubble: {
    sonic: {
      rating: 4,
      body: 'Magnetic rings make collecting them way easier.'
    },
    tails: {
      rating: 5,
      body: '@Sonic The electrical field is actually really clever.'
    },
    lux: {
      rating: 4,
      body: 'Harnessing lightning for utility? Brilliant.'
    }
  },

  '500_rings'.to_sym => {
    sonic: {
      rating: 5,
      body: 'You can never have too many rings.'
    },
    tails: {
      rating: 4,
      body: '@Sonic Especially when they keep you alive.'
    },
    mario: {
      rating: 4,
      body: "That's a lot of shiny collectibles."
    }
  },

  speed_boots: {
    sonic: {
      rating: 5,
      body: 'Gotta go even faster!'
    },
    tails: {
      rating: 5,
      body: '@Sonic These boost your top speed dramatically.'
    },
    mario: {
      rating: 4,
      body: 'Imagine how fast I could finish levels with these!'
    }
  },

  gotcha_yoshis: {
    mario: {
      rating: 5,
      body: "You never know what Yoshi you'll get!"
    },
    luigi: {
      rating: 4,
      body: '@Mario Last time you got three greens in a row.'
    },
    sonic: {
      rating: 4,
      body: 'Cute companions always make adventures better.'
    }
  },

  llama_pinata: {
    peely: {
      rating: 5,
      body: 'Best loot source on the island!'
    },
    midas: {
      rating: 4,
      body: '@Peely Everyone fights over these.'
    },
    mario: {
      rating: 4,
      body: 'Treasure hidden in a llama? Why not!'
    }
  },

  rocket_launcher: {
    link: {
      rating: 4,
      body: 'Weapons like this would make clearing monster camps quick work.'
    },
    peely: {
      rating: 4,
      body: 'Great for knocking down enemy builds.'
    },
    midas: {
      rating: 5,
      body: '@Peely Explosives are always an efficient solution.'
    }
  },

  balloon: {
    peely: {
      rating: 4,
      body: 'Floating across the battlefield is surprisingly useful.'
    },
    midas: {
      rating: 4,
      body: '@Peely High ground wins fights.'
    },
    sonic: {
      rating: 3,
      body: 'Floating is slow… but it does look fun.'
    }
  },

  present: {
    midas: {
      rating: 4,
      body: 'Strategic placement can change a fight.'
    },
    peely: {
      rating: 5,
      body: '@Midas Free loot is always worth the risk!'
    },
    demo: {
      rating: 5,
      body: 'Opening one of these and getting exactly what you needed was always the best feeling.'
    }
  }
}

def normalize_product_name(product)
  product.name
         .downcase
         .gsub(/[^a-z0-9\s]/, '')
         .strip
         .gsub(/\s+/, '_')
         .to_sym
end

Product.find_each do |product|
  name = normalize_product_name(product)
  product_reviews = reviews[name]
  unless product_reviews
    puts "No reviews found for product: #{name}. Skipping..."
    next
  end

  product_reviews.each do |user_key, review_data|
    user = users[user_key]
    unless user
      puts "Unknown user key: #{user_key}, in reviews for product: #{name}. Skipping this review..."
      next
    end
    Review.create({
                    author_id: user.id,
                    product_id: product.id,
                    rating: review_data[:rating],
                    body: review_data[:body]
                  })
  end
end

puts 'Reviews Seeded Successfully!'

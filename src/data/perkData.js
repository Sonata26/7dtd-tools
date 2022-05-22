// perk data from the game + extra sugar for the perk builder
export const perkData = {
  // starting perk points from the tutorial quest
  startingPoints: 4,

  // used for the radar chart
  availableTraits: [
    "Tactics", // long range, explosives, traps, parkour
    "Stealth", // sneak bonuses
    "Brute Force", // TBD
    "Range", // guns
    "Melee", // sticks
    "Looting", // loot bonuses, treasure, salvaging
    "Utility", // base building, crafting, special abilities
    "Combat", // only aids in killing
    "Trading", // quests, trade bonus
  ],

  trees: {
    // each perk tree has its own object
    perception: {
      // each point into the attribute itself adds to its defining traits score
      // definingTraits: ["Tactics", "Range", "Looting"],
      weapons: ["Explosives", "Rifles", "Spears"],

      // attribute point bonuses
      // not in use as they're all the same
      attributeBonus: [],

      icon: "Visibility",

      perks: {
        "Dead Eye": {
          type: "weapon",
          weapon: "Rifles",
          traits: ["Tactics", "Range", "Combat"],
          // perk levels can add: Stats, recipes, or special skills
          levels: [
            {
              // percentage stat increase
              stats: { damage: 0.1, aim: 0.1, reload: 0.1 },
              // recipes and quality for weapon
              craft: { recipes: ["Hunting Rifle"], quality: 2 },
            },
            {
              stats: { damage: 0.2, aim: 0.2, reload: 0.15 },
              craft: { quality: 3 },
            },
            {
              stats: { damage: 0.3, aim: 0.32, reload: 0.2, stamina: -0.1 },
              craft: { quality: 4 },
              // specials are unique abilities
              specials: {
                killStreak:
                  "Kill streak with Rifles increase damage bonus by 10%, to a maxiumum of 30%",
              },
            },
            {
              stats: { damage: 0.4, aim: 0.45, reload: 0.25, stamina: -0.2 },
              craft: { quality: 5 },
              specials: {
                killStreak:
                  "Kill streak with Rifles increase damage bonus by 20%, to a maxiumum of 40%",
              },
            },
            {
              stats: { damage: 0.5, aim: 0.6, reload: 0.3, stamina: -0.3 },
              craft: { quality: 5 },
              specials: {
                killStreak:
                  "Kill streak with Rifles increase damage bonus by 30%, to a maxiumum of 50%",
              },
            },
          ],
        },
        "Demolitions Expert": {
          type: "weapon",
          weapon: "Explosives",
          traits: ["Tactics", "Range", "Combat"],
          levels: [
            {
              stats: {
                damage: 0.1,
                aim: 0.1,
                reload: 0.15,
                stun: 0.5,
                dismember: 0.05,
              },
              craft: {
                recipes: ["Pipe Bomb", "Pressure Plate", "Cooking Pot Mine"],
              },
            },
            {
              stats: {
                damage: 0.2,
                aim: 0.2,
                reload: 0.2,
                stun: 1.0,
                dismember: 0.1,
              },
              craft: { recipes: ["Dynamite", "Hub Cap Mine"] },
            },
            {
              stats: {
                damage: 0.3,
                aim: 0.3,
                reload: 0.25,
                stun: 1.0,
                dismember: 0.2,
                cripple: 0.33,
              },
              craft: { recipes: ["Grenades", "Gun Powder Stacks"] },
            },
            {
              stats: {
                damage: 0.4,
                aim: 0.4,
                reload: 0.3,
                stun: 1.0,
                dismember: 0.3,
                cripple: 0.66,
              },
              craft: { recipes: ["HE Rockets", "Frag Rockets"] },
            },
            {
              stats: {
                damage: 0.5,
                aim: 0.5,
                reload: 0.35,
                stun: 1.0,
                dismember: 0.45,
                cripple: 0.66,
              },
              craft: {
                recipes: [
                  "Timed Charges",
                  "Contact Grenades",
                  "Air Filter Landmines",
                ],
              },
            },
          ],
        },
        "Javelin Master": {
          type: "weapon",
          weapon: "Spears",
          traits: ["Tactics", "Melee", "Combat"],
          levels: [
            {
              stats: {
                damage: 0.1,
                range: 0.1,
              },
              craft: {
                quality: 2,
                recipes: ["Iron Spear"],
              },
            },
            {
              stats: {
                damage: 0.2,
                range: 0.2,
              },
              craft: {
                quality: 3,
              },
            },
            {
              stats: {
                damage: 0.3,
                range: 0.3,
              },
              craft: {
                quality: 4,
              },
            },
            {
              stats: {
                damage: 0.4,
                range: 0.4,
              },
              craft: {
                quality: 5,
              },
            },
            {
              stats: {
                damage: 0.5,
                range: 0.5,
              },
            },
          ],
        },
        "Lock Picking": {
          type: "special",
          traits: ["Utility", "Stealth", "Looting"],
          levels: [
            {
              specials: {
                lockPicking:
                  "Pick locks 20% faster, 10% less chance to break lockpicks, craft lockpicks",
              },
            },
            {
              specials: {
                lockPicking:
                  "Pick locks 40% faster, 20% less chance to break lockpicks, craft lockpicks",
              },
            },
            {
              specials: {
                lockPicking:
                  "Pick locks 60% faster, 30% less chance to break lockpicks, craft lockpicks",
              },
            },
          ],
        },
        "The Infiltrator": {
          type: "special",
          traits: ["Utility", "Stealth", "Looting"],
          levels: [
            {
              specials: {
                infiltration:
                  "Loose boards and landmines trigger 1/2 second slower, 20% less damage from landmines.",
              },
            },
            {
              specials: {
                infiltration:
                  "Loose boards and landmines trigger 1 second slower, 35% less damage from landmines.",
              },
            },
            {
              specials: {
                infiltration:
                  "Loose boards and landmines trigger 2 seconds slower, 50% less damage from landmines. Can pick up landmines.",
              },
            },
          ],
        },
        "Animal Tracker": {
          type: "special",
          traits: ["Utility"],
          levels: [
            {
              specials: {
                tracking: "Crouch to track rabbits, snakes, chickens",
              },
            },
            {
              specials: {
                tracking:
                  "Crouch to track rabbits, snakes, chickens, deer, boars, coyotes, wolves",
              },
            },
            {
              specials: {
                tracking:
                  "Crouch to track rabbits, snakes, chickens, deer, boars, coyotes, wolves, mountain lions, bears",
              },
            },
          ],
        },
        "The Penetrator": {
          type: "special",
          traits: ["Combat", "Range", "Tactics"],
          levels: [
            {
              specials: {
                penetration:
                  "Ignore 10% of armor with ranged weapons, 20% with armor piercing rounds.",
              },
            },
            {
              specials: {
                penetration:
                  "Ignore 15% of armor with ranged weapons, 30% with armor piercing rounds. When using AP rounds penetrate an additonal target/block of up to 500 hit points with rifles.",
              },
            },
            {
              specials: {
                penetration:
                  "Ignore 20% of armor with ranged weapons, 40% with armor piercing rounds. When using AP rounds penetrate two additonal targets/blocks of up to 750 hit points with rifles.",
              },
            },
            {
              specials: {
                penetration:
                  "Ignore 20% of armor with ranged weapons, 50% with armor piercing rounds. When using AP rounds penetrate three additonal targets/blocks of up to 1000 hit points with rifles.",
              },
            },
          ],
        },
        "Lucky Looter": {
          type: "special",
          traits: ["Utility", "Looting"],
          levels: [
            {
              stats: {
                lootBonus: 0.05,
                lootSpeed: 0.1,
              },
            },
            {
              stats: {
                lootBonus: 0.1,
                lootSpeed: 0.2,
              },
            },
            {
              stats: {
                lootBonus: 0.15,
                lootSpeed: 0.4,
              },
            },
            {
              stats: {
                lootBonus: 0.2,
                lootSpeed: 0.6,
              },
            },
            {
              stats: {
                lootBonus: 0.25,
                lootSpeed: 0.8,
              },
            },
          ],
        },
        "Treasure Hunter": {
          type: "special",
          traits: ["Utility", "Looting"],
          levels: [
            {
              specials: {
                treasure:
                  "For every 7 blocks dug up the treasure search radius is reduced by 1m. Find 10% more items in buried treasure.",
              },
            },
            {
              specials: {
                treasure:
                  "For every 5 blocks dug up the treasure search radius is reduced by 1m. Find 20% more items in buried treasure.",
              },
            },
            {
              specials: {
                treasure:
                  "For every 3 blocks dug up the treasure search radius is reduced by 1m. Find 30% more items in buried treasure.",
              },
            },
          ],
        },
        "Salvage Operations": {
          type: "special",
          traits: ["Utility", "Looting"],
          levels: [
            {
              specials: {
                salvage:
                  "Craft quality 2 salvage tools, deal 10% more damage, harvest 20% faster, gain 20% more resources with a wrench, ratchet, or impact driver.",
              },
              craft: {
                recipes: ["Wrench"],
              },
            },
            {
              specials: {
                salvage:
                  "Craft quality 3 salvage tools, deal 20% more damage, harvest 40% faster, gain 40% more resources with a wrench, ratchet, or impact driver.",
              },
            },
            {
              specials: {
                salvage:
                  "Craft quality 4 salvage tools, deal 30% more damage, harvest 60% faster, gain 60% more resources with a wrench, ratchet, or impact driver.",
              },
            },
            {
              specials: {
                salvage:
                  "Craft quality 5 salvage tools, deal 40% more damage, harvest 80% faster, gain 80% more resources with a wrench, ratchet, or impact driver.",
              },
            },
            {
              specials: {
                salvage:
                  "Craft quality 5 salvage tools, deal 50% more damage, harvest 100% faster, gain 100% more resources with a wrench, ratchet, or impact driver.",
              },
            },
          ],
        },
      },
    },
    strength: {},
    agility: {},
    fortitude: {},
    intellect: {},
  },
};

export default perkData;

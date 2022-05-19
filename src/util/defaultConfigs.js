export const levels = {
  minLevel: 1,
  maxLevel: 300,
  startingLevel: 1,
  startingDesiredLevel: 10,
  step: 1,
  minLevelIncrease: 1,
};

export const gameOptions = {
  xpMultiplier: 1,
};

// xpModifier * baseMaterialXP * resourceAmount = xp per block
export const materials = {
  baseMaterialXP: 6,
  blocks: {
    wood: { xpModifier: 2, upgradeAmount: 8, prev: null, next: "cobble" },
    cobble: {
      xpModifier: 2,
      upgradeAmount: 10,
      prev: "wood",
      next: "concrete",
    },
    concrete: {
      xpModifier: 4,
      upgradeAmount: 10,
      prev: "cobble",
      next: "steel",
    },
    steel: { xpModifier: 6, upgradeAmount: 10, prev: "concrete", next: null },
  },
};

export const zombies = {
  averageXP: 750,
};

export default {
  levels,
  materials,
  zombies,
  gameOptions,
};

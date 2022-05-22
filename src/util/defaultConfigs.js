// slider options
export const levels = {
  minLevel: 1,
  maxLevel: 300,
  startingLevel: 1,
  startingDesiredLevel: 10,
  step: 1,
  minLevelIncrease: 1,
};

export const gameOptions = {
  xpMultiplier: 1.05,
  xpClampLevel: 60, // defined in progression.xml after this level it starts clamping
  xpClampAmount: 186791, // the max xp required per level after clamp
};

// xpModifier * baseMaterialXP * resourceAmount = xp per block
export const materials = {
  baseMaterialXP: 6,
  blocks: {
    wood: {
      xpModifier: 2,
      upgradeAmount: 8,
      next: "cobble",
    },
    cobble: {
      xpModifier: 2,
      upgradeAmount: 10,
      prev: "reinforcedWood",
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

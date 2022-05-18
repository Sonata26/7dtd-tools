// data
export const config = {
  baseMaterialXP: 6,
};

// xpModifier * baseMaterialXP * resourceAmount = xp per block
export const blockValues = {
  wood: { xpModifier: 2, upgradeAmount: 8, prev: null, next: "cobble" },
  cobble: { xpModifier: 2, upgradeAmount: 10, prev: "wood", next: "concrete" },
  concrete: { xpModifier: 4, upgradeAmount: 10, prev: "cobble", next: "steel" },
  steel: { xpModifier: 6, upgradeAmount: 10, prev: "concrete", next: null },
};

// XP algorithm from game files
export function getXPRequired(startLevel, desiredLevel) {
  return Math.ceil(
    -220480 *
      (Math.pow(1.05, startLevel - 1) - Math.pow(1.05, desiredLevel - 1))
  );
}

// Zombies
export function getZombiesRequired(xp) {
  // return average for now TODO: Add zombie chart
  return Math.ceil(xp / 750);
}

// How many blocks to upgrade
export function getBlocksRequired(xp) {
  return Object.keys(blockValues).reduce((acc, blockName) => {
    const block = blockValues[blockName];

    return {
      ...acc,
      [blockName]:
        block.xpModifier * block.upgradeAmount * config.baseMaterialXP,
    };
  }, {});
}

// TODO: Quests
export function getQuestsRequired(xp) {
  return {};
}

// formatted string [deprecated]
export function howToLevel(startLevel, desiredLevel) {
  const xp = getXPRequired(startLevel, desiredLevel);
  const zombieReq = getZombiesRequired(xp);
  const blockReq = getBlocksRequired(xp);

  return `You need ${xp} exp to go from level ${startLevel} to level ${desiredLevel} which can be obtained
  by killing around ${zombieReq} Zombies or upgrading ${blockReq.wood} Wood Blocks one time.`;
}

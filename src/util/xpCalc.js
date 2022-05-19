import defaultConfigs from "./defaultConfigs";

// XP algorithm from game files
export function getXPRequired(
  startLevel,
  desiredLevel,
  xpMultiplier = defaultConfigs.gameOptions.xpMultiplier
) {
  return Math.ceil(
    (-220480 *
      (Math.pow(1.05, startLevel - 1) - Math.pow(1.05, desiredLevel - 1))) /
      xpMultiplier
  );
}

// Zombies
export function getZombiesRequired(xp, zombiesConfig = {}) {
  const config = {
    ...defaultConfigs.zombies,
    ...zombiesConfig,
  };

  // return average for now TODO: Add zombie chart
  return Math.ceil(xp / config.averageXP);
}

// How many blocks to upgrade
export function getBlocksRequired(xpRequired, materialConfig = {}) {
  const config = {
    ...defaultConfigs.materials,
    ...materialConfig,
  };

  return Object.keys(config.blocks).reduce((acc, blockName) => {
    const block = config.blocks[blockName];

    return {
      ...acc,
      [blockName]: Math.ceil(
        xpRequired /
          (block.xpModifier * block.upgradeAmount * config.baseMaterialXP)
      ),
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
  by killing around ${zombieReq} Zombies or upgrading ${blockReq.concrete} Cobblestone Blocks to Concrete.`;
}

export default {
  getXPRequired,
  getZombiesRequired,
  getBlocksRequired,
  getQuestsRequired,
  howToLevel,
};

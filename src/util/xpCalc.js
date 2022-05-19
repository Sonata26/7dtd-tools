import defaultConfigs from "./defaultConfigs";
import { capitalize, flatten } from "lodash";

// XP algorithm from game files
export function getXPRequired(
  [startLevel, desiredLevel],
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

const getUpgradeXP = (
  blockStats,
  baseMaterialXP = defaultConfigs.baseMaterialXP
) => {
  return blockStats.xpModifier * blockStats.upgradeAmount * baseMaterialXP;
};

const getBlockPaths = (materialConfig) => {
  const paths = {};
  const blocks = Object.keys(materialConfig.blocks);

  blocks.forEach((blockName) => {
    const block = materialConfig.blocks[blockName];
    const path = (paths[blockName] = [
      {
        name: blockName,
        xp: getUpgradeXP(block, materialConfig.baseMaterialXP),
        _block: block,
      },
    ]);
    let nextBlockName = block.next;
    let nextBlock = materialConfig.blocks[block.next];

    while (nextBlock) {
      path.push({
        name: nextBlockName,
        _block: nextBlock,
        xp: getUpgradeXP(nextBlock, materialConfig.baseMaterialXP),
      });
      nextBlockName = nextBlock.next;
      nextBlock = materialConfig.blocks[nextBlockName];
    }

    paths[blockName] = path.map((block, i) => {
      const upgradeName =
        i === 0
          ? capitalize(blockName) + " Block"
          : capitalize(blockName) + " to " + capitalize(block.name);

      if (i === 0) return { upgradeName, xp: block.xp };

      const totalXP = path.slice(0, i + 1).reduce((acc, b) => acc + b.xp, 0);

      return { upgradeName, xp: totalXP };
    });
  });

  return paths;
};

// How many blocks to upgrade
export function getBlocksRequired(xpRequired, materialConfig = {}) {
  const config = {
    ...defaultConfigs.materials,
    ...materialConfig,
  };

  const paths = getBlockPaths(config);
  const blocksRequired = Object.entries(paths).map(([pathName, path]) => {
    return path.map((upgrade) => {
      return {
        ...upgrade,
        blocksRequired: Math.ceil(xpRequired / upgrade.xp),
      };
    });
  });

  return flatten(blocksRequired);
}

// TODO: Quests
export function getQuestsRequired(xp) {
  return {};
}

export function getAllData([startLevel, desiredLevel], options = {}) {
  const config = {
    ...defaultConfigs,
    ...options,
  };
  const xpRequired = getXPRequired(
    [startLevel, desiredLevel],
    config.gameOptions.xpMultiplier
  );
  const zombieReq = getZombiesRequired(xpRequired, config.zombies);
  const blockReq = getBlocksRequired(xpRequired, config.materials);

  return {
    xpRequired,
    zombiesReq: zombieReq,
    blocksReq: blockReq,
  };
}

export default {
  getXPRequired,
  getZombiesRequired,
  getBlocksRequired,
  getQuestsRequired,
  getAllData,
};

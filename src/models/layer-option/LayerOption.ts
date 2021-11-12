

class LayerOption {
  name = '';
  index = 0;
  imagePath = '';
  downloadURL = '';
  fileName = '';
  imageHash = '';
  hasMaxSupply = false;
  maxSupply = 0;
  hasRarity = false;
  rarityFactor = 0;
  hasExactSupply = false;
  exactSupply = 0;
  specialRequirements = false;
}

export default LayerOption;

export class LayerOptionFactory {
  static fromJSON(data: Record<string, unknown>): LayerOption {
    const itemToReturn = new LayerOption();
    itemToReturn.name = data.name as string;
    itemToReturn.imagePath = data.imagePath as string;
    itemToReturn.downloadURL = data.downloadURL as string;
    itemToReturn.fileName = data.fileName as string;
    itemToReturn.imageHash = data.imageHash as string;
    itemToReturn.hasMaxSupply = data.hasMaxSupply as boolean;
    itemToReturn.maxSupply = data.maxSupply as number;
    itemToReturn.index = data.index as number;
    itemToReturn.hasRarity = data.hasRarity as boolean;
    itemToReturn.rarityFactor = data.rarityFactor as number;
    itemToReturn.hasExactSupply = data.hasExactSupply as boolean;
    itemToReturn.exactSupply = data.exactSupply as number;
    itemToReturn.specialRequirements = data.specialRequirements as boolean;
    return itemToReturn;
  }
}

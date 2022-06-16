

export class LayerOption {
  name = '';
  index = 0;
  imagePath = '';
  downloadURL = '';
  fileName = '';
  imageHash = '';
  maxSupply = 0;
  rarityFactor = 0;
  qtyMinted = 0;
  timesOffered = 0;
  isAvailable = true;  
}

export class LayerOptionFactory {
  static fromJSON(data: Record<string, unknown>): LayerOption {
    const itemToReturn = new LayerOption();
    itemToReturn.name = data.name as string;
    itemToReturn.imagePath = data.imagePath as string;
    itemToReturn.downloadURL = data.downloadURL as string;
    itemToReturn.fileName = data.fileName as string;
    itemToReturn.imageHash = data.imageHash as string;
    itemToReturn.maxSupply = data.maxSupply as number;
    itemToReturn.index = data.index as number;
    itemToReturn.rarityFactor = data.rarityFactor as number;
    itemToReturn.timesOffered = data.hasExactSupply as number;
    itemToReturn.qtyMinted = data.qtyMinted as number;
    itemToReturn.isAvailable = data.isAvailable as boolean;
    return itemToReturn;
  }
}

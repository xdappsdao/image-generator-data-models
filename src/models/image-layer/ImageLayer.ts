import LayerOption, { LayerOptionFactory } from "../layer-option/LayerOption";

class ImageLayer {
  name = '';
  index = 0;
  listOfOptions: LayerOption[] = [];
  constructor(name: string, index: number) {
    this.name = name;
    this.index = index;
  }

  convertJSONToLayerOptions(listOfJSONObjects: Record<string, unknown>[]): LayerOption[] {
    const listOfLayerOptions: LayerOption[] = [];
    if (listOfJSONObjects) {
      for (let i = 0; i < listOfJSONObjects.length; i++) {
        const layerObject = listOfJSONObjects[i];
        const layerOption = LayerOptionFactory.fromJSON(layerObject);
        listOfLayerOptions.push(layerOption);
      }
    }
    return listOfLayerOptions;
  }
}

export default ImageLayer;

export class ImageLayerFactory {
  static fromJSON(data: Record<string, unknown>): ImageLayer {
    const itemToReturn = new ImageLayer('', 0);
    itemToReturn.name = data.name as string;
    itemToReturn.index = data.index as number;
    itemToReturn.listOfOptions = itemToReturn.convertJSONToLayerOptions(data.listOfOptions as Record<string, unknown>[]);
    return itemToReturn;
  }
}
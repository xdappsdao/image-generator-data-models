import { LayerOption, LayerOptionFactory } from "../layer-option/LayerOption";

export class ImageLayer {
  name = '';
  index = 0;
  listOfOptions: LayerOption[] = [];
  projectUid: string;
  constructor(name: string, index: number, projectUid: string) {
    this.name = name;
    this.index = index;
    this.projectUid = projectUid;
  }

  convertJSONToLayerOptions(listOfJSONObjects: Record<string, unknown>[]): LayerOption[] {
    const listOfLayerOptions: LayerOption[] = [];
    if (listOfJSONObjects) {
      for (let i = 0; i < listOfJSONObjects.length; i++) {
        const layerObject = listOfJSONObjects[i];
        const layerOption = LayerOptionFactory.fromJSON(layerObject);
        listOfLayerOptions.push(layerOption);
      }
      this.listOfOptions = listOfLayerOptions;
    }
    return listOfLayerOptions;
  }
}
export class ImageLayerFactory {
  static fromJSON(data: Record<string, unknown>): ImageLayer {
    const uid = data.uid as string;
    const name = data.name as string;
    const index = data.index as number;
    const itemToReturn = new ImageLayer(name, index, uid);
    itemToReturn.name = data.name as string;
    itemToReturn.index = data.index as number;
    itemToReturn.convertJSONToLayerOptions(data.listOfOptions as Record<string, unknown>[]);
    return itemToReturn;
  }
}
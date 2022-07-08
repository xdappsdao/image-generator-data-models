import { ImageLayer, ImageLayerFactory } from "../image-layer/ImageLayer";
export class PreMintProject {
  name = '';
  listOfLayers: ImageLayer[] = [];
  totalSupply = 0;
  uid = '';
  admin = "";
  description = "";
  chainId: number;
  creatorAddress: string;
  generatorTokenName = "";
  royaltyPaymentAddress = "";
  generatorTokenImage = "";
  generatorTokenAnimationUrl = '';
  royaltyFactor = 0;
  generatorTokenCost = 3000;


  convertJSONToLayerObjects(listOfJSONObjects: Record<string, unknown>[]): ImageLayer[] {
    const listOfLayers: ImageLayer[] = [];
    for (let i = 0; i < listOfJSONObjects.length; i++) {
      const layerObject = listOfJSONObjects[i];
      const layer = ImageLayerFactory.fromJSON(layerObject);
      listOfLayers.push(layer);
    }
    return listOfLayers;
  }
}


export class PreMintProjectFactory {
  static listFromFirebase(results: any[]): PreMintProject[] {
    const listToReturn: PreMintProject[] = [];
    for (let i = 0; i < results.length; i++) {
      const doc = results[i];
      const project = PreMintProjectFactory.fromFBDoc(doc);
      listToReturn.push(project);
    }
    return listToReturn;
  }

  static fromFBDoc(doc: any): PreMintProject {
    const data = doc.data();
    const itemToReturn = new PreMintProject();
    itemToReturn.name = data.name;
    itemToReturn.uid = data.uid;
    itemToReturn.description = data.description;
    itemToReturn.totalSupply = data.totalSupply;
    itemToReturn.admin = data.admin;
    itemToReturn.chainId = data.chainId ? data.chainId : 0;
    itemToReturn.generatorTokenName = data.generatorTokenName ? data.generatorTokenName : '';
    itemToReturn.generatorTokenImage = data.generatorTokenImage ? data.generatorTokenImage : "";
    itemToReturn.creatorAddress = data.creatorAddress ? data.creatorAddress : "";
    itemToReturn.generatorTokenAnimationUrl = data.generatorTokenAnimationUrl ? data.generatorTokenAnimationUrl : "";
    itemToReturn.royaltyPaymentAddress = data.generatorAddress ? data.royaltyPaymentAddress : '';
    itemToReturn.royaltyFactor = data.royaltyFactor ? data.royaltyFactor : 0;
    itemToReturn.generatorTokenCost = data.generatorTokenCost ? data.generatorTokenCost : 0;
    itemToReturn.listOfLayers = itemToReturn.convertJSONToLayerObjects(data.listOfLayers);
    return itemToReturn;
  }
}








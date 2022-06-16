import { ImageLayer, ImageLayerFactory } from "../image-layer/ImageLayer";

export class Project {
  name = '';
  listOfLayers: ImageLayer[] = [];
  numberOfLayers = 0;
  totalSupply = 0;
  uid = '';
  admin = "";
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


export class ProjectFactory {
  static listFromFirebase(results: any[]): Project[] {
    const listToReturn: Project[] = [];
    for (let i = 0; i < results.length; i++) {
      const doc = results[i];
      const project = ProjectFactory.fromFBDoc(doc);
      listToReturn.push(project);
    }
    return listToReturn;
  }

  static fromFBDoc(doc: any): Project {
    const data = doc.data();
    const itemToReturn = new Project();
    itemToReturn.name = data.name;
    itemToReturn.uid = data.uid;
    itemToReturn.totalSupply = data.totalSupply;
    itemToReturn.numberOfLayers = data.numberOfLayers;
    itemToReturn.admin = data.admin;
    itemToReturn.listOfLayers = itemToReturn.convertJSONToLayerObjects(data.listOfLayers);
    return itemToReturn;
  }
}








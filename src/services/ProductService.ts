import { IProduct } from '../interfaces/product';
import connection from '../models/connection';
import ProductModel from '../models/ProductModel';

export default class ProdService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async createNewProduct(product: IProduct): Promise<IProduct> {
    const newProduct = await this.model.create(product);

    return newProduct;
  }

  public async showProducts(): Promise<IProduct[]> {
    const products = await this.model.show();

    return products;
  }
}
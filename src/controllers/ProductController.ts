import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

export default class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public newProduct = async (req: Request, res: Response) => {
    const newProduct = await this.service.createNewProduct(req.body);
    console.log('newProduct', newProduct);
    res.status(201).json(newProduct);
  };
}
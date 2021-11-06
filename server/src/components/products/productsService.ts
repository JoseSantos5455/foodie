import Product, { IProduct } from './product';
import slugify from 'slugify';
import { ErrorHandler } from '@/middlewares/error.middleware';

export interface IProductService {
  addProduct: (product: IProduct) => Promise<IProduct>;
  //   getProductBySlug: (slug: string) => Promise<IProduct>;
  getProducts: () => Promise<{ products: IProduct[] }>;
  //   deleteProduct: (id: IProduct['_id']) => Promise<IProduct['_id']>;
  //   updateProduct: (id: IProduct['_id'], updates: any) => Promise<IProduct>;
}

class ProductService implements IProductService {
  async addProduct(product: IProduct): Promise<IProduct> {
    try {
      const productExists = await Product.findOne({ slug: slugify(product.title) });

      if (productExists) {
        throw new ErrorHandler(400, 'Product with this title already exists');
      }

      if (!product.image) {
        throw new ErrorHandler(400, 'Product image is required');
      }

      const createdProduct = await Product.create(product);

      return createdProduct;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async getProducts(select?: string, limit?: number): Promise<{ products: IProduct[] }> {
    try {
      const products = await Product.find({}).select(select).limit(limit);

      if (!products) {
        throw new ErrorHandler(404, 'No product was found');
      }

      return { products };
    } catch (err) {
      if (err.statusCode) {
        throw new ErrorHandler(err.statusCode, err.message);
      } else {
        throw new Error(err.message);
      }
    }
  }

  //   async getProductBySlug(slug: string) {
  //     return Product.find({ slug });
  //   }
}

export default new ProductService();

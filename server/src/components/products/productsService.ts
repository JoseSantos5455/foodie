import Product, { IProduct } from './product';
import slugify from 'slugify';

export interface IProductService {
  addProduct: (product: IProduct) => Promise<IProduct>;
  getProductBySlug: (slug: string) => Promise<IProduct>;
  getProducts: () => Promise<[IProduct]>;
  deleteProduct: (id: IProduct['_id']) => Promise<IProduct['_id']>;
  updateProduct: (id: IProduct['_id'], updates: any) => Promise<IProduct>;
}

class ProductService {
  async addProduct(product: IProduct) {
    try {
      const productExists = await Product.findOne({ slug: slugify(product.title) });

      if (productExists) {
        throw new Error('Product with this title already exists');
      }

      if (!product.image) {
        throw new Error('Product image is required');
      }

      const createdProduct = await Product.create(product);

      return { createdProduct };
    } catch (err) {
      throw new Error('Error accured');
    }
  }

  async getProducts(select?: string, limit?: number) {
    try {
      const products = await Product.find({}).select(select).limit(limit);

      if (!products) {
        throw new Error('No product was found');
      }

      return { products };
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async getProductBySlug(slug: string) {
    return Product.find({ slug });
  }
}

export default new ProductService();

import Product, { IProduct } from './product';
import slugify from 'slugify';
import { ErrorHandler } from '@/middlewares/error.middleware';

export interface IProductService {
  addProduct: (product: IProduct) => Promise<IProduct>;
  getProductBySlug: (slug: string) => Promise<IProduct>;
  getProducts: () => Promise<{ products: IProduct[] }>;
  deleteProduct: (id: IProduct['_id']) => Promise<IProduct['_id']>;
  updateProduct: (slug: string, updates: Partial<IProduct>) => Promise<IProduct>;
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
      throw new ErrorHandler(err.statusCode || 500, err.message);
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
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }

  async getProductBySlug(slug: string): Promise<IProduct> {
    try {
      const product = await Product.findOne({ slug });

      if (!product) {
        throw new ErrorHandler(404, 'Product Not Found');
      }

      return product;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }

  async deleteProduct(id: string): Promise<IProduct['_id']> {
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);

      if (!deletedProduct) {
        throw new ErrorHandler(404, 'Product not found');
      }

      return deletedProduct._id;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }

  async updateProduct(slug: string, updates: Partial<IProduct>): Promise<IProduct> {
    try {
      if (updates.title) {
        updates.slug = slugify(updates.title);
      }
      const updatedProduct = await Product.findOneAndUpdate({ slug }, updates, { new: true });
      if (!updatedProduct) {
        throw new ErrorHandler(404, 'Product Not Found');
      }

      return updatedProduct;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }
}

export default new ProductService();

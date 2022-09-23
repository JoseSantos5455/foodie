import Product, { IProduct } from './product';
import slugify from 'slugify';
import { ErrorHandler } from '@/middlewares/error.middleware';
import APIFilters from '@/helpers/filterAPI';



class ProductService {
  async addProduct(product: IProduct, imageUrl: string): Promise<IProduct> {
    try {
      const productExists = await Product.findOne({ slug: slugify(product.title) });

      if (productExists) {
        throw new ErrorHandler(400, 'Product with this title already exists');
      }

      if (!imageUrl) {
        throw new ErrorHandler(400, 'Failed to upload product image');
      }

      product.image = imageUrl;

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
      const product = await Product.findOne({ slug }).populate('reviews');

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

  async searchByTitle(title: string): Promise<IProduct[]> {
    try {
      if (!title) throw new ErrorHandler(404, 'title must be provided');

      const products = await Product.find({ title: { $regex: new RegExp(title), $options: 'is' }, isActive: true });

      if (products.length === 0) throw new ErrorHandler(404, 'No Product found.');

      return products;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }

  async searchByCategory(category: string): Promise<IProduct[]> {
    try {
      if (!category) throw new ErrorHandler(404, 'category must be provided');

      const products = await Product.find({ category });

      if (products.length === 0) throw new ErrorHandler(404, 'No Product found.');
      return products;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }

  async searchFilters(queryString: any): Promise<IProduct[]> {
    try {
      const features = await new APIFilters(Product.find(), queryString).filtreing();

      const products = await features.query;

      if (products.length === 0) throw new ErrorHandler(404, 'No Product found.');
      return products;
    } catch (err) {
      throw new ErrorHandler(err.statusCode || 500, err.message);
    }
  }
}

export default new ProductService();

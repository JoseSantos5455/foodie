import { addProductStart } from '@/app/slices/productSlice';
import { getCategoriesStart } from '@/app/slices/categorySlice';
import Button from '@/components/UI/Button';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { MultiSelect } from 'react-multi-select-component';
import { productColors, productSizes } from '@/utils/data';
import { useAppSelector } from '@/app/store';
import { CaretDownOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { productSchema } from '@/utils/formValidation';
import Loading from '@/components/loaders/Loading';
import { formFormData } from '@/utils/helpers';
import { IProductForm } from '@/types/types';

const AddProduct = () => {
  const dispatch = useDispatch();
  const { categories, token, isLoadingProducts } = useAppSelector((state) => ({
    categories: state.categories,
    token: state.auth.token,
    isLoadingProducts: state.loadingState.isLoadingProducts,
  }));

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategoriesStart());
    }
  }, [dispatch, categories]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, errors },
  } = useForm<IProductForm>({
    resolver: yupResolver(productSchema),
  });
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);

  const onSubmit = (data: any) => {
    if (colors.length > 0) data.color = colors;
    if (sizes.length > 0) data.sizes = sizes;
    const formData = formFormData(data);
    dispatch(addProductStart({ data: formData, token }));
  };

  return (
    <section className=" py-6">
      <h1 className="font-bold font-primary text-2xl mb-4 capitalize">add product</h1>
      {isLoadingProducts && <Loading />}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full px-4 grid grid-cols-2  gap-2">
        <div className=" md:p-4 p-2  rounded-md bg-white ">
          <h3 className="font-semibold mb-4 pb-4 border-b-2 border-gray-200 flex justify-between">
            <span>Product Info</span>
            <button
              disabled={!isDirty}
              className="bg-gray-800 rounded disabled:opacity-50 disabled:cursor-not-allowed text-white px-2 py-1"
              onClick={() => reset()}
            >
              clear form
            </button>
          </h3>
          <div className="grid items-center  sm:grid-cols-6 mb-4">
            <div className="col-span-2 self-center justify-self-start">
              <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                product title
                <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="col-span-4">
              <input
                className="bg-gray-200 self-center appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purpleBeta"
                type="text"
                {...register('title')}
              />
              <div className="mt-1">
                <span className="text-red-600">{errors?.title?.message}</span>
              </div>
            </div>
          </div>
          <div className="grid items-center  sm:grid-cols-6 mb-4">
            <div className="col-span-2 self-center justify-self-start">
              <label className="block text-gray-500 font-bold  pr-4" htmlFor="inline-full-name">
                category
                <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="relative col-span-4 mb-4">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                {...register('category')}
              >
                {categories &&
                  categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
              </select>
              <div className="mt-1">
                <span className="text-red-600">{errors?.category?.message}</span>
              </div>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <span className="text-md">
                  <CaretDownOutlined />
                </span>
              </div>
            </div>
          </div>
          <div className="grid items-center  sm:grid-cols-6 mb-4">
            <div className="col-span-2 self-center justify-self-start">
              <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                Brand
              </label>
            </div>
            <div className="col-span-4">
              <input
                className="bg-gray-200 self-center appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                {...register('brand')}
              />
            </div>
          </div>
          <div className="grid items-center  sm:grid-cols-6 mb-4">
            <div className="col-span-2 self-center justify-self-start">
              <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                Description
                <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="col-span-4">
              <textarea
                className="bg-gray-200 self-center appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                {...register('description')}
                rows={4}
              ></textarea>
              <div className="mt-1">
                <span className="text-red-600">{errors?.description?.message}</span>
              </div>
            </div>
          </div>

          <div className="grid items-center  sm:grid-cols-6 mb-4">
            <div className="col-span-2 self-center justify-self-start">
              <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                original price $<span className="text-red-500">*</span>
              </label>
            </div>
            <div className="col-span-4">
              <input
                className="bg-gray-200 self-center appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="number"
                {...register('originalPrice', {
                  valueAsNumber: true,
                })}
              />
              <div className="mt-1">
                <span className="text-red-600">{errors?.originalPrice?.message}</span>
              </div>
            </div>
          </div>
          <div className="grid items-center  sm:grid-cols-6 mb-4">
            <div className="col-span-2 self-center justify-self-start">
              <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                dicount percentage %
              </label>
            </div>
            <div className="relative col-span-4 mb-4">
              <input
                className="bg-gray-200 self-center appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="number"
                placeholder="1"
                {...register('discountPercentage', { valueAsNumber: true })}
              />
            </div>
          </div>

          <div className="grid items-center  sm:grid-cols-6 mb-4">
            <div className="col-span-2 self-center justify-self-start">
              <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                main image
                <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="col-span-4">
              <input
                className="bg-gray-200 self-center appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="file"
                {...register('image')}
                id="file"
                accept=".png, .jpg, .jpeg"
              />
              <div className="mt-1">
                <span className="text-red-600">{errors?.image?.message}</span>
              </div>
            </div>
          </div>
          <div className="grid items-center  sm:grid-cols-6 mb-4">
            <div className="col-span-2 self-center justify-self-start">
              <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                sub images
              </label>
            </div>
            <div className=" col-span-4 mb-4">
              <input
                className="bg-gray-200 self-center appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="file"
                multiple
                {...register('subImages')}
              />
            </div>
          </div>
        </div>

        <div className=" md:p-4 p-2  rounded-md bg-white ">
          <div className="grid items-center  sm:grid-cols-6 mb-4">
            <div className="col-span-2 self-center justify-self-start">
              <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                Stock Quantity
                <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="col-span-4">
              <input
                className="bg-gray-200 self-center appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="number"
                {...register('countInStock', { valueAsNumber: true })}
              />
              <div className="mt-1">
                <span className="text-red-600">{errors?.countInStock?.message}</span>
              </div>
            </div>
          </div>
          <div className="grid items-center  sm:grid-cols-6 mb-4">
            <div className="col-span-2 self-center justify-self-start">
              <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                product details
              </label>
            </div>
            <div className="col-span-4">
              <textarea
                className="bg-gray-200 self-center appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                {...register('details')}
                rows={7}
              ></textarea>
              <div className="mt-1">
                <span className="text-red-600">{errors?.details?.message}</span>
              </div>
            </div>
          </div>

          <div className="grid items-center  sm:grid-cols-6 mb-4">
            <div className="col-span-2 self-center justify-self-start">
              <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                production country
              </label>
            </div>
            <div className="col-span-4">
              <input
                className="bg-gray-200 self-center appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                {...register('countryOfProduction')}
              />
            </div>
          </div>
          <div className="grid items-center  sm:grid-cols-6 mb-4">
            <div className="col-span-2 self-center justify-self-start">
              <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                Color
              </label>
            </div>
            <div className="col-span-4">
              <MultiSelect
                className=" self-center appearance-none w-full text-gray-700 leading-tight focus:outline-none  focus:border-purple-500"
                onChange={setColors}
                value={colors}
                options={productColors}
                labelledBy={'Select'}
                isCreatable={true}
              />
            </div>
          </div>

          <div className="grid items-center  sm:grid-cols-6 mb-4">
            <div className="col-span-2 self-center justify-self-start">
              <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                size
              </label>
            </div>
            <div className="col-span-4">
              <MultiSelect
                className=" self-center appearance-none w-full text-gray-700 leading-tight focus:outline-none  focus:border-purple-500"
                onChange={setSizes}
                value={sizes}
                options={productSizes}
                labelledBy={'Select'}
                isCreatable={true}
              />
            </div>
          </div>

          <div className="grid items-center  sm:grid-cols-6 mb-4">
            <div className="col-span-2 self-center justify-self-start">
              <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                Model
              </label>
            </div>
            <div className="col-span-4">
              <input
                className="bg-gray-200 self-center appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                {...register('model')}
              />
            </div>
          </div>
          <div className="grid items-center  sm:grid-cols-6 mb-4">
            <div className="col-span-2 self-center justify-self-start">
              <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                weight
              </label>
            </div>
            <div className="col-span-4">
              <input
                className="bg-gray-200 self-center appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                {...register('weight')}
                type="number"
              />
            </div>
          </div>

          <Button type="submit" theme="btn-primary">
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;

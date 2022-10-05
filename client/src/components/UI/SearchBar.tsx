import { useSearch } from '@/utils/hooks/useSearch';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

type SearchType = {
  searchWord: string;
};

const SearchBar = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SearchType>();

  const onSubmit = (data: SearchType) => {
    navigate(`/search/${data.searchWord}`);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-4 sm:gap-2 lg:w-max w-full lg:justify-items-end gap-2"
    >
      <div className="relative col-span-3 ">
        <input
          {...register('searchWord', { required: true, min: 3, max: 100 })}
          type="text"
          className="bg-gray-200  appearance-none border-2 border-gray-200 rounded w-full py-1 px-6 text-gray-700 leading-tight focus:outline-none focus:border-primaryDark "
        />
        <span className="absolute inline-flex top-1/2 left-0.5 text-2xl text-gray-400 transform -translate-y-1/2">
          <SearchOutlined className="text-gray-500" />
        </span>
        <span className="text-red-500">{errors.searchWord && errors.searchWord.message}</span>
      </div>
      <Button theme="btn-dark">Search</Button>
    </form>
  );
};

export default SearchBar;

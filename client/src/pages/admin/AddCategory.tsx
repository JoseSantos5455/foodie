import { addCategoryStart } from 'app/slices/categorySlice';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

interface Props {}

const AddCategory = (props: Props) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    if (data.image) {
      dispatch(addCategoryStart({ image: data.image[0], name: data.name }));
    } else {
      dispatch(addCategoryStart(data));
    }
  };

  return (
    <div className="py-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" className="block" {...register('name')} />
        <input type="file" {...register('image')} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddCategory;

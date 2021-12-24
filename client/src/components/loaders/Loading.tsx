import 'styles/loading.css';

const Loading = () => {
  return (
    <div className="loader-container  ">
      <div className="centered">
        <h1 className="text-2xl text-center text-gray-500 font-secondary">Loading...</h1>
        <div className="blob-1"></div>
        <div className="blob-2"></div>
      </div>
    </div>
  );
};

export default Loading;

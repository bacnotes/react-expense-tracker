import cat from './cat.jpg';

const Cover = () => {
  return (
    <div>
      <img
        className='auth__cover'
        src={cat}
        alt='cover'
      />
    </div>
  );
};

export default Cover;

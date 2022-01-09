import note from './note.jpeg';

const Cover = () => {
  return (
    <div>
      <img
        className='auth__cover'
        src={note}
        alt='cover'
      />
    </div>
  );
};

export default Cover;

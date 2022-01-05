const Container = (props) => {
  return (
    // 動態加上其他的className
    <div className={`container ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Container;

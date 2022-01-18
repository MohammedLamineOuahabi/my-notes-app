const Container = props => {
  return (
    <div className={props.containerStyle ? props.containerStyle : ''}>
      <div className={props.wrapStyle ? props.wrapStyle : ''}>{props.children}</div>
    </div>
  );
};

export default Container;

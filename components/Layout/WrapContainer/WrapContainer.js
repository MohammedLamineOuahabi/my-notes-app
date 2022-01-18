import './WrapContainer.module';

const wrapContainer = props => {
  return (
    <div className={'container ' + (props.className ? props.className : '')}>
      <div className='wrap'>{props.children}</div>
    </div>
  );
};

export default wrapContainer;

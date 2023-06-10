import Binding from './Binding';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

function Contacts() {
  return (
    <div className="mb-10 lg:flex lg:h-[calc(100vh-176px)] lg:min-h-[540px] lg:items-center lg:justify-center">
      <div className="relative flex h-full w-full lg:h-[540px] lg:w-fit 2xl:h-[710px]">
        <LeftSide />

        <Binding />

        <RightSide />
      </div>
    </div>
  );
}

export default Contacts;

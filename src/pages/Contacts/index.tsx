import Binding from './Binding';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

function Contacts() {
  return (
    <div className="relative mx-auto mb-7 flex h-full w-full lg:h-[540px] lg:w-fit">
      <LeftSide />

      <Binding />

      <RightSide />
    </div>
  );
}

export default Contacts;

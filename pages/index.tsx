import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../src/store";

const Home: FC = observer(() => {
  // create button to add the values
  const store = useStore();
  return (
    <>
      {/* update the numbers */}
      <h2>{store.num1}</h2>
      <button onClick={() => store.addingOne()}>Add 1</button>
      <button onClick={() => store.subtractingOne()}>Subtract 1</button>
    </>
  );
});

export default Home;

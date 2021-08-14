import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const MyPhaser = dynamic(() => import("../src/hello-phaser"), {
  ssr: false,
});

const PhaserPage: NextPage = () => {
  const [pristine, setPristine] = useState(true);

  useEffect(() => {
    setPristine(false);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {!pristine ? (
          <>
            <MyPhaser />
          </>
        ) : (
          <>Phaser</>
        )}
      </header>
    </div>
  );
};

export default PhaserPage;

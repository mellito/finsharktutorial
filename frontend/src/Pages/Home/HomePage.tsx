import React from "react";
import Hero from "../../Components/Hero/Hero";

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HomePage: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default HomePage;

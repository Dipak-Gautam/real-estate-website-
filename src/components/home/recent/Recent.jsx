import React from "react";
import Heading from "../../common/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";

const Recent = () => {
  return (
    <>
      <section className="recent padding">
        <div className="container">
          <Heading
            title="Recent Property Listed"
            subtitle="Naya ghar is a leading real estate and rental marketplace established to help customers with real estate services. We offer an online marketplace to buy or rent a house, apartment and land in Nepal. Not only that, our company allows you to gain knowledge about the latest prices of land, houses and apartment. Our professional staffs attempt to provide quality services at the best price."
          />
          <RecentCard />
        </div>
      </section>
    </>
  );
};

export default Recent;

import React from "react";
import Link from "gatsby-link";
import Placeholder from "../images/placeholder.jpg";

const about = () => (
  <div
    className="uk-child-width-1-3@m uk-grid-small uk-grid-match"
    data-uk-grid
  >
    <div>
      <div className="uk-card uk-card-hover uk-card-default">
        <div className="uk-card-media-top">
          <img src={Placeholder} alt="" />
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">Summary of Book</h3>
          <p>
            Afghani immigrant Amir is summoned from his California home to
            Pakistan by Rahim Khan, an old, dying friend of his father. As a boy
            in Afghanistan, wealthy Amir was best friends with servant's son
            Hassan, but when Hassan was brutally assaulted by a local bully,
            Amir was too scared to save him, and has been tormented by guilt
            ever since. The Kite Runner by Khaled Hosseini
          </p>
        </div>
      </div>
    </div>
    <div>
      <div className="uk-card uk-card-hover uk-card-default">
        <div className="uk-card-media-top">
          <img src={Placeholder} alt="" />
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">Afghanistan Relief Organization</h3>
          <p>
            <a href="http://www.afghanrelief.org" target="blank">
              Afghanistan Relief Organization (ARO)
            </a>{" "}
            is a non-political, non-religious, nonprofit, humanitarian
            organization, registered in the United States and in Afghanistan.
            Recent projects: The Kite Runner Project: ARO designated official
            NGO partner in The Kite Runner social action campaign with
            Participant Productions and Paramount Vantage. The Kite Runner
            campaign provides an opportunity to raise awareness and support for
            educational initiatives both in and outside of Afghanistan. Funds
            raised through the campaign go to teacher training and educational
            programs in Afghanistan Visit the website to donate to their cause.
          </p>
        </div>
      </div>
    </div>
    <div>
      <div className="uk-card uk-card-hover uk-card-default">
        <div className="uk-card-media-top">
          <img src={Placeholder} alt="" />
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">About the Mural</h3>
          <p>
            Fossil Ridge High School English teacher Mr. Hanauer had his Pre AP
            sophomore classes each create a mural for whole class final project.
            Each period had to choose a claim and call to action to convey
            through art. The claim period 7 chose was, “f there is an
            opportunity to achieve redemption, it is ethical to do so based on
            egoistic hedonism fueled by guilt.”
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default about;

import React from "react";
import Link from "gatsby-link";
import Placeholder from "../images/placeholder.jpg";
import bookImg from "../images/book.jpg";
import aroLogo from "../images/arologo.png";
import afghanistanImg from "../images/afghanistan.jpg";
// import muralImg from "../images/processpics/muralpic.jpg";

const about = () => (
  <div
    className="uk-child-width-1-3@m uk-grid-small"
    data-uk-grid
    data-uk-sortable="handle: .uk-card"
    data-uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 100; repeat: true"
  >
    <div>
      <div className="uk-card uk-card-hover uk-card-default">
        <div className="uk-card-media-top uk-height-max-medium">
          <img src={bookImg} alt="" className="uk-height-max-medium" />
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">Summary of The Kite Runner</h3>
          <p>
            The Kite Runner is a novel by the Afghan author Khaled Hosseini.
            Afghani immigrant Amir is summoned from his California home to
            Pakistan by Rahim Khan, an old, dying friend of his father. As a boy
            in Afghanistan, wealthy Amir was best friends with servant's son
            Hassan, but when Hassan was brutally assaulted by a local bully,
            Amir was too scared to save him, and has been tormented by guilt
            ever since. The novel revolves around Amir’s return to Afghanistan
            in hopes of making amends for his inability to help his friend when
            he needed him the most.
          </p>
        </div>
      </div>
    </div>
    <div>
      <div className="uk-card uk-card-hover uk-card-default">
        <div className="uk-card-media-top">
          <img src={aroLogo} alt="" className="uk-height-max-medium" />
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">Afghanistan Relief Organization</h3>
          <p>
            <a href="http://www.afghanrelief.org" target="blank">
              Afghanistan Relief Organization (ARO)
            </a>{" "}
            is a non-political, non-religious, nonprofit, humanitarian
            organization, registered in the United States and in Afghanistan.
          </p>
        </div>
      </div>
    </div>
    <div>
      <div className="uk-card uk-card-hover uk-card-default">
        <div className="uk-card-media-top">
          <img src={aroLogo} alt="" className="uk-height-max-medium" />
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">Call to Action</h3>
          <p>
            The Kite Runner Project: Our call to action is to redeem Afghanistan
            and America through the use of the nonprofit Afghanistan Relief
            Organization. This nonprofit is working on many projects and the one
            we have decided to focus on is Kite Runner project. ARO designated
            official NGO partner in The Kite Runner social action campaign with
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
          <img src={Placeholder} alt="" className="uk-height-max-medium" />
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">About the Mural</h3>
          <p>
            Fossil Ridge High School English teacher Mr. Hanauer had his Pre AP
            sophomore classes each create a mural as a final project for the
            whole class. Each period had to choose a claim and a call to action
            to convey through art. Our classes claim was “if there is an
            opportunity to achieve redemption, it is ethical to do so based on
            egoistic hedonism fueled by guilt.” The Kite Runner campaign
            provides an opportunity to raise awareness and support for
            educational initiatives both in and outside of Afghanistan.
          </p>
        </div>
      </div>
    </div>
    <div>
      <div className="uk-card uk-card-hover uk-card-default">
        <div className="uk-card-media-top">
          <img src={afghanistanImg} alt="" className="uk-height-max-medium" />
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">Afghanistan’s Condition in General</h3>
          <p>
            Afghanistan, even to this day, is still a war-ridden country.
            Afghanistan faces numerous political challenges as it fights the
            insurgency. In February 2018, President Mohammad Ashraf Ghani,
            during the second Kabul Process Conference, offered to the Taliban a
            cease-fire and prisoner release with no preconditions, but said the
            Taliban must recognize the government as legitimate. Additionally,
            the security situation has worsened and civilian casualties are at
            their highest level since the fighting began back in 2002.
            Afghanistan has not significantly improved its economic conditions
            since the Soviet invasion in 1979 and a large portion of it GDP
            comes from its rampant opium trade.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default about;

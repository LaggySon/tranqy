import badge from "./images/tranqBadge.png";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Home() {
  return (
    <div className="content">
      <h1>Welcome to the Overwatch Tranquility Community!</h1>
      <div className="textBody">
        <img src={badge} />
        <div id="welcomeBox">
        <div id="welcomeText">
          <p>
          Welcome to the Overwatch Tranquility Community. This community is
          intended to aid in the growth of players and their development in the
          game of Overwatch. It was first conceived as a casual intramural level
          tournament but has evolved into a developmental community helping
          players across multiple skill tiers in a season style format.
        </p>

        <p>
          With that being said, Overwatch Tranquility is a well-organized
          community and will take the structure, branding, production and
          operation seriously. It’s a community that is meant to be fun and
          drama free, but that only works if everyone participates and follows
          the developed guidelines.
        </p>

        <p>
          After five successful seasons we are set to kick off Season 6 February
          10, 2020 with an expanded group that now contains 72 total teams
          across three tiers.
        </p>

        <p>
          Harmony Tier (2000-3000 w/ 2650 SR avg) Discord Tier (2800-3500 w/
          3200 SR avg) Transcendence Tier (3300-4000 w/ 3650 SR avg)
        </p>

        <p>
          The OWTC is open to all players in the Gold (2000 SR) to Masters (4000
          SR) range, and it is meant to be an inclusive space to help build a
          community of competition and friendship.
        </p>
        </div>
        
        <div id="timeline">
          <TwitterTimelineEmbed
          sourceType="profile"
          screenName="owtranquility"
          options={{ height: 450}}
        />
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;

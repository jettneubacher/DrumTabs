import "./css/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-title">
        <h2>Welcome to the AI Drum Tab Generator</h2>
      </div>
      <p>
        As a drummer of 15 years, I have always wanted a tool that could
        translate a song into sheet music. Access to written music is vital for
        any musician - beginner or expert - to learn new songs and develop their
        craft. While tools like this do exist, they are either stuck behind
        paywalls or generate far too complicated sheets. This is why I decided
        to create the AI Drum Transcriber. With the power of an artificial
        intelligence (that I built!), this website will allow anyone to generate
        drum tablature, which is a much simpler and accessible form of music
        notation. All you need is an audio file of your choosing! <br></br>
        <br></br>If you simply wish to witness my awesome tool in action and
        don't have any audio files of your own, I have provided sample audio
        files for you to use and generate drum tablature from. These samples
        were written and recorded by me for my band's upcoming album.
      </p>

      <div className="home-section">
        <h3 className="home-subtitle">What is Drum Tablature?</h3>
        <p>
          As mentioned above, Drum tablatures (drum tabs) are a much simpler
          type of music notation when compared to sheet music. Drum tabs are
          constant linear representations of when a certain drum is hit,
          visualized as grid-like representations of the drum kit. Each row in a
          single set of tablature (5 rows total for each horizontal set of tabs)
          represents a specific part of the drum kit. For this tool, I have
          organized the drum kit into 5 main categories. Here is an example
          empty 'set' of tabs:
        </p>
        <div className="home-ex-tabs">
          {`Cymbal    -  -  -  -  |  -  -  -  -  |
Hi-Hat    -  -  -  -  |  -  -  -  -  |
Snare     -  -  -  -  |  -  -  -  -  |
Toms      -  -  -  -  |  -  -  -  -  |
Kick      -  -  -  -  |  -  -  -  -  |`}
        </div>
        <p>
          This means that the top-most row in a horizontal tab set represents
          the cymbals and the bottom-most row represents the kick drum. If the
          AI model predicts a drum category has been hit, it will represent this
          hit with an X (for cymbals and hi-hats) or an O (for snare, toms, and
          kick). This character (X or O) will be shown on the given row (1-5)
          for a respective drum category.
        </p>
        <br></br>
        <p>
          As you move <b>right</b> across a set of tabs, you are moving{" "}
          <b>forward</b> in time. The hit indicators will be horizontally
          aligned with the timeframe that the AI model predicted the hit
          occurrence. Each time frame is represented by a column in the
          tablature, encompassing all 5 rows for all 5 drum kit categories. I
          have organized the tabs into groups of 4 time frames together,
          dividing these groupings with a vertical bar (this makes reading them
          much easier).
        </p>
        <br></br>
        <p>
          You can think about a full horizontal set of tabs as a collection of
          many smaller time frame columns. An audio file will be represented by
          as many horizontal sets of tabs as necessary to encompass the length
          of the audio from start to finish.
        </p>
        <br></br>
        <p>
          Here is an example set of tabs with 2 groupings of 4 timeframes (8
          timeframes total):
        </p>
        <div className="home-ex-tabs">
          {`Cymbal    -  -  -  -  |  -  X  -  -  | 
Hi-Hat    -  -  X  -  |  -  -  -  -  | 
Snare     O  -  -  -  |  O  -  -  -  | 
Toms      -  -  -  -  |  -  -  -  -  | 
Kick      -  -  O  -  |  -  -  O  -  |`}
        </div>
        <p>
          The cymbal row shows us that a cymbal hit occurred in the 6th time
          frame. The Hi-Hat row shows a hit in the 3rd time frame. The Snare row
          shows us hits in the 1st and 5th time frames. The Tom row shows no
          hits during the 8 time frames. The Kick row shows us hits in the 3rd
          and 7th time frames.
        </p>
        <p>
          The column representing time frame 3 shows us hit indicators for both
          the Hi-Hat and Kick. This is very common. It means that the AI model
          has predicted that the Hi-Hat and Kick were hit at the same time.
        </p>
      </div>
      <div className="home-section">
        <h3 className="home-subtitle">How is AI Used in this Project?</h3>
        <p>
          This project uses artificial intelligence to <strong>listen</strong>{" "}
          to an audio file and <strong>translate</strong> the sound information
          into predictions for drum hits. The model I created is now a stagnant
          model, meaning it is no longer learning. The model is in it's final
          form and simply calculutes predictions based on what I previously
          'taught' it.<br></br>
          <br></br>An AI model consists of layers of connected nodes. These
          nodes have <strong>weights</strong>. When sound information is passed
          into my model, it checks the information with the previously
          determined ‘weights’ and moves through the layers, which grow in
          complexity. By the end of this process, the model will have sent the
          given information through a path of nodes (from layer to layer) that
          eventually ends on an actual prediction. This prediction is a decimal
          value (0.0 to 1.0) that corresponds to a drum category.
        </p>
        <br></br>
        <p>
          Each drum category is given its own unique prediction value for a
          given time frame’s information. If the prediction value is above a
          certain threshold (commonly 0.5), the model will conclude that the
          drum category was hit during that time frame.
        </p>
        <br></br>
        <p>
          The aforementioned predetermined weights are given to each node during
          the model training phase. I sent 30,000 timeframes through the model
          with corresponding annotations. These annotations tell the model what
          the expected prediction is for each time frame (the actual drum tabs).
          The model then updates the weight values of each node based on the
          actual drum hits that occurred so that it can accurately predict a new
          time frame without knowing what is the expected/actual prediction.
        </p>
      </div>
      <div className="home-section">
        <h3 className="home-subtitle">Quick Summary + Utilized Skills</h3>
        <p>
          <ol>
            <li>
              Accepts an audio file and processes it into important numerical
              information{" "}
              <ul>
                <li>
                  Data cleaning, data compilation, data processing, feature
                  extraction, feature standardization, memory optimization
                </li>
              </ul>
            </li>
            <li>
              Sends this information to my backend, which loads and gives the
              data to the AI model
              <ul>
                <li>
                  Full stack pipelining, file handling, API endpoints, error
                  handling/logging, protecting memory limits
                </li>
              </ul>
            </li>
            <li>
              Gets predictions from the model and formats/displays them for the
              user via this website
              <ul>
                <li>
                  AI model creation, model evaluation, data formatting,
                  accessible/intuitive UI
                </li>
              </ul>
            </li>
          </ol>
        </p>
      </div>
    </div>
  );
}

export default Home;

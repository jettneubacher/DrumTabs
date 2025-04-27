import "./css/Development.css";

function Development() {
  return (
    <div className="development">
      <div className="dev-section">
        <span className="dev-title">
          <p className="dev-date">
            <i>Coming Soon</i>
          </p>
          <h2>Future Plans</h2>
        </span>
        <div className="dev-content">
          <ul>
            <li>
              Model 2:{" "}
              <ul>
                <li>
                  Use preexisting model 1, but accept audio files that aren't
                  just drum-only
                </li>
                <li>
                  This can be achieved by upgrading my backend audio
                  preprocessing to isolate and scrape drum audio from an entire
                  song (guitars, vocals, etc.)
                </li>
              </ul>
            </li>
            <li>
              Model 3:
              <ul>
                <li>Entirely new model trained on entire songs</li>
                <li>
                  Model will learn to isolate and classify drum hits amongst
                  other instruments
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="dev-section">
        <span className="dev-title">
          <p className="dev-date">
            <i>4/28/2025</i>
          </p>
          <h2>App Deploy</h2>
        </span>
        <div className="dev-content">
          <ul>
            <li>Official deploy of AI Drum Transcriber App</li>
          </ul>
        </div>
      </div>
      <div className="dev-section">
        <span className="dev-title">
          <p className="dev-date">
            <i>4/24/2025</i>
          </p>
          <h2>Beta App Deploy</h2>
        </span>
        <div className="dev-content">
          <ul>
            <li>
              Deployed frontend to github pages and shared with close friends,
              fellow computer scientists, and old professors
            </li>
            <li>
              Collected feedback for upcoming final deployment
              <li></li>Made the frontend much more user friendly (samples front
              and center on the generate page, more in-depth about section,
              etc.)
            </li>
          </ul>
        </div>
      </div>
      <div className="dev-section">
        <span className="dev-title">
          <p className="dev-date">
            <i>4/20-24/2025</i>
          </p>
          <h2>Final Deployment Prep</h2>
        </span>
        <div className="dev-content">
          <li>
            Tried to deploy backend to Heroku, but hit the slug size limit.
            Switched to Render for the backend
          </li>
          <li>
            Switched to Docker deployment as well (to ensure required libraries
            were functional and so I could learn about Docker)
          </li>
          <li>
            Officially deployed to Render and tested via the frontend running on
            my local machine
          </li>
        </div>
      </div>
      <div className="dev-section">
        <span className="dev-title">
          <p className="dev-date">
            <i>4/16-18/2025</i>
          </p>
          <h2>Frontend Development</h2>
        </span>
        <div className="dev-content">
          <ul>
            <li>
              Built responsive frontend with react to dynamically lay out drum
              tabs on the web
            </li>
            <li>Designed the website around this core functionality</li>
            <li>
              Sent POST and GET requests to the backend running on my local
              machine for testing
            </li>
          </ul>
        </div>
      </div>
      <div className="dev-section">
        <span className="dev-title">
          <p className="dev-date">
            <i>4/10-15/2025</i>
          </p>
          <h2>Backend Pipeline Development</h2>
        </span>
        <div className="dev-content">
          <ul>
            <li>Stored final model 1 version on local machine</li>
            <li>
              Created a working script to run inference on a .wav file by
              loading the final model 1 version
            </li>
            <li>Added thresholding at 0.4 for multi-label outputs</li>
            <li>
              Created a script to convert binary predictions into structured
              drum tabs
            </li>
            <li>
              Created a main backend script with several endpoints for the
              future frontend to call
            </li>
          </ul>
        </div>
      </div>
      <div className="dev-section">
        <span className="dev-title">
          <p className="dev-date">
            <i>4/8/2025</i>
          </p>
          <h2>Model 1 Training Challenges</h2>
        </span>
        <div className="dev-content">
          <ul>
            <li>
              After various training attempts, realized an issue with node
              initialization, failed convergence, and stagnating accuracy/loss
            </li>
            <li>Switched to Xavier Initialization for weights</li>
            <li>
              Switched to Focal Loss instead of BCE Loss to handle the class
              imbalance (no-hits are very common)
            </li>
            <li>Standardized input features for better convergence</li>
          </ul>
        </div>
      </div>
      <div className="dev-section">
        <span className="dev-title">
          <p className="dev-date">
            <i>4/2-5/2025</i>
          </p>
          <h2>Dataset Prep</h2>
        </span>
        <div className="dev-content">
          <ul>
            <li>Selected the ENST Drum Dataset</li>
            <li>
              Loaded dataset onto my local machine and began data preprocessing
            </li>
            <li>
              Turned audio files into 30,000 timeframes with respective feature
              data
            </li>
          </ul>
        </div>
      </div>
      <div className="dev-section">
        <span className="dev-title">
          <p className="dev-date">
            <i>4/1/2025</i>
          </p>
          <h2>Project Start</h2>
        </span>
        <div className="dev-content">
          <ul>
            <li>Conception of the project</li>
            <li>
              Crafted the initial model 1 architecture from scratch (3 layer
              CNN)
            </li>
            <li>Set up basic multi-label prediction for the 5 drum classes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Development;

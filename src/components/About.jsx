import "./css/About.css";

function About() {
  return (
    <div className="about">
      <h2 className="abt-subtitle">Model 1</h2>
      <p className="citation">
        Trained with ENST Drums Dataset: O. Gillet & G. Richard,{" "}
        <i>
          “ENST-Drums: an extensive audio-visual database for drum signals
          processing”
        </i>
        . In Proc of 7th International Conference on Music Information
        Retrieval, ISMIR 2006, Oct. 2006, Victoria, Canada.{" "}
      </p>
      <div className="architecture1">
        <h3 className="abt-section">Architecture - CNN</h3>
        <ol>
          <li>
            Convolutional Layer 1
            <ul>
              <li>
                Captures local temporal-frequency features (e.g., fast attack of
                a snare hit)
              </li>
              <li>
                Finds low-level cues like frequency edges, percussive
                transients.
              </li>
            </ul>
          </li>
          <li>
            Convolutional Layer 2
            <ul>
              <li>
                Builds on Conv1, combines simple patterns into more complex ones
                (e.g., snare + hi-hat in the same time frame)
              </li>
              <li>
                Mid-level features across time and frequency (drum rolls or
                stacked hits)
              </li>
            </ul>
          </li>
          <li>
            Convolutional Layer 3
            <ul>
              <li>
                Deep feature abstraction (understanding drum context across a
                full 0.116s timeframe)
              </li>
              <li>
                High-level feature maps that separate different drum instruments
              </li>
            </ul>
          </li>
          <li>
            ReLU
            <ul>
              <li>Applied after each convolutional layer</li>
              <li>Adds non-linearity</li>
            </ul>
          </li>
          <li>
            Max Pooling
            <ul>
              <li>Also applied after each convolutional layer</li>
              <li>Reduces dimensionality, keeps strongest signals</li>
            </ul>
          </li>
          <li>
            Flatten
            <ul>
              <li>
                Turns final feature map into a 1D vector for classification
              </li>
            </ul>
          </li>
          <li>
            Fully Connected Layer 1
            <ul>
              <li>
                Dense layer learns nonlinear comibinations of all previous
                features
              </li>
            </ul>
          </li>
          <li>
            Fully Connected Layer 2
            <ul>
              <li>
                Output layer with 5 nodes (one per drum class), each predicting
                the probability of that drum hit being present in the timeframe
              </li>
            </ul>
          </li>
          <li>
            Sigmoid Activation
            <ul>
              <li>
                Sigmoid threshold is 0.4 (any probability over 0.4 is accepted
                as a hit)
              </li>
              <li>
                Final output is a vector with 5 indexes, each representing a
                drum class, each containing a binary value of 1 (for hit
                detected) or 0 (for no hit detected)
              </li>
              <li>Multi-label, each class is independent (not softmax)</li>
            </ul>
          </li>
        </ol>
      </div>
      <div className="audio1">
        <h3 className="abt-section">Audio Processing</h3>
        <ol>
          <li>
            Audio files are checked for size requirement (less than 100mb) and
            file type (.wav only, for now)
          </li>
          <li>
            Audio is then resampled to 22,050 Hz for space/memory usage and
            consistency with training data
          </li>
          <li>
            Audio is converted from stereo to mono for simplified analysis
          </li>
          <li>
            Feature extraction:
            <ul>
              <li>MFCC's (Mel-frequency cepstral coefficients)</li>
              <li>Spectrogram (log-magnitude)</li>
              <li>Onset Envelope</li>
            </ul>
          </li>
          <li>
            Timeframe Segmentation
            <ul>
              <li>
                Data is broken into slices of 10 time steps (approx 0.116s each)
              </li>
              <li>
                Each segment becomes a tensor of shape (10, 1039), where 10 =
                timesteps and 1039 = concacenated features
              </li>
            </ul>
          </li>
          <li>Features are standardized using StandardScaler</li>
          <li>
            Final feature array is converted to float16 to reduce RAM usage on
            the backend
          </li>
        </ol>
      </div>
      <div className="training1">
        <h3 className="abt-section">Model Training</h3>
        <ul>
          <li>
            Trained on synchronized drum samples from the ENST Drums dataset
            split into 0.116s timeframes
            <ul>
              <li>Over 400 total audio files</li>
              <li>
                Over 30,000 audio timeframes, each with 1039 feature values
              </li>
              <li>2.85 GB of feature data</li>
            </ul>
          </li>
          <li>
            Xavier Initialization - stabilizes weight distribution and helps
            convergence
          </li>
          <li>
            Focal Loss - helps model focus on less frequent classes, improves
            class balance in training
          </li>
          <li>
            StepLR - schedules the learning rate to help smooth out convergence
            and avoid overshooting local minima
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;

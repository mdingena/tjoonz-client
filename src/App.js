import React from 'react';
import StoreProvider from './providers/StoreProvider';
import ResizeObserverProvider from './providers/ResizeObserverProvider';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Screens from './screens';
import Wrap from './components/Wrap';
import Navigation from './components/Navigation';
import Audio from './components/Audio';
import Home from './screens/Home';
import styles from './App.module.css';

const App = () => (
  <StoreProvider>
    <ResizeObserverProvider>
      <Router>
        <Route path='/:url*' exact strict render={props => <Redirect to={`${props.location.pathname}/`} />} />

        <div className={styles.navigation}>
          <Wrap>
            <Navigation
              links={[
                { to: '/charts/', text: 'Charts' },
                { to: '/about/', text: 'About Tjoonz' },
                { to: '/about/uploading/', text: 'About Uploading' },
                { to: '/about/contributing/', text: 'Become an Editor' },
                { to: '/thanks/', text: 'Special Thanks' },
                { to: '/privacy-policy/', text: 'Privacy Policy' },
                { to: '/about/feedback/', text: 'Feedback' }
              ]}
            />
          </Wrap>
        </div>

        <div className={styles.screens}>
          <Wrap>
            <Screens>
              <Route exact path='/' component={Home} />
            </Screens>
          </Wrap>
        </div>

        <div className={styles.player}>
          <Wrap>
            <Audio />
          </Wrap>
        </div>

      </Router>
    </ResizeObserverProvider>
  </StoreProvider>
);

export default App;

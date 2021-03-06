import { routerReducer, routerMiddleware, push } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';

const history = createBrowserHistory();
const routerMiddlewareHistory = routerMiddleware(history);
const middlewares = [thunk, routerMiddlewareHistory];
const defaultState = {
  currentVideo: {
    videoId: null,
    title: '',
    description: '',
    createdBy: '',
    submittedBy: '',
    dateSubmitted: '',
    linkType: '',
    category: '',
    subcategory: '',
    thumbnail: '',
  },
  videoCache: {},
  currentPlaylist: {
    videos: [],
    counter: 0,
    playlistType: null,
    playlistIsLoading: false
  },
  mindfeedVideos: [],
  topVideos: [],
  recentVideos: [],
  categoryVideos: [],
  userInfo: {
    userCategories: {},
    userBookmarks: [],
    userLikes: [],
    userDislikes: [],
  },
  authStatus: {
    loggedIn: false,
    currentUser: 'guest'
  }
};

if (process.env.NODE_ENV !== 'production') {
// Enables logging of all Redux state changes.
// Very helpful for figuring out where an action is buggy,
// but also clogs up the console. To turn it off, just
// comment out the line below.
  // middlewares.push(createLogger());
}

// Create store makes the store, combining all the reducers
// into a single object. We then turn on the Redux browser
// extension if it exists and apply Redux middleware
// (redux-thunk and logger)

const store = createStore(
  // Add all reducers
  rootReducer,
  // Initial empty values to define state
  defaultState,
  // To add Redux dev tools if installed
  composeWithDevTools(
    // Add redux-thunk and logger middlewares
    applyMiddleware(...middlewares)
  )
);

export default store;
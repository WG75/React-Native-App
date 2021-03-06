/* eslint-disable */
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import url from "url"
import { NativeModules } from "react-native";


const { hostname } = url.parse(NativeModules.SourceCode.scriptURL)

export default Reactotron.configure({ name: 'Mossad',  host: hostname }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux()) // redux plugin
  .connect(); // let's connect!

// Totally hacky, but this allows you to not import reactotron-react-native
// on every file.  This is just DEV mode, so no big deal.
if (__DEV__) {
  console.tron = Reactotron;
}

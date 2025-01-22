import { Provider } from "react-redux"
import Body from "./JobPost/components/Body"
import store from "./JobPost/utils/redux/appStore"



function App() {

  return (
    <>
    <div>
      <Provider store={store}>
      <Body/>
      </Provider>
    </div>
    </>
  )
}

export default App

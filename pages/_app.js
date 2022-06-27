
import { io, SocketContext } from '../hooks/useSocket'
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return <SocketContext.Provider value={io}>
    <Component {...pageProps} />
  </SocketContext.Provider>
}

export default MyApp

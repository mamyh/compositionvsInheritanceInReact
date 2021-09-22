
import './App.css';
import Bracket from './Components/Bracket';
import Emoji from './Components/Emoji';
import Text from './Components/Text';
// import Text from './Inheritace/Text';

function App() {
  // return <Text></Text>
  return (
    <Bracket>
      {({ addBracket }) => (
        <Emoji>
          {({ addEmoji }) => <Text addBracket={addBracket} addEmoji={addEmoji} />}
        </Emoji>
      )}
    </Bracket>
  )
}

export default App;

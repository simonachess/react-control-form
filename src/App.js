import './App.css';
import { useState } from 'react';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
import Select from './components/Select';
import ShowText from './components/ShowText';
import TextArea from './components/TextArea';
import TextInput from './components/TextInput';

function App() {

  const [showText, setShowText] = useState('nothing');

  const whatText = (text) => {
    setShowText(text);
  }

  return (
    <div className="App">
      <ShowText text={showText} />
      <TextInput whatText={whatText} />
      <Select />
      <TextArea />
      <Checkbox />
      <Radio />
    </div>
  );
}

export default App;

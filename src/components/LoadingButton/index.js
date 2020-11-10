import React from 'react';
import ReactDOM from 'react-dom';

import NiceButton from './NiceButton';

import './styles.css';

function App() {
  const [isFirstButtonLoading, setIsFirstButtonLoading] = React.useState(false);
  const [isSecondButtonLoading, setIsSecondButtonLoading] = React.useState(
    false
  );
  const [loadingSpeed, setLoadingSpeed] = React.useState(1);

  React.useEffect(() => {
    if (isFirstButtonLoading) {
      setTimeout(() => {
        setIsFirstButtonLoading(false);
      }, 1000 / loadingSpeed);
    }

    if (isSecondButtonLoading) {
      setTimeout(() => {
        setIsSecondButtonLoading(false);
      }, 1000 / loadingSpeed);
    }
  }, [isFirstButtonLoading, isSecondButtonLoading, loadingSpeed]);

  return (
    <div className="App">
      <div>
        <NiceButton
          isLoading={isSecondButtonLoading}
          onClick={() => setIsSecondButtonLoading(true)}
        >
          Click me to start a nicer loading button experience!
        </NiceButton>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

import { MantineProvider } from '@mantine/core';
import Landingpage from './pages/landingPage';

function App() {
  return (
    <div>
      <MantineProvider
        theme={{
          colors: {
            brand: [
              '#3b4144',
              '#b2faf1',
              '#86f5e8',
              '#5af1df',
              '#32edd5',
              '#1ed4bc',
              '#0ea592',
              '#017668',
              '#00483f',
              '#001a15',
            ],
          },
          primaryColor: 'brand',
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Landingpage />
      </MantineProvider>
    </div>
  );
}

export default App;

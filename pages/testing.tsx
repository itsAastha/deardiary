import axios from 'axios';
import React from 'react';
import { Bar } from 'react-chartjs-2';

interface JsonData {
  anger_curve: number[];
  anxiety_curve: number[];
  dates: string[];
  emotion: string;
  happiness_curve: number[];
  sadness_curve: number[];
}

interface HomeProps {
  jsonData: JsonData;
}

const Home: React.FC<HomeProps> = ({ jsonData }) => {
  const { anger_curve, anxiety_curve, dates, happiness_curve, sadness_curve } = jsonData;

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Anger',
        data: anger_curve,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Anxiety',
        data: anxiety_curve,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Happiness',
        data: happiness_curve,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'Sadness',
        data: sadness_curve,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1>API Response</h1>
      <div>
        <h2>Emotion Curves</h2>
        <Bar
          data={data}
          width={400}
          height={200}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await axios.get(
      'https://flask-production-b246.up.railway.app/entry?email=user1@example.com&date=2023-07-01&content=July%201,%202023%0A%0ADear%20Diary,%0A%0AToday%20marks%20the%20end%20of%20an%20eventful%20chapter%20in%20my%20life.%20The%20summer%20break%20has%20begun,%20and%20I%20find%20myself%20reflecting%20on%20the%20ups%20and%20downs%20of%20the%20past%20month.%20It%27s%20been%20a%20rollercoaster%20ride%20of%20emotions,%20challenges,%20and%20growth,%20but%20I%27m%20grateful%20for%20the%20lessons%20I%27ve%20learned%20and%20the%20stronger%20bonds%20that%20have%20emerged.%0A%0AOver%20the%20past%20few%20days,%20Sarah,%20Jane,%20and%20I%20have%20spent%20even%20more%20time%20together,%20making%20the%20most%20of%20our%20newfound%20harmony.%20We%27ve%20embarked%20on%20adventures,%20explored%20new%20hobbies,%20and%20simply%20enjoyed%20each%20other%27s%20company.%20It%27s%20incredible%20how%20much%20laughter%20and%20joy%20can%20fill%20our%20lives%20when%20we%20let%20go%20of%20misunderstandings%20and%20embrace%20the%20love%20and%20support%20of%20true%20friendship.%0A%0AAs%20we%20look%20ahead%20to%20the%20summer%20break,%20we%27ve%20made%20plans%20for%20travel%20and%20exploration.%20It%27s%20a%20chance%20to%20create%20lasting%20memories%20and%20strengthen%20our%20connection%20even%20further.%20We%27re%20all%20eager%20to%20make%20the%20most%20of%20this%20time%20and%20seize%20the%20opportunities%20that%20come%20our%20way.%0A%0AIn%20terms%20of%20my%20personal%20growth,%20I%27ve%20realized%20the%20importance%20of%20effective%20communication,%20empathy,%20and%20being%20present%20for%20my%20friends.%20The%20challenges%20we%20faced%20forced%20me%20to%20confront%20my%20own%20shortcomings%20and%20reevaluate%20my%20actions.%20I%27ve%20become%20more%20mindful%20of%20the%20impact%20my%20words%20and%20actions%20have%20on%20others,%20and%20I%27m%20committed%20to%20being%20a%20better%20friend%20going%20forward.%0A%0AAcademically,%20I%27m%20proud%20of%20the%20progress%20I%27ve%20made.%20My%20dedication%20to%20my%20studies%20has%20paid%20off,%20and%20I%27ve%20achieved%20improved%20grades%20and%20a%20greater%20sense%20of%20confidence%20in%20my%20abilities.%20I%27ll%20continue%20to%20strive%20for%20excellence,%20knowing%20that%20education%20is%20a%20valuable%20tool%20for%20my%20future%20endeavors.%0A%0AAs%20I%20conclude%20this%20diary%20entry,%20I%27m%20filled%20with%20gratitude%20for%20the%20resilience%20and%20endurance%20of%20true%20friendship.%20Our%20journey%20wasn%27t%20easy,%20but%20it%20taught%20me%20the%20importance%20of%20patience,%20forgiveness,%20and%20the%20power%20of%20second%20chances.%20I%27m%20excited%20about%20the%20adventures%20and%20memories%20that%20lie%20ahead%20this%20summer%20and%20beyond.%0A%0AWith%20a%20heart%20full%20of%20joy%20and%20anticipation,%0A%0AKate');

    const jsonData: JsonData = response.data;

    return {
      props: {
        jsonData,
      },
    };
  } catch (error) {
    console.error('Error fetching JSON data:', error);
    return {
      props: {
        jsonData: null,
      },
    };
  }
}

export default Home;

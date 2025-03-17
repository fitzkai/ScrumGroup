import { FeatureLink } from './components/FeatureLink';
import InputDesign from './components/InputDesign';


function ReligionPage() {
  return (
    <>
      <FeatureLink
        title={'World Religions'}
        religionName={''}
        featureType={'study'}/>
      <InputDesign />
    </>
  );
}

export default ReligionPage;

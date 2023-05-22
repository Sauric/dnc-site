import useFetch from '../../useFetch';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import GelLogo from '../../../Images/gel.svg'
import UsdLogo from '../../../Images/usd.svg';
import RurLogo from '../../../Images/rur.svg';
import ExchangeGrid from '../ExchangeGrid';

const KoronaCurrencyGrid: React.FC = () => {
  const { data, isPending } = useFetch({url: 'http://129.159.131.73:5000/exchanges/korona', fetchName: 'Load rico currencies', retries: 3});

  return (
    <ExchangeGrid 
      header='Korona pay' 
      columns={['', 'Buy', 'Fee']} 
      isPending={isPending} 
      rows={[
          { logo: UsdLogo,  buy: data?.usd?.sellVal, sell: '0.0 %'},
          { logo: GelLogo, buy: data?.gel?.sellVal, sell: '0.0 %'},
          { logo: RurLogo,  buy: '0.0', sell: '0.9 %'},
      ]} 
    />
  );
};

export default KoronaCurrencyGrid;

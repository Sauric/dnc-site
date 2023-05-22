import useFetch from '../../useFetch';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import EuroLogo from '../../../Images/eur.svg'
import UsdLogo from '../../../Images/usd.svg';
import RurLogo from '../../../Images/rur.svg';
import ExchangeGrid from '../ExchangeGrid';

const RicoCurrencyGrid: React.FC = () => {
  const { data, isPending } = useFetch({
    url: 'http://129.159.131.73:5000/exchanges/rico', 
    fetchName: 'Load rico currencies', 
    retries: 3});

  return (
    <ExchangeGrid 
      header='Rico bank' 
      columns={['', 'Buy', 'Sell']} 
      isPending={isPending} 
      rows={[
          { logo: UsdLogo,  buy: data?.usd?.buyVal, sell: data?.usd?.sellVal},
          { logo: EuroLogo, buy: data?.eur?.buyVal, sell: data?.eur?.sellVal},
          { logo: RurLogo,  buy: data?.rur?.buyVal, sell: data?.rur?.sellVal},
      ]} 
    />
  );
};

export default RicoCurrencyGrid;

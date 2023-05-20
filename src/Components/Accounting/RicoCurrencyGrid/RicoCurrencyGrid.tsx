import useFetch from '../../useFetch';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import EuroLogo from '../../../Images/eur.svg'
import UsdLogo from '../../../Images/usd.svg';
import RurLogo from '../../../Images/rur.svg';

const RicoCurrencyGrid: React.FC = () => {
  const { data, isPending } = useFetch({url: 'http://129.159.131.73:5000/exchanges/rico', fetchName: 'Load rico currencies', retries: 3});

  return (
    <div className='exchange-container'>
      <SkeletonTheme
        baseColor="#5294e0"
        highlightColor="#96c7ff"
        borderRadius="0.5rem"
        duration={1}
      >
        <h2 className='exchange-table-name'> Rico bank </h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Buy</th>
              <th>Sell</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src={UsdLogo} alt='' className='currency-logo'/></td>
              <td>{isPending ? <Skeleton/> : data.usd.buyVal}</td>
              <td>{isPending ? <Skeleton/> :  data.usd.sellVal}</td>
            </tr>
            <tr>
              <td><img src={EuroLogo} alt='' className='currency-logo'/></td>
              <td>{isPending ? <Skeleton/> :  data.eur.buyVal}</td>
              <td>{isPending ? <Skeleton/> :  data.eur.sellVal}</td>
            </tr>
            <tr>
              <td><img src={RurLogo} alt='' className='currency-logo'/></td>
              <td>{isPending ? <Skeleton/> :  data.rur.buyVal}</td>
              <td>{isPending ? <Skeleton/> :  data.rur.sellVal}</td>
            </tr>
          </tbody>
        </table>
      </SkeletonTheme>
    </div>
  );
};

export default RicoCurrencyGrid;

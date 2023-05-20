import useFetch from '../../useFetch';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import GelLogo from '../../../Images/gel.svg'
import UsdLogo from '../../../Images/usd.svg';
import RurLogo from '../../../Images/rur.svg';

const KoronaCurrencyGrid: React.FC = () => {
  const { data, isPending } = useFetch({url: 'http://129.159.131.73:5000/exchanges/korona', fetchName: 'Load rico currencies', retries: 3});

  return (
    <div className='exchange-container'>
      <SkeletonTheme
        baseColor="#5294e0"
        highlightColor="#96c7ff"
        borderRadius="0.5rem"
        duration={1}
      >
        <h2 className='exchange-table-name'> Korona pay </h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Sell</th>
              <th>Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src={UsdLogo} alt='' className='currency-logo'/></td>
              <td>{isPending ? <Skeleton/> :  data.usd.sellVal}</td>
              <td>{isPending ? <Skeleton/> :  '0.0 %'}</td>
            </tr>
            <tr>
              <td><img src={GelLogo} alt='' className='currency-logo'/></td>
              <td>{isPending ? <Skeleton/> :  data.gel.sellVal}</td>
              <td>{isPending ? <Skeleton/> :  '0.0 %'}</td>
            </tr>
            <tr>
              <td><img src={RurLogo} alt='' className='currency-logo'/></td>
              <td>{isPending ? <Skeleton/> :  data.gel.buyVal}</td>
              <td>{isPending ? <Skeleton/> :  '0.9 %'}</td>
            </tr>
          </tbody>
        </table>
      </SkeletonTheme>
    </div>
  );
};

export default KoronaCurrencyGrid;

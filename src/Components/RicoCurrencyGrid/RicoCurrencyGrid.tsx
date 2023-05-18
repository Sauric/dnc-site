import useFetch from '../useFetch';
import Skeleton from 'react-loading-skeleton';
import EuroLogo from '../../Images/eur.svg';
import UsdLogo from '../../Images/usd.svg';
import RurLogo from '../../Images/rur.svg';
import './RicoCurrencyGrid.css'

const RicoCurrencyGrid: React.FC = () => {
  const { data, isPending } = useFetch({url: 'http://129.159.131.73:5000/rico', fetchName: 'Load rico currencies', retries: 3});

  return (
    <div>
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
            <td>{isPending && <Skeleton />}{!isPending && data.usd.buy.toFixed(4)}</td>
            <td>{isPending && <Skeleton />}{!isPending && data.usd.sell.toFixed(4)}</td>
          </tr>
          <tr>
            <td><img src={EuroLogo} alt='' className='currency-logo'/></td>
            <td>{isPending && <Skeleton />}{!isPending && data.eur.buy.toFixed(4)}</td>
            <td>{isPending && <Skeleton />}{!isPending && data.eur.sell.toFixed(4)}</td>
          </tr>
          <tr>
            <td><img src={RurLogo} alt='' className='currency-logo'/></td>
            <td>{isPending && <Skeleton />}{!isPending && data.rur.buy.toFixed(4)}</td>
            <td>{isPending && <Skeleton />}{!isPending && data.rur.sell.toFixed(4)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RicoCurrencyGrid;

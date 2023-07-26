import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

type ExchangeGridProps = {
    header: string;
    columns: string[];
    isPending: boolean;
    rows: Row[];
}

export type Row = {
    logo: string;
    buy: any;
    sell: any;
}

const ExchangeGrid: React.FC<ExchangeGridProps> = (props: ExchangeGridProps) => {
  return (
    <div className='exchange-container'>
      <SkeletonTheme
        baseColor="#5294e0"
        highlightColor="#96c7ff"
        borderRadius="0.5rem"
        duration={1}
      >
        <h2 className='exchange-table-name'>{props.header}</h2>
        <table className='exchange-table'>
          <thead>
            <tr>
              <th className='logo-cell'>{props.columns[0]}</th>
              <th className='buy-cell'>{props.columns[1]}</th>
              <th className='sell-cell'>{props.columns[2]}</th>
            </tr>
          </thead>
          <tbody>
            {props.rows.map((r, i) => (
                <tr key={i}>
                    <td className='logo-cell'><img src={r.logo} alt='' className='currency-logo'/></td>
                    <td className='buy-cell'>{props.isPending ? <Skeleton/> : r.buy}</td>
                    <td className='sell-cell'>{props.isPending ? <Skeleton/> :  r.sell}</td>
                </tr>
            ))}
          </tbody>
        </table>
      </SkeletonTheme>
    </div>
  );
};

export default ExchangeGrid;

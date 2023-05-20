import PurpleBagel from '../../Images/purple-bagel.svg'
import OrangeBagel from '../../Images/orange-bagel.svg'
import './BagelsBackground.css'

const BagelsBackground: React.FC = () => {
    const min = 6;
    const max = 10;
    
    return (
        <div>
            {Array.from(Array(40).keys()).filter((i) => i % 2 == 0).map((i: number) => {
                const purpleDuration = Math.random() * (max - min) + min;
                const orangeDuration = Math.random() * (max - min) + min;

                const purple = {"--x-position": (i * 50) + 'px', "--duration": purpleDuration + "s"} as React.CSSProperties;
                const orange = {"--x-position": ((i + 1) * 50) + 'px', "--duration": orangeDuration+ "s"} as React.CSSProperties;
                return (
                    <div>
                        <img src={PurpleBagel} alt='' className='bagel purple' style={purple}/>
                        <img src={OrangeBagel} alt='' className='bagel orange' style={orange}/>
                    </div>
                )
            })}
        </div>
    )
} 

export default BagelsBackground;
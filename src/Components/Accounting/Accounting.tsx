import React from "react";
import RicoCurrencyGrid from "./RicoCurrencyGrid/RicoCurrencyGrid";
import './Accounting.css'
import KoronaCurrencyGrid from "./KoronaCurrencyGrid/KoronaCurrencyGrid";
import CredoCurrencyGrid from "./CredoCurrencyGrid/CredoCurrencyGrid";

const Accounting: React.FC = () => {
    return (
        <div className='accounting-container'>
            <RicoCurrencyGrid />
            <KoronaCurrencyGrid />
            <CredoCurrencyGrid />
        </div>
    )
}

export default Accounting;  
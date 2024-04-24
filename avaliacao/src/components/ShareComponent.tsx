/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { ShareRequestProps } from "../interfaces/ShareRequestProps";
import { consultaAcaoPorCodigo } from "../services/ShareAPI";

const ShareComponent: React.FC<ShareRequestProps> = ({ symbol }) => {
    const [share, setShareData] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean | null>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
        consultaAcaoPorCodigo (symbol)
        .then((response) => {
          setShareData(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, [symbol]);
    if (loading) return <div> Loading ...</div>;
    if (error) return <div> Error: {error}</div>;
  
    return (
      <>
        <div>
          <img src={share?.logourl} alt={`${symbol}`} width={400} />
          <h1>{share?.shortName}</h1>
          <h2>{share?.longName}</h2>
          <h3>{share?.currency}</h3>
          <h4>{share?.symbol}</h4>
          <h5>{share?.regularMarketTime}</h5>
          <p>
          </p>
        </div>
      </>
    );
  };

  export default ShareComponent;
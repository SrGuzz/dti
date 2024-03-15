import React, { useState } from 'react';
import Logo from '../components/Logo'
import './PetshopCalculator.css'
import Resultado from '../components/Resultado';
import api from "../services/api";
import ReactLoading from 'react-loading';

const PetshopCalculator = () => {
  const [date, setData] = useState('');
  const [cachorrosPequenos, setCachoroPequeno] = useState(0);
  const [cachorrosGrandes, setCachorroGrande] = useState(0);
  const [melhorPetshop, setMelhorPetshop] = useState(null);
  const [precoTotal, setTotalPreco] = useState(null);
  const [loading, setLoading] = useState(false); 

  const mudarData = (event) => {
    setData(event.target.value);
  };

  const mudarCachorroPequeno = (event) => {
    setCachoroPequeno(parseInt(event.target.value));
  };

  const mudarCachorroGrande = (event) => {
    setCachorroGrande(parseInt(event.target.value));
  };

  const calcularPreco = async () => {
    try {
      setLoading(true);
      const response = await api.post('/calcula-petshop', { cachorrosGrandes, cachorrosPequenos, date })
      await new Promise(resolve => setTimeout(resolve, 1500));
      setMelhorPetshop(response.data.petshop);
      setTotalPreco(response.data.preco);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      window.alert(error?.response?.data?.error ?? "Erro ao buscar dados")
    }
  }

  return (
    <>
      {
        loading && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed', // Posicionamento fixo na tela
            top: 0, // Alinha ao topo
            left: 0, // Alinha à esquerda
            width: '100%', // Largura total
            height: '100%', // Altura total
            backgroundColor: 'rgba(0,0,0,0.5)', // Fundo preto com transparência
            zIndex: 1000 // Garante que o loading fique acima de outros elementos
          }}>
            <ReactLoading type='spinningBubbles' height={'20%'} width={'20%'} />
          </div>
        )
      }
      <div class="container">
        <div class="row mb-4">
          <div class="col-lg-5 text-center text-lg-start">
            <div className="logo">
              <Logo/>
            </div>
          </div>
          <div class="col-lg-7 titulo">
            <a href="https://srguzz.github.io/Portifolio/" class="btn btn-dark">Portifolio</a>
          </div>
        </div>
        <h1 class="text-center mb-3">Calculo de Valores</h1>

        <div class="row d-flex justify-content-center ">
          <div className="col-12 pt-3 ps-3 container_form border border-dark border-2">
            <div>
              <label>Cachorros pequenos: <input className="cachorro" type="number" value={cachorrosPequenos} onChange={mudarCachorroPequeno} /></label>
            </div>
            <div>
              <label>Cachorros grandes:    <input className='cachorro' type="number" value={cachorrosGrandes} onChange={mudarCachorroGrande} /></label>
            </div>
            <div>
              <label>Data:ㅤㅤㅤ  ㅤㅤㅤㅤ<input type="date" value={date} onChange={mudarData} /></label>
            </div>
            <div>
              <button class="btn btn-dark mb-3"  onClick={calcularPreco}>Calcular</button>
            </div>
            <div className='mt-5'>
              <Resultado melhorPetshop={melhorPetshop} precoTotal={precoTotal} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetshopCalculator;

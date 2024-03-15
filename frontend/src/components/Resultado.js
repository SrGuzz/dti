import React from 'react';

function Resultado({ melhorPetshop, precoTotal }) {
  return (
    <>
      {melhorPetshop && precoTotal && (
        <div>
          <h5>Melhor Petshop: {melhorPetshop.name}</h5>
          <h5>Preço Total: R${precoTotal}</h5>
        </div>
      )}
    </>
  );
}

export default Resultado;
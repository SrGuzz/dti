const calcularPreco = (cachorrosGrandes, cachorrosPequenos, date) => {
    const diaDaSemana = new Date(date).getDay();

    const petshops = [
        { name: "Meu Canino Feliz", distancia: 2000, cachorroPequenoPreco: 20, cachorroGrandePreco: 40, multiplicadorPrecoFimDeSemana: 0.2 },
        { name: "Vai Rex", distancia: 1700, cachorroPequenoPreco: 15, cachorroGrandePreco: 50, multiplicadorPrecoFimDeSemana: 0.1 },
        { name: "ChowChawgas", distancia: 800, cachorroPequenoPreco: 30, cachorroGrandePreco: 45, multiplicadorPrecoFimDeSemana: 0 },
    ];

    let melhorPetshop = null;
    let precoMinimo = Infinity;

    petshops.forEach(petshop => {
        const basePrecoPequeno = diaDaSemana >= 1 && diaDaSemana <= 5 ? petshop.cachorroPequenoPreco : petshop.cachorroPequenoPreco * (1 + petshop.multiplicadorPrecoFimDeSemana);
        const basePrecoGrande = diaDaSemana >= 1 && diaDaSemana <= 5 ? petshop.cachorroGrandePreco : petshop.cachorroGrandePreco * (1 + petshop.multiplicadorPrecoFimDeSemana);
        const precoTotal = cachorrosPequenos * basePrecoPequeno + cachorrosGrandes * basePrecoGrande;

        if (precoTotal < precoMinimo || (precoTotal === precoMinimo && petshop.distancia < melhorPetshop.distancia)) {
            precoMinimo = precoTotal;
            melhorPetshop = petshop;
        }
    });

    return {
        petshop: {
            name: melhorPetshop.name,
            distancia: melhorPetshop.distancia,
        },
        preco: precoMinimo,
    }
};

module.exports = { calcularPreco };
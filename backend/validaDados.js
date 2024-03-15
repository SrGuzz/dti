const validaDados = (cachorrosGrandes, cachorrosPequenos, date) => {
    if (cachorrosGrandes < 0 || cachorrosPequenos < 0) {
        return false;
    }

    if (cachorrosGrandes === 0 && cachorrosPequenos === 0) {
        return false;
    }

    if (!date || !Date.parse(date)) {
        return false;
    }

    return true;
}

module.exports = { validaDados };
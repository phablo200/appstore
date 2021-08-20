export const loadState = () => {
    try {  
        const savedInLocal = localStorage.getItem('list');
        if (!savedInLocal) return undefined;
        return JSON.parse(savedInLocal);
    } catch (err) {
        console.log('Não foi possível recuperar o estado.');
    }
};

export const saveState = (state) => {
    try {
        const savingInLocal = JSON.stringify(state);
        localStorage.setItem('list', savingInLocal);
    } catch (err) {
        console.log('Não foi possível salvar o estado', err);
    }
};


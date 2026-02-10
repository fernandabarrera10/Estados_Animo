const MoodEnum = {
    "Muy Triste": 1,
    "Triste": 3,
    "Neutral": 5,
    "Feliz": 7,
    "Muy Feliz": 9
};

// Función para normalizar el estado de ánimo a una escala de 1 a 10
function normalizeMood(mood) {
    const baseValue = MoodEnum[mood];
    if (baseValue === undefined) return null;
    // Normalización simple: escalar a 1-10 (aquí solo se usa el valor base, pero podrías agregar lógica compleja)
    return baseValue;
}

// Event listener para el botón
document.getElementById('normalizeBtn').addEventListener('click', function() {
    const selectedMood = document.getElementById('moodSelector').value;
    const resultDiv = document.getElementById('result');
    
    if (!selectedMood) {
        resultDiv.textContent = "Por favor, selecciona un estado de ánimo.";
        return;
    }
    
    const normalizedValue = normalizeMood(selectedMood);
    resultDiv.textContent = `Estado: ${selectedMood} | Valor Normalizado: ${normalizedValue}/10`;
});

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from the form fields
    const diagnosis = document.getElementById('diagnosis').value;
    const symptoms = document.getElementById('symptoms').value;
    const treatment = document.getElementById('treatment').value;
    const additionalInfo = document.getElementById('additional-info').value;

    const promptElem = document.getElementById('promptElem');
    const promptContent = `Ты врач-психиатр. У тебя на приеме был пациент с жалобами на ${symptoms} ты выставил ему диагноз ${diagnosis} и назначил ${treatment}\nНапиши: 1. обоснование диагноза ${diagnosis} а основании жалоб ${symptoms} согласно МКБ-10\n2. Обоснование назначенной терапии: ${treatment} согласно федеральным клиническим рекомендациям.\n${additionalInfo}\nОбоснования должны быть написаны сухим медицинским языком для медицинской карты, характерным для врача-психиатра\nКаждое обоснование с новой строки`
    const promptP = document.getElementById("promptText");
    promptP.innerText = promptContent
    // promptElem.appendChild(promptDiv)

    // Log the data to the console
    console.log('Diagnosis:', diagnosis);
    console.log('Symptoms:', symptoms);
    console.log('Treatment:', treatment);
    console.log('Additional Information:', additionalInfo);
}

// Attach the handleSubmit function to the form's submit event
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
});
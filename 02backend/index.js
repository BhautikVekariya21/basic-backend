import express from "express";

const app = express();

app.get('/api/countries', (req, res) => {
    console.log('Received a request for countries'); // Log request receipt
    const countries = [
        { rank: 1, name: "Germany", description: "Germany has the largest economy in Europe, known for its automotive and manufacturing industries." },
        { rank: 2, name: "France", description: "France has a diverse economy, strong in aerospace, energy, and agriculture sectors." },
        { rank: 3, name: "Italy", description: "Italy's economy is driven by manufacturing, fashion, and a world-renowned food industry." },
        { rank: 4, name: "Spain", description: "Spain has a growing economy with strong tourism, manufacturing, and agriculture sectors." },
        { rank: 5, name: "Netherlands", description: "The Netherlands is a hub for international trade, with a strong emphasis on agriculture and technology." },
        { rank: 6, name: "Sweden", description: "Sweden's economy is known for its high-tech and industrial sectors, alongside a strong welfare system." },
        { rank: 7, name: "Poland", description: "Poland has a fast-growing economy, with strengths in manufacturing and information technology." },
        { rank: 8, name: "Belgium", description: "Belgium is a trade and financial hub, with a highly developed transport and industrial sector." },
        { rank: 9, name: "Austria", description: "Austria has a stable and well-developed economy, particularly strong in manufacturing and services." },
        { rank: 10, name: "Ireland", description: "Ireland has a dynamic, export-driven economy with a strong presence of tech and pharmaceutical companies." }
    ];

    console.log('Sending countries data'); // Log data being sent
    res.send(countries);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(5173, () => {
    console.log("Server is running on port 5173");
});

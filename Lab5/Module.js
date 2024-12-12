const module = {
    id: 1, 
    name: "First Module",
    description: "This is the first module of the aerodynamics course",
    course: "Aerodynamics 1"
}

export default function Module(app) {
    app.get("/module", (req, res) => {
        res.json(module);
    });
}


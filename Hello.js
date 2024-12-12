export default function hello(app) {
    app.get('/hello', (req, res) => {res.send('Hello World!')})
}

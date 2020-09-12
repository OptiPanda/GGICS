export default class GameController {

    public newGame = (req, res) => {
        res.render('game/new');
    }

    public joinGame = (req, res) => {
        res.render('game/join');
    }
}
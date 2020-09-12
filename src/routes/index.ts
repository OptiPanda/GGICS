import express from "express";
import IndexController from "../controllers/IndexController";
import GameController from "../controllers/GameController";

const indexController = new IndexController();
const gameController = new GameController();

const router = express.Router();

router.get('/', indexController.index);

router.get('/game/new', gameController.newGame);
router.get('/game/join', gameController.joinGame);
router.get('/game/:id', gameController.game);

export default router;
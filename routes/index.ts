import express from "express";
import IndexController from "../controllers/indexController";
import GameController from "../controllers/gameController";

const indexController = new IndexController();
const gameController = new GameController();

const router = express.Router();

router.get('/', indexController.index);

router.get('/game/new', gameController.newGame);
router.get('/game/join', gameController.joinGame);

export default router;
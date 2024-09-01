import { celebrate, Joi } from 'celebrate';
import { Router } from 'express';
import {
  addCardLike,
  createCard,
  deleteCard,
  deleteCardLike,
  getCards,
} from '../controllers/cards';

const router = Router();

router.get('/', getCards);

router.post(
  '/',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      link: Joi.string().required().uri(),
    }),
  }),
  createCard
);

router.delete(
  '/:cardId',
  celebrate({ params: Joi.object().keys({ cardId: Joi.string().length(24).hex() }) }),
  deleteCard
);

router.put(
  '/:cardId/likes',
  celebrate({ params: Joi.object().keys({ cardId: Joi.string().length(24).hex() }) }),
  addCardLike
);

router.delete(
  '/:cardId/likes',
  celebrate({ params: Joi.object().keys({ cardId: Joi.string().length(24).hex() }) }),
  deleteCardLike
);

export default router;

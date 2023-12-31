"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const cow_controllar_1 = require("./cow.controllar");
const cow_validation_1 = require("./cow.validation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(cow_validation_1.cowValidation.createCowZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SELLER), cow_controllar_1.cowController.createCow);
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SELLER, user_1.ENUM_USER_ROLE.BUYER, user_1.ENUM_USER_ROLE.ADMIN), cow_controllar_1.cowController.getCows);
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SELLER, user_1.ENUM_USER_ROLE.BUYER, user_1.ENUM_USER_ROLE.ADMIN), cow_controllar_1.cowController.getSingleCow);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SELLER), cow_controllar_1.cowController.updateSingleCow);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SELLER), cow_controllar_1.cowController.deleteCow);
exports.CowRouter = router;

import { Router } from 'express';
import { deleteParameter, getAllParameters, insertParameter, updateParameter } from '../services/params_services'

const router = Router();
/**
 * @swagger
 * /parameter/getAllparameters:
 *   get:
 *     summary: Get a list of parameters
 *     description: Retrieve a list of parameters from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of parameters.
 */
router.get('/getAllparameters', async (req, res) => {
    const parameters = await getAllParameters();
    res.send(parameters);
});

/**
 * @swagger
 * /parameter/addNewParameter:
 *   post:
 *     summary: Creates a new parameters
 *     description: The parameter to create. 
 *     content:
 *        application/json: 
 *     parameters:
 *      - in: body
 *        name: parameter
 *        description: The parameter to create.
 *        schema:
 *          type: object
 *          required:
 *            - name
 *          properties:
 *            name:
 *              type: string
 *            code:
 *              type: string
 *     responses:
 *       201:
 *         description: Successful create a list of parameters.
 */
router.post('/addNewParameter', async (req, res, next) => {
    await insertParameter(req.body.name, req.body.code);
    res.send("200");
});

/**
 * @swagger
 * /parameter/updateParameter:
 *   put:
 *     summary: Creates a new parameters
 *     description: The parameter to create. 
 *     content:
 *        application/json: 
 *     parameters:
 *      - in: body
 *        name: parameter
 *        description: The parameter to create.
 *        schema:
 *          type: object
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *            name:
 *              type: string
 *            code:
 *              type: string
 *     responses:
 *       201:
 *         description: Successful create a list of parameters.
 */
router.put('/updateParameter', async (req, res, next) => {
    await updateParameter(req.body);
    res.send("200");
});

/**
 * @swagger
 * /parameter/deleteParameter/:id:
 *   delete:
 *     summary: Creates a new parameters
 *     description: The parameter to create. 
 *     responses:
 *       201:
 *         description: Successful create a list of parameters.
 */
router.delete('/deleteParameter/:id', async (req, res, next) => {
    const paramId = req.params.id;
    await deleteParameter(paramId);
    res.send("200");
});

export default router;
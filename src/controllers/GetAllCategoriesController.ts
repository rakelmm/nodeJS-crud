import { Request, Response } from "express";
import { GetAllCategoriesSevice } from "../services/getAllCategoriesSevice";

export class GetAllCategoriesController {
    async handle(request: Request, response: Response) {
        const service = new GetAllCategoriesSevice();

        const categories = await service.execute();

        return response.json(categories);
    }
}
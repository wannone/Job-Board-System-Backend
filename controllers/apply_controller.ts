import { Request, Response, NextFunction } from 'express';
import { ApplyService } from '../service/apply-service';

export class ApplyController {
    static async get(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await ApplyService.get(req.user.id, req.user.role);
            res.status(200).send(response);
        } catch (error) {
            next(error);
        }
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await ApplyService.create(Number(req.params.id), req.user.id);
            res.status(200).send(response);
        } catch (error) {
            next(error);
        }
    }

    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await ApplyService.delete(Number(req.params.id), req.user.id);
            res.status(200).send(response);
        } catch (error) {
            next(error);
        }
    }
}
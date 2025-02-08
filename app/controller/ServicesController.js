
import * as Services from '../services/ServicesServcice.js';

export const CreateService = async (req, res) => {
    let result = await Services.CreateService(req);
    res.status(result.status).json(result);
}

export const GetAllServices = async (req, res) => {
    let result = await Services.GetAllServices(req);
    res.status(result.status).json(result);
}

export const DeleteService = async (req, res) => {
    let result = await Services.DeleteService(req);
    res.status(result.status).json(result);
}


export const UpdateService = async (req, res) => {
    let result = await Services.UpdateService(req);
    res.status(result.status).json(result);
}
